import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ProductList from "../ProductsList/index.js"

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  width: 100%;

  .BrainhubCarousel__arrows {
    background: transparent;
    border-radius: 50%;
    border: 3px solid white;
    padding: 15px;
  }

  .BrainhubCarousel__container {
    overflow-x: hidden;
    padding: 20px;
  }
  .BrainhubCarousel__trackContainer {
    padding-bottom: 30px;
    overflow-x: hidden;
  }

  @media (min-width: 960px) {
    margin-top: 0;
    justify-content: flex-start;

    .BrainhubCarousel__arrows {
      padding: 21px;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2%;
  align-items: center;

  @media (min-width: 960px) {
    align-items: flex-start;
  }
`

const HeadingWrapper = styled.div`
  width: 80%;
  padding-bottom: 20px;

  @media (min-width: 960px) {
    width: 50%;
    padding: 0% 10%;
    padding-bottom: 35px;
  }
`
const Heading = styled.h2`
  color: #eeeeee;
  font-weight: 700;
  font-size: 1.3em;

  @media (min-width: 960px) {
    font-size: 1.7em;
  }
`

const SubHeading = styled.p`
  font-weight: 400;
  color: #c4c4c4;
  margin: 10px 0px;
  font-size: 0.8em;

  @media (min-width: 960px) {
    margin: 20px 0px;
    font-size: 1em;
  }
`

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(index)/" } }) {
        edges {
          node {
            frontmatter {
              title
              lead
            }
          }
        }
      }
    }
  `)

  return (
    <ProductsWrapper>
      <ContentWrapper>
        <HeadingWrapper>
          <Heading>
            {data.allMarkdownRemark.edges[0].node.frontmatter.title}
          </Heading>
          <SubHeading>
            {data.allMarkdownRemark.edges[0].node.frontmatter.lead}
          </SubHeading>
        </HeadingWrapper>
        <ProductList />
      </ContentWrapper>
    </ProductsWrapper>
  )
}

export default Products
