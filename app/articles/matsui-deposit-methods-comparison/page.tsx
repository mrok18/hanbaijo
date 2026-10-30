import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-deposit-methods-comparison' },
  title: '松井証券の入金方法・反映時間・手数料｜ネットリンクとらくらく振替の違い',
  description: '松井証券の6つの入金方法を反映時間・手数料・事前準備で比較。ネットリンクとらくらく振替の対応銀行・初回登録の違い、MATSUI Bank・定期入金・銀行振込の選び方と、未反映時の確認先を整理します。',
};

const FAQS = [
  {
    question: '松井バンクの入金手数料はかかりますか？',
    answer: 'MATSUI Bank入金とスイープ入金の振替手数料は無料です。銀行振込で入金する場合は、利用する金融機関の振込手数料が利用者負担になることがあります。',
  },
  {
    question: '松井バンクから松井証券へはいつ反映されますか？',
    answer: 'MATSUI Bank入金は原則リアルタイムで反映されます。ただし、メンテナンスや金融機関の稼働状況によって遅れる場合があるため、公式の入金状況・精算表も確認してください。',
  },
  {
    question: '松井バンク入金と銀行振込の違いは何ですか？',
    answer: '松井バンク入金は無料で、原則リアルタイムに反映されますが、確認に時間がかかる場合もあります。一方、銀行振込は専用口座へ送金し、営業日日中でも通常30〜60分かかり、振込手数料は利用者負担です。',
  },
  {
    question: 'ネットリンク入金とらくらく振替入金の違いは何ですか？',
    answer: 'ネットリンク入金は提携17行のネットバンキング画面で手続きし、らくらく振替入金は対応する4行の口座を初回登録した後、松井証券のお客様サイト内で手続きします。松井証券の手数料はどちらも無料ですが、らくらく振替入金は銀行側の確認後に反映される場合があります。',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function Page() {
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI / DEPOSIT METHODS</p>
    <h1>松井証券の入金方法・反映時間・手数料<br />ネットリンクとらくらく振替の違い</h1>
    <p className="lede">松井証券の入金方法は6種類。MATSUI Bank・ネットリンク・らくらく振替は原則リアルタイム、定期入金は銀行引落しから5営業日後です。銀行振込は振込手数料が利用者負担となるため、使える銀行と資金が必要な時期から選びます。</p>
    <div className="callout"><strong>まず「いつ入金したいか」と「使っている銀行」で選ぶ</strong><p>手動で早く入金したい場合はMATSUI Bank・ネットリンク・らくらく振替、毎月決まった資金を移すなら定期入金、対象の発注時に不足分を自動で補うならスイープ入金が候補です。即時型も、利用時間・銀行側の確認・メンテナンスによって反映が遅れることがあります。</p></div>
    <p><a href="#method-comparison">6方法の比較表へ</a> ／ <a href="#netlink-rakuraku">ネットリンクとらくらく振替の違いへ</a> ／ <Link href="/articles/matsui-deposit-not-reflected">すでに入金したのに反映されない場合 →</Link></p>

    <h2 id="method-comparison">6つの入金方法を反映時間・手数料で比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>反映</th><th>手数料</th><th>事前準備</th></tr></thead><tbody>
      <tr><td className="ex-name">スイープ入金</td><td>発注時に自動・リアルタイム</td><td>無料</td><td>MATSUI Bank口座・設定</td></tr>
      <tr><td className="ex-name">MATSUI Bank入金</td><td>原則リアルタイム</td><td>無料</td><td>MATSUI Bank口座</td></tr>
      <tr><td className="ex-name">ネットリンク入金</td><td>原則リアルタイム</td><td>無料</td><td>提携17行・ネットバンキング契約</td></tr>
      <tr><td className="ex-name">らくらく振替入金</td><td>原則リアルタイム</td><td>無料</td><td>対応4行・初回に銀行口座登録</td></tr>
      <tr><td className="ex-name">定期入金</td><td>引落しから原則5営業日後</td><td>無料</td><td>銀行口座・金額の設定</td></tr>
      <tr><td className="ex-name">銀行振込入金</td><td>確認後。営業日日中は通常30〜60分</td><td>利用者負担</td><td>専用振込先の確認</td></tr>
    </tbody></table></div></div>

    <h2 id="netlink-rakuraku">ネットリンク入金とらくらく振替入金の違い</h2>
    <p>ネットリンク入金は提携17行のネットバンキング画面へ移動して認証する方式、らくらく振替入金はみずほ銀行・三菱UFJ銀行・三井住友銀行・ゆうちょ銀行の4行を初回登録し、松井証券のお客様サイト内で金額を指定する方式です。松井証券側の手数料はどちらも無料ですが、反映は「必ず即時」ではなく、銀行側の確認・利用時間・メンテナンスの影響を受けます。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>ネットリンク入金</th><th>らくらく振替入金</th></tr></thead><tbody>
      <tr><td className="ex-name">対応金融機関</td><td>提携17行</td><td>対応4行（みずほ・三菱UFJ・三井住友・ゆうちょ）</td></tr>
      <tr><td className="ex-name">操作する画面</td><td>提携金融機関のネットバンキング</td><td>松井証券のお客様サイト</td></tr>
      <tr><td className="ex-name">初回設定</td><td>ネットバンキング契約が必要</td><td>初回に銀行口座を登録</td></tr>
      <tr><td className="ex-name">反映・手数料</td><td>原則リアルタイム・無料</td><td>原則リアルタイム・無料（銀行確認で遅れる場合あり）</td></tr>
      <tr><td className="ex-name">向いているケース</td><td>銀行側の認証でその都度入金したい</td><td>登録後の入力を簡単にしたい</td></tr>
    </tbody></table></div></div>
    <ul>
      <li><strong>MATSUI Bank入金：</strong>MATSUI Bank口座から金額を指定して振替</li>
      <li><strong>ネットリンク入金：</strong>提携金融機関のネットバンキング画面で手続き</li>
      <li><strong>らくらく振替入金：</strong>初回の銀行口座登録後は松井証券のお客様サイト内で手続き</li>
    </ul>
    <p><Link href="/stocks/matsui">松井証券の口座・国内株コストを見る →</Link> <Link href="/articles/matsui-withdrawal-methods-comparison">入金後の出金方法を比較する →</Link></p>

    <h2>ネットリンク入金は終了ボタンまで進む</h2>
    <p>金融機関側で振込操作が終わった後、松井証券のお客様サイトへ戻る指定ボタンを押します。ブラウザを閉じるなどして正常終了しなかった場合、入金をリアルタイムで余力へ反映できないことがあります。</p>
    <div className="callout"><strong>銀行から引き落とされたら重ねて入金しない</strong><p>反映が見えなくても、まず銀行口座の引落履歴と松井証券の入金状況・精算表を確認します。二重入金を避け、未反映の場合は公式サポートの案内に従います。</p></div>

    <h2>スイープ入金は発注時の不足額を自動入金</h2>
    <p>スイープ入金は、発注によって余力不足が生じる場合に、不足する概算金額をMATSUI Bank口座から自動で入金する仕組みです。毎回の手動入金を減らせますが、MATSUI Bank残高が投資可能額として使われやすくなるため、生活資金と投資資金はあらかじめ分けます。</p>
    <p>スイープ入金は出金には対応しません。松井証券から銀行側へ資金を戻す操作は、別途出金方法を確認します。</p>

    <h2>定期入金は積立向けで即時ではない</h2>
    <p>定期入金は、毎月27日（休業日なら翌営業日）に銀行口座から引き落とし、その5営業日後に総合口座へ入金されます。積立用資金を自動で移す用途に向きますが、相場を見て当日買付けたい場合の入金方法ではありません。</p>

    <h2>銀行振込は専用口座へ送る</h2>
    <p>銀行振込入金では、利用者ごとに用意された専用の入金先銀行口座を確認して送金します。営業日の日中は通常30〜60分で反映されますが、銀行や松井証券側の確認状況、時間外、休日では遅れる可能性があります。</p>
    <div className="formula-box"><code>実質入金コスト ＝ 銀行の振込手数料 ＋ 入金待ちによる機会コスト</code><small>無料の即時入金が使える場合でも、焦って予定外の取引を増やさないことが大切です。</small></div>

    <h2>すでに入金したのに反映されない場合</h2>
    <p>入金方法、銀行側の引落履歴、松井証券側の入金状況を順に照合します。銀行から引き落とされているのに証券側の表示だけが遅れるケースもあるため、残高だけを見て入金操作を繰り返さないでください。</p>
    <p><Link href="/articles/matsui-deposit-not-reflected">方法別の確認順・架空例・問い合わせ前のメモを見る →</Link></p>

    <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。広告報酬を比較結果や掲載順位へ反映しません。</p></div>
    <section className="article-affiliate" aria-label="松井証券の広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
      <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。対応金融機関・利用時間は公式サイトで確認してください。</p>
    </section>

    <section className="article-faq" aria-labelledby="faq"><h2 id="faq">松井証券の入金方法のFAQ</h2>
      {FAQS.map((item) => <div className="faq-item" key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/service/money/rule/" target="_blank" rel="noopener noreferrer">松井証券「入出金 取引ルール」</a></li>
      <li><a href="https://www.matsui.co.jp/service/money/deposit/" target="_blank" rel="noopener noreferrer">松井証券「入金」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1860?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「入金しましたが、まだ画面反映されていません」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1861?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「総合口座への入金の確認方法」</a></li>
    </ul><p>対応銀行数・手数料・反映条件は2026年10月31日に上記公式資料で確認しました。利用時間や条件は変更される場合があります。</p></section>

    <p><Link href="/articles/matsui-ekyc-required-documents">口座開設のeKYCと必要書類を見る →</Link></p>
    <p><Link href="/articles/matsui-simultaneous-account-opening">同時開設できる商品口座を見る →</Link></p>
    <p><Link href="/stocks/matsui">松井証券の国内株コストを見る →</Link></p>
    <p><Link href="/fx/matsui">MATSUI FXの取引条件を見る →</Link></p>
  </article>;
}
