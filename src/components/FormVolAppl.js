import React, { Component } from 'react';
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import ApplicationExplVol from './ApplicationExplVol';

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
      pin: '',
      first_name: '',
      last_name: '',
      email: '',
      skype_name: '',
      facebook: '',
      gender: '',
      age: '',
      organization: '',
      password: '',
      password_confirmation: '',
      phone_number: '',
    };
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      pin: this.state.pin,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      skype_name: this.state.skype_name,
      facebook: this.state.facebook,
      gender: this.state.gender,
      age: this.state.age,
      organization: this.state.organization,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      phone_number: this.state.phone_number,
      role: "volunteer"
    }

    axios.post(`${process.env.GATSBY_API_URL}/users`, {
      utf8: "✓",
      pin: this.state.pin,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      skype_name: this.state.skype_name,
      facebook: this.state.facebook,
      gender: this.state.gender,
      age: this.state.age,
      organization: this.state.organization,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      phone_number: this.state.phone_number,
      role: "volunteer",
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
        <ApplicationExplVol />
        <hr/>
        <FormStyler>
        <form onSubmit={this.handleSubmit} noValidate="noValidate" encType="multipart/form-data" action="/" acceptCharset="UTF-8">
          <input type="hidden" name="role" value="volunteer" />

          <FieldGroup
            id="formControlsText1"
            label="PIN"
            name="pin"
            type="text"
            onChange={this.handleChange}
            placeholder="PIN"
          />
          <FieldGroup
            id="formControlsText2"
            label="First Name"
            name="first_name"
            type="text"
            onChange={this.handleChange}
            placeholder="First Name"
            key="first_name_vol"
          />
          <FieldGroup
            id="formControlsText3"
            label="Last Name"
            name="last_name"
            type="text"
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <FieldGroup
            id="formControlsEmail4"
            label="Email Address (ไม่จำเป็น/optional)"
            name="email"
            type="email"
            onChange={this.handleChange}
            placeholder="อีเมล"
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

          <FormGroup controlId="formControlsSelect7">
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
            id="formControlsText8"
            label="Age"
            name="age"
            type="text"
            onChange={this.handleChange}
            placeholder="Age"
          />
          <FieldGroup
            id="formControlsText9"
            label="Church, Business or Organization Name"
            name="organization"
            type="text"
            onChange={this.handleChange}
            placeholder="Organization"
          />
          <FieldGroup
            id="formControlsText10"
            label="Password"
            name="password"
            type="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <FieldGroup
            id="formControlsText11"
            label="Password Confirmation"
            name="password_confirmation"
            type="password"
            onChange={this.handleChange}
            placeholder="Password Confirmation"
          />

          <FieldGroup
            id="formControlsText12"
            label="Phone Number"
            name="phone_number"
            type="text"
            onChange={this.handleChange}
            placeholder="Phone Number"
          />

          <Button className="btn btn-success" type="submit">Become a Skype Partner!</Button>
        </form>
        </FormStyler>
      </div>
    );
  }
}
