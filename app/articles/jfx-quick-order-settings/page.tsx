import Link from 'next/link';

export const metadata = {
  title: 'JFXクイック注文の設定｜全決済・両建て・決済pip差の注意点',
  description: 'JFX MATRIX TRADERのクイック注文で確認したいLot数、許容スリップ、許容スプレッド、両建て、全決済方式、決済pip差を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / QUICK ORDER</p>
    <h1>JFXクイック注文の設定<br />全決済・両建て・決済pip差の注意点</h1>
    <p className="lede">クイック注文は発注の手数を減らせる一方、Lot数や両建て、全決済方式の設定違いがそのまま注文結果に反映されます。スピードを上げる前に、誤発注と想定外のスリッページを防ぐ確認項目を整理します。</p>

    <h2>発注前に見る6項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>確認する理由</th></tr></thead><tbody>
      <tr><td className="ex-name">通貨ペア</td><td>別の注文画面・テンプレートを開いていないか</td></tr>
      <tr><td className="ex-name">Lot数</td><td>JFXは基本1Lot＝1,000通貨だが、1万通貨の例外銘柄がある</td></tr>
      <tr><td className="ex-name">両建て</td><td>「なし」では反対売買が既存ポジションの決済になる</td></tr>
      <tr><td className="ex-name">許容スプレッド</td><td>提示幅が設定値を超えた際の発注を止める</td></tr>
      <tr><td className="ex-name">許容スリップ</td><td>発注後の不利な価格差を制限する</td></tr>
      <tr><td className="ex-name">決済pip差</td><td>新規注文と同時に出す利確・損切り幅を確認する</td></tr>
    </tbody></table></div></div>

    <h2>確認画面を消すとクリック時点で発注</h2>
    <p>JFXは全決済注文の確認画面を非表示にできると案内しています。非表示にすると操作は速くなりますが、ボタンをクリックした時点で発注されます。最初は確認画面を残し、通貨ペア・数量・売買方向が安定して確認できるようになってから設定を検討します。</p>
    <div className="callout"><strong>設定変更後は小さい数量で動作確認</strong><p>テンプレート、端末、注文画面によって設定の保存・反映範囲が異なる場合があります。実取引で確認する場合も、許容できる最小数量から始めます。</p></div>

    <h2>全決済は許容スリップが効かない場合がある</h2>
    <p>JFXのFAQでは、クイック注文画面からの売全決済・買全決済・通貨別全決済は初期設定で成行注文となり、許容スリップが適用されないと説明されています。パソコン版では売全決済・買全決済をストリーミング方式へ変更できますが、売買を合わせた通貨別全決済には適用されません。</p>
    <p>「クイック注文画面に許容スリップを設定したから、すべての決済に有効」とは限りません。全決済を使う前に、対象ポジションと注文方式を分けて確認します。</p>

    <h2>両建てなしの反対売買は決済になる</h2>
    <p>両建て設定が「なし」の状態で反対方向へ発注すると、新しい反対ポジションではなく、既存ポジションの決済として扱われます。両建てを意図する場合は設定表示を確認します。ただし両建ては、売りと買いの双方でスプレッドが発生し、スワップの受取と支払の差もコストになります。</p>

    <h2>決済pip差は価格ではなく値幅を入力</h2>
    <p>決済pip差注文は、成行・ストリーミング・クイック注文と同時に、指値・逆指値・トレールの決済注文をpip差で出す機能です。直接の価格を指定したい場合は、JFXが案内するIF-DONEまたはIF-OCOを使います。</p>
    <div className="formula-box"><code>対円通貨ペア：10pips ＝ 0.010円 ＝ 1銭</code><small>JFXでは対円通貨ペアの1pipを0.001円と定義しています。一般的な解説サイトと単位が異なるため、値幅の桁を取り違えないようにします。</small></div>

    <h2>短期売買用の確認順</h2>
    <ol>
      <li>通貨ペアと1Lotの通貨数を確認</li>
      <li>Lot数、両建て、決済順序を確認</li>
      <li>許容スプレッドと許容スリップを別々に設定</li>
      <li>決済pip差の利確・損切り幅を確認</li>
      <li>全決済の注文方式と確認画面の有無を確認</li>
      <li>約定履歴で発注価格と約定価格の差を記録</li>
    </ol>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=29&amp;id=609&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「便利機能 クイック注文」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=38&amp;id=264&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「全決済と許容スリップ」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=38&amp;id=247&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「新規注文と決済注文の同時発注」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/ryoudate/" target="_blank" rel="noopener noreferrer">JFX「両建について」</a></li>
    </ul><p>注文機能は2026年9月8日に公式資料で確認しました。利用端末やツールの版によって操作方法が異なるため、最新の取引画面・マニュアルもご確認ください。</p></section>

    <p><Link href="/articles/jfx-order-slippage-rules">JFXの注文方法とスリッページを見る →</Link></p>
    <p><Link href="/articles/jfx-mt5-tradingview-matrix-trader">MT5・TradingViewと発注画面の違いを見る →</Link></p>
    <p><Link href="/tools/jfx-scalping-cost-calculator">JFXのスキャルピングコストを計算する →</Link></p>
    <p><Link href="/articles/jfx-lot-trade-unit">JFXの1Lotと通貨数を確認する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
