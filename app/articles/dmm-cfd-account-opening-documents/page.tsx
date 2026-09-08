import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDの口座開設に必要なもの｜本人確認・審査・開始まで',
  description: 'DMM CFDの口座開設に必要な本人確認書類とマイナンバー、申込みから審査・取引開始までの流れ、提出方法による違いを整理します。',
};

const faq = [
  { q: 'DMM CFDはマイナンバーカードだけで申込みできますか？', a: 'スマホアプリでマイナンバーカードを読み取る方法なら、カード1点で本人確認とマイナンバー確認を行えます。端末やカードの利用条件を事前に確認してください。' },
  { q: 'DMM CFDは申込当日に取引できますか？', a: '必要書類を提出し、スマホでの本人確認を利用して審査が完了すれば、最短で申込当日に開始できると案内されています。土日は審査手続きを行っておらず、申込内容や不備によって時間がかかります。' },
  { q: '審査が終わる前に入金できますか？', a: '取引開始は審査完了後にログイン情報を確認し、取引アカウントへ入金してからです。申込みと本人確認を先に完了させます。' },
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-cfd-account-opening-documents', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
      { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
    ],
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM CFD / ACCOUNT OPENING</p>
    <h1>DMM CFDの口座開設に必要なもの<br />本人確認から取引開始まで</h1>
    <p className="lede">申込み前に確認したいのは、本人確認とマイナンバー確認の組合せ、審査後のログイン情報の受取り方です。提出方法によって、取引開始までの経路が変わります。</p>

    <div className="callout"><strong>最短経路はスマホアプリでのカード読取り</strong><p>スマホアプリ「DMM CFD」でマイナンバーカードを読み取る方法なら、カード1点で提出できます。審査完了後はWeb上でログインIDと初期パスワードを確認できます。</p></div>

    <h2>申込みから開始までの4段階</h2>
    <div className="fx-metric-grid">
      <article><b>STEP 01</b><h3>提出方法を選ぶ</h3><p>アプリのカード読取り、スマホでスピード本人確認、画像のアップロード・メールから選びます。</p></article>
      <article><b>STEP 02</b><h3>必要事項を入力</h3><p>氏名、住所、職業、投資経験など、申込フォームの質問へ正確に回答します。</p></article>
      <article><b>STEP 03</b><h3>登録審査</h3><p>本人確認書類とマイナンバー確認書類の到着後に審査されます。結果によって登録できない場合があります。</p></article>
      <article><b>STEP 04</b><h3>認証・入金</h3><p>ログイン情報を受け取り、初期設定と入金を済ませてから取引を開始します。</p></article>
    </div>

    <h2>提出方法別の必要書類</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>提出方法</th><th>主な書類の組合せ</th><th>審査後の受取り</th></tr></thead><tbody>
      <tr><td className="ex-name">アプリでカード読取り</td><td>マイナンバーカード1点</td><td>本人認証後、Webでログイン情報を表示</td></tr>
      <tr><td className="ex-name">スマホでスピード本人確認</td><td>マイナンバーカード、または運転免許証等＋番号確認書類</td><td>本人認証後、Webでログイン情報を表示</td></tr>
      <tr><td className="ex-name">アップロード・メール</td><td>番号確認書類と本人確認書類の指定組合せ</td><td>登録住所へ簡易書留で通知</td></tr>
    </tbody></table></div></div>
    <p>顔写真なし書類を使う場合など、必要点数は組合せによって変わります。有効期限、現住所、氏名の一致を確認し、最新の公式書類一覧を優先してください。</p>

    <h2>最短即日は保証ではない</h2>
    <p>公式FAQは、必要書類を提出しスマホ経由の本人確認で審査が完了した場合、最短で申込当日に取引開始できると案内しています。一方、土日は審査手続きを行っておらず、申込内容や書類不備によって時間がかかります。</p>
    <div className="callout"><strong>郵送受取りでは開始日が後ろへずれる</strong><p>アップロード・メール提出で登録が完了した場合、ログイン情報は簡易書留で発送されます。受取り後に利用を開始できます。</p></div>

    <h2>申込み前のチェックリスト</h2>
    <ul>
      <li>本人確認書類の氏名・住所が申込内容と一致している</li>
      <li>マイナンバー確認書類を用意している</li>
      <li>審査結果のメールを受け取れる設定になっている</li>
      <li>CFDのレバレッジ、追証、ロスカットを理解している</li>
      <li>必要証拠金だけでなく、逆行時の余力も計算している</li>
    </ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/cfd/" target="_blank" rel="noopener noreferrer">DMM CFD「アカウント登録までの流れ」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00031/" target="_blank" rel="noopener noreferrer">DMM FX/CFD FAQ「申込みから取引開始まで」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00030/" target="_blank" rel="noopener noreferrer">DMM FX/CFD FAQ「個人申込みの確認書類」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00019/" target="_blank" rel="noopener noreferrer">DMM FX/CFD FAQ「取引開始までの時間」</a></li>
    </ul><p>申込手順と書類条件は2026年9月9日に確認しました。申込時は公式画面の最新案内を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM CFDの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">上記はアクセストレードの提携広告です。広告報酬は審査条件や記事内容に影響しません。登録後の取引は必須ではなく、CFDの仕組みとリスクを確認してご自身で判断してください。</p></section>
    <p><Link href="/articles/dmm-cfd-deposit-minimum-quick">DMM CFDの最低入金額と入金方法 →</Link></p>
    <p><Link href="/articles/dmm-cfd-margin-call-losscut">追証とロスカットを確認 →</Link></p>
    <p><Link href="/cfd/dmm-cfd">DMM CFDの取引条件一覧 →</Link></p>
  </article>;
}
