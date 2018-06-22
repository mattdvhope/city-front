import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

import './index.css'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: undefined
    }
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  handleChangeToThai(event) {
    console.log("in handleChangeToThai");
    event.preventDefault();
    window.localStorage.setItem("language", "thai" );
    this.setState(this.state);
  }

  handleChangeToEnglish(event) {
    console.log("in handleChangeToEnglish");
    event.preventDefault();
    window.localStorage.setItem("language", "english" );
    this.setState(this.state);
  }

  render() {
    if (this.state.window) {

      const { data } = this.props;

      let welcomeContent;

      if (this.state.window.localStorage.language === "thai") {
        welcomeContent = "ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด";
      } else {
        welcomeContent = data.allContentfulWelcome.edges[0].node.welcomeContent.welcomeContent
      }


      return (
        <div>
          <Helmet title={data.site.siteMetadata.title} >
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
            <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/278cd7f5-226e-4ad9-83fb-59e4a7eb4131.css" />
            <link href="https://fonts.googleapis.com/css?family=Athiti|Chonburi|Kanit|Maitree|Prompt|Sriracha|Taviraj|Trirong|Josefin+Sans" rel="stylesheet" />
          </Helmet>

          <Navbar
            handleChangeToThai={e => this.handleChangeToThai(e)}
            handleChangeToEnglish={e => this.handleChangeToEnglish(e)}
          />

          <Welcome caption={welcomeContent}/>


          {this.props.children()}
        </div>
      )
    } else {
      return <span />
    }
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
