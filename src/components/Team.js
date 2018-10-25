import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import styles from "../css/team.module.css";

import CarouselMdb from './CarouselMdb';

var IconStyler = styled.div`
  color: #CECECE;
  font-size: 230%;
  padding-top: 40px;
  @media (min-width: 320px) {
    margin-right: 1.2em;
  }
  @media (max-width: 320px) {
    margin-right: 1em;
  }
`

const TitleText = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  color: #555;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1400px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1400px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1300px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1200px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1180px) {
    font-size: 280%;
    margin-bottom: -40px;
  }
  @media (max-width: 1100px) {
    font-size: 280%;
  }
  @media (max-width: 1000px) {
    font-size: 280%;
  }
  @media (max-width: 991px) {
    font-size: 270%;
  }
  @media (max-width: 900px) {
    font-size: 210%;
  }
  @media (max-width: 800px) {
    font-size: 210%;
  }
  @media (max-width: 767px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 750px) {
    font-size: 210%;
  }
  @media (max-width: 700px) {
    font-size: 210%;
  }
  @media (max-width: 650px) {
    font-size: 210%;
  }
  @media (max-width: 600px) {
    font-size: 210%;
  }
  @media (max-width: 550px) {
    font-size: 210%;
  }
  @media (max-width: 500px) {
    font-size: 210%;
  }
  @media (max-width: 480px) {
    font-size: 210%;
  }
  @media (max-width: 450px) {
    font-size: 210%;
  }
  @media (max-width: 400px) {
    font-size: 205%;
  }
  @media (max-width: 350px) {
    font-size: 200%;
  }
  @media (max-width: 320px) {
    font-size: 180%;
  }
`;

const ContentText = styled.div`
  color: #555;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-top: -1%;
  margin-bottom: 40px;
  @media (min-width: 1430px) {
    font-size: 220%;
  }
  @media (max-width: 1430px) {
    font-size: 220%;
  }
  @media (max-width: 1300px) {
    font-size: 205%;
    margin-top: -2%;
  }
  @media (max-width: 1200px) {
    font-size: 190%;
  }
  @media (max-width: 1180px) {
    font-size: 180%;
    margin-top: 3%;
  }
  @media (max-width: 1140px) {
    font-size: 180%;
  }
  @media (max-width: 1110px) {
    font-size: 180%;
    margin-top: 4%;
  }
  @media (max-width: 1000px) {
    font-size: 170%;
  }
  @media (max-width: 991px) {
    font-size: 160%;
    margin-top: 6%;
  }
  @media (max-width: 900px) {
    font-size: 150%;
  }
  @media (max-width: 850px) {
    font-size: 140%;
    margin-top: 7%;
  }
  @media (max-width: 800px) {
    font-size: 140%;
  }
  @media (max-width: 767px) {
    font-size: 140%;
  }
  @media (max-width: 750px) {
    font-size: 140%;
  }
  @media (max-width: 700px) {
    font-size: 140%;
  }
  @media (max-width: 650px) {
    font-size: 135%;
  }
  @media (max-width: 600px) {
    font-size: 130%;
  }
  @media (max-width: 550px) {
    font-size: 125%;
  }
  @media (max-width: 500px) {
    font-size: 120%;
  }
  @media (max-width: 480px) {
    font-size: 115%;
  }
  @media (max-width: 450px) {
    font-size: 110%;
  }
  @media (max-width: 400px) {
    font-size: 105%;
  }
  @media (max-width: 350px) {
    font-size: 100%;
  }
  @media (max-width: 320px) {
    font-size: 100%;
  }
`;


export default class Team extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    let textItems = [];
    if (this.state.window) {

      const { Row, Col, Input, Button } = this.state.mdbreact;

      let language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['ทีมงานชาวอเมริกันระยะยาวของเรา', 'ผู้สอนที่เป็นอาสาสมัคร'];
      } else {
        textItems = ['Our long-term American team members', 'Volunteer Teachers'];
      }

      return (
        <div className="container-fluid" style={{ backgroundColor: `#F5FBEE`, marginTop: `5%`, paddingLeft: `5%`, paddingRight: `5%`}}>
          <Row>
            <Col md="12">
              <IconStyler className={styles.iconStyles}>
                <div><i className="fa fa-users prefix"></i></div>
                <div>Team</div>
              </IconStyler>
            </Col>
          </Row>

          <Row>
            <TitleText className="text-center">{textItems[0]}</TitleText>
          </Row>
          <br/>
          <Row>
            <Col md="4">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.davidCrookImg.sizes}
              />
            </Col>
            <Col md="8">
              <ContentText>
                {this.props.davidCrook}
              </ContentText>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md="4">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.cheriCrookImg.sizes}
              />
            </Col>
            <Col md="8">
              <ContentText>
                {this.props.cheriCrook}
              </ContentText>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md="4">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.kellyCooperImg.sizes}
              />
            </Col>
            <Col md="8">
              <ContentText>
                {this.props.kellyCooper}
              </ContentText>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md="4">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.kelliJohnsonImg.sizes}
              />
            </Col>
            <Col md="8">
              <ContentText>
                {this.props.kelliJohnson}
              </ContentText>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md="4">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.mattMaloneImg.sizes}
              />
            </Col>
            <Col md="8">
              <ContentText>
                {this.props.mattMalone}
              </ContentText>
            </Col>
          </Row>
          <hr/>
          <br/>
          <Row>
            <TitleText className="text-center">{textItems[1]}</TitleText>
          </Row>
          <Row>
            <Col md="12">
              <ContentText>
                {this.props.volunteerTeachers}
              </ContentText>
            </Col>
          </Row>
          <Row>
            <CarouselMdb
              picture1={this.props.volunteerTeachersImg1.sizes}
              picture2={this.props.volunteerTeachersImg2.sizes}
              picture3={this.props.volunteerTeachersImg3.sizes}
              picture4={this.props.volunteerTeachersImg4.sizes}
            />
          </Row>

          <br/>
          <br/>
        </div>
      );
    } else {
      return <span />
    }
  }
}



