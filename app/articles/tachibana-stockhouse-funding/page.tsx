import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/tachibana-stockhouse-funding' }, title: '立花証券ストックハウスの入出金｜買付余力・振替・出金を確認', description: '立花証券ストックハウスの入金、買付余力、信用保証金、出金依頼の確認順を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">STOCKHOUSE / FUNDING</p><h1>ストックハウスの入出金<br />買付余力と保証金を確認</h1>
  <p className="lede">現物の買付余力と信用取引の保証金は、同じ口座残高でも表示される金額が異なる場合があります。入金後の反映先と振替可能額を確認します。</p>
  <h2>資金を3つに分けて見る</h2><div className="table-scroll"><table className="rates"><thead><tr><th>表示</th><th>意味</th><th>注文との関係</th></tr></thead><tbody><tr><td>預り金</td><td>証券口座に入金された資金</td><td>現物買付の原資</td></tr><tr><td>買付余力</td><td>注文に使える金額</td><td>受渡日・注文拘束を反映</td></tr><tr><td>信用保証金</td><td>信用建玉の担保</td><td>維持率・追証を判定</td></tr></tbody></table></div>
  <h2>入金後に確認する順番</h2><ol><li>銀行側の振込完了</li><li>ストックハウスの預り金への反映</li><li>買付余力または保証金への反映</li><li>注文画面で利用可能額を確認</li></ol>
  <div className="callout"><strong>出金可能額だけで判断しない</strong><p>未受渡しの売却代金や信用建玉がある場合、出金可能額は変動します。出金後の買付余力と保証金維持率を確認してから依頼します。</p></div>
  <h2>入出金前チェック</h2><ul><li>入金先口座と名義</li><li>買付余力への反映</li><li>信用保証金の拘束額</li><li>出金後の注文・維持率</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://t-stockhouse.jp/product/stock/" target="_blank" rel="noopener noreferrer">立花証券ストックハウス「現物株式」</a></li><li><a href="https://t-stockhouse.jp/product/margin/" target="_blank" rel="noopener noreferrer">立花証券ストックハウス「信用取引」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/tachibana-stockhouse-fees">現物株式の手数料を確認する →</Link></p><p><Link href="/articles/tachibana-stockhouse-margin">信用取引のコストを確認する →</Link></p>
</article>; }
