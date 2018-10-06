import React from 'react';
import axios from 'axios'
import styled from "styled-components";
import { navigateTo } from "gatsby-link"
import PaymentInfo from './PaymentInfo';

var FormTitle = styled.p`
  font-size: 180%;
`

var MaleStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  cursor: pointer;
  font-size: 180%;
  @media (min-width: 320px) {
    margin-right: 1.2em;
  }
  @media (max-width: 320px) {
    margin-right: 1em;
  }
`

var FemaleStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  cursor: pointer;
  font-size: 180%;
`

var PhoneError = styled.div`
  font-size: 0%;
  margin-top: -25px;
`
var EmailError = styled.div`
  font-size: 0%;
  margin-top: -25px;
`

export default class FormsPage extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      window: undefined,
      mdbreact: undefined,
      guest: true,
      nickname: '',
      first_name: '',
      last_name: '',
      gender: '',
      phone_number: '',
      email: '',
      off_site_location_id: ''
    };
    this.dealWithMaleClick = this.dealWithMaleClick.bind(this);
    this.dealWithFemaleClick = this.dealWithFemaleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ window: window });

    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }

  }

  dealWithMaleClick() {
    this.setState({ gender: 'ผู้ชาย' });
    MaleStyler = styled.span`
      font-family: "Neue Frutiger W31 Modern Light", "Athiti";
      cursor: pointer;
      font-size: 220%;
      @media (min-width: 320px) {
        margin-right: 1.2em;
      }
      @media (max-width: 320px) {
        margin-right: 1em;
      }
      color: #2D3179
    `
    FemaleStyler = styled.span`
      font-family: "Neue Frutiger W31 Modern Light", "Athiti";
      cursor: pointer;
      font-size: 140%;
      text-decoration: line-through;
    `
  }

  dealWithFemaleClick() {
    this.setState({ gender: 'ผู้หญิง' });
    MaleStyler = styled.span`
      font-family: "Neue Frutiger W31 Modern Light", "Athiti";
      cursor: pointer;
      font-size: 140%;
      @media (min-width: 320px) {
        margin-right: 1.2em;
      }
      @media (max-width: 320px) {
        margin-right: 1em;
      }
      text-decoration: line-through;
    `
    FemaleStyler = styled.span`
      font-family: "Neue Frutiger W31 Modern Light", "Athiti";
      cursor: pointer;
      font-size: 220%;
      color: #2D3179
    `
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("in handleSubmit");

    const user = {
      guest: true,
      nickname: this.state.nickname,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      phone_number: this.state.phone_number,
      email: this.state.email,
      off_site_location_id: this.props.trainingPeriodId
    }

    axios.post(`${process.env.GATSBY_API_URL}/users`, {
      utf8: "✓",
      class_time_scheduled_1: this.state.class_time_scheduled_1,
      user: user,
    })
    .then(response => {
      console.log(response.data.message)
      let nickname = document.getElementById("invalidNickname");
      nickname.style.display = "none";
      let firstname = document.getElementById("invalidFirstname");
      firstname.style.display = "none";
      let lastname = document.getElementById("invalidLastname");
      lastname.style.display = "none";
      let gender = document.getElementById("invalidGender");
      gender.style.display = "none";
      let phone = document.getElementById("invalidPhone");
      phone.style.display = "none";
      let takenPhone = document.getElementById("takenPhone");
      takenPhone.style.display = "none";
      let email = document.getElementById("takenEmail");
      email.style.display = "none";

      if (/Nickname can't be blank/.test(response.data.message)) {
        nickname.style.display = "block";
      }
      if (/First name can't be blank/.test(response.data.message)) {
        firstname.style.display = "block";
      }
      if (/Last name can't be blank/.test(response.data.message)) {
        lastname.style.display = "block";
      }
      if (this.state.gender === "") {
        gender.style.display = "block";
      }
      if (this.state.gender === "ผู้ชาย") {
        this.dealWithMaleClick();
      }
      if (this.state.gender === "ผู้หญิง") {
        this.dealWithFemaleClick();
      }
      if (/Phone number can't be blank/.test(response.data.message)) {
        phone.style.display = "block";
      }
      if (/Phone number has already been taken/.test(response.data.message)) {
        takenPhone.style.display = "block";
      }
      if (/Email has already been taken/.test(response.data.message)) {
        email.style.display = "block";
      }
      return response.data.message;
    })
    .then(message => {
      if (message === "Successful creation of new user!!") {
        console.log("SUCCESS!!!");
        // this.props.toggle();
        navigateTo('/social-media');
      } else {
        console.log("STILL ERRORS");
      }
    });
  }

  render() {
    if (this.state.window) {

      const { Container, Row, Col, Input, Button } = this.state.mdbreact;

      const children = [];

      function myFunction() {
          var x = document.getElementById("invalidNickname");
          if (x.style.display === "none") {
              x.style.display = "block";
          } else {
              x.style.display = "none";
          }
      }

      return(
        <Container>
          <Row>
            <Col md="12">

              <form onSubmit={this.handleSubmit} className='needs-validation' noValidate>
                <FormTitle className="text-center mb-4">{this.props.title}</FormTitle>
                <div className="grey-text">

                  {console.log(this.state.gender)}

                  <Input group type="hidden" name="gender" value={this.state.gender}/>
                  <Input group type="hidden" name="class_time_scheduled_1" value={this.props.trainingPeriodId}/>

                  {console.log(this.props.trainingPeriodId)}

                  <Input onChange={this.handleChange} label="ชื่อเล่น (ภาษาอังกฤษ)" icon="user" name="nickname" group type="text" validate error="wrong" success="right" required/>
                  <div id="invalidNickname" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>Please provide a nickname.</div>

                  <Input onChange={this.handleChange} label="ชื่อจริง (ภาษาอังกฤษ)" icon="user" name="first_name" group type="text" validate error="wrong" success="right" required/>
                  <div id="invalidFirstname" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>Please provide a first name.</div>

                  <Input onChange={this.handleChange} label="นามสกุล (ภาษาอังกฤษ)" icon="user" name="last_name" group type="text" validate error="wrong" success="right" required/>
                  <div id="invalidLastname" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>Please provide a last name.</div>
                  
                  <Input onChange={this.handleChange} label="เบอร์โทรศัพท์ (จำเป็น)" icon="phone" name="phone_number" group type="text" validate error="wrong" success="right" required/>
                  <div id="invalidPhone" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>Please provide a phone number.</div>
                  <div id="takenPhone" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>This phone number is already used by someone who registered with CEP.</div>

                  <Input onChange={this.handleChange} label="อีเมล (ไม่จำเป็น)" icon="envelope" name="email" group type="email" validate error="wrong" success="right" required/>
                  <div id="takenEmail" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>This email address is already used by someone who registered with CEP.</div>

                  <div>คลิกเพศที่ถูกต้อง</div>
                  <div>
                    <MaleStyler onClick={this.dealWithMaleClick}><i className="fa fa-male prefix"></i> ผู้ชาย</MaleStyler>
                    <FemaleStyler onClick={this.dealWithFemaleClick}><i className="fa fa-female prefix"></i> ผู้หญิง</FemaleStyler>
                  </div>
                  <div id="invalidGender" style={{marginBottom: `25px`, marginTop: `0px`, display: `none`, color: `red`}}>Please provide a gender.</div>

                  <PaymentInfo />

                  <Button color="primary" type="submit">สมัครเรียน</Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      );

    } else {
      return <span />
    }

  }
}