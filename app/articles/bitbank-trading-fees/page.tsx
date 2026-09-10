import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'bitbankの取引手数料｜取引所・販売所のコストを分けて確認', description: 'bitbankの板取引と販売所を、手数料・スプレッド・約定方法の違いから整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">bitbank / COST</p><h1>bitbankの取引手数料<br />取引所と販売所を比較</h1>
  <p className="lede">bitbankには板を使う取引所と、価格を提示して売買する販売所があります。手数料表示だけでなく、スプレッドと注文方法を分けて確認します。</p>
  <h2>取引所と販売所の違い</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>取引所（板取引）</th><th>販売所</th></tr></thead><tbody><tr><td>相手方</td><td>板に参加する注文</td><td>販売所の提示価格</td></tr><tr><td>主なコスト</td><td>売買手数料・取引価格</td><td>売値と買値のスプレッド</td></tr><tr><td>注文方法</td><td>指値・成行など</td><td>提示価格で購入・売却</td></tr><tr><td>端数売却</td><td>数量条件に注意</td><td>端数を含めて売却できる場合</td></tr></tbody></table></div>
  <h2>手数料0円でもスプレッドを確認</h2><p>販売所の購入・売却手数料が無料でも、提示価格にはスプレッドが含まれます。取引数量と売買価格の差を円換算し、取引所の手数料と比較します。</p>
  <div className="callout"><strong>少額なら端数売却も確認</strong><p>取引所で売却しきれない端数は、販売所で売却できる場合があります。取引方法を使い分け、残高を全て換金できるか確認します。</p><Link href="/articles/bitbank-deposit-withdrawal">日本円の入出金を確認する →</Link></div>
  <h2>注文前チェック</h2><ul><li>取引所か販売所か</li><li>手数料とスプレッド</li><li>最小注文数量・端数</li><li>約定価格と注文方法</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://bitbank.cc/docs/fees/" target="_blank" rel="noopener noreferrer">bitbank「手数料」</a></li><li><a href="https://bitbank.cc/" target="_blank" rel="noopener noreferrer">bitbank公式サイト</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/bitbank-deposit-withdrawal">入出金と出金手数料を確認する →</Link></p><p><Link href="/articles/bitbank-spot-trading">取引所・販売所の使い分けを確認する →</Link></p>
</article>; }
