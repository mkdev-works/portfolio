import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Meta from "../../components/meta.js"
import Image from "../../components/image.js"

const Powerpoint = () => {
  return (
    <div>
      <Layout>
        <Meta title="PowerPoint" desc="PowerPointでのプレゼン資料集です"></Meta>
        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>PowerPoint</h2>
            <div className="contents">
              {/* 作例1 */}
              <div className="full-content">
                <h3>課題：自分の好きなものについて皆にオススメする</h3>

                <div className="works">
                  <div className="work">
                    <Image
                      filename="powerPoint1.png"
                      caption="プレゼンの構成/デザイン・テーマ統一/トランジション/発表時間の管理/滑舌の悪さ・緊張との戦い/"
                    />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      <a
                        href="https://gxa5jpzx-my.sharepoint.com/:p:/g/personal/kusumegi_gxa5jpzx_onmicrosoft_com/ETljihKbMQ9BuHYUT8g1C7QBufyinfeGL-e5BfCio0I-jA?e=UncdHQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        プレゼン資料へ(Office365)
                      </a>
                    </div>
                    <h4>説明</h4>
                    <p>
                      PowerPointは未経験だったので、全体の構成の組み立て方、PowerPointの使い方などたいへん勉強になりました。
                    </p>
                  </div>
                </div>

                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>
              {/* 作例ここまで */}
              {/* 作例2 */}
              <div className="full-content">
                <h3>非エンジニア向けにGitを紹介する</h3>

                <div className="works">
                  <div className="work">
                    <Image
                      filename="powerPoint2.jpg"
                      caption="プレゼンの構成/図形・画像/デザイン・テーマ統一/発表時間の管理"
                    />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      <a
                        href="https://gxa5jpzx-my.sharepoint.com/:p:/g/personal/kusumegi_gxa5jpzx_onmicrosoft_com/EbFP0t-DAF1KtlwOMgBmXEABmuSWqnftbREk6fxULY6teg?e=FtNKe5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        プレゼン資料へ(Office365)
                      </a>
                    </div>
                    <h4>説明</h4>
                    <p>
                      ミスって作業途中でファイルをダメにしてしまった……という話をきくたびに皆Git使ったら幸せになれるのにな、と思っていたのでプレゼンしました。
                    </p>
                  </div>
                </div>

                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>
              {/* 作例ここまで */}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default Powerpoint
