const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {

  const  { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog (limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log("in reject")
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach((edge) => {

          console.log(edge.node.slug);

          createPage ({
            path: edge.node.slug,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  });
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/:path";

    // Update the page.
    createPage(page);
  }
};
