import React, { Component } from 'react';
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
    );
    } else {
      return <span />
    }
  }
}

export const homePageQuery = graphql`
  query MoreInfoPage {
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