import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/minna-fx-losscut' }, title: 'みんなのFXのロスカット｜証拠金維持率100％以下と不足金', description: 'みんなのFXの証拠金維持率、自動ロスカット、未約定注文の取消しと不足金リスクを公式情報で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">みんなのFX / RISK</p>
  <h1>みんなのFXのロスカット<br />証拠金維持率100％以下を理解</h1>
  <p className="lede">みんなのFXでは、FX口座の証拠金維持率が100％以下になると、保有ポジションの自動決済が行われます。判定の意味と、急変時に残るリスクを分けて確認します。</p>
  <h2>証拠金維持率の見方</h2>
  <div className="callout"><strong>証拠金維持率 ＝ 有効証拠金 ÷ 必要証拠金 × 100</strong><p>入出金口座やシストレ口座に資金があっても、FX口座の維持率が基準を下回ればFX口座でロスカットが行われます。口座をまたいで余力を合算しない点に注意します。</p></div>
  <div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>ロスカット時の扱い</th></tr></thead><tbody><tr><td>保有ポジション</td><td>システムが成行注文を発注</td></tr><tr><td>未約定の新規注文</td><td>自動的に取消</td></tr><tr><td>約定価格</td><td>配信レートで処理され、基準価格を保証しない</td></tr></tbody></table></div>
  <h2>100％は安全ラインではない</h2><p>証拠金維持率100％以下はロスカットの判定基準であり、その価格で約定することや損失額を保証するものではありません。相場急変、レート配信停止、スプレッド拡大で想定より不利に決済される場合があります。</p>
  <div className="fx-metric-grid"><article><b>RATIO</b><h3>100％以下</h3><p>自動ロスカットの基準</p></article><article><b>ORDERS</b><h3>新規注文取消</h3><p>未約定注文も確認</p></article><article><b>PRICE</b><h3>成行処理</h3><p>基準価格を保証しない</p></article><article><b>BUFFER</b><h3>余力を残す</h3><p>基準ぎりぎりを避ける</p></article></div>
  <h2>保有中に確認する4項目</h2><ol><li>FX口座の有効証拠金</li><li>必要証拠金と建玉数量</li><li>証拠金維持率の推移</li><li>急変時に不足金が残る可能性</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://min-fx.jp/lineup/fx/service/losscut/" target="_blank" rel="noopener noreferrer">みんなのFX「ロスカットについて」</a></li><li><a href="https://help.min-fx.jp/%E3%80%8C%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AEFX%E3%80%8D%E3%81%AE%E8%A8%BC%E6%8B%A0%E9%87%91%E7%B6%AD%E6%8C%81%E7%8E%87%E3%81%A8%E3%81%AF%E3%81%AA%E3%82%93%E3%81%A7%E3%81%99%E3%81%8B%EF%BC%9F-656d566b92850c0022e9e9b0">みんなのFX FAQ「証拠金維持率」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/minna-fx-trading-unit">0.1Lotと必要証拠金を確認する →</Link></p><p><Link href="/fx/losscut-comparison">ロスカット基準を比較する →</Link></p>
</article>; }
