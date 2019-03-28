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
      phone_number: '',
      trainingPeriodId: '',
      trainingPeriodPart: ''
    };
    this.dealWithMaleClick = this.dealWithMaleClick.bind(this);
    this.dealWithFemaleClick = this.dealWithFemaleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ window: window });
    console.log(this.props.trainingPeriodId);

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
      phone_number: this.state.phone_number,
      trainingPeriodId: this.props.trainingPeriodId,
      trainingPeriodPart: this.props.part
    }

    axios.patch(`${process.env.GATSBY_API_URL}/users/${this.props.trainingPeriodId}`, {
      utf8: "✓",
      class_time_scheduled: this.state.class_time_scheduled,
      user: user,
    })
    .then(message => {
      navigateTo('/social-media');
    })
    .catch(error => {
      console.log(error);
    })

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

                  <Input group type="hidden" name="class_time_scheduled" value={this.props.trainingPeriodId}/>

                  <Input onChange={this.handleChange} label="เบอร์โทรศัพท์ (จำเป็น)" icon="phone" name="phone_number" group type="text" validate error="wrong" success="right" required/>
                  <div id="invalidPhone" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>Please provide a phone number.</div>
                  <div id="takenPhone" style={{marginBottom: `25px`, marginTop: `-33px`, display: `none`, color: `red`}}>This phone number is already used by someone who registered with CEP.</div>

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