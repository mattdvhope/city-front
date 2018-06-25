import React, { Component } from 'react';
import Link from 'gatsby-link'
import Navbar from '../components/Navbar'
import VolunteerTopPic from '../components/VolunteerTopPic'
import VolunteerProjectOveriew from '../components/VolunteerProjectOveriew'
import VolunteerSteps from '../components/VolunteerSteps'
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

  handleChangeToThai(event) {
    event.preventDefault()
    this.setState({english: false, thai: true});
  }

  handleChangeToEnglish(event) {
    event.preventDefault()
    this.setState({english: true, thai: false});
  }

  render() {
    const { data } = this.props;

    let welcomeContent;

    if (this.state.english) {
      welcomeContent = data.allContentfulWelcome.edges[0].node.welcomeContent.welcomeContent
    } else {
      welcomeContent = "ดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดดด";
    }


    return (
      <div>

        <VolunteerTopPic/>

        <VolunteerProjectOveriew />

        <VolunteerSteps
        	title={data.allContentfulVolunteerSteps.edges[0].node.title}

          stepOneImage1={data.stepOneImage1}
          step1Title={data.allContentfulVolunteerSteps.edges[0].node.step1Title}
          step1Text={data.allContentfulVolunteerStepsStep1TextTextNode.edges[0].node.step1Text}

          stepTwoImage2={data.stepTwoImage2}
          step2Title={data.allContentfulVolunteerSteps.edges[0].node.step2Title}
          step2Text={data.allContentfulVolunteerStepsStep2TextTextNode.edges[0].node.step2Text}

          stepThreeImage3={data.stepThreeImage3}
          step3Title={data.allContentfulVolunteerSteps.edges[0].node.step3Title}
          step3Text={data.allContentfulVolunteerStepsStep3TextTextNode.edges[0].node.step3Text}
        />

        <Footer
          footerlImage={data.footerlImage}
        />

      </div>
    )

  }

}

export const homePageQuery = graphql`
  query VolunteerPage { 

    allContentfulWelcome {
      edges {
        node {
          welcomeContent {
            welcomeContent
          }
        }
      }
    }


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




    footerlImage: imageSharp(id: { regex: "/CEP-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
  
`

