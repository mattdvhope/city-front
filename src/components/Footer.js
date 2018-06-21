import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

import styled from "styled-components";
import styles from "../css/footer.module.css";

import cityScape from '../img/City-scape.jpg'
import cityScapeMedium from '../img/City-scape-medium.jpg'
import cityScapeSmaller from '../img/City-scape-smaller.jpg'
import CEPLogo from '../img/CEP-logo.jpg'

const FooterContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  padding-top: 20px;
  @media (min-width: 1070px) {
    height: 700px;
  }
  @media (max-width: 1070px) {
    height: 1000px;
  }
  background-repeat:no-repeat;
  background-position:top;
`

const TitleContainer = styled.div`
  color: #2d3179;
  margin-right: 4%;
  margin-left: 4%;
  margin-bottom: 12px;
`;

const ContactInfoColumn = styled.div`
  padding-left: 5%
  padding-right: 5%
  text-align: center;
  font-size: 110%;
  @media (min-width: 767px) {
    border-left: 2px solid #8BC34A;
    border-right: 2px solid #8BC34A;
    font-size: 120%;
  }
`

const ContactInfoTitles = styled.div`
  font-size: 155%;
`

const Copyright = styled.div`
  margin-top: 15px;
  @media screen and (max-width: 930px)
    text-align: left
    margin-left: 40px
  @media screen and (max-width: 500px)
    text-align: left
    margin-left: 40px
`

function imageAccordingToWindowWidth(width) {
  if (width > 1070) {
    return cityScape;
  } else if (width > 767 && width < 1070) {
    return cityScapeMedium;
  } else {
    return cityScapeSmaller;
  }
}

function columnSM(width) {
  if (width < 1050) {
    return 1;
  } else {
    return 0;
  }
}

export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageChosen: undefined,
      SMchanger: undefined,
      language: undefined
    };
  }

  handleResize = () => this.setState({
    imageChosen: imageAccordingToWindowWidth(window.innerWidth),
    SMchanger: columnSM(window.innerWidth)
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    let footerItems = [];

    if (window.localStorage.getItem("language") === "thai") {
      footerItems = ["ติดต่อเรา", "เบอร์โทรศัพท์", "ที่อยู", "66 ถนน ปั้น", "แขวงสีลม เขตบางรัก", "กรุงเทพมหานคร 10500", "(คลิกเพื่อดูเส้นทาง)", "อีเมล"]
    } else {
      footerItems = ["Contact Us", "Telephone", "Address:", "66 Pan Road", "Silom, Bangrak", "Bangkok 10500", "(click to see directions)", "Email:"];
    }

    return (
      <FooterContainer style={{backgroundImage: `url('${this.state.imageChosen}')`, backgroundSize: `cover`}}>
        <Grid fluid>
          <Row>
            <TitleContainer>
              <h2 className="text-center">{footerItems[0]}</h2>
            </TitleContainer>
          </Row>
          <br/>

          <Row>
            <Col sm={3} xs={12}>
              <Img
                sizes={this.props.footerlImage.sizes}
                className={styles.CEPLogoImg}
                alt="CEP logo"
              />
            </Col>

            <Col sm={3 + this.state.SMchanger} xs={12}>
              <ContactInfoColumn>
                <br />
                <ContactInfoTitles>{footerItems[1]}</ContactInfoTitles>
                <div>086-696-7821</div>
                <br/>
                <a className="modal-initiator location-pictures-modal" href="#" data-toggle="modal" data-target="#locationpicturesmodal">
                  <ContactInfoTitles>{footerItems[2]}</ContactInfoTitles>
                  <div>{footerItems[3]}</div>
                  <div>{footerItems[4]}</div>
                  <div>{footerItems[5]}</div>
                  <div>{footerItems[6]}</div>
                </a>
                <br/>
                <ContactInfoTitles>{footerItems[7]}</ContactInfoTitles>
                <div>info@cityenglishproject.com</div>
                <br/>
                <div>
                  <a href="https://www.facebook.com/City-English-Project-1745393602361714/?notif_t=page_fan&notif_id=1462353525485104" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Icon-Facebook.jpg" className={styles.socialMediaIcon} /></a>
                  <a href="https://www.youtube.com/channel/UCcqBmxAGOstDdFbRImmnVWg" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Icon-Youtube.jpg" className={styles.socialMediaIcon} /></a>
                  <a href="https://www.instagram.com/cityenglishproject/?hl=en" target="_blank"><img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Icon-Instagram.jpg" className={styles.socialMediaIcon} /></a>
                </div>
                <br/>
              </ContactInfoColumn>
            </Col>

            <Col sm={6 - this.state.SMchanger} xs={12}>
              <div className={styles.mapBox}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d968.986814483854!2d100.5229871!3d13.721643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcd972043dc4fdfc!2sCity+English+Project!5e0!3m2!1sen!2s!4v1479132826508" width="600" height="450" frameBorder="0" allowFullScreen></iframe>
              </div>
            </Col>
          </Row>

          <Row>
            <Copyright>
              <div>Copyright &copy; City English Project 2018</div>
              <div>All rights reserved.</div>
            </Copyright>
          </Row>
        </Grid>
      </FooterContainer>
    )
  }
}
