import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '少額投資のコスト｜100円・1通貨でも確認したい手数料とリスク', description: '少額でFX・株式・暗号資産を始めるときに、手数料、スプレッド、最低入金、証拠金を確認する順番を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">BEGINNER / COST</p><h1>少額投資のコスト<br />100円・1通貨でも確認する項目</h1>
  <p className="lede">「100円から」「1通貨から」は注文できる最小単位の案内です。実際にはスプレッド、入出金、証拠金、価格変動があるため、始める金額と必要な余裕資金を分けて考えます。</p>
  <h2>少額でも発生する負担</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>意味</th><th>確認方法</th></tr></thead><tbody><tr><td>スプレッド</td><td>買値と売値の差</td><td>数量を掛けて円換算</td></tr><tr><td>最低入金・出金</td><td>資金移動の条件</td><td>方法、手数料、反映時間</td></tr><tr><td>必要証拠金</td><td>レバレッジ商品の担保</td><td>取引金額÷倍率などの公式</td></tr><tr><td>余裕資金</td><td>逆行時に残す資金</td><td>維持率・ロスカットまでの距離</td></tr></tbody></table></div>
  <h2>少額で始める前の計算</h2><p>まず、1回の取引コストを円で計算し、次に想定する売買回数を掛けます。FXやCFDでは証拠金だけを入金せず、価格が逆に動いた場合の評価損と手数料を吸収できる余力を残します。</p>
  <div className="callout"><strong>少額＝低リスクではありません</strong><p>金額が小さくても、レバレッジ、急変、ロスカット、送金先の入力ミスなどのリスクは残ります。最小単位で操作を確認してから、数量を増やします。</p><Link href="/tools/fx-position-size-calculator">FXの数量・リスクを試算する →</Link></div>
  <h2>商品別の入口</h2><ul><li><Link href="/articles/matsui-fx-one-currency">FXの1通貨取引を確認</Link></li><li><Link href="/articles/gmo-coin-forex-fx">GMOコイン外国為替FXの取引単位を確認</Link></li><li><Link href="/articles/gmo-coin-trading-fees">暗号資産の販売所・取引所コストを確認</Link></li><li><Link href="/articles/dmm-kabu-tsumitate-kabu-nisa">株式積立・NISAの条件を確認</Link></li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">確認の考え方</h2><p>手数料・スプレッド・証拠金は各社と商品で異なります。広告の最低金額だけで判断せず、公式の取引条件・契約締結前交付書面・取引画面を確認してください。確認日：2026年9月10日。</p></section>
</article>; }
