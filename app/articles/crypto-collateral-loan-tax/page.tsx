import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/crypto-collateral-loan-tax' },
  title: '暗号資産担保ローンの税金｜借入・返済・担保売却の確認ポイント',
  description: '暗号資産担保ローンで確認したい税務上の論点を、借入時・返済時・担保売却時に分けて整理。国税庁の暗号資産資料と税制改正の注意点も案内します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-11', dateModified: '2026-09-11',
    mainEntityOfPage: 'https://hanbaijo.com/articles/crypto-collateral-loan-tax',
    author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: '暗号資産担保ローンで借り入れただけなら課税されますか？', acceptedAnswer: { '@type': 'Answer', text: '借入だけで利益が確定するとは限りませんが、契約形態や担保の移転・売却の有無で扱いが変わり得ます。利用規約と明細を確認してください。' } },
      { '@type': 'Question', name: '担保が強制決済された場合は何を保存しますか？', acceptedAnswer: { '@type': 'Answer', text: '売却数量、約定価格、手数料、日時、取得価額を保存し、売却による損益を確認できるようにします。' } },
      { '@type': 'Question', name: '税制改正の20％を現在の取引に適用できますか？', acceptedAnswer: { '@type': 'Answer', text: '適用開始日と対象取引が確定するまでは、将来の改正方針を現在の申告へ遡って適用しないでください。' } },
    ],
  };
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    <p className="page-kicker">CRYPTO COLLATERAL / TAX</p>
    <h1>暗号資産担保ローンの税金<br />借入・返済・担保売却を整理</h1>
    <p className="lede">暗号資産を売却せずに借り入れるサービスでも、担保の移転や強制決済が起きると税務確認が必要になる場合があります。借入だけで利益が確定するとは限らない一方、契約と取引履歴を分けて保存することが重要です。</p>
    <div className="callout"><strong>借入金と暗号資産の損益は別に記録する</strong><p>借入額、利息、担保評価額、返済額、担保売却の有無を同じ明細で管理し、サービスの年間報告書だけに頼らないようにします。</p></div>
    <h2>場面別に確認すること</h2>
    <div className="table-scroll"><table className="rates"><thead><tr><th>場面</th><th>記録する項目</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td>借入時</td><td>借入額、通貨、手数料、契約日</td><td>担保を移転する契約か、単なる預託か</td></tr>
      <tr><td>返済時</td><td>元本、利息、返済通貨、決済日</td><td>利息の扱いと返済時の為替・暗号資産レート</td></tr>
      <tr><td>追加担保</td><td>入庫数量、取得価額、送付手数料</td><td>銘柄ごとの取得価額を別々に管理</td></tr>
      <tr><td>強制決済</td><td>売却数量、約定価格、手数料、日時</td><td>売却による損益計算の資料を保存</td></tr>
    </tbody></table></div>
    <h2>「借りただけなら非課税」と決めつけない</h2>
    <p>暗号資産を担保にした借入の税務上の扱いは、契約形態、所有権の移転、担保の売却・交換の有無で変わり得ます。サービス名だけで判断せず、利用規約と取引明細を確認してください。担保が自動売却された場合は、売却時点の価格と取得価額を確認できるようにします。</p>
    <h2>税制改正の情報は適用日を確認</h2>
    <p>暗号資産の税制改正は、対象となる暗号資産・取引・適用開始日が決まってから実務が確定します。現在の制度で申告すべき年分に、将来の改正方針を遡って適用しないよう注意が必要です。</p>
    <p><Link href="/articles/crypto-tax-reform-start-date">暗号資産の分離課税はいつから？税制改正の整理 →</Link></p>
    <h2>申告前にそろえる資料</h2>
    <ol><li>借入契約書・利用規約・手数料表</li><li>入出庫・返済・利息の明細</li><li>担保評価額と強制決済の通知</li><li>暗号資産の取得価額・売却履歴</li></ol>
    <h2>よくある質問</h2>
    <h3>暗号資産担保ローンで借り入れただけなら課税されますか？</h3><p>借入だけで利益が確定するとは限りませんが、契約形態や担保の移転・売却の有無で扱いが変わり得ます。利用規約と明細を確認してください。</p>
    <h3>担保が強制決済された場合は何を保存しますか？</h3><p>売却数量、約定価格、手数料、日時、取得価額を保存し、売却による損益を確認できるようにします。</p>
    <h3>税制改正の20％を現在の取引に適用できますか？</h3><p>適用開始日と対象取引が確定するまでは、将来の改正方針を現在の申告へ遡って適用しないでください。</p>
    <h2>関連ツールと確認記事</h2>
    <p><Link href="/tools/crypto-collateral-ltv-calculator">担保余力をLTVで試算する →</Link>　<Link href="/articles/crypto-collateral-loan-risk-checklist">担保ローンのリスク確認項目 →</Link></p>
    <section className="article-affiliate" aria-label="暗号資産担保ローンの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['digital-asset-loan']} /><p className="affiliate-disclosure">暗号資産担保ローンへの広告リンクです。広告の有無や報酬額は、記事の内容・評価に影響しません。</p></section>
    <h2>出典</h2>
    <ul><li><a href="https://www.nta.go.jp/publication/pamph/shotoku/kakuteishinkokukankei/kasoutuka/" rel="noreferrer">国税庁「暗号資産等に関する税務上の取扱い」</a></li><li><a href="https://www.fsa.go.jp/singi/singi_kinyu/angoshisanseido_wg/gijishidai/20251107/02.pdf" rel="noreferrer">金融庁「暗号資産制度に関する資料」</a></li></ul>
    <p><small>確認日：2026年9月11日。本記事は一般的な情報提供であり、個別の税務判断は税理士・税務署へご確認ください。</small></p>
    <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
  </article>;
}
