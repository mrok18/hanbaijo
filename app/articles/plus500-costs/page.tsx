import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/plus500-costs' }, title: 'Plus500証券の手数料・スプレッド｜無料表示と実質コスト', description: 'Plus500証券のCFDで発生するスプレッド、オーバーナイト費用、為替換算などを分けて総コストを確認します。' };

export default function Page() { return <article>
  <p className="page-kicker">PLUS500 / COST</p><h1>Plus500証券のコスト<br />無料表示の先まで確認</h1>
  <p className="lede">一部サービスの手数料が無料でも、ポジションを保有・決済する際のスプレッドやその他費用は残ります。費用の発生タイミングを分けて計算します。</p>
  <h2>コストの分類</h2><div className="table-scroll"><table className="rates"><thead><tr><th>費用</th><th>発生タイミング</th><th>確認方法</th></tr></thead><tbody><tr><td>スプレッド</td><td>保有・決済時</td><td>売値と買値の差×数量</td></tr><tr><td>オーバーナイト</td><td>ポジションを持ち越す時</td><td>銘柄の資金調達費用</td></tr><tr><td>為替換算</td><td>外貨建て損益の円換算</td><td>換算レート・手数料</td></tr><tr><td>ノックアウト費用</td><td>オプション購入時</td><td>オプション料・デポジット</td></tr></tbody></table></div>
  <h2>保有日数を入れて試算する</h2><p>短期取引ではスプレッド、長期保有ではオーバーナイト費用や価格調整の影響が大きくなります。取引予定日数と数量を決め、手数料以外のコストも合計します。</p>
  <div className="callout"><strong>広告の「無料」と総コストは別</strong><p>無料対象はサービスや取引方法により異なります。注文前に公式の料金表と各銘柄の取引条件を確認してください。</p><Link href="/tools/commodity-cfd-provider-cost-comparison">CFDプロバイダー総コスト比較を使う →</Link></div>
  <h2>注文前チェック</h2><ol><li>スプレッドと取引単位</li><li>オーバーナイト費用</li><li>為替換算の有無</li><li>ノックアウトのオプション料</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://jp.plus500.com/fees-charges" target="_blank" rel="noopener noreferrer">Plus500証券「手数料」</a></li><li><a href="https://jp.plus500.com/terms-and-agreements" target="_blank" rel="noopener noreferrer">Plus500「規約・リスク」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/plus500-products-overview">取扱商品を確認する →</Link></p><p><Link href="/articles/plus500-margin-losscut">ロスカットを確認する →</Link></p>
</article>; }
