import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FXスワップカレンダー10社比較｜単位・付与日数・確認先【2026年】',
  description: 'FX10社のスワップカレンダーを、米ドル円の表示単位、付与日数、更新・付与タイミングで比較。1万通貨・1日分へそろえる計算式と公式確認先をまとめます。',
  alternates: { canonical: '/fx/swap-calendar-comparison' },
};

const FAQS = [
  {
    question: 'FXのスワップポイントは、どの会社が高いですか？',
    answer: 'スワップポイントは日々変動するため、常に1社が最も高いとは限りません。表示額を1万通貨・1日分へそろえ、買いの受取額だけでなく売りの支払額も同じ日付で比較してください。',
  },
  {
    question: 'スワップポイントの3日分はいつ付与されますか？',
    answer: '会社と祝日の予定によって異なります。JFXとヒロセ通商は原則として水曜日分に土日分を含む3日分を付与すると案内していますが、祝祭日や年末年始には変則となるため、取引前に各社カレンダーの付与日数を確認してください。',
  },
  {
    question: '1Lotのスワップを会社間でそのまま比較できますか？',
    answer: 'そのままでは比較できません。1Lotが1,000通貨の会社と1万通貨の会社があり、一部の通貨ペアには例外もあります。「表示額×（10,000÷表示通貨数）÷付与日数」で1万通貨・1日分へ直して比較します。',
  },
] as const;

