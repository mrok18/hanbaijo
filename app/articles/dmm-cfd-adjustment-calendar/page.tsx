import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDの調整額カレンダー｜金利・価格調整の違い',
  description: 'DMM CFDの金利調整額と価格調整額について、対象銘柄、発生タイミング、未約定注文への影響を公式情報から整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM CFD / ADJUSTMENT CALENDAR</p>
      <h1>DMM CFDの調整額カレンダー<br />金利・価格調整の違い</h1>
      <p className="lede">DMM CFDでは、保有銘柄がスポットを参照するか先物を参照するかで、発生する調整額が変わります。受取額だけでなく、発生日と参照価格の変化をセットで確認します。</p>

      <h2>対象銘柄を先に分ける</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>調整額</th><th>対象</th><th>発生タイミング</th><th>確認点</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">金利調整額</td><td>金スポット・銀スポット</td><td>原則、毎営業日のクローズ時に持ち越した建玉</td><td>買い・売り別の受払額</td></tr>
          <tr><td className="ex-name">価格調整額</td><td>指数全銘柄、金・銀以外の商品</td><td>参照限月の変更日。概ね1〜3か月に一度</td><td>受払いと参照価格の変化</td></tr>
        </tbody>
      </table></div></div>

      <div className="callout"><strong>「受取り＝利益」とは限りません</strong><p>価格調整額は限月切替による評価損益を相殺するためのものです。調整額だけを切り離さず、切替前後の参照価格と合算して見ます。</p></div>

      <h2>カレンダーを見る順番</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>銘柄</h3><p>金・銀か、それ以外かを確認し、金利調整と価格調整のどちらが対象かを分けます。</p></article>
        <article><b>02</b><h3>発生日</h3><p>保有予定期間に発生日が含まれるかを確認します。祝日等で日程が不規則になる場合があります。</p></article>
        <article><b>03</b><h3>売買方向</h3><p>同じ銘柄でも買いと売りで受払い方向が異なるため、保有方向に対応する欄を見ます。</p></article>
        <article><b>04</b><h3>Lot数</h3><p>掲載額の単位を確認し、保有Lot数を掛けてポジション全体の金額へ直します。</p></article>
      </div>

      <h2>価格調整日に注文が取り消される</h2>
      <p>価格調整を実施する銘柄では、その営業日終了後から翌営業日開始までの間に、未約定の指値・逆指値注文がすべて取り消されます。新規・決済の両方、IFD・IFO・OCO注文も対象です。</p>
      <ul>
        <li>調整日前に未約定注文の有無を確認する</li>
        <li>取引再開後、必要な注文を価格水準ごと見直して再設定する</li>
        <li>日本225以外は円換算時の為替変動も考慮する</li>
        <li>長期保有の比較ではスプレッドと調整額を別々に記録する</li>
      </ul>

      <h2>保有コストの集計式</h2>
      <div className="formula-box"><code>期間中の調整額 ＝ 各発生日の1Lotあたり調整額 × 保有Lot数 の合計</code><small>受取りをプラス、支払いをマイナスとして集計し、スプレッド相当額とは別に記録します。</small></div>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
        <li><a href="https://fx.dmm.com/policy/regulation/overview_cfd.pdf" target="_blank" rel="noopener noreferrer">DMM CFD「店頭商品デリバティブ取引説明書」</a></li>
        <li><a href="https://fx.dmm.com/manual/plus_cfd.pdf" target="_blank" rel="noopener noreferrer">DMMCFD PLUS 操作マニュアル</a></li>
      </ul><p>制度・商品情報は2026年9月7日に確認しました。最新の発生日と金額は公式カレンダーを確認してください。</p></section>

      <p><Link href="/articles/dmm-cfd-trading-hours">DMM CFDの取引時間を見る →</Link></p>
      <p><Link href="/articles/dmm-cfd-total-cost">DMM CFDの総コストを見る →</Link></p>
      <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。調整額の説明・評価とは分けて掲載しています。</p></section>
    </article>
  );
}
