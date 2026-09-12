import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/gmo-coin-trading-fees' }, title: 'GMOコインの取引手数料｜販売所・取引所・暗号資産FXを比較', description: 'GMOコインの販売所、取引所、暗号資産FXを、手数料とスプレッドの違いから整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMOコイン / COST</p><h1>GMOコインの取引手数料<br />販売所・取引所・暗号資産FXを比較</h1>
  <p className="lede">GMOコインは、提示価格で売買する販売所、板で注文する取引所、証拠金で取引する暗号資産FXを用意しています。「手数料無料」だけで決めず、スプレッドやレバレッジのコストまで分けて確認しましょう。</p>
  <h2>3つのサービスを分けて見る</h2><div className="table-scroll"><table className="rates"><thead><tr><th>サービス</th><th>取引の相手</th><th>主なコスト</th><th>確認ポイント</th></tr></thead><tbody>
    <tr><td>販売所</td><td>GMOコインの提示価格</td><td>売値と買値のスプレッド</td><td>取引数量・提示価格</td></tr><tr><td>取引所（現物）</td><td>板に参加する注文</td><td>取引手数料・約定価格</td><td>Maker/Taker、最小数量</td></tr><tr><td>暗号資産FX</td><td>GMOコインの提示価格</td><td>スプレッド・諸費用</td><td>証拠金・ロスカット・保有時間</td></tr>
  </tbody></table></div>
  <h2>販売所は手数料0円でも差額がある</h2><p>販売所の取引手数料が無料でも、買値と売値の差であるスプレッドが実質的なコストになります。同じ数量を買ってすぐ売る場合は、表示価格の差を数量に掛けて円換算してから判断します。</p>
  <div className="callout"><strong>比較の順番</strong><p>①販売所か取引所か、②手数料率または定額、③スプレッド、④最小注文数量の順に確認すると、広告の「無料」表示だけに引っ張られません。</p><Link href="/articles/bitbank-trading-fees">他社の取引所・販売所比較も読む →</Link></div>
  <h2>注文前に確認する項目</h2><ul><li>取引画面に表示された買値・売値</li><li>取引所の手数料区分と対象銘柄</li><li>最小注文数量・数量単位</li><li>暗号資産FXの必要証拠金とロスカット</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://coin.z.com/jp/corp/guide/fees/" target="_blank" rel="noopener noreferrer">GMOコイン「手数料（入出金・取引）」</a></li><li><a href="https://coin.z.com/jp/corp/product/info/spot/" target="_blank" rel="noopener noreferrer">GMOコイン「販売所」</a></li><li><a href="https://coin.z.com/jp/corp/product/info/margin/" target="_blank" rel="noopener noreferrer">GMOコイン「暗号資産FX」</a></li></ul><p>確認日：2026年9月10日。手数料・スプレッドは変更される場合があるため、注文前に公式ページをご確認ください。</p></section>
  <p><Link href="/articles/gmo-coin-deposit-withdrawal">入出金手数料と反映時間を確認する →</Link></p>
</article>; }
