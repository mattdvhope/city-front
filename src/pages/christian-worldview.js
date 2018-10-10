import React, { Component } from 'react';
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const TitleContainer = styled.div`
  color: #2d3179;
  @media (min-width: 767px) {
    font-size: 200%;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 130%;
    margin-bottom: 20px;
  }
  `;

const WorldviewContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";

`

export default class ChristianWorldview extends React.Component {
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
              <TitleContainer className="text-center">
                Explanation of the "Christian Worldview.
              </TitleContainer>
              <WorldviewContainer>
                Christian worldview explained...
              </WorldviewContainer>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <span />
    }
  }
}


