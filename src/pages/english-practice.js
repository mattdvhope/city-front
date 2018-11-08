import React from "react";
import styled from "styled-components";
import styles from "../css/top.module.css";

const EPContainer = styled.div`
  color: #555;
`

const TitleCon = styled.div`
  font-size: 260%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1300px) {
  }
  @media (max-width: 1300px) {
  }
  @media (max-width: 1100px) {
  }
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 440px) {
  }
  @media (max-width: 360px) {
    font-size: 220%;
  }
  @media (max-width: 320px) {
  }

`

const VideoContainer = styled.div`
  @media (min-width: 1435px) {
    height: 400px;
    width: 712px;
  }
  @media (max-width: 1435px) {
    height: 400px;
    width: 712px;
  }
  @media (max-width: 1199px) {
    height: 350px;
    width: 622.2px;
  }
  @media (max-width: 991px) {
    margin-left: -20%;
    height: 320px;
    width: 569px;
  }
  @media (max-width: 940px) {
    margin-left: -15%;
    height: 300px;
    width: 533.3px;
  }
  @media (max-width: 865px) {
    margin-left: -8%;
    height: 280px;
    width: 498px;
  }
  @media (max-width: 795px) {
    margin-left: -2%;
  }
  @media (max-width: 767px) {
    margin-left: -20%;
    margin-right: auto;
    height: 400px;
    width: 712px;
  }
  @media (max-width: 745px) {
    margin-left: -11%;
    height: 350px;
    width: 622.2px;
  }
  @media (max-width: 640px) {
    margin-left: -6%;
    height: 320px;
    width: 569px;
  }
  @media (max-width: 575px) {
    margin-left: auto;
    height: 300px;
    width: 533.3px;
  }
  @media (max-width: 555px) {
    height: 280px;
    width: 498px;
  }
  @media (max-width: 525px) {
    height: 250px;
    width: 444.4px;
  }
  @media (max-width: 470px) {
    height: 230px;
    width: 409px;
  }
  @media (max-width: 440px) {
    height: 210px;
    width: 373.3px;
  }
  @media (max-width: 400px) {
    height: 190px;
    width: 338px;
  }
  @media (max-width: 385px) {
    height: 180px;
    width: 320px;
  }
  @media (max-width: 340px) {
    height: 170px;
    width: 302.2px;
  }
  @media (max-width: 320px) {
    margin-left: -2%;
  }
`

const TextContainer = styled.div`
  @media (min-width: 1430px) {
    margin-left: 0%;
    margin-right: 5%;
    font-size: 285%;
  }
  @media (max-width: 1430px) {
    margin-left: 0%;
    margin-right: 5%;
    font-size: 285%;
  }
  @media (max-width: 1199px) {
    margin-right: 0%;
    font-size: 250%;
  }
  @media (max-width: 996px) {
    font-size: 240%;
  }
  @media (max-width: 996px) {
  }
  @media (max-width: 991px) {
    margin-left: 10%;
    margin-right: -40%;
    font-size: 230%;
  }
  @media (max-width: 940px) {
    margin-left: -1%;
    margin-right: -35%;
    font-size: 220%;
  }
  @media (max-width: 865px) {
    margin-left: -2%;
    margin-right: -30%;
    font-size: 205%;
  }
  @media (max-width: 845px) {
    margin-left: 2%;
    margin-right: -25%;
  }
  @media (max-width: 795px) {
    margin-left: 9%;
    margin-right: -20%;
    font-size: 195%;
  }
  @media (max-width: 780px) {
    margin-left: 7%;
    margin-right: -15%;
    font-size: 185%;
  }
  @media (max-width: 767px) {
    margin-top: 5%;
    margin-bottom: -5%;
    margin-left: auto;
    margin-right: auto;
    font-size: 250%;
  }
  @media (max-width: 745px) {
  }
  @media (max-width: 575px) {
    font-size: 220%;
  }
  @media (max-width: 490px) {
    font-size: 200%;
  }
  @media (max-width: 470px) {
    font-size: 180%;
  }
  @media (max-width: 440px) {
    font-size: 160%;
  }
`

export default class EnglishPractice extends React.Component {
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
        textItems = ["การฝึกภาษาอังกฤษ",
                     "วีดีโอนี้สอนวิธีการถามในภาษาอังกฤษว่า 'คุณมาจากไหน?'",
                     "วิดีโอที่สองวิดีโอที่สองวิดีโอที่สองวิดีโอที่สองวิดีโอที่สองวิดีโอที่สองวิดีโอที่สองวิดีโอที่สองวิดีโอที่สอง"];
      } else {
        textItems = ["English Practice",
                     "Here is a video that teaches you how to say 'Where are you from?' in English.",
                     "2nd Video 2nd Video 2nd Video 2nd Video 2nd Video 2nd Video 2nd Video 2nd Video 2nd Video"];
      }

      return (
        <EPContainer className="container">
          <br/>
          <br/>
          <br/>
          <div className="row">
            <TitleCon>{textItems[0]}</TitleCon>
          </div>
          <hr/>

          <div className="row">
            <div className="col-md-8">
              <VideoContainer className="wistia_embed wistia_async_ty23os5uue" >&nbsp;</VideoContainer>
            </div>
            <div className="col-md-4">
              <TextContainer className="text-center">{textItems[1]}</TextContainer>
            </div>
          </div>
          <br/>
          <hr/>

      {/* 
          <div className="row">
            <div className="col-md-8">
              <VideoContainer className="wistia_embed wistia_async_aohl3i2jj7" >&nbsp;</VideoContainer>
            </div>
            <div className="col-md-4">
              <TextContainer className="text-center">{textItems[2]}</TextContainer>
            </div>
          </div>
          <br/>
          <hr/>
       */}

        </EPContainer>
      );
    } else {
      return <span />
    }
  }
}



