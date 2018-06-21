import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-bootstrap';

import ProjectOverviewWide from '../img/Project-Overview.jpg'
import ProjectOverviewMobile from '../img/Project-Overview-mobile.jpg'

const ProjectOverviewContainer = styled.div`
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
    margin: 270px 190px 100px 450px;
  }
  @media (max-width: 1400px) {
    font-size: 24px;
    margin: 250px 190px 100px 450px;
  }
  @media (max-width: 1350px) {
    font-size: 23px;
    margin: 250px 190px 100px 440px;
  }
  @media (max-width: 1300px) {
    font-size: 22px;
    margin: 230px 190px 100px 430px;
  }
  @media (max-width: 1250px) {
    font-size: 21px;
    margin: 225px 190px 100px 400px;
  }
  @media (max-width: 1200px) {
    font-size: 20px;
    margin: 210px 130px 100px 380px;
  }
  @media (max-width: 1150px) {
    font-size: 20px;
    margin: 210px 100px 100px 330px;
  }
  @media (max-width: 1100px) {
    font-size: 19px;
    margin: 185px 100px 100px 330px;
  }
  @media (max-width: 1050px) {
    font-size: 19px;
    margin: 185px 80px 100px 300px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
    margin: 165px 60px 100px 280px;
  }
  @media (max-width: 950px) {
    font-size: 18px;
    margin: 165px 60px 100px 280px;
  }
  @media (max-width: 900px) {
    font-size: 17px;
    margin: 155px 50px 100px 260px;
  }
  @media (max-width: 850px) {
    font-size: 16.5px;
    margin: 155px 40px 100px 240px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
    margin: 142px 30px 100px 220px;
  }
  @media (max-width: 750px) {
    font-size: 31px;
    margin: 525px 43px 12px 55px;
  }
  @media (max-width: 725px) {
    font-size: 31px;
    margin: 510px 43px 12px 55px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
    margin: 500px 43px 12px 55px;
  }
  @media (max-width: 650px) {
    font-size: 28px;
    margin: 470px 38px 12px 45px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    margin: 435px 32px 12px 38px;
  }
  @media (max-width: 550px) {
    font-size: 24px;
    margin: 405px 32px 12px 30px;
  }
  @media (max-width: 500px) {
    font-size: 21.5px;
    margin: 365px 32px 12px 27px;
  }
  @media (max-width: 450px) {
    font-size: 19.5px;
    margin: 335px 32px 12px 22px;
  }
  @media (max-width: 400px) {
    font-size: 17.5px;
    margin: 300px 32px 12px 17px;
  }
  @media (max-width: 350px) {
    font-size: 15px;
    margin: 270px 32px 12px 13px;
  }
`

export default class WelcomeCaption extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowHeight: undefined,
      windowWidth: undefined,
      imageChosen: undefined
    };
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    imageChosen: window.innerWidth > 750 ? ProjectOverviewWide : ProjectOverviewMobile
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
      <ProjectOverviewContainer style={{backgroundImage: `url('${this.state.imageChosen}')`, backgroundSize: `cover`}}>

        <Grid fluid>
          <TextContainer>
            There are two ways for volunteers to get involved with City English Project. Volunteers can serve locally in the Bangkok area through teaching our "You Can Speak!" English culture and worldview class. If volunteers are interested in serving, but cannot make the trip to Bangkok, they can become an online conversation partner. If you are interested in any of the two volunteer options, please look at the details below to find steps on how to become a City English Project (CEP) volunteer.
          </TextContainer>
        </Grid>

      </ProjectOverviewContainer>

    )
  }
}
