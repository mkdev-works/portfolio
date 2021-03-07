import React from "react"

import Layout from "../components/layout.js"
const NotFound = () => {
  return (
    <div>
      <Layout>
        <section id="error" className="content-container">
          <div className="container">
            <h1>404 Not Found アクセスされたページは存在しません。</h1>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default NotFound
