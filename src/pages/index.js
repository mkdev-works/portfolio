import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Image from "../components/image.js"

const Home = () => {
  return (
    <div>
      <Layout>
        {/* mainタグ内部 */}
        <section id="hello" className="content-container">
          <div className="container">
            <h2>ご挨拶</h2>
            <div className="contents">
              <div className="profile">
                <Image filename="profile.png" alt="いえーい" />
              </div>
              <div className="text-content">
                <p>
                  ご覧いただきありがとうございます。KMのポートフォリオサイトです。
                </p>
                <p>
                  新卒でシステム開発会社に入社し、関東・九州にて12年ほどサーバー側メインのシステムエンジニアとして設計開発を行ってきました。
                </p>
                <p>
                  フロントエンド、インフラなど知見を広げたく思い、退職後はAWSやPHP(Laravel)、Vue.jsなどを独習しています。
                </p>

                <p>
                  また、Web系の職業訓練校にてデザインやバナー作成、マーケティングや広告、ネットショップ運営や企画など広範なWebの基礎知識を学びました。動画編集ソフト(Adobe
                  Premiere Pro)も基本操作が可能です。
                </p>
                <p>
                  現在、宮崎県宮崎市もしくはフルリモートで働ける開発・コーディング・IT系のお仕事を探しております。よろしくお願いします！
                </p>
                <div className="footer-link">
                  <Link to="/about">詳しくはこちら（自己紹介へ）</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skill" className="content-container">
          <div className="container">
            <h2>スキル・経験</h2>
            <div className="contents">
              {/* Webサイト */}
              <div className="half-content">
                <h3>開発工程</h3>
                <p>
                  ※プロジェクトごと・お客様ごとに異なる設計書の形式やコーディング規約に沿って設計・開発業務を行ってきました。
                </p>
                <ul>
                  <li>基本設計</li>
                  <li>詳細設計</li>
                  <li>コーディング</li>
                  <li>単体試験設計・実施</li>
                  <li>総合試験設計・実施</li>
                </ul>
              </div>
              <div className="half-content">
                <h3>主な開発業務と使用スキル</h3>

                <ul>
                  <li>
                    業務管理系Webシステム(ATM管理、警備会社の警送管理、地方自治体のVoIP放送管理、他)
                  </li>
                  <ul>
                    <li>
                      Java(Struts), Adobe Flex, HTML, CSS, Javascript(jQuery)
                    </li>
                    <li>Oracle, MySQL, PostgreSQLなど</li>
                  </ul>
                  {/* <li>地方自治体のWebサービス</li>
                  <ul>
                    <li>Java(Spring), HTML, CSS, Javascript(jQuery)</li>
                    <li>Oracle</li>
                  </ul>
                  <li>記事コンテンツ投稿・管理サイト</li>
                  <ul>
                    <li>Java, Adobe Flex</li>
                  </ul>*/}
                  <li>ショッピングサイトの夜間バッチ処理</li>
                  <ul>
                    <li>Java(Spring Boot)</li>
                    <li>MySQL</li>
                  </ul>
                  <li>電子カルテ(デスクトップアプリ)</li>
                  <ul>
                    <li>Java(Swing)</li>
                    <li>IBM DB2</li>
                  </ul>
                  <li>一般顧客向け自社Webサービス</li>
                  <ul>
                    <li>PHP, HTML, CSS, Javascript(jQuery)</li>
                    <li>MySQL</li>
                  </ul>
                </ul>
                <div className="footer-link">
                  <Link to={"/skill"}>詳しくはこちら(スキル詳細へ)</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skill" className="content-container">
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
                  <Link to="/works">詳しくはこちら(XXXへ)</Link>
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
                  <Link to="/works">詳しくはこちら(XXXへ)</Link>
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
                  <Link to="/works">詳しくはこちら(XXXへ)</Link>
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
                  <Link to="/works">詳しくはこちら(XXXへ)</Link>
                </div>
              </div>
              {/* PowerPoint */}
              <div className="half-content">
                <h3>プレゼン</h3>
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
                  <Link to="/works">詳しくはこちら(XXXへ)</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default Home
