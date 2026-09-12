import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/ig-trading-costs' }, title: 'IG証券の取引コスト｜スプレッド・手数料・証拠金を分けて計算', description: 'IG証券のFX・CFDについて、スプレッド、取引手数料、調整額、必要証拠金を分けて総コストを確認する方法を解説します。' };

export default function Page() { return <article>
  <p className="page-kicker">IG証券 / COST</p><h1>IG証券の取引コスト<br />スプレッドと手数料を分ける</h1>
  <p className="lede">取引手数料の有無だけでは、FX・CFDの総コストは分かりません。売買時、保有中、決済時に発生する費用を分けて合計します。</p>
  <h2>コストの分類</h2><div className="table-scroll"><table className="rates"><thead><tr><th>費用</th><th>発生時点</th><th>確認方法</th></tr></thead><tbody><tr><td>スプレッド</td><td>売買時</td><td>買値と売値の差×数量</td></tr><tr><td>取引手数料</td><td>銘柄・注文時</td><td>料金表で対象商品を確認</td></tr><tr><td>調整額・金利</td><td>保有中</td><td>銘柄ごとの付与・支払方向</td></tr><tr><td>証拠金コスト</td><td>保有期間</td><td>必要証拠金と余裕資金</td></tr></tbody></table></div>
  <h2>商品別の証拠金率</h2><p>公式案内では、個人口座の維持証拠金率はFX約4％以上、商品CFD約5％以上、株式CFD・その他CFD約20％以上など、商品カテゴリで異なります。銘柄ごとの条件表を確認します。</p>
  <div className="callout"><strong>「低い証拠金率＝低リスク」ではない</strong><p>証拠金率が低いほど大きなポジションを持てますが、損益は取引金額に連動します。数量を抑え、値動き損益を先に計算します。</p><Link href="/tools/cost-calculator">取引コストを計算する →</Link></div>
  <h2>注文前チェック</h2><ol><li>銘柄カテゴリと取引単位</li><li>スプレッドと取引手数料</li><li>保有中の調整額・金利</li><li>必要証拠金とロスカット余力</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.ig.com/jp/our-charges" target="_blank" rel="noopener noreferrer">IG証券「取引コスト」</a></li><li><a href="https://www.ig.com/jp/trading-need-to-knows/what-is-margin-trading" target="_blank" rel="noopener noreferrer">IG証券「証拠金取引とは」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/ig-products-overview">取扱商品を確認する →</Link></p><p><Link href="/articles/ig-margin-rules">ロスカット基準を確認する →</Link></p>
</article>; }
