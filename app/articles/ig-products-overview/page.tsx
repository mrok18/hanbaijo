import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/ig-products-overview' }, title: 'IG証券の取扱商品｜FX・株価指数・株式・商品CFDを整理', description: 'IG証券のFX、株価指数CFD、株式CFD、商品CFD、債券先物CFDを商品別に整理し、証拠金とリスクの違いを解説します。' };

export default function Page() { return <article>
  <p className="page-kicker">IG証券 / PRODUCTS</p><h1>IG証券の取扱商品<br />FX・CFDを同じ基準で比較</h1>
  <p className="lede">IG証券ではFXのほか、株価指数、個別株、商品、債券先物など多彩なCFDを扱います。銘柄数ではなく、取引対象・証拠金率・保有コストを分けて比較します。</p>
  <h2>商品カテゴリと確認項目</h2><div className="table-scroll"><table className="rates"><thead><tr><th>カテゴリ</th><th>主な対象</th><th>確認する数字</th></tr></thead><tbody><tr><td>FX</td><td>通貨ペア</td><td>スプレッド・必要証拠金・スワップ</td></tr><tr><td>株価指数CFD</td><td>日経平均・海外指数</td><td>取引時間・証拠金・調整額</td></tr><tr><td>株式CFD</td><td>国内外の個別株</td><td>手数料・配当相当額・証拠金</td></tr><tr><td>商品CFD</td><td>金・原油・穀物</td><td>スプレッド・単位・価格調整</td></tr></tbody></table></div>
  <h2>銘柄数が多いほど条件表を確認</h2><p>公式案内では、17,000以上のCFD銘柄と約100種のFX通貨ペアを案内しています。商品が多い場合でも、同じ銘柄名の現物・CFDを混同せず、取引条件ページで必要証拠金と費用を確認します。</p>
  <div className="callout"><strong>レバレッジは損失も拡大させる</strong><p>証拠金より大きなポジションを持てる一方、相場が逆に動くと証拠金を上回る損失が発生する可能性があります。銘柄ごとのリスク説明を確認します。</p></div>
  <h2>商品選びの順番</h2><ol><li>現物かCFDかを決める</li><li>取引単位と必要証拠金を確認する</li><li>スプレッド・調整額・手数料を合計する</li><li>ロスカット基準と急変時のリスクを読む</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.ig.com/jp/cfd-trading" target="_blank" rel="noopener noreferrer">IG証券「CFD取引」</a></li><li><a href="https://www.ig.com/jp/risk-disclosure-notice" target="_blank" rel="noopener noreferrer">IG証券「リスク記載」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/ig-margin-rules">IG証券の証拠金とロスカットを確認する →</Link></p><p><Link href="/articles/ig-trading-costs">IG証券の取引コストを確認する →</Link></p>
</article>; }
