import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'bitbankの入出金｜日本円出金手数料・最低額・暗号資産送金', description: 'bitbankの日本円出金手数料と最低額、暗号資産のネットワーク手数料、出金前の確認項目を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">bitbank / FUNDING</p><h1>bitbankの入出金<br />日本円と暗号資産の手数料</h1>
  <p className="lede">日本円の銀行出金と暗号資産の送金では、費用と確認項目が異なります。最低額、手数料、送金ネットワークを分けて確認します。</p>
  <h2>日本円出金の目安</h2><div className="table-scroll"><table className="rates"><thead><tr><th>出金額</th><th>手数料</th><th>確認点</th></tr></thead><tbody><tr><td>3万円未満</td><td>550円</td><td>最低出金額1,550円以上</td></tr><tr><td>3万円以上</td><td>770円</td><td>銀行口座名義を確認</td></tr></tbody></table></div>
  <p>手数料や最低額は変更される可能性があるため、出金直前に公式サポートで最新条件を確認します。</p>
  <h2>暗号資産の送金はネットワークを合わせる</h2><p>暗号資産の出金では、所定のネットワーク手数料がかかります。送金先が対応するネットワークとアドレスを確認し、異なる通貨・ネットワークへ送らないようにします。</p>
  <div className="callout"><strong>少額出金は手数料比率が高い</strong><p>日本円出金は固定手数料のため、金額が小さいほど負担率が高くなります。出金額と手数料を合算してから依頼します。</p></div>
  <h2>出金前チェック</h2><ol><li>日本円か暗号資産か</li><li>最低出金額・手数料</li><li>登録口座・送金先アドレス</li><li>ネットワークと二段階認証</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://support.bitbank.cc/hc/ja/articles/900000034263-%E6%97%A5%E6%9C%AC%E5%86%86%E3%81%AE%E5%87%BA%E9%87%91%E6%89%8B%E6%95%B0%E6%96%99%E3%81%AF%E3%81%84%E3%81%8F%E3%82%89%E3%81%A7%E3%81%99%E3%81%8B" target="_blank" rel="noopener noreferrer">bitbank Support「日本円の出金手数料」</a></li><li><a href="https://support.bitbank.cc/hc/ja/articles/360037119093?f=a" target="_blank" rel="noopener noreferrer">bitbank Support「暗号資産を出金したい」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/bitbank-trading-fees">取引手数料を確認する →</Link></p>
</article>; }
