import React from "react"
// import { Row, Col, Container, ListGroup } from "react-bootstrap"
import HeroOne from "../components/Sections/heroOne"
import HeroTwo from "../components/Sections/HeroTwo"
import HeroThree from "../components/Sections/HeroThree"
import Herofour from "../components/Sections/HeroFour"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroFive from "../components/Sections/HeroFive"



const IndexPage = () => (
    <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <HeroOne/>
        <HeroTwo />
        <HeroThree />
        <Herofour />
        <HeroFive />
    </Layout>
)

export default IndexPage
