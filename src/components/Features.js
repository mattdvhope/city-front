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
  {console.log(props.featuresContent1)}
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
						<h4 className={styles.subTitle}>{props.featuresTitle1}</h4>
						<p className={styles.text}>{props.featuresContent1} <a className="modal-initiator non-summer-university" href="#" data-toggle="modal" data-target="#applicationmodal">Click here to sign up for a class!</a></p>
					</TextContainer>
				</Col>
				<Col xs={12} sm={4}>
          <Img
            sizes={props.featureslImage2.sizes}
			    	className={styles.avatar}
            alt="English Conversation Partners!"
          />
					<TextContainer>
						<h4 className={styles.subTitle}>{props.featuresTitle2}</h4>
						<p className={styles.text}>{props.featuresContent2}</p>
					</TextContainer>
				</Col>
				<Col xs={12} sm={4}>
          <Img
            sizes={props.featureslImage3.sizes}
			    	className={styles.avatar}
            alt="Conversation Groups"
          />
					<TextContainer>
						<h4 className={styles.subTitle}>{props.featuresTitle3}</h4>
						<p className={styles.text}>{props.featuresContent3}</p>
					</TextContainer>
				</Col>
			</Row>
		</Grid>
	</FeaturesContainer>
);