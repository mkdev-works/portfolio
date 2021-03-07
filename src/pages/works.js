import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Image from "../components/image.js"
import ImageLink from "../components/imageLink.js"

const Works = () => {
  return (
    <div>
      <Layout>
        {/* ポートフォリオ */}
        <section id="work" className="content-container">
          <div className="container">
            <h2>ポートフォリオ</h2>
            <div className="contents">
              {/* Webサイト */}
              <div className="half-content">
                <h3>Webサイト作成</h3>
                <p>
                  デザインファイル(PSD)からのHTML,CSSコーディングが可能です。jQueryもだいたい使えます。
                </p>
                <div className="works">
                  <div className="work">
                    <Image filename="01_cafe.jpg" alt="" />
                    <p className="description">架空のカフェ</p>
                  </div>
                  <div className="work">
                    <Image filename="02_photo.jpg" alt="" />
                    <p className="description">架空のPhotoサイト</p>
                  </div>
                </div>

                <div className="footer-link">
                  <Link to="/works/website">Webサイト作成例を見る</Link>
                </div>
              </div>
              {/* コーディング */}
              <div className="half-content">
                <h3>コーディング</h3>
                <p>PHPとVue.jsの勉強で書いたコードです。</p>
                <div className="works">
                  <div className="work">
                    <Image filename="01_gatsby-portfolio.jpg" alt="" />
                    <p className="description">
                      このサイトです。流行りのSSG、Gatsby.jsを使ってみました。Reactの勉強もしたいです。
                    </p>
                  </div>
                  <div className="work">
                    <Image filename="02_photo.jpg" alt="" />
                    <p className="description">架空のPhotoサイト</p>
                  </div>
                </div>

                <div className="footer-link">
                  <Link to="/works/code">コーディング例を見る</Link>
                </div>
              </div>

              {/* 画像編集 */}
              <div className="full-content">
                <h3>画像編集</h3>
                <p>Photoshopを使用して簡単なバナー作成や画像編集が可能です。</p>
                <div className="works">
                  <div className="work">
                    <Image filename="ps-bn_01-01_chirashi-after.png" alt="" />
                    <p className="description">
                      テーマ：既に存在するチラシの一部を修正(情報量そのままデザイン修正)
                    </p>
                  </div>
                  <div className="work">
                    <Image filename="ps-bn_04-01_cacaomania.png" alt="" />
                    <p className="description">
                      テーマ：架空のBeen to BarチョコレートショップのWebバナー
                    </p>
                  </div>
                  <div className="work">
                    <Image filename="ps-bn_02-01_banner-600px.png" alt="" />
                    <p className="description">
                      テーマ：職業訓練校のWebバナー(画像サイズ別・5種)
                    </p>
                  </div>
                  <div className="work">
                    <Image filename="ps-bn_03-01_stories01.png" alt="" />
                    <p className="description">
                      テーマ：架空のカップケーキ屋さんの開店広告(インスタ)
                    </p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works/photoshop">画像編集例を見る</Link>
                </div>
              </div>

              {/* Word,Excel */}
              <div className="half-content">
                <h3>Word,Excel</h3>
                <p>Word,Excelの基本的な使用が可能です。</p>
                <div className="works">
                  <div className="work">
                    <Image filename="word1.jpg" alt="" />
                    <p className="description">書式/画像/表</p>
                  </div>
                  <div className="work">
                    <Image filename="excel1.jpg" alt="" />
                    <p className="description">書式/一覧/関数/グラフ</p>
                  </div>
                </div>

                <div className="footer-link">
                  <Link to="/works/word">Word,Excel例を見る</Link>
                </div>
              </div>
              {/* PowerPoint */}
              <div className="half-content">
                <h3>PowerPoint</h3>
                <p>PowerPointを使用したプレゼンが可能です。</p>
                <div className="works">
                  <div className="work">
                    <Image filename="powerPoint1.png" alt="" />
                    <p className="description">テーマ：好きなものを推す</p>
                  </div>
                  <div className="work">
                    <Image filename="powerPoint2.jpg" alt="" />
                    <p className="description">テーマ：Git紹介</p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works/powerpoint">PowerPoint例を見る</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ポートフォリオここまで */}
      </Layout>
    </div>
  )
}
export default Works
