import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

import styled from "styled-components";
import styles from "../css/features.module.css";

import cityTalkClass from '../img/City-Talk-Class.jpg'
import engConvParnters from '../img/English-Conversation-Partners.jpg'
import convGroups from '../img/Conversation-Groups.jpg'

const FeaturesContainer = styled.div`
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

export default (props) => (
	<FeaturesContainer>
		<Grid fluid>
			<Row>
				<TitleContainer>
					<h1 className="text-center">Features</h1>
				</TitleContainer>
			</Row>
			<Row>
				<Col xs={12} sm={4}>
          <Img
            sizes={props.featureslImage1.sizes}
			    	className={styles.firstAvatar}
            alt="You Can Speak!"
          />
					<TextContainer>
						<h4 className={styles.subTitle}>"You Can Speak!"  Conversational English Class</h4>
						<p className={styles.text}>Our "You Can Speak!" conversational English, culture and worldview class is a fun and interactive way to build confidence and learn to speak English with greater clarity. We offer beginner through intermediate level classes taught by TESOL certified native English speakers. <a className="modal-initiator non-summer-university" href="#" data-toggle="modal" data-target="#applicationmodal">Click here to sign up for a class!</a></p>
					</TextContainer>
				</Col>
				<Col xs={12} sm={4}>
          <Img
            sizes={props.featureslImage2.sizes}
			    	className={styles.avatar}
            alt="English Conversation Partners!"
          />
					<TextContainer>
						<h4 className={styles.subTitle}>Online Conversation Partnerships with Native English Speakers</h4>
						<p className={styles.text}>The best way to become a better English speaker is to speak with native speakers on a regular basis. Our network offers members opportunities for online, weekly, face-to-face Skype partnerships with native English speakers who can help you advance quickly. This partnership will be available to you after you complete the "You Can Speak" class.</p>
					</TextContainer>
				</Col>
				<Col xs={12} sm={4}>
          <Img
            sizes={props.featureslImage3.sizes}
			    	className={styles.avatar}
            alt="Conversation Groups"
          />
					<TextContainer>
						<h4 className={styles.subTitle}>Classes &amp; Activities!</h4>
						<p className={styles.text}>Interested in practicing your English in a casual and fun environment? We host additional classes and activities that provide opportunities for relaxed, natural conversations with native English speakers. Follow us on social media for the dates of upcoming events.</p>
					</TextContainer>
				</Col>
			</Row>
		</Grid>
	</FeaturesContainer>
);
