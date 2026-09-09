import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FX利益20万円以下なら確定申告は不要？住民税・還付申告の注意',
  description: '会社員のFX所得が20万円以下の場合に所得税の確定申告が不要になる条件と、住民税、還付申告、損失繰越の注意点を整理します。',
};

const cases = [
  ['1か所の給与・年末調整済み', '給与と退職以外の所得合計が20万円以下', '所得税の確定申告が原則不要となる場合あり'],
  ['給与収入が2,000万円超', '利益額だけでは判定しない', '通常は確定申告が必要'],
  ['医療費控除などで還付申告', '20万円以下の所得も含める', 'FX所得の記載を省略できない'],
  ['FX損失を3年繰り越したい', '損失発生年から所定の申告', '申告不要でも手続きが必要'],
  ['所得税の申告が不要', '住民税は別判定', '市区町村で申告が必要な場合あり'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-profit-under-200k-tax-return',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX TAX / 200,000 YEN RULE</p>
      <h1>FX利益20万円以下なら<br />確定申告は不要？</h1>
      <p className="lede">
        「20万円以下なら何も申告しなくてよい」とは限りません。これは一定の給与所得者に対する所得税の確定申告不要制度で、
        住民税や還付申告、損失繰越は別に確認が必要です。
      </p>

      <div className="callout">
        <strong>20万円は「FXの利益だけ」で判定しない</strong>
        <p>原則として、給与所得と退職所得以外の所得金額を合計して判定します。「収入」ではなく、必要経費などを反映した「所得」です。</p>
      </div>

      <h2>所得税の申告が不要となり得る条件</h2>
      <p>
        国税庁は、給与収入2,000万円以下、1か所から給与を受け、源泉徴収・年末調整が行われている給与所得者について、
        給与所得と退職所得以外の所得金額の合計が20万円以下なら、原則として所得税の確定申告を要しないと案内しています。
        副業の所得などがある場合は、FXと合わせて確認します。
      </p>

      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>ケース</th><th>判定の要点</th><th>結論</th></tr></thead>
          <tbody>{cases.map(([name, point, result]) => <tr key={name}><td>{name}</td><td>{point}</td><td>{result}</td></tr>)}</tbody>
        </table>
      </div>

      <h2>「利益20万円」ではなく「所得20万円」</h2>
      <p>
        FXの申告対象額は、原則としてその年に確定した差金等決済損益を基に、対象となる手数料や必要経費を反映して確認します。
        未決済ポジションの評価益は、通常は年間取引報告書の確定損益と分けて扱います。
      </p>
      <p><Link href="/articles/fx-tax-deductible-expenses">FXの必要経費の判断基準を見る →</Link></p>

      <h2>還付申告をするなら20万円以下も記載</h2>
      <p>
        医療費控除、寄附金控除、住宅ローン控除の初年度などを理由に確定申告を行う場合、
        20万円以下だからといってFX所得だけを除外できません。国税庁は、確定申告を行う場合は20万円以下の所得も併せて申告する必要があると示しています。
      </p>

      <h2>住民税は別に申告が必要な場合がある</h2>
      <p>
        20万円以下の制度は所得税の確定申告に関するものです。国税庁も、所得税の確定申告が不要でも住民税の申告が必要な場合があると注意喚起しています。
        手続きや期限は居住地の市区町村に確認します。
      </p>

      <h2>損失繰越を使うなら「申告不要」でも申告</h2>
      <p>
        一定の国内FXなどの損失は、手続要件を満たせば翌年以後3年間繰り越せます。損失の年に確定申告し、その後も連続して所定の申告を行うことが必要です。
        目先の納税額がないことと、将来の繰越控除を保つ手続きは分けて考えます。
      </p>
      <p><Link href="/articles/fx-profit-loss-offset-tax">FXの損益通算と3年繰越を確認 →</Link></p>

      <h2>年末の確認手順</h2>
      <ol>
        <li>全FX口座の年間取引報告書を集める</li>
        <li>対象となるCFD・先物などと損益通算する</li>
        <li>必要経費と、報告書へ反映済みの費用を分ける</li>
        <li>副業など給与・退職以外の所得も集計する</li>
        <li>所得税、住民税、損失繰越の必要手続きを別々に確認する</li>
      </ol>
      <p><Link href="/articles/fx-annual-transaction-report-tax-return">年間取引報告書の集計手順を見る →</Link></p>
      <p><Link href="/articles/fx-tax-rate-calculation">国内FXの税率20.315％の計算方法 →</Link></p>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900_qa.htm" rel="noreferrer">国税庁 No.1900「確定申告を要しない場合の意義」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" rel="noreferrer">国税庁 No.1522「先物取引に係る雑所得等の課税の特例」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/shinkoku-nagare/shinkoku-nagare.htm" rel="noreferrer">国税庁「申告が必要かなどを調べる」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。申告要否は給与の状況、他の所得、控除、居住地により異なります。個別の判断は税務署、市区町村または税理士へ確認してください。</small></p>
      <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
    </article>
  );
}
