import React, { Component } from 'react';
import Img from "gatsby-image";
import Link from 'gatsby-link';
import axios from 'axios'
import styled from "styled-components";
import FormMdb from "../components/FormMdb.js";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { navigateTo } from "gatsby-link"

export default class Register extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <FormMdb />
        <br/>
        <br/>
      </div>
    );
  }
}

// export const homePageQuery = graphql`
//   query BusinessPage {
//     businessImage: imageSharp(id: { regex: "/At-Your-Org-Mobile.jpg/" }) {
//       sizes(maxWidth: 1240 ) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `



