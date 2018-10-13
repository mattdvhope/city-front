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
  @media (min-width: 1180px) {
    font-size: 500%;
    margin-top: -30px;
  }
  @media (max-width: 1180px) {
    font-size: 450%;
    margin-top: 0px;
  }
  @media (max-width: 1100px) {
    font-size: 380%;
    margin-top: 0px;
  }
  @media (max-width: 990px) {
    font-size: 365%;
    margin-top: -20px;
  }
  @media (max-width: 990px) {
    font-size: 350%;
  }
  @media (max-width: 767px) {
    font-size: 220%;
  }
  @media (max-width: 600px) {
    font-size: 200%;
  }
  @media (max-width: 480px) {
    font-size: 180%;
    margin-top: -30px;
  }
  @media (max-width: 430px) {
    font-size: 160%;
  }
  @media (max-width: 375px) {
    font-size: 140%;
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



