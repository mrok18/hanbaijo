import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/gmo-click-stock-funding' }, title: 'GMOクリック証券の株式入出金｜証券取引口座の残高と出金名義', description: 'GMOクリック証券の株式資金の管理口座、入出金・振替、出金名義の注意点を公式情報で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMO CLICK / STOCK FUNDING</p><h1>GMOクリック証券の株式入出金<br />残高と出金名義を確認</h1>
  <p className="lede">株式・投資信託・債券の資金は証券取引口座で管理されます。入金した銀行口座、証券口座の残高、出金依頼の名義を分けて確認します。</p>
  <h2>資金確認の順番</h2><div className="table-scroll"><table className="rates"><thead><tr><th>確認場所</th><th>見る項目</th><th>発注・出金との関係</th></tr></thead><tbody><tr><td>銀行口座</td><td>振込・引落し完了</td><td>入金元を確認</td></tr><tr><td>証券取引口座</td><td>買付余力・預り金</td><td>現物注文の資金</td></tr><tr><td>出金画面</td><td>出金可能額・登録名義</td><td>名義相違は受付不可</td></tr></tbody></table></div>
  <h2>出金名義は口座名義と一致させる</h2><p>公式案内では、GMOクリック証券口座の名義と振込名義が同一でなければ出金を受け付けられないとされています。家族名義の口座や名義変更直後は、登録情報を確認してから依頼します。</p>
  <div className="callout"><strong>売却代金の反映も確認</strong><p>株式を売却した直後は、受渡日や買付余力への反映タイミングが異なります。出金可能額の表示を確認し、受渡日前の資金を前提にしないようにします。</p></div>
  <h2>入出金前チェック</h2><ol><li>銀行口座からの入金完了</li><li>証券取引口座の買付余力</li><li>売却代金の受渡日</li><li>登録名義と出金先口座の一致</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.click-sec.com/corp/guide/nskin/contribution.html" target="_blank" rel="noopener noreferrer">GMOクリック証券「出金」</a></li><li><a href="https://www.click-sec.com/corp/guide/kabu/" target="_blank" rel="noopener noreferrer">GMOクリック証券「株式」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/gmo-click-stock-fees">株式手数料を確認する →</Link></p><p><Link href="/stocks/gmo-click">GMOクリック証券の株式条件一覧へ →</Link></p>
</article>; }
