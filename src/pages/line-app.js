import React, { Component } from 'react';
import Img from "gatsby-image";
import styled from "styled-components";
import styles from "../css/lineApp.module.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const LineAppText = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  margin-left: auto;
  margin-right: auto;


  @media (min-width: 767px) {
    font-size: 200%;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 150%;
    margin-bottom: 20px;
  }
  @media (max-width: 360px) {
    font-size: 130%;
    margin-bottom: 20px;
  }
`

export default class LineApp extends React.Component {
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
        textItems = ['กรุณาติดต่อกับเราผ่านทางไลน์...',
                     '@cityenglishproject',
                     '...เพียงคัดลอก วางแล้วค้นหาได้เลย...',
                     '...หรือง่ายๆเพียงสแกนคิวอาร์โค้ดนี้...'];
      } else {
        textItems = ['Please contact us on LINE by copying and pasting this address...',
                     '@cityenglishproject',
                     '...in your LINE app...',
                     '...or please scan this QR code...'];
      }

console.log(this.props.data.lineIcon);

      return (
        <Container>
          <br/>
          <br/>
          <Row>
            <Col md="12">
              <Img
                sizes={this.props.data.lineIcon.sizes}
                className={styles.lineIconImg}
                alt="LINE logo"
              />
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <br/>
              <LineAppText className="text-center">{textItems[0]}</LineAppText>
              <LineAppText className="text-center" style={{ color: `#8BC34A`}}>{textItems[1]}</LineAppText>
              <LineAppText className="text-center">{textItems[2]}</LineAppText>
              <LineAppText className="text-center">{textItems[3]}</LineAppText>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Img
                sizes={this.props.data.lineQr.sizes}
                className={styles.lineQrImg}
                alt="LINE logo"
              />
            </Col>
          </Row>

        </Container>
      );
    } else {
      return <span />
    }
  }
}


export const query = graphql`
  query LineAppQuery {

    lineIcon: imageSharp(id: { regex: "/LINE-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    lineQr: imageSharp(id: { regex: "/@cityenglishproject/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

  }
`


