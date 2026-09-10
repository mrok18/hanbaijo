import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '岩井コスモ証券の株式手数料｜現物・信用・デイトレを比較', description: '岩井コスモ証券の国内株手数料を、ネット取引のコース、信用・デイトレの無料条件、対面取引との違いで整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">岩井コスモ証券 / STOCK COST</p><h1>岩井コスモ証券の株式手数料<br />現物・信用・デイトレを比較</h1>
  <p className="lede">株式手数料は、取引チャネルとコースで変わります。ネット取引、対面取引、信用・デイトレの無料条件を分けて確認します。</p>
  <h2>まず取引チャネルを分ける</h2><div className="table-scroll"><table className="rates"><thead><tr><th>区分</th><th>確認する費用</th><th>注意点</th></tr></thead><tbody><tr><td>ネット取引</td><td>コース別の現物・信用手数料</td><td>約定代金とコースで変動</td></tr><tr><td>対面・コール</td><td>対面取引の委託手数料</td><td>ネット取引と別体系</td></tr><tr><td>信用・デイトレ</td><td>売買手数料・金利・貸株料</td><td>新規建て当日に決済する条件</td></tr></tbody></table></div>
  <h2>信用・デイトレの無料条件</h2><p>公式案内では、スタンダードコースで信用取引を日計り決済した場合、売買手数料、金利、貸株料が無料になるサービスが案内されています。持ち越しやコース変更では条件が異なるため、取引前に適用条件を確認します。</p>
  <div className="callout"><strong>「デイトレ無料」は保有時間の条件付き</strong><p>新規建て当日に反対売買で決済する取引が対象です。翌日以降へ持ち越す場合は、金利・貸株料などを含めてコストを計算します。</p></div>
  <h2>比較時のチェック</h2><ul><li>ネット・対面のどちらか</li><li>選択している手数料コース</li><li>当日決済か持ち越しか</li><li>金利・貸株料・諸経費の有無</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.iwaicosmo.co.jp/service/fees/" target="_blank" rel="noopener noreferrer">岩井コスモ証券「各種手数料」</a></li><li><a href="https://www.iwaicosmo.net/sp/products/margin/rule/index.html" target="_blank" rel="noopener noreferrer">コスモ・ネットレ「信用取引ルール」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/iwai-cosmo-margin-rules">信用取引の保証金とリスクを確認する →</Link></p><p><Link href="/articles/iwai-cosmo-nisa">NISAの手数料と商品を確認する →</Link></p>
</article>; }
