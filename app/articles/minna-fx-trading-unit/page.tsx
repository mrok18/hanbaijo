import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'みんなのFXの取引単位｜1Lot＝1万通貨・0.1Lotからの始め方', description: 'みんなのFXの1Lotと0.1Lot、1,000通貨取引の考え方を公式情報で整理し、必要証拠金を数量別に確認する方法を解説します。' };

export default function Page() { return <article>
  <p className="page-kicker">みんなのFX / UNIT</p>
  <h1>みんなのFXの取引単位<br />1Lotと0.1Lotを整理</h1>
  <p className="lede">みんなのFXは1Lot＝10,000通貨ですが、全通貨ペアを1,000通貨（0.1Lot）から取引できます。Lot表記と通貨数を揃えてから、必要証拠金と損益を試算します。</p>
  <h2>1Lot・0.1Lotの対応関係</h2>
  <div className="table-scroll"><table className="rates"><thead><tr><th>表示</th><th>通貨数量</th><th>使いどころ</th></tr></thead><tbody><tr><td>1Lot</td><td>10,000通貨</td><td>通常の基準単位</td></tr><tr><td>0.1Lot</td><td>1,000通貨</td><td>少額練習・数量調整</td></tr><tr><td>0.01Lot</td><td>100通貨相当ではない</td><td>取引可否は公式の最小単位を確認</td></tr></tbody></table></div>
  <p>「0.1Lot＝1,000通貨」はみんなのFXの案内に基づく表記です。通貨ペアによって1Lotあたりの数量が異なる場合があるため、発注画面の取引単位を確認します。</p>
  <h2>必要証拠金は数量とレートで変わる</h2>
  <div className="callout"><strong>必要証拠金の目安を先に確認</strong><p>同じ0.1Lotでも、通貨ペアの価格や証拠金率で必要額は変わります。口座残高ぎりぎりではなく、含み損とスプレッド拡大に備える余裕資金を残します。</p><Link href="/tools/fx-position-size-calculator">FXポジションサイズ計算機を使う →</Link></div>
  <div className="fx-metric-grid"><article><b>1LOT</b><h3>10,000通貨</h3><p>みんなのFXの基本単位</p></article><article><b>0.1LOT</b><h3>1,000通貨</h3><p>少額取引の入口</p></article><article><b>CHECK</b><h3>通貨ペア別</h3><p>数量の例外を確認</p></article><article><b>BUFFER</b><h3>余力を残す</h3><p>必要証拠金以上に準備</p></article></div>
  <h2>取引数量を決める順番</h2>
  <ol><li>通貨ペアと売買方向を決める</li><li>0.1Lot（1,000通貨）で必要証拠金を確認する</li><li>1回の損失許容額から数量を逆算する</li><li>ロスカットまでの余力を残して発注する</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://min-fx.jp/lineup/fx/service/margin/" target="_blank" rel="noopener noreferrer">みんなのFX「1,000通貨単位について」</a></li><li><a href="https://help.min-fx.jp/%E3%80%8C%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AEFX%E3%80%8D%E3%81%AE%E5%8F%96%E5%BC%95%E5%8D%98%E4%BD%8D%E3%82%92%E6%95%99%E3%81%88%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82-656d566b92850c0022e9e9b0">みんなのFX FAQ「取引単位」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/minna-fx-deposit-transfer">みんなのFXの入金・振替を確認する →</Link></p><p><Link href="/articles/minna-fx-losscut">みんなのFXのロスカットを確認する →</Link></p><p><Link href="/fx/minna-fx">みんなのFXの取引条件一覧へ →</Link></p>
</article>; }
