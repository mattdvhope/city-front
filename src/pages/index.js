import React, { Component } from 'react';
import Link from 'gatsby-link'
import Carousel from '../components/Carousel'
import Top from '../components/Top'
import Welcome from '../components/Welcome'
import TrainingSessions from '../components/TrainingSessions'
import Features from '../components/Features'
import Member from '../components/Member'

export default class FrontPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: undefined
    }
  }

  componentDidMount() {
    this.setState({ window: window });

    if (!window.localStorage.language || (window.localStorage.language !== "englll" && window.localStorage.language !== "thai")) {
      window.localStorage.setItem("language", "thai");
    }
  }

  render() {
    if (this.state.window) {
      const { data } = this.props;

      let num1 = []; let num2 = []; let welcomeContent, featuresTitle1, featuresContent1, featuresTitle2, featuresContent2, featuresTitle3, featuresContent3, title, subtitle, firstListItem, secondListItem, thirdListItem, fourthListItem, firstParagraphSubtitle, firstParagraph, secondParagraphSubtitle, secondParagraph;

      if (process.env.GATSBY_API_URL === "http://localhost:3000") {
        num1.unshift(1); num2.unshift(0);
        } else {
        num1.unshift(0); num2.unshift(1);
      }

      if (this.state.window.localStorage.language === "thai") {
        welcomeContent = data.allContentfulWelcome.edges[num1[0]].node.welcomeContent.welcomeContent;

        featuresTitle1 = data.allContentfulFeatures.edges[num1[0]].node.featuresTitle1
        featuresContent1 = data.allContentfulFeaturesFeatures1TextNode.edges[num1[0]].node.features1
        featuresTitle2 = data.allContentfulFeatures.edges[num1[0]].node.featuresTitle2
        featuresContent2 = data.allContentfulFeaturesFeatures2TextNode.edges[num1[0]].node.features2
        featuresTitle3 = data.allContentfulFeatures.edges[num1[0]].node.featuresTitle3
        featuresContent3 = data.allContentfulFeaturesFeatures3TextNode.edges[num1[0]].node.features3

        title = data.allContentfulMember.edges[num1[0]].node.title
        subtitle = data.allContentfulMember.edges[num1[0]].node.subtitle.subtitle
        firstListItem = data.allContentfulMember.edges[num1[0]].node.firstListItem
        secondListItem = data.allContentfulMember.edges[num1[0]].node.secondListItem
        thirdListItem = data.allContentfulMember.edges[num1[0]].node.thirdListItem
        fourthListItem = data.allContentfulMember.edges[num1[0]].node.fourthListItem
        firstParagraphSubtitle = data.allContentfulMember.edges[num1[0]].node.firstParagraphSubtitle
        firstParagraph=data.allContentfulMemberFirstParagraphTextNode.edges[num1[0]].node.firstParagraph
        secondParagraphSubtitle=data.allContentfulMember.edges[num1[0]].node.secondParagraphSubtitle
        secondParagraph=data.allContentfulMemberSecondParagraphTextNode.edges[num1[0]].node.secondParagraph
      } else {
        welcomeContent = data.allContentfulWelcome.edges[num2[0]].node.welcomeContent.welcomeContent;

        featuresTitle1 = data.allContentfulFeatures.edges[num2[0]].node.featuresTitle1
        featuresContent1 = data.allContentfulFeaturesFeatures1TextNode.edges[num2[0]].node.features1
        featuresTitle2 = data.allContentfulFeatures.edges[num2[0]].node.featuresTitle2
        featuresContent2 = data.allContentfulFeaturesFeatures2TextNode.edges[num2[0]].node.features2
        featuresTitle3 = data.allContentfulFeatures.edges[num2[0]].node.featuresTitle3
        featuresContent3 = data.allContentfulFeaturesFeatures3TextNode.edges[num2[0]].node.features3

        title = data.allContentfulMember.edges[num2[0]].node.title
        subtitle = data.allContentfulMember.edges[num2[0]].node.subtitle.subtitle
        firstListItem = data.allContentfulMember.edges[num2[0]].node.firstListItem
        secondListItem = data.allContentfulMember.edges[num2[0]].node.secondListItem
        thirdListItem = data.allContentfulMember.edges[num2[0]].node.thirdListItem
        fourthListItem = data.allContentfulMember.edges[num2[0]].node.fourthListItem
        firstParagraphSubtitle = data.allContentfulMember.edges[num2[0]].node.firstParagraphSubtitle
        firstParagraph=data.allContentfulMemberFirstParagraphTextNode.edges[num2[0]].node.firstParagraph
        secondParagraphSubtitle=data.allContentfulMember.edges[num2[0]].node.secondParagraphSubtitle
        secondParagraph=data.allContentfulMemberSecondParagraphTextNode.edges[num2[0]].node.secondParagraph
      }

      return (
        <div>

          {/* 
          <Carousel
            carouselImage1={data.carouselImage1}
            carouselImage2={data.carouselImage2}
            carouselImage3={data.carouselImage3}
            carouselImage4={data.carouselImage4}
          />
           */}

          <Top
            topImage={data.topImage}
          />

          <TrainingSessions />

          {/* 
          <Welcome caption={welcomeContent}/>
           */}

          <Features
            featureslImage1={data.featureslImage1}
            featureslImage2={data.featureslImage2}
            featureslImage3={data.featureslImage3}


            featuresTitle1={featuresTitle1}
            featuresContent1={featuresContent1}

            featuresTitle2={featuresTitle2}
            featuresContent2={featuresContent2}

            featuresTitle3={featuresTitle3}
            featuresContent3={featuresContent3}
          />

          <Member
            memberlImage1={data.memberlImage1}
            memberlImage2={data.memberlImage2}
            memberlImage3={data.memberlImage3}
            
            title={title}
            subtitle={subtitle}

            firstListItem={firstListItem}
            secondListItem={secondListItem}
            thirdListItem={thirdListItem}
            fourthListItem={fourthListItem}

            firstParagraphSubtitle={firstParagraphSubtitle}
            firstParagraph={firstParagraph}

            secondParagraphSubtitle={secondParagraphSubtitle}
            secondParagraph={secondParagraph}
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
    topImage: imageSharp(id: { regex: "/Top-front/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
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

  }
  
`