const PROVIDERS = [
  {
    name: 'FXTF', href: '/fx/fxtf', where: 'リアルタイムレート・取引画面', unit: '1Lot＝1万通貨', timing: '取引画面で付与日数を確認',
    note: '1Lotは1万通貨で、画面には付与日数を含む額を表示。決済前は残高へ振替・出金不可', source: 'https://www.fxtrade.co.jp/q-fx_cfd-swap2/',
  },
  {
    name: 'MATSUI FX', href: '/fx/matsui', where: '公式スワップカレンダー', unit: '1万通貨あたり', timing: '取引終了後のメンテナンス後',
    note: '夏時間6:10・冬時間7:10以降に付与。付与日数と売・買を分けて表示', source: 'https://www.matsui.co.jp/fx/market/swappoint/',
  },
  {
    name: 'GMOクリック証券 FXネオ', href: '/fx/gmo-click', where: '公式スワップカレンダー', unit: '1万通貨あたり', timing: 'NYクローズ後に発生',
    note: '米ドル/円の表示単位。反映処理後、現金として授受。祝日等で付与日数が変動', source: 'https://www.click-sec.com/corp/guide/fxneo/swplog/',
  },
  {
    name: 'DMM FX', href: '/fx/dmm-fx', where: '公式スワップカレンダー', unit: '1Lotあたり', timing: '営業日切替後に付与',
    note: '通常1Lotは1万通貨、ミニは1,000通貨。夏時間6時・冬時間7時に営業日切替', source: 'https://fx.dmm.com/fx/service/swapcalendar/',
  },
  {
    name: 'LIGHT FX', href: '/fx/lightfx', where: '公式スワップカレンダー', unit: '1Lot＝1万通貨', timing: '18:00公表',
    note: '米ドル/円は0.1Lotで表示額の10分の1。LIGHT銘柄と通常銘柄を別列で確認', source: 'https://lightfx.jp/market/swap/',
  },
  {
    name: 'ヒロセ通商 LION FX', href: '/fx/lion-fx', where: '公式一覧・過去CSV', unit: '1Lot＝1,000通貨', timing: '原則水曜に3日分',
    note: '米ドル/円の取引単位。通貨ペアによる例外とカレンダーの付与日数を確認', source: 'https://hirose-fx.co.jp/contents/news/Swap',
  },
  {
    name: 'JFX MATRIX TRADER', href: '/fx/jfx', where: '公式一覧・過去CSV', unit: '1Lot＝1,000通貨', timing: '原則水曜に3日分',
    note: '米ドル/円の取引単位。通貨ペアによる例外とカレンダーの付与日数を確認', source: 'https://www.jfx.co.jp/trading_rule/swap/',
  },
  {
    name: 'みんなのFX', href: '/fx/minna-fx', where: '公式スワップカレンダー', unit: '1Lot＝1万通貨', timing: '18:00公表',
    note: '米ドル/円は0.1Lotで表示額の10分の1。売・買と付与日数を確認', source: 'https://min-fx.jp/market/swap/',
  },
  {
    name: '三菱UFJ eスマート証券 FX', href: '/articles/esmart-fx-swap-calendar', where: '取引画面・過去実績', unit: '取引画面で数量を確認', timing: '夏時間5:50・冬時間6:50をまたぐ',
    note: '最新値は取引画面で確認。建玉を決済せずスワップのみ振替可能', source: 'https://kabu.com/item/fx/sys/trade_style.html',
  },
  {
    name: 'サクソバンク証券', href: '/fx/saxo', where: '公式カレンダー・取引画面', unit: 'カレンダー記載単位を確認', timing: '毎営業日確定、当日18時頃付与',
    note: '翌営業日正午頃に記帳。取引画面のRealized Swapは資金調達金利を含む', source: 'https://www.home.saxo/ja-jp/rates-and-conditions/forex/trading-conditions',
  },
] as const;

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="comparison-page fx-swap-comparison-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
      <header className="comparison-intro fx-swap-comparison-intro">
        <div>
          <p className="page-kicker">FX SWAP CALENDAR / PUBLISHED DATA</p>
          <h1>スワップの金額より先に、<br /><em>単位と付与日数をそろえる。</em></h1>
          <p className="lede">同じ「100円」でも、1,000通貨か1万通貨か、1日分か3日分かで意味が変わります。10社の公式な確認場所と表示ルールを整理しました。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-11</strong>
          <p>日々変動する金額の転載ではなく、公式カレンダーの読み方と付与ルールを比較しています。</p>
        </aside>
      </header>

      <section className="comparison-section" aria-labelledby="fx-swap-quick-answer">
        <p className="section-index">QUICK ANSWER / 比較の順番</p>
        <h2 id="fx-swap-quick-answer">先に結論：4つの条件をそろえる</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>1万通貨へ換算</h3><p>1Lotの意味は会社や通貨ペアで異なります。まず表示通貨数を確認します。</p></article>
          <article><b>02</b><h3>1日分へ換算</h3><p>3日分などのまとめ付与は、カレンダー記載の付与日数で割ります。</p></article>
          <article><b>03</b><h3>買い・売りを分離</h3><p>受取額と支払額は別条件です。金利差が変われば受払方向も変わり得ます。</p></article>
          <article><b>04</b><h3>同じ日付で確認</h3><p>公表値は日々変動します。最終判断は各社公式の最新カレンダーで行います。</p></article>
        </div>
        <div className="comparison-actions">
          <Link className="button primary" href="/tools/fx-swap-break-even-calculator">スワップでスプレッドを回収する日数を計算</Link>
        </div>
      </section>

      <section className="comparison-result" aria-labelledby="fx-swap-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / WHERE TO CHECK</p><h2 id="fx-swap-title">10社の確認場所と表示単位</h2></div>
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
          <p><Link href="/articles/fx-swap-three-days">3日分が付く仕組み</Link>と<Link href="/articles/fx-swap-spread-break-even-days">スプレッド回収日数の考え方</Link>も、同じ条件へ直して読むための補足になります。</p>
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
        <p>2026年9月11日確認。スワップポイントは日々変動し、受取から支払いへ転じる場合があります。最新額と変則付与日は取引前に各社公式情報で確認してください。</p>
      </section>

      <section className="comparison-section" aria-labelledby="fx-swap-faq">
        <p className="section-index">FAQ / FX SWAP CALENDAR</p>
        <h2 id="fx-swap-faq">スワップカレンダー比較でよくある質問</h2>
        <div className="provider-faq-list">
          {FAQS.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="comparison-actions">
        <Link className="button primary" href="/tools/fx-swap-break-even-calculator">回収日数を計算する</Link>
        <Link className="button secondary" href="/articles/jfx-swap-transfer-tax">JFXのスワップ振替を詳しく見る</Link>
        <Link className="button secondary" href="/articles/fx-swap-calculation">スワップの計算方法</Link>
        <Link className="button secondary" href="/fx">FXコスト比較へ戻る</Link>
      </div>
    </div>
  );
}
