import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-bootstrap';

import ModalApplication from './ModalApplication'

import welcomeWide from '../img/Welcome-wide.jpg'
import welcomeMobile from '../img/Welcome-mobile.jpg'

const WelcomeContainer = styled.div`
  @media (min-width: 1400px) {
    height: 700px;
  }
  @media (max-width: 1400px) {
    height: 650px;
  }
  @media (max-width: 1300px) {
    height: 600px;
  }
  @media (max-width: 1200px) {
    height: 550px;
  }
  @media (max-width: 1100px) {
    height: 500px;
  }
  @media (max-width: 1000px) {
    height: 450px;
  }
  @media (max-width: 900px) {
    height: 420px;
  }
  @media (max-width: 800px) {
    height: 380px;
  }
  @media (max-width: 750px) {
    height: 1500px;
  }
  @media (max-width: 700px) {
    height: 1500px;
  }
  @media (max-width: 650px) {
    height: 1400px;
  }
  @media (max-width: 600px) {
    height: 1300px;
  }
  @media (max-width: 550px) {
    height: 1200px;
  }
  @media (max-width: 500px) {
    height: 1100px;
  }
  @media (max-width: 450px) {
    height: 1000px;
  }
  @media (max-width: 400px) {
    height: 900px;
  }
  @media (max-width: 350px) {
    height: 800px;
  }
  background-repeat:no-repeat;
  background-position:top;
`

const TextContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  @media (min-width: 1400px) {
    font-size: 24px;
    margin: 240px 190px 100px 485px;
  }
  @media (max-width: 1400px) {
    font-size: 23px;
    margin: 220px 160px 100px 470px;
  }
  @media (max-width: 1350px) {
    font-size: 22px;
    margin: 210px 160px 90px 430px;
  }
  @media (max-width: 1300px) {
    font-size: 22px;
    margin: 203px 160px 90px 410px;
  }
  @media (max-width: 1250px) {
    font-size: 21px;
    margin: 195px 160px 80px 390px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
    margin: 195px 120px 50px 390px;
  }
  @media (max-width: 1150px) {
    font-size: 19px;
    margin: 180px 120px 50px 350px;
  }
  @media (max-width: 1100px) {
    font-size: 18px;
    margin: 170px 105px 50px 330px;
  }
  @media (max-width: 1050px) {
    font-size: 18px;
    margin: 160px 95px 40px 320px;
  }
  @media (max-width: 1000px) {
    font-size: 17px;
    margin: 155px 85px 40px 305px;
  }
  @media (max-width: 950px) {
    font-size: 16px;
    margin: 147px 80px 36px 295px;
  }
  @media (max-width: 900px) {
    font-size: 15.5px;
    margin: 136px 70px 32px 275px;
  }
  @media (max-width: 850px) {
    font-size: 15px;
    margin: 132px 65px 28px 255px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
    margin: 122px 60px 24px 235px;
  }
  @media (max-width: 750px) {
    font-size: 29px;
    margin: 505px 43px 12px 55px;
  }
  @media (max-width: 725px) {
    font-size: 27px;
    margin: 505px 43px 12px 55px;
  }
  @media (max-width: 700px) {
    font-size: 27px;
    margin: 490px 38px 12px 45px;
  }
  @media (max-width: 650px) {
    font-size: 26px;
    margin: 450px 34px 11px 40px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    margin: 410px 30px 9px 36px;
  }
  @media (max-width: 550px) {
    font-size: 22px;
    margin: 380px 25px 8px 28px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
    margin: 350px 21px 7px 22px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
    margin: 315px 18px 6px 18px;
  }
  @media (max-width: 400px) {
    font-size: 16.5px;
    margin: 290px 16px 6px 14px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    margin: 260px 16px 6px 14px;
  }
`

const ModalStyler = styled.span`
  color: #8BC34A;
  cursor: pointer;
  font-weight: bolder;
`

export default class WelcomeCaption extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowHeight: undefined,
      windowWidth: undefined,
      imageChosen: undefined
    };
    // this.chooseImage = this.chooseImage.bind(this);
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    imageChosen: window.innerWidth > 750 ? welcomeWide : welcomeMobile
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <WelcomeContainer style={{backgroundImage: `url('${this.state.imageChosen}')`, backgroundSize: `cover`}}>

        <Grid fluid>
          <TextContainer>
            {console.log(this.props.caption)}
            {this.props.caption} <span id="get-to-be-a-member">Click here</span> to learn more about us. Or, <ModalStyler><ModalApplication getApplication="click here" /></ModalStyler> to sign up for our popular "You Can Speak!" English class.
          </TextContainer>
        </Grid>

      </WelcomeContainer>

    )
  }
}
