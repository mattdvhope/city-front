import React, { Component } from 'react';
import Img from "gatsby-image";
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import styles from "../css/business.module.css";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { navigateTo } from "gatsby-link"

const TopSentences = styled.div`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 200%;
`

const FormStyler = styled.span`
  font-family: "Neue Frutiger W31 Modern Light", "Athiti";
  font-size: 165%;
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

export default class BusinessApplication extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      business_name: '',
      leader_name: '',
      email: '',
      phone: '',
      line_id: '',
    };
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const business = {
      business_name: this.state.business_name,
      leader_name: this.state.leader_name,
      email: this.state.email,
      phone: this.state.phone,
      line_id: this.state.line_id
    }

    axios.post(`${process.env.GATSBY_API_URL}/businesses`, {
      utf8: "✓",
      business: business,
    })
    .then(response => {
      console.log(response)
      navigateTo('/');
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="container">
        <hr/>
        <TopSentences>
          We offer our "You Can Speak" course at universities and businesses in central Bangkok.
        </TopSentences>
        <hr/>
        <Img
          sizes={this.props.data.businessImage.sizes}
          className={styles.firstAvatar}
          alt="People discussing business"
        />
        <hr/>
        <TopSentences>
          To request a course or for more information, call us at 096-732-2317 or 086-696-7821, send a message to our LINE ID (@cityenglishproject), or fill in your information in the form below for someone to respond to you.
        </TopSentences>
        <hr/>

        <FormStyler>
        <form onSubmit={this.handleSubmit} noValidate="noValidate" encType="multipart/form-data" action="/" acceptCharset="UTF-8">
          <input type="hidden" name="utf8" value="✓" />
      {/* <input type="hidden" name="authenticity_token" value="{this.state.csrf_token}" />  */}
          <input type="hidden" name="guest" value="true" />

          <FieldGroup
            id="formControlsText"
            label="Name of your business, university, organization, etc"
            name="business_name"
            type="text"
            onChange={this.handleChange}
          />
          <FieldGroup
            id="formControlsText"
            label="Your Name"
            name="leader_name"
            type="text"
            onChange={this.handleChange}
          />
          <FieldGroup
            id="formControlsText"
            label="Email Address"
            name="email"
            type="email"
            onChange={this.handleChange}
          />
          <FieldGroup
            id="formControlsText"
            label="Phone Number"
            name="phone"
            type="text"
            onChange={this.handleChange}
          />
          <FieldGroup
            id="formControlsText"
            label="Line ID (not required)"
            name="line_id"
            type="text"
            onChange={this.handleChange}
          />

          <Button className="btn btn-success" type="submit">Submit</Button>
        </form>
        </FormStyler>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export const homePageQuery = graphql`
  query BusinessPage {
    businessImage: imageSharp(id: { regex: "/At-Your-Org-Mobile.jpg/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`



