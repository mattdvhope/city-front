import React, { Component } from 'react';
import Link from "gatsby-link";
import { Grid, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

import styled from "styled-components";
import styles from "../css/member.module.css";

import ModalThaiHist from './ModalThaiHist';

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

const ModalStyler = styled.span`
  color: #8BC34A;
  cursor: pointer;
  font-weight: bolder;
`

export default class Member extends Component {
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
        textItems = ["พวกเขามาจาก",
                     "ประวัติศาสตร์ความเป็นมาที่ยาวนานของอาสาสมัครคริสเตียน",
                     "ที่มีความรักและความปรารถนาที่จะรับใช้คนไทย"];
      } else {
        textItems = ["They come from a",
                     "long history of Christian volunteers",
                     "who have loved and served Thai people."];
      }
    }

    return (
    	<MemberContainer>
    		<Grid fluid>
    			<Row>
    				<TitleContainer>
    					<h1 className="text-center">{this.props.title}</h1>
    				</TitleContainer>
    				<SubTitleContainer>
    					<h3>{this.props.subtitle}</h3>
    				</SubTitleContainer>
    			</Row>
    			<hr/>
    			<hr/>
    			<Row>
    				<Col sm={6} xs={12}>
              <Img
                sizes={this.props.memberlImage1.sizes}
    			    	className={styles.firstAvatar}
                alt="Membership4Web"
              />
    				</Col>
    				<Col sm={6} xs={12}>
    					<ListContainer>
    						<ul>
                  <li><h3>{this.props.firstListItem}</h3></li>
                  <li><h3>{this.props.secondListItem}</h3></li>
                  <li><h3>{this.props.thirdListItem}</h3></li>
    						  <li><h3>{this.props.fourthListItem}</h3></li>
    						</ul>
    					</ListContainer>
    				</Col>
    			</Row>
    			<hr/>
    			<hr/>
    			<Row>
    				<Col sm={6} xs={12}>
              <Img
                sizes={this.props.memberlImage2.sizes}
    			    	className={styles.avatar}
                alt="Holistic Model"
              />
    				</Col>
    				<Col sm={6} xs={12}>
    					<TextContainer>
    						<h3>{this.props.firstParagraphSubtitle}</h3>
    						<TextContent>{this.props.firstParagraph}</TextContent>
    					</TextContainer>
    				</Col>
    			</Row>
    			<hr/>
    			<hr/>
    			<Row>
    				<Col sm={6} xs={12}>
              <Img
                sizes={this.props.memberlImage3.sizes}
    			    	className={styles.avatar}
                alt="Friends helping friends"
              />
    				</Col>
    				<Col sm={6} xs={12}>
    					<TextContainer>
    						<h3>{this.props.secondParagraphSubtitle}</h3>
                <TextContent>{this.props.secondParagraph} {textItems[0]} <ModalStyler><ModalThaiHist getHist={textItems[1]} /></ModalStyler> {textItems[2]}</TextContent>
    					</TextContainer>
    				</Col>
    			</Row>
    		</Grid>
    	</MemberContainer>
    );
  }
}

