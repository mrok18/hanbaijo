import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'LION FXのロスカットと不足金｜有効比率100％未満の考え方',
  description: 'ヒロセ通商LION FXの有効比率、必要証拠金、ロスカットと不足金の関係を公式ルールで整理し、入金後に残す余力を解説します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">LION FX / RISK</p>
    <h1>LION FXのロスカットと不足金<br />有効比率を計算する</h1>
    <p className="lede">LION FXでは、ポジションを維持するための必要証拠金と、含み損益を含む有効証拠金の比率で余力を確認します。ロスカット基準と、急変時に不足金が残る可能性を分けて考えます。</p>

    <h2>有効比率の計算</h2>
    <div className="callout"><strong>有効比率 ＝ 有効証拠金 ÷ 必要証拠金 × 100</strong><p>有効証拠金は預託金に評価損益などを反映した金額です。必要証拠金は保有ポジションの数量とレート、通貨ペアの条件で変わります。</p></div>
    <div className="table-scroll"><table className="rates"><thead><tr><th>確認する数字</th><th>意味</th><th>見直すタイミング</th></tr></thead><tbody>
      <tr><td>預託金</td><td>口座に入れている資金</td><td>入出金後</td></tr>
      <tr><td>評価損益</td><td>現在レートでの含み損益</td><td>相場変動時</td></tr>
      <tr><td>必要証拠金</td><td>建玉を維持する最低限の資金</td><td>数量・レート変更時</td></tr>
      <tr><td>有効比率</td><td>ロスカットまでの余力を示す比率</td><td>発注前・保有中</td></tr>
    </tbody></table></div>

    <h2>有効比率100％未満のロスカット</h2>
    <p>公式のリスク説明では、有効比率が100％未満となった時点をロスカットの基準として示しています。急な値動きやスプレッド拡大時は、表示上の比率と約定時の比率がずれることがあります。基準ぎりぎりまで資金を使い切らず、余裕を残します。</p>
    <div className="fx-metric-grid"><article><b>RATIO</b><h3>有効比率を確認</h3><p>有効証拠金÷必要証拠金</p></article><article><b>UNIT</b><h3>1Lot＝1,000通貨</h3><p>数量を小さくして余力を調整</p></article><article><b>VOLATILITY</b><h3>急変に注意</h3><p>スプレッド拡大で比率が変動</p></article><article><b>DEFICIT</b><h3>不足金の可能性</h3><p>入金額を超える損失に備える</p></article></div>

    <h2>不足金はロスカット後にも起こる</h2>
    <p>急変時に決済レートが飛ぶと、ロスカットが発動しても預託金を超える損失が発生し、不足金の支払いが必要になる場合があります。ロスカットは損失を一定額に固定する機能ではありません。重要指標や週末をまたぐ建玉では、ポジション数量を抑え、口座残高に余裕を持たせます。</p>

    <h2>発注前のリスク確認</h2>
    <ul><li>必要証拠金を取引画面で確認したか</li><li>含み損が拡大しても有効比率を維持できるか</li><li>急変時のスプレッド拡大を想定したか</li><li>入金額を超える損失リスクを理解したか</li></ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://hirose-fx.co.jp/category/hirose/lionfx/lfx/losscut.html" target="_blank" rel="noopener noreferrer">ヒロセ通商「ロスカット（LION FX）」</a></li>
      <li><a href="https://hirose-fx.co.jp/pdf/news/20220321/taihi_risk.pdf" target="_blank" rel="noopener noreferrer">ヒロセ通商「リスク説明書（LION FX）」</a></li>
    </ul><p>確認日：2026年9月10日。ロスカット条件・必要証拠金は最新の取引要綱で確認してください。</p></section>
    <p><Link href="/articles/lion-fx-trading-hours-lot">取引時間と1,000通貨を確認する →</Link></p>
    <p><Link href="/articles/lion-fx-deposit-withdrawal">入出金条件を確認する →</Link></p>
    <p><Link href="/fx/losscut-comparison">ロスカット基準を比較する →</Link></p>
  </article>;
}
