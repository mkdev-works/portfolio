import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Image from "../../components/image.js"

const Code = () => {
  return (
    <div>
      <Layout>
        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>コーディング</h2>
            {/* <Link to="/works">ポートフォリオ一覧へ戻る</Link> */}
            <div className="contents">
              {/* Webサイト */}
              <div className="full-content">
                <h3>XXX</h3>
                {/* 作例 */}
                <div className="works">
                  <div className="work">
                    <h4>課題：デザイン(PSD)</h4>
                    <Image filename="cafe-site-image1.jpg" alt="" />
                    <Image filename="cafe-site-image2.jpg" className="half" />
                    <Image filename="cafe-site-image3.jpg" className="half" />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      <a
                        href="https://github.com/mkdev-works/portfolio-cafe-site"
                        target="_blank"
                      >
                        GitHubへ
                      </a>
                      <a
                        href="http://km-portfolio-cafe.mtnk.work/"
                        target="_blank"
                      >
                        動作サンプルへ
                      </a>
                    </div>
                    <h4>完成イメージ</h4>
                    <Image filename="01_cafe.jpg" className="half" />
                    <p className="description">HTML/CSS</p>
                    <h4>説明</h4>
                    <p>
                      デザイナーさんが作成したPSDファイルをもとにHTML,CSSでのコーディング。
                      <br></br>
                      レスポンシブ対応は普通にCSS手書きしました
                    </p>
                  </div>
                </div>
                {/* 作例ここまで */}
              </div>
              {/* 作例1 */}
              <div className="full-content">
                <h3>架空のPhotoサイト</h3>
                <div className="works">
                  <div className="work">
                    <h4>課題：デザイン(PSD)</h4>
                    <Image filename="photo-site.jpg" alt="" />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      <a
                        href="https://github.com/mkdev-works/portfolio-photo-site/"
                        target="_blank"
                      >
                        GitHubへ
                      </a>
                      <a
                        href="http://km-portfolio-photo.mtnk.work/"
                        target="_blank"
                      >
                        動作サンプルへ
                      </a>
                    </div>
                    <h4>完成イメージ</h4>
                    <Image filename="02_photo.jpg" className="half" />
                    <p className="description">HTML/CSS</p>
                    <h4>説明</h4>
                    <p>
                      デザイナーさんが作成したPSDファイルをもとにHTML,CSSでのコーディング。
                      <br></br>
                      あらかじめPSDファイルに幅や高さのメモを書き加えておけばコーディングが楽なのだと学びました。
                    </p>
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
export default Code
