import React, { Component } from 'react';
import { StaticQuery } from "gatsby"

import Welcome from '../components/Welcome'

import './index.css'

export default class Layout extends Component {
  render() {
      const { data } = this.props;

      let welcomeContent;

console.log(data);

      if (window.localStorage.getItem("language") === "thai") {
        welcomeContent = "ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด";
      } else {
        welcomeContent = "English Here!!!!!ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด"; 
      } //data.allContentfulWelcome.edges[0].node.welcomeContent.welcomeContent


      return (
        <Welcome caption={welcomeContent}/>
      )
  }
}

export const query = graphql`
  query WelcomeQuery {
    site {
      siteMetadata {
        title
      }
    }


    allContentfulWelcome {
      edges {
        node {
          welcomeContent {
            welcomeContent
          }
        }
      }
    }
  }
`
