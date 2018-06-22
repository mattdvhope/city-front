import React, { Component } from 'react';
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';
import ApplicationExplanation from './ApplicationExplanation';

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

export default class FormApplication extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      class_times: [],
      guest: true,
      nickname: '',
      first_name: '',
      last_name: '',
      gender: 'ผู้ชาย',
      phone_number: '',
      email: '',
      class_time_scheduled_1: '',
      class_time_scheduled_2: 'select_option'
    };
  }

  componentDidMount() {
    axios.get(`${process.env.GATSBY_API_URL}/class_times.json`)
      .then((response) => {
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200

        const class_times = response.data;
        this.setState({ class_times });
      });
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      guest: true,
      nickname: this.state.nickname,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      phone_number: this.state.phone_number,
      email: this.state.email,
    }

    axios.post(`${process.env.GATSBY_API_URL}/users`, {
      utf8: "✓",
      class_time_scheduled_1: this.state.class_time_scheduled_1,
      class_time_scheduled_2: this.state.class_time_scheduled_2,
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
        <ApplicationExplanation />
        <br/>
        <hr/>
        <FormStyler>
        <form onSubmit={this.handleSubmit} noValidate="noValidate" encType="multipart/form-data" action="/" acceptCharset="UTF-8">
          <input type="hidden" name="utf8" value="✓" />
      {/* <input type="hidden" name="authenticity_token" value="{this.state.csrf_token}" />  */}
          <input type="hidden" name="guest" value="true" />

          <FieldGroup
            id="formControlsText"
            label="Nickname (in English)"
            name="nickname"
            type="text"
            onChange={this.handleChange}
            placeholder="ชื่อเล่น (ภาษาอังกฤษ)"
          />
          <FieldGroup
            id="formControlsText"
            label="First Name (in English)"
            name="first_name"
            type="text"
            onChange={this.handleChange}
            placeholder="ชื่อจริง (ภาษาอังกฤษ)"
          />
          <FieldGroup
            id="formControlsText"
            label="Last Name (in English)"
            name="last_name"
            type="text"
            onChange={this.handleChange}
            placeholder="นามสกุล (ภาษาอังกฤษ)"
          />

          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={this.handleChange}
              placeholder="select gender"
              name="gender">
              <option value="ผู้ชาย">ผู้ชาย</option>
              <option value="ผู้หญิง">ผู้หญิง</option>
            </FormControl>
          </FormGroup>

          <FieldGroup
            id="formControlsText"
            label="Phone Number (จำเป็น/required)"
            name="phone_number"
            type="text"
            onChange={this.handleChange}
            placeholder="เบอร์โทรศัพท์"
          />
          <FieldGroup
            id="formControlsEmail"
            label="Email Address (ไม่จำเป็น/optional)"
            name="email"
            type="email"
            onChange={this.handleChange}
            placeholder="อีเมล"
          />
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Choose your schedule option (rotate your mobile screen for a wider view).</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={this.handleChange}
              placeholder="select class time"
              name="class_time_scheduled_1">
              <option value="select">-- Choice --</option>
              {this.state.class_times.map((e, key) => {
                return <option key={e.period} value={e.period}>{e.period_thai}</option>;
              })}
            </FormControl>
          </FormGroup>

          <button className="btn btn-success" type="submit">Submit</button>
        </form>
        </FormStyler>
      </div>
    );
  }
}
