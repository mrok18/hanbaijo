import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-one-currency' },
  title: 'MATSUI FXは100円から？1通貨の必要証拠金と損益を計算',
  description: 'MATSUI FXの1通貨取引について、100円の意味、必要証拠金、1円動いたときの損益を具体例で解説します。',
};

const EXAMPLES = [
  { quantity: '1通貨', value: '150円', margin25: '6円', margin10: '15円', margin5: '30円', margin1: '150円', move: '±1円' },
  { quantity: '100通貨', value: '1万5,000円', margin25: '600円', margin10: '1,500円', margin5: '3,000円', margin1: '1万5,000円', move: '±100円' },
  { quantity: '1,000通貨', value: '15万円', margin25: '6,000円', margin10: '1万5,000円', margin5: '3万円', margin1: '15万円', move: '±1,000円' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">MATSUI FX SMALL START</p>
      <h1>MATSUI FXは100円から？<br />1通貨の必要証拠金と損益を計算</h1>
      <p className="lede">MATSUI FXは全取扱通貨ペアを1通貨単位から注文できます。ただし「100円」は必要証拠金が常に100円という意味ではありません。為替レート、数量、レバレッジコースで必要額は変わります。</p>

      <div className="callout"><strong>先に結論</strong><p>少額で始められる利点は、入金額の小ささよりも取引数量を細かく調整できることです。必要証拠金ぎりぎりではなく、相場変動に耐える余裕資金まで分けて考えます。</p></div>

      <h2>1通貨は、米ドル/円なら「1米ドル」</h2>
      <p>米ドル/円を1通貨注文する場合、取引金額は1米ドル分です。為替レートが1米ドル＝150円なら取引金額は150円。1,000通貨なら15万円です。実際に口座から差し引かれる必要証拠金は、取引金額へ選択したコースの証拠金率を掛けて計算します。</p>

      <div className="formula-box">
        <code>取引金額 ＝ 為替レート × 取引数量</code>
        <code>必要証拠金 ＝ 取引金額 × レバレッジコースの証拠金率</code>
        <small>MATSUI FX個人口座の証拠金率は、25倍＝4％、10倍＝10％、5倍＝20％、1倍＝100％</small>
      </div>

      <h2>米ドル/円が150円の場合の目安</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>数量</th><th className="num">取引金額</th><th className="num">25倍</th><th className="num">10倍</th><th className="num">5倍</th><th className="num">1倍</th><th className="num">1円変動時の損益</th></tr></thead>
          <tbody>{EXAMPLES.map((example) => (
            <tr key={example.quantity}>
              <td className="ex-name">{example.quantity}</td>
              <td className="num">{example.value}</td>
              <td className="num">{example.margin25}</td>
              <td className="num">{example.margin10}</td>
              <td className="num">{example.margin5}</td>
              <td className="num">{example.margin1}</td>
              <td className="num">{example.move}</td>
            </tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">単純計算例。実際の必要証拠金は注文時の松井証券生成レート等で決まり、端数処理もあります。</p></div>

      <h2>「100円から」は固定料金ではない</h2>
      <p>公式サイトは「100円（1通貨）から」と案内していますが、100円は取引手数料でも、最大損失でもありません。同じ1通貨でも通貨ペアと為替レートで取引金額が変わり、選ぶレバレッジコースによって必要証拠金も変わります。</p>
      <ul>
        <li>1通貨でも、為替レートが動けば評価損益が発生する</li>
        <li>スプレッドとスワップポイントは変動する</li>
        <li>必要証拠金ぴったりでは、わずかな逆行でも余力が小さい</li>
        <li>急変時はロスカットが間に合わず、預けた証拠金を上回る損失もあり得る</li>
      </ul>

      <h2>1通貨取引が向いている使い方</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>注文操作を確認</h3><p>画面の数量表示、成行・指値の違い、決済方法を小さい数量で確認できます。</p></article>
        <article><b>02</b><h3>損益の動きを体験</h3><p>為替レート、スプレッド、スワップが口座残高へどう反映されるかを観察できます。</p></article>
        <article><b>03</b><h3>数量を細かく調整</h3><p>1,000通貨刻みよりも、許容損失に合わせた数量へ近づけやすくなります。</p></article>
        <article><b>04</b><h3>自動売買を小さく検証</h3><p>自動売買も1通貨単位に対応しますが、複数注文分の必要資金と値動きへの余裕が必要です。</p></article>
      </div>

      <h2>余裕資金は必要証拠金と別に決める</h2>
      <p>例えば米ドル/円を100通貨保有すると、1円の逆行で100円の評価損です。必要証拠金が600円でも、口座資金600円だけで運用するのが安全という意味ではありません。損切りまでの値幅と数量から、許容損失を先に計算します。</p>
      <div className="formula-box"><code>想定損失 ＝ 損切り幅（円）× 取引数量</code><small>米ドル/円100通貨を2円幅で損切りする例：2円 × 100通貨 ＝ 200円（スプレッド等を除く）</small></div>

      <section className="article-affiliate" aria-label="MATSUI FXの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。記事の計算例や掲載順とは分けて掲載しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.matsui.co.jp/fx/relief/" target="_blank" rel="noopener noreferrer">松井証券「松井証券FXの6つのあんしん」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/margin-sim/" target="_blank" rel="noopener noreferrer">松井証券「証拠金シミュレーション」</a></li>
        </ul>
        <p>取引条件は2026年9月7日に確認しました。注文前に公式画面の最新値を確認してください。</p>
      </section>

      <p><Link href="/tools/matsui-fx-margin-calculator">必要証拠金と維持率を入力して計算する →</Link></p>
      <p><Link href="/fx/matsui">MATSUI FXのコストシートを見る →</Link></p>
      <p><Link href="/articles/matsui-fx-auto-trading-cost">自動売買に必要な資金を計算する →</Link></p>
      <p><Link href="/fx/minimum-trade-unit-comparison">FX各社の最低取引単位を比較する →</Link></p>
    </article>
  );
}
