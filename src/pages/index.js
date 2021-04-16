import React from "react"
// import { Row, Col, Container, ListGroup } from "react-bootstrap"
import HeroOne from "../components/Sections/heroOne"
import HeroTwo from "../components/Sections/HeroTwo"
import HeroThree from "../components/Sections/HeroThree"
import OurServices from "../components/Home/OurServices"
import WhatWillDo from "../components/Home/WhatWillDo"
import Herofour from "../components/Sections/HeroFour"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = () => (
    <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <HeroOne/>
        <HeroTwo />
        <HeroThree />
        <Herofour />
    </Layout>
)

export default IndexPage
