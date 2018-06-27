import React, { Component } from 'react';
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import VolunteerTopPic from '../components/VolunteerTopPic'
import VolunteerProjectOveriew from '../components/VolunteerProjectOveriew'
import VolunteerSteps from '../components/VolunteerSteps'
import Member from '../components/Member'

export default class Volunteers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
  }

  render() {
    let num1 = []; let num2 = []; let title, step1Title, step1Text, step2Title, step2Text, step3Title, step3Text;

    if (this.state.window) {
      const { data } = this.props;

      if (process.env.GATSBY_API_URL === "http://localhost:3000") {
        num1.unshift(1); num2.unshift(0);
        } else {
        num1.unshift(0); num2.unshift(1);
      }

      if (this.state.window.localStorage.language === "thai") {
        title=data.allContentfulVolunteerSteps.edges[num1[0]].node.title
        step1Title=data.allContentfulVolunteerSteps.edges[num1[0]].node.step1Title
        step1Text=data.allContentfulVolunteerStepsStep1TextTextNode.edges[num1[0]].node.step1Text

        step2Title=data.allContentfulVolunteerSteps.edges[num1[0]].node.step2Title
        step2Text=data.allContentfulVolunteerStepsStep2TextTextNode.edges[num1[0]].node.step2Text

        step3Title=data.allContentfulVolunteerSteps.edges[num1[0]].node.step3Title
        step3Text=data.allContentfulVolunteerStepsStep3TextTextNode.edges[num1[0]].node.step3Text

      } else {
        title=data.allContentfulVolunteerSteps.edges[num2[0]].node.title
        step1Title=data.allContentfulVolunteerSteps.edges[num2[0]].node.step1Title
        step1Text=data.allContentfulVolunteerStepsStep1TextTextNode.edges[num2[0]].node.step1Text

        step2Title=data.allContentfulVolunteerSteps.edges[num2[0]].node.step2Title
        step2Text=data.allContentfulVolunteerStepsStep2TextTextNode.edges[num2[0]].node.step2Text

        step3Title=data.allContentfulVolunteerSteps.edges[num2[0]].node.step3Title
        step3Text=data.allContentfulVolunteerStepsStep3TextTextNode.edges[num2[0]].node.step3Text

      }

      return (
        <div>

          <VolunteerTopPic window={this.state.window}/>

          <VolunteerProjectOveriew />

          <VolunteerSteps
            stepOneImage1={data.stepOneImage1}
            stepTwoImage2={data.stepTwoImage2}
            stepThreeImage3={data.stepThreeImage3}

            title={title}

            step1Title={step1Title}
            step1Text={step1Text}

            step2Title={step2Title}
            step2Text={step2Text}

            step3Title={step3Title}
            step3Text={step3Text}
          />

        </div>
      )

    } else {
      return <span />
    }
  }

}

export const homePageQuery = graphql`
  query VolunteerPage { 

		allContentfulVolunteerSteps {
	    edges {
	      node {
	        title
	        step1Title
	        step2Title
	        step3Title
	      }
	    }
	  }
		allContentfulVolunteerStepsStep1TextTextNode {
	    edges {
	      node {
	        step1Text
	      }
	    }
	  }
		allContentfulVolunteerStepsStep2TextTextNode {
	    edges {
	      node {
	        step2Text
	      }
	    }
	  }
		allContentfulVolunteerStepsStep3TextTextNode {
	    edges {
	      node {
	        step3Text
	      }
	    }
	  }



    stepOneImage1: imageSharp(id: { regex: "/Register-Your-Church/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    stepTwoImage2: imageSharp(id: { regex: "/Invite-Volunteers/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    stepThreeImage3: imageSharp(id: { regex: "/Multiply-Volunteers/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }



  }
  
`

