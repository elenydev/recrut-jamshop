import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { addProductToCart } from "../store/products"
import { useDispatch } from "react-redux"

import DummyImage from "../assets/products/dummy.svg"
import Header from "../components/Header/index.js"
import { GlobalStyle } from "../layouts/index.js"
import { Button } from "../components/Hero/index.js"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1c042e;
  min-height: 100vh;

  header {
    top: 0;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  font-family: "Roboto", sans-serif;
  width: 90%;
  padding: 5px;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    width: 70%;
  }
`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: auto;

  @media (min-width: 280px) and (orientation: landscape) {
    margin-top: 30px;
  }

  img {
    height: 120%;
    width: auto;
  }
  @media (min-width: 960px) {
    img {
      height: 170%;
      width: auto;
    }
  }
`

const ProductContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  button {
    font-family: "Roboto", sans-serif;
  }
`

const ProductTag = styled.p`
  color: #fbe067;
  text-transform: uppercase;
  font-weight: 400;
`

const ProductHeader = styled.h1`
  font-weight: 700;
  color: #eeeeee;
  margin: 5px 0px;

  @media (min-width: 960px) {
    margin: 12px 0px;
  }
`

const ProductDescription = styled.p`
  color: #c4c4c4;
  font-weight: 400;

  @media (min-width: 960px) {
    max-width: 80%;
  }
`

const ProductPrize = styled.p`
  color: #eeeeee;
  font-weight: 700;
  font-size: 1.5em;
  margin: 5px 0px;

  @media (min-width: 960px) {
    margin: 12px 0px;
  }
`

const ProductDetails = ({ data }) => {
  const product = data.markdownRemark
  const { frontmatter } = product
  const dispatch = useDispatch()

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <ContentWrapper>
          <ImageBox>
            <img src={DummyImage} alt="Dummy image" />
          </ImageBox>
          <ProductContentBox>
            <ProductTag>{frontmatter.tag}</ProductTag>
            <ProductHeader>{frontmatter.name}</ProductHeader>
            <ProductDescription>{frontmatter.description}</ProductDescription>
            <ProductPrize>${frontmatter.price}</ProductPrize>
            <Button onClick={() => dispatch(addProductToCart(frontmatter))}>
              Add to cart
            </Button>
          </ProductContentBox>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export const pageQuery = graphql`
  query ProductQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        slug
        price
        excerpt
        image
        description
        tag
      }
    }
  }
`

export default ProductDetails
