import React, { Component } from 'react';
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import ApplicationExplAdmin from './ApplicationExplAdmin';

const FormStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 150%;
`

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class FormApplication1 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
      skype_name: '',
      facebook: '',
      age: '',
      organization: '',
      password: '',
      password_confirmation: '',
      province: '',
      postal_code: '',
    };
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      email: this.state.email,
      skype_name: this.state.skype_name,
      facebook: this.state.facebook,
      age: this.state.age,
      organization: this.state.organization,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      province: this.state.province,
      postal_code: this.state.postal_code,
      role: "admin_applicant"
    }

    axios.post(`${process.env.GATSBY_API_URL}/users`, {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      email: this.state.email,
      skype_name: this.state.skype_name,
      facebook: this.state.facebook,
      age: this.state.age,
      organization: this.state.organization,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      province: this.state.province,
      postal_code: this.state.postal_code,
      role: "admin_applicant",
      user: user,
    })
    .then(response => {
      console.log(response)
      this.props.handleClose();
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <ApplicationExplAdmin />
        <hr/>
        <FormStyler>
        <form onSubmit={this.handleSubmit} noValidate="noValidate" encType="multipart/form-data" action="/" acceptCharset="UTF-8">
          <input type="hidden" name="role" value="admin_applicant" />

          <FieldGroup
            id="formControlsText1"
            label="First Name"
            name="first_name"
            type="text"
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <FieldGroup
            id="formControlsText2"
            label="Last Name"
            name="last_name"
            type="text"
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <FormGroup controlId="formControlsSelect3">
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={this.handleChange}
              placeholder="select gender"
              name="gender">
              <option value="select">-- Gender --</option>
              <option value="ผู้ชาย">Male</option>
              <option value="ผู้หญิง">Female</option>
            </FormControl>
          </FormGroup>

          <FieldGroup
            id="formControlsEmail4"
            label="Email Address"
            name="email"
            type="email"
            onChange={this.handleChange}
            placeholder="Email Address"
          />
          <FieldGroup
            id="formControlsText5"
            label="Skype Name (Please set your Skype app's notifications to 'on' so that you can receive instant messages from your partner.)"
            name="skype_name"
            type="text"
            onChange={this.handleChange}
            placeholder="Skype Name"
          />
          <FieldGroup
            id="formControlsText6"
            label="Facebook Name (Why do we ask for your Facebook name? Because we want you to have the ability to communicate immediately with your Online Conversation Partner using Facebook’s instant messenger about canceling appointments, etc.)"
            name="facebook"
            type="text"
            onChange={this.handleChange}
            placeholder="Facebook Name"
          />

          <FieldGroup
            id="formControlsText7"
            label="Age"
            name="age"
            type="text"
            onChange={this.handleChange}
            placeholder="Age"
          />
          <FieldGroup
            id="formControlsText8"
            label="Church, Business or Organization Name"
            name="organization"
            type="text"
            onChange={this.handleChange}
            placeholder="Organization"
          />
          <FieldGroup
            id="formControlsText9"
            label="Password"
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <FieldGroup
            id="formControlsText10"
            label="Password Confirmation"
            name="password_confirmation"
            type="password"
            onChange={this.handleChange}
            placeholder="Password Confirmation"
          />

          <FormGroup controlId="formControlsSelect11">
            <ControlLabel>State</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={this.handleChange}
              name="province">
              <option value="select">-- Select a State --</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </FormControl>
          </FormGroup>

          <FieldGroup
            id="formControlsText12"
            label="Zip / Postal Code"
            name="postal_code"
            type="text"
            onChange={this.handleChange}
            placeholder="Zip Code"
          />

          <Button className="btn btn-success" type="submit">Register</Button>
        </form>
        </FormStyler>
      </div>
    );
  }
}
