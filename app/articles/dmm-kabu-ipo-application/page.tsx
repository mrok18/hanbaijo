import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-ipo-application' },
  title: 'DMM 株のIPO申込方法｜前受金不要・完全平等抽選と当選後の手順',
  description: 'DMM 株のIPOについて、抽選申込時の資金、完全平等抽選、申込上限、当選・補欠当選後の購入意思表示、NISA口座区分を整理します。',
};

const faq = [
  { q: 'DMM 株のIPOは申込時に入金が必要ですか？', a: '抽選参加申込の時点では買付代金は不要です。当選または補欠当選後に購入希望を出す時点で、購入金額が必要になります。' },
  { q: '預り資産や取引回数が多いと当たりやすくなりますか？', a: 'DMM 株は乱数を用いた完全平等抽選で、取引実績や預り資産に応じた裁量配分はありません。' },
  { q: '当選後に何もしないと自動購入されますか？', a: '自動購入されません。購入期間内に購入意思を表示しない場合は辞退扱いとなり、権利は失効します。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-ipo-application', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / IPO</p>
    <h1>DMM 株のIPO申込方法<br />前受金不要・完全平等抽選</h1>
    <p className="lede">DMM 株のIPOは、抽選申込時点では買付代金が不要です。ただし、当選後は購入期間内に目論見書を確認し、資金を用意して購入意思を表示する必要があります。</p>

    <div className="callout"><strong>抽選申込と購入申込は別手続き</strong><p>抽選に申し込んだだけでは購入できません。当選・補欠当選を確認し、期限内に「購入希望」を確定して初めて購入手続きが進みます。</p></div>

    <h2>DMM 株のIPO条件</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>DMM 株の取扱い</th><th>確認ポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">抽選方式</td><td>乱数による完全平等抽選</td><td>取引実績・預り資産による裁量配分なし</td></tr>
      <tr><td className="ex-name">申込時の資金</td><td>抽選参加時は不要</td><td>購入希望時には買付代金が必要</td></tr>
      <tr><td className="ex-name">申込株数</td><td>最低単元が上限</td><td>100株単位の銘柄なら100株</td></tr>
      <tr><td className="ex-name">申込価格</td><td>仮条件の上限価格</td><td>実際の購入価格は決定した公開価格</td></tr>
      <tr><td className="ex-name">購入手数料</td><td>無料</td><td>上場後の売却には通常の取引条件を適用</td></tr>
    </tbody></table></div></div>

    <h2>申込から上場までの5段階</h2>
    <ol><li><strong>抽選参加申込：</strong>DMM株 STANDARDまたはスマホアプリのノーマルモードから申し込む</li><li><strong>抽選・配分：</strong>公開価格決定日に、申込者を対象として機械的に抽選する</li><li><strong>結果確認：</strong>当選・補欠当選・落選を取引ツールで確認する</li><li><strong>購入意思表示：</strong>目論見書を確認し、購入期間内に購入希望を確定する</li><li><strong>上場：</strong>購入約定後、上場日から市場で売却できる</li></ol>

    <h2>前受金不要でも資金の準備日は早い</h2>
    <p>抽選申込時に資金を拘束されないため、複数銘柄へ申し込みやすい仕組みです。一方、当選後の購入期間は短いことがあります。公開価格と株数から必要額を計算し、購入希望を出す前に証券アカウントへ入金します。</p>
    <div className="fx-formula"><span>必要資金の例</span><strong>公開価格 1,800円 × 100株</strong><b>= 180,000円</b><small>仮定例。実際の公開価格、株数、購入期限は銘柄ページで確認してください。</small></div>
    <p><Link href="/articles/dmm-kabu-deposit-methods">クイック入金と銀行振込の違い →</Link></p>

    <h2>完全平等抽選でも配分自体がない場合がある</h2>
    <p>DMM.com証券は委託販売団として参加できるIPOを取り扱います。委託販売の数量には限りがあり、DMM.com証券への配分がなければ、利用者が抽選申込を済ませていても申込は失効します。</p>
    <p>また、完全平等なのは「DMM.com証券へ配分された株式の抽選方法」です。IPOの当選確率や利益を保証するものではなく、公開価格を初値が下回る元本割れもあります。</p>

    <h2>補欠当選も購入希望が必要</h2>
    <p>補欠当選は購入確定ではありません。補欠当選者購入期間に購入希望を出すと、辞退等で株数が生じた場合の繰上抽選対象になります。期間終了後に繰上抽選が行われ、繰上当選した場合に購入します。</p>
    <div className="callout"><strong>期限を過ぎた権利は復活しない</strong><p>当選・補欠当選後に購入意思を表示しなければ辞退扱いです。申込時点で公開価格決定日と購入期間をカレンダーへ登録しておきます。</p></div>

    <h2>NISAで購入する場合</h2>
    <p>購入意思表示の際に利用する現物口座区分は、取引ツールの設定で特定・一般・NISAから選びます。NISAを使う場合は、DMM 株でNISA口座が開設済みか、成長投資枠の残額が購入額以上あるかを事前に確認します。</p>
    <p>公開価格と購入株数の結果、非課税投資枠を超える場合もあるため、申込画面の口座区分と余裕枠を確認してください。</p>
    <p><Link href="/articles/dmm-kabu-nisa-account-opening">DMM 株のNISA口座開設手順 →</Link></p>

    <h2>申込前チェックリスト</h2>
    <ul><li>最新の契約締結前交付書面等へ同意している</li><li>抽選申込期間と購入期間を記録した</li><li>公開価格×最低単元の資金を用意できる</li><li>当選・補欠当選結果を自分で確認する</li><li>特定・一般・NISAの購入口座区分を確認した</li><li>初値が公開価格を下回る可能性を理解した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/jp/stock/ipo/" target="_blank" rel="noopener noreferrer">DMM 株「IPO（新規公開株）」</a></li>
      <li><a href="https://kabu.dmm.com/jp/stock/ipo/howto/" target="_blank" rel="noopener noreferrer">DMM 株「IPO申込方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00492/" target="_blank" rel="noopener noreferrer">DMM 株「IPOの申込上限数」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00500/" target="_blank" rel="noopener noreferrer">DMM 株「当選後の購入意思表示」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00509/" target="_blank" rel="noopener noreferrer">DMM 株「購入意思を表示しなかった場合」</a></li>
    </ul><p>申込ルールは2026年9月9日に確認しました。取扱銘柄、日程、申込上限、公開価格は変動するため、申込時に公式の銘柄ページと目論見書を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。IPOの当選や利益は保証されず、公開価格を下回る損失もあります。</p></section>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">口座開設に必要なものを確認 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
