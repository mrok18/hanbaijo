import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-account-opening-documents' },
  title: 'DMM 株の口座開設に必要なもの｜本人確認・マイナンバー・開始まで',
  description: 'DMM 株の口座開設に必要な本人確認書類とマイナンバー確認書類、提出方法ごとの組合せ、審査から取引開始までの流れを整理します。',
};

const faq = [
  { q: 'DMM 株はマイナンバーカードだけで申込みできますか？', a: 'スマホアプリ「DMM 株」でマイナンバーカードを読み取る方法なら、カード1点でアカウント登録が可能と案内されています。対応端末やカードの利用条件は申込画面で確認してください。' },
  { q: '運転免許証だけで申込みできますか？', a: '「スマホでスピード本人確認」では、運転免許証に加えて通知カードまたはマイナンバー記載の住民票の写しが必要です。マイナンバー確認書類を提出できない場合、登録審査は行われません。' },
  { q: '申込当日に取引できますか？', a: 'スマホによる本人確認を利用し、必要書類と申込内容の審査が完了すれば最短で当日に開始できます。ただし土日は登録手続きを行っておらず、即日開始を保証するものではありません。' },
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-account-opening-documents', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
      { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
    ],
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / ACCOUNT OPENING</p>
    <h1>DMM 株の口座開設に必要なもの<br />本人確認から取引開始まで</h1>
    <p className="lede">申込み前に用意するのは、本人確認書類とマイナンバー確認書類です。スマホで完結する方法と、書類をアップロード・郵送する方法では、必要点数と審査後の流れが異なります。</p>

    <div className="callout"><strong>カード1点で進めるならアプリ読取り</strong><p>スマホアプリ「DMM 株」でマイナンバーカードを読み取る方法は、カード1点で本人確認と番号確認を行えます。申込み前にカードの暗証番号と対応端末を確認します。</p></div>

    <h2>提出方法と必要書類</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>提出方法</th><th>主な組合せ</th><th>審査後</th></tr></thead><tbody>
      <tr><td className="ex-name">アプリでカード読取り</td><td>マイナンバーカード1点</td><td>Webでログイン情報を取得</td></tr>
      <tr><td className="ex-name">スマホでスピード本人確認</td><td>マイナンバーカード両面、または運転免許証等＋番号確認書類</td><td>Webでログイン情報を取得</td></tr>
      <tr><td className="ex-name">アップロード・メール・FAX・郵送</td><td>番号確認書類と本人確認書類の指定組合せ</td><td>簡易書留の通知書類を受領</td></tr>
    </tbody></table></div></div>
    <p>顔写真なしの本人確認書類を使う場合は、番号確認書類によって本人確認書類が1点または2点必要です。通知カードは最新の氏名・住所が記載されているものに限られ、裏面に記載がなくても両面提出が必要です。</p>

    <h2>申込みから取引開始まで</h2>
    <div className="fx-metric-grid">
      <article><b>STEP 01</b><h3>方法を選ぶ</h3><p>カード読取り、スマホ撮影、画像提出、郵送などから、自分の書類に合う方法を選びます。</p></article>
      <article><b>STEP 02</b><h3>情報を入力</h3><p>氏名・住所・職業・投資経験などを、確認書類と一致する内容で入力します。</p></article>
      <article><b>STEP 03</b><h3>登録審査</h3><p>申込みと必要書類の提出後に審査されます。審査結果によって登録できない場合があります。</p></article>
      <article><b>STEP 04</b><h3>認証・入金</h3><p>ログイン情報を取得し、振込またはクイック入金を行うと取引を始められます。</p></article>
    </div>

    <h2>最短即日になる条件</h2>
    <p>公式FAQでは、アプリのカード読取りまたは「スマホでスピード本人確認」を利用し、審査が完了した場合は最短で申込当日に取引開始できると案内しています。土日は登録手続きを行っておらず、入力・書類の不備や申込状況により時間がかかります。</p>
    <div className="callout"><strong>画像提出や郵送は通知書類の受取りが必要</strong><p>アップロード、メール、FAX、郵送で提出した場合、審査完了後にログインID・初期パスワードを記載した書類が簡易書留で発送されます。受領までの日数も見込んでください。</p></div>

    <h2>不備を防ぐチェックリスト</h2>
    <ul>
      <li>申込内容と確認書類の氏名・住所が一致している</li>
      <li>本人確認書類とマイナンバー確認書類の両方を用意した</li>
      <li>有効期限内で、文字や顔写真が鮮明に写っている</li>
      <li>両面指定の書類は、記載がない裏面も提出した</li>
      <li>住民票・印鑑登録証明書は発行から3か月以内である</li>
      <li>審査結果メールを受信できるように設定した</li>
    </ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00029/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「個人アカウント登録の確認書類」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00595/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「確認書類の提出方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00594/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「申込から取引開始までの時間」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00546/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「マイナンバー確認書類がない場合」</a></li>
    </ul><p>書類条件と申込手順は2026年9月9日に確認しました。申込時は公式画面の最新案内を優先してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事の評価や掲載内容に影響しません。口座開設後の取引は必須ではなく、商品・費用・リスクを確認してご自身で判断してください。</p></section>
    <p><Link href="/stocks/dmm-kabu">DMM 株の国内株コストシート →</Link></p>
    <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">国内株の往復手数料を計算 →</Link></p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株の手数料と為替コスト →</Link></p>
  </article>;
}
