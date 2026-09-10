import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Plus500証券の取扱商品｜FX・株式・商品CFDとノックアウトを整理', description: 'Plus500証券のFX・株式・株価指数・商品CFDとノックアウトオプションを、現物との違いとリスクから整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">PLUS500 / PRODUCTS</p><h1>Plus500証券の取扱商品<br />FX・CFD・ノックアウトを整理</h1>
  <p className="lede">Plus500証券は、FXとCFDを同じ取引画面で管理できます。個別株、株価指数、商品、ノックアウトオプションを、現物との違いと証拠金の仕組みで比較します。</p>
  <h2>商品カテゴリの違い</h2><div className="table-scroll"><table className="rates"><thead><tr><th>カテゴリ</th><th>取引の特徴</th><th>確認項目</th></tr></thead><tbody><tr><td>FX</td><td>通貨ペアの差金決済</td><td>スプレッド・必要証拠金</td></tr><tr><td>株式・指数CFD</td><td>株価や指数の値動きに連動</td><td>スプレッド・配当相当額</td></tr><tr><td>商品CFD</td><td>金・原油などを差金決済</td><td>取引単位・調整額</td></tr><tr><td>ノックアウト</td><td>指定水準で自動決済</td><td>オプション料・セーフティデポジット</td></tr></tbody></table></div>
  <h2>CFDは現物の受渡しをしない</h2><p>公式案内では、CFDは現物の受渡しを行わず、売買による差額を受け払う取引と説明されています。株式名が同じでも、現物株の所有権や配当とは扱いが異なります。</p>
  <div className="callout"><strong>ノックアウトは損失限定の仕組みを理解する</strong><p>指定したノックアウト水準に達すると自動決済され、オプションバリューが損失になる場合があります。通常CFDのロスカットとは仕組みが異なります。</p></div>
  <h2>注文前チェック</h2><ol><li>現物かCFDか</li><li>商品ごとの取引単位と証拠金</li><li>保有中の費用・スプレッド</li><li>ノックアウト水準と最大損失</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://jp.plus500.com/ja-jp/" target="_blank" rel="noopener noreferrer">Plus500証券「公式サイト」</a></li><li><a href="https://jp.plus500.com/info/20250707-01" target="_blank" rel="noopener noreferrer">Plus500証券「商品CFD・ノックアウト追加」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/plus500-margin-losscut">証拠金とロスカットを確認する →</Link></p><p><Link href="/articles/plus500-costs">Plus500のコストを確認する →</Link></p>
</article>; }
