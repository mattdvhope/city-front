import React, { Component } from 'react';
import Link from 'gatsby-link';
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
                     'หากคุณต้องการติดต่อเราโปรดใช้ข้อมูลด้านล่างนี้',
                     'https://scdn.line-apps.com/n/line_add_friends/btn/th.png',
                     'พัฒนาทักษะการฟังของคุณโดยการชมวีดีโอจากเรา'];
      } else {
        textItems = ['Thank you for registering with the City English Project!',
                     'If you would like to contact us, please use the information below.',
                     'https://scdn.line-apps.com/n/line_add_friends/btn/en.png',
                     'Improve your listening skills by watching our videos.'];
      }

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(this.state.window.navigator.userAgent);

      var facebookLink;
      var instagramLink;
      if (isMobile) {
        facebookLink = "fb://page/?id=1745393602361714";
        instagramLink = "instagram://user?username=cityenglishproject&hl=en";
      } else {
        facebookLink = "https://www.facebook.com/pg/cityenglishproject/";
        instagramLink = "https://www.instagram.com/cityenglishproject/?hl=en";
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
                <p></p>
              </TrainingContainer>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <p className="text-center" style={{padding: `10px`}}><a href="https://line.me/R/ti/p/%40cityenglishproject"><img height="36" border="0" alt="เพิ่มเพื่อน" src={textItems[2]} /></a></p>
            </Col>
            <Col xs="6">
              <p className="text-center" style={{padding: `10px`}}><a href={facebookLink}><img height="36" width="116" border="0" alt="เพิ่มเพื่อน" src="https://duckduckgo.com/i/8fef8f06.png" /></a></p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p className="text-center"><a href={instagramLink}><img height="60" width="60" border="0" alt="เพิ่มเพื่อน" src="https://duckduckgo.com/i/180c8ad1.png" /></a></p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p className="text-center"><Button><Link to="/english-practice" style={{color: `white`}}>{textItems[3]}</Link></Button></p>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <span />
    }
  }
}


