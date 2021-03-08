import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Meta from "../components/meta.js"

const Skill = () => {
  return (
    <div>
      <Layout>
        <Meta
          title="スキル・業務経験"
          desc="これまでの経験業務やスキルなど"
        ></Meta>

        {/* スキル・業務経験 */}
        <section id="skill" className="content-container">
          <div className="container">
            <h2>スキル・業務経験</h2>
            <div className="contents">
              {/* 開発工程 */}
              <div className="half-content">
                <h3>開発工程</h3>
                <ul>
                  <li>基本設計</li>
                  <ul>
                    <li>画面設計</li>
                    <ul>
                      <li>画面レイアウト</li>
                      <li>入出力項目</li>
                      <li>画面項目アクション定義</li>
                    </ul>
                    <li>テーブル設計</li>
                    <ul>
                      <li>テーブル定義</li>
                      <li>CRUD図</li>
                    </ul>
                  </ul>
                  <li>詳細設計</li>
                  <ul>
                    <li>画面項目詳細</li>
                    <li>機能・イベントごとの処理詳細</li>
                    <li>SQL設計</li>
                    <li>I/O仕様</li>
                  </ul>
                  <li>コーディング</li>
                  <ul>
                    <li>フロントエンド(Javascript)</li>
                    <li>サーバー側</li>
                    <li>DB周り</li>
                  </ul>
                  <li>単体試験設計・実施</li>
                  <ul>
                    <li>詳細設計書またはソースコードからの因子分析</li>
                    <li>スタブ作成、JUnitなど</li>
                  </ul>
                  <li>総合試験設計・実施</li>
                  <ul>
                    <li>基本設計書、画面設計書をもとに試験設計</li>
                    <li>実画面で実施・エビデンス取得</li>
                  </ul>
                </ul>
              </div>
              <div className="half-content">
                <h3>主な開発業務と使用スキル</h3>
                <ul>
                  <li>
                    業務管理系Webシステム<br></br>
                    (ATM管理、警備会社の警送管理、地方自治体のVoIP放送管理 他)
                  </li>
                  <ul>
                    <li>
                      Java(Struts), Adobe Flex, HTML, CSS, Javascript(jQuery)
                    </li>
                    <li>Oracle, MySQL, PostgreSQLなど</li>
                  </ul>
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
                  <li>地図データチェック(バッチ)</li>
                  <ul>
                    <li>C++</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* スキルレベル */}
        <section id="skill-detail" className="content-container">
          <div className="container">
            <h2>開発スキル詳細</h2>
            <div className="contents">
              {/* 開発工程 */}
              <div className="half-content">
                <h3>言語</h3>
                <ul>
                  <li>Java…7年程度</li>
                  <ul>
                    <li>
                      Javaとオブジェクト指向の基本的な概念を理解し、クラス設計とコーディングが行える
                    </li>
                    <li>OracleのJava資格はSE6(Java6)で取得</li>
                    <li>
                      古いJava(6〜8)をメインに使っていたため、最新の機能については学習が必要
                    </li>
                  </ul>
                  <li>PHP…1~2年</li>
                  <ul>
                    <li>
                      Webサイトの一般的な処理を製造（フレームワークなし・自社ライブラリ）
                    </li>
                    <li>Laravel：独学、業務使用なし</li>
                  </ul>
                  <li>C++…半年以下</li>
                  <ul>
                    <li>理解が浅く、調べながら少し製造できるレベル</li>
                  </ul>
                </ul>

                <h3>DB</h3>
                <ul>
                  <li>Oracle…4年程度</li>
                  <li>IBM DB2…4年程度</li>
                  <li>MySQL…1〜2年</li>
                  <li>PostgreSQL…1〜2年</li>
                </ul>
                <ul>
                  <li>操作系(SELECT,UPDATEなど)…メインで使用</li>
                  <li>定義系(CREATE,ALTERなど)…調べつつ扱える</li>
                  <li>制御系(GRANTなど)…学習環境構築で触る程度</li>
                </ul>
              </div>
              <div className="half-content">
                <h3>Web系</h3>
                <ul>
                  <li>HTML…6〜7年程度</li>
                  <ul>
                    <li>div,span,a,imgなど基本的なタグの理解</li>
                    <li>新しめのタグはその都度勉強中</li>
                  </ul>
                  <li>CSS…6〜7年程度</li>
                  <ul>
                    <li>id,class指定での基本的なデザイン</li>
                    <li>SASS(SCSS)で効率よく記述</li>
                    <li>アニメーションや凝ったデザインは勉強中</li>
                  </ul>
                  <li>Javascript…6〜7年程度</li>
                  <ul>
                    <li>jQuery：指定方法や動作への基本的な理解</li>
                    <li>Vue.js：独習、業務使用なし。VueCLI,Vuetify</li>
                    <li>
                      Gatsby.js：独習、業務使用なし。このサイトを作る際に使用
                    </li>
                  </ul>
                </ul>

                <h3>その他</h3>
                <ul>
                  <li>Git, GitHub</li>
                  <ul>
                    <li>メンバーとして作業可能(commit,push,pullなど)</li>
                    <li>プロジェクトリポジトリ管理経験はなし</li>
                  </ul>
                  <li>Redmine(障害・進捗管理)</li>
                  <ul>
                    <li>メンバーとして作業可能</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* その他スキル・知見 */}
        <section id="other" className="content-container">
          <div className="container">
            <h2>その他</h2>
            <div className="contents">
              {/* 開発以外に勉強したこと */}
              <div className="half-content">
                <h3>開発以外のスキル</h3>
                <ul>
                  <li>デザインの基礎</li>
                  <ul>
                    <li>フォント/余白/レイアウト調整 など</li>
                  </ul>
                  <li>画像編集(Adobe Photoshop)</li>
                  <ul>
                    <li>画像編集とPhotoshopの基礎を理解</li>
                    <ul>
                      <li>画像形式/dpi/Webフォント</li>
                      <li>Photoshop基本操作/レイヤー/テキスト</li>
                      <li>フィルター/色調補正/シェイプ/アクション</li>
                    </ul>
                  </ul>
                  <li>動画編集(Adobe Premiere Pro)</li>
                  <ul>
                    <li>動画編集とPremiereProの基礎を理解</li>
                    <ul>
                      <li>動画形式/fps/コーデック</li>
                      <li>PremierePro基本操作/シーケンス/エフェクト</li>
                      <li>トリム・連結/文字入れ/音入れ/ファイル出力</li>
                    </ul>
                  </ul>
                  <li>Officeソフト基本操作</li>
                  <ul>
                    <li>Word</li>
                    <ul>
                      <li>基本操作/書式/表作成/画像挿入</li>
                    </ul>

                    <li>Excel</li>
                    <ul>
                      <li>集計表・グラフ作成</li>
                      <li>
                        SUM, COUNT, IF, IFERROR, SUMIFS, LOOKUP, TODAY, DATE,
                        EOMONTH, DATEIF など
                      </li>
                    </ul>
                    <li>PowerPoint</li>
                    <ul>
                      <li>スライド作成/テーマ/デザイン/アニメーション</li>
                    </ul>
                  </ul>
                  <li>Webマーケティング関連</li>
                  <ul>
                    <li>SNS基礎知識(Twitter,Instagram,Facebook)</li>
                    <li>記事ライティングの基礎知識</li>
                    <li>インターネット広告</li>
                    <ul>
                      <li>
                        リスティング広告/キーワード/マッチタイプ/クリエイティブ
                      </li>
                      <li>Google Ads/レポート作成</li>
                    </ul>
                    <li>マーケティングデータ分析</li>
                    <ul>
                      <li>
                        Googleアナリティクス/トラフィック/セッション/PV など
                      </li>
                      <li>簡単なレポート作成</li>
                    </ul>
                  </ul>
                </ul>
              </div>
              <div className="half-content">
                <h3>独習</h3>
                <ul>
                  <li>AWS</li>
                  <ul>
                    <li>以下程度の基礎知識</li>
                    <ul>
                      <li>Wordpressを公開できる</li>
                      <li>PHPのLaravelプロジェクトをデプロイできる</li>
                    </ul>
                    <li>
                      VPC / EC2 / RDS(MySQL) / S3 / CloudFront / ELB / Route53 /
                      Amplify / SES
                    </li>
                    <li>無料期間が終わったため学習中断</li>
                  </ul>
                  <li>Laravel</li>
                  <ul>
                    <li>チュートリアルレベル</li>
                    <li>マルチログイン</li>
                  </ul>
                  <li>Vue.js</li>
                  <ul>
                    <li>チュートリアルレベル</li>
                    <li>Vue CLI</li>
                    <li>Vuetify</li>
                  </ul>
                  <li>チャットボット(Google Dialogflow)</li>
                  <ul>
                    <li>チュートリアルレベル</li>
                    <li>簡単な定型文での応答</li>
                    <li>LINEアカウントとの接続</li>
                  </ul>
                </ul>
                <h3>これから勉強したいこと</h3>
                <ul>
                  <li>フロントエンド</li>
                  <ul>
                    <li>TypeScript</li>
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>Gatsby.js</li>
                    <li>Bootstrap</li>
                  </ul>
                  <li>Webデザイン</li>
                  <ul>
                    <li>現代風のデザイン・パターン</li>
                    <li>Adobe XD</li>
                  </ul>
                  <li>英語</li>
                  <ul>
                    <li>チュートリアルを難なく読める程度</li>
                  </ul>
                  <li>AWS</li>
                  <ul>
                    <li>インフラへの基礎的な理解</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default Skill
