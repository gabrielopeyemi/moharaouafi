/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import '../styles/css/style.css';
import '../styles/css/style.min.css';
import '../styles/css/style.css';
// import '../styles/scss/style.scss';
import '../styles/css/owl.theme.css';
import '../styles/css/owl.carousel.css';
import '../styles/css/main.css';
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"
import Footer from "./Home/Footer";
import INavbar from "./Navigation";


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
