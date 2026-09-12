import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/iwai-cosmo-margin-rules' }, title: '岩井コスモ証券の信用取引｜保証金・金利・デイトレ条件', description: '岩井コスモ証券ネット取引の信用取引について、委託保証金、金利・貸株料、デイトレ無料条件とリスクを整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">岩井コスモ証券 / MARGIN</p><h1>岩井コスモ証券の信用取引<br />保証金と保有コスト</h1>
  <p className="lede">信用取引は少ない資金で大きな金額を取引できますが、委託保証金と保有中の費用が必要です。デイトレと持ち越しで条件を分けて確認します。</p>
  <h2>信用取引で確認する数字</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>意味</th><th>取引前の確認</th></tr></thead><tbody><tr><td>委託保証金</td><td>建玉の担保</td><td>最低額・保証金率</td></tr><tr><td>買方金利</td><td>買建玉の保有費用</td><td>保有日数・コース</td></tr><tr><td>貸株料</td><td>売建玉の保有費用</td><td>銘柄・日数</td></tr><tr><td>追証・強制決済</td><td>維持率低下時の処理</td><td>期限・手数料</td></tr></tbody></table></div>
  <h2>デイトレと持ち越しの差</h2><p>信用・デイトレは新規建て当日に反対売買で決済する場合のサービスです。日付をまたぐと金利・貸株料が発生する可能性があるため、約定履歴と決済日を確認します。</p>
  <div className="callout"><strong>保証金ぎりぎりで発注しない</strong><p>含み損が拡大すると維持率が低下し、追加保証金や強制決済につながる場合があります。建玉数量を抑え、急変に耐える余力を残します。</p><Link href="/tools/risk-reward-calculator">損失許容額を計算する →</Link></div>
  <h2>注文前チェック</h2><ol><li>現物か信用か</li><li>デイトレ条件に該当するか</li><li>金利・貸株料の適用日数</li><li>追証・強制決済の期限</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.iwaicosmo.net/sp/products/margin/rule/index.html" target="_blank" rel="noopener noreferrer">コスモ・ネットレ「信用取引ルール」</a></li><li><a href="https://www.iwaicosmo.co.jp/service/fees/" target="_blank" rel="noopener noreferrer">岩井コスモ証券「各種手数料」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/iwai-cosmo-stock-fees">株式手数料を確認する →</Link></p>
</article>; }
