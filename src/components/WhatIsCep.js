import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import styles from "../css/whatiscep.module.css";

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const WhatIsCepContainer = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  margin-bottom: 50px;
`

const TitleContainer = styled.div`
  color: #2d3179;
  margin-right: auto;
  margin-left: auto;
`;

const TitleText = styled.p`
  @media (min-width: 1400px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1400px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1300px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1200px) {
    font-size: 280%;
    margin-bottom: 10px;
  }
  @media (max-width: 1180px) {
    font-size: 280%;
    margin-bottom: -40px;
  }
  @media (max-width: 1100px) {
    font-size: 280%;
    margin-bottom: -40px;
  }
  @media (max-width: 1000px) {
    font-size: 280%;
    margin-bottom: -40px;
  }
  @media (max-width: 990px) {
    font-size: 210%;
    margin-bottom: -40px;
  }
  @media (max-width: 900px) {
    font-size: 210%;
    margin-bottom: -40px;
  }
  @media (max-width: 800px) {
    font-size: 210%;
    margin-bottom: -40px;
  }
  @media (max-width: 767px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 750px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 700px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 650px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 600px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 550px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 450px) {
    font-size: 210%;
    margin-bottom: 0px;
  }
  @media (max-width: 400px) {
    font-size: 205%;
    margin-bottom: 0px;
  }
  @media (max-width: 350px) {
    font-size: 200%;
    margin-bottom: 0px;
  }
  @media (max-width: 320px) {
    font-size: 180%;
    margin-bottom: 0px;
  }
`;

const ContentContainer = styled.div`
  color: #2d3179;
  margin-top: -15px;
  margin-right: auto;
  margin-left: auto;
`;

const ContentText = styled.p`
  margin-left: 8px;
  @media (min-width: 1400px) {
    font-size: 180%;
  }
  @media (max-width: 1400px) {
    font-size: 180%;
  }
  @media (max-width: 1300px) {
    font-size: 180%;
  }
  @media (max-width: 1200px) {
    font-size: 180%;
  }
  @media (max-width: 1180px) {
    font-size: 180%;
  }
  @media (max-width: 1100px) {
    font-size: 180%;
  }
  @media (max-width: 1000px) {
    font-size: 180%;
  }
  @media (max-width: 990px) {
    font-size: 170%;
  }
  @media (max-width: 900px) {
    font-size: 160%;
  }
  @media (max-width: 800px) {
    font-size: 155%;
  }
  @media (max-width: 767px) {
    font-size: 150%;
  }
  @media (max-width: 750px) {
    font-size: 145%;
  }
  @media (max-width: 700px) {
    font-size: 140%;
  }
  @media (max-width: 650px) {
    font-size: 135%;
  }
  @media (max-width: 600px) {
    font-size: 130%;
  }
  @media (max-width: 550px) {
    font-size: 125%;
  }
  @media (max-width: 500px) {
    font-size: 120%;
  }
  @media (max-width: 480px) {
    font-size: 115%;
  }
  @media (max-width: 450px) {
    font-size: 110%;
  }
  @media (max-width: 400px) {
    font-size: 105%;
  }
  @media (max-width: 350px) {
    font-size: 100%;
  }
  @media (max-width: 320px) {
    font-size: 100%;
  }
`;


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
      let language = this.state.window.localStorage.language;
      if (language === "thai") {
        textItems = ['โครงการซิตี้ อิงลิช (City English Project) คืออะไร?'];
      } else {
        textItems = ['What is the "City English Project?"'];
      }

      return (
        <WhatIsCepContainer className="container">
          <div className="row">
            <TitleContainer>
              <TitleText className="text-center">{textItems[0]}</TitleText>
            </TitleContainer>
          </div>
          <br/>
          <div className="row">
            <div className="col">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.whatIsCepImg1.sizes}
              />
            </div>
          </div>
          <br/>
          <div className="row">
            <ContentContainer>
              <ContentText>
                {this.props.paragraphContent1}
              </ContentText>
            </ContentContainer>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.whatIsCepImg2.sizes}
              />
            </div>
          </div>
          <br/>
          <div className="row">
            <ContentContainer>
              <ContentText>
                {this.props.paragraphContent2}
              </ContentText>
            </ContentContainer>
          </div>
          <br/>
          <br/>
          <div className="row">
            <div className="col">
              <Img
                alt="Top picture"
                className={styles.avatar}
                sizes={this.props.whatIsCepImg3.sizes}
              />
            </div>
          </div>
          <br/>
          <div className="row">
            <ContentContainer>
              <ContentText>
                {this.props.paragraphContent3}
              </ContentText>
            </ContentContainer>
          </div>
        </WhatIsCepContainer>
      );
    } else {
      return <span />
    }
  }
}



