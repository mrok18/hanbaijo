import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '岡三オンラインくりっく株365の配当相当額｜金利との違い', description: 'くりっく株365の金利相当額・配当相当額の仕組み、買いと売りの方向、実績値の確認方法を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">岡三オンライン / CARRY</p><h1>くりっく株365の配当相当額<br />金利相当額と合わせて確認</h1>
  <p className="lede">くりっく株365では、株価指数の構成銘柄に配当があると、配当相当額が建玉に反映されます。受け取りだけでなく、金利相当額と価格変動を合わせて判断します。</p>
  <h2>買いと売りで方向が変わる</h2><div className="table-scroll"><table className="rates"><thead><tr><th>建玉</th><th>配当相当額</th><th>同時に確認する費用</th></tr></thead><tbody><tr><td>買いポジション</td><td>受け取りになる場合</td><td>金利相当額・スプレッド</td></tr><tr><td>売りポジション</td><td>支払いになる場合</td><td>金利相当額・価格変動</td></tr></tbody></table></div>
  <h2>配当相当額は毎日固定ではない</h2><p>金利相当額・配当相当額は市場の実勢を勘案し、取引所が決定します。実績値と付与日数は公式ツールで確認し、過去の受取額を将来の利益として固定しないようにします。</p>
  <div className="callout"><strong>保有期間の総額で判断</strong><p>配当相当額の受け取りがあっても、価格下落、金利相当額、スプレッド、証拠金コストで損益は変わります。保有予定日数を決めて合計します。</p></div>
  <h2>確認する順番</h2><ol><li>銘柄の配当相当額実績</li><li>付与日数と次回の基準日</li><li>金利相当額の方向と金額</li><li>値動き損益・スプレッド</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.okasan-online.co.jp/kabu365/guide/interest.html" target="_blank" rel="noopener noreferrer">岡三オンライン「金利相当額/配当相当額」</a></li><li><a href="https://www.okasan-online.co.jp/kabu365/products/kabu365.html" target="_blank" rel="noopener noreferrer">岡三オンライン「くりっく株365とは」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/okasan-kabu365-overview">くりっく株365の仕組みを確認する →</Link></p><p><Link href="/articles/okasan-kabu365-margin">証拠金と余力を確認する →</Link></p>
</article>; }
