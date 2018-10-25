import React, { Component } from 'react';
import styled from "styled-components";
import Img from "gatsby-image";
import styles from "../css/faq.module.css";
import QuestionMarks from '../img/question-marks.jpg'
import FaqAccordion from '../components/FaqAccordion'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const FontContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
`

const QuestionTitleContainer = styled.div`
  font-size: 200%;
`

const AnswerContainer = styled.div`
  font-size: 110%;
  margin-right: 7%;
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
        textItems = ['FAQ\'s'];
      }

      const FaqPost = ({node}) => {
        if (language === "thai") {
          return (
            <li key={node.id} style={{ listStyle: `none`}}>
              <QuestionTitleContainer>{node.faqQuestionThai}</QuestionTitleContainer>
              <AnswerContainer>{node.faqAnswerThai.faqAnswerThai}</AnswerContainer>
              <br/>
            </li>
          )
        } else {
          return (
            <li key={node.id} style={{ listStyle: `none`}}>
              <QuestionTitleContainer>{node.faqQuestion}</QuestionTitleContainer>
              <AnswerContainer>{node.faqAnswer.faqAnswer}</AnswerContainer>
              <br/>
            </li>
          )
        }
      }

      return (
        <div>
          <br/>
          <br/>
          <img src={QuestionMarks} alt="Questions" className="img-fluid" />
          <div className={styles.titleStyle}>{textItems[0]}</div>
          

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
