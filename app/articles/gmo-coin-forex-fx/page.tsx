import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'GMOコイン外国為替FXとは？1通貨・レバレッジ・スワップを確認', description: 'GMOコインの外国為替FXを、1通貨取引、レバレッジ、スワップポイント、証拠金の確認項目で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMOコイン / FX</p><h1>GMOコイン外国為替FXとは？<br />1通貨からの取引とコスト</h1>
  <p className="lede">GMOコインは暗号資産だけでなく、米ドル/円などの外国為替FXも提供しています。暗号資産FXとは口座・商品・証拠金の仕組みが異なるため、同じ「FX」という名前だけで比較しないようにします。</p>
  <h2>外国為替FXの確認項目</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>確認ポイント</th><th>コストへの影響</th></tr></thead><tbody><tr><td>取引単位</td><td>1通貨から取引可能か、通貨ペアごとの例外</td><td>少額で試せるが、数量と損益を確認</td></tr><tr><td>レバレッジ</td><td>個人口座・法人口座、注文時の倍率</td><td>必要証拠金とロスカット余力</td></tr><tr><td>スワップ</td><td>買い・売り、付与日数、日々の変動</td><td>保有日数で受取・支払が変化</td></tr><tr><td>スプレッド</td><td>通貨ペア・時間帯・相場急変時</td><td>約定時の売買コスト</td></tr></tbody></table></div>
  <h2>暗号資産FXとの違い</h2><p>外国為替FXは通貨ペアの為替レートを対象にし、暗号資産FXは暗号資産の価格差を証拠金で取引します。口座残高の反映先、取引時間、レバレッジ、ロスカット条件が別に定められているため、注文画面で対象商品を確認します。</p>
  <div className="callout"><strong>1通貨でもリスクはゼロにならない</strong><p>少額で始められても、スプレッド・スワップ・急変時の約定を含めた損益は変動します。必要証拠金ぎりぎりではなく、ロスカットまでの余力を残して数量を決めます。</p><Link href="/articles/fx-required-margin">必要証拠金の計算方法を読む →</Link></div>
  <h2>注文前チェック</h2><ul><li>外国為替FX口座と暗号資産口座の残高区分</li><li>通貨ペアごとの最小数量・スプレッド</li><li>必要証拠金・維持率・ロスカット</li><li>スワップの付与日と受取・支払方向</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://coin.z.com/jp/corp/product/info/fx/" target="_blank" rel="noopener noreferrer">GMOコイン「外国為替FX」</a></li><li><a href="https://coin.z.com/jp/corp/product/info/margin/" target="_blank" rel="noopener noreferrer">GMOコイン「暗号資産FX」</a></li></ul><p>確認日：2026年9月10日。レバレッジ、スプレッド、スワップは変更される場合があります。</p></section>
  <p><Link href="/fx">FXの比較ページへ →</Link></p>
</article>; }
