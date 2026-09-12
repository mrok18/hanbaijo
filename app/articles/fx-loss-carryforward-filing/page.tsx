import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/fx-loss-carryforward-filing' },
  title: 'FX損失を3年繰り越す確定申告｜取引しない年も必要？',
  description: '国内FX等の損失繰越について、損失が出た年、利益が出た年、取引しない年に必要な申告と、計算明細書・申告書付表を時系列で整理します。',
};

const timeline = [
  ['2026年', '60万円の損失', '損失発生年の申告', '60万円を翌年へ'],
  ['2027年', '20万円の利益', '繰越損失を控除して申告', '40万円を翌年へ'],
  ['2028年', '対象取引なし', '付表を添えて連続申告', '40万円を翌年へ'],
  ['2029年', '50万円の利益', '残る40万円を控除して申告', '課税対象の概算10万円'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-loss-carryforward-filing',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <p className="page-kicker">FX TAX / LOSS CARRYFORWARD</p>
    <h1>FX損失を3年繰り越す確定申告<br />取引しない年も必要？</h1>
    <p className="lede">国内の一定のFX・CFD・先物で生じた損失は、要件を満たせば翌年以後3年間繰り越せます。重要なのは、損失が出た最初の年に申告し、その後も必要書類を付けて連続して申告することです。</p>

    <div className="callout"><strong>取引がない年も、繰越を残すなら申告を続ける</strong><p>国税庁は、損失発生年に所定の明細書・付表を添付して申告し、その後も連続して付表を添付した確定申告書を提出することを要件としています。</p></div>

    <h2>3年間とはいつまでか</h2>
    <p>2026年中に生じた対象損失は、2027年・2028年・2029年の対象所得から、各年の所得額を限度として順に控除できます。3年間は損失が生じた年を含む3年ではなく、その翌年以後の3年間です。</p>
    <div className="table-scroll"><table className="rates"><thead><tr><th>年</th><th>対象損益の例</th><th>行うこと</th><th>繰越・課税の例</th></tr></thead><tbody>{timeline.map(([year, pnl, filing, result]) => <tr key={year}><td>{year}</td><td>{pnl}</td><td>{filing}</td><td>{result}</td></tr>)}</tbody></table></div>
    <p><small>必要経費や他の対象取引との損益通算を反映する前の単純例です。年ごとの申告状況や個別条件で結果は変わります。</small></p>

    <h2>損失が出た年に用意するもの</h2>
    <ol>
      <li>各社の年間取引報告書・年間損益報告書</li>
      <li>先物取引に係る雑所得等の金額の計算明細書</li>
      <li>申告書付表（先物取引に係る繰越損失用）</li>
      <li>確定申告書の該当表</li>
      <li>必要経費を計上する場合の領収書と計算記録</li>
    </ol>
    <p>確定申告書等作成コーナーでは、先物取引の入力内容から必要な明細書・付表を作成できます。提出後は申告書、計算明細書、付表の控えを年ごとに保存します。</p>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">年間取引報告書の集計方法を見る →</Link></p>

    <h2>翌年に利益が出た場合</h2>
    <p>前年から繰り越した損失を、その年の「先物取引に係る雑所得等」の黒字を限度に控除します。損失残高が利益より多ければ、使い切れなかった部分を期限内で翌年へ繰り越します。</p>
    <p><Link href="/tools/fx-tax-calculator">繰越損失を反映して税額を試算する →</Link></p>

    <h2>取引も利益もない年</h2>
    <p>前年からの繰越損失を翌年以後へ残したい場合、取引がない年も申告を飛ばさず、繰越損失用の付表を添付して確定申告を続けます。「利益がないから申告不要」と判断して連続性を切らないようにします。</p>

    <h2>同じ年の損益を先に通算する</h2>
    <p>複数の国内FX口座や、同じ課税区分に入る一定のCFD・先物取引がある場合、まず同年分の利益と損失を集計します。それでも残った赤字が、翌年以後へ繰り越す損失です。株式や暗号資産、申告分離課税の対象外となる取引とは同じ枠で通算できません。</p>
    <p><Link href="/articles/fx-profit-loss-offset-tax">FXの損益通算対象を商品別に確認 →</Link></p>

    <h2>20万円以下でも繰越には申告が必要</h2>
    <p>一定の給与所得者に対する20万円以下の確定申告不要制度と、損失繰越の適用手続きは別です。将来の利益から損失を控除したいなら、納税額が発生しない年でも所定の申告を行います。</p>
    <p><Link href="/articles/fx-profit-under-200k-tax-return">20万円以下の所得税・住民税の申告条件 →</Link></p>

    <h2>出典と確認日</h2>
    <ul>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1523.htm" rel="noreferrer">国税庁 No.1523「先物取引の差金等決済に係る損失の繰越控除」</a></li>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" rel="noreferrer">国税庁 No.1522「先物取引に係る雑所得等の課税の特例」</a></li>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/shinkoku/syotoku/r07.htm" rel="noreferrer">国税庁「令和7年分 確定申告書等の様式・手引き等」</a></li>
    </ul>
    <p><small>確認日：2026年9月9日。2026年分の申告様式は公表後に最新資料を確認してください。期限後申告など個別事情がある場合は税務署または税理士へ確認してください。</small></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
