import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/dmm-fx-funding-transfer' },
  title: 'DMM FXの入金方法と証拠金振替｜5,000円・出金・株券担保',
  description: 'DMM FXのクイック入金・振込入金、最低額、反映時間、出金、DMM 株からの株券担保振替を公式条件から整理します。',
};

const faq = [
  { q: 'DMM FXの初回入金はいくらからですか？', a: '初回入金額そのものに制限はありません。ただしクイック入金は1回5,000円以上で、取引には通貨ペアと数量に応じた必要証拠金が別に必要です。' },
  { q: 'DMM FXへの振込入金はいつ反映しますか？', a: '振込入金は着金確認後の反映となり、原則30分〜1時間程度かかります。クイック入金は対応金融機関のインターネットバンキングから24時間リアルタイムに反映します。' },
  { q: 'DMM 株の米国株をFXの担保にできますか？', a: '株券担保サービスの対象は国内の上場株式、ETF、REIT、ETNなどです。米国株式は対象外です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-fx-funding-transfer', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM FX / FUNDING & TRANSFER</p>
    <h1>DMM FXの入金方法と証拠金振替<br />5,000円・出金・株券担保</h1>
    <p className="lede">入金額の下限と、実際に取引へ必要な証拠金は別の数字です。クイック入金、振込入金、出金、DMM 株からの株券担保振替を、反映時間と資金不足時の注意点まで整理します。</p>

    <h2>クイック入金と振込入金の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>最低・上限</th><th>反映・手数料</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">クイック入金</td><td>5,000円以上、1億円未満／回</td><td>24時間リアルタイム、手数料無料</td><td>インターネットバンキングが必要</td></tr>
      <tr><td className="ex-name">振込入金</td><td>下限・上限なし</td><td>着金後30分〜1時間程度、振込手数料は利用者負担</td><td>振込名義はFX口座と完全一致</td></tr>
    </tbody></table></div></div>
    <p>クイック入金は金融機関サイトで手続きを最後まで完了しないと、即時反映されないことがあります。振込入金はログイン後に表示される専用口座へ、本人名義で振り込みます。</p>

    <h2>入金額ではなく必要証拠金から逆算する</h2>
    <p>DMM FXの必要証拠金は、現在レート×Lot数×取引単位÷25で算出します。米ドル/円が150円、1Lot＝10,000通貨なら、1Lotの取引金額は150万円、必要証拠金の単純計算は6万円です。スプレッド、スワップ、評価損、ロスカットへの余裕は別に残します。</p>
    <div className="fx-formula"><span>米ドル/円1Lotの概算</span><strong>150円 × 10,000通貨 ÷ 25</strong><b>＝ 60,000円</b><small>レート・取引単位・コースで変わるため、注文画面の必要証拠金を優先します。</small></div>
    <p><Link href="/articles/dmm-fx-mini-normal-large">ミニ・通常・ラージの取引単位を比較する →</Link></p>

    <h2>出金は2,000円・時間帯・銀行営業日を確認</h2>
    <p>全額出金を除き、出金予約は2,000円以上が目安です。銀行営業日の15時までの受付は原則として翌銀行営業日、15時以降は翌々銀行営業日の処理となります。出金先口座の登録と、未決済ポジション・必要証拠金への影響を確認してから予約します。</p>
    <div className="callout"><strong>出金可能額と口座残高は同じではありません</strong><p>未決済の評価損益、必要証拠金、株券担保評価額などで出金可能額は変動します。注文前に取引画面の出金可能額と余力を確認します。</p></div>

    <h2>DMM 株の保有株をFX証拠金へ振り替える</h2>
    <p>株券担保サービスでは、DMM 株で保有する国内上場株式・ETF・REIT・ETNなどの前営業日終値に原則70％を掛けた評価額を、DMM FXの証拠金として利用できます。米国株は対象外です。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>公式条件</th><th>運用上の確認</th></tr></thead><tbody>
      <tr><td className="ex-name">代用掛目</td><td>国内株等の前営業日終値×70％が原則</td><td>株価下落で評価額も下がる</td></tr>
      <tr><td className="ex-name">予約受付</td><td>平日07:00〜15:30</td><td>国内株式の営業日に限る</td></tr>
      <tr><td className="ex-name">FX口座への反映</td><td>翌国内株式営業日07:00（夏時間06:00）</td><td>予約当日に使えるとは限らない</td></tr>
    </tbody></table></div></div>
    <div className="fx-formula"><span>担保評価額の単純例</span><strong>国内株1,000,000円 × 70％</strong><b>＝ 700,000円相当</b><small>評価額は前営業日の終値等を基準に変動。現金の入金とは異なります。</small></div>
    <p><Link href="/articles/dmmfx-stock-collateral-service">株券担保サービスの対象株・強制売却リスクを詳しく見る →</Link></p>

    <h2>追証が出てからの振替は間に合わないことがある</h2>
    <p>DMM FXの案内では、追加証拠金が発生した後に株式の振替予約をしても、原則として解消期限までに反映できません。追加証拠金の発生前に予約し、期限前に反映した場合だけ、代用証券評価額が解消に充当される扱いがあります。</p>
    <p>株券担保は資金管理の選択肢ですが、株価下落とFXの為替変動が同時に起きる可能性があります。株を売却して現金化する場合の受渡日も含め、余裕資金を別に確保します。</p>

    <h2>資金移動のチェックリスト</h2>
    <ul><li>クイック入金の最低5,000円と金融機関の上限を確認した</li><li>振込名義がDMM FX口座の名義と一致している</li><li>現在レート・Lot数から必要証拠金を計算した</li><li>出金予約後も必要証拠金と余裕資金が残る</li><li>株券担保の対象が国内株等で、反映日を確認した</li><li>追証発生後の振替に頼らない資金計画を立てた</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/fx/service/pay/quick/" target="_blank" rel="noopener noreferrer">DMM FX「入金」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00099/" target="_blank" rel="noopener noreferrer">DMM FX「初回の最低入金額」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00091/" target="_blank" rel="noopener noreferrer">DMM FX「1回の入金額の上限・下限」</a></li>
      <li><a href="https://fx.dmm.com/fx/service/outline/" target="_blank" rel="noopener noreferrer">DMM FX「サービス概要」</a></li>
      <li><a href="https://fx.dmm.com/fx/service/substitute/" target="_blank" rel="noopener noreferrer">DMM FX「DMMFX株券担保サービス」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00257/" target="_blank" rel="noopener noreferrer">DMM FX「追加証拠金と株式振替」</a></li>
    </ul><p>入出金条件と株券担保の仕様は2026年9月9日に確認しました。金融機関のメンテナンス、祝日、相場状況により反映時間や利用条件が変わる場合があります。</p></section>

    <section className="provider-no-ad"><div><span>ADVERTISEMENT</span><h2>DMM FXの広告コードは確認後に掲載します。</h2></div><p>広告リンクの有無と取引条件の説明は分けて管理しています。入出金条件、必要証拠金、担保評価額は公式情報を優先してください。</p></section>
    <p><Link href="/fx/dmm-fx">DMM FXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/dmm-fx-margin-call-losscut">追証とロスカットの違いを確認する →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシートへ →</Link></p>
  </article>;
}
