import React, { Component } from 'react';
import Link from 'gatsby-link'
import Carousel from '../components/Carousel'
import WelcomeCaption from '../components/Welcome-caption'
import Features from '../components/Features'
import Member from '../components/Member'
import Footer from '../components/Footer'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      english: true,
      thai: false
    };
  }

  render() {

    const { data } = this.props;

    return (
      <div>
        <Carousel
          carouselImage1={data.carouselImage1}
          carouselImage2={data.carouselImage2}
          carouselImage3={data.carouselImage3}
          carouselImage4={data.carouselImage4}
        />

        <WelcomeCaption caption={data.allContentfulWelcome.edges[0].node.welcomeContent.welcomeContent}/>

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
          memberlImage1={data.memberlImage1}
          memberlImage2={data.memberlImage2}
          memberlImage3={data.memberlImage3}
        />

        <Footer
          footerlImage={data.footerlImage}
        />

      </div>
    )

  }

}

export const homePageQuery = graphql`
  query HomePage {
    allContentfulWelcome {
      edges {
        node {
          welcomeContent {
            welcomeContent
          }
        }
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
    footerlImage: imageSharp(id: { regex: "/CEP-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  
`

