import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'サクソバンク証券CFDのコスト｜手数料無料・スプレッド・調整額', description: 'サクソバンク証券CFDの手数料、スプレッド、調整額、証拠金を分けて確認し、保有期間別の総コストを考える方法を解説します。' };

export default function Page() { return <article>
  <p className="page-kicker">SAXO / CFD COST</p><h1>サクソバンク証券CFDのコスト<br />手数料無料でも確認する項目</h1>
  <p className="lede">CFDは「取引手数料無料」という表示だけでは実質コストを判断できません。スプレッド、保有中の調整額、為替換算、必要証拠金を分けて計算します。</p>
  <h2>コストを4つに分ける</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>発生タイミング</th><th>確認方法</th></tr></thead><tbody><tr><td>スプレッド</td><td>新規・決済時</td><td>買値と売値の差を数量で円換算</td></tr><tr><td>調整額</td><td>保有中・銘柄ごと</td><td>取引条件と付与日を確認</td></tr><tr><td>為替換算</td><td>外貨建て損益の円換算時</td><td>換算レートと手数料を確認</td></tr><tr><td>証拠金機会費用</td><td>保有期間中</td><td>必要証拠金と余裕資金を分ける</td></tr></tbody></table></div>
  <h2>スプレッドは数量と値幅で計算</h2><p>スプレッドの円コストは、価格差×取引数量×換算レートで試算できます。銘柄の通貨が円以外の場合は、評価時点の為替レートで変動するため、固定額として扱いません。</p>
  <h2>保有期間が長いほど調整額を確認</h2><p>株価指数・商品・株式CFDでは、銘柄ごとに調整額や配当相当額などが設定される場合があります。短期と長期で負担が変わるため、建玉を持つ日数を決めてから公式の費用表を確認します。</p>
  <div className="callout"><strong>比較表の「無料」は入口</strong><p>売買手数料が無料でも、スプレッドやその他費用がゼロとは限りません。広告表示の文言ではなく、取引条件にある費用項目を合計します。</p><Link href="/tools/commodity-cfd-provider-cost-comparison">CFDプロバイダー総コスト比較を使う →</Link></div>
  <h2>注文前チェック</h2><ul><li>銘柄の通貨と取引単位</li><li>スプレッドの表示単位</li><li>調整額の発生日と方向</li><li>必要証拠金とロスカット余力</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.home.saxo/ja-jp/products/cfds" target="_blank" rel="noopener noreferrer">サクソバンク証券「CFD」</a></li><li><a href="https://www.home.saxo/ja-jp/rates-and-conditions/cfds/spreads-and-commissions" target="_blank" rel="noopener noreferrer">サクソバンク証券「CFDの取引手数料・その他費用」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/saxo-products-overview">取扱商品を比較する →</Link></p><p><Link href="/fx/saxo">サクソバンク証券の取引条件一覧へ →</Link></p>
</article>; }
