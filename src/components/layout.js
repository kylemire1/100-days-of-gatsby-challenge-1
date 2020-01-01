import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/core";

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 0 1em;
`;

const FlexContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Header = styled.header`
  background-color: rebeccapurple;
  padding: 1em 0;
`;

const Footer = styled.footer`
  margin-top: 4em;
  padding: 1em 0;
  background: #fbfbfb;
`;

const Layout = ({ children }) => {
  return (
    <FlexContainer>
      <Global
        styles={css`
          a {
            text-shadow: none;

            font-weight: bold;
          }

          html,
          body,
          #gatsby-focus-wrapper,
          #___gatsby {
            width: 100%;
            height: 100%;
          }
          main {
            flex-grow: 1;
          }
          header,
          main,
          footer {
            flex-shrink: 0;
          }
        `}
      />
      <Header>
        <Container>
          <Link
            css={css`
              color: white;
              background-image: none;
            `}
            to='/'
          >
            100 Days of Gatsby Blog
          </Link>
        </Container>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer>
        <Container>
          Created by{" "}
          <a
            href='https://twitter.com/KyleLemire1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Kyle Lemire
          </a>
        </Container>
      </Footer>
    </FlexContainer>
  );
};

export default Layout;
