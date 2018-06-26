import React from "react";
import Member from '../components/Member'

export default (props) => {

  const { data } = props;

  return (
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
  );

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