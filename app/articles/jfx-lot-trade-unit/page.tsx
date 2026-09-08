import Link from 'next/link';

export const metadata = {
  title: 'JFXの1Lotはいくら？1,000通貨・1万通貨の例外と損益を計算',
  description: 'JFX MATRIX TRADERの基本1Lot＝1,000通貨と、メキシコペソ円など6通貨ペアの1Lot＝1万通貨を整理。損益・スプレッド・必要証拠金を計算します。',
};

const EXCEPTIONS = ['MXN/JPY', 'NOK/JPY', 'SEK/JPY', 'CNH/JPY', 'CZK/JPY', 'THB/JPY'] as const;

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / TRADE UNIT</p>
    <h1>JFXの1Lotはいくら？<br />通貨数の例外を確認</h1>
    <p className="lede">MATRIX TRADERは基本的に1Lot＝1,000通貨ですが、6通貨ペアは1Lot＝1万通貨です。同じ「1Lot」でも値動き損益とスプレッド相当額が10倍違うため、必ず通貨数へ直して判断します。</p>

    <h2>基本1,000通貨、6通貨ペアは1万通貨</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>1Lotの通貨数</th><th>対象</th></tr></thead><tbody>
      <tr><td className="ex-name">基本</td><td><strong>1,000通貨</strong></td><td>下記6通貨ペア以外</td></tr>
      <tr><td className="ex-name">例外</td><td><strong>1万通貨</strong></td><td>{EXCEPTIONS.join('、')}</td></tr>
    </tbody></table></div></div>

    <h2>1円動いたときの損益は10倍違う</h2>
    <div className="formula-box"><code>値動き損益 ＝ 為替の値幅 × 通貨数</code><small>買いポジションが有利な方向へ動いた場合の単純計算。売りは方向が逆です。</small></div>
    <div className="fx-metric-grid">
      <article><b>1,000 UNITS</b><h3>1円で1,000円</h3><p>基本通貨ペアの1Lot</p></article>
      <article><b>10,000 UNITS</b><h3>1円で1万円</h3><p>例外6通貨ペアの1Lot</p></article>
      <article><b>1,000 UNITS</b><h3>1pipsで10円</h3><p>対円通貨ペア・1pips＝0.01円</p></article>
      <article><b>10,000 UNITS</b><h3>1pipsで100円</h3><p>対円通貨ペア・1pips＝0.01円</p></article>
    </div>

    <h2>スプレッドも通貨数に比例する</h2>
    <p>仮に同じ0.2銭なら、1,000通貨のスプレッド相当額は約2円、1万通貨なら約20円です。表示される銭幅だけでなく、実際の通貨数を掛けて円の負担へ直します。</p>
    <div className="formula-box"><code>0.2銭 ÷ 100 × 1万通貨 ＝ 約20円</code><small>説明用の仮定。実際のスプレッドは通貨ペア、時間、相場状況で異なります。</small></div>

    <h2>必要証拠金は取引画面の最新額を使う</h2>
    <p>個人口座はレバレッジ25倍以内ですが、必要証拠金は通貨ペアとレートによって異なります。JFXは通貨ペア別の必要証拠金一覧を公表しているため、単純な「レート×通貨数÷25」だけで注文可能額を断定せず、取引画面と最新一覧を確認します。</p>
    <div className="callout"><strong>必要証拠金は損失上限ではありません</strong><p>レバレッジ取引では預けた証拠金以上の損失が生じる場合があります。Lot数ではなく通貨数、1pips損益、予定損切り幅を使って許容損失から数量を決めてください。</p></div>

    <h2>「52種類」の内訳</h2>
    <p>JFXの取引ルール本文では、通常の取引通貨ペア46種類と、大口6種類を分けて掲載しています。大口6種類はUSD/JPY、EUR/USD、EUR/JPY、GBP/USD、GBP/JPY、AUD/JPYです。したがって、当サイトでは「52取引銘柄（通常46＋大口6）」と表記し、異なる52通貨ペアとは扱いません。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/pdf/shoukokin_mt.pdf" target="_blank" rel="noopener noreferrer">JFX「必要証拠金一覧表」</a></li>
    </ul><p>取引単位と銘柄内訳は2026年9月8日に公式ページで再確認しました。条件変更の可能性があるため、注文前に最新情報を確認してください。</p></section>

    <p><Link href="/tools/fx-pip-value-calculator">通貨数から1pipsの損益を計算する →</Link></p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>
    <p><Link href="/articles/jfx-losscut-margin-shortage">JFXのロスカットと不足金を確認する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
