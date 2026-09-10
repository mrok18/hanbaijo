import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'GMOクリック証券の株主優待・配当｜権利付最終売買日を確認', description: 'GMOクリック証券で株主優待や配当の権利を得るための権利確定日、権利付最終売買日、現物保有の条件を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMO CLICK / RIGHTS</p><h1>GMOクリック証券の株主優待・配当<br />権利付最終売買日を確認</h1>
  <p className="lede">株主優待や配当を受け取るには、権利確定日だけでなく、権利付最終売買日の大引け時点で現物株式を保有している必要があります。</p>
  <h2>権利日を3つに分ける</h2><div className="table-scroll"><table className="rates"><thead><tr><th>日付</th><th>意味</th><th>確認ポイント</th></tr></thead><tbody><tr><td>権利付最終売買日</td><td>権利を得るために保有する最終日</td><td>大引け時点の現物保有</td></tr><tr><td>権利落ち日</td><td>権利がなくなった状態で取引する日</td><td>株価・配当落ちの影響</td></tr><tr><td>権利確定日</td><td>株主名簿の基準日</td><td>銘柄ごとの会社情報</td></tr></tbody></table></div>
  <h2>信用取引では権利の扱いが異なる</h2><p>株主優待の権利を得る条件は現物株式の保有が基本です。信用取引では配当相当額や権利処理の扱いが異なるため、優待目的なら銘柄の公式条件と口座ルールを確認します。</p>
  <div className="callout"><strong>日付は銘柄ごとに確認</strong><p>権利確定月が同じでも、休場日や決算日で権利付最終売買日は変わります。GMOクリック証券の銘柄情報で、最新日付を確認してから注文します。</p></div>
  <h2>確認する順番</h2><ol><li>権利確定日を確認</li><li>2営業日前の権利付最終売買日を確認</li><li>現物株式の保有数量を確認</li><li>配当金・優待内容を企業のIRで確認</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.click-sec.com/corp/guide/kabu/stockholder/" target="_blank" rel="noopener noreferrer">GMOクリック証券「株主優待」</a></li><li><a href="https://www.click-sec.com/corp/guide/kabu/haitokin/" target="_blank" rel="noopener noreferrer">GMOクリック証券「配当金」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/gmo-click-stock-fees">株式手数料を確認する →</Link></p><p><Link href="/stocks/gmo-click">GMOクリック証券の株式条件一覧へ →</Link></p>
</article>; }
