import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/tachibana-stockhouse-fees' }, title: '立花証券ストックハウスの株式手数料｜個別・定額コースを比較', description: '立花証券ストックハウスの現物株式手数料を、1注文ごとの個別コースと1日定額コース、電話取引の違いで整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">STOCKHOUSE / STOCK COST</p><h1>ストックハウスの株式手数料<br />個別・定額コースを比較</h1>
  <p className="lede">現物株式のインターネット取引は、1注文ごとに計算する個別コースと、1日の約定代金合計で計算する定額コースから選べます。取引回数と金額で合うコースを判断します。</p>
  <h2>2つのインターネットコース</h2><div className="table-scroll"><table className="rates"><thead><tr><th>コース</th><th>計算単位</th><th>向いている取引</th></tr></thead><tbody><tr><td>現物個別</td><td>1注文ごと</td><td>取引回数が少ない</td></tr><tr><td>現物定額</td><td>1日の約定代金合計</td><td>同日に複数回売買する</td></tr><tr><td>電話取引</td><td>電話注文の手数料</td><td>オペレーター経由</td></tr></tbody></table></div>
  <h2>取引回数で比較する</h2><p>1日に1回だけ取引する場合は個別コース、同日に複数銘柄を売買する場合は定額コースが比較候補になります。約定代金合計と注文回数を月間実績で置き換えて計算します。</p>
  <div className="callout"><strong>新規口座の無料条件は期限を確認</strong><p>現物株式の取引手数料が一定期間無料になる案内がある場合も、対象期間・対象取引を公式ページで確認します。</p><Link href="/articles/stock-round-trip-cost">株式の往復コストを計算する →</Link></div>
  <h2>注文前チェック</h2><ul><li>現物個別・現物定額のどちらか</li><li>1日の約定代金合計</li><li>電話注文に該当しないか</li><li>無料キャンペーンの適用期限</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://t-stockhouse.jp/product/stock/fee.php/" target="_blank" rel="noopener noreferrer">立花証券ストックハウス「取引手数料」</a></li><li><a href="https://t-stockhouse.jp/product/stock/" target="_blank" rel="noopener noreferrer">立花証券ストックハウス「現物株式」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/tachibana-stockhouse-margin">信用取引のコストを確認する →</Link></p><p><Link href="/articles/tachibana-stockhouse-funding">入出金と振替を確認する →</Link></p>
</article>; }
