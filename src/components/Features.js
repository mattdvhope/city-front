import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

import styled from "styled-components";
import styles from "../css/features.module.css";

import ModalApplication1 from './ModalApplication1';

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

const ModalStyler = styled.span`
  color: #8BC34A;
  cursor: pointer;
  font-weight: bolder;
`

const BottomContainer = styled.h1`
    margin-top: -10px;
    margin-right: 2em;
    margin-left: 2em;
    color: #fff;
`;

export default class Features extends Component {
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
        textItems = ["บริการของเรา",
                     "คลิกที่นี่เพื่อลงทะเบียนเรียน!",
                     "เราตื่นเต้นและรอคอยที่จะให้คุณมาเรียนรู้และฝึกฝนกับเรา"];
      } else {
        textItems = ["Features",
                     "Click here to sign up for a class!",
                     "We look forward to having you join us!"];
      }
    }

    return (
      <FeaturesContainer>
    		<Grid fluid>
    			<Row>
    				<TitleContainer>
    					<h1 className="text-center">{textItems[0]}</h1>
    				</TitleContainer>
    			</Row>
    			<Row>
    				<Col xs={12} sm={4}>
              <Img
                sizes={this.props.featureslImage1.sizes}
    			    	className={styles.firstAvatar}
                alt="You Can Speak!"
              />
    					<TextContainer>
    						<h4 className={styles.subTitle}>{this.props.featuresTitle1}</h4>
    						<p className={styles.text}>{this.props.featuresContent1} <ModalStyler><ModalApplication1 getApplication={textItems[1]} /></ModalStyler></p>
    					</TextContainer>
    				</Col>
    				<Col xs={12} sm={4}>
              <Img
                sizes={this.props.featureslImage2.sizes}
    			    	className={styles.avatar}
                alt="English Conversation Partners!"
              />
    					<TextContainer>
    						<h4 className={styles.subTitle}>{this.props.featuresTitle2}</h4>
    						<p className={styles.text}>{this.props.featuresContent2}</p>
    					</TextContainer>
    				</Col>
    				<Col xs={12} sm={4}>
              <Img
                sizes={this.props.featureslImage3.sizes}
    			    	className={styles.avatar}
                alt="Conversation Groups"
              />
    					<TextContainer>
    						<h4 className={styles.subTitle}>{this.props.featuresTitle3}</h4>
    						<p className={styles.text}>{this.props.featuresContent3}</p>
    					</TextContainer>
    				</Col>
    			</Row>
    		</Grid>
        <hr/>
        <BottomContainer className="text-center">{textItems[2]}</BottomContainer>
        <hr/>
    	</FeaturesContainer>
    )
  }
}


