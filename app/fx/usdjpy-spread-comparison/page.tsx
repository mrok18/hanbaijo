import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/fx/usdjpy-spread-comparison' },
  title: '米ドル円スプレッド10社比較｜1万通貨の公称コストと時間帯',
  description: '国内FX10サービスの米ドル/円について、公称スプレッド、適用時間、時間外水準、数量条件を公式情報から比較し、1万通貨の円額へ換算します。',
};

const PROVIDERS = [
  {
    name: 'FXTF', href: '/fx/fxtf', spread: '0.0銭', cost: '0円', hours: '9:00〜翌3:00', offHours: '上限3.8銭',
    condition: '同一銘柄・売買別の建玉＋新規発注が1万通貨までは手数料0円。超過時は新規注文に建玉連動手数料。決済分は無料',
    source: 'https://www.fxtrade.co.jp/zerospread/',
  },
  {
    name: 'みんなのFX', href: '/fx/minna-fx', spread: '0.15銭', cost: '15円', hours: '8:00〜翌5:00', offHours: '3.88銭',
    condition: '米ドル/円LIGHT（通常銘柄とは注文上限等が異なる）。通常銘柄は0.2銭／時間外3.9銭',
    source: 'https://min-fx.jp/lineup/fx/service/spread/',
  },
  {
    name: 'LIGHT FX', href: '/fx/lightfx', spread: '0.18銭', cost: '18円', hours: '8:00〜翌5:00', offHours: '3.88銭',
    condition: '米ドル/円LIGHT（通常銘柄とは注文上限等が異なる）。通常銘柄は0.2銭／時間外3.9銭',
    source: 'https://lightfx.jp/service/spread/',
  },
  {
    name: 'MATSUI FX', href: '/fx/matsui', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '0.2〜6.0銭',
    condition: '1万通貨時。1,000通貨以下の対象成行注文・成行決済は0.1銭。公式のpips表記を銭に換算（米ドル/円は同じ数値）',
    source: 'https://www.matsui.co.jp/fx/spread/?mnu=sd',
  },
  {
    name: 'GMOクリック証券 FXネオ', href: '/fx/gmo-click', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '3.8銭',
    condition: '通常銘柄の公称値。大口銘柄は原則固定の対象外',
    source: 'https://www.click-sec.com/corp/guide/fxneo/commission_list/',
  },
  {
    name: 'DMM FX', href: '/fx/dmm-fx', spread: '0.2銭', cost: '20円', hours: '9:00〜翌5:00', offHours: '0.2〜3.9銭',
    condition: '通常USD/JPYの公称値。ミニ・ラージ通貨ペアは原則固定の対象外',
    source: 'https://fx.dmm.com/fx/aboutfx/spread/',
  },
  {
    name: 'ヒロセ通商 LION FX', href: '/fx/lion-fx', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '5.9銭',
    condition: '通常銘柄の公称値。大口は原則固定の対象外。相場急変・流動性低下時などは例外',
    source: 'https://hirose-fx.co.jp/spread/index.html',
  },
  {
    name: 'JFX MATRIX TRADER', href: '/fx/jfx', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '5.9銭',
    condition: '通常銘柄の公称値。大口は原則固定の対象外。相場急変・流動性低下時などは例外',
    source: 'https://www.jfx.co.jp/trading_rule/spread/',
  },
  {
    name: '三菱UFJ eスマート証券 FX', href: '/fx/au-kabucom-fx', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '0.2〜8.0銭',
    condition: 'ミニ（1,000通貨単位・新規1注文10万通貨まで）を1万通貨に換算。通常銘柄は対象時間内でも0.2〜3.0銭',
    source: 'https://kabu.com/item/fx/sys/cost.html',
  },
  {
    name: 'サクソバンク証券', href: '/fx/saxo', spread: '0.2銭', cost: '20円', hours: '月〜金 8:00〜翌3:59', offHours: '60.0銭（豪州標準時間の公表値）',
    condition: '5万通貨以下。60.0銭は公式の日本時間4:00〜7:59・豪州標準時間の記載。夏時間の時間外条件は今回未取得',
    source: 'https://www.home.saxo/ja-jp/products/forex',
  },
] as const;

