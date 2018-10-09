import React, { Component } from 'react';
import Link from 'gatsby-link'
import Carousel from '../components/Carousel'
import Top from '../components/Top'
import Welcome from '../components/Welcome'
import WhatIsCep from '../components/WhatIsCep'
import Team from '../components/Team'
import TrainingSessions from '../components/TrainingSessions'
import Icons from '../components/Icons'
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

      let num1 = []; let num2 = [];
      let paragraphContent1, paragraphContent2, paragraphContent3, paragraphContentThai1, paragraphContentThai2, paragraphContentThai3, davidCrook, cheriCrook, kellyCooper, kelliJohnson, mattMalone, volunteerTeachers;

      num1.unshift(0); num2.unshift(1);
      
      if (this.state.window.localStorage.language === "thai") {
        paragraphContent1 = data.allContentfulWhatIsCepParagraphOneThaiTextNode.edges[0].node.paragraphOneThai
        paragraphContent2 = data.allContentfulWhatIsCepParagraphTwoThaiTextNode.edges[0].node.paragraphTwoThai
        paragraphContent3 = data.allContentfulWhatIsCepParagraphThreeThaiTextNode.edges[0].node.paragraphThreeThai

        davidCrook = data.allContentfulTeamThaiDavidCrookTextNode.edges[0].node.davidCrook
        cheriCrook = data.allContentfulTeamThaiCheriCrookTextNode.edges[0].node.cheriCrook
        kellyCooper = data.allContentfulTeamThaiKellyCooperTextNode.edges[0].node.kellyCooper
        kelliJohnson = data.allContentfulTeamThaiKelliJohnsonTextNode.edges[0].node.kelliJohnson
        mattMalone = data.allContentfulTeamThaiMattMaloneTextNode.edges[0].node.mattMalone

        volunteerTeachers = data.allContentfulTeamThaiVolunteerTeachersTextNode.edges[0].node.volunteerTeachers

      } else {
        paragraphContent1 = data.allContentfulWhatIsCepParagraphOneTextNode.edges[num1[0]].node.paragraphOne
        paragraphContent2 = data.allContentfulWhatIsCepParagraphTwoTextNode.edges[num1[0]].node.paragraphTwo
        paragraphContent3 = data.allContentfulWhatIsCepParagraphThreeTextNode.edges[num1[0]].node.paragraphThree

        davidCrook = data.allContentfulTeamDavidCrookTextNode.edges[num1[0]].node.davidCrook
        cheriCrook = data.allContentfulTeamCheriCrookTextNode.edges[num1[0]].node.cheriCrook
        kellyCooper = data.allContentfulTeamKellyCooperTextNode.edges[num1[0]].node.kellyCooper
        kelliJohnson = data.allContentfulTeamKelliJohnsonTextNode.edges[num1[0]].node.kelliJohnson
        mattMalone = data.allContentfulTeamMattMaloneTextNode.edges[num1[0]].node.mattMalone

        volunteerTeachers = data.allContentfulTeamVolunteerTeachersTextNode.edges[0].node.volunteerTeachers
      }

      return (
        <div>

          <Top
            topImage={data.topImage}
          />

          <TrainingSessions />

      {/* 
          <Icons />
       */}

          <WhatIsCep
            whatIsCepImg1={data.whatIsCepImg1}
            paragraphContent1={paragraphContent1}
            whatIsCepImg2={data.whatIsCepImg2}
            paragraphContent2={paragraphContent2}
            whatIsCepImg3={data.whatIsCepImg3}
            paragraphContent3={paragraphContent3}
          />
 
          <Team
            davidCrookImg={data.davidCrookImg}
            davidCrook={davidCrook}
            cheriCrookImg={data.cheriCrookImg}
            cheriCrook={cheriCrook}
            kellyCooperImg={data.kellyCooperImg}
            kellyCooper={kellyCooper}
            kelliJohnsonImg={data.kelliJohnsonImg}
            kelliJohnson={kelliJohnson}
            mattMaloneImg={data.mattMaloneImg}
            mattMalone={mattMalone}
            volunteerTeachers={volunteerTeachers}
            volunteerTeachersImg1={data.volunteerTeachersImg1}
            volunteerTeachersImg2={data.volunteerTeachersImg2}
            volunteerTeachersImg3={data.volunteerTeachersImg3}
            volunteerTeachersImg4={data.volunteerTeachersImg4}
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

    whatIsCepImg1: imageSharp(id: { regex: "/WhatIsCep1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulWhatIsCepParagraphOneTextNode {
      edges {
        node {
          paragraphOne
        }
      }
    }
    allContentfulWhatIsCepParagraphOneThaiTextNode {
      edges {
        node {
          paragraphOneThai
        }
      }
    }

    whatIsCepImg2: imageSharp(id: { regex: "/WhatIsCep2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulWhatIsCepParagraphTwoTextNode {
      edges {
        node {
          paragraphTwo
        }
      }
    }
    allContentfulWhatIsCepParagraphTwoThaiTextNode {
      edges {
        node {
          paragraphTwoThai
        }
      }
    }

    whatIsCepImg3: imageSharp(id: { regex: "/WhatIsCep3/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allContentfulWhatIsCepParagraphThreeTextNode {
      edges {
        node {
          paragraphThree
        }
      }
    }
    allContentfulWhatIsCepParagraphThreeThaiTextNode {
      edges {
        node {
          paragraphThreeThai
        }
      }
    }

    davidCrookImg: imageSharp(id: { regex: "/david-crook/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulTeamDavidCrookTextNode {
      edges {
        node {
          davidCrook
        }
      }
    }

    allContentfulTeamThaiDavidCrookTextNode {
      edges {
        node {
          davidCrook
        }
      }
    }

    cheriCrookImg: imageSharp(id: { regex: "/cheri-crook/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulTeamCheriCrookTextNode {
      edges {
        node {
          cheriCrook
        }
      }
    }

    allContentfulTeamThaiCheriCrookTextNode {
      edges {
        node {
          cheriCrook
        }
      }
    }

    kellyCooperImg: imageSharp(id: { regex: "/kelly-cooper/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulTeamKellyCooperTextNode {
      edges {
        node {
          kellyCooper
        }
      }
    }

    allContentfulTeamThaiKellyCooperTextNode {
      edges {
        node {
          kellyCooper
        }
      }
    }

    kelliJohnsonImg: imageSharp(id: { regex: "/kelli-johnson/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulTeamKelliJohnsonTextNode {
      edges {
        node {
          kelliJohnson
        }
      }
    }

    allContentfulTeamThaiKelliJohnsonTextNode {
      edges {
        node {
          kelliJohnson
        }
      }
    }

    mattMaloneImg: imageSharp(id: { regex: "/matt-malone/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    allContentfulTeamMattMaloneTextNode {
      edges {
        node {
          mattMalone
        }
      }
    }

    allContentfulTeamThaiMattMaloneTextNode {
      edges {
        node {
          mattMalone
        }
      }
    }

    allContentfulTeamVolunteerTeachersTextNode {
      edges {
        node {
          volunteerTeachers
        }
      }
    }

    allContentfulTeamThaiVolunteerTeachersTextNode {
      edges {
        node {
          volunteerTeachers
        }
      }
    }

    volunteerTeachersImg1: imageSharp(id: { regex: "/volunteer-teachers1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

    volunteerTeachersImg2: imageSharp(id: { regex: "/volunteer-teachers2/" }) {
      sizes(maxWidth: 640 ) {
        ...GatsbyImageSharpSizes
      }
    }

    volunteerTeachersImg3: imageSharp(id: { regex: "/volunteer-teachers3/" }) {
      sizes(maxWidth: 640 ) {
        ...GatsbyImageSharpSizes
      }
    }

    volunteerTeachersImg4: imageSharp(id: { regex: "/volunteer-teachers4/" }) {
      sizes(maxWidth: 640 ) {
        ...GatsbyImageSharpSizes
      }
    }

  }
`

