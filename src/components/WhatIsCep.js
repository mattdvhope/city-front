import React from "react";
import Img from "gatsby-image";
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

const WhatIsCepContainer = styled.div`
  margin-bottom: 50px;
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
    margin-bottom: -40px;
  }
  @media (max-width: 1000px) {
    font-size: 280%;
    margin-bottom: -40px;
  }
  @media (max-width: 990px) {
    font-size: 210%;
    margin-bottom: -40px;
  }
  @media (max-width: 900px) {
    font-size: 210%;
    margin-bottom: -40px;
  }
  @media (max-width: 800px) {
    font-size: 210%;
    margin-bottom: -40px;
  }
  @media (max-width: 767px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 750px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 700px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 650px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 550px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 450px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 400px) {
    font-size: 205%;
    margin-bottom: 0px;
  }
  @media (max-width: 350px) {
    font-size: 200%;
    margin-bottom: 0px;
  }
  @media (max-width: 320px) {
    font-size: 180%;
    margin-bottom: 0px;
  }
`;

const ContentContainer = styled.div`
  color: #555;
  margin-top: -12px;
  margin-right: 3%;
  margin-left: 3%;
`;

const ContentText = styled.p`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 40px;
  @media (min-width: 1400px) {
    font-size: 180%;
  }
  @media (max-width: 1400px) {
    font-size: 180%;
  }
  @media (max-width: 1300px) {
    font-size: 180%;
  }
  @media (max-width: 1200px) {
    font-size: 180%;
  }
  @media (max-width: 1180px) {
    font-size: 180%;
  }
  @media (max-width: 1100px) {
    font-size: 180%;
  }
  @media (max-width: 1000px) {
    font-size: 180%;
  }
  @media (max-width: 990px) {
    font-size: 170%;
  }
  @media (max-width: 900px) {
    font-size: 160%;
  }
  @media (max-width: 800px) {
    font-size: 155%;
  }
  @media (max-width: 767px) {
    font-size: 150%;
  }
  @media (max-width: 750px) {
    font-size: 145%;
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
                     'คลิกที่นี่เพื่อดูคำอธิบายเกี่ยวกับ "โลกทัศน์คริสเตียน"'];
      } else {
        textItems = ['What is the "City English Project?"',
                     'Click here for an explanation of the "Christian Worldview."'];
      }

      return (
        <Container>
          <Row>
            <Col md="12">
              <IconStyler className={styles.avatarHolder}>
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
            <Col>
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.whatIsCepImg1.sizes}
              />
            </Col>
          </Row>
          <br/>
          <Row>
            <ContentContainer>
              <ContentText>
                {this.props.paragraphContent1}
              </ContentText>
            </ContentContainer>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.whatIsCepImg2.sizes}
              />
            </Col>
          </Row>
          <br/>
          <Row>
            <ContentContainer>
              <ContentText>
                {this.props.paragraphContent2} <Link to="christian-worldview"><LinkStyler>{textItems[1]}</LinkStyler></Link>
              </ContentText>
            </ContentContainer>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.whatIsCepImg3.sizes}
              />
            </Col>
          </Row>
          <br/>
          <Row>
            <ContentContainer>
              <ContentText>
                {this.props.paragraphContent3}
              </ContentText>
            </ContentContainer>
          </Row>
        </Container>
      );
    } else {
      return <span />
    }
  }
}



