import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/fx/usdjpy-spread-comparison' },
  title: '米ドル円スプレッド10社比較｜1万通貨の公称コストと時間帯',
  description: '国内FX10サービスの米ドル/円について、公称スプレッド、適用時間、時間外水準、数量条件を公式情報から比較し、1万通貨の円額へ換算します。',
};

const PROVIDERS = [
  {
    name: 'FXTF', href: '/fx/fxtf', spread: '0.0銭', cost: '0円', hours: '9:00〜翌3:00', offHours: '3.8銭',
    condition: '売買別の建玉＋発注が1万通貨までは手数料0円。1万通貨超は建玉連動手数料あり',
    source: 'https://www.fxtrade.co.jp/zerospread/',
  },
  {
    name: 'みんなのFX', href: '/fx/minna-fx', spread: '0.15銭', cost: '15円', hours: '8:00〜翌5:00', offHours: '3.88銭',
    condition: '米ドル/円LIGHTの公称値。通常銘柄は0.2銭／時間外3.9銭',
    source: 'https://min-fx.jp/lineup/fx/service/spread/',
  },
  {
    name: 'LIGHT FX', href: '/fx/lightfx', spread: '0.18銭', cost: '18円', hours: '8:00〜翌5:00', offHours: '3.88銭',
    condition: '米ドル/円LIGHTの公称値。通常銘柄は0.2銭／時間外3.9銭',
    source: 'https://lightfx.jp/service/spread/',
  },
  {
    name: 'MATSUI FX', href: '/fx/matsui', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '0.2〜6.0銭',
    condition: '1万通貨時。1,000通貨以下の対象成行注文は0.1銭',
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
    condition: '通常時の公称値。相場急変・流動性低下時などは例外',
    source: 'https://hirose-fx.co.jp/spread/index.html',
  },
  {
    name: 'JFX MATRIX TRADER', href: '/fx/jfx', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '5.9銭',
    condition: '通常時の公称値。相場急変・流動性低下時などは例外',
    source: 'https://www.jfx.co.jp/trading_rule/spread/',
  },
  {
    name: '三菱UFJ eスマート証券 FX', href: '/fx/au-kabucom-fx', spread: '0.2銭', cost: '20円', hours: '9:00〜翌3:00', offHours: '0.2〜8.0銭',
    condition: 'ミニ（1,000通貨単位）の公称値を1万通貨相当へ換算',
    source: 'https://kabu.com/item/fx/sys/cost.html',
  },
  {
    name: 'サクソバンク証券', href: '/fx/saxo', spread: '0.2銭', cost: '20円', hours: '8:00〜翌3:59', offHours: '60.0銭',
    condition: '5万通貨以下。時間外は豪州夏時間で表示が変わる場合あり',
    source: 'https://www.home.saxo/ja-jp/products/forex',
  },
] as const;

export default function Page() {
  return (
    <div className="comparison-page fx-spread-comparison-page">
      <header className="comparison-intro fx-spread-comparison-intro">
        <div>
          <p className="page-kicker">USD/JPY SPREAD / PUBLISHED DATA</p>
          <h1>0.2銭の先にある、<br /><em>時間と数量まで比べる。</em></h1>
          <p className="lede">米ドル/円の公称スプレッドを、1万通貨の円額、適用時間、時間外水準、数量条件までそろえて比較しました。「原則固定」の数字だけで選ばないための一覧です。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-07</strong>
          <p>各社公式サイトの公称値を手作業で確認。実測値ではなく、表示どおりの約定を保証するものではありません。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="fx-spread-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / CORE HOURS</p><h2 id="fx-spread-title">1万通貨の公称コスト</h2></div>
          <span className="comparison-scope">公称スプレッド × 1万通貨</span>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table fx-spread-table">
            <thead><tr><th>サービス</th><th>公称スプレッド</th><th>1万通貨の円額</th><th>適用時間</th><th>時間外</th><th>数量・商品条件</th></tr></thead>
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
        </div><p className="panel-note">対円通貨ペアは1銭＝0.01円として換算。FXTFは1万通貨までの建玉連動手数料も0円ですが、保有建玉と新規発注の合計が1万通貨を超えると別途手数料が発生します。全社とも原則固定・例外ありです。</p></div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">02 / READ THE ZERO</p><h2>「0.0銭」は、数量を増やしても0円とは限らない</h2></div>
        <div>
          <p>FXTFの米ドル/円は対象時間に0.0銭ですが、建玉連動手数料は同一銘柄・同一売買種別の保有建玉と新規発注の合計で段階的に変わります。</p>
          <div className="formula-box"><code>建玉＋新規発注が1万通貨以内：0円／1万通貨</code><small>1万通貨超〜25万通貨は40円／1万通貨。2026-09-07確認時点</small></div>
          <p>このため、少額ではスプレッドと手数料がともに0円でも、積み増し後の総コストは別に確認する必要があります。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">03 / FOUR CHECKS</p><h2>公称値を実際の取引条件へ近づける</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>時間帯</h3><p>早朝は時間外水準へ広がる会社があります。指標発表前後は対象時間内でも例外です。</p></article>
          <article><b>02</b><h3>取引数量</h3><p>少額専用の縮小スプレッドや、大口注文で別水準になる条件を分けて確認します。</p></article>
          <article><b>03</b><h3>別手数料</h3><p>スプレッド0.0銭でも、建玉量に応じた手数料などがないか総額で確認します。</p></article>
          <article><b>04</b><h3>実際の約定</h3><p>公称値は広告条件です。スリッページや約定拒否を含む実測比較は許諾後に別表示します。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="fx-spread-sources">
        <div><p className="section-index">04 / SOURCES</p><h2 id="fx-spread-sources">各社の公式スプレッド</h2></div>
        <ul>{PROVIDERS.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer"><span>{provider.name}</span><b>公式情報 ↗</b></a></li>)}</ul>
        <p>キャンペーン、広告表示期間、夏時間・冬時間などにより条件は変更されます。口座開設・取引前に各社公式サイトで最新情報を確認してください。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button primary" href="/tools/cost-calculator">自分の数量で試算</Link>
        <Link className="button secondary" href="/fx">FXコスト比較へ戻る</Link>
      </div>
    </div>
  );
}
