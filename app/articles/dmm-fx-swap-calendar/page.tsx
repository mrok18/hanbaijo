import Link from 'next/link';

export const metadata = {
  title: 'DMM FXのスワップ付与日はいつ？0日・3日・4日の見方',
  description: 'DMM FXのスワップポイントについて、営業日の切替時刻、付与日数0日・3日・4日の理由、カレンダーの読み方を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM FX / SWAP CALENDAR</p>
      <h1>DMM FXのスワップ付与日はいつ？<br />0日・3日・4日の見方</h1>
      <p className="lede">スワップポイントは毎日同じ金額が1日分ずつ付くとは限りません。DMM FXでは営業日のクローズ時点でポジションを持ち越すと、営業日切替後に付与されます。</p>

      <div className="callout"><strong>営業日の切替は夏時間6時、冬時間7時</strong><p>付与対象になるかは午前0時ではなく、DMM FXの営業日クローズをまたいだかで決まります。金額と付与日数は事前にスワップカレンダーで確認します。</p></div>

      <h2>0日・1日・3日・4日の意味</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>付与日数</th><th>主な状況</th><th>読み方</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">0日分</td><td>祝日等で受渡日の繰り延べがない日</td><td>持ち越しても当日の付与はありません</td></tr>
          <tr><td className="ex-name">1日分</td><td>通常の営業日</td><td>1Lotあたり表示額をLot数に掛けます</td></tr>
          <tr><td className="ex-name">3日分</td><td>通常、土日分を先渡しする日</td><td>DMM FXでは原則として木曜日に3日分</td></tr>
          <tr><td className="ex-name">4日分以上</td><td>各国祝日が受渡日に重なる場合</td><td>平常週の曜日だけで判断せずカレンダーを確認</td></tr>
        </tbody>
      </table></div></div>

      <h2>スワップ総額の計算</h2>
      <div className="formula-box"><code>受払額 ＝ カレンダー記載の1Lotあたり金額 × 保有Lot数</code><small>カレンダーの金額は円換算済みの1Lotあたり。通常通貨ペアとミニ・ラージでは1Lotの通貨数が異なるため、商品名も確認します。</small></div>
      <p>例えば買スワップが1Lotあたり150円、2Lotを保有していれば、その発生日の受取りは300円です。3日分の日は表示額自体が3日分として掲載されるため、さらに3を掛けないよう注意します。</p>

      <h2>長期保有で確認する4項目</h2>
      <ul>
        <li>通貨ペアと買い・売りのどちらの欄か</li>
        <li>付与日数が0日、1日、3日、4日以上のどれか</li>
        <li>通常・ミニ・ラージのうち、どの1Lot単位か</li>
        <li>予定値であり、金利情勢により日々変動すること</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://fx.dmm.com/fx/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM FX「スワップポイント」</a></li>
        <li><a href="https://fx.dmm.com/fx/aboutfx/swappoint/" target="_blank" rel="noopener noreferrer">DMM FX「スワップポイントの仕組み」</a></li>
        <li><a href="https://fx.dmm.com/support/faqs/article/00167/" target="_blank" rel="noopener noreferrer">DMM FX「スワップポイントはいつ付与されますか？」</a></li>
      </ul><p>制度情報は2026年9月7日に確認しました。実際の金額と付与日数は取引前に公式カレンダーを確認してください。</p></section>

      <p><Link href="/articles/dmm-fx-mini-normal-large">ミニ・通常・ラージの違いを見る →</Link></p>
      <p><Link href="/fx/dmm-fx">DMM FXのコストシートへ戻る →</Link></p>
    </article>
  );
}
