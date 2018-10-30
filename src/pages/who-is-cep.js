import React, { Component } from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import styles from "../css/christianWorldview.module.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const TitleContainer = styled.div`
  color: #2d3179;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 767px) {
    font-size: 200%;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 160%;
    margin-bottom: 20px;
  }
  `;

const WorldviewContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
`

const ParagraphContainer = styled.p`
  font-size: 120%;
`

export default class WhoIsCep extends React.Component {
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
      const { data } = this.props;
      const node = data.allContentfulWhoIsCep.edges[0].node;
      let textItems;
      let explanationOne, explanationTwo, explanationThree, explanationOneThai, explanationTwoThai, explanationThreeThai;

      const { Container, Row, Col, Input, Button } = this.state.mdbreact;

console.log(data.allContentfulWhoIsCep.edges)

      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['โครงการซิตี้ อิงลิช คืออะไร?'];
        explanationOne = node.explanationOneThai.explanationOneThai;
        explanationTwo = node.explanationTwoThai.explanationTwoThai;
        explanationThree = node.explanationThreeThai.explanationThreeThai;
      } else {
        textItems = ['Who is the City English Project?'];
        explanationOne = node.explanationOne.explanationOne;
        explanationTwo = node.explanationTwo.explanationTwo;
        explanationThree = node.explanationThree.explanationThree;
      }

      return (
        <Container>
          <br/>
          <br/>
          <br/>
          <Row>
              <TitleContainer className="text-center">
                <WorldviewContainer>{textItems[0]}</WorldviewContainer>
              </TitleContainer>
          </Row>
          <Row>
            <Col md="4">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/who-is-cep1.jpg" alt=""/>
            </Col>
            <Col md="4">
              <WorldviewContainer>
                <ParagraphContainer>{explanationOne}</ParagraphContainer>
                <img src={node.photoOne.resolutions.src} alt=""/>
                <br/>
                <br/>

                <ParagraphContainer>{explanationTwo}</ParagraphContainer>
                <img src={node.photoTwo.resolutions.src} alt=""/>
                <br/>
                <br/>

                <ParagraphContainer>{explanationThree}</ParagraphContainer>
              </WorldviewContainer>
            </Col>
            <Col md="4">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/who-is-cep2.jpg" alt=""/>
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

export const whoIsCepQuery = graphql`
  query WhoIsCep {

    allContentfulWhoIsCep {
      edges {
        node {
          explanationOne {
            explanationOne
          }
          explanationTwo {
            explanationTwo
          }
          explanationThree {
            explanationThree
          }
          explanationOneThai {
            explanationOneThai
          }
          explanationTwoThai {
            explanationTwoThai
          }
          explanationThreeThai {
            explanationThreeThai
          }
          photoOne {
            resolutions(width: 300, height: 150) {
              src
              srcSet
            }
          }
          photoTwo {
            resolutions(width: 220, height: 220) {
              src
              srcSet
            }
          }
        }
      }
    }

  }
`
