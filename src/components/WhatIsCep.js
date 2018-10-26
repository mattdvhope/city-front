import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import styles from "../css/whatiscep.module.css";

var IconStyler = styled.div`
  color: #CECECE;
  font-size: 230%;
  @media (min-width: 320px) {
    margin-right: 1.2em;
  }
  @media (max-width: 320px) {
    margin-right: 1em;
  }
`

const TitleContainer = styled.div`
  color: #555;
  margin-right: auto;
  margin-left: auto;
`;

const TitleText = styled.p`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  margin-right: 5px;
  margin-left: 5px;

  @media (min-width: 1430px) {
    font-size: 280%;
    margin-bottom: -6%;
  }
  @media (max-width: 1430px) {
    font-size: 280%;
    margin-bottom: -6%;
  }
  @media (max-width: 991px) {
    font-size: 210%;
  }
  @media (max-width: 767px) {
    font-size: 180%;
    margin-right: -5%;
    margin-left: -5%;
    margin-bottom: -10%;
  }
  @media (max-width: 610px) {
    font-size: 160%;
  }
  @media (max-width: 545px) {
    margin-right: 5%;
    margin-left: 5%;
    font-size: 200%;
  }
  @media (max-width: 480px) {
    margin-bottom: -30px;
  }
  @media (max-width: 400px) {
    font-size: 205%;
  }
  @media (max-width: 375px) {
    font-size: 195%;
  }
  @media (max-width: 360px) {
    font-size: 190%;
  }
  @media (max-width: 340px) {
    font-size: 180%;
  }
  @media (max-width: 320px) {
    font-size: 170%;
  }
`;

const ContentText = styled.div`
  color: #555;
  margin-left: 2%;
  margin-right: 2%;

  @media (min-width: 1430px) {
    font-size: 200%;
    margin-top: 12%;
  }
  @media (max-width: 1430px) {
    font-size: 195%;
    margin-top: 12%;
  }
  @media (max-width: 1199px) {
    font-size: 185%;
    margin-top: 11%;
  }
  @media (max-width: 991px) {
    font-size: 150%;
    margin-top: 10%;
    margin-right: -15%;
  }
  @media (max-width: 840px) {
    font-size: 135%;
    margin-right: -10%;
  }
  @media (max-width: 830px) {
    font-size: 130%;
    margin-right: 0%;
  }
  @media (max-width: 767px) {
    font-size: 150%;
    margin-top: 4%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -5%;
  }
  @media (max-width: 700px) {
    font-size: 140%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 650px) {
    font-size: 135%;
    margin-top: 5%;
  }
  @media (max-width: 600px) {
    font-size: 130%;
    margin-top: 6%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 575px) {
    font-size: 130%;
    margin-left: 5%;
    margin-right: 5%;
  }
  @media (max-width: 480px) {
    font-size: 130%;
  }
  @media (max-width: 450px) {
    font-size: 125%;
  }
  @media (max-width: 400px) {
    font-size: 125%;
  }
  @media (max-width: 350px) {
    font-size: 120%;
  }
`;

const LinkStyler = styled.span`
  color: #8BC34A;
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
    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }
  }

  getPickerValue = (value) => {
    console.log(value);
  }

  render() {
    let textItems = [];
    if (this.state.window) {

      const { Container, Row, Col, Input, Button, MDBDatePicker } = this.state.mdbreact;

      let language = this.state.window.localStorage.language;

      if (language === "thai") {
        textItems = ['โครงการซิตี้ อิงลิช (City English Project) คืออะไร?',
                     'คลิกที่นี่เพื่อดูคำอธิบายเกี่ยวกับ “โลกทัศน์คริสเตียน”'];
      } else {
        textItems = ['What is the "City English Project?"',
                     'Click here for an explanation of the "Christian Worldview."'];
      }

      return (
        <Container>
          <Row>
            <Col md="12">
              <IconStyler className={styles.iconStyles}>
                <div><i className="fa fa-map prefix"></i></div>
                <div>About</div>
              </IconStyler>
            </Col>
          </Row>
          <Row>
            <TitleContainer>
              <TitleText className="text-center">{textItems[0]}</TitleText>
            </TitleContainer>
          </Row>
          <br/>
          <Row>
            <Col md="6">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/WhatIsCep1.jpg" alt=""/>
            </Col>
            <Col md="6">
              <ContentText>
                {this.props.paragraphContent1}
              </ContentText>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md="6">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/WhatIsCep2.jpg" alt=""/>
            </Col>
            <Col md="6">
              <ContentText>
                {this.props.paragraphContent2} <Link to="christian-worldview"><LinkStyler>{textItems[1]}</LinkStyler></Link>
              </ContentText>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col md="6">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/WhatIsCep3.jpg" alt=""/>
            </Col>
            <Col md="6">
              <ContentText>
                {this.props.paragraphContent3}
              </ContentText>
            </Col>
          </Row>
          <br/>
        </Container>
      );
    } else {
      return <span />
    }
  }
}



