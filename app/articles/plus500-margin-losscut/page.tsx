import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Plus500証券のロスカット｜維持証拠金を下回った場合の自動決済', description: 'Plus500証券CFDの有効証拠金、維持証拠金、自動ロスカット、元本超過損のリスクを公式情報で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">PLUS500 / RISK</p><h1>Plus500証券のロスカット<br />維持証拠金を下回る前に確認</h1>
  <p className="lede">Plus500証券では、有効証拠金額が維持証拠金額以下となった瞬間、未決済ポジションの一部または全部が自動決済されます。判定の意味と急変時の注意を整理します。</p>
  <h2>ロスカットの判定</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>意味</th><th>処理</th></tr></thead><tbody><tr><td>有効証拠金</td><td>口座資金と評価損益を反映した金額</td><td>相場変動で増減</td></tr><tr><td>維持証拠金</td><td>ポジション維持に必要な金額</td><td>銘柄・数量で変動</td></tr><tr><td>自動ロスカット</td><td>有効証拠金が維持証拠金以下</td><td>成行で一部または全部を決済</td></tr></tbody></table></div>
  <h2>元本超過損の可能性</h2><p>急な相場変動やスプレッド拡大時は、ロスカットが発動しても預けた証拠金を超える損失が発生する可能性があります。ロスカットは損失額を固定する機能ではありません。</p>
  <div className="callout"><strong>アラートを設定して余力を確認</strong><p>プラットフォームのアラート機能を使い、維持証拠金に近づく前に数量を減らす・入金するなどの対応を検討します。</p><Link href="/tools/cfd-margin-calculator">CFD証拠金を計算する →</Link></div>
  <h2>保有中のチェック</h2><ul><li>有効証拠金と維持証拠金</li><li>急変時のスプレッド</li><li>予約注文と決済注文</li><li>入金額を超える損失リスク</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://jp.plus500.com/cfd" target="_blank" rel="noopener noreferrer">Plus500証券「CFD取引サービス」</a></li><li><a href="https://jp.plus500.com/trading-academy/traders-guide/what-are-margins~6" target="_blank" rel="noopener noreferrer">Plus500証券「証拠金とは」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/plus500-products-overview">取扱商品を確認する →</Link></p><p><Link href="/articles/plus500-costs">コストを確認する →</Link></p>
</article>; }
