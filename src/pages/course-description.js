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
    font-size: 130%;
    margin-bottom: 20px;
  }
  `;

const WorldviewContainer = styled.div`
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
        textItems = ['คำอธิบายเกี่ยวกับ "โลกทัศน์คริสเตียน"',
                     'หากคุณต้องการติดต่อเราโปรดใช้ข้อมูลด้านล่างนี้'];
        explanationOne = data.allContentfulChristianWorldviewExplanationOneThaiTextNode.edges[0].node.explanationOneThai;
        explanationTwo = data.allContentfulChristianWorldviewExplanationTwoThaiTextNode.edges[0].node.explanationTwoThai;
        explanationThree = data.allContentfulChristianWorldviewExplanationThreeThaiTextNode.edges[0].node.explanationThreeThai;
      } else {
        textItems = ['Explanation of the "Christian Worldview"',
                     'If you would like to contact us, please use the information below.'];
        explanationOne = data.allContentfulChristianWorldviewExplanationOneTextNode.edges[0].node.explanationOne;
        explanationTwo = data.allContentfulChristianWorldviewExplanationTwoTextNode.edges[0].node.explanationTwo;
        explanationThree = data.allContentfulChristianWorldviewExplanationThreeTextNode.edges[0].node.explanationThree;
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
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={data.christianWorldview1Img.sizes}
              />
            </Col>
            <Col md="4">
              <WorldviewContainer>
                <ParagraphContainer>{explanationOne}</ParagraphContainer>
                <ParagraphContainer>{explanationTwo}</ParagraphContainer>
                <ParagraphContainer>{explanationThree}</ParagraphContainer>
              </WorldviewContainer>
            </Col>
            <Col md="4">
              <Img
                alt="Bottom picture"
                className={styles.avatar}
                sizes={data.christianWorldview2Img.sizes}
              />
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

export const christianWorldviewQuery = graphql`
  query CourseDescription {

    christianWorldview1Img: imageSharp(id: { regex: "/christian-worldview1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    christianWorldview2Img: imageSharp(id: { regex: "/christian-worldview2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    topImage: imageSharp(id: { regex: "/Top-front/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulChristianWorldviewExplanationOneTextNode {
      edges {
        node {
          explanationOne
        }
      }
    }
    allContentfulChristianWorldviewExplanationTwoTextNode {
      edges {
        node {
          explanationTwo
        }
      }
    }
    allContentfulChristianWorldviewExplanationThreeTextNode {
      edges {
        node {
          explanationThree
        }
      }
    }

    allContentfulChristianWorldviewExplanationOneThaiTextNode {
      edges {
        node {
          explanationOneThai
        }
      }
    }
    allContentfulChristianWorldviewExplanationTwoThaiTextNode {
      edges {
        node {
          explanationTwoThai
        }
      }
    }
    allContentfulChristianWorldviewExplanationThreeThaiTextNode {
      edges {
        node {
          explanationThreeThai
        }
      }
    }

  }
`
