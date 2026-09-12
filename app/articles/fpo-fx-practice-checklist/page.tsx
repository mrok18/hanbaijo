import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fpo-fx-practice-checklist' },
  title: 'FPOのFX教材を読んだ後に確認する実践チェックリスト',
  description: 'FPOのFX投資マスターガイドで基礎を学んだ後、スプレッド、必要証拠金、損切り、取引記録、税務を実践前に確認するチェックリスト。',
};

const brokerChecks = [
  ['最小取引単位', '1通貨・100通貨・1,000通貨など', '計算した数量を実際に発注できるか'],
  ['スプレッド', '通常時・時間帯・数量条件', '表示値だけでなく適用条件を確認'],
  ['必要証拠金', 'レート・レバレッジ・通貨数', '余裕資金を残した数量にする'],
  ['ロスカット・追証', '判定率・判定時点・解消期限', '急変時に追加資金が必要になるか'],
  ['取引時間', '開始・終了・メンテナンス', '指値の有効期限や週末の扱い'],
] as const;

const faqs = [
  {
    q: 'FPOの教材を読めば利益が保証されますか？',
    a: '保証されません。教材は仕組みや考え方を学ぶための資料で、相場の損益や口座開設の適否を決める個別助言ではありません。',
  },
  {
    q: '実践前に最低限チェックする数字は何ですか？',
    a: '通貨ペア、取引単位、スプレッド、必要証拠金、損切り幅、1回の許容損失を同じ計算表に入れます。最後に取引記録の方法も決めます。',
  },
  {
    q: '少額で始めれば安全ですか？',
    a: '少額でも安全とは限りません。レバレッジ取引では急変やスリッページで想定以上の損失が生じるため、数量と損切りを先に決めます。',
  },
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: metadata.title,
        description: metadata.description,
        datePublished: '2026-09-09',
        dateModified: '2026-09-09',
        mainEntityOfPage: 'https://hanbaijo.com/articles/fpo-fx-practice-checklist',
        author: { '@type': 'Organization', name: '金融コストウォッチ' },
        publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">FPO / PRACTICE CHECKLIST</p>
    <h1>FPOのFX教材を読んだ後に確認する<br />実践チェックリスト</h1>
    <p className="lede">教材で仕組みを学んだら、次は自分の条件を数字にします。スプレッド、数量、必要証拠金、損切り、記録方法を先に決め、口座開設や売買を急がないためのチェックリストです。</p>

    <div className="callout"><strong>教材は判断材料。利益を保証するものではありません。</strong><p>FPOの公式資料はFXの仕組みや資金管理などを学ぶ教材です。教材を読んだことだけで利益が出るわけではなく、取引条件やリスクは各社の公式書面で確認します。相場急変時には証拠金を超える損失が生じる可能性もあります。</p></div>

    <h2>教材から実践へ進む5ステップ</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>順番</th><th>決めること</th><th>確認する理由</th></tr></thead><tbody>
      <tr><td className="ex-name">1</td><td>取引時間と通貨ペア</td><td>値動きが大きい時間帯・ニュース前後を把握する</td></tr>
      <tr><td className="ex-name">2</td><td>1回の許容損失</td><td>口座資金から先に上限を決め、数量を逆算する</td></tr>
      <tr><td className="ex-name">3</td><td>スプレッドと約定条件</td><td>表示値が適用される時間・数量・注文方法を確認する</td></tr>
      <tr><td className="ex-name">4</td><td>損切り・利確のルール</td><td>相場を見ながら数量や出口を変更しないために記録する</td></tr>
      <tr><td className="ex-name">5</td><td>取引記録と見直し日</td><td>結果だけでなくコスト・スリッページ・判断理由を残す</td></tr>
    </tbody></table></div></div>

    <h2>最初に数量を計算する</h2>
    <p>「必要証拠金いっぱいまで取引する」のではなく、損切りになったときの金額から数量を決めます。概算式は次のとおりです。</p>
    <div className="formula-box"><strong>1回の許容損失 ＝ 口座資金 × 許容率</strong><br /><strong>取引数量 ≒ 許容損失 ÷ 損切り幅（円）</strong></div>
    <p>たとえば口座資金30万円、許容率1％なら許容損失は3,000円です。米ドル円を損切り幅0.5円で考えると、スプレッドやスリッページを含める前の概算数量は6,000通貨になります。実際には取引単位に合わせて切り下げ、約定条件と余裕資金を加味します。</p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を計算する →</Link></p>

    <h2>実践前に確認するFX会社の条件</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>見る数字</th><th>見落としやすい点</th></tr></thead><tbody>
      {brokerChecks.map(([name, value, note]) => <tr key={name}><td className="ex-name">{name}</td><td>{value}</td><td>{note}</td></tr>)}
    </tbody></table></div></div>
    <p>スプレッドは狭さだけでなく、適用時間・数量上限・注文方式で比較します。公称値と実際の約定を混ぜずに、まずは自分の数量で試算してください。</p>
    <p><Link href="/tools/fx-spread-annual-cost-calculator">スプレッドの年間コスト差を計算する →</Link></p>
    <p><Link href="/articles/fx-company-selection-cost-checklist">FX会社を選ぶ7項目を確認する →</Link></p>

    <h2>取引記録に残す項目</h2>
    <p>勝ち負けだけでなく、後から再現できる情報を残します。日付、通貨ペア、売買、数量、エントリー・決済価格、表示スプレッド、約定価格との差、損切り・利確の根拠、結果、取引後の感想を一行ずつ記録します。</p>
    <div className="callout"><strong>過去の成功を将来の保証にしない</strong><p>バックテストや少数回の勝ち越しは、将来の成績を保証しません。相場環境・スプレッド・スリッページが変わったら、数量を再計算してから再開します。</p></div>

    <h2>税務と費用は年末に慌てない</h2>
    <p>決済損益だけでなく、スワップ、手数料、必要経費を口座ごとに記録します。国内FXの税区分や損失繰越は条件があるため、年間取引報告書を受け取ったら合計し、税務上の扱いを確認してください。</p>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">年間取引報告書の集計方法を見る →</Link></p>
    <p><Link href="/articles/fx-tax-deductible-expenses">FXの必要経費の判断基準を見る →</Link></p>

    <h2>よくある質問</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>質問</th><th>回答</th></tr></thead><tbody>
      {faqs.map(({ q, a }) => <tr key={q}><td className="ex-name">{q}</td><td>{a}</td></tr>)}
    </tbody></table></div></div>

    <section className="article-affiliate" aria-label="FPO FX投資マスターガイドの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['fpo-fx-guide']} />
      <p className="affiliate-disclosure">FPOへのA8.net広告リンクです。メール登録等の成果条件を満たすと当サイトが報酬を受け取る場合があります。教材の内容や追加商品の必要性は、広告報酬と分けて判断してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fpo.bz/masterguide/" target="_blank" rel="noopener noreferrer">FPO「FX投資マスターガイド」</a></li>
      <li><a href="https://www.fpo.bz/" target="_blank" rel="noopener noreferrer">株式会社FPO公式サイト</a></li>
      <li><a href="https://fpo.bz/contents/law/" target="_blank" rel="noopener noreferrer">株式会社FPO「金融商品取引法に基づく表示」</a></li>
      <li><a href="https://www.fpo.bz/master_guide/pdf/FX_Trading_Master_Guide_Full.pdf" target="_blank" rel="noopener noreferrer">FX投資マスターガイド（公式PDF）</a></li>
    </ul><p>公式ページと書面は2026年9月9日に確認しました。提供条件、取引条件、税制は変更される場合があるため、申込みや取引の前に最新情報を確認してください。</p></section>

    <p><Link href="/articles/fpo-fx-master-guide-before-download">FPO教材の登録前に確認する7項目 →</Link></p>
    <p><Link href="/fx">FXの比較・計算ガイドへ戻る →</Link></p>
  </article>;
}
