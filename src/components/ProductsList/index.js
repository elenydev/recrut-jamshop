import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addProductToCart } from "../../store/products.js"
import Link from "gatsby-link"

import AddIcon from "../../assets/elements/addIcon.svg"
import Carousel from "react-elastic-carousel"
import DummyImage from "../../assets/products/dummy.svg"

const Wrapper = styled.div`
  width: 100%;

  .rec.rec-arrow {
    border-radius: 50%;
    color: white;
    border: 3px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rec.rec-arrow:disabled {
    opacity: 0.4;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
    background: #ab528d;
  }
  .rec.rec-arrow:hover:enabled,
  .rec.rec-arrow:focus:enabled {
    background: #ab528d;
  }
`

const CardWrapper = styled.div`
  position: relative;
`

const Card = styled.div`
  display: flex;
  height: 100%;
  border: 3px solid #969393;
  background: #331f41;
  flex-direction: column;
  padding: 15px;
  max-width: 270px;
  transition: 0.3s all ease-in;

  &:hover {
    background: #4e2b67;
  }
`

const CardImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0px;
`

const CardImageHeading = styled.h4`
  display: flex;
  width: 100%;
  color: #eeeeee;
  font-weight: 700;
  padding: 10px 0px;
  text-transform: uppercase;
`

const CardDescription = styled.p`
  color: #c4c4c4;
  font-weight: 400;
  width: 80%;
`

const AddButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  z-index: 99;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 960px) {
    width: 35px;
    height: 35px;
  }
`

const ProductsList = () => {
  const dispatch = useDispatch()
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
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
      }
    }
  `)

  const productsList = data.allMarkdownRemark.edges.filter((product) => {
    if (product.node.frontmatter.name !== null) {
      return product
    }
  })

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 4 },
  ]

  return (
    <Wrapper>

      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        focusOnSelect={false}
        id="#offer"
      >
        {productsList.map((product, index) => {
          const {
            node: { frontmatter },
          } = product
          return (
            <CardWrapper key={index}>

              <Link to={`/${frontmatter.slug}`}>
                <Card>
                  <CardImageBox>
                    <img src={DummyImage} alt="Dummy image" />
                  </CardImageBox>
                  <CardImageHeading>{frontmatter.name}</CardImageHeading>
                  <CardDescription>{frontmatter.excerpt}</CardDescription>
                </Card>
              </Link>

              <AddButton
                onClick={() => dispatch(addProductToCart(frontmatter))}
              >
                <img src={AddIcon} />
              </AddButton>
            </CardWrapper>
          )
        })}

      </Carousel>
    </Wrapper>
  )
}

export default ProductsList
