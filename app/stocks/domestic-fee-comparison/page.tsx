import Link from 'next/link';

export const metadata = {
  title: '国内株の売買手数料比較｜4社を同じ取引例で計算',
  description: 'GMOクリック証券、楽天証券、松井証券、DMM 株の国内株現物手数料を、50万円の買付・売却例で比較します。',
};

const PROVIDERS = [
  {
    name: 'GMOクリック証券',
    model: '約定代金にかかわらず0円',
    sameDay: '0円',
    separateDays: '0円',
    note: 'コールセンター、強制決済、単元未満株などは対象外',
    source: 'https://www.click-sec.com/corp/guide/commission_list/',
  },
  {
    name: '楽天証券',
    model: 'ゼロコースは約定代金にかかわらず0円',
    sameDay: '0円',
    separateDays: '0円',
    note: 'ゼロコースの選択とSOR・Rクロスへの利用同意が必要',
    source: 'https://www.rakuten-sec.co.jp/web/domestic/stock/commission.html',
  },
  {
    name: '松井証券',
    model: '1日の約定代金合計で決まるボックスレート',
    sameDay: '1,100円',
    separateDays: '0円',
    note: '26歳以上の例。1日50万円まで0円、100万円まで1,100円',
    source: 'https://www.matsui.co.jp/stock/domestic/fee/',
  },
  {
    name: 'DMM 株',
    model: '1注文ごとの約定代金で決まる',
    sameDay: '396円',
    separateDays: '396円',
    note: '50万円以下は1注文198円。買付・売却の2注文で計算',
    source: 'https://kabu.dmm.com/commission/',
  },
] as const;

export default function Page() {
  return (
    <div className="comparison-page">
      <header className="comparison-intro">
        <div>
          <p className="page-kicker">DOMESTIC STOCK / PUBLISHED DATA</p>
          <h1>国内株の売買手数料を、<br /><em>同じ取引例で比較。</em></h1>
          <p className="lede">50万円で買い、50万円で売る例にそろえました。料金体系が「1注文ごと」か「1日定額」かで、取引日による差も確認します。</p>
        </div>
        <aside>
          <span>CHECKED</span><strong>2026-09-07</strong>
          <p>各社公式料金表の公称値。広告報酬による並べ替えはしていません。</p>
        </aside>
      </header>

      <section className="comparison-result" aria-labelledby="stock-comparison-title">
        <div className="comparison-result-head">
          <div><p className="section-index">01 / RESULT</p><h2 id="stock-comparison-title">50万円を買い、50万円を売る</h2></div>
          <div className="method-labels compact-labels">
            <div><b>公称値</b><p>各社公式サイト</p></div>
            <div><b>試算値</b><p>明記した条件で計算</p></div>
          </div>
        </div>
        <div className="data-panel"><div className="table-scroll">
          <table className="rates comparison-table">
            <thead><tr><th>サービス</th><th>料金体系</th><th className="num">同じ日に往復</th><th className="num">別の日に売却</th></tr></thead>
            <tbody>
              {PROVIDERS.map((provider) => (
                <tr key={provider.name}>
                  <td className="ex-name">{provider.name}</td>
                  <td><strong>{provider.model}</strong><small>{provider.note}</small></td>
                  <td className="num result-value">{provider.sameDay}</td>
                  <td className="num result-value">{provider.separateDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="panel-note">現物・インターネット取引を想定。板の価格差、税金、入出金、電話注文、単元未満株、強制決済などの費用は含みません。</p></div>
      </section>

      <section className="comparison-section split-explain">
        <div><p className="section-index">02 / WHY IT CHANGES</p><h2>松井証券は、売る日で試算が変わる</h2></div>
        <div>
          <p>松井証券のボックスレートは、現物と信用を合わせた「1日の約定代金合計」で決まります。</p>
          <ul>
            <li>同日：買付50万円＋売却50万円＝1日合計100万円 → 1,100円</li>
            <li>別日：買付日50万円、売却日50万円 → 各日とも無料枠内</li>
          </ul>
          <p>25歳以下はボックスレート手数料が無料です。年齢、取引経路、口座区分も比較条件に含める必要があります。</p>
        </div>
      </section>

      <section className="comparison-section">
        <p className="section-index">03 / READ CORRECTLY</p><h2>0円でも、確認項目は残る</h2>
        <div className="fx-metric-grid comparison-points">
          <article><b>01</b><h3>適用条件</h3><p>コース選択、SOR同意、取引経路など、無料になる前提を確認します。</p></article>
          <article><b>02</b><h3>単元未満株</h3><p>通常の単元株とは料金やスプレッド、売買方法が異なる場合があります。</p></article>
          <article><b>03</b><h3>信用コスト</h3><p>取引手数料0円でも、買方金利・貸株料・管理費は別に発生します。</p></article>
          <article><b>04</b><h3>板の価格差</h3><p>売値と買値の差は取引所の注文状況で変わり、証券会社の手数料とは別です。</p></article>
        </div>
      </section>

      <section className="comparison-sources" aria-labelledby="stock-provider-sources">
        <div><p className="section-index">04 / SOURCES</p><h2 id="stock-provider-sources">公式料金表</h2></div>
        <ul>
          {PROVIDERS.map((provider) => <li key={provider.name}><a href={provider.source} target="_blank" rel="noopener noreferrer"><span>{provider.name}</span><b>公式情報 ↗</b></a></li>)}
        </ul>
        <p>料金は変更される場合があります。申込み・取引前に必ずリンク先の最新情報と契約締結前交付書面を確認してください。</p>
      </section>

      <div className="comparison-actions">
        <Link className="button primary" href="/tools/cost-calculator">自分の金額で試算</Link>
        <Link className="button secondary" href="/stocks">株式コスト比較へ戻る</Link>
      </div>
    </div>
  );
}
