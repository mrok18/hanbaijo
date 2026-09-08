import Link from 'next/link';

export const metadata = {
  title: 'JFXの注文方法とスリッページ｜成行・ストリーミング・逆指値の違い',
  description: 'JFX MATRIX TRADERの成行・ストリーミング・指値・逆指値を、約定優先、許容スリップ、注文不成立、スプレッド制限の違いから整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / ORDER EXECUTION</p>
    <h1>JFXの注文方法とスリッページ<br />成行・ストリーミング・逆指値の違い</h1>
    <p className="lede">JFXは27種類の注文方法を案内していますが、短期売買で先に理解したいのは「約定を優先するか」「価格のずれを制限するか」です。成行、ストリーミング、指値、逆指値の約定条件と、許容スプレッド・許容スリップの役割を分けて確認します。</p>

    <h2>4つの基本注文を先に比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>注文</th><th>価格の指定</th><th>主な特徴</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">成行</td><td>指定しない</td><td>約定を優先</td><td>有利・不利の両方向へスリッページする可能性。流動性や数量によっては約定しない場合もある</td></tr>
      <tr><td className="ex-name">ストリーミング</td><td>表示レートで発注</td><td>許容スリップを設定できる</td><td>許容幅を超えて不利に動けば不成立。有利な方向はそのレートで約定</td></tr>
      <tr><td className="ex-name">指値</td><td>有利な価格を指定</td><td>通常は指定価格で約定</td><td>価格に到達しなければ約定しない。月曜始値などは有利にずれる場合がある</td></tr>
      <tr><td className="ex-name">逆指値</td><td>損切り等の価格を指定</td><td>指定レート到達後に成行注文を発注</td><td>指定価格での約定は保証されず、急変時は不利にずれる可能性</td></tr>
    </tbody></table></div></div>

    <h2>成行は価格より約定を優先する</h2>
    <p>JFXの取引説明書では、成行注文はレートや時間にかかわらず約定を優先させたい場合に使う注文です。発注時の表示価格と執行時の現在レートに差があれば、有利にも不利にもスリッページする可能性があります。</p>
    <p>「成行なら必ず約定する」とも限りません。公式書面には、流動性が低い場合や注文数量によっては約定しない場合があると記載されています。経済指標時、早朝、大きな数量では画面上のスプレッドだけでコストを判断しないことが大切です。</p>

    <h2>ストリーミングは不利なずれを制限する</h2>
    <p>ストリーミング注文は、画面に表示されたレートを指定して発注し、許容スリップを設定できます。JFXのFAQでは、注文執行時に許容幅を超えて不利な方向へ動いた場合は不成立になり、有利な方向なら実際のレートで約定すると説明されています。</p>
    <div className="formula-box"><code>JFXの対円通貨ペア：1pip ＝ 0.001円</code><small>USD/JPYで許容スリップを10pipsに設定すると1銭相当です。一般的な「1pip＝0.01円」と定義が異なるため、入力単位を必ず確認します。</small></div>
    <div className="callout"><strong>狭くすれば常に有利とは限りません</strong><p>許容スリップを狭くすると不利な価格での成立を抑えられる一方、値動きの速い場面では注文不成立が増えます。価格の確実性と成立しやすさのどちらを優先するかで設定が変わります。</p></div>

    <h2>許容スプレッドと許容スリップは別物</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>設定</th><th>確認するもの</th><th>防ぎたい状況</th><th>JFXでの対象</th></tr></thead><tbody>
      <tr><td className="ex-name">許容スプレッド</td><td>発注時の売値と買値の幅</td><td>スプレッドが広がった状態での発注</td><td>ストリーミング・クイック注文</td></tr>
      <tr><td className="ex-name">許容スリップ</td><td>発注価格と執行時価格のずれ</td><td>発注後の不利な価格変動</td><td>ストリーミング・クイック注文</td></tr>
    </tbody></table></div></div>
    <p>許容スプレッドは「クリックした瞬間の提示幅」、許容スリップは「クリック後、執行されるまでの価格差」を制御します。片方だけ設定しても、もう片方のリスクを自動的に抑えるものではありません。また、全決済など別の成行系注文には許容スリップが適用されない場合があります。</p>

    <h2>逆指値は損失額を保証しない</h2>
    <p>逆指値は指定価格に達すると成行注文を発注する仕組みです。損切りラインを決めるうえで重要ですが、相場が飛んだ場合や流動性が低い場合には、指定価格より不利な価格で約定する可能性があります。週明け、重要指標、突発ニュースでは、想定損失にスリッページ分の余裕も持たせます。</p>

    <h2>短期売買で残したい4つの記録</h2>
    <ol>
      <li>発注時の売値・買値とスプレッド</li>
      <li>発注価格と実際の約定価格</li>
      <li>約定・不成立の別と注文方法</li>
      <li>通貨ペア、数量、時刻、重要指標の有無</li>
    </ol>
    <p>公称スプレッドだけでなく、実際のスリッページと不成立率まで記録すると、自分の取引時間・数量に合う注文設定を比較できます。当サイトの計算機では、スプレッド相当額と往復回数を円換算できます。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/index.html" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/pdf/document.pdf" target="_blank" rel="noopener noreferrer">JFX「店頭外国為替証拠金取引説明書」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=37&amp;id=227&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「成行注文とストリーミング注文の違い」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=29&amp;id=614&amp;site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX FAQ「便利機能 許容スプレッド」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/chuui_mt/" target="_blank" rel="noopener noreferrer">JFX「MATRIX TRADER お取引における注意点」</a></li>
    </ul><p>注文仕様は2026年9月8日に公式資料で確認しました。取引ツールや条件は変更される場合があるため、発注前に最新の取引画面・説明書をご確認ください。</p></section>

    <p><Link href="/tools/jfx-scalping-cost-calculator">JFXのスキャルピングコストを計算する →</Link></p>
    <p><Link href="/articles/jfx-quick-order-settings">クイック注文の全決済・両建て設定を確認する →</Link></p>
    <p><Link href="/articles/jfx-scalping-spread-cost">JFXの時間帯別スプレッドを確認する →</Link></p>
    <p><Link href="/articles/jfx-fees-total-cost">JFXの無料手数料と実質コストを見る →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件一覧へ →</Link></p>
  </article>;
}
