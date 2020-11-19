import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}
