import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { navigateTo } from "gatsby-link"

import Navbar from '../components/Navbar'
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
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
         */}


          {/* 
          <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/278cd7f5-226e-4ad9-83fb-59e4a7eb4131.css"/>
         */}

          <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/50070ebd-d81b-4d29-acc0-f8abd9040636.css"/>

          <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />
        </Helmet>

        <NavbarMdb
          handleChangeToThai={e => this.handleChangeToThai(e)}
          handleChangeToEnglish={e => this.handleChangeToEnglish(e)}
        />

        {/* 

        <Navbar
          handleChangeToThai={e => this.handleChangeToThai(e)}
          handleChangeToEnglish={e => this.handleChangeToEnglish(e)}
        />

         */}

        {this.props.children()}

        <Footer
          footerlImage={data.footerlImage}
          fromSatorn1={data.fromSatorn1}
          fromSatorn2={data.fromSatorn2}
          fromSatorn3={data.fromSatorn3}
          fromSatorn4={data.fromSatorn4}
          fromSatorn5={data.fromSatorn5}
          fromSatorn6={data.fromSatorn6}
          fromSatorn7={data.fromSatorn7}
          fromSatorn8={data.fromSatorn8}
          fromSatorn9={data.fromSatorn9}
          fromSatorn10={data.fromSatorn10}
        />
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

    footerlImage: imageSharp(id: { regex: "/CEP-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    fromSatorn1: imageSharp(id: { regex: "/From-Satorn-1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn2: imageSharp(id: { regex: "/From-Satorn-2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn3: imageSharp(id: { regex: "/From-Satorn-3/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn4: imageSharp(id: { regex: "/From-Satorn-4/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn5: imageSharp(id: { regex: "/From-Satorn-5/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn6: imageSharp(id: { regex: "/From-Satorn-6/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn7: imageSharp(id: { regex: "/From-Satorn-7/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn8: imageSharp(id: { regex: "/From-Satorn-8/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn9: imageSharp(id: { regex: "/From-Satorn-9/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn10: imageSharp(id: { regex: "/From-Satorn-10/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

  }
`
