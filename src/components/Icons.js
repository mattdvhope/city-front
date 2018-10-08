import React, { Component } from 'react';
import styled from "styled-components";
import styles from "../css/icons.module.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

var IconStyler = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  color: #CECECE;
  font-size: 230%;
  @media (min-width: 320px) {
    margin-right: 1.2em;
  }
  @media (max-width: 320px) {
    margin-right: 1em;
  }
`

export default class Icons extends React.Component {
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

      } else {

      }

      return (
        <Container>
          <br/>
          <Row>
            <Col md="4">
              <IconStyler className={styles.avatarHolder}>
                <div><i className="fa fa-map prefix"></i></div>
                <div>About</div>
              </IconStyler>
            </Col>
            <Col md="4">
              <IconStyler className={styles.avatarHolder}>
                <div><i className="fa fa-coffee prefix"></i></div>
                <div>Team</div>
              </IconStyler>
            </Col>
            <Col md="4">
              <IconStyler className={styles.avatarHolder}>
                <div><i className="fa fa-comments prefix"></i></div>
                <div>FAQ</div>
              </IconStyler>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md="4">
              <IconStyler className={styles.avatarHolder}>
                <div><i className="fa fa-picture-o prefix"></i></div>
                <div>Gallery</div>
              </IconStyler>
            </Col>
            <Col md="4">
              <IconStyler className={styles.avatarHolder}>
                <div><i className="fa fa-commenting prefix"></i></div>
                <div>Blog</div>
              </IconStyler>
            </Col>
            <Col md="4">
              <IconStyler className={styles.avatarHolder}>
                <div><i className="fa fa-anchor prefix"></i></div>
                <div>History</div>
              </IconStyler>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
        </Container>
      );
    } else {
      return <span />
    }
  }
}

