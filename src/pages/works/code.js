import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Image from "../../components/image.js"
import Meta from "../../components/meta.js"

const Code = () => {
  return (
    <div>
      <Layout>
        <Meta title="コーディング" desc="コーディングの実例集です"></Meta>
        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>コーディング</h2>
            <div className="contents">
              {/* Webサイト */}
              {/* 作例 */}
              <div className="full-content">
                <h3>Gatsby.jsを使用したポートフォリオサイト</h3>
                <div className="works">
                  <div className="work">
                    <h4>目標：Gatsby.jsを使ってサイト構築</h4>
                    <Image
                      filename="01_gatsby-portfolio.jpg"
                      alt=""
                      className="half"
                      caption="HTML/CSS(SCSS)/Gatsby.js/Netlify"
                    />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      <a
                        href="https://github.com/mkdev-works/portfolio"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHubへ
                      </a>
                    </div>

                    <h4>説明</h4>
                    <p>
                      このポートフォリオサイトです。<br></br>
                      レスポンシブ対応は普通にCSS(SCSS)手書きしました。<br></br>
                      コンポーネントの共通化以外全ページ手書きですが、もう少し勉強して理解が進んだら外部ソースからAPIで取得したデータを元にページを作ったりいろいろ試してみたいです。
                    </p>
                    <p>デプロイ先はNetlifyを初使用。</p>
                    <p>
                      インストールしたプラグインはひとまず以下。画像の扱いはかなり良さそう。
                      <ul>
                        <li>SCSS関連</li>
                        <li>画像関連</li>
                        <li>メタデータ</li>
                        <li>フォント関連</li>
                      </ul>
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
                <h3>Laravelマルチログイン+AmazonSES</h3>
                <div className="works">
                  <div className="work">
                    <h4>目標：Vue.js+Laravelでマルチログインを行う</h4>
                    <Image filename="01_user-01.png" alt="" className="half" />
                    <Image filename="01_user-02.png" alt="" className="half" />
                    <Image filename="02_staff-01.png" alt="" className="half" />
                    <Image
                      filename="02_staff-02.png"
                      alt=""
                      className="half"
                      caption="Laravel/Vue.js/マルチログイン/Amazon SES/EC2へのデプロイ"
                    />
                  </div>
                  <div className="detail">
                    <h4>成果物</h4>
                    <div className="links">
                      <a
                        href="https://github.com/mkdev-works/laravel_multi_auth"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHubへ
                      </a>
                    </div>
                    <h4>説明</h4>
                    <p>
                      Webサービスに管理画面が必要な場合、一般ユーザーと管理ユーザーのログイン情報はどうやって分けるのか？と気になったので調べて実装。
                    </p>
                    <p>
                      ユーザー側のログインはメールアドレス認証でAmazonSES(メール送信サービス)を使用。
                    </p>
                    <p>
                      ログイン後の中身はほとんどないですが、マルチ認証ログイン処理の実装自体にめちゃくちゃ苦労した記憶はあります。
                      <br></br>
                      あと、AWSのEC2にLaravelプロジェクトをデプロイする練習にもなりました。
                    </p>
                    <p>
                      その後の処理を作りかけの状態でAWSの無料期間が終わってしまったので現在は非公開。
                    </p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
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
