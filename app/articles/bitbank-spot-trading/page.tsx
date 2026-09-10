import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'bitbankの取引所・販売所｜初心者が使い分けるポイント', description: 'bitbankの取引所と販売所の使い分けを、価格の決まり方、端数、手数料、注文のしやすさから整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">bitbank / SPOT</p><h1>bitbankの取引所と販売所<br />使い分けのポイント</h1>
  <p className="lede">取引所は板を見ながら価格を指定でき、販売所は提示価格で簡単に売買できます。目的に応じて使い分け、価格差と端数を確認します。</p>
  <h2>目的別の使い分け</h2><div className="table-scroll"><table className="rates"><thead><tr><th>目的</th><th>向いている方法</th><th>確認すること</th></tr></thead><tbody><tr><td>価格を指定したい</td><td>取引所</td><td>板・注文数量・約定状況</td></tr><tr><td>すぐ売買したい</td><td>販売所</td><td>提示価格・スプレッド</td></tr><tr><td>端数を売却したい</td><td>販売所</td><td>最小注文数量</td></tr><tr><td>コストを比較したい</td><td>両方</td><td>手数料＋価格差</td></tr></tbody></table></div>
  <h2>価格差を円で比較</h2><p>同じ数量を取引所と販売所で売買した場合の受取額を比較し、販売所のスプレッドがいくらになるかを円換算します。取引所の手数料も加えて、実質負担を並べます。</p>
  <div className="callout"><strong>販売所の「手数料無料」は価格差を確認</strong><p>購入価格と売却価格の差が大きい時間帯は、手数料が無料でも総コストが高くなる場合があります。</p><Link href="/articles/bitbank-trading-fees">bitbankの手数料を確認する →</Link></div>
  <h2>利用前チェック</h2><ul><li>取引所か販売所か</li><li>表示価格とスプレッド</li><li>注文数量と端数</li><li>出金時の手数料</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://bitbank.cc/" target="_blank" rel="noopener noreferrer">bitbank公式サイト</a></li><li><a href="https://support.bitbank.cc/hc/ja/articles/32495331089817-%E7%AB%AF%E6%95%B0%E3%82%92%E5%A3%B2%E5%8D%B4%E3%81%97%E3%81%9F%E3%81%84%E5%A0%B4%E5%90%88%E3%81%AF%E8%B2%A9%E5%A3%B2%E6%89%80%E3%82%92%E3%81%94%E5%88%A9%E7%94%A8%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84" target="_blank" rel="noopener noreferrer">bitbank Support「端数を売却したい場合」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/bitbank-deposit-withdrawal">入出金を確認する →</Link></p>
</article>; }
