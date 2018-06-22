import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'

import Carousel from '../components/Carousel'

// import Welcome from '../components/Welcome'
import Welcome from './welcome'

import Features from '../components/Features'
import Member from '../components/Member'
import Footer from '../components/Footer'

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

          <Carousel
            carouselImage1={data.carouselImage1}
            carouselImage2={data.carouselImage2}
            carouselImage3={data.carouselImage3}
            carouselImage4={data.carouselImage4}
          />

          <Welcome />
{/* 
          <Welcome caption={welcomeContent}/>
 */}
          <Features
            featureslImage1={data.featureslImage1}
            featuresTitle1={data.allContentfulFeatures.edges[0].node.featuresTitle1}
            featuresContent1={data.allContentfulFeaturesFeatures1TextNode.edges[0].node.features1}

            featureslImage2={data.featureslImage2}
            featuresTitle2={data.allContentfulFeatures.edges[0].node.featuresTitle2}
            featuresContent2={data.allContentfulFeaturesFeatures2TextNode.edges[0].node.features2}

            featureslImage3={data.featureslImage3}
            featuresTitle3={data.allContentfulFeatures.edges[0].node.featuresTitle3}
            featuresContent3={data.allContentfulFeaturesFeatures3TextNode.edges[0].node.features3}
          />

          <Member
            title={data.allContentfulMember.edges[0].node.title}
            subtitle={data.allContentfulMember.edges[0].node.subtitle.subtitle}

            memberlImage1={data.memberlImage1}
            firstListItem={data.allContentfulMember.edges[0].node.firstListItem}
            secondListItem={data.allContentfulMember.edges[0].node.secondListItem}
            thirdListItem={data.allContentfulMember.edges[0].node.thirdListItem}
            fourthListItem={data.allContentfulMember.edges[0].node.fourthListItem}

            memberlImage2={data.memberlImage2}
            firstParagraphSubtitle={data.allContentfulMember.edges[0].node.firstParagraphSubtitle}
            firstParagraph={data.allContentfulMemberFirstParagraphTextNode.edges[0].node.firstParagraph}

            memberlImage3={data.memberlImage3}
            secondParagraphSubtitle={data.allContentfulMember.edges[0].node.secondParagraphSubtitle}
            secondParagraph={data.allContentfulMemberSecondParagraphTextNode.edges[0].node.secondParagraph}
          />

          <Footer
            footerlImage={data.footerlImage}
          />


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

    carouselImage1: imageSharp(id: { regex: "/1Home-Page-Pic/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    carouselImage2: imageSharp(id: { regex: "/2YouCanSpeakAd/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    carouselImage3: imageSharp(id: { regex: "/3FreeClass/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    carouselImage4: imageSharp(id: { regex: "/4AtYourOffice/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
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


    featureslImage1: imageSharp(id: { regex: "/City-Talk-Class/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    featureslImage2: imageSharp(id: { regex: "/English-Conversation-Partners/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    featureslImage3: imageSharp(id: { regex: "/Conversation-Groups/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulFeatures {
      edges {
        node {
          featuresTitle1
        }
      }
    }
    allContentfulFeaturesFeatures1TextNode {
      edges {
        node {
          features1
        }
      }
    }
    allContentfulFeatures {
      edges {
        node {
          featuresTitle2
        }
      }
    }
    allContentfulFeaturesFeatures2TextNode {
      edges {
        node {
          features2
        }
      }
    }
    allContentfulFeatures {
      edges {
        node {
          featuresTitle3
        }
      }
    }
    allContentfulFeaturesFeatures3TextNode {
      edges {
        node {
          features3
        }
      }
    }



    memberlImage1: imageSharp(id: { regex: "/Membership4Web/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    memberlImage2: imageSharp(id: { regex: "/Holistic-Model/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    memberlImage3: imageSharp(id: { regex: "/Friends-helping-friends/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulMember {
      edges {
        node {
          title
          subtitle {
            subtitle
          }
          firstListItem
          secondListItem
          thirdListItem
          fourthListItem
          
          firstParagraphSubtitle
          secondParagraphSubtitle
        }
      }
    }
    allContentfulMemberFirstParagraphTextNode {
      edges {
        node {
          firstParagraph
        }
      }
    }
    allContentfulMemberSecondParagraphTextNode {
      edges {
        node {
          secondParagraph
        }
      }
    }


    footerlImage: imageSharp(id: { regex: "/CEP-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
