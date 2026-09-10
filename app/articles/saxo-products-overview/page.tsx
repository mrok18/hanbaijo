import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'サクソバンク証券の取扱商品｜FX・CFD・海外株・先物を口座で整理', description: 'サクソバンク証券のFX、CFD、外国株式、ETF、先物、オプションを商品ごとのリスクと確認項目で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">SAXO / PRODUCTS</p><h1>サクソバンク証券の取扱商品<br />FX・CFD・海外株を整理</h1>
  <p className="lede">サクソバンク証券は、FXだけでなく外国株式、ETF、CFD、先物、オプションまで同じサービス内で確認できます。商品名の多さではなく、現物かデリバティブか、決済期限があるかを分けて比較します。</p>
  <h2>商品カテゴリの違い</h2><div className="table-scroll"><table className="rates"><thead><tr><th>カテゴリ</th><th>主な特徴</th><th>最初に確認</th></tr></thead><tbody><tr><td>FX</td><td>通貨ペアを証拠金で取引</td><td>スプレッド・スワップ・必要証拠金</td></tr><tr><td>CFD</td><td>株式・指数・商品などの価格差取引</td><td>スプレッド・調整額・レバレッジ</td></tr><tr><td>外国株式・ETF</td><td>海外市場の現物を保有</td><td>取引手数料・為替・配当税</td></tr><tr><td>先物・オプション</td><td>期限や権利行使条件がある</td><td>限月・証拠金・最終決済</td></tr></tbody></table></div>
  <h2>FXは150通貨ペア以上</h2><p>公式の商品一覧では、150以上のFX通貨ペアを案内しています。高金利通貨を選ぶ場合も、受取スワップだけでなく、スプレッド、ロスカット、為替変動を同じ表で確認します。</p>
  <h2>CFDは手数料無料でもコストがある</h2><p>CFDの売買手数料が無料と案内されていても、買値と売値の差（スプレッド）や保有中の調整額などが発生する場合があります。商品ごとの取引条件を確認し、保有期間を含む総コストで比較します。</p>
  <div className="callout"><strong>現物とCFDを混同しない</strong><p>同じ銘柄名でも、外国株式（現物）と株式CFDでは、所有権、配当の扱い、レバレッジ、決済方法が異なります。申込み前に商品欄を確認してください。</p></div>
  <h2>商品選びの順番</h2><ol><li>現物かデリバティブかを決める</li><li>取引単位と必要証拠金を確認する</li><li>保有中の費用と最終決済の有無を確認する</li><li>公式の取引条件・リスク説明を読む</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.home.saxo/ja-jp/products" target="_blank" rel="noopener noreferrer">サクソバンク証券「取扱商品一覧」</a></li><li><a href="https://www.home.saxo/ja-jp/products/cfds" target="_blank" rel="noopener noreferrer">サクソバンク証券「CFD」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/saxo-cfd-cost-structure">CFDのコスト構造を確認する →</Link></p><p><Link href="/articles/saxo-tradingview-account-transfer">TradingView利用時の口座振替を確認する →</Link></p><p><Link href="/fx/saxo">サクソバンク証券の取引条件一覧へ →</Link></p>
</article>; }
