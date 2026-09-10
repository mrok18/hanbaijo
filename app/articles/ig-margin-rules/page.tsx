import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'IG証券の証拠金とロスカット｜75％・東京定時100％の違い', description: 'IG証券のレバレッジ取引における常時ロスカット75％以下と東京定時ロスカット100％未満を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">IG証券 / MARGIN</p><h1>IG証券のロスカット<br />75％と東京定時100％を比較</h1>
  <p className="lede">IG証券では、レバレッジ取引に常時判定と東京定時判定があります。判定タイミング、予約注文の取消し、ポジション決済の範囲を分けて確認します。</p>
  <h2>2つのロスカット判定</h2><div className="table-scroll"><table className="rates"><thead><tr><th>判定</th><th>基準</th><th>処理</th></tr></thead><tbody><tr><td>常時ロスカット</td><td>有効残高が維持証拠金の75％以下</td><td>予約注文取消し・一部または全部を決済</td></tr><tr><td>東京定時ロスカット</td><td>営業日11時時点で100％未満</td><td>予約注文取消し・一部または全部を決済</td></tr></tbody></table></div>
  <h2>75％・100％は約定価格の保証ではない</h2><p>ロスカットは基準比率で処理する仕組みであり、その比率の価格や損失額で約定することを保証しません。取引時間外の銘柄は、取引再開後に処理される場合があります。</p>
  <div className="callout"><strong>口座内の商品区分を確認</strong><p>FX・CFD・バニラオプションなど、取引種類により判定ルールが異なります。商品ごとの維持証拠金と有効残高を確認します。</p><Link href="/tools/cfd-margin-calculator">CFD証拠金を計算する →</Link></div>
  <h2>保有中のチェック</h2><ul><li>有効残高と維持証拠金</li><li>常時判定・東京定時判定の区分</li><li>予約注文が取消される条件</li><li>取引時間外・急変時の約定リスク</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.ig.com/jp/our-charges/margin-calls" target="_blank" rel="noopener noreferrer">IG証券「ロスカット・強制決済」</a></li><li><a href="https://www.ig.com/jp/services" target="_blank" rel="noopener noreferrer">IG証券「ご利用案内」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/ig-products-overview">取扱商品を確認する →</Link></p><p><Link href="/articles/ig-trading-costs">取引コストを確認する →</Link></p>
</article>; }
