import React from "react";
import styled from "styled-components";
import styles from "../css/top.module.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const TopContainer = styled.div`
  color: #555;
`

const VideoContainer = styled.div`
  @media (min-width: 1435px) {
    margin-top: 14%;
    height: 400px;
    width: 712px;
  }
  @media (max-width: 1435px) {
    margin-top: 14%;
    height: 400px;
    width: 712px;
  }
  @media (max-width: 1199px) {
    margin-top: 16%;
    height: 350px;
    width: 622.2px;
  }
  @media (max-width: 991px) {
    margin-top: 20%;
    margin-left: -20%;
    height: 320px;
    width: 569px;
  }
  @media (max-width: 940px) {
    margin-top: 22%;
    margin-left: -15%;
    height: 300px;
    width: 533.3px;
  }
  @media (max-width: 865px) {
    margin-top: 20%;
    margin-left: -8%;
    height: 280px;
    width: 498px;
  }
  @media (max-width: 795px) {
    margin-left: -2%;
  }
  @media (max-width: 767px) {
    margin-top: 18%;
    margin-left: -20%;
    margin-right: auto;
    height: 400px;
    width: 712px;
  }
  @media (max-width: 745px) {
    margin-left: -11%;
    height: 350px;
    width: 622.2px;
  }
  @media (max-width: 640px) {
    margin-top: 16%;
    margin-left: -6%;
    height: 320px;
    width: 569px;
  }
  @media (max-width: 575px) {
    margin-left: auto;
    height: 300px;
    width: 533.3px;
  }
  @media (max-width: 555px) {
    height: 280px;
    width: 498px;
  }
  @media (max-width: 525px) {
    height: 250px;
    width: 444.4px;
  }
  @media (max-width: 470px) {
    height: 230px;
    width: 409px;
  }
  @media (max-width: 440px) {
    margin-top: 18%;
    height: 210px;
    width: 373.3px;
  }
  @media (max-width: 400px) {
    height: 190px;
    width: 338px;
  }
  @media (max-width: 385px) {
    margin-top: 20%;
    height: 180px;
    width: 320px;
  }
  @media (max-width: 340px) {
    height: 170px;
    width: 302.2px;
  }
  @media (max-width: 320px) {
    margin-left: -2%;
  }
`

const TextContainer = styled.div`
  @media (min-width: 1435px) {
    margin-top: 27%;
    margin-left: 0%;
    margin-right: 5%;
    margin-bottom: 20%;
    font-size: 320%;
  }
  @media (max-width: 1435px) {
    margin-top: 27%;
    margin-left: 0%;
    margin-right: 5%;
    margin-bottom: 20%;
    font-size: 320%;
  }
  @media (max-width: 1199px) {
    margin-top: 30%;
    margin-right: 0%;
    margin-bottom: 15%;
    font-size: 290%;
  }
  @media (max-width: 996px) {
    margin-top: 31%;
    margin-bottom: 16%;
    font-size: 280%;
  }
  @media (max-width: 996px) {
    margin-top: 31%;
  }
  @media (max-width: 991px) {
    margin-top: 41%;
    margin-left: 10%;
    margin-right: -40%;
    margin-bottom: 20%;
    font-size: 260%;
  }
  @media (max-width: 940px) {
    margin-top: 44%;
    margin-left: -1%;
    margin-right: -35%;
    font-size: 250%;
  }
  @media (max-width: 865px) {
    margin-top: 39%;
    margin-left: -2%;
    margin-right: -30%;
    margin-bottom: 15%;
    font-size: 245%;
  }
  @media (max-width: 845px) {
    margin-left: 2%;
    margin-right: -25%;
    font-size: 240%;
  }
  @media (max-width: 795px) {
    margin-top: 40%;
    margin-left: 9%;
    margin-right: -20%;
    margin-bottom: 20%;
    font-size: 230%;
  }
  @media (max-width: 780px) {
    margin-top: 42%;
    margin-left: 7%;
    margin-right: -15%;
    margin-bottom: 25%;
    font-size: 210%;
  }
  @media (max-width: 767px) {
    margin-top: 4%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4%;
    font-size: 250%;
  }
  @media (max-width: 745px) {
    margin-top: 3%;
  }
  @media (max-width: 575px) {
    font-size: 220%;
  }
  @media (max-width: 490px) {
    font-size: 200%;
  }
  @media (max-width: 470px) {
    font-size: 180%;
  }
  @media (max-width: 440px) {
    font-size: 160%;
  }
`

export default class Top extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  render() {
    let textItems = [];
    if (this.state.window) {
      if (this.state.window.localStorage.language === "thai") {
        textItems = ["ชาวอเมริกันที่สอนภาษาอังกฤษและวัฒนธรรมสำหรับคนไทย"];
      } else {
        textItems = ['Americans training Thai people in English and culture'];
      }

      return (
        <TopContainer className="container">
          <div className="row">

            <div className="col-md-8">
              <VideoContainer className="wistia_embed wistia_async_98jbnzwejf" >&nbsp;</VideoContainer>
            </div>

            <div className="col-md-4">
              <TextContainer className="text-center">{textItems[0]}</TextContainer>
            </div>

          </div>
        </TopContainer>
      );
    } else {
      return <span />
    }
  }
}



