import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/dmm-fx-mini-normal-large' },
  title: 'DMM FXのミニ・通常・ラージの違い｜取引単位とコスト',
  description: 'DMM FXのミニ・通常・ラージ通貨ペアについて、1Lotの通貨数、必要証拠金、損益、注文上限、スプレッド条件の違いを解説します。',
};

const TYPES = [
  { type: 'ミニ', pairs: '主要4通貨ペア', lot: '1,000通貨', order: '100Lot', margin: '6,000円', move: '±1,000円', spread: '基準スプレッドなし' },
  { type: '通常', pairs: '23通貨ペア', lot: '10,000通貨', order: '100Lot', margin: '6万円', move: '±1万円', spread: '対象通貨は原則固定時間あり' },
  { type: 'ラージ', pairs: '主要4通貨ペア', lot: '10,000通貨', order: '200Lot', margin: '6万円', move: '±1万円', spread: '基準スプレッドなし' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM FX / LOT TYPES</p>
      <h1>DMM FXのミニ・通常・ラージは何が違う？<br />取引単位とコストを比較</h1>
      <p className="lede">3種類は名前だけでなく、1Lotの通貨数、対象通貨ペア、注文上限、スプレッド条件が異なります。少額取引ならミニが候補ですが、「10分の1の数量」と「10分の1の取引コスト」は同じ意味ではありません。</p>

      <div className="callout"><strong>先に結論</strong><p>米ドル/円を1Lot取引する場合、ミニは1,000通貨、通常とラージは1万通貨です。ただし、ミニとラージには基準スプレッド（原則固定）がありません。注文画面の実際のBid・Askを見てから判断します。</p></div>

      <h2>3種類を同じ条件で比較</h2>
      <p>米ドル/円が1ドル＝150円、個人口座の必要証拠金を取引金額の4％として単純計算します。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>種類</th><th>対象</th><th className="num">1Lot</th><th className="num">1回の注文上限</th><th className="num">1Lotの必要証拠金</th><th className="num">1円変動時</th><th>スプレッド条件</th></tr></thead>
          <tbody>{TYPES.map((item) => (
            <tr key={item.type}>
              <td className="ex-name">{item.type}</td><td>{item.pairs}</td><td className="num"><strong>{item.lot}</strong></td><td className="num">{item.order}</td><td className="num">{item.margin}</td><td className="num">{item.move}</td><td>{item.spread}</td>
            </tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">必要証拠金と損益は米ドル/円1Lotの単純計算例。実際の金額は注文時のレート、建玉、端数処理などで変わります。</p></div>

      <h2>ミニは必要証拠金と値動きの影響を小さくできる</h2>
      <div className="formula-box">
        <code>取引金額 ＝ 為替レート × 1Lotの通貨数</code>
        <code>必要証拠金の目安 ＝ 取引金額 × 4％</code>
        <small>150円 × 1,000通貨 × 4％ ＝ 6,000円（ミニ1Lotの例）</small>
      </div>
      <p>通常1Lotと比べてミニ1Lotは数量が10分の1なので、必要証拠金とレート変動による損益もおおむね10分の1です。損切り幅を1円とした場合、ミニ1Lotの為替差損益は約1,000円、通常1Lotは約1万円となります。</p>

      <h2>ミニを選ぶ前に、スプレッドを確認する</h2>
      <p>DMM FXの通常通貨ペアには、対象通貨ペアと時間帯ごとに基準スプレッドがあります。一方、ミニとラージは基準スプレッド（原則固定）の適用対象外です。数量が小さいからといって、通常通貨ペアと同じ幅が常に提示されるとは限りません。</p>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>注文直前の幅</h3><p>画面に表示されたBidとAskの差を確認し、数量を掛けて円換算します。</p></article>
        <article><b>02</b><h3>スワップ</h3><p>ミニのスワップポイントは、通常通貨ペアと同一にならない場合があります。</p></article>
        <article><b>03</b><h3>取引応援ポイント</h3><p>公式案内では、ミニ通貨ペアは取引応援ポイントの付与対象外です。</p></article>
        <article><b>04</b><h3>対象通貨</h3><p>ミニとラージは米ドル・ユーロ・ポンド・豪ドルの各円通貨ペアです。</p></article>
      </div>

      <h2>ラージは「1Lotが大きい」という意味ではない</h2>
      <p>ラージも1Lotは1万通貨で、通常通貨ペアと同じです。違いは主要4通貨ペアで1回200Lotまで注文できる点です。通常と同じ1万通貨単位でも、基準スプレッドがないため、大口注文では表示レートと約定条件をより慎重に確認します。</p>

      <h2>選び分けの目安</h2>
      <ul>
        <li><strong>ミニ：</strong>1,000通貨単位で数量と許容損失を小さく調整したい</li>
        <li><strong>通常：</strong>対象通貨ペアの多さと公表された基準スプレッドを重視する</li>
        <li><strong>ラージ：</strong>主要4通貨ペアで100Lotを超える単一注文が必要</li>
      </ul>
      <p>最小資金だけで決めず、スプレッドを円換算した金額、損切り時の想定損失、保有期間中のスワップまで合わせて比較します。</p>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fx.dmm.com/fx/service/lineup/mini-large/" target="_blank" rel="noopener noreferrer">DMM FX「ミニ通貨ペア／ラージ通貨ペア」</a></li>
          <li><a href="https://fx.dmm.com/fx/service/outline/" target="_blank" rel="noopener noreferrer">DMM FX「サービス概要」</a></li>
          <li><a href="https://fx.dmm.com/support/faqs/article/00124/" target="_blank" rel="noopener noreferrer">DMM FX「スプレッドが拡がる場合はありますか？」</a></li>
          <li><a href="https://fx.dmm.com/policy/risk/" target="_blank" rel="noopener noreferrer">DMM FX「重要事項の説明」</a></li>
        </ul>
        <p>取引条件は2026年9月7日に確認しました。注文前に取引画面と公式サイトの最新情報を確認してください。</p>
      </section>

      <p><Link href="/fx/dmm-fx">DMM FXのコストシートを見る →</Link></p>
      <p><Link href="/articles/dmm-fx-margin-call-losscut">DMM FXの追証とロスカットの違いを見る →</Link></p>
      <p><Link href="/fx/minimum-trade-unit-comparison">FX各社の最低取引単位を比較する →</Link></p>
    </article>
  );
}
