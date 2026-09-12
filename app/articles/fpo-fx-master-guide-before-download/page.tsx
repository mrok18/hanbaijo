import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fpo-fx-master-guide-before-download' },
  title: 'FPO FX投資マスターガイドは無料？登録前に確認する7項目',
  description: 'FPOの無料電子書籍「FX投資マスターガイド」について、全128ページの収録範囲、受取方法、メール登録、追加案内、投資リスクを確認します。',
};

const checks = [
  ['価格', 'キャンペーン内では無料と案内', '申込画面で最終確認'],
  ['形式', '図解オールカラー・全128ページの電子書籍', '紙の書籍ではない'],
  ['受取方法', '登録後、ダウンロードURLをメール送付', 'メールアドレスの入力が必要'],
  ['学習範囲', 'FXの仕組みから経済・注文・チャート・資金管理まで', '取引ツールの操作書ではない'],
  ['追加案内', 'FPOの書籍・DVD・セミナー等を案内する場合がある', '必要性を都度判断'],
  ['利益保証', 'なし', '教材を読んでも損失は起こり得る'],
  ['提供会社', '株式会社FPO', '近畿財務局長（金商）第300号'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-09',
    dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fpo-fx-master-guide-before-download',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">FX LEARNING / FREE E-BOOK</p>
    <h1>FPO FX投資マスターガイドは無料？<br />登録前に確認する7項目</h1>
    <p className="lede">「無料」だけで判断せず、何を学べるか、何を登録するか、その後にどんな案内があり得るかまで確認します。教材は知識を補う手段であり、利益を保証するものではありません。</p>

    <h2>結論：教材代は無料、メール登録が必要</h2>
    <p>FPOの公式ページは、FX投資マスターガイドをキャンペーン内で無料提供すると案内しています。登録後、ダウンロードURLが記載されたメールを受け取る方式です。つまり、0円で閲覧できますが、匿名で直接PDFを取得する仕組みではありません。</p>
    <div className="callout"><strong>無料教材と、その後の有料商品は分けて判断</strong><p>FPOは無料企画をきっかけに、将来必要になった場合は書籍・DVD・セミナーを検討してほしいと説明しています。追加案内が届いた場合も、価格、契約期間、解約・返金条件を別途確認してください。</p></div>

    <h2>登録前の7項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>公式案内</th><th>判断ポイント</th></tr></thead><tbody>
      {checks.map(([name, fact, point]) => <tr key={name}><td className="ex-name">{name}</td><td>{fact}</td><td>{point}</td></tr>)}
    </tbody></table></div></div>

    <h2>全9章で扱う内容</h2>
    <p>公式の広告素材とランディングページでは、外国為替市場とFXの仕組み、口座選び、経済・金利・為替の関係、経済情報の確認方法、注文などの取引基礎、チャート分析、通貨ペア、マネーマネジメントを扱うと案内しています。</p>
    <p>当サイトの見方では、特に「口座選び」と「資金管理」を先に読むのが実務的です。取引手数料0円でもスプレッドやスリッページは残り、必要証拠金だけ入金すると相場変動への余裕が小さくなるためです。</p>
    <p><Link href="/articles/fx-spread-cost">スプレッドを取引数量ごとの円に直す →</Link></p>
    <p><Link href="/articles/fx-required-margin">必要証拠金と取引金額の違いを見る →</Link></p>
    <p><Link href="/articles/fx-master-guide-study-order">全9章を5段階で読む学習順を見る →</Link></p>
    <p><Link href="/articles/fpo-fx-practice-checklist">教材を読んだ後の実践前チェックを見る →</Link></p>

    <h2>教材を読んだ後に数字で確かめる</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>学んだ項目</th><th>次に確認する数字</th><th>当サイトの機能</th></tr></thead><tbody>
      <tr><td className="ex-name">スプレッド</td><td>数量・回数ごとの円負担</td><td><Link href="/tools/cost-calculator">FXコスト計算機</Link></td></tr>
      <tr><td className="ex-name">資金管理</td><td>損切りまでの想定損失</td><td><Link href="/tools/fx-position-size-calculator">ポジションサイズ計算機</Link></td></tr>
      <tr><td className="ex-name">値幅と損益</td><td>1pipあたりの円損益</td><td><Link href="/tools/fx-pip-value-calculator">pip損益計算機</Link></td></tr>
      <tr><td className="ex-name">損益分岐</td><td>コスト回収に必要な値幅</td><td><Link href="/tools/trading-break-even-calculator">損益分岐計算機</Link></td></tr>
    </tbody></table></div></div>

    <h2>登録しない方がよい場合</h2>
    <p>メールアドレスを登録したくない人、無料教材から商品案内へつながる可能性を避けたい人、教材を読めば利益が保証されると期待している人には合いません。FXは証拠金取引で、相場急変時には預けた資金を超える損失が発生する場合もあります。</p>
    <p>登録する場合は、まず基礎確認に使い、個別の売買判断は公式の契約締結前交付書面、取引ルール、自分の許容損失から決めてください。</p>

    <section className="article-affiliate" aria-label="FPO FX投資マスターガイドの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['fpo-fx-guide']} />
      <p className="affiliate-disclosure">FPOへのA8.net広告リンクです。メール登録等の成果条件を満たすと当サイトが報酬を受け取る場合があります。教材の内容や追加商品の必要性は、広告報酬と分けて判断してください。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fpo.bz/masterguide/" target="_blank" rel="noopener noreferrer">FPO「FX投資マスターガイド無料提供中！」</a></li>
      <li><a href="https://fpo.bz/contents/company/" target="_blank" rel="noopener noreferrer">株式会社FPO「会社概要」</a></li>
      <li><a href="https://fpo.bz/contents/law/" target="_blank" rel="noopener noreferrer">株式会社FPO「金融商品取引法に基づく表示」</a></li>
    </ul><p>提供条件と会社情報は2026年9月9日に公式ページおよびA8.net提携管理画面で確認しました。キャンペーン内容は変更・終了する場合があります。</p></section>

    <p><Link href="/fx">FXの比較・計算ガイドへ戻る →</Link></p>
  </article>;
}
