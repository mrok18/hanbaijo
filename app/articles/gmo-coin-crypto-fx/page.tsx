import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/gmo-coin-crypto-fx' }, title: 'GMOコイン暗号資産FXとは？2倍レバレッジ・証拠金・リスク', description: 'GMOコインの暗号資産FXについて、現物との違い、2倍レバレッジ、証拠金とロスカットの確認項目を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMOコイン / CRYPTO FX</p><h1>GMOコイン暗号資産FXとは？<br />2倍レバレッジと証拠金を確認</h1>
  <p className="lede">暗号資産FXは、現物を受け取る売買ではなく、買い・売りの建玉を決済して差額を受け取る証拠金取引です。現物取引と同じ感覚で始めず、レバレッジと自動決済の仕組みを先に確認します。</p>
  <h2>現物と暗号資産FXの違い</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>現物取引</th><th>暗号資産FX</th></tr></thead><tbody><tr><td>保有するもの</td><td>暗号資産そのもの</td><td>買い・売りの建玉</td></tr><tr><td>レバレッジ</td><td>なし</td><td>公式案内では2倍</td></tr><tr><td>利益・損失</td><td>売買価格の差</td><td>建玉の決済価格差</td></tr><tr><td>主な注意点</td><td>価格変動・送付</td><td>証拠金維持率・ロスカット・スプレッド</td></tr></tbody></table></div>
  <h2>必要証拠金は取引金額の半分が目安</h2><p>2倍レバレッジの単純な計算では、取引金額を2で割った額が必要証拠金の目安になります。実際の注文では銘柄ごとの取引ルール、スプレッド、評価損益、維持率を確認し、余裕資金を残して計画します。</p>
  <div className="callout"><strong>「少ない資金で取引できる」と「損失が小さい」は別</strong><p>レバレッジは必要資金を抑える一方、価格が逆に動いたときの損失率を高めます。ロスカットで全損を防げるとは限らず、急変時は預託額を上回る不足金が生じる可能性もあります。</p><Link href="/articles/fx-required-margin">証拠金の計算方法を読む →</Link></div>
  <h2>始める前のチェック</h2><ul><li>現物か暗号資産FXか</li><li>銘柄ごとのスプレッドと取引単位</li><li>必要証拠金・維持率・ロスカット</li><li>建玉を持ち越す場合の費用とリスク</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://coin.z.com/jp/corp/product/info/margin/" target="_blank" rel="noopener noreferrer">GMOコイン「暗号資産FX」</a></li><li><a href="https://coin.z.com/jp/corp/guide/comparison/" target="_blank" rel="noopener noreferrer">GMOコイン「暗号資産サービスを選ぶ」</a></li></ul><p>確認日：2026年9月10日。レバレッジや取引ルールは変更される場合があるため、口座開設・注文前に公式資料をご確認ください。</p></section>
  <p><Link href="/articles/gmo-coin-trading-fees">販売所・取引所の手数料へ →</Link></p>
</article>; }
