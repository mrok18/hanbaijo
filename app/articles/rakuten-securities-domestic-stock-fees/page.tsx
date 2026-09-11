import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '楽天証券の日本株手数料は0円？ゼロコース・信用取引・確認方法',
  description: '楽天証券の信用取引手数料はゼロコースなら0円です。制度・一般信用の買方金利、貸株料、逆日歩、事務管理費まで含め、100万円を30日保有する費用を計算します。',
  alternates: { canonical: '/articles/rakuten-securities-domestic-stock-fees' },
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

const MARGIN_HOLDING_COSTS = [
  ['制度信用・買建', '買方金利 年2.80％', '優遇金利は年2.28％'],
  ['制度信用・売建', '貸株料 年1.10％', '株不足時は逆日歩が別途発生'],
  ['一般信用「無期限」・買建', '買方金利 年2.80％', '優遇金利は年2.10％'],
  ['一般信用「無期限」・売建', '貸株料 年1.10％', '制度信用の逆日歩は発生しない'],
  ['一般信用「短期」・売建', '貸株料 年3.90％', '対象銘柄と返済期限を確認'],
  ['一般信用「いちにち信用」', '金利・貸株料 年0.00％', '売建は特別空売り料がかかる場合あり'],
] as const;

const faqs = [
  {
    question: '楽天証券の信用取引手数料は無料ですか？',
    answer: 'ゼロコースなら、国内株の信用取引手数料は約定代金にかかわらず0円です。超割コースは1注文ごとの段階制、いちにち定額コースは現物と信用を合算した1日の約定代金で決まります。',
  },
  {
    question: '信用取引手数料が0円なら、保有コストもかかりませんか？',
    answer: '通常の制度信用・一般信用では買方金利または貸株料が保有日数に応じて発生します。制度信用の売建では逆日歩、1カ月を超える建玉では事務管理費などが加わる場合があります。',
  },
  {
    question: '楽天証券のいちにち信用はすべて無料ですか？',
    answer: '取引手数料と金利・貸株料は0円ですが、売建銘柄によっては特別空売り料が発生します。当日中に返済しなかった場合の扱いも取引ルールで確認してください。',
  },
] as const;

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-11',
    dateModified: '2026-09-12',
    mainEntityOfPage: 'https://hanbaijo.com/articles/rakuten-securities-domestic-stock-fees',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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

      <h2>信用取引は金利・貸株料まで含めて計算</h2>
      <p>ゼロコースで売買手数料が0円でも、建玉を保有すると買建には買方金利、売建には貸株料がかかります。制度信用の売建では、株券が不足した日に逆日歩が加わる場合があります。</p>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>信用取引の種類</th><th>通常の保有コスト</th><th>追加の確認点</th></tr></thead><tbody>{MARGIN_HOLDING_COSTS.map(([type, cost, note]) => (
        <tr key={type}><td className="ex-name">{type}</td><td><strong>{cost}</strong></td><td>{note}</td></tr>
      ))}</tbody></table></div><p className="panel-note">年率は2026年9月12日に楽天証券公式ページで確認。優遇金利には取引額・建玉残高などの判定条件があります。</p></div>

      <h2>100万円を30日保有した場合の概算</h2>
      <div className="formula-box"><code>保有コスト ＝ 建玉金額 × 年率 × 保有日数 ÷ 365</code><small>単純化した概算。実際は受渡日ベースの日数、建玉金額、適用金利、端数処理などで変わります。</small></div>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>例</th><th className="num">計算</th><th className="num">概算額</th></tr></thead><tbody>
        <tr><td className="ex-name">制度信用・買建</td><td className="num">100万円 × 2.80％ × 30日 ÷ 365</td><td className="num"><strong>約2,301円</strong></td></tr>
        <tr><td className="ex-name">制度信用・売建</td><td className="num">100万円 × 1.10％ × 30日 ÷ 365</td><td className="num"><strong>約904円</strong></td></tr>
        <tr><td className="ex-name">一般信用「短期」・売建</td><td className="num">100万円 × 3.90％ × 30日 ÷ 365</td><td className="num"><strong>約3,205円</strong></td></tr>
      </tbody></table></div><p className="panel-note">制度信用の売建で逆日歩が発生した場合や、配当落調整金・事務管理費などは上表に含みません。</p></div>

      <h2>長期保有・権利日またぎで加わる費用</h2>
      <ul>
        <li><strong>事務管理費：</strong>新規建ての約定日から1カ月を経過するごとに、通常は1株あたり11銭（税込）。同一銘柄・同一日・同一売買方向ごとに最低110円、上限1,100円です。</li>
        <li><strong>名義書換料：</strong>買建玉が権利確定日をまたぐと、1売買単位あたり55円（税込）。ETF・ETNは1売買単位あたり5.5円です。</li>
        <li><strong>逆日歩：</strong>制度信用の売建で株券が不足した場合に発生し、金額は市場状況によって決まります。</li>
        <li><strong>特別空売り料：</strong>いちにち信用の売建では、銘柄ごとに1株あたりの料金が設定される場合があります。</li>
      </ul>

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

      <h2>楽天証券の信用取引手数料に関するFAQ</h2>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.rakuten-sec.co.jp/web/domestic/stock/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「現物取引手数料」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/domestic/margin/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「信用取引 手数料／金利／貸株料」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/domestic/margin/rule/ground_rules.html" target="_blank" rel="noopener noreferrer">楽天証券「信用取引の基本ルール」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/domestic/margin/short_selling/" target="_blank" rel="noopener noreferrer">楽天証券「一般信用取引 いちにち信用」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/commission/change_web.html" target="_blank" rel="noopener noreferrer">楽天証券「手数料コースの確認・変更について」</a></li>
          <li><a href="https://www.rakuten-sec.co.jp/web/company/risk.html" target="_blank" rel="noopener noreferrer">楽天証券「投資にかかる手数料等およびリスク」</a></li>
        </ul>
        <p>手数料・条件は2026年9月12日に確認しました。変更される場合があるため、注文前に最新の公式料金表と契約締結前交付書面を確認してください。</p>
      </section>

      <p><Link href="/articles/stock-round-trip-cost">株の往復コストの計算方法を見る →</Link></p>
      <p><Link href="/articles/gmo-click-stock-fees">GMOクリック証券の国内株手数料を見る →</Link></p>
      <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">DMM 株の国内株手数料を見る →</Link></p>
      <p><Link href="/stocks/rakuten">楽天証券の株式コストシートを見る →</Link></p>
      <p><Link href="/stocks/domestic-fee-comparison">国内株の手数料を比較する →</Link></p>
    </article>
  );
}
