import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Image from "../../components/image.js"
import Meta from "../../components/meta.js"

const Template = () => {
  return (
    <div>
      <Layout>
        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>XXXXX</h2>
            {/* <Link to="/works">ポートフォリオ一覧へ戻る</Link> */}
            <div className="contents">
              {/* 作例1 */}
              <div className="full-content">
                <h3>TODOtitle</h3>
                <div className="works">
                  <div className="work">
                    <h4>課題：TODO</h4>
                    <Image filename="cafe-site-image1.jpg" alt="" />
                    <Image filename="cafe-site-image2.jpg" className="half" />
                    <Image filename="cafe-site-image3.jpg" className="half" />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      {/* TODO */}
                      <Link to="/works">GitHubへ</Link>
                      <Link to="/works">動作サンプルへ</Link>
                    </div>
                    <h4>完成イメージ</h4>
                    <Image filename="01_cafe.jpg" className="half" />
                    <p className="description">TODOHTML/CSS</p>
                    <h4>説明</h4>
                    <p>TODOXXXXX</p>
                  </div>
                </div>
              </div>
              {/* 作例1 */}
              <div className="full-content">
                <h3>TODOtitle</h3>
                <div className="works">
                  <div className="work">
                    <h4>課題：TODO</h4>
                    <Image filename="cafe-site-image1.jpg" alt="" />
                    <Image filename="cafe-site-image2.jpg" className="half" />
                    <Image filename="cafe-site-image3.jpg" className="half" />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      {/* TODO */}
                      <Link to="/works">GitHubへ</Link>
                      <Link to="/works">動作サンプルへ</Link>
                    </div>
                    <h4>完成イメージ</h4>
                    <Image filename="01_cafe.jpg" className="half" />
                    <p className="description">TODOHTML/CSS</p>
                    <h4>説明</h4>
                    <p>TODOXXXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default Template
