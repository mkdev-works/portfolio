import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Image from "../../components/image.js"
import Meta from "../../components/meta.js"

const Word = () => {
  return (
    <div>
      <Layout>
        <Meta title="Word,Excel" desc="Word,Excelでできることの一例です"></Meta>

        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>Word,Excel</h2>
            <div className="contents">
              {/* 作例1 */}
              <div className="full-content">
                <h3>Excel</h3>
                <div className="works">
                  <div className="work">
                    <h4>課題1：普通のエクセル文書作成</h4>
                    <Image filename="excel1.jpg" alt="Word文書" />
                    <p className="description">
                      ビジネス文書/書式/一覧/関数(SUM, LOOKUP, IFERROR)
                    </p>
                  </div>

                  <div className="work">
                    <h4>課題2：指定年月のカレンダーを自動生成</h4>
                    <Image
                      filename="excel2.jpg"
                      alt="Wordで作ったホットケーキレシピ"
                    />
                    <p className="description">日付関数の練習/カレンダー</p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>
              {/* 作例ここまで */}
              {/* 作例2 */}
              <div className="full-content">
                <h3>Word</h3>
                <div className="works">
                  <div className="work">
                    <h4>課題1：普通の文書作成</h4>
                    <Image filename="word1.jpg" alt="Word文書" />
                    <p className="description">
                      ビジネス文書/書式/表/写真/図形
                    </p>
                  </div>

                  <div className="work">
                    <h4>課題2：やわらかい文書作成</h4>
                    <Image
                      filename="word2.jpg"
                      alt="Wordで作ったホットケーキレシピ"
                    />
                    <p className="description">
                      一般向け文書/書式/箇条書き/画像
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
export default Word
