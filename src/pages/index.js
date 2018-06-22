import React, { Component } from 'react';
import Link from 'gatsby-link'

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

      return (
        <div>


        </div>
      )
    } else {
      return <span />
    }
  }
}

export const homePageQuery = graphql`
  query HomePage {



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

