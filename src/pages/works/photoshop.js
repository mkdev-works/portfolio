import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout.js"
import Image from "../../components/image.js"
import Meta from "../../components/meta.js"

const Photoshop = () => {
  return (
    <div>
      <Layout>
        <Meta
          title="画像編集・バナー作成"
          desc="Photoshopでできることの実例集です"
        ></Meta>
        <section id="works" className="portfolio-row content-container">
          <div className="container">
            <h2>画像編集・バナー作成</h2>
            <div className="contents">
              {/* 作例1 */}
              <div className="full-content">
                <h3>高級チョコレート店のWebバナー</h3>
                <div className="works">
                  <div className="work">
                    <Image
                      filename="ps-bn_04-01_cacaomania.png"
                      alt=""
                      caption="高級感/受賞歴による権威付け/シェフの顔が見える安心感"
                    />
                  </div>
                  <div className="detail">
                    <h4>課題：架空のBeen to Barチョコレートショップ</h4>
                    <p>
                      高級チョコレートショップの各種情報を与えられ、トップページに表示するWebバナーを制作するというという課題。
                    </p>
                    <h4>説明</h4>
                    <p>
                      客層やペルソナ(30代女性/チョコにこだわり/インスタ/金銭に余裕あり)などを考え、刺さるワードやビジュアルを考慮した結果こうなりました。
                    </p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>

              {/* 作例2 */}
              <div className="full-content">
                <h3>既に存在するチラシのデザインを修正</h3>
                <Image filename="ps-bn_01-02_chirashi-diff.png" alt="" />
                <div className="works">
                  <div className="work">
                    <h4>課題：情報量を減らさずにデザインを整える</h4>
                    <Image
                      filename="ps-bn_01-01_chirashi-after.png"
                      alt=""
                      caption="サイズ/レイアウト/文字サイズ/カラー/余白"
                    />
                  </div>
                  <div className="detail">
                    <h4>説明</h4>
                    <p>
                      担当者の手作り感満載のお知らせチラシをいい感じにデザインし直すという課題。
                      <br></br>
                      全体的に緑でカラー統一し、情報の記載場所も横並びにレイアウトして見易さ・比較のしやすさを考慮しました。
                    </p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>

              {/* 作例3 */}
              <div className="full-content">
                <h3>職業訓練校のWebバナー</h3>
                <Image filename="ps-bn_02-02_banner-all.png" alt="" />
                <div className="works">
                  <div className="work">
                    <h4>課題：転職のために学びたい人に向けての広告バナー</h4>
                    <Image
                      filename="ps-bn_02-01_banner-600px.png"
                      alt=""
                      caption="安心感/無料/就職への期待"
                    />
                  </div>
                  <div className="detail">
                    <h4>説明</h4>
                    <p>
                      転職のために学びたい人に向けての広告バナーを作成するという課題。
                      <br></br>
                      まず情報整理をし、何をアピールしたら刺さるか考えてから作成に入りました。
                      <br></br>
                      やや詰め込みすぎたかもしれません。
                    </p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>

              {/* 作例4 */}
              <div className="full-content">
                <h3>カップケーキ店の開店インスタ広告</h3>
                <div className="works">
                  <div className="work">
                    <h4>課題：架空のカップケーキ屋さんのインスタ広告</h4>
                    <Image
                      filename="ps-bn_03-01_stories01.png"
                      alt=""
                      className="half"
                      caption="可愛さ/20台前半/インスタ映え/お得感"
                    />
                    <Image
                      filename="ps-bn_03-02_stories02.png"
                      alt=""
                      className="half"
                    />
                  </div>
                  <div className="detail">
                    <h4>説明</h4>
                    <p>
                      架空のカップケーキ屋さんの各種情報を与えられ、インスタに表示する広告画像を制作するというという課題。
                      <br></br>
                      広告の形式はストーリーズ広告を選択。<br></br>
                      客層やペルソナ(20台前半の女子大生/インスタが好き)などを考え、刺さるビジュアルを考慮した結果こうなりました。
                    </p>
                  </div>
                </div>
                <div className="footer-link">
                  <Link to="/works">ポートフォリオへ戻る</Link>
                </div>
              </div>

              {/* 作例5 */}
              <div className="full-content">
                <h3>バナートレース</h3>
                <h4>バナー作成練習のためのトレース1</h4>
                <Image
                  filename="ps-tr_01-02_diff.png"
                  alt=""
                  caption="上下・左右の余白統一/フォント/レイアウト/文字の色変え"
                />

                <h4>バナー作成練習のためのトレース2</h4>
                <Image
                  filename="ps-tr_02-02_diff.png"
                  alt=""
                  caption="上下・左右の余白統一/ズレ幅の統一"
                />

                <h4>バナー作成練習のためのトレース3</h4>
                <Image
                  filename="ps-tr_03-02_diff.png"
                  alt=""
                  caption="シェイプで棘円/色づいたドロップシャドウ/文字の傾き/パスツールでアイスの切り抜き"
                />

                <h4>バナー作成練習のためのトレース4</h4>
                <Image
                  filename="ps-tr_04-02_diff.png"
                  alt=""
                  caption="パスで吹き出し/文字の境界線"
                />
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
export default Photoshop
