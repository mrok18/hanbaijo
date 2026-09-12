import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/jfx-swap-transfer-tax' },
  title: 'JFXのスワップ振替とは？決済せず出金する方法と税金の注意点',
  description: 'JFX MATRIX TRADERのスワップ振替を整理。ポジションを決済せず1円単位で確定・出金する流れ、未実現スワップとの違い、確定申告と年末の注意点を解説します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / SWAP TRANSFER</p>
    <h1>JFXのスワップ振替とは？<br />出金と税金を分けて確認</h1>
    <p className="lede">MATRIX TRADERでは、ポジションを決済せずに未実現スワップだけを確定できます。確定後は出金できますが、税務上の扱いも変わります。「受け取ったように見える日」と「取引日」がずれる場合もあるため、年末は特に注意が必要です。</p>

    <h2>スワップ振替で変わること</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較</th><th>振替前</th><th>振替後</th></tr></thead><tbody>
      <tr><td className="ex-name">ポジション</td><td>保有を継続</td><td>保有を継続</td></tr>
      <tr><td className="ex-name">スワップ</td><td>未実現</td><td>指定額が確定損益</td></tr>
      <tr><td className="ex-name">出金</td><td>未実現分はそのまま出金不可</td><td>預託証拠金へ反映後に手続可能</td></tr>
      <tr><td className="ex-name">税務</td><td>個人は原則として申告対象外</td><td>確定申告の対象</td></tr>
    </tbody></table></div></div>

    <h2>1円単位で一部だけ振替できる</h2>
    <p>JFXの公式FAQでは、未実現スワップの範囲内で振替額を指定でき、1円単位での振替が可能と案内されています。全額を一度に確定する必要はありません。</p>
    <div className="formula-box"><code>未実現スワップ10,000円 − 振替3,000円 ＝ 未実現7,000円</code><small>説明用の例。振替した3,000円は確定損益となり、残額は未実現のままです。</small></div>

    <h2>振替すると確定申告の対象になる</h2>
    <p>JFXは、個人の未決済ポジションに付与された未実現スワップは原則として確定申告の対象外と説明しています。一方、スワップ振替で確定した損益は申告対象です。税額はスワップだけで決まるのではなく、同一年のFX等の確定損益や繰越控除などと合わせて判断します。</p>
    <div className="callout"><strong>税務判断は個別状況で異なります</strong><p>ここではJFXのサービス上の扱いを整理しています。申告要否や損益通算の可否は、国税庁の最新情報、税務署、税理士へ確認してください。</p></div>

    <h2>休日中の振替は翌営業日付</h2>
    <p>土日や年末年始など取引時間外でも振替操作は可能で、預託証拠金にはすぐ反映され出金手続もできます。ただし、JFXは取引日を翌営業日付とすると案内しています。12月31日に操作しても翌年の取引日となる場合があり、その年の確定損益に含まれない可能性があります。</p>

    <h2>振替しても為替変動リスクは残る</h2>
    <p>スワップ振替はポジションを決済しないため、為替差損益は引き続き変動します。確定したスワップを出金すると口座内の余力が減り、相場が不利に動いたときのロスカット耐性も下がります。出金前に、有効証拠金と必要証拠金の差を確認します。</p>
    <div className="fx-metric-grid">
      <article><b>STEP 1</b><h3>未実現額を確認</h3><p>対象ポジションと振替可能額を確認</p></article>
      <article><b>STEP 2</b><h3>振替額を指定</h3><p>1円単位で必要額だけ確定</p></article>
      <article><b>STEP 3</b><h3>取引日を確認</h3><p>休日・年末は翌営業日に注意</p></article>
      <article><b>STEP 4</b><h3>余力を再確認</h3><p>出金後の証拠金余力を確認</p></article>
    </div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/tax/" target="_blank" rel="noopener noreferrer">JFX「確定申告について」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?id=626&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「スワップ振替」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/chuui_mt/" target="_blank" rel="noopener noreferrer">JFX「お取引における注意点」</a></li>
      <li><a href="https://www.jfx.co.jp/payment/" target="_blank" rel="noopener noreferrer">JFX「入出金」</a></li>
    </ul><p>サービス条件は2026年9月8日に公式ページで確認しました。税制やサービス仕様は変更されるため、振替・申告前に最新情報を確認してください。</p></section>

    <p><Link href="/fx/swap-calendar-comparison">FX各社のスワップ確認方法を比較する →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">JFXの手数料と実質コストを確認する →</Link></p>
    <p><Link href="/articles/jfx-losscut-margin-shortage">JFXのロスカットと不足金を確認する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
