import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/gmo-click-stock-fees' }, title: 'GMOクリック証券 信用取引 手数料｜無料範囲と金利・貸株料', description: 'GMOクリック証券の信用取引手数料は無料か、買方金利・貸株料などの別コストと対象外を整理。現物との違いも確認できます。' };

const FAQS = [
  { question: 'GMOクリック証券の信用取引手数料はいくらですか？', answer: '信用取引の売買手数料は無料です。ただし、買方金利・貸株料・逆日歩・名義書換料など保有に伴う費用は別に発生するため、総コストで確認します。' },
  { question: '信用取引手数料が無料なら費用は0円ですか？', answer: 'いいえ。コールセンター注文、単元未満株、不足金・強制決済などは通常の無料対象外となる場合があります。注文方法と取引区分を公式一覧で確認してください。' },
  { question: '現物取引と信用取引で手数料は違いますか？', answer: '通常の現物・信用の売買手数料はいずれも無料ですが、信用取引には金利や貸株料がかかります。現物にはない保有コストを含めて比較することが重要です。' },
];

export default function Page() { return <article>
  <p className="page-kicker">GMO CLICK / STOCK COST</p><h1>GMOクリック証券 信用取引 手数料<br />無料範囲と別コスト</h1>
  <p className="lede">GMOクリック証券の信用取引手数料は無料ですが、すべての取引や費用が0円とは限りません。金利・貸株料などの保有コストと通常取引・対象外のケースを分けて確認します。</p>
  <h2>無料化の対象と対象外</h2><div className="table-scroll"><table className="rates"><thead><tr><th>取引・費用</th><th>確認ポイント</th></tr></thead><tbody><tr><td>現物株の通常注文</td><td>約定代金にかかわらず取引手数料0円</td></tr><tr><td>信用取引</td><td>取引手数料0円。買方金利・貸株料などは別途</td></tr><tr><td>コールセンター取引</td><td>無料対象外</td></tr><tr><td>単元未満株</td><td>買取・売却手数料が別に設定される場合あり</td></tr><tr><td>不足金・強制決済</td><td>通常の売買手数料とは別の費用</td></tr></tbody></table></div>
  <h2>信用取引は金利・貸株料まで見る</h2><p>信用取引の売買手数料が無料でも、買方金利、貸株料、逆日歩、名義書換料など保有に伴う費用が発生します。保有日数を決め、手数料以外の費用を合計して比較します。</p>
  <div className="callout"><strong>無料＝総コスト0円ではない</strong><p>注文方法、銘柄区分、強制決済などで費用が変わります。申込み前に公式の手数料一覧と信用取引ルールを確認してください。</p><Link href="/articles/dmm-kabu-margin-trading-cost">信用取引コストの内訳も確認する →</Link></div>
  <h2>注文前チェック</h2><ul><li>現物・信用のどちらか</li><li>通常注文かコールセンター注文か</li><li>単元未満株に該当しないか</li><li>金利・貸株料・強制決済費用を含めたか</li></ul>
  <section className="article-faq" aria-labelledby="faq"><h2 id="faq">GMOクリック証券の信用取引手数料FAQ</h2>{FAQS.map((item) => <div className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.click-sec.com/corp/guide/commission_list/" target="_blank" rel="noopener noreferrer">GMOクリック証券「手数料」</a></li><li><a href="https://www.click-sec.com/corp/guide/kabu/shinyo/" target="_blank" rel="noopener noreferrer">GMOクリック証券「信用取引」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/gmo-click-stock-funding">入出金と振替を確認する →</Link></p><p><Link href="/articles/gmo-click-stock-rights">配当・株主優待の権利日を確認する →</Link></p><p><Link href="/stocks/gmo-click">GMOクリック証券の株式条件一覧へ →</Link></p>
</article>; }
