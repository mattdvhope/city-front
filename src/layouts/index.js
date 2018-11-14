import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { navigateTo } from "gatsby-link"

import NavbarMdb from '../components/NavbarMdb'
import Footer from '../components/Footer'
import styled from "styled-components";

const FontStyler = styled.div`
  font-family:'Neue Frutiger W31 Trad Light', Trirong;
`

export default class Layout extends Component {
  constructor(props) {
    super(props);
      this.state = {
        window: undefined
      };
  }

  componentDidMount() {
    if (!window.localStorage.language) {
      window.localStorage.setItem("language", "thai" );
    }

    this.setState({ window: window });
  }

  handleChangeToThai(event) {
    console.log("in handleChangeToThai");
    event.preventDefault();
    this.state.window.localStorage.setItem("language", "thai" );
    this.setState(this.state);
    location.reload();
    // navigateTo('/');
  }

  handleChangeToEnglish(event) {
    console.log("in handleChangeToEnglish");
    event.preventDefault();
    this.state.window.localStorage.setItem("language", "englll" );
    this.setState(this.state);
    location.reload();
    // navigateTo('/');
  }

  render() {
    const { data } = this.props;

    return (
      <FontStyler>
        <Helmet title={data.site.siteMetadata.title} >

          {/* 
          <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/278cd7f5-226e-4ad9-83fb-59e4a7eb4131.css"/>
         */}

          {/* Promo video on front-top page */}
          <script src="https://mattagape.wistia.com/medias/98jbnzwejf" async></script>

          {/* English Practice videos... */}
          <script src="https://mattagape.wistia.com/medias/ty23os5uue" async></script>
          <script src="https://mattagape.wistia.com/medias/5w6pwfkeda" async></script>

          <script src="//fast.wistia.com/assets/external/E-v1.js" async></script>

          <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/50070ebd-d81b-4d29-acc0-f8abd9040636.css"/>

          <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />
        </Helmet>

        <NavbarMdb
          handleChangeToThai={e => this.handleChangeToThai(e)}
          handleChangeToEnglish={e => this.handleChangeToEnglish(e)}
          lineIcon={data.lineIcon}
        />

        {this.props.children()}

        <Footer footerlImage={data.footerlImage} />

      </FontStyler>
    )
  }
}

//// Fix this soon!!  Technical debt...
Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }

    lineIcon: imageSharp(id: { regex: "/LINE-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    footerlImage: imageSharp(id: { regex: "/CEP-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

  }
`
