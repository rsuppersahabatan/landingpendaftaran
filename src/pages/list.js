import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import PostList from "../components/post-list";
import StyledLink from "../components/styled-link";
import styled from "styled-components";

const List = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title="List">
      <HeaderWrapper>
        <h1>List</h1>

        <Link
          css={`
            margin-top: var(--size-400);
            color: inherit;
            text-transform: uppercase;
          `}
          to="/tags"
        >
          Lihat Semua Tags
        </Link>
      </HeaderWrapper>

      <PostList posts={posts} />

      <StyledLink
          css={`
            margin-top: var(--size-400);
            display: inline-block;
          `}
          to="/"
        >
          Kembali Ke Beranda
      </StyledLink>

    </Layout>
  );
};

export default List;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-900);
  margin-bottom: var(--size-700);

  h1 {
    max-width: none;
  }
`;

export const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tujuan
        }
      }
    }
  }
`;
