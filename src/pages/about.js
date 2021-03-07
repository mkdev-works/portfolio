import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Image from "../components/image.js"
import Meta from "../components/meta.js"

const About = () => {
  return (
    <div>
      <Layout>
        <Meta
          title="プロフィール"
          desc="基本情報、資格、開発環境などの説明です"
        ></Meta>

        {/* 基本情報 */}
        <section id="base" className="content-container">
          <div className="container">
            <h2>基本情報</h2>
            <div className="contents">
              <div className="profile">
                <Image filename="profile2.png" alt="いえーい" />
              </div>
              <div className="text-content">
                <dl className="two-columns">
                  <dt>名前</dt>
                  <dd>KM(本名の頭文字です)</dd>

                  <dt>年齢</dt>
                  <dd>三十代後半</dd>

                  <dt>家族構成</dt>
                  <dd>
                    <ul>
                      <li>人：1人（本人）</li>
                      <li>犬：1匹</li>
                      <li>猫：3匹</li>
                    </ul>
                  </dd>

                  <dt>居住地</dt>
                  <dd>
                    宮崎県宮崎市<br></br>
                    就職で２年くらい関東（東京・埼玉）に住みました。<br></br>
                    単身で犬猫を飼っているため、引っ越しは考えていません。
                  </dd>

                  <dt>趣味</dt>
                  <dd>
                    <ul>
                      <li>
                        読書<br></br>
                        月5〜10冊（漫画・小説、実用書、テキストなど）
                      </li>
                      <li>
                        ゲーム<br></br>
                        年1〜2本(シミュレーション、RPGが好き)
                      </li>
                      <li>
                        バイク<br></br>
                        ホンダ クロスカブ CC110(JA45)
                      </li>
                    </ul>
                  </dd>

                  <dt>健康状態</dt>
                  <dd>
                    持病：腰痛(だいぶ改善)<br></br>
                    椎間板への負担を軽減すべく、1ヶ月に1kgのペースで減量中です。
                    <br></br>
                  </dd>

                  <dt>その他</dt>
                  <dd>
                    健康のために毎朝ラジオ体操をやってます。始めてから半年、割と快調！
                    <br></br>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* 資格 */}
        <section id="certified" className="content-container">
          <div className="container">
            <h2>資格</h2>
            <div className="contents">
              {/* Webサイト */}
              <div className="half-content">
                <h3>開発関連</h3>
                <ul>
                  <li>初級システムアドミニストレーター</li>
                  <li>基本情報技術者</li>
                  <li>Oracle認定 Javaプログラマ(OJC-P) SE6</li>
                </ul>
              </div>
              <div className="half-content">
                <h3>その他</h3>
                <ul>
                  <li>日商簿記2級</li>
                  <li>ファイナンシャルプランナー3級</li>
                  <li>普通自動車免許(AT限定)</li>
                  <li>小型限定普通二輪免許(AT限定)</li>
                  <li>小型船舶免許</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="dev" className="content-container">
          <div className="container">
            <h2>作業環境</h2>
            <div className="contents">
              <div className="half-content">
                <h3>リモートワーク対応できます</h3>
                <Image filename="room.jpg" alt="作業環境" />
                <p className="description">
                  Webカメラがスマホでよければいつでもリモートワーク可能
                </p>
              </div>
              <div className="half-content">
                <h3>開発・動作確認端末</h3>
                <ul>
                  <li>Mac mini(Big Sur)</li>
                  <li>Windowsノート(Win10)</li>
                  <li>iPhone X Max, iPad Pro12.9(3rd)</li>
                  <li>Androidスマホ</li>
                </ul>
                <h3>エディタ・IDE</h3>
                <ul>
                  <li>VSCode（メイン）</li>
                  <li>Eclipse（過去）</li>
                  <li>秀丸（Win）</li>
                </ul>
                <h3>その他</h3>
                <ul>
                  <li>椅子：アーロンチェア（腰痛対策）</li>
                  <li>キーボード：東プレ RealForce（腱鞘炎対策）</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}
export default About
