import React from "react";
import axios from 'axios'
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import ModalMdb from './ModalMdb';

const TrainingContainer = styled.div`
  margin-bottom: 40px;
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";

  @media (min-width: 990px) {
    padding-top: 40px;
  }
  @media (max-width: 990px) {
    padding-top: 15px;
  }
  @media (max-width: 480px) {
    padding-top: 10px;
  }
  @media (max-width: 430px) {
    padding-top: 8px;
  }
  @media (max-width: 375px) {
    padding-top: 5px;
  }
`

const TitleText = styled.p`
  @media (min-width: 1180px) {
    font-size: 470%;
  }
  @media (max-width: 1180px) {
    font-size: 460%;
  }
  @media (max-width: 1100px) {
    font-size: 450%;
  }
  @media (max-width: 990px) {
    font-size: 440%;
  }
  @media (max-width: 767px) {
    font-size: 400%;
  }
  @media (max-width: 600px) {
    font-size: 370%;
  }
  @media (max-width: 480px) {
    font-size: 320%;
  }
  @media (max-width: 430px) {
    font-size: 270%;
  }
  @media (max-width: 375px) {
    font-size: 220%;
  }
  @media (max-width: 330px) {
    font-size: 200%;
  }
`

const SubtitleText = styled.p`
  margin-top: -1em;
  margin-bottom: -0.3em;
  @media (min-width: 1180px) {
    font-size: 170%;
  }
  @media (max-width: 1180px) {
    font-size: 160%;
  }
  @media (max-width: 1100px) {
    font-size: 150%;
  }
  @media (max-width: 990px) {
    font-size: 140%;
  }
  @media (max-width: 767px) {
    font-size: 100%;
  }
`

const NoBulletsInList = styled.ul`
  list-style: none;
  margin-left: -50px;
`

const SpacedListItem = styled.li`
  margin-top: 8px;
  color: #8BC34A;
  margin-bottom: 19px;
  cursor: pointer;
  text-decoration: underline;

  @media (min-width: 1200px) {
    font-size: 330%;
  }
  @media (max-width: 1200px) {
    font-size: 300%;
  }
  @media (max-width: 1180px) {
    font-size: 290%;
  }
  @media (max-width: 1100px) {
    font-size: 220%;
  }
  @media (max-width: 990px) {
    font-size: 200%;
  }
  @media (max-width: 767px) {
    font-size: 160%;
  }
  @media (max-width: 600px) {
    font-size: 150%;
  }
  @media (max-width: 510px) {
    font-size: 135%;
  }
  @media (max-width: 480px) {
    font-size: 120%;
  }
  @media (max-width: 430px) {
    font-size: 100%;
  }
  @media (max-width: 375px) {
    font-size: 90%;
  }
  @media (max-width: 340px) {
    font-size: 110%;
  }
`

export default class Top extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      class_times: [],
      window: undefined
    };
  }

  componentDidMount() {
    axios.get(`${process.env.GATSBY_API_URL}/class_times.json`)
      .then((response) => {
        const class_times = this.filterSortClassTimes(response.data);
        this.setState({ class_times });
      });
    this.setState({ window: window });
  }

  filterSortClassTimes(class_times) {
    var class_times_part_1 = [];
    class_times.forEach(function(class_time) {
      class_time.part === "one" ? class_times_part_1.push(class_time) : null;
    });

    return class_times_part_1.sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  }

  render() {
    let textItems = [];
    let period;
    if (this.state.window) {
      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['ช่วงของการฝึกอบรม',
                     'คลิกที่นี่เพื่อลงทะเบียนเซสชั่น'];
      } else {
        textItems = ['Schedule of training sessions',
                     'click here to register for a session'];
      }

      return (
        <TrainingContainer className="container">
          <TitleText className="text-center">{textItems[0]}</TitleText>
          <SubtitleText className="text-center">({textItems[1]})</SubtitleText>
          <div className="row">
            <div className="col">
              <NoBulletsInList>
                {
                  this.state.class_times.map((e, key) => {
                    language === "thai" ? period = e.period_thai : period = e.period;
                    return  <SpacedListItem className="text-center" key={e.period} value={e.id}>
                              <ModalMdb trainingPeriodId={e.id.toString()} trainingPeriod={period} />
                            </SpacedListItem>;
                  })
                }
              </NoBulletsInList>
            </div>
          </div>
        </TrainingContainer>
      );
    } else {
      return <span />
    }
  }
}