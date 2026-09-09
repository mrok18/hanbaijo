import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FXの確定申告をe-Taxで入力する順番｜先物取引・経費・繰越損失',
  description: '国内FXの確定申告について、年間取引報告書の準備から、確定申告書等作成コーナーの「先物取引」、必要経費、繰越損失、e-Tax送信までの順番を整理します。',
};

const inputRows = [
  ['種類', '外国為替証拠金取引', 'FX会社ごと、または案内に沿った単位で整理'],
  ['決済年月日', '年間取引報告書に基づく期間・日付', '個別取引を入力するか年間集計するかは当年画面を確認'],
  ['数量', '取引報告書等に基づく数量', '入力画面・明細書の指示に従う'],
  ['差金等決済の利益・損失', '確定した年間損益', '未決済評価損益と混同しない'],
  ['手数料等', '報告書の対象手数料', '利益額へ反映済みか確認'],
  ['その他の経費', '別途計上する必要経費', '名称・金額・根拠を保存'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-etax-input-guide',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <p className="page-kicker">FX TAX / E-TAX INPUT</p>
    <h1>FXの確定申告をe-Taxで入力する順番<br />先物取引・経費・繰越損失</h1>
    <p className="lede">国内の一定のFX収入は、作成コーナーで「雑所得（その他）」ではなく「先物取引」から入力します。先に全口座の損益と必要経費を集計しておくと、画面を行き来せず入力できます。</p>

    <div className="callout"><strong>国税庁の案内：申告する所得で「先物取引」を選択</strong><p>その後、「収入・所得の入力」画面の「先物取引に係る雑所得等」からFXの収入を入力します。画面名や配置は申告年分によって変わる場合があります。</p></div>

    <h2>入力前にそろえる資料</h2>
    <ol>
      <li>すべてのFX口座の年間取引報告書・年間損益報告書</li>
      <li>対象となるCFD・先物等の年間損益資料</li>
      <li>必要経費の明細、領収書、家事按分や減価償却の計算</li>
      <li>前年以前の申告書付表（繰越損失がある場合）</li>
      <li>給与の源泉徴収票など、FX以外の申告資料</li>
      <li>マイナンバーカードと対応スマートフォン等の送信環境</li>
    </ol>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">年間取引報告書の確認箇所を見る →</Link></p>

    <h2>作成コーナーでの入力順</h2>
    <ol>
      <li>申告する税目で所得税を選ぶ</li>
      <li>提出方法と本人確認方法を選ぶ</li>
      <li>給与など他の所得情報を入力・連携する</li>
      <li>「申告する所得の選択等」で「先物取引」を選ぶ</li>
      <li>「先物取引に係る雑所得等」へ年間損益と経費を入力する</li>
      <li>前年からの繰越損失があれば該当額を入力する</li>
      <li>控除、住民税等に関する事項、還付・納付情報を確認する</li>
      <li>作成された申告書・明細書・付表を確認して送信する</li>
    </ol>
    <p><small>2026年分の作成コーナーは公開後の画面案内を優先してください。この記事は、現在公開されている国税庁の案内に基づく準備順です。</small></p>

    <h2>先物取引の入力項目を準備する</h2>
    <div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>準備する内容</th><th>注意点</th></tr></thead><tbody>{inputRows.map(([item, value, caution]) => <tr key={item}><td>{item}</td><td>{value}</td><td>{caution}</td></tr>)}</tbody></table></div>

    <h2>複数口座は入力前に集計する</h2>
    <p>口座ごとの黒字だけを入力せず、同じ課税区分に属する全口座の年間損益を確認します。一定の国内CFD・先物等も同じ「先物取引に係る雑所得等」に含まれる場合があるため、商品名だけで除外しないでください。</p>
    <p><Link href="/articles/fx-profit-loss-offset-tax">FX・CFD・先物の損益通算範囲を見る →</Link></p>

    <h2>必要経費の二重計上を防ぐ</h2>
    <p>年間取引報告書の損益に取引手数料がすでに反映されている場合、同額を「手数料等」や「その他の経費」へ再入力すると二重計上になります。外部で支払ったVPS、情報サービス、書籍等は、FX収入との直接的な関係と私用分の区分を確認します。</p>
    <p><Link href="/articles/fx-tax-deductible-expenses">FXの必要経費と保存資料を確認 →</Link></p>

    <h2>繰越損失がある場合</h2>
    <p>前年以前に提出した「申告書付表（先物取引に係る繰越損失用）」の控えを用意し、年分ごとの残額を確認します。損失発生年から連続して申告していることが要件です。入力後に付表が正しく作成されているか確認します。</p>
    <p><Link href="/articles/fx-loss-carryforward-filing">損失発生年から3年間の手続きを見る →</Link></p>
    <p><Link href="/tools/fx-tax-calculator">繰越損失を反映した税額を試算する →</Link></p>

    <h2>送信後に保存するもの</h2>
    <ul>
      <li>送信した確定申告書のPDF</li>
      <li>先物取引に係る雑所得等の金額の計算明細書</li>
      <li>繰越損失用の申告書付表</li>
      <li>受信通知・受付結果</li>
      <li>入力に使った年間報告書と経費資料</li>
    </ul>

    <h2>出典と確認日</h2>
    <ul>
      <li><a href="https://www.keisan.nta.go.jp/r7yokuaru/cat2/cat21/cat21e/cid456.html" rel="noreferrer">国税庁「外国為替証拠金取引（FX）による収入がある場合」</a></li>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" rel="noreferrer">国税庁 No.1522「先物取引に係る雑所得等の課税の特例」</a></li>
      <li><a href="https://www.e-tax.nta.go.jp/toiawase/faq/zizen/02.htm" rel="noreferrer">e-Tax「作成コーナーで確定申告するために準備しておくべきこと」</a></li>
      <li><a href="https://www.nta.go.jp/taxes/shiraberu/shinkoku/syotoku/r07.htm" rel="noreferrer">国税庁「令和7年分 確定申告書等の様式・手引き等」</a></li>
    </ul>
    <p><small>確認日：2026年9月9日。2026年分の画面・様式・入力項目は公表後に最新案内を確認してください。個別の申告判断は税務署または税理士へ確認してください。</small></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
