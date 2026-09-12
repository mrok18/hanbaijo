import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/us-stock-margin-fee-comparison' },
  title: '米国株信用取引の手数料を3社比較｜DMM 株・松井証券・楽天証券',
  description: '米国株信用取引の手数料、買方金利、売建対応をDMM 株・松井証券・楽天証券で比較。1万ドルを30日保有する概算も整理します。',
};

const faq = [
  { q: '米国株信用取引の手数料が安い証券会社はどこですか？', a: '通常条件の取引手数料は、DMM 株・松井証券・楽天証券とも約定代金の0.33％、上限16.5ドルです。ただし、DMM 株と楽天証券には条件付きの優遇があり、松井証券は同一国内受渡日中に返済・現引した買建の金利が無料です。' },
  { q: '米国株信用取引は1日でも金利がかかりますか？', a: '買建では原則として保有日数に応じた買方金利がかかります。松井証券は同一国内受渡日中に返済・現引した場合、買方金利を無料と案内しています。各社で日数の数え方や端数処理を確認してください。' },
  { q: '米国株信用取引で空売りできる証券会社はどこですか？', a: 'この3社では楽天証券が売建に対応しています。DMM 株と松井証券は買建のみです。楽天証券の売建では通常年率2.0％の貸株料などがかかります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-12', dateModified: '2026-09-12', mainEntityOfPage: 'https://hanbaijo.com/articles/us-stock-margin-fee-comparison', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">US STOCK / MARGIN FEE COMPARISON</p>
    <h1>米国株信用取引の手数料を3社比較<br />金利・売建まで含めて選ぶ</h1>
    <p className="lede">DMM 株・松井証券・楽天証券の米国株信用取引を、通常条件の取引手数料、買方金利、売建対応で比較します。取引手数料は横並びですが、建玉を持ち越す日数と優遇条件によって総コストは変わります。</p>

    <div className="callout"><strong>結論：通常手数料は同じ。差が出るのは金利と取引方法</strong><p>3社とも通常の取引手数料は約定代金の0.33％、上限16.5ドルです。DMM 株は通常の買方金利が年率4.0％、松井証券は年率6.3％ながら同一国内受渡日中の返済・現引は金利無料、楽天証券は通常年率4.5％で売建にも対応しています。</p></div>

    <h2>米国株信用取引の手数料比較表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>証券会社</th><th>通常の取引手数料</th><th>買方金利</th><th>売建</th><th>主な優遇</th></tr></thead><tbody>
      <tr><td className="ex-name">DMM 株</td><td>約定代金×0.33％<br />上限16.5ドル</td><td><strong>年率4.0％</strong></td><td>非対応</td><td>条件達成で手数料0.165％、金利2.9％または2.0％</td></tr>
      <tr><td className="ex-name">松井証券</td><td>約定代金×0.33％<br />上限16.5ドル</td><td>年率6.3％</td><td>非対応</td><td><strong>同一国内受渡日中の返済・現引は金利無料</strong></td></tr>
      <tr><td className="ex-name">楽天証券</td><td>約定代金×0.33％<br />上限16.5ドル</td><td>通常 年率4.5％</td><td><strong>対応</strong><br />貸株料 通常年率2.0％</td><td>大口優遇で取引手数料0ドル、通常金利から0.5ポイント低下</td></tr>
    </tbody></table></div><p className="panel-note">2026年9月12日確認、税込。インターネット取引の一般信用・無期限を比較。3社とも約定代金3.33ドル以下は最低手数料0ドルです。SEC Feeなどの現地費用、指定銘柄、IFA、キャンペーンは除きます。金利・優遇条件は変更される場合があります。</p></div>

    <h2>1万ドルを30日保有した場合の概算</h2>
    <div className="formula-box"><code>総コスト ＝ 新規と返済の取引手数料 ＋ 建玉金額 × 年率 ÷ 365 × 日数</code><small>買建1万ドル、30日、通常条件、片道手数料は上限16.5ドルとして計算。</small></div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>証券会社</th><th>往復取引手数料</th><th>30日分の買方金利</th><th>概算合計</th></tr></thead><tbody>
      <tr><td className="ex-name">DMM 株</td><td>33.00ドル</td><td>約32.88ドル</td><td><strong>約65.88ドル</strong></td></tr>
      <tr><td className="ex-name">楽天証券</td><td>33.00ドル</td><td>約36.99ドル</td><td><strong>約69.99ドル</strong></td></tr>
      <tr><td className="ex-name">松井証券</td><td>33.00ドル</td><td>約51.78ドル</td><td><strong>約84.78ドル</strong></td></tr>
    </tbody></table></div><p className="panel-note">比較のための単純計算です。実際は国内受渡日を基準とする日数、両端入れ、端数処理、分割約定、金利変更等で異なります。為替コスト、SEC Fee、配当落調整額、税金は含みません。</p></div>
    <p>1万ドルでは約定代金の0.33％が33ドルとなるため、3社とも片道16.5ドルの上限が適用されます。30日保有すると、手数料の差ではなく買方金利の差が合計額に表れます。</p>

    <h2>DMM 株は持ち越しと優遇条件を確認</h2>
    <p>通常のゲストコースは買方金利が年率4.0％です。条件を満たすと、メンバーコースは取引手数料0.165％・買方金利2.9％、プレミアムコースは買方金利2.0％になります。優遇判定には入庫額、米ドル残高、平均建玉など複数の条件があるため、適用期間まで含めて確認します。</p>
    <p>DMM 株は一般信用・無期限の買建のみです。下落局面から始める売建はできません。通常金利を抑えて買建を持ち越したい場合や、優遇条件を継続して満たせる場合に比較しやすい設計です。</p>

    <h2>松井証券は日計りの買方金利が無料</h2>
    <p>通常の買方金利は年率6.3％ですが、新規建した建玉を同一国内受渡日中に返済または現引した場合は買方金利が無料です。日をまたいで保有するなら通常金利で比較し、日計りならこの例外を分けて考える必要があります。</p>
    <p>米国株信用は買建のみで、売建には対応していません。日計りを中心に使うのか、数日以上持ち越すのかで評価が変わります。</p>

    <h2>楽天証券は売建と大口優遇に対応</h2>
    <p>通常の買方金利は年率4.5％です。米国株大口優遇が適用されると、取引手数料は約定代金にかかわらず0ドル、買方金利は通常金利から0.5ポイント低くなります。通常条件と優遇条件を混ぜずに比較してください。</p>
    <p>3社のうち楽天証券は売建にも対応し、通常の貸株料は年率2.0％です。売建時や売返済時にはSEC Feeが別途かかります。銘柄ごとの売建可否や規制も注文前に確認が必要です。</p>

    <h2>保証金率は3社とも50％が基本</h2>
    <p>3社とも新規建て時の委託保証金率は50％、最低維持率は30％が基本です。1万ドルの建玉なら、単純計算で5,000ドル相当の保証金が出発点になります。株価下落や代用有価証券の値下がり、為替変動によって維持率が30％を下回ると追証が発生する可能性があります。</p>
    <div className="callout"><strong>手数料差より損失拡大の速さを先に確認</strong><p>米国株信用は最大約2倍の取引ができる一方、株価と為替が同時に動き、保証金を上回る損失が生じることがあります。上限手数料だけでなく、損切り水準と追証の入金期限まで決めてから発注します。</p></div>

    <h2>選び方を3つの取引パターンで整理</h2>
    <ul>
      <li><strong>買建を数日以上持ち越す：</strong>通常の買方金利と、達成できる優遇条件を比較する</li>
      <li><strong>同日中に返済する：</strong>松井証券の金利無料条件と、各社の取引手数料を比較する</li>
      <li><strong>下落局面で売建から始める：</strong>楽天証券の対象銘柄、貸株料、SEC Fee、取引規制を確認する</li>
    </ul>
    <p>「手数料0.33％」だけでは総コストを決められません。建玉金額、保有日数、買建・売建、優遇の達成可否を同じ条件にそろえて比較します。</p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/us/margin/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/service/us_vip/" target="_blank" rel="noopener noreferrer">DMM 株「プレミアムコース／メンバーコース」</a></li>
      <li><a href="https://www.matsui.co.jp/us-stock/margin/fee/" target="_blank" rel="noopener noreferrer">松井証券「米国株信用取引 手数料」</a></li>
      <li><a href="https://www.matsui.co.jp/us-stock/margin/rule/" target="_blank" rel="noopener noreferrer">松井証券「米国株信用取引 取引ルール」</a></li>
      <li><a href="https://www.rakuten-sec.co.jp/web/us/margin/commission.html" target="_blank" rel="noopener noreferrer">楽天証券「米国株式信用取引 手数料／金利／貸株料」</a></li>
      <li><a href="https://www.rakuten-sec.co.jp/web/us/margin/interest_rate.html" target="_blank" rel="noopener noreferrer">楽天証券「米国株式信用取引 適用金利」</a></li>
    </ul><p>料金と取引条件は2026年9月12日に確認しました。金利、優遇条件、対象銘柄、保証金規制は変わる可能性があるため、発注前に各社の最新公式情報を確認してください。</p></section>

    <p><Link href="/articles/dmm-kabu-us-margin-cost">DMM 株の米国株信用コストを詳しく見る →</Link></p>
    <p><Link href="/articles/dmm-kabu-us-margin-vip-courses">DMM 株の優遇コース条件を確認する →</Link></p>
    <p><Link href="/articles/us-stock-fee-comparison">米国株現物の手数料3社比較を見る →</Link></p>
    <p><Link href="/stocks">株式コスト比較のトップへ →</Link></p>
  </article>;
}
