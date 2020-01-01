const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "src/posts"
    });

    createNodeField({
      node,
      name: "slug",
      value: `/post${relativeFilePath}`
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-post.js");

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(
      "There was a problem with your query:",
      new Error(result.errors)
    );
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug;
    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug
      }
    });
  });
};
