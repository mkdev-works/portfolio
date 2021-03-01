import React from "react"
import Header from "./header"
import Footer from "./footer"

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
