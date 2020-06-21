import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from '../components/hero-image'
import AboutSection from '../components/about-section'

const IndexPage = ({ location }) => (
  <Layout location={location} lang="en">
    <SEO title="Home" />
    <HeroImage />
    <AboutSection />
  </Layout>
)

export default IndexPage
