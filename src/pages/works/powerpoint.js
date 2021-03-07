import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Image from "../../components/image.js"
import Meta from "../../components/meta.js"

const Powerpoint = () => {
  return (
    <div>
      <Layout>
        <Meta title="PowerPoint" desc="PowerPointでのプレゼン資料集です"></Meta>
        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>PowerPoint</h2>
            {/* <Link to="/works">ポートフォリオ一覧へ戻る</Link> */}
            <div className="contents">
              {/* 作例1 */}
              <div className="full-content">
                <h3>課題：自分の好きなものについて皆にオススメする</h3>
                <p>
                  PowerPointは未経験だったので、全体の構成の組み立て方、PowerPointの使い方などたいへん勉強になりました。
                </p>
                <iframe
                  src="https://gxa5jpzx-my.sharepoint.com/personal/kusumegi_gxa5jpzx_onmicrosoft_com/_layouts/15/Doc.aspx?sourcedoc={128a6339-319b-410f-b876-144fc8350bb4}&amp;action=embedview&amp;wdAr=1.7777777777777777"
                  frameborder="0"
                >
                  これは、
                  <a target="_blank" href="https://office.com/webapps">
                    Office
                  </a>
                  の機能を利用した、
                  <a target="_blank" href="https://office.com">
                    Microsoft Office
                  </a>
                  の埋め込み型のプレゼンテーションです。
                </iframe>
                <p className="description">
                  プレゼンの構成/デザイン・テーマ統一/トランジション/発表時間の管理/滑舌の悪さ・緊張との戦い/
                </p>
              </div>
              {/* 作例ここまで */}
              {/* 作例2 */}
              <div className="full-content">
                <h3>非エンジニア向けにGitを紹介する</h3>
                <p>
                  ミスって作業途中でファイルをダメにしてしまった……という話をきくたびに皆Git使ったら幸せになれるのにな、と思っていたのでプレゼンしました。(まあ共有PCでは使えないのですけど)
                  <br></br>
                </p>
                <iframe
                  src="https://gxa5jpzx-my.sharepoint.com/personal/kusumegi_gxa5jpzx_onmicrosoft_com/_layouts/15/Doc.aspx?sourcedoc={dfd24fb1-0083-4a5d-b65c-0e3200665c40}&amp;action=embedview&amp;wdAr=1.7777777777777777"
                  frameborder="0"
                >
                  これは、
                  <a target="_blank" href="https://office.com/webapps">
                    Office
                  </a>{" "}
                  の機能を利用した、
                  <a target="_blank" href="https://office.com">
                    Microsoft Office
                  </a>{" "}
                  の埋め込み型のプレゼンテーションです。
                </iframe>
                <p className="description">
                  プレゼンの構成/図形・画像/デザイン・テーマ統一/発表時間の管理
                </p>
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
