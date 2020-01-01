import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>A Gatsby Blog From Scratch</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li
            css={css`
              list-style: none;
              background: #f5f5f5;
              padding: 1em;
            `}
            key={node.id}
          >
            <h2
              css={css`
                margin: 0;
              `}
            >
              {node.frontmatter.title}
            </h2>
            <small>Posted on {node.frontmatter.date}</small>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>Read the Post &rarr;</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const blogPostQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
