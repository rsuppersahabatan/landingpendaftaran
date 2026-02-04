import React from "react";
import styled from "styled-components";
// import { Link } from "gatsby";
// import Tags from "./tags";

const PostList = ({ posts }) => {
  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
    const { title, tags, date, description, tujuan } = frontmatter;
    const { slug } = fields;

    return (
      <PostListItem
        key={slug}
        tags={tags}
        title={title}
        tujuan={tujuan}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <StyledPostList>{PostList}</StyledPostList>;
};

export default PostList;

const PostListItem = ({
  title,
  tujuan,
  // date,
  // timeToRead,
  // tags,
  excerpt,
  description,
  // slug,
}) => {
  return (
    <StyledPostListItem>
      {/* <Tags tags={tags} /> */}

      <PostListTitle>{title}</PostListTitle>

      <a
        href={tujuan}
        target="_blank"
        rel="noreferrer"
        data-umami-event={`pendaftaran-${title.replace(/ +/g, "-")}`}
      >
        <PostListExcerpt
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />
      </a>

      {/* <PostListMeta>
        <span>{date}</span>

        <span>{timeToRead} mins</span>
      </PostListMeta> */}
    </StyledPostListItem>
  );
};

const StyledPostList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: stretch; /* biar item memenuhi kolom */

  grid-gap: var(--size-600);
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPostListItem = styled.li`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;

  body.light-mode &,
  [data-theme="light"] & {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 2px solid #ffffff;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostListExcerpt = styled.p`
  padding-top: var(--size-400);
`;

// const PostListMeta = styled.div`
//   margin-top: 2rem;

//   font-size: var(--size-300);
//   display: flex;
//   justify-content: space-between;
// `;
