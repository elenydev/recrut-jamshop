import React from "react"
import { createGlobalStyle } from "styled-components"

import Header from "../components/Header"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #1C042E;
    color: white;
  };
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <footer />
    </>
  )
}
