import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTFは1,000通貨から？GX・MT4のLotと必要証拠金',
  description: 'FXTF GXとMT4の最小取引単位、Lot表記、個人口座の証拠金率を整理し、米ドル/円1,000通貨の必要証拠金と損益を計算します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FXTF / TRADE SIZE</p>
      <h1>FXTFは1,000通貨から？<br />GX・MT4のLotと必要証拠金</h1>
      <p className="lede">FXTF GXとFXTF MT4標準コースは、どちらも最低1,000通貨から取引できます。ただし、GXでは0.1Lot、MT4標準では0.01Lotと表示されるため、Lot数だけを比較すると数量を読み違えます。</p>

      <div className="callout"><strong>同じ1,000通貨でもLot表記が違う</strong><p>GXは1Lot＝1万通貨、MT4標準は1Lot＝10万通貨です。発注前に「Lot × 1Lotあたりの通貨数」で実数量へ戻します。</p></div>

      <h2>GXとMT4の数量換算</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>取引システム</th><th className="num">1Lot</th><th className="num">最低Lot</th><th className="num">最低取引数量</th><th>注文方式</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">FXTF GX-FX</td><td className="num">10,000通貨</td><td className="num">0.1Lot</td><td className="num"><strong>1,000通貨</strong></td><td>GXのブラウザ・アプリ</td></tr>
            <tr><td className="ex-name">FXTF MT4 標準</td><td className="num">100,000通貨</td><td className="num">0.01Lot</td><td className="num"><strong>1,000通貨</strong></td><td>カウントダウン方式</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">MT4ストリーミングコースは新規申込み・標準からの変更受付を終了しています。現在の新規利用は標準コースを前提に確認します。</p></div>

      <h2>米ドル/円1,000通貨の必要証拠金</h2>
      <p>個人口座の主要通貨ペアは取引時価総額の4％、レバレッジ25倍です。米ドル/円が140円なら、1,000通貨の取引金額は14万円、必要証拠金は5,600円となります。</p>
      <div className="formula-box">
        <code>140円 × 1,000通貨 × 4％ ＝ 5,600円</code>
        <code>140円 × 10,000通貨 × 4％ ＝ 56,000円</code>
        <small>説明用の計算。必要証拠金は為替レートに応じて変動します。</small>
      </div>

      <h2>1円動いたときの損益</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th className="num">取引数量</th><th className="num">0.1円（10銭）の変動</th><th className="num">1円の変動</th><th className="num">必要証拠金の例</th></tr></thead>
          <tbody>
            <tr><td className="num ex-name">1,000通貨</td><td className="num">100円</td><td className="num"><strong>1,000円</strong></td><td className="num">5,600円</td></tr>
            <tr><td className="num ex-name">10,000通貨</td><td className="num">1,000円</td><td className="num"><strong>10,000円</strong></td><td className="num">56,000円</td></tr>
            <tr><td className="num ex-name">100,000通貨</td><td className="num">10,000円</td><td className="num"><strong>100,000円</strong></td><td className="num">560,000円</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">米ドル/円140円、証拠金率4％の単純例。スプレッド、手数料、スワップは含みません。</p></div>

      <h2>一部通貨は証拠金率8％</h2>
      <p>FXTF GXではZAR/JPY・MXN/JPY、FXTF MT4ではTRY/JPY・ZAR/JPY・MXN/JPYについて、個人口座の証拠金率8％、レバレッジ12.5倍と案内されています。同じ1,000通貨でも主要通貨の4％計算をそのまま使えません。</p>

      <h2>必要証拠金だけでは足りない</h2>
      <p>5,600円は米ドル/円1,000通貨のポジションを建てるための例であり、推奨入金額ではありません。相場の逆行、スプレッド、建玉連動手数料、スワップを受け止める余力が別に必要です。</p>
      <div className="fx-metric-grid">
        <article><b>SPREAD</b><h3>売値と買値の差</h3><p>0.0銭の時間帯でも例外があり、時間外や相場急変時には拡大する可能性があります。</p></article>
        <article><b>POSITION FEE</b><h3>建玉連動手数料</h3><p>銘柄、売買方向、建玉・発注数量の合計により変わります。決済取引への手数料はありません。</p></article>
        <article><b>SWAP</b><h3>日をまたぐ受払い</h3><p>買いと売りで金額が異なり、受取りだけでなく支払いになる場合があります。</p></article>
        <article><b>PRICE MOVE</b><h3>評価損への余力</h3><p>1,000通貨でも1円逆行すれば1,000円の評価損です。想定逆行幅から資金を決めます。</p></article>
      </div>

      <h2>1,000通貨から始める確認手順</h2>
      <ol>
        <li>GXかMT4かを決め、1Lotの定義を確認する</li>
        <li>Lotを通貨数へ換算する</li>
        <li>現在レートと証拠金率で必要証拠金を計算する</li>
        <li>想定逆行幅による損失を加える</li>
        <li>建玉連動手数料・スプレッド・スワップを別に加える</li>
      </ol>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF「GX-FX取引概要」</a></li>
          <li><a href="https://www.fxtrade.co.jp/mt4-intro/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引概要」</a></li>
          <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
        </ul>
        <p>取引単位・証拠金率は2026年9月7日に確認しました。実際の必要額と手数料は取引画面・公式料金表を確認してください。</p>
      </section>

      <p><Link href="/fx/fxtf">FXTFのコストシートを見る →</Link></p>
      <p><Link href="/articles/fxtf-gx-mt4-mt5-difference">FXTF GX・MT4・MT5の違いを見る →</Link></p>
      <p><Link href="/articles/fxtf-losscut-50-100">証拠金維持率50％・100％の違いを見る →</Link></p>
      <p><Link href="/articles/fxtf-position-fee-calculation">取引数量から建玉連動手数料を確認する →</Link></p>
      <p><Link href="/articles/fx-zero-spread-total-cost">0.0銭と総コストの違いを見る →</Link></p>

      <section className="article-affiliate" aria-label="FXTFの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。計算・事実確認とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
