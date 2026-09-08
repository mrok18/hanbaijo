import Link from 'next/link';

export const metadata = {
  title: '日経225先物の手数料比較｜ラージ・mini・マイクロ',
  description: '松井証券と楽天証券の日経225先物、mini、マイクロの標準手数料を、片道と往復で比較します。',
};

const FEES = [
  { product: '日経225先物', tick: '10,000円', matsui: '220円', rakuten: '275円', matsuiRound: '440円', rakutenRound: '550円' },
  { product: '日経225mini', tick: '500円', matsui: '38.5円', rakuten: '38.5円', matsuiRound: '77円', rakutenRound: '77円' },
  { product: '日経225マイクロ', tick: '50円', matsui: '11円', rakuten: '11円', matsuiRound: '22円', rakutenRound: '22円' },
] as const;

export default function Page() {
  return (
    <div className="comparison-page futures-comparison-page">
      <header className="comparison-intro futures-comparison-intro">
        <div>
          <p className="page-kicker">NIKKEI 225 FUTURES / PUBLISHED DATA</p>
          <h1>先物手数料を、<br /><em>1ティックと比較。</em></h1>
          <p className="lede">松井証券と楽天証券の標準インターネット手数料を、商品・片道・往復に分けました。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-07</strong>
          <p>税込・1枚あたりの公称値。証拠金額は変動するため、この表に固定値として入れていません。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="futures-comparison-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / STANDARD FEE</p><h2 id="futures-comparison-title">片道手数料と往復試算</h2></div>
          <span className="comparison-scope">標準インターネット取引・1枚</span>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table futures-fee-table">
            <thead><tr><th rowSpan={2}>商品</th><th rowSpan={2} className="num">1ティック</th><th colSpan={2} className="num">松井証券</th><th colSpan={2} className="num">楽天証券</th></tr><tr><th className="num">片道</th><th className="num">往復</th><th className="num">片道</th><th className="num">往復</th></tr></thead>
            <tbody>
              {FEES.map((fee) => (
                <tr key={fee.product}>
                  <td className="ex-name">{fee.product}</td><td className="num">{fee.tick}</td>
                  <td className="num result-value">{fee.matsui}</td><td className="num">{fee.matsuiRound}</td>
                  <td className="num result-value">{fee.rakuten}</td><td className="num">{fee.rakutenRound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div><p className="panel-note">往復は新規と返済で同じ標準手数料がかかると仮定して2倍した試算値。SQ決済、一日先物、J-NET、電話注文などは別条件です。</p></div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">02 / INTERPRETATION</p><h2>マイクロでは、手数料が1ティックに近い</h2></div>
        <div>
          <p>日経225マイクロ先物は1ティック50円です。両社の往復手数料22円は、1ティックの44%に相当します。</p>
          <div className="formula-box"><code>22円 ÷ 50円 × 100 ＝ 44%</code><small>板の価格差や価格変動を含まない手数料だけの比較</small></div>
          <p>金額が小さい商品では、手数料率ではなく「最小値動き何回分か」を併記すると負担感をつかみやすくなります。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">03 / EXCEPTIONS</p><h2>別料金になる取引を分ける</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>一日先物</h3><p>松井証券には通常取引と異なる手数料・取引ルールがあります。</p></article>
          <article><b>02</b><h3>J-NET</h3><p>楽天証券ではラージ・miniのJ-NET取引に別手数料があります。</p></article>
          <article><b>03</b><h3>SQ決済</h3><p>最終決済時の手数料や扱いは通常の反対売買と分けて確認します。</p></article>
          <article><b>04</b><h3>証拠金</h3><p>日々変動し、証券会社の掛目もあるため、取引直前の画面で確認します。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="futures-provider-sources">
        <div><p className="section-index">04 / SOURCES</p><h2 id="futures-provider-sources">公式料金表</h2></div>
        <ul>
          <li><a href="https://www.matsui.co.jp/fee/" target="_blank" rel="noopener noreferrer"><span>松井証券</span><b>公式情報 ↗</b></a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/fop/futures/commission/" target="_blank" rel="noopener noreferrer"><span>楽天証券</span><b>公式情報 ↗</b></a></li>
          <li><a href="https://www.jpx.co.jp/corporate/learning/resources/tvdivq0000003toh-att/fu_pu.pdf" target="_blank" rel="noopener noreferrer"><span>日本取引所グループ</span><b>取引単位・呼値 ↗</b></a></li>
        </ul>
        <p>対象は現時点で公式料金を同条件に整理できた2社です。比較対象は順次追加します。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button primary" href="/articles/matsui-futures-normal-vs-day">松井証券の通常・一日先物を比較</Link>
        <Link className="button primary" href="/tools/cost-calculator">先物プリセットで試算</Link>
        <Link className="button secondary" href="/futures">先物コスト比較へ戻る</Link>
      </div>
    </div>
  );
}
