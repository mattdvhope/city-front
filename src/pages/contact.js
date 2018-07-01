import React from "react";
import Footer from '../components/Footer'

export default (props) => {
  return (
    <Footer
      footerlImage={props.data.footerlImage}
      fromSatorn1={props.data.fromSatorn1}
      fromSatorn2={props.data.fromSatorn2}
      fromSatorn3={props.data.fromSatorn3}
      fromSatorn4={props.data.fromSatorn4}
      fromSatorn5={props.data.fromSatorn5}
      fromSatorn6={props.data.fromSatorn6}
      fromSatorn7={props.data.fromSatorn7}
      fromSatorn8={props.data.fromSatorn8}
      fromSatorn9={props.data.fromSatorn9}
      fromSatorn10={props.data.fromSatorn10}
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

    fromSatorn1: imageSharp(id: { regex: "/From-Satorn-1/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn2: imageSharp(id: { regex: "/From-Satorn-2/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn3: imageSharp(id: { regex: "/From-Satorn-3/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn4: imageSharp(id: { regex: "/From-Satorn-4/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn5: imageSharp(id: { regex: "/From-Satorn-5/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn6: imageSharp(id: { regex: "/From-Satorn-6/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn7: imageSharp(id: { regex: "/From-Satorn-7/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn8: imageSharp(id: { regex: "/From-Satorn-8/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn9: imageSharp(id: { regex: "/From-Satorn-9/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    fromSatorn10: imageSharp(id: { regex: "/From-Satorn-10/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }

  }
`