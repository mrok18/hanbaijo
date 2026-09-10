import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '金融商品のコスト比較｜FX・CFD・株・先物・暗号資産の見方', description: 'FX、CFD、株式、先物、暗号資産の取引コストを、売買・保有・資金移動の3段階で比較する方法を解説します。' };

export default function Page() { return <article>
  <p className="page-kicker">CROSS-ASSET / COST</p><h1>金融商品のコスト比較<br />FX・CFD・株・先物・暗号資産</h1>
  <p className="lede">商品が違うと手数料の名前も変わります。比較するときは、注文前後の「売買コスト」、保有中の「保有コスト」、入出金などの「資金移動コスト」に分けると、広告の一部無料表示を総額で読み解けます。</p>
  <h2>まず3つのコストに分ける</h2><div className="table-scroll"><table className="rates"><thead><tr><th>段階</th><th>代表的な項目</th><th>確認する数字</th></tr></thead><tbody><tr><td>売買</td><td>スプレッド・売買手数料・約定差</td><td>1回または往復の円換算</td></tr><tr><td>保有</td><td>スワップ・金利・価格調整額・貸株料</td><td>保有日数、建玉、年率</td></tr><tr><td>資金移動</td><td>入金・出金・為替交換・送金</td><td>方法、最低額、反映時間</td></tr></tbody></table></div>
  <h2>商品ごとに見るべき軸</h2><div className="table-scroll"><table className="rates"><thead><tr><th>商品</th><th>比較の中心</th><th>見落としやすい点</th></tr></thead><tbody><tr><td>FX</td><td>スプレッド・スワップ・証拠金</td><td>適用時間、数量、ロスカット</td></tr><tr><td>CFD</td><td>スプレッド・調整額・取引単位</td><td>銘柄ごとの倍率、期限・休場</td></tr><tr><td>株式</td><td>売買手数料・為替・信用金利</td><td>NISA対象、板の価格差、配当課税</td></tr><tr><td>先物</td><td>手数料・呼値・証拠金</td><td>限月、SQ、追加証拠金</td></tr><tr><td>暗号資産</td><td>スプレッド・板手数料・送金</td><td>販売所と取引所、ネットワーク</td></tr></tbody></table></div>
  <div className="callout"><strong>同じ金額・同じ期間にそろえる</strong><p>「1回あたり」だけでなく、取引金額、売買回数、保有日数をそろえて比較します。入力条件は<a href="/tools/cost-calculator">取引コスト計算機</a>で試算できます。</p><Link href="/method">当サイトの計算式とデータ区分 →</Link></div>
  <h2>比較表を読むチェックリスト</h2><ol><li>手数料無料の対象範囲を確認する</li><li>スプレッドが固定か、時間・数量で変わるかを見る</li><li>保有コストの受取・支払方向を確認する</li><li>証拠金・ロスカット・追証のルールを読む</li><li>入出金と為替のコストを足して総額にする</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参考ページ</h2><ul><li><Link href="/fx">FXコスト比較</Link></li><li><Link href="/cfd">CFDコスト比較</Link></li><li><Link href="/stocks">株式コスト比較</Link></li><li><Link href="/futures">先物コスト比較</Link></li><li><Link href="/crypto">暗号資産の実測ページ</Link></li></ul><p>各社の条件は変更されるため、最終的には公式サイトと取引画面をご確認ください。</p></section>
</article>; }
