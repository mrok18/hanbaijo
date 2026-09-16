import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/gmo-coin-trading-fees' }, title: 'GMOコイン 手数料一覧｜販売所・取引所・FX・入出金の無料条件', description: 'GMOコインの手数料一覧を、販売所・取引所・暗号資産FX・入出金に分けて解説。無料条件、Maker/Taker、スプレッド、レバレッジ手数料を注文前に確認できます。' };

const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'GMOコインの手数料は無料ですか？', acceptedAnswer: { '@type': 'Answer', text: '即時入金・通常出金・暗号資産の送付は原則無料ですが、販売所はスプレッド、取引所は銘柄別のMaker・Taker手数料、暗号資産FXは建玉のレバレッジ手数料が発生する場合があります。' } },
  { '@type': 'Question', name: 'GMOコインの販売所と取引所で手数料はどう違いますか？', acceptedAnswer: { '@type': 'Answer', text: '販売所は取引手数料0円でも買値と売値の差（スプレッド）が実質コストになります。取引所は板取引で、銘柄区分とMaker・Takerに応じた料率を確認します。' } },
  { '@type': 'Question', name: 'GMOコインの手数料を確認するときの順番は？', acceptedAnswer: { '@type': 'Answer', text: '販売所か取引所か、取引手数料率、スプレッド、最小注文数量、入出金費用の順で確認し、暗号資産FXでは必要証拠金と建玉の保有時間も確認します。' } },
] };

export default function Page() { return <article>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
  <p className="page-kicker">GMOコイン / FEE GUIDE</p><h1>GMOコイン 手数料一覧<br />販売所・取引所・暗号資産FXを比較</h1>
  <p className="lede">GMOコインの手数料は、提示価格で売買する販売所、板で注文する取引所、証拠金で取引する暗号資産FXで異なります。入出金の無料条件も含め、取引手数料・スプレッド・レバレッジ手数料を分けて確認しましょう。</p>
  <div className="callout"><strong>GMOコイン 手数料の要点</strong><p>即時入金・通常出金・暗号資産の送付は原則無料ですが、振込手数料や送付元の費用は別です。販売所は取引手数料0円でもスプレッドが実質コストになり、取引所（現物）は銘柄とMaker/Takerで料率が変わります。暗号資産FXは取引手数料0円でも、建玉を持ち越すとレバレッジ手数料が発生します。</p></div>
  <h2>3つのサービスを分けて見る</h2><div className="table-scroll"><table className="rates"><thead><tr><th>サービス</th><th>取引の相手</th><th>主なコスト</th><th>確認ポイント</th></tr></thead><tbody>
    <tr><td>販売所</td><td>GMOコインの提示価格</td><td>取引手数料0円・スプレッド</td><td>買値と売値、数量指定の端数</td></tr><tr><td>取引所（現物）</td><td>板に参加する注文</td><td>BTC・ETH・XRP・DAIはMaker -0.01%／Taker 0.05%、その他はMaker -0.03%／Taker 0.09%</td><td>銘柄区分、Maker/Taker、最小数量</td></tr><tr><td>暗号資産FX</td><td>GMOコインの提示価格</td><td>取引手数料0円・レバレッジ手数料0.04%/日</td><td>証拠金、ロスカット、保有時間</td></tr><tr><td>日本円の入出金</td><td>銀行・入出金サービス</td><td>即時入金・通常出金0円（大口出金400円）</td><td>振込手数料、出金区分、反映時間</td></tr>
  </tbody></table></div>
  <h2>販売所は手数料0円でも差額がある</h2><p>販売所の取引手数料が無料でも、買値と売値の差であるスプレッドが実質的なコストになります。同じ数量を買ってすぐ売る場合は、表示価格の差を数量に掛けて円換算してから判断します。</p>
  <div className="callout"><strong>比較の順番</strong><p>①販売所か取引所か、②手数料率または定額、③スプレッド、④最小注文数量、⑤入出金費用の順に確認すると、広告の「無料」表示だけに引っ張られません。</p><Link href="/articles/bitbank-trading-fees">他社の取引所・販売所比較も読む →</Link></div>
  <h2>注文前に確認する項目</h2><ul><li>取引画面に表示された買値・売値</li><li>取引所の手数料区分と対象銘柄</li><li>最小注文数量・数量単位</li><li>暗号資産FXの必要証拠金とロスカット</li></ul>
  <section className="article-faq" aria-labelledby="gmo-coin-faq"><h2 id="gmo-coin-faq">GMOコイン手数料のFAQ</h2><details><summary>GMOコインの手数料は無料ですか？</summary><p>即時入金・通常出金・暗号資産の送付は原則無料ですが、販売所はスプレッド、取引所は銘柄別のMaker・Taker手数料、暗号資産FXは建玉のレバレッジ手数料が発生する場合があります。</p></details><details><summary>GMOコインの販売所と取引所で手数料はどう違いますか？</summary><p>販売所は取引手数料0円でも買値と売値の差（スプレッド）が実質コストになります。取引所は板取引で、銘柄区分とMaker・Takerに応じた料率を確認します。</p></details><details><summary>GMOコインの手数料を確認するときの順番は？</summary><p>販売所か取引所か、取引手数料率、スプレッド、最小注文数量、入出金費用の順で確認し、暗号資産FXでは必要証拠金と建玉の保有時間も確認します。</p></details></section>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://coin.z.com/jp/corp/guide/fees/" target="_blank" rel="noopener noreferrer">GMOコイン「手数料（入出金・取引）」</a></li><li><a href="https://coin.z.com/jp/corp/product/info/spot/" target="_blank" rel="noopener noreferrer">GMOコイン「販売所」</a></li><li><a href="https://coin.z.com/jp/corp/product/info/margin/" target="_blank" rel="noopener noreferrer">GMOコイン「暗号資産FX」</a></li></ul><p>確認日：2026年9月16日。手数料・スプレッドは変更される場合があるため、注文前に公式ページをご確認ください。</p></section>
  <p><Link href="/articles/gmo-coin-deposit-withdrawal">入出金手数料と反映時間を確認する →</Link></p><p><Link href="/articles/gmo-coin-crypto-fx">暗号資産FXの証拠金・ロスカットを確認する →</Link></p>
</article>; }
