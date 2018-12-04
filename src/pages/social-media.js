import React, { Component } from 'react';
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const TrainingContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";

  @media (min-width: 767px) {
    font-size: 200%;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 130%;
    margin-bottom: 20px;
  }
`

export default class SocialMedia extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      window: undefined,
      mdbreact: undefined
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
    if (this.state.window) {
      let textItems;

      const { Container, Row, Col, Input, Button } = this.state.mdbreact;

      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['ขอขอบคุณที่ลงทะเบียนกับโครงการ City English Project!',
                     'หากคุณต้องการติดต่อเราโปรดใช้ข้อมูลด้านล่างนี้'];
      } else {
        textItems = ['Thank you for registering with the City English Project!',
                     'If you would like to contact us, please use the information below.'];
      }

      return (
        <Container>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col md="12">
              <TrainingContainer>
                <p>{textItems[0]}</p>
                <p>{textItems[1]}</p>
                <p><a href="https://line.me/R/ti/p/%40cityenglishproject"><img height="36" border="0" alt="เพิ่มเพื่อน" src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" /></a></p>
              </TrainingContainer>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <span />
    }
  }
}


