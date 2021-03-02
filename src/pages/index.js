import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"

const Home = () => {
  return (
    <div>
      <Layout>
        {/* mainタグ内部 */}
        <div className="container">
          <section id="hello" className="content">
            <h2>ご挨拶</h2>
            <div className="contents">
              <div className="content image-content">画像</div>
              <div className="content text-content">
                <p>
                  ご覧いただきありがとうございます。MKのポートフォリオサイトです。
                </p>
                <p>
                  新卒でシステム開発会社に入社し、関東・九州にて12年ほどサーバー側メインのプログラマ・システムエンジニアとして設計から総合試験までを担当致しました。
                </p>
                <p>
                  フロントエンド、インフラなど知見を広げたく思い、退職後はAWSやPHP(Laravel)、Vue.jsなどを独習しています。
                </p>
                <p>
                  また、Web系の職業訓練校にてサイトデザインやAdobe
                  Photoshopでのバナー作成、マーケティングや広告、ネットショップ運営・企画など広範なWebの基礎知識を学びました。動画編集ソフト(Adobe
                  Premiere Pro)も基本操作が可能です。
                </p>
                <p>
                  現在、宮崎県宮崎市内もしくはフルリモートで働ける開発・コーディング・IT系のお仕事を探しております。よろしくお願いします。
                </p>
                <div className="footer-link">
                  <Link to="/about">＞＞ 詳しくはこちら</Link>
                </div>
              </div>
            </div>
          </section>
          <section id="skill" className="content">
            <h2>スキル</h2>
            <div className="contents">
              <div className="content image-content">画像</div>
              <div className="content text-content">
                <h3>主な担当工程</h3>
                <p>
                  基本設計、詳細設計、製造、単体試験設計、単体試験、総合試験設計、総合試験
                </p>
                <p>
                  ※プロジェクトごと・お客様ごとに異なる設計書の形式やコーディング規約に沿って設計・開発業務を行ってきました
                </p>
                <h3>主な開発業務と使用スキル</h3>
                <ul>
                  <li>
                    業務管理系Webシステム(ATM管理、警備会社の警送管理、自治体のVoIP放送管理、他)
                  </li>
                  <ul>
                    <li>Java(Struts)</li>
                    <li>Oracle, MySQLなど</li>
                  </ul>
                  <li>地方自治体のWebサービス</li>
                  <ul>
                    <li>Java(Spring), HTML, CSS, Javascript(jQuery)</li>
                    <li>Oracle</li>
                  </ul>
                  <li>報道記事コンテンツ投稿・管理サイト</li>
                  <ul>
                    <li>Java, Adobe Flex</li>
                  </ul>
                  <li>ショッピングサイトの夜間バッチ処理アプリ</li>{" "}
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
                  <Link to="/skill">＞＞ 詳しくはこちら</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  )
}
export default Home