export default function Page() {
  return (
    <div className="comparison-page fx-spread-comparison-page">
      <header className="comparison-intro fx-spread-comparison-intro">
        <div>
          <p className="section-index">USD/JPY SPREAD / PUBLISHED DATA</p>
          <h1>米ドル/円の<br /><em>スプレッド比較。</em></h1>
          <p className="lede">10社の米ドル/円の公称スプレッドを、1万通貨の円額、適用時間、時間外水準、数量条件までそろえて比較しました。「原則固定」の数字だけで選ばないための一覧です。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-10-29</strong>
          <p>10社の公式ページを再確認した日です。公称値であり、実測値や約定の保証ではありません。未取得の条件は表に明記しています。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="fx-spread-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / CORE HOURS</p><h2 id="fx-spread-title">1万通貨のスプレッド相当額</h2></div>
          <span className="comparison-scope">公称スプレッド × 1万通貨</span>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table fx-spread-table">
            <thead><tr><th>サービス</th><th>公称スプレッド</th><th>1万通貨の円額（手数料別）</th><th>適用時間</th><th>時間外</th><th>数量・商品条件</th></tr></thead>
            <tbody>
              {PROVIDERS.map((provider) => (
                <tr key={provider.name}>
                  <td className="ex-name"><Link href={provider.href}>{provider.name}</Link></td>
                  <td className="result-value">{provider.spread}</td>
                  <td><strong>{provider.cost}</strong></td>
                  <td>{provider.hours}</td>
                  <td>{provider.offHours}</td>
                  <td><small>{provider.condition}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><p className="panel-note">米ドル/円は1銭＝0.01円、一般的な1pips＝1銭として換算しています。表の円額はスプレッドだけの負担で、別手数料やスワップは含みません。FXTFは同一銘柄・売買別の建玉と新規発注の合計が1万通貨を超えると、新規注文に別途手数料が発生します。時間は日本時間。原則固定には例外があり、時間外の数値も常時保証された上限ではありません。</p></div>
      </section>

      <section className="comparison-section split-explain" aria-labelledby="usdjpy-calculate-title">
        <div><p className="section-index">02 / CALCULATE YOUR COST</p><h2 id="usdjpy-calculate-title">0.2銭は、自分の取引で何円？</h2><p>米ドル/円の銭・pipsを、％に直さず入力できます。まず1往復のスプレッド相当額、次に取引回数による差を確かめます。</p></div>
        <div>
          <h3>1万通貨・0.2銭なら20円</h3>
          <p><Link href="/tools/fx-pip-value-calculator">pips計算機でスプレッドを円換算する</Link>には、数量「10000」、右側の通貨「JPY」、値幅「0」、スプレッド「0.2」を入力します。米ドル/円では0.2銭＝0.2pipsです。スプレッド相当額は20円、値動きゼロの差引額は−20円になります。</p>
          <div className="formula-box"><code>0.2銭 ÷ 100 × 10,000通貨 = 20円</code><small>同じ買値・売値で買ってすぐ売る1往復の仮定。20円を片道手数料として2倍にしません。</small></div>
          <h3>0.1銭の差が、年間ではいくらか</h3>
          <p><Link href="/tools/fx-spread-annual-cost-calculator">年間コスト計算機で2条件を比較する</Link>には、A「0.2銭」、B「0.3銭」、数量「10000」、1日「5往復」、月「20日」、期間「12カ月」を入力します。Aは24,000円、Bは36,000円、年間差は12,000円です。</p>
          <p>いずれも入力値が続くと仮定した例で、実測値や特定口座の将来コストではありません。スプレッド拡大、スリッページ、スワップ、FXTFの建玉連動手数料などは別に確認してください。実際の売買損益には価格差が反映されるため、この試算額をさらに差し引きません。</p>
        </div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">03 / READ THE ZERO</p><h2>「0.0銭」は、数量を増やしても0円とは限らない</h2></div>
        <div>
          <p>FXTFの米ドル/円は対象時間に0.0銭ですが、建玉連動手数料は同一銘柄・同一売買種別の保有建玉と新規発注の合計で段階的に変わります。</p>
          <div className="formula-box"><code>建玉＋新規発注が1万通貨以内：0円／1万通貨</code><small>合計1万通貨超〜25万通貨は、新規注文1万通貨あたり40円。2026-10-29公式表確認</small></div>
          <p>このランクは新規注文の数量に適用され、決済取引の手数料は発生しません。保有建玉がある場合は同じ銘柄・売買種別の合計でランクが変わるため、1万通貨の新規注文でも必ず無料とは限りません。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">04 / FOUR CHECKS</p><h2>公称値を実際の取引条件へ近づける</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>時間帯</h3><p>早朝は時間外水準へ広がる会社があります。指標発表前後は対象時間内でも例外です。</p></article>
          <article><b>02</b><h3>取引数量</h3><p>少額専用の縮小スプレッドや、大口注文で別水準になる条件を分けて確認します。</p></article>
          <article><b>03</b><h3>別手数料</h3><p>スプレッド0.0銭でも、建玉量に応じた手数料などがないか総額で確認します。</p></article>
          <article><b>04</b><h3>実際の約定</h3><p>公称値は広告条件です。スリッページや約定拒否を含む実測比較は許諾後に別表示します。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="fx-spread-sources">
        <div><p className="section-index">05 / SOURCES</p><h2 id="fx-spread-sources">各社の公式スプレッド</h2></div>
        <ul>{PROVIDERS.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer"><span>{provider.name}</span><b>10/29確認 ↗</b></a></li>)}</ul>
        <p>確認日：2026年10月29日。上記10リンクの公称値・時間・数量条件を確認しました。サクソバンクの夏時間の時間外条件は取得できず、標準時間の記載と区別しています。キャンペーン、広告表示期間、夏時間・冬時間などにより条件は変更されます。口座開設・取引前に各社公式サイトで最新情報を確認してください。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button primary" href="/tools/fx-pip-value-calculator">銭・pipsから円額を試算</Link>
        <Link className="button secondary" href="/fx">FXコスト比較へ戻る</Link>
      </div>
    </div>
  );
}
