import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

class BlogPost extends Component {
	render() {
		const {
			title,
      featuredImage,
			content
		} = this.props.data.contentfulBlog
		return (
			<div className="container">
        <br/>
        <br/>
        <br/>
				<h1>{title}</h1>
			{/* use dangerouslySetInnerHTML b/c 'gatsby-transformer-remark' has transformed the markdown to html; now we're putting the <p> tag inside of a <div> tag. */}
			{/* React treats the 'content' in graphql as a string, so dangerouslySetInnerHTML tells react to treat it has html rather than as a string. */}
        <br/>
        <img src={featuredImage.resolutions.src} width={400} alt=""/>
        <br/>
        <br/>
				<div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
        <br/>
        <h2><Link to="/blog">Back to Blog page</Link></h2>
        <br/>
			</div>
		);
	}
}

BlogPost.propTypes = {
	data: PropTypes.object.isRequired
}

export default BlogPost;

// 'childMarkdownRemark' comes from the 'gatsby-transformer-remark' plugin
export const pageQuery = graphql`
	query blogPostQuery($slug: String!) {
		contentfulBlog(slug: {eq: $slug}) {
			title
			slug
			content {
        childMarkdownRemark {
          html
        }
      }

      featuredImage {
        resolutions(width: 700, height: 350) {
          src
          srcSet
        }
      }

		}
	}
`