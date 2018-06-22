import React, { Component } from 'react';
import Link from 'gatsby-link'
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
import Features from '../components/Features'
import Member from '../components/Member'
import Footer from '../components/Footer'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: undefined
    }
  }

  componentDidMount() {
    this.setState({ window: window });
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

console.log("FrontPage:", this.state.window.localStorage.language);

      return (
        <div>

          <Carousel
            carouselImage1={data.carouselImage1}
            carouselImage2={data.carouselImage2}
            carouselImage3={data.carouselImage3}
            carouselImage4={data.carouselImage4}
          />

          <Welcome caption={welcomeContent}/>

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

        </div>
      )
    } else {
      return <span />
    }
  }
}

export const homePageQuery = graphql`
  query HomePage {
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

