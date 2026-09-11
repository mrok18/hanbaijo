import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '楽天証券の日本株手数料は0円？ゼロコース・信用取引・確認方法',
  description: '楽天証券の国内株式手数料を、ゼロコース、超割コース、いちにち定額コースで比較。現物・信用取引の無料条件と手数料コースの確認・変更方法を整理します。',
};

const SPOT_FEES = [
  ['5万円まで', '55円'],
  ['10万円まで', '99円'],
  ['20万円まで', '115円'],
  ['50万円まで', '275円'],
  ['100万円まで', '535円'],
  ['150万円まで', '640円'],
  ['3,000万円まで', '1,013円'],
  ['3,000万円超', '1,070円'],
] as const;

const MARGIN_FEES = [
  ['10万円まで', '99円'],
  ['20万円まで', '148円'],
  ['50万円まで', '198円'],
  ['50万円超', '385円'],
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">RAKUTEN SECURITIES / DOMESTIC STOCK</p>
      <h1>楽天証券の日本株手数料は0円？<br />ゼロコースと信用取引を確認</h1>
      <p className="lede">楽天証券の国内株は、選択中の手数料コースによって負担が変わります。「ゼロコース」なら現物・信用の取引手数料は約定代金にかかわらず0円ですが、SOR・Rクロスへの同意や、手数料以外の費用も確認が必要です。</p>

      <div className="callout"><strong>先に結論</strong><p>国内株の現物・信用取引を0円にする基本の選択肢はゼロコースです。自動で全口座が無料になるとは限らないため、注文前に現在のコースとSOR・Rクロスの設定を確認します。</p></div>

      <h2>国内株の3つの手数料コース</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>コース</th><th>手数料の決まり方</th><th>主な確認点</th></tr></thead><tbody>
        <tr><td className="ex-name">ゼロコース</td><td><strong>現物・信用とも0円</strong></td><td>約定代金にかかわらず無料。SOR（Rクロスを含む）の利用同意が必要</td></tr>
        <tr><td className="ex-name">超割コース</td><td>1回の約定代金で決定</td><td>通常は段階制。大口優遇の条件達成時は現物・信用とも0円</td></tr>
        <tr><td className="ex-name">いちにち定額コース</td><td>1日の約定代金合計で決定</td><td>現物と信用を合算し、100万円まで0円</td></tr>
      </tbody></table></div><p className="panel-note">楽天証券のインターネット取引の国内株式手数料。IFA契約やオペレーター経由の注文などは条件が異なります。</p></div>

      <h2>ゼロコースは現物・信用とも取引手数料0円</h2>
      <p>ゼロコースでは、国内株式の現物取引と信用取引の売買手数料が、約定代金にかかわらず0円です。利用には、複数の市場から執行先を選ぶSORと、楽天証券の社内取引システムであるRクロスの内容を理解し、利用へ同意する必要があります。</p>
      <p>「手数料無料」という表示は売買手数料を指します。信用取引の買方金利、貸株料、逆日歩、事務管理費などや、電話注文の費用まで一律に0円になる意味ではありません。</p>

      <h2>超割コースの現物手数料</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th className="num">1回の約定代金</th><th className="num">現物手数料（税込）</th></tr></thead><tbody>{SPOT_FEES.map(([value, fee]) => (
        <tr key={value}><td className="num ex-name">{value}</td><td className="num"><strong>{fee}</strong></td></tr>
      ))}</tbody></table></div><p className="panel-note">超割コースは取引手数料の1％分をポイントバック。大口優遇の条件を満たすと、現物・信用の取引手数料は0円になり、優遇は一度の条件達成から3か月間適用されます。</p></div>

      <h2>超割コースの信用取引手数料</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th className="num">1回の約定代金</th><th className="num">信用手数料（税込）</th></tr></thead><tbody>{MARGIN_FEES.map(([value, fee]) => (
        <tr key={value}><td className="num ex-name">{value}</td><td className="num"><strong>{fee}</strong></td></tr>
      ))}</tbody></table></div><p className="panel-note">売買手数料とは別に、建玉の種類と保有日数に応じた金利・貸株料などを確認します。</p></div>

      <h2>いちにち定額コースは現物と信用を合算</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th className="num">1日の約定代金合計</th><th className="num">手数料（税込）</th></tr></thead><tbody>
        <tr><td className="num ex-name">100万円まで</td><td className="num"><strong>0円</strong></td></tr>
        <tr><td className="num ex-name">200万円まで</td><td className="num"><strong>2,200円</strong></td></tr>
        <tr><td className="num ex-name">300万円まで</td><td className="num"><strong>3,300円</strong></td></tr>
        <tr><td className="num ex-name">300万円超</td><td className="num">以後100万円増えるごとに1,100円追加</td></tr>
      </tbody></table></div><p className="panel-note">1日の合計は現物と信用を合わせて計算し、前営業日の夜間取引と当日の日中取引も合算します。</p></div>

      <h2>現在の手数料コースを確認・変更する方法</h2>
      <p>PCサイトでは、ログイン後に「マイメニュー」から「お客様情報の設定・変更」へ進み、「各商品に関する設定　国内株式」内の「手数料コースの確認・変更」で現在のコースを確認できます。</p>
      <ol>
        <li>現在の手数料コースとSOR・Rクロスの設定を確認する</li>
        <li>必要なら「コースを変更」から希望するコースを選ぶ</li>
        <li>適用日を確認してから注文する</li>
      </ol>
      <p>公式案内では、営業日の16時までの変更は原則として翌営業日から適用されます。執行中の注文があると変更できず、当月に一度も取引がない場合に限り即日変更できるとされています。</p>

      <h2>「0円」でも注文前に確認する4項目</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>注文経路</h3><p>オペレーター経由の電話注文には、選択中のコースとは別の手数料が適用されます。</p></article>
        <article><b>02</b><h3>単元未満株</h3><p>かぶミニ・かぶピタッは売買手数料0円でも、取引価格にスプレッドが含まれる場合があります。</p></article>
        <article><b>03</b><h3>信用取引</h3><p>売買手数料のほか、買方金利、貸株料、逆日歩などを保有日数と銘柄条件で確認します。</p></article>
        <article><b>04</b><h3>約定価格</h3><p>SORやRクロスの仕組みを確認し、手数料だけでなく約定価格と総コストで判断します。</p></article>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.rakuten-sec.co.jp/web/domestic/stock/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「現物取引手数料」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/domestic/margin/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「信用取引 手数料／金利／貸株料」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/commission/change_web.html" target="_blank" rel="noopener noreferrer">楽天証券「手数料コースの確認・変更について」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/company/risk.html" target="_blank" rel="noopener noreferrer">楽天証券「投資にかかる手数料等およびリスク」</a></li>
        </ul>
        <p>手数料・条件は2026年9月11日に確認しました。変更される場合があるため、注文前に最新の公式料金表と契約締結前交付書面を確認してください。</p>
      </section>

      <p><Link href="/articles/stock-round-trip-cost">株の往復コストの計算方法を見る →</Link></p>
      <p><Link href="/articles/gmo-click-stock-fees">GMOクリック証券の国内株手数料を見る →</Link></p>
      <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の国内株手数料を見る →</Link></p>
      <p><Link href="/stocks/rakuten">楽天証券の株式コストシートを見る →</Link></p>
      <p><Link href="/stocks/domestic-fee-comparison">国内株の手数料を比較する →</Link></p>
    </article>
  );
}
