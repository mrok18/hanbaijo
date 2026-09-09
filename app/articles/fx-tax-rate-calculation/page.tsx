import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '国内FXの税率は20.315％？所得税・住民税の計算方法',
  description: '国内FXの申告分離課税を、所得税15％、復興特別所得税、地方稅5％に分け、必要経費・損益通算後の課税所得から税額を試算します。',
};

const examples = [
  ['10万円', '15,000円', '315円', '5,000円', '20,315円'],
  ['20万円', '30,000円', '630円', '10,000円', '40,630円'],
  ['50万円', '75,000円', '1,575円', '25,000円', '101,575円'],
  ['100万円', '150,000円', '3,150円', '50,000円', '203,150円'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-tax-rate-calculation',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX TAX / RATE CALCULATION</p>
      <h1>国内FXの税率は20.315％？<br />所得税・住民税の計算方法</h1>
      <p className="lede">
        国内の一定のFX取引による所得は、給与などと分けて計算する申告分離課税です。
        「利益×20.315％」と即断せず、確定損益、必要経費、通算できる損失、繰越損失を整理してから税率をかけます。
      </p>
      <p><Link href="/tools/fx-tax-calculator"><strong>国内FX税金計算シミュレーターを使う →</strong></Link></p>

      <div className="callout">
        <strong>2026年分の基本的な合計税率は20.315％</strong>
        <p>所得税15％＋復興特別所得税0.315％相当＋地方税5％です。実際の申告では端数処理等により単純乗算と差が出る場合があります。</p>
      </div>

      <h2>20.315％の内訳</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>税目</th><th>計算</th><th>課税所得に対する割合</th></tr></thead>
          <tbody>
            <tr><td>所得税</td><td>課税所得×15％</td><td>15％</td></tr>
            <tr><td>復興特別所得税</td><td>基準所得税額×2.1％</td><td>0.315％相当</td></tr>
            <tr><td>地方税</td><td>課税所得×5％</td><td>5％</td></tr>
            <tr><td><strong>合計</strong></td><td>—</td><td><strong>20.315％</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p><small>復興特別所得税は、「課税所得の2.1％」ではなく、基準となる所得税額の2.1％です。15％×2.1％＝0.315％相当となります。</small></p>

      <h2>税金をかける前の所得を求める</h2>
      <p><strong>FXの所得 ＝ 差金等決済による年間損益 − 必要経費</strong></p>
      <p>
        まず各FX会社の年間取引報告書を集め、対象となるCFD・先物などの損益を通算します。
        その後、報告書に反映されていない必要経費と、前年以前から利用できる繰越損失を確認します。
      </p>
      <p><Link href="/articles/fx-annual-transaction-report-tax-return">年間取引報告書の集計方法 →</Link></p>

      <h2>課税所得別の税額目安</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>FXの課税所得</th><th>所得税15％</th><th>復興特別所得税</th><th>地方稅5％</th><th>合計目安</th></tr></thead>
          <tbody>{examples.map(([income, national, reconstruction, local, total]) => (
            <tr key={income}><td>{income}</td><td>{national}</td><td>{reconstruction}</td><td>{local}</td><td><strong>{total}</strong></td></tr>
          ))}</tbody>
        </table>
      </div>
      <p><small>税率の理解用に単純計算した目安です。実際の税額は申告書上の計算・端数処理に従ってください。</small></p>

      <h2>100万円の利益で経費10万円の例</h2>
      <ol>
        <li>確定した年間利益：1,000,000円</li>
        <li>別途計上できる必要経費：100,000円</li>
        <li>FXの所得：900,000円</li>
        <li>税額の概算：900,000円×20.315％＝182,835円</li>
      </ol>
      <p>
        ただし、必要経費はFX収入との直接的な関係が必要です。年間報告書へ反映済みの取引手数料などを再度差し引かないようにします。
      </p>
      <p><Link href="/articles/fx-tax-deductible-expenses">PC・通信費・VPSなどの必要経費 →</Link></p>

      <h2>給与の所得税率はFXの税率を変えない</h2>
      <p>
        申告分離課税の対象となる国内FX所得は、給与などの総合課税の所得と分けて税額を計算します。
        給与が増えたからFXの税率が累進的に上がるわけではありません。ただし、確定申告の必要性や所得控除などの判定は、他の所得も含めて確認します。
      </p>
      <p><Link href="/articles/fx-profit-under-200k-tax-return">FX所得20万円以下の申告条件 →</Link></p>

      <h2>損失がある場合</h2>
      <p>
        一定の国内FXの損失は、同じ「先物取引に係る雑所得等」に属する取引の利益と通算できます。
        それでも残る損失は、所定の申告を連続して行うことで翌年以後3年間繰り越せる場合があります。
      </p>
      <p><Link href="/articles/fx-profit-loss-offset-tax">FX・CFD・先物の損益通算を確認 →</Link></p>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1521.htm" rel="noreferrer">国税庁 No.1521「外国為替証拠金取引（FX）の課税関係」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" rel="noreferrer">国税庁 No.1522「先物取引に係る雑所得等の課税の特例」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/shinkoku/annai/1557_2.htm" rel="noreferrer">国税庁「申告書・申告書付表と税額計算書等」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。本記事は2026年分の一般的な計算を整理したもので、個別の税務助言ではありません。最新の申告案内と自身の状況を確認してください。</small></p>
      <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
    </article>
  );
}
