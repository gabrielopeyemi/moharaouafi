import React from "react"
// import { Row, Col, Container, ListGroup } from "react-bootstrap"
import HeroOne from "../components/Sections/heroOne"
import HeroTwo from "../components/Sections/HeroTwo"
import HeroThree from "../components/Sections/HeroThree"
import Herofour from "../components/Sections/HeroFour"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroFive from "../components/Sections/HeroFive"
import HeroSix from "../components/Sections/HeroSix"
import HeroSeven from "../components/Sections/HeroSeven"
import HeroEight from "../components/Sections/HeroEight"
import HeroNine from "../components/Sections/HeroNine"
import HeroTen from "../components/Sections/HeroTen"
import "tailwindcss/dist/base.min.css";
import './../assets/css/tailwind.css';
import './../assets/css/start.css';



const IndexPage = () => (
    <Layout pageInfo={{ pageName: "index" }}>
        <SEO title="Moha Raouafi" keywords={[`graphiste`, `graphiste freelance`, `graphiste nice`, `designer à nice`, `flyer nice`, `logo nice`]} />
        <HeroOne/>
        <HeroTwo />
        <HeroThree />
        <Herofour />
        <HeroFive />
        <HeroSix />
        <HeroSeven />
        <HeroEight />
        <HeroNine />
        <HeroTen />
    </Layout>
)

export default IndexPage
