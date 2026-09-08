import Link from 'next/link';

export const metadata = {
  title: 'JFXはスキャルピング向き？米ドル円の時間帯別スプレッドを計算',
  description: 'JFX MATRIX TRADERの米ドル/円0.2銭と早朝5.9銭を、1,000通貨・1万通貨の円コストへ換算。手数料、注文機能、スリッページも整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / SCALPING COST</p>
    <h1>JFXはスキャルピング向き？<br />時間帯別コストを計算</h1>
    <p className="lede">MATRIX TRADERはスキャルピング利用を明示し、短期売買向けの注文機能を備えています。ただし、取引回数が増えるほどスプレッドと約定差の影響も積み上がります。米ドル/円を例に、時間帯で変わる負担を円へ直します。</p>

    <h2>米ドル/円は時間帯で0.2銭と5.9銭</h2>
    <p>JFX公式のスプレッド一覧では、米ドル/円は9時〜翌3時が0.2銭、3時〜9時が5.9銭で、いずれも原則固定・例外ありです。同じ会社でも取引する時間によって公称スプレッドが異なります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>取引時間</th><th>公称スプレッド</th><th>1,000通貨</th><th>1万通貨</th></tr></thead><tbody>
      <tr><td className="ex-name">9時〜翌3時</td><td>0.2銭</td><td>約2円</td><td>約20円</td></tr>
      <tr><td className="ex-name">3時〜9時</td><td>5.9銭</td><td>約59円</td><td>約590円</td></tr>
    </tbody></table></div></div>
    <div className="formula-box"><code>スプレッド相当額 ＝ スプレッド（円）× 取引通貨数</code><small>0.2銭＝0.002円、5.9銭＝0.059円として計算。実際の約定価格や将来の提示幅を保証するものではありません。</small></div>

    <h2>取引回数を掛けると差が見える</h2>
    <p>1万通貨を10回往復する単純計算では、0.2銭なら約200円、5.9銭なら約5,900円のスプレッド相当額です。売買手数料が0円でも、売値と買値の差は残ります。短期売買では「1回の狭さ」だけでなく、取引する時間と回数を合わせて見ます。</p>

    <h2>注文機能は短期売買向け</h2>
    <p>JFXは、ワンクリック注文、全決済、ドテン、許容スプレッド設定などを案内しています。許容スプレッドを設定すると、指定幅を超えて広がった場合に発注しない制御ができます。取引データをグラフ・数値化する「勝利へのあゆみ」も提供されています。</p>
    <div className="callout"><strong>注文機能が約定価格を保証するわけではありません</strong><p>成行・逆指値ではスリッページが生じる場合があり、大口注文では画面表示より不利なレートで約定する可能性も公式書面に記載されています。短期売買では、スプレッド、スリッページ、注文不成立を分けて記録してください。</p></div>

    <h2>1Lotの数量は通貨ペアで例外がある</h2>
    <p>基本は1Lot＝1,000通貨ですが、MXN/JPY、NOK/JPY、SEK/JPY、CNH/JPY、CZK/JPY、THB/JPYは1Lot＝1万通貨です。Lot数だけでなく、実際の通貨数へ直して損益とコストを確認します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/spread/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADERスプレッド情報」</a></li>
      <li><a href="https://www.jfx.co.jp/landing/scalping/" target="_blank" rel="noopener noreferrer">JFX「スキャルピングならJFX」</a></li>
      <li><a href="https://www.jfx.co.jp/landing/tool_lp/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADERの便利機能」</a></li>
    </ul><p>取引条件は2026年9月8日に公式ページで確認しました。スプレッドは原則固定・例外ありで、変更される場合があります。</p></section>

    <p><Link href="/tools/fx-pip-value-calculator">取引数量からpips損益を計算する →</Link></p>
    <p><Link href="/tools/jfx-scalping-cost-calculator">JFXの時間帯別スプレッドを取引回数まで計算する →</Link></p>
    <p><Link href="/articles/jfx-trading-hours-maintenance">JFXの取引時間と日締めメンテナンスを見る →</Link></p>
    <p><Link href="/articles/jfx-order-slippage-rules">成行・ストリーミング・逆指値の約定ルールを見る →</Link></p>
    <p><Link href="/articles/fx-spread-cost">スプレッドを円に直す方法 →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
