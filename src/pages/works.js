import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Image from "../components/image.js"
import Meta from "../components/meta.js"

const Works = () => {
  return (
    <div>
      <Layout>
        <Meta
          title="ポートフォリオ"
          desc="静的Webサイト作成、コーディング、画像編集、Officeなどの作品集"
        ></Meta>

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
                    <Image
                      filename="01_cafe.jpg"
                      alt=""
                      caption="テーマ：架空のカフェ"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="02_photo.jpg"
                      alt=""
                      caption="テーマ：架空のPhotoサイト"
                    />
                  </div>
                </div>

                <div className="footer-link">
                  <Link to="/works/website">Webサイト作成例を見る</Link>
                </div>
              </div>
              {/* コーディング */}
              <div className="half-content">
                <h3>コーディング</h3>
                <p>PHPとJavascriptの勉強で書いたコードです。</p>
                <div className="works">
                  <div className="work">
                    <Image
                      filename="01_gatsby-portfolio.jpg"
                      alt=""
                      caption="テーマ：Gatsby.jsを使用したポートフォリオサイト"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="01_user-01.png"
                      alt=""
                      caption="テーマ：Vue.js,Laravelマルチログイン,AmazonSESを試す"
                    />
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
                    <Image
                      filename="ps-bn_01-01_chirashi-after.png"
                      alt=""
                      caption="テーマ：既に存在するチラシの一部を修正(情報量そのままデザイン修正)"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="ps-bn_04-01_cacaomania.png"
                      alt=""
                      caption="テーマ：架空のBeen to BarチョコレートショップのWebバナー"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="ps-bn_02-01_banner-600px.png"
                      alt=""
                      caption="テーマ：職業訓練校のWebバナー(画像サイズ別・5種)"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="ps-bn_03-01_stories01.png"
                      alt=""
                      caption="テーマ：架空のカップケーキ屋さんの開店広告(インスタ)"
                    />
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
                    <Image
                      filename="word1.jpg"
                      alt=""
                      caption="テーマ：書式,画像,表"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="excel1.jpg"
                      alt=""
                      caption="テーマ：書式,一覧,関数,グラフ"
                    />
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
                    <Image
                      filename="powerPoint1.png"
                      alt=""
                      caption="テーマ：好きなものを推す"
                    />
                  </div>
                  <div className="work">
                    <Image
                      filename="powerPoint2.jpg"
                      alt=""
                      caption="テーマ：Git紹介"
                    />
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
