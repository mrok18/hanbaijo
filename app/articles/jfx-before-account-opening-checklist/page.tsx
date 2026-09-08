import Link from 'next/link';

export const metadata = {
  title: 'JFX口座開設前の確認7項目｜スキャルピング・Lot・必要資金',
  description: 'JFX MATRIX TRADERの口座開設前に、スキャルピング、取引単位、スプレッド、ツール、必要証拠金、入出金、本人確認を確認します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">JFX / BEFORE OPENING</p>
    <h1>JFX口座開設前の確認7項目<br />取引スタイルから逆算する</h1>
    <p className="lede">JFX MATRIX TRADERはスキャルピング利用を明示していますが、短期売買なら無条件に向くという意味ではありません。取引数量、時間帯別コスト、発注ツール、必要資金まで確認し、自分の使い方と一致するか判断します。</p>

    <h2>最初に見る7項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>JFXの主な条件</th><th>確認する理由</th></tr></thead><tbody>
      <tr><td className="ex-name">取引スタイル</td><td>スキャルピングを公認</td><td>禁止行為とは分けて確認</td></tr>
      <tr><td className="ex-name">取引単位</td><td>基本1Lot＝1,000通貨</td><td>一部は1万通貨</td></tr>
      <tr><td className="ex-name">売買コスト</td><td>取引手数料0円</td><td>スプレッド・約定差は残る</td></tr>
      <tr><td className="ex-name">取引ツール</td><td>MATRIX TRADERで発注</td><td>MT5・TradingViewは分析用</td></tr>
      <tr><td className="ex-name">必要資金</td><td>個人は最大25倍以内</td><td>実効倍率は口座全体で変動</td></tr>
      <tr><td className="ex-name">入出金</td><td>初回・クイック入金1万円以上</td><td>入金最低額と運用資金は別</td></tr>
      <tr><td className="ex-name">申込方法</td><td>eKYCなら最短当日</td><td>書類・審査で遅れる場合あり</td></tr>
    </tbody></table></div></div>

    <h2>1. スキャルピング公認の範囲</h2>
    <p>JFXは公式ページでスキャルピングを公認し、1日の取引上限と取引回数に制限を設けないと案内しています。ただし、約款で禁止されるシステム売買などが確認された場合まで無制限に認めるものではありません。</p>
    <div className="callout"><strong>「公認」と「利益が出やすい」は別です</strong><p>取引回数が増えるほどスプレッドとスリッページの累計も増えます。公称スプレッドだけでなく、自分の時間帯・数量・約定履歴で実質コストを確認します。</p></div>
    <p><Link href="/articles/jfx-scalping-spread-cost">JFXの時間帯別スプレッドを取引回数まで計算する →</Link></p>

    <h2>2. 1Lotの通貨数を確認</h2>
    <p>MATRIX TRADERは基本1Lot＝1,000通貨ですが、MXN/JPY、NOK/JPY、SEK/JPY、CNH/JPY、CZK/JPY、THB/JPYは1Lot＝1万通貨です。Lot数だけを見て同じリスクと考えず、必ず実際の通貨数へ直します。</p>
    <p>100通貨単位を使いたい場合はビギナーFXという別のミニ口座があります。通貨ペアや分析環境、キャンペーン対象なども本口座と同一ではないため、少額だけを理由に選ばないようにします。</p>
    <p><Link href="/articles/jfx-beginner-vs-matrix-trader">ビギナーFXとMATRIX TRADERを比較する →</Link></p>

    <h2>3. 手数料0円の外側にあるコスト</h2>
    <p>JFXのインターネット取引手数料は0円ですが、売値と買値の差であるスプレッドは取引コストです。適用時間外、早朝、経済指標発表、流動性低下、相場急変時には広がる場合があります。</p>
    <p>成行や逆指値では、注文価格と約定価格がずれるスリッページもあります。短期売買では「表示スプレッド × 回数」に加え、約定差を自分の履歴から集計することが重要です。</p>

    <h2>4. 分析画面と発注画面を分ける</h2>
    <p>JFXのMT5とTradingViewはチャート分析に利用しますが、そこからMATRIX TRADER口座へ直接発注する仕組みではありません。注文、口座情報、入出金はMATRIX TRADER側で行います。</p>
    <p>画面を複数使う場合は、分析後にMATRIX TRADERで通貨ペア、売買方向、Lot数、提示スプレッドを再確認します。レート配信元の違いによりチャートと発注画面の価格が一致しない場合もあります。</p>
    <p><Link href="/articles/jfx-mt5-tradingview-matrix-trader">MT5・TradingView・MATRIX TRADERの役割を見る →</Link></p>

    <h2>5. 最大25倍と実効レバレッジを分ける</h2>
    <p>JFXの個人口座は最大25倍以内ですが、倍率コースを選ぶ設定はありません。全未決済ポジションの想定元本を有効証拠金で割った実効レバレッジが、入金額・数量・評価損益に応じて変わります。</p>
    <div className="formula-box"><code>実効レバレッジ ＝ 全建玉の想定元本 ÷ 有効証拠金</code><small>必要証拠金ぎりぎりではなく、損切りまでの評価損と相場急変への余裕を残します。</small></div>
    <p><Link href="/articles/jfx-required-margin-leverage">JFXの必要証拠金と実効レバレッジを見る →</Link></p>

    <h2>6. 初回入金1万円は推奨運用額ではない</h2>
    <p>JFXの初回入金とクイック入金は1万円以上です。これは入金手続きの条件であり、取引に十分な余裕資金を示すものではありません。必要証拠金、想定損失、スプレッド、ロスカットまでの余裕を別に計算します。</p>
    <p>クイック入金は約380行・原則即時・原則無料、銀行振込は1万円未満にも使えますが振込手数料は利用者負担です。出金はリアルタイム出金と通常出金で時間・金額・取消条件が異なります。</p>
    <p><Link href="/articles/jfx-deposit-methods-comparison">クイック入金と銀行振込を比較する →</Link></p>

    <h2>7. 申込条件と本人確認</h2>
    <p>JFXの個人口座は18歳以上75歳未満が対象です。スマホ本人確認では、対象の顔写真付き本人確認書類1点とマイナンバー確認書類1点を用意します。審査完了後にメールでID・パスワードを受け取る方式は最短当日と案内されていますが、書類不備や審査状況によって長くなる場合があります。</p>
    <p>スマホ本人確認を使わない方法では、本人確認書類の必要点数やID・パスワードの受取方法が変わります。申込住所は書類の住所・部屋番号まで一致させます。</p>
    <p><Link href="/articles/jfx-account-opening-flow">必要書類と口座開設の流れを見る →</Link></p>

    <h2>向き不向きではなく条件一致で判断する</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>重視すること</th><th>確認後の判断</th></tr></thead><tbody>
      <tr><td className="ex-name">短期売買を規約内で行いたい</td><td>スキャルピング方針と注文機能を確認</td></tr>
      <tr><td className="ex-name">100通貨で練習したい</td><td>ビギナーFXとの違いを確認</td></tr>
      <tr><td className="ex-name">MT5から直接発注したい</td><td>用途が一致しないため再検討</td></tr>
      <tr><td className="ex-name">レバレッジコースを固定したい</td><td>資金と数量で調整できるか確認</td></tr>
      <tr><td className="ex-name">早朝中心に取引する</td><td>時間帯別スプレッドを確認</td></tr>
    </tbody></table></div></div>

    <div className="callout"><strong>キャンペーンは申込前に適用条件を保存</strong><p>キャッシュバック額だけでなく、対象口座、申込期限、入金・取引数量、判定期間を公式ページで確認します。条件は変更されるため、当サイトでは固定額を口座選びの評価へ加えません。</p></div>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/startup/" target="_blank" rel="noopener noreferrer">JFX「個人のお客様・口座開設」</a></li>
      <li><a href="https://www.jfx.co.jp/landing/scalping/" target="_blank" rel="noopener noreferrer">JFX「スキャルピングならJFX」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/reva/" target="_blank" rel="noopener noreferrer">JFX「レバレッジと必要証拠金」</a></li>
      <li><a href="https://www.jfx.co.jp/payment/" target="_blank" rel="noopener noreferrer">JFX「入出金」</a></li>
    </ul><p>口座開設・取引条件は2026年9月8日に公式ページで確認しました。申込条件、取引仕様、キャンペーンは変更される場合があります。</p></section>

    <p><Link href="/articles/jfx-demo-account-guide">デモ口座で確認できる範囲を見る →</Link></p>
    <p><Link href="/tools/jfx-scalping-cost-calculator">時間帯・数量・回数からスプレッド負担を計算する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件と全ガイドを見る →</Link></p>
  </article>;
}
