import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default (props) => {
  return (
    <Footer
      footerlImage={props.data.footerlImage}
    />
  );

}

export const homePageQuery = graphql`
  query ContactPage {
    footerlImage: imageSharp(id: { regex: "/CEP-logo/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`