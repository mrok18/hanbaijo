import Link from 'next/link';

export const metadata = {
  title: 'FXスワップカレンダー9社比較｜表示単位・付与日数の見方',
  description: 'FX9サービスのスワップポイントについて、公式の確認場所、米ドル円の表示単位、更新・付与タイミングを比較。金額を同条件へ直す方法も解説します。',
};

const PROVIDERS = [
  {
    name: 'FXTF', href: '/fx/fxtf', where: 'リアルタイムレート・取引画面', unit: '1Lot＝1万通貨', timing: 'NY時間17時をまたぐと付与',
    note: '取引画面は付与日数分を表示。決済前は残高へ振替・出金不可。自動取得と再掲載は対象外', source: 'https://www.fxtrade.co.jp/q-fx_cfd-swap2/',
  },
  {
    name: 'MATSUI FX', href: '/fx/matsui', where: '公式スワップカレンダー', unit: '1万通貨あたり', timing: '取引終了後のメンテナンス後',
    note: '夏時間6:10・冬時間7:10以降に付与。付与日数と売・買を分けて表示', source: 'https://www.matsui.co.jp/fx/market/swappoint/',
  },
  {
    name: 'GMOクリック証券 FXネオ', href: '/fx/gmo-click', where: '公式スワップカレンダー', unit: '1万通貨あたり', timing: 'NYクローズ後に発生',
    note: '反映処理後、現金として授受。祝日等でロールオーバーされない営業日あり', source: 'https://www.click-sec.com/corp/guide/fxneo/swplog/',
  },
  {
    name: 'LIGHT FX', href: '/fx/lightfx', where: '公式スワップカレンダー', unit: '1Lot＝1万通貨', timing: '18:00公表',
    note: '0.1Lotは表示額の10分の1。LIGHT銘柄と通常銘柄を別列で確認', source: 'https://lightfx.jp/market/swap/',
  },
  {
    name: 'ヒロセ通商 LION FX', href: '/fx/lion-fx', where: '公式一覧・過去CSV', unit: '1Lot＝1,000通貨', timing: '営業日終了時に発生',
    note: '原則水曜に土日分を含む3日分。外貨同士はベースとなる通貨で表示', source: 'https://hirose-fx.co.jp/contents/news/Swap',
  },
  {
    name: 'JFX MATRIX TRADER', href: '/fx/jfx', where: '公式一覧・過去CSV', unit: '1Lot＝1,000通貨', timing: '営業日終了時に発生',
    note: '原則水曜に3日分。決済またはスワップ確定までは未実現損益', source: 'https://www.jfx.co.jp/trading_rule/swap/',
  },
  {
    name: 'みんなのFX', href: '/fx/minna-fx', where: '公式スワップカレンダー', unit: '1Lot＝1万通貨', timing: '18:00公表',
    note: '0.1Lotは表示額の10分の1。付与日数を含んだ額として表示', source: 'https://min-fx.jp/market/swap/',
  },
  {
    name: '三菱UFJ eスマート証券 FX', href: '/fx/au-kabucom-fx', where: '取引画面・過去実績', unit: '取引画面で数量を確認', timing: '夏時間5:50・冬時間6:50をまたぐ',
    note: '最新値は取引画面で確認。建玉を決済せずスワップのみ振替可能', source: 'https://kabu.com/item/fx/sys/trade_style.html',
  },
  {
    name: 'サクソバンク証券', href: '/fx/saxo', where: '公式カレンダー・取引画面', unit: 'カレンダー記載単位を確認', timing: '毎営業日確定、当日18時頃付与',
    note: '翌営業日正午頃に記帳。取引画面のRealized Swapは資金調達金利を含む', source: 'https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions',
  },
] as const;

export default function Page() {
  return (
    <div className="comparison-page fx-swap-comparison-page">
      <header className="comparison-intro fx-swap-comparison-intro">
        <div>
          <p className="page-kicker">FX SWAP CALENDAR / PUBLISHED DATA</p>
          <h1>スワップの金額より先に、<br /><em>単位と付与日数をそろえる。</em></h1>
          <p className="lede">同じ「100円」でも、1,000通貨か1万通貨か、1日分か3日分かで意味が変わります。9社の公式な確認場所と表示ルールを整理しました。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-07</strong>
          <p>日々変動する金額の転載ではなく、公式カレンダーの読み方と付与ルールを比較しています。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="fx-swap-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / WHERE TO CHECK</p><h2 id="fx-swap-title">9社の確認場所と表示単位</h2></div>
          <span className="comparison-scope">米ドル/円を基準に整理</span>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table fx-swap-table">
            <thead><tr><th>サービス</th><th>公式の確認場所</th><th>表示単位</th><th>付与・公表</th><th>比較時の注意</th></tr></thead>
            <tbody>
              {PROVIDERS.map((provider) => (
                <tr key={provider.name}>
                  <td className="ex-name"><Link href={provider.href}>{provider.name}</Link></td>
                  <td><strong>{provider.where}</strong></td>
                  <td className="result-value">{provider.unit}</td>
                  <td>{provider.timing}</td>
                  <td><small>{provider.note}</small></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><p className="panel-note">FXTFからは、取引ツール等のレート・Bid・Ask・スプレッドを継続保存、加工、第三者向け再掲載しないよう書面回答を受領しています。同社は公式公表情報への案内だけを掲載し、実測対象から除外します。</p></div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">02 / NORMALIZE</p><h2>1万通貨・1日分へ直してから比べる</h2></div>
        <div>
          <p>1Lotが1,000通貨の会社で15円と表示され、別の会社が1万通貨あたり150円なら、数量をそろえた金額は同じです。複数日分がまとめて付与される日は日数でも割ります。</p>
          <div className="formula-box"><code>1万通貨・1日分 ＝ 表示額 ×（10,000 ÷ 表示通貨数）÷ 付与日数</code><small>受取額と支払額は別々に計算</small></div>
          <p>端数処理や外貨同士の円換算方法は会社ごとに異なるため、計算後の小数値がそのまま口座へ反映されるとは限りません。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">03 / FOUR CHECKS</p><h2>受取額だけでは判断しない</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>売り側の支払額</h3><p>買いスワップが高くても、売りスワップとの差が大きい場合があります。両方向を確認します。</p></article>
          <article><b>02</b><h3>付与日数</h3><p>土日・祝日分が特定日にまとめて付くため、単日の表示額だけでは比較できません。</p></article>
          <article><b>03</b><h3>実現タイミング</h3><p>建玉決済前に振替できる会社と、未実現損益として扱う会社があります。</p></article>
          <article><b>04</b><h3>為替変動</h3><p>スワップ収益より為替差損が大きくなることがあります。金額は将来も続く保証がありません。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="fx-swap-sources">
        <div><p className="section-index">04 / SOURCES</p><h2 id="fx-swap-sources">公式カレンダー・取引ルール</h2></div>
        <ul>{PROVIDERS.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer"><span>{provider.name}</span><b>公式情報 ↗</b></a></li>)}</ul>
        <p>スワップポイントは日々変動し、受取から支払いへ転じる場合があります。最新額と変則付与日は取引前に各社公式情報で確認してください。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button primary" href="/articles/fx-swap-calculation">スワップの計算方法</Link>
        <Link className="button secondary" href="/fx">FXコスト比較へ戻る</Link>
      </div>
    </div>
  );
}
