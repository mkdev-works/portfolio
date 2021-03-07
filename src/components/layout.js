import React from "react"
import Header from "./header"
import Footer from "./footer"
import "fontsource-noto-sans-jp"

const Layout = props => {
  return (
    <div id="top-container">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
