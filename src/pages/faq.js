import React, { Component } from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import QuestionMarks from '../img/question-marks.jpg'
import FaqAccordion from '../components/FaqAccordion'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const TitleStyler = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 200%;
  margin-top: 2%

  @media (min-width: 1400px) {
    margin-bottom: -3%
  }
  @media (max-width: 1400px) {
    margin-bottom: -3%
  }
  @media (max-width: 1000px) {
    margin-bottom: -4%
  }
  @media (max-width: 800px) {
    margin-bottom: -6%
  }
  @media (max-width: 680px) {
    margin-bottom: -7%
  }
  @media (max-width: 590px) {
    margin-bottom: -8%
  }
  @media (max-width: 510px) {
    margin-bottom: -9%
  }
  @media (max-width: 470px) {
    margin-bottom: -10%
  }
  @media (max-width: 430px) {
    margin-bottom: -12%
  }
  @media (max-width: 400px) {
    margin-bottom: -13%
  }
`

export default class Faq extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      window: undefined,
      mdbreact: undefined,
      questionMarks: undefined
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

      const { Container, Row, Col, Input, Button } = this.state.mdbreact;

      const language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['คำถามที่พบบ่อย'];
      } else {
        textItems = ['FAQs'];
      }

      return (
        <div>
          <br/>
          <br/>
          <img src={QuestionMarks} alt="Questions" className="img-fluid" />
          <TitleStyler className="text-center">{textItems[0]}</TitleStyler>

          <FaqAccordion edges={data.allContentfulFaq.edges} />

          <br/>
        </div>
      );
    } else {
      return <span />
    }
  }
}

export const christianWorldviewQuery = graphql`
  query Faq {

    questionMarksImg: imageSharp(id: { regex: "/question-marks/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulFaq {
      edges {
        node {
          faqQuestion
          faqAnswer {
            faqAnswer
          }
          faqQuestionThai
          faqAnswerThai {
            faqAnswerThai
          }
        }
      }
    }

  }
`
