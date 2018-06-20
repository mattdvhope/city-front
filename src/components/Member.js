import React from "react";
import Link from "gatsby-link";
import { Grid, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

import styled from "styled-components";
import styles from "../css/member.module.css";

import membership4Web from '../img/Membership4Web.jpg'
import holisticModel from '../img/Holistic-Model.png'
import friendsHelpingFriends from '../img/Friends-helping-friends.png'

const MemberContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  padding-top: 25px;
  padding-bottom: 60px;
`

const TitleContainer = styled.div`
	color: #8BC34A;
	margin-right: 4%;
	margin-left: 4%;
`;

const SubTitleContainer = styled.div`
	color: #2d3179;
	margin-right: 8%;
	margin-left: 8%;
`;

const YouCanSpeakLink = styled(Link)`
  color: #8BC34A;
  font-weight: bold;
`; 

const ListContainer = styled.div`
	width: 95%;
	color: #2d3179;
`

const TextContainer = styled.div`
	padding-left: 1em;
	width: 95%;
	color: #2d3179;
`

const TextContent = styled.div`
	font-size: 20px;
`

export default (props) => (
	<MemberContainer>
		<Grid fluid>
			<Row>
				<TitleContainer>
					<h1 className="text-center">{props.title}</h1>
				</TitleContainer>
				<SubTitleContainer>
					<h3>{props.subtitle}</h3>
				</SubTitleContainer>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
          <Img
            sizes={props.memberlImage1.sizes}
			    	className={styles.firstAvatar}
            alt="Membership4Web"
          />
				</Col>
				<Col sm={6} xs={12}>
					<ListContainer>
						<ul>
              <li><h3>{props.firstListItem}</h3></li>
              <li><h3>{props.secondListItem}</h3></li>
              <li><h3>{props.thirdListItem}</h3></li>
						  <li><h3>{props.fourthListItem}</h3></li>
						</ul>
					</ListContainer>
				</Col>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
          <Img
            sizes={props.memberlImage2.sizes}
			    	className={styles.avatar}
            alt="Holistic Model"
          />
				</Col>
				<Col sm={6} xs={12}>
					<TextContainer>
						<h3>{props.firstParagraphSubtitle}</h3>
						<TextContent>{props.firstParagraph}</TextContent>
					</TextContainer>
				</Col>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
          <Img
            sizes={props.memberlImage3.sizes}
			    	className={styles.avatar}
            alt="Friends helping friends"
          />
				</Col>
				<Col sm={6} xs={12}>
					<TextContainer>
						<h3>{props.secondParagraphSubtitle}</h3>
            <TextContent>{props.secondParagraph} They come from a <YouCanSpeakLink to="/products">long history of Christian volunteers</YouCanSpeakLink> who have loved and served Thai people.</TextContent>
					</TextContainer>
				</Col>
			</Row>
		</Grid>
	</MemberContainer>
);



