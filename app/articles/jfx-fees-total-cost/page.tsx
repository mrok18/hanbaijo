import Link from 'next/link';

export const metadata = {
  title: 'JFXの手数料は本当に無料？スプレッド・入出金・スワップまで整理',
  description: 'JFX MATRIX TRADERの取引手数料、入出金手数料、ロスカット手数料と、スプレッド・スワップ・スリッページなど実際に残るコストを整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / TOTAL COST</p>
    <h1>JFXの手数料は本当に無料？<br />実質コストを分けて確認</h1>
    <p className="lede">MATRIX TRADERは取引手数料など複数の手数料が0円です。ただし、FXの総コストが0円になるわけではありません。口座から明示的に引かれる手数料と、売買価格や保有期間に含まれるコストを分けて確認します。</p>

    <h2>公式取引ルール上の手数料</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>手数料</th><th>確認点</th></tr></thead><tbody>
      <tr><td className="ex-name">取引手数料</td><td><strong>0円</strong></td><td>インターネット取引</td></tr>
      <tr><td className="ex-name">クイック入金</td><td><strong>0円</strong></td><td>提携金融機関から利用</td></tr>
      <tr><td className="ex-name">振込入金</td><td>金融機関による</td><td>銀行側の振込手数料を確認</td></tr>
      <tr><td className="ex-name">出金</td><td><strong>0円</strong></td><td>リアルタイム・通常出金ともJFX負担</td></tr>
      <tr><td className="ex-name">ロスカット</td><td><strong>0円</strong></td><td>決済損失やスプレッドとは別</td></tr>
    </tbody></table></div></div>

    <h2>0円でも残る4つのコスト</h2>
    <div className="fx-metric-grid">
      <article><b>SPREAD</b><h3>売値と買値の差</h3><p>取引の開始時点から損益に影響</p></article>
      <article><b>SWAP</b><h3>保有期間の受払</h3><p>通貨・売買方向・付与日数で変動</p></article>
      <article><b>SLIPPAGE</b><h3>注文価格とのずれ</h3><p>急変時や流動性低下時に注意</p></article>
      <article><b>MARKET RISK</b><h3>価格変動の損失</h3><p>手数料ではなく最大の損益要因</p></article>
    </div>
    <p>JFX自身も、取引手数料は無料でもスプレッドが顧客のコストになると説明しています。短期売買では取引回数を掛け、長期保有ではスワップの受払日数を加えて総額を見ます。</p>

    <h2>米ドル/円1万通貨の例</h2>
    <p>公称スプレッドが0.2銭なら、1万通貨のスプレッド相当額は約20円です。10回往復すれば単純計算で約200円になります。取引手数料0円という表示だけでは、この負担は見えません。</p>
    <div className="formula-box"><code>0.2銭 ÷ 100 × 1万通貨 × 10回 ＝ 約200円</code><small>公称スプレッドが各取引で維持され、スリッページがないと仮定した概算です。</small></div>

    <h2>スワップは受取だけでなく支払もある</h2>
    <p>スワップポイントは通貨ペアと売買方向で受取または支払になり、将来の金額も保証されません。JFXにはポジションを決済せず未実現スワップを確定する「スワップ振替」がありますが、振替により確定した損益は課税関係にも影響します。運用前に当日の一覧と確定日を確認します。</p>

    <h2>出金無料でも時間と金額に条件がある</h2>
    <p>リアルタイム出金は1,000円以上100万円以下が対象で、平日9時30分〜14時30分の依頼は登録金融機関へ即時出金と案内されています。100万円を超える依頼は通常出金へ切り替わります。無料かどうかだけでなく、着金のタイミングも資金管理に含めます。</p>
    <div className="callout"><strong>総コストは「手数料＋取引条件」で比較</strong><p>取引回数が多い人はスプレッドとスリッページ、長期保有する人はスワップ、資金を頻繁に動かす人は入出金条件の重要度が上がります。自分の取引方法に合わせて重み付けしてください。</p></div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/spread/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADERスプレッド情報」</a></li>
      <li><a href="https://www.jfx.co.jp/payment/" target="_blank" rel="noopener noreferrer">JFX「入出金」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/chuui_mt/" target="_blank" rel="noopener noreferrer">JFX「お取引における注意点」</a></li>
    </ul><p>取引条件は2026年9月8日に公式ページで確認しました。スプレッド、スワップ、受付時間などは変更される場合があるため、利用前に最新情報を確認してください。</p></section>

    <p><Link href="/tools/jfx-scalping-cost-calculator">JFXの取引回数込みコストを計算する →</Link></p>
    <p><Link href="/articles/jfx-withdrawal-time-rules">JFXの出金時間と取消条件を確認する →</Link></p>
    <p><Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと通貨数を確認する →</Link></p>
    <p><Link href="/articles/jfx-losscut-margin-shortage">JFXのロスカットと不足金を確認する →</Link></p>
    <p><Link href="/articles/jfx-account-opening-flow">口座開設の必要書類と初回入金を見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
