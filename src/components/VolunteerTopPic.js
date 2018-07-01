import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-bootstrap';

import coffeeTablePic from '../img/at_coffee_shop.jpg'

const CoffeeTablePicContainer = styled.div`
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
    height: 380px;
  }
  @media (max-width: 700px) {
    height: 380px;
  }
  @media (max-width: 650px) {
    height: 360px;
  }
  @media (max-width: 600px) {
    height: 360px;
  }
  @media (max-width: 550px) {
    height: 340px;
  }
  @media (max-width: 500px) {
    height: 340px;
  }
  @media (max-width: 450px) {
    height: 320px;
  }
  @media (max-width: 400px) {
    height: 320px;
  }
  @media (max-width: 350px) {
    height: 310px;
  }
  background-repeat:no-repeat;
  background-position:top;
`

const TextContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  color: #fff;
  @media (min-width: 1400px) {
    font-size: 77px;
    margin: 130px 275px 40px 320px;
  }
  @media (max-width: 1400px) {
    font-size: 77px;
    margin: 130px 275px 40px 310px;
  }
  @media (max-width: 1350px) {
    font-size: 70px;
    margin: 130px 275px 40px 300px;
  }
  @media (max-width: 1300px) {
    font-size: 70px;
    margin: 100px 245px 40px 270px;
  }
  @media (max-width: 1250px) {
    font-size: 70px;
    margin: 100px 245px 40px 260px;
  }
  @media (max-width: 1200px) {
    font-size: 65px;
    margin: 95px 245px 40px 250px;
  }
  @media (max-width: 1150px) {
    font-size: 65px;
    margin: 85px 235px 40px 240px;
  }
  @media (max-width: 1100px) {
    font-size: 60px;
    margin: 75px 235px 40px 225px;
  }
  @media (max-width: 1050px) {
    font-size: 55px;
    margin: 80px 235px 40px 235px;
  }
  @media (max-width: 1000px) {
    font-size: 47px;
    margin: 100px 175px 40px 250px;
  }
  @media (max-width: 950px) {
    font-size: 47px;
    margin: 100px 175px 40px 250px;
  }
  @media (max-width: 900px) {
    font-size: 47px;
    margin: 100px 175px 40px 200px;
  }
  @media (max-width: 850px) {
    font-size: 42px;
    margin: 90px 175px 40px 200px;
  }
  @media (max-width: 800px) {
    font-size: 38px;
    margin: 85px 175px 40px 190px;
  }
  @media (max-width: 750px) {
    font-size: 38px;
    margin: 85px 175px 40px 190px;
  }
  @media (max-width: 725px) {
    font-size: 38px;
    margin: 75px 145px 40px 170px;
  }
  @media (max-width: 700px) {
    font-size: 38px;
    margin: 65px 135px 40px 160px;
  }
  @media (max-width: 650px) {
    font-size: 33px;
    margin: 65px 125px 40px 150px;
  }
  @media (max-width: 600px) {
    font-size: 33px;
    margin: 75px 105px 40px 130px;
  }
  @media (max-width: 550px) {
    font-size: 33px;
    margin: 55px 95px 40px 120px;
  }
  @media (max-width: 500px) {
    font-size: 31px;
    margin: 55px 85px 40px 110px;
  }
  @media (max-width: 450px) {
    font-size: 29px;
    margin: 55px 65px 40px 90px;
  }
  @media (max-width: 400px) {
    font-size: 27px;
    margin: 40px 65px 40px 90px;
  }
  @media (max-width: 350px) {
    font-size: 27px;
    margin: 30px 55px 40px 80px;
  }
`

const ModalStyler = styled.span`
  color: #8BC34A;
  cursor: pointer;
  font-weight: bolder;
`

export default class VolunteerTopPic extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageChosen: undefined
    };
  }

  handleResize = () => this.setState({
    imageChosen: coffeeTablePic
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    let textItems = [];

      if (this.props.window.localStorage.language === "thai") {
        textItems = ["ยินดีต้อนรับคนอาสาสมัคร! นี่คือภาพรวมของ CEP สำหรับคุณลองมาดูด้านล่าง!"];
      } else {
        textItems = ["Welcome Volunteers! Want to partner with City English Project?"];
      }
 
    return (
      <CoffeeTablePicContainer style={{backgroundImage: `url('${this.state.imageChosen}')`, backgroundSize: `cover`}}>
        <Grid fluid>
          <TextContainer>
            {textItems[0]}
          </TextContainer>
        </Grid>

      </CoffeeTablePicContainer>
    )
  }
}
