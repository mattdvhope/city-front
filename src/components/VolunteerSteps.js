import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Img from "gatsby-image";

import styled from "styled-components";
import styles from "../css/volunteerSteps.module.css";

import ModalVolAppl from './ModalVolAppl'
import ModalAdminAppl from './ModalAdminAppl'
import cityTalkClass from '../img/City-Talk-Class.jpg'
import engConvParnters from '../img/English-Conversation-Partners.jpg'
import convGroups from '../img/Conversation-Groups.jpg'

const VolStepsContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  background-color: #2D3179;
  padding-top: 25px;
  padding-bottom: 60px;
`

const TitleContainer = styled.div`
		margin-bottom: 30px;
		margin-left: auto;
		margin-right: auto;
		color: #fff;
`;

const TextContainer = styled.div`
	padding-left: 1em;
	width: 95%;
`

export default class VolunteerSteps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  render() {
    let textItems = [];
    if (this.state.window) {
      if (this.state.window.localStorage.language === "thai") {
        textItems = ["ลงทะเบียนองค์กรของคุณ",
                     "ลงทะเบียนอาสาสมัครใหม่"];
      } else {
        textItems = ["Register Your Organization",
                     "Register New Volunteer"];
      }

      return (

        <VolStepsContainer>
      		<Grid fluid>
      			<Row>
      				<TitleContainer>
      					<h1 className="text-center">{this.props.title}</h1>
      				</TitleContainer>
      			</Row>
      			<Row>
      				<Col xs={12} sm={4}>
                <Img
                  sizes={this.props.stepOneImage1.sizes}
      			    	className={styles.firstAvatar}
                  alt="You Can Speak!"
                />
      					<TextContainer>
      						<h4 className={styles.subTitle}>{this.props.step1Title}</h4>
      						<p className={styles.text}>{this.props.step1Text} </p>
                  <Button bsStyle="success"><ModalAdminAppl getApplication={textItems[0]} /></Button>
                </TextContainer>
              </Col>
              <Col xs={12} sm={4}>
                <Img
                  sizes={this.props.stepTwoImage2.sizes}
                  className={styles.avatar}
                  alt="English Conversation Partners!"
                />
                <TextContainer>
                  <h4 className={styles.subTitle}>{this.props.step2Title}</h4>
                  <p className={styles.text}>{this.props.step2Text}</p>
                  <Button bsStyle="success"><ModalVolAppl getApplication={textItems[1]} /></Button>
      					</TextContainer>
      				</Col>
      				<Col xs={12} sm={4}>
                <Img
                  sizes={this.props.stepThreeImage3.sizes}
      			    	className={styles.avatar}
                  alt="Conversation Groups"
                />
      					<TextContainer>
      						<h4 className={styles.subTitle}>{this.props.step3Title}</h4>
      						<p className={styles.text}>{this.props.step3Text}</p>
      					</TextContainer>
      				</Col>
      			</Row>
      		</Grid>
      	</VolStepsContainer>
      );
    } else {
      return <span />;
    }
  }
}
