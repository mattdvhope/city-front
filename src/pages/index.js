import React from 'react'
import Link from 'gatsby-link'
import Carousel from '../components/Carousel'
import WelcomeCaption from '../components/Welcome-caption'
import Features from '../components/Features'

export default ({data}) => (
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
        featureslImage2={data.featureslImage2}
        featureslImage3={data.featureslImage3}
      />


    </div>
)

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

