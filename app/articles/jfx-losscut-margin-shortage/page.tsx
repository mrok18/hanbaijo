import Link from 'next/link';

export const metadata = {
  title: 'JFXのロスカット基準は？有効証拠金・必要証拠金と不足金を整理',
  description: 'JFX MATRIX TRADERのロスカット条件、判定間隔、決済順序、レート停止時の扱い、口座残高を超える損失と不足金の期限を公式書面から整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / MARGIN CONTROL</p>
    <h1>JFXのロスカット基準は？<br />不足金まで分けて確認</h1>
    <p className="lede">MATRIX TRADERでは、有効証拠金が必要証拠金を下回るとロスカットの対象になります。ただし、基準は損失上限でも決済価格の保証でもありません。判定から決済、不足金が残る場合までを順に整理します。</p>

    <h2>基準は「有効証拠金＜必要証拠金」</h2>
    <div className="formula-box"><code>有効証拠金が必要証拠金を下回る → ロスカット判定</code><small>有効証拠金は預託金へ評価損益などを反映した額。必要証拠金は保有ポジションに必要な額です。</small></div>
    <p>JFXの契約締結前交付書面では、基準を下回っているかの計算を数秒（1〜10秒程度）ごとに行うとしています。基準到達と同時刻・同価格での決済を保証する仕組みではありません。</p>

    <h2>ロスカットの流れ</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>公式ルールの要点</th><th>確認するリスク</th></tr></thead><tbody>
      <tr><td className="ex-name">判定</td><td>数秒（1〜10秒程度）ごと</td><td>瞬間的な急落では判定までに損失が拡大し得る</td></tr>
      <tr><td className="ex-name">対象</td><td>原則として全ポジション</td><td>一部だけ残す前提にしない</td></tr>
      <tr><td className="ex-name">決済順序</td><td>原則、約定日時の古い順（FIFO）</td><td>市場状況により順序が前後する場合がある</td></tr>
      <tr><td className="ex-name">レート停止</td><td>配信再開時の市場レートで成行決済</td><td>停止中の値幅がまとめて損失へ反映され得る</td></tr>
    </tbody></table></div></div>

    <h2>ロスカットされても不足金は残り得る</h2>
    <p>相場急変、流動性低下、レート配信停止などでは、必要証拠金を下回った時点より不利な価格で決済される可能性があります。JFXの書面は、預けた資金以上の損失が生じる可能性を明記しています。</p>
    <div className="callout"><strong>不足金の期限</strong><p>ロスカット後に不足金が発生した場合、公式書面では不足金発生日の2営業日後15時までに指定口座へ差し入れる必要があるとされています。実際に発生した場合は、取引画面とJFXからの案内を優先してください。</p></div>

    <h2>必要証拠金ぴったりで建てない</h2>
    <p>建てられる最大数量と、許容できる損失に収まる数量は異なります。取引前に、口座資金から1回の許容損失額を決め、損切り幅と1pipsの損益から数量を逆算します。</p>
    <ol>
      <li>通貨ペアごとの1Lotの通貨数を確認する</li>
      <li>予定損切り幅へスプレッドと想定スリッページを加える</li>
      <li>損失額が許容範囲に収まる数量へ切り下げる</li>
      <li>必要証拠金を引いても十分な余力が残るか確認する</li>
    </ol>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/pdf/document.pdf" target="_blank" rel="noopener noreferrer">JFX「契約締結前交付書面（MATRIX TRADER 個人のお客様）」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
    </ul><p>ロスカット条件と不足金の扱いは2026年9月8日に公式資料で再確認しました。取引前には最新版の書面を確認してください。</p></section>

    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>
    <p><Link href="/tools/jfx-scalping-cost-calculator">JFXの短期売買コストを計算する →</Link></p>
    <p><Link href="/articles/jfx-hedging-margin-cost">JFXの両建て証拠金とロスカットを確認する →</Link></p>
    <p><Link href="/fx/losscut-comparison">FX各社のロスカット基準を比較する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
