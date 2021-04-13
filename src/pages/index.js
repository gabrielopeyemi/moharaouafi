import React from "react"
// import { Row, Col, Container, ListGroup } from "react-bootstrap"
import HeroOne from "../components/Sections/heroOne"
import OurServices from "../components/Home/OurServices"
import WhatWillDo from "../components/Home/WhatWillDo"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = () => (
    <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <HeroOne/>
    </Layout>
)

export default IndexPage
