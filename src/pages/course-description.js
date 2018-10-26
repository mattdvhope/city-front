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
    font-size: 195%;
    margin-bottom: 20px;
  }
  `;

const FontContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
`

const ParagraphContainer = styled.p`
  font-size: 150%;
`

export default class CourseDescription extends React.Component {
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
      let textItems;
      let explanationOne, explanationTwo, explanationThree, explanationOneThai, explanationTwoThai, explanationThreeThai;

      const { Container, Row, Col, Input, Button } = this.state.mdbreact;

      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['คำอธิบายหลักสูตร'];
        explanationOne = data.allContentfulCourseDescriptionExplanationOneThaiTextNode.edges[0].node.explanationOneThai;
        explanationTwo = data.allContentfulCourseDescriptionExplanationTwoThaiTextNode.edges[0].node.explanationTwoThai;
        explanationThree = data.allContentfulCourseDescriptionExplanationThreeThaiTextNode.edges[0].node.explanationThreeThai;
      } else {
        textItems = ['Course Description'];
        explanationOne = data.allContentfulCourseDescriptionExplanationOneTextNode.edges[0].node.explanationOne;
        explanationTwo = data.allContentfulCourseDescriptionExplanationTwoTextNode.edges[0].node.explanationTwo;
        explanationThree = data.allContentfulCourseDescriptionExplanationThreeTextNode.edges[0].node.explanationThree;
      }

      return (
        <Container>
          <br/>
          <br/>
          <br/>
          <Row>
              <TitleContainer className="text-center">
                <FontContainer>{textItems[0]}</FontContainer>
              </TitleContainer>
          </Row>
          <Row>
            <Col md="4">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/course-description1.jpg" alt=""/>
            </Col>
            <Col md="4">
              <FontContainer>
                <ParagraphContainer>{explanationOne}</ParagraphContainer>
                <ParagraphContainer>{explanationTwo}</ParagraphContainer>
                <img src={data.allContentfulCourseDescription.edges[0].node.courseImage.resolutions.src} alt=""/>
                <ParagraphContainer>{explanationThree}</ParagraphContainer>
              </FontContainer>
            </Col>
            <Col md="4">
              <img className={styles.avatar} src="https://s3-ap-southeast-1.amazonaws.com/cityfront/course-description3.jpg" alt=""/>
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

export const courseDescriptionQuery = graphql`
  query CourseDescription {

    allContentfulCourseDescription {
      edges {
        node {
          courseImage {
            resolutions(width: 240, height: 220) {
              src
              srcSet
            }
          }
        }
      }
    }

    allContentfulCourseDescriptionExplanationOneTextNode {
      edges {
        node {
          explanationOne
        }
      }
    }
    allContentfulCourseDescriptionExplanationTwoTextNode {
      edges {
        node {
          explanationTwo
        }
      }
    }
    allContentfulCourseDescriptionExplanationThreeTextNode {
      edges {
        node {
          explanationThree
        }
      }
    }
  
    allContentfulCourseDescriptionExplanationOneThaiTextNode {
      edges {
        node {
          explanationOneThai
        }
      }
    }
    allContentfulCourseDescriptionExplanationTwoThaiTextNode {
      edges {
        node {
          explanationTwoThai
        }
      }
    }
    allContentfulCourseDescriptionExplanationThreeThaiTextNode {
      edges {
        node {
          explanationThreeThai
        }
      }
    }

  }
`
