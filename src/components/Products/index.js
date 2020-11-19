import React from "react"
import styled from "styled-components"

import {
  CarouselProvider,
  Slider,
  Slide,
  // ButtonBack,
  // ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

  @media (min-width: 960px) {
    margin-top: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 2%;
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
  return (
    <ProductsWrapper>
      <ContentWrapper>
        <Heading>Explore community choices</Heading>
        <SubHeading>
          Updated daily based on most popular choices
          <br />
          among dev community
        </SubHeading>
        <>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
            visibleSlides={5}
          >
            <Slider>
              <Slide index={1}>es</Slide>
              <Slide index={1}>es</Slide>
              <Slide index={1}>es</Slide>
              <Slide index={1}>es</Slide>
              <Slide index={1}>es</Slide>
            </Slider>
          </CarouselProvider>
        </>
      </ContentWrapper>
    </ProductsWrapper>
  )
}

export default Products
