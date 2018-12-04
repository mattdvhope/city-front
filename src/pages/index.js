import React, { Component } from 'react';
import Link from 'gatsby-link'
import Top from '../components/Top'
import WhatIsCep from '../components/WhatIsCep'
import Team from '../components/Team'
import TrainingSessions from '../components/TrainingSessions'
import Icons from '../components/Icons'

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

        kellyCooper = data.allContentfulTeamThaiKellyCooperTextNode.edges[0].node.kellyCooper
        mattMalone = data.allContentfulTeamThaiMattMaloneTextNode.edges[0].node.mattMalone
        kelliJohnson = data.allContentfulTeamThaiKelliJohnsonTextNode.edges[0].node.kelliJohnson

        volunteerTeachers = data.allContentfulTeamThaiVolunteerTeachersTextNode.edges[0].node.volunteerTeachers

      } else {
        paragraphContent1 = data.allContentfulWhatIsCepParagraphOneTextNode.edges[num1[0]].node.paragraphOne
        paragraphContent2 = data.allContentfulWhatIsCepParagraphTwoTextNode.edges[num1[0]].node.paragraphTwo
        paragraphContent3 = data.allContentfulWhatIsCepParagraphThreeTextNode.edges[num1[0]].node.paragraphThree

        kellyCooper = data.allContentfulTeamKellyCooperTextNode.edges[num1[0]].node.kellyCooper
        mattMalone = data.allContentfulTeamMattMaloneTextNode.edges[num1[0]].node.mattMalone
        kelliJohnson = data.allContentfulTeamKelliJohnsonTextNode.edges[num1[0]].node.kelliJohnson

        volunteerTeachers = data.allContentfulTeamVolunteerTeachersTextNode.edges[0].node.volunteerTeachers
      }

      return (
        <div>

          <Top />

          <TrainingSessions />

          <WhatIsCep
            paragraphContent1={paragraphContent1}
            paragraphContent2={paragraphContent2}
            paragraphContent3={paragraphContent3}
          />
 
          <Team
            kellyCooper={kellyCooper}
            mattMalone={mattMalone}
            kelliJohnson={kelliJohnson}
            volunteerTeachers={volunteerTeachers}
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

  }
`

