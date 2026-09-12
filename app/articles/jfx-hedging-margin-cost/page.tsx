import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/jfx-hedging-margin-cost' },
  title: 'JFXの両建ては証拠金が片側分？スプレッド・スワップとロスカットを整理',
  description: 'JFX MATRIX TRADERの両建てを解説。同数量は片側分、多い方で計算される必要証拠金、スプレッドとスワップ差、初期設定、ロスカットの注意点を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / HEDGING COST</p>
    <h1>JFXの両建ては証拠金が片側分？<br />コストと危険性を確認</h1>
    <p className="lede">MATRIX TRADERは設定を変更すると、同じ通貨ペアの買いと売りを同時に保有できます。必要証拠金は両方の合計ではありませんが、スプレッドとスワップ差は残り、ロスカットを防ぐ仕組みでもありません。</p>

    <h2>必要証拠金は数量が多い側で計算</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>買い</th><th>売り</th><th>証拠金計算の対象</th></tr></thead><tbody>
      <tr><td>1Lot</td><td>1Lot</td><td><strong>片側1Lot分</strong></td></tr>
      <tr><td>3Lot</td><td>1Lot</td><td><strong>多い側の3Lot分</strong></td></tr>
      <tr><td>2Lot</td><td>5Lot</td><td><strong>多い側の5Lot分</strong></td></tr>
    </tbody></table></div></div>
    <p>買いと売りが同数量なら片方分、数量が異なる場合は多い方の必要証拠金で計算されます。必要証拠金が小さく見えても、両方向のポジションを維持するコストまで消えるわけではありません。</p>

    <h2>両建てで残る2つのコスト</h2>
    <div className="fx-metric-grid">
      <article><b>SPREAD × 2</b><h3>両方向の売買価格差</h3><p>買いと売りを建てる際、それぞれにスプレッドが影響</p></article>
      <article><b>SWAP GAP</b><h3>受取と支払の差</h3><p>売買両方を合算するとマイナスになる場合がある</p></article>
      <article><b>MARGIN</b><h3>必要額は変動</h3><p>JFXの必要証拠金は毎営業日見直される</p></article>
      <article><b>EXECUTION</b><h3>解消時にも価格差</h3><p>両方の決済価格とタイミングは一致しない</p></article>
    </div>
    <p>JFXは、スワップポイント差とスプレッドを顧客負担のコストと考え、両建てを推奨していません。為替変動による買い側の利益と売り側の損失が相殺されても、保有期間が延びるほどコストが口座資産を減らす可能性があります。</p>

    <h2>初期設定は「両建なし」</h2>
    <p>通常の初期設定では両建なしです。買いを保有中に同じ通貨ペアの売り注文を出すと、新規の売りではなく既存の買いの決済が優先されます。両建てを行うには取引画面で「両建あり」へ変更し、注文ごとに表示を確認する必要があります。</p>
    <div className="callout"><strong>設定は端末ごとに確認</strong><p>初期状態ではパソコンやスマートフォンなど端末ごとの設定です。サーバ保存設定で共有できる場合もありますが、MATRIXチャートには共有されないと案内されています。</p></div>

    <h2>両建て中でもロスカットされる</h2>
    <p>相場急変や流動性低下でスプレッドが拡大すると、買いと売りの評価差が広がる場合があります。さらにマイナススワップの累積や必要証拠金の増加で有効比率が低下すれば、両建て中でもロスカットの対象になります。</p>
    <div className="formula-box"><code>有効比率 ＝ 有効証拠金 ÷ 必要証拠金 × 100</code><small>JFXでは有効比率が100％未満になるとロスカット対象。判定と約定の時間・価格は保証されません。</small></div>

    <h2>通常銘柄と大口銘柄の実質両建てにも注意</h2>
    <p>JFXの公式書面は、大口銘柄の決済のつもりで通常銘柄を反対売買した場合など、銘柄が別のため決済されず実質的な両建てになる可能性を挙げています。USD/JPYなど大口銘柄がある通貨ペアでは、銘柄名まで確認します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/ryoudate/" target="_blank" rel="noopener noreferrer">JFX「両建について」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/chuui_mt/" target="_blank" rel="noopener noreferrer">JFX「お取引における注意点」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=40&amp;id=274&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「両建する場合の必要証拠金」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=40&amp;id=273&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「両建していればロスカットされないか」</a></li>
    </ul><p>取引条件は2026年9月8日に公式ページで確認しました。設定や必要証拠金は変更される場合があるため、発注前に取引画面の最新表示を確認してください。</p></section>

    <p><Link href="/articles/jfx-losscut-margin-shortage">JFXのロスカットと不足金を確認する →</Link></p>
    <p><Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと大口銘柄を確認する →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">JFXの手数料と実質コストを確認する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
