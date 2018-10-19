import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import styles from "../css/top.module.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const TopContainer = styled.div`
  margin-bottom: 40px;

  @media (min-width: 480px) {
    padding-top: 100px;
  }
  @media (max-width: 480px) {
    padding-top: 100px;
  }
  @media (max-width: 430px) {
    padding-top: 120px;
  }
  @media (max-width: 375px) {
    padding-top: 120px;
  }
`

const TextContainer = styled.div`
  color: #555;
  @media (min-width: 1199px) {
    margin-top: -10px;
    font-size: 480%;
  }
  @media (max-width: 1199px) {
    margin-top: 20px;
    font-size: 420%;
  }
  @media (max-width: 1100px) {
    margin-top: 30px;
    font-size: 400%;
  }
  @media (max-width: 995px) {
    margin-top: 40px;
    font-size: 390%;
  }
  @media (max-width: 991px) {
    margin-top: 10px;
    font-size: 310%;
  }
  @media (max-width: 767px) {
    margin-top: 5px;
    font-size: 220%;
  }
  @media (max-width: 575px) {
    margin-top: -20px;
    font-size: 225%;
  }
  @media (max-width: 535px) {
    font-size: 205%;
  }
  @media (max-width: 530px) {
    font-size: 200%;
  }
  @media (max-width: 500px) {
    font-size: 190%;
  }
  @media (max-width: 480px) {
    font-size: 180%;
  }
  @media (max-width: 430px) {
    margin-top: -30px;
    font-size: 170%;
  }
  @media (max-width: 375px) {
    font-size: 140%;
  }
  @media (max-width: 325px) {
    margin-top: -40px;
    font-size: 130%;
  }
`

export default class Top extends React.Component {
  constructor(props, context) {
    super(props, context);
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
        textItems = ["ชาวอเมริกันที่สอนภาษาอังกฤษและวัฒนธรรมสำหรับคนไทย"];
      } else {
        textItems = ['Americans training Thai people in English and culture'];
      }

      return (
        <TopContainer className="container">
          <div className="row">

            <div className="col">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.topImage.sizes}
              />
            </div>

            <div className="col">
              <TextContainer className="text-center">{textItems[0]}</TextContainer>
            </div>

          </div>
        </TopContainer>
      );
    } else {
      return <span />
    }
  }
}



