import React from "react"
import styled from "styled-components"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ background }) => `url(${background}) no-repeat`};
  background-position: right top -50px;

  @media (min-width: 960px) {
    min-height: 45vh;
    background-position: right top -100px;
  }
`

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding-top: 10%;

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 2%;
    width: 80%;
  }
  @media (min-width: 1480px) {
    width: 70%;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  background: ${({ background }) => `url(${background}) no-repeat right top`};
  flex-direction: column;
  @media (min-width: 960px) {
    width: 40%;
  }
`

const Header = styled.h1`
  font-family: "Georgia", sans-serif;
  font-weight: 700;
  color: #e4e3e3;
  font-size: 1.5em;
  padding: 5%;

  @media (min-width: 960px) {
    font-size: 2em;
  }

  @media (min-width: 1280px) {
    font-size: 2.5em;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background: #ab528d;
  color: #fff;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.4s all ease-in;
  padding: 5px 10px;

  &:hover {
    background-color: #f8af23;
    transform: scale(1.05);
  }

  @media (min-width: 960px) {
    margin-top: 20px;
    padding: 10px 20px;
  }
`

const HomepageHero = () => {
  return (
    <section>
      <HeroWrapper background={HeroBackground}>
        <HeroContentWrapper>
          <img src={HeroImage} />

          <HeaderContainer background={HeroDecor}>
            <Header>
              Don't waste time
              <br />
              on boring things
            </Header>
            <Button>GO EXPLORE</Button>
          </HeaderContainer>
        </HeroContentWrapper>
      </HeroWrapper>
    </section>
  )
}

export default HomepageHero
