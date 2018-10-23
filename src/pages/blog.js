import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li key={node.id} style={{ listStyle: `none`}}>
      <h2><Link to={`/${node.slug}`} >{node.title}</Link></h2>
      <img src={node.featuredImage.resolutions.src} alt=""/>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
      <br/>
      <br/>
    </li>
  )
}

const IndexPage = ({data}) => (
  <div className="container">
    <br/>
    <br/>
    <br/>
    <h1 className="text-center">List of Blogs</h1>
    <br/>
    <ul>
      {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
    </ul>
    <br/>
    
  </div>
)

export default IndexPage 

export const pageQuery = graphql`
  query pageQuery { 
    allContentfulBlog (
      filter: {
        node_locale: {eq: "en-US"}
      },
      sort: {
        fields: [publishDate], order: DESC
      }
    ) {
      edges {
        node {
          id
          title
          slug
          publishDate
          content {
            childMarkdownRemark {
              excerpt(pruneLength: 110)
            }
          }
          featuredImage {
            resolutions(width: 340, height: 170) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`