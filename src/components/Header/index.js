import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import CartComponent from "../../assets/elements/shopping_cart_bin.svg"
import Eclipse from "../../assets/elements/eclipse.svg"

const Heading = styled.header`
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 99;
  position: fixed;
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
`

const EclipseWrapper = styled.div`
  position: absolute;
  right: -10%;
  z-index: 99;
  bottom: 50%;
  transform: translateY(40%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 13px;
  font-size: 0.8em;

  p {
    position: absolute;
  }
`

const Header = () => {
  return (
    <Heading>
      <HeadingWrapper>
        <Link to="/">JAM SHOP</Link>
        <ShoppingCartBox>
          <img src={CartComponent} alt="Shopping cart component" />
          <EclipseWrapper>
            <img src={Eclipse} alt="Eclipse" />
            <p>0</p>
          </EclipseWrapper>
        </ShoppingCartBox>
      </HeadingWrapper>
    </Heading>
  )
}

export default Header
