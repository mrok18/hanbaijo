import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: '松井証券のFX専用口座とは？総合口座との違い・開設条件・切替方法',
  description: '松井証券のFX専用口座でできること、総合口座との違い、開設できる人、申込手順、FX専用口座から総合口座への切替方法を公式情報で整理します。',
  alternates: { canonical: '/articles/matsui-account-types' },
};

const ACCOUNT_TYPES = [
  {
    name: 'FX専用口座',
    products: 'MATSUI FX',
    application: 'FX専用の申込画面から開設',
    later: '他商品を取引する場合は書面で総合口座へ切替',
    fit: '当面はFXだけを利用する人',
  },
  {
    name: '松井証券口座（総合口座）',
    products: '日本株をはじめ、米国株・投資信託・FX・先物等への入口',
    application: '対象の関連口座を同時申込できる',
    later: 'FX、先物・オプション、NISA等を申込可能',
    fit: '複数の金融商品を一つの証券会社で管理したい人',
  },
] as const;

const FAQS = [
  {
    question: '松井証券のFX専用口座とは何ですか？',
    answer: 'MATSUI FXだけを取引できる個人向けの口座です。日本株、投資信託、NISA、先物などを取引するには、FX専用口座から総合口座への切替が必要です。',
  },
  {
    question: 'FX専用口座と総合口座の違いは何ですか？',
    answer: 'FX専用口座はMATSUI FXだけが対象です。総合口座は日本株などの基本口座で、米国株口座と投資信託口座が同時に開設され、NISA、信用取引、先物・オプション、FXなどの関連口座も申し込めます。',
  },
  {
    question: '松井証券のFX専用口座は誰でも開設できますか？',
    answer: '新しく松井証券に申し込む個人が対象です。法人、未成年者、すでに松井証券の総合口座を持っている人はFX専用口座を開設できません。既存の総合口座保有者は、総合口座からFX口座を追加します。',
  },
  {
    question: 'FX専用口座から総合口座へ切り替えられますか？',
    answer: '切替可能です。お客様サイトの「口座管理」から切替申込書を請求し、書面で手続きします。松井証券の案内では、総合口座への切替後もFX口座は引き続き利用できます。',
  },
] as const;

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-07',
    dateModified: '2026-09-13',
    mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-account-types',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <p className="page-kicker">MATSUI ACCOUNT GUIDE</p>
      <h1>松井証券のFX専用口座とは？<br />総合口座との違い・開設条件・切替方法</h1>
      <p className="lede">松井証券のFX専用口座とは、MATSUI FXだけを利用できる個人向け口座です。FXだけを始める人は申込先を絞れますが、日本株・投資信託・NISA・先物などを利用するには総合口座への切替が必要です。</p>
      <div className="callout"><strong>結論：FXだけなら専用口座、他商品も使うなら総合口座</strong><p>FX専用口座は新規の個人が対象です。株やNISAも使う予定があるなら、最初から総合口座とFX口座を同時に申し込むと、後日の書面による切替を省けます。</p></div>

      <h2>松井証券のFX専用口座でできること</h2>
      <p>FX専用口座で取引できる商品はMATSUI FXのみです。FX口座の機能や取引条件は利用できますが、総合口座を前提とする日本株などの取引はできません。</p>
      <ul>
        <li>対象商品：MATSUI FX</li>
        <li>申込対象：新しく松井証券に申し込む個人</li>
        <li>申込方法：口座開設画面で「FX専用口座」を選ぶ</li>
        <li>他商品を使う場合：書面で総合口座へ切り替える</li>
      </ul>

      <h2>松井証券の総合口座でできること</h2>
      <p>総合口座は、松井証券が提供する複数の商品・サービスを管理する土台です。公式の口座開設案内では、日本株、米国株、投資信託、NISA、FX、先物・オプションが取引可能なサービスとして示されています。</p>
      <p>ただし、総合口座の開設だけで全商品を無条件に取引できるわけではありません。FX、信用取引、先物・オプション、NISAなどは、総合口座と同時または開設後に商品別の口座を申し込み、必要な確認・審査を受けます。</p>

      <h2>取引できる商品の範囲が違う</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table matsui-account-table">
          <thead><tr><th>口座</th><th>主な対象</th><th>開設時</th><th>後から商品を増やす場合</th><th>考え方</th></tr></thead>
          <tbody>{ACCOUNT_TYPES.map((account) => (
            <tr key={account.name}>
              <td className="ex-name">{account.name}</td>
              <td>{account.products}</td>
              <td>{account.application}</td>
              <td>{account.later}</td>
              <td><small>{account.fit}</small></td>
            </tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">開設できる関連口座や同時申込の対象は、年齢、居住地、投資経験、申込方法などの基準で異なります。</p></div>

      <h2>FX専用口座を開設できる人・できない人</h2>
      <p>松井証券の案内では、FX専用口座は新規に口座開設する個人が対象です。法人、未成年者、すでに松井証券の総合口座を持っている人は申し込めません。</p>
      <p>すでに総合口座を持っている場合はFX専用口座を新設するのではなく、お客様サイトからFX口座を追加します。FX専用口座の申込時にはMATSUI Bankを同時申込できないため、必要なら専用口座の開設完了後に手続きします。</p>

      <h2>FX専用口座の開設手順</h2>
      <ol>
        <li>松井証券の口座開設画面で「FX専用口座」を選ぶ</li>
        <li>メールアドレスを登録し、届いた認証コードを入力する</li>
        <li>氏名・住所などの口座開設情報を入力する</li>
        <li>本人確認書類とマイナンバー確認書類を提出する</li>
        <li>開設完了後、案内されたログイン情報でFXお客様サイトへ入る</li>
      </ol>
      <p>スマートフォンのeKYCは、松井証券休業日を除き、申込内容や提出画像に不備がなければ最短即日の開設案内です。利用開始日は審査・申込状況で変わるため、即日を保証するものではありません。</p>

      <h2>FX専用口座から総合口座への切替方法</h2>
      <p>FX専用口座の開設後に日本株など他の商品を取引する場合は、総合口座への切替が必要です。松井証券の取引ルールでは、お客様サイトの「口座管理」→「書類請求・申込」から「切替申込書（FX専用→総合口座）」を請求し、書面で手続きすると案内されています。</p>
      <p>切替申込書には本人確認書類のコピー1点を添えて返送します。総合口座へ切り替えた後もFX口座は継続利用でき、ログインID・パスワード・取引暗証番号も変わりません。切替はFX口座を閉じる手続きではなく、利用できる商品の入口を広げる手続きです。</p>
      <p>切替時には投資信託口座と米国株口座が総合口座と同時に開設されます。NISA、信用取引、先物・オプション、米国株信用取引は、切替完了後に別途申し込みます。</p>

      <h2>総合口座では関連口座を同時に申し込める</h2>
      <p>オンラインの総合口座申込では、条件を満たせばNISA、信用取引、先物・オプション、FXなどの関連口座を同時に申し込めます。ただし、総合口座を開けば全商品が無条件で取引可能になるわけではなく、商品ごとの申込・審査があります。</p>

      <div className="formula-box"><code>FXだけを利用 → FX専用口座も選択肢<br />株・NISA・先物へ拡張 → 総合口座から各口座を申込</code><small>どちらが有利かではなく、利用予定の商品で選ぶ</small></div>

      <h2>料金は商品ごとに分けて確認する</h2>
      <p>同じ松井証券でも、FXはスプレッドとスワップ、日本株はボックスレート、米国株は売買手数料と為替コスト、先物は商品別手数料というように費用構造が異なります。口座をまとめることと、取引コストが共通になることは別です。</p>
      <ul>
        <li>FX：公称スプレッド、数量条件、スワップ、ロスカット</li>
        <li>日本株：1日の約定代金合計、年齢条件、現物・信用の区分</li>
        <li>米国株：売買手数料、為替コスト、現地費用</li>
        <li>先物：銘柄ごとの手数料、取引単位、必要証拠金</li>
      </ul>

      <h2>松井証券の総合口座に関するFAQ</h2>
      {FAQS.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。提携状況や報酬額を公称値・試算・掲載順位へ反映しません。</p></div>

      <section className="article-affiliate" aria-label="松井証券の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。口座の申込条件と取引リスクは公式サイトで確認してください。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.matsui.co.jp/service/account/" target="_blank" rel="noopener noreferrer">松井証券「口座・管理」</a></li>
          <li><a href="https://www.matsui.co.jp/apply/" target="_blank" rel="noopener noreferrer">松井証券「口座開設」</a></li>
          <li><a href="https://www.matsui.co.jp/apply/fx-account/" target="_blank" rel="noopener noreferrer">松井証券「FX専用口座開設完了までの流れ」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
          <li><a href="https://support.matsui.co.jp/faq/show/47571?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「FX専用口座から総合口座への切替方法」</a></li>
          <li><a href="https://support.matsui.co.jp/faq/show/47605?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「FX専用口座の開設方法」</a></li>
          <li><a href="https://support.matsui.co.jp/faq/show/48197?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「松井証券の口座開設方法を教えてください」</a></li>
        </ul>
        <p>口座の対象商品・開設条件・切替方法は2026年9月13日に確認しました。最新の申込条件は公式画面を確認してください。</p>
      </section>

      <p><Link href="/fx/matsui">MATSUI FXのコストシートを見る →</Link></p>
      <p><Link href="/articles/matsui-simultaneous-account-opening">総合口座と同時に申込める口座を見る →</Link></p>
      <p><Link href="/articles/matsui-fx-one-currency">1通貨の必要証拠金と損益を見る →</Link></p>
      <p><Link href="/stocks/matsui">松井証券の国内株手数料を見る →</Link></p>
    </article>
  );
}
