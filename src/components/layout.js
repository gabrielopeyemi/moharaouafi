import React from "react";
import { StaticQuery, graphql } from "gatsby";
import '../styles/css/style.min.css';
import { Container } from "react-bootstrap"
import Footer from "./Home/Footer";


const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <main>{children}</main>
        </Container>
        <Footer/>
      </>
    )}
  />
)

export default Layout
