import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSelector } from "react-redux"
import { selectProducts } from "../../store/products.js"

import CartComponent from "../../assets/elements/shopping_cart_bin.svg"
import DummyImage from "../../assets/products/dummy.svg"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "../Hero/index.js"

const Heading = styled.header`
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 99;
  position: fixed;
`

const SubmitBtn = styled(Button)`
  font-size: 0.7em;
  padding: 3px 8px;

  @media (min-width: 960px) {
    padding: 6px 15px;
    font-size: 0.65em;
  }
`

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  color: #e4e3e3;
  padding: 10px 0px;
  font-weight: 700;

  @media (min-width: 960px) {
    width: 90%;
    padding: 15px 0px;
  }
`
const ShoppingCartBox = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  transition: 0.3s all linear;

  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 40px;
    height: 40px;
  }
`

const EclipseWrapper = styled.div`
  position: absolute;
  right: -10%;
  z-index: 99;
  bottom: 50%;
  transform: translateY(40%);
  border-radius: 50%;
  background: ${({ disabled }) => (disabled ? "#301346" : "#AB528D")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  font-size: 0.75em;

  p {
    position: absolute;
  }
`

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  width: 100%;
`

const ProductImage = styled.div`
  img {
    height: 40px;
    width: auto;
  }
`

const ProductName = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #eeeeee;
  font-weight: 700;
  margin: 0px 7px;
  font-size: 0.8em;
`

const ProductPrize = styled.p`
  font-family: "Roboto", sans-serif;
  color: #eeeeee;
  font-weight: 700;
  font-size: 0.8em;
`

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#220538",
    border: "2px solid #F5F5F5",
    right: "30px",
    top: "60px",
    padding: "8px",
    minHeight: "20vh",
    maxHeight: "50vh",
    overflowY: "auto",
  },
}))

const Header = () => {
  const classes = useStyles()
  const allProducts = useSelector(selectProducts)
  const [products, setProducts] = useState(allProducts)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    if (allProducts.products.length <= 0) {
      return
    }
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    setProducts(allProducts)
  }, [allProducts])

  const body = (
    <div className={classes.paper}>
      {allProducts.products &&
        allProducts.products.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImage>
                <img src={DummyImage} alt="Dummy Image" />
              </ProductImage>
              <ProductName>
                {product.name} #{index + 1}
              </ProductName>
              <ProductPrize>${product.price}</ProductPrize>
            </ProductCard>
          )
        })}
      <SubmitBtn onClick={handleClose}>Submit</SubmitBtn>
    </div>
  )

  return (
    <>
      <Heading>
        <HeadingWrapper>
          <Link to="/">JAM SHOP</Link>
          <ShoppingCartBox onClick={handleOpen}>
            <img src={CartComponent} alt="Shopping cart component" />
            <EclipseWrapper disabled={products.products.length <= 0 && true}>
              <p>{products.products.length}</p>
            </EclipseWrapper>
          </ShoppingCartBox>
        </HeadingWrapper>
      </Heading>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  )
}

export default Header
