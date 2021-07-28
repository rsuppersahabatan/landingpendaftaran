import React, { Fragment } from "react";
import Seo from "./seo";
import Footer from "./footer";
import Container from "./container";
import GlobalStyle from "./global-styles";
import styled from "styled-components";

const Layout = ({ children, title, tujuan, description, socialImage = "" }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Seo
        title={title}
        description={description}
        tujuan={tujuan}
        socialImage={socialImage}
      />
      <LayoutWrapper>
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </LayoutWrapper>
    </Fragment>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    margin-top: auto;
    margin-bottom: auto;
  }

  & footer {
    margin-top: auto;
  }
`;
