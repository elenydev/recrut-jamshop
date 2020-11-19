import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Products from "../components/Products"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Products />
    </Layout>
  )
}
