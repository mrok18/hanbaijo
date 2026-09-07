import Link from 'next/link';

export const metadata = {
  title: 'DMM FXのスリッページ｜即時・指値・逆指値の違い',
  description: 'DMM FXの即時注文、指値、逆指値について、注文価格と約定価格のずれ、許容スリッページ幅、注文不成立との関係を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM FX / EXECUTION COST</p>
      <h1>DMM FXのスリッページ<br />即時・指値・逆指値の違い</h1>
      <p className="lede">スプレッドが狭くても、発注時の価格と約定価格がずれれば実際の取引コストは変わります。DMM FXでは注文種類によって価格の扱いが異なります。</p>

      <h2>注文種類ごとの違い</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>注文</th><th>価格の考え方</th><th>スリッページ</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">即時注文</td><td>画面の提示レートを見て発注</td><td>発生する場合があり、許容幅を設定可能</td></tr>
          <tr><td className="ex-name">指値注文</td><td>現在より有利な価格を指定</td><td>原則として指定レートで約定</td></tr>
          <tr><td className="ex-name">逆指値注文</td><td>現在より不利な価格を指定</td><td>到達後の配信レートで約定するため発生し得る</td></tr>
        </tbody>
      </table></div></div>

      <h2>許容幅を狭くすると必ず有利になるわけではない</h2>
      <p>即時注文では許容するスリッページ幅を設定できます。約定処理時のレート変動が設定幅以内なら成立し、設定幅を超えると注文は不成立になります。幅を狭くすれば価格差を抑えやすい一方、相場急変時に取引できない可能性が高まります。</p>
      <div className="formula-box"><code>実質的な約定差 ＝ 約定レート − 発注時レート</code><small>買い注文ではプラス方向が不利、売り注文ではマイナス方向が不利です。DMM FXでは有利・不利の両方向にずれる場合があります。</small></div>

      <h2>逆指値は指定価格を保証しない</h2>
      <p>売りの逆指値を100円に置いても、相場急変で次の配信レートが99円になれば、原則として99円で約定します。逆指値は損失管理に有用ですが、急変・週明け・重要指標時には指定値より損失が大きくなる可能性があります。</p>
      <div className="callout"><strong>スプレッドとスリッページは別に記録</strong><p>往復コストを測る場合は、発注時のBid・Ask差と、注文価格から実際の約定価格までの差を分けて残すと、広告上のスプレッドと実取引の差を比較できます。</p></div>

      <h2>注文前のチェック</h2>
      <ul>
        <li>即時注文：許容幅と、不成立になってもよいか</li>
        <li>指値注文：買いは現在より低く、売りは現在より高い価格か</li>
        <li>逆指値注文：指定価格より不利に約定する余地を資金計画へ入れたか</li>
        <li>指標発表・早朝・週明け：通常時より価格が飛びやすい時間か</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://fx.dmm.com/support/faqs/article/00190/" target="_blank" rel="noopener noreferrer">DMM FX「注文の種類について」</a></li>
        <li><a href="https://fx.dmm.com/support/faqs/article/00201/" target="_blank" rel="noopener noreferrer">DMM FX「スリッページとは」</a></li>
        <li><a href="https://fx.dmm.com/support/faqs/article/00200/" target="_blank" rel="noopener noreferrer">DMM FX「指値/逆指値にスリッページはありますか？」</a></li>
        <li><a href="https://fx.dmm.com/support/faqs/article/00198/" target="_blank" rel="noopener noreferrer">DMM FX「スリッページ幅の指定」</a></li>
      </ul><p>注文仕様は2026年9月7日に確認しました。実際の発注前に取引画面と最新の取引ルールを確認してください。</p></section>

      <p><Link href="/articles/fx-zero-spread-total-cost">0.0銭と総コストの違いを見る →</Link></p>
      <p><Link href="/fx/dmm-fx">DMM FXのコストシートへ戻る →</Link></p>
    </article>
  );
}
