import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/layout";

const PostTitle = styled.h1`
  margin-bottom: 0;
`;

const PostContent = styled.div`
  margin: 1em 0;
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <PostTitle>{post.frontmatter.title}</PostTitle>
      <small>Posted on {post.frontmatter.date}</small>
      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to='/'>&larr; Back to Home</Link>
    </Layout>
  );
};

export const blogPostQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
`;

export default BlogPostTemplate;
