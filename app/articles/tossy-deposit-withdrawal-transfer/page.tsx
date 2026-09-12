import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/tossy-deposit-withdrawal-transfer' },
  title: 'TOSSYの入金・出金・振替方法｜5,000円・2,000円・3営業日を整理',
  description: 'TOSSYの銀行振込・クイック入金・他サービスからの振替入金、出金条件、反映時間、同名義ルールを公式説明書で整理します。',
};

const faq = [
  { q: 'クイック入金なら必ず即時反映しますか？', a: 'いいえ。クイック入金は銀行振込より早く反映される仕組みですが、金融機関側の処理やメンテナンスなどで即時に反映されない場合があります。反映を確認するまでは、同じ金額を重ねて入金しないようにします。' },
  { q: 'TOSSYの出金最低額はいくらですか？', a: '公式説明書では、通常は1回あたり2,000円以上で、原則1日1回と案内されています。全額出金の場合はこの下限の例外です。出金可能額は損益や必要証拠金によって変わります。' },
  { q: 'DMM FXやDMM CFDからTOSSYへ資金を移せますか？', a: '各サービスの振替可能額があれば、TOSSYへの振替入金を利用できます。銀行を経由する入金とは区別され、振替後はTOSSY内の株式CFD区分を起点に資金が反映されます。' },
  { q: '家族名義の銀行口座から入金できますか？', a: '原則として本人名義の銀行口座を使います。名義が一致しない入金は反映されない、または組戻し・確認が必要になる場合があるため、本人名義で手続きしてください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/tossy-deposit-withdrawal-transfer', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">TOSSY / FUNDING & TRANSFER</p>
    <h1>TOSSYの入金・出金・振替方法<br />5,000円・2,000円・3営業日を整理</h1>
    <p className="lede">TOSSYは銀行からの入金だけでなく、クイック入金やDMMの他サービスからの振替にも対応しています。ただし、入金先のアセット区分、出金可能額、反映時間は同じではありません。注文前に「どの方法で、どこへ、いつ反映されるか」を切り分けます。</p>

    <div className="callout"><strong>最初に押さえる3点</strong><ul><li>入金は、まずTOSSYの株式CFD区分に反映される案内です。</li><li>クイック入金の操作下限は、公式説明書では5,000円です。</li><li>出金は通常2,000円以上・原則1日1回、反映はおおむね3営業日です。</li></ul></div>

    <h2>入金方法は3つ。手数料と反映の違いを比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>方法</th><th>主な条件</th><th>手数料・反映</th></tr></thead><tbody>
      <tr><td className="ex-name">銀行振込</td><td>本人名義の銀行口座から振込</td><td>振込手数料は利用者負担。金融機関の処理後に反映</td></tr>
      <tr><td className="ex-name">クイック入金</td><td>提携金融機関のインターネットバンキング</td><td>手数料無料。5,000円以上が目安だが、必ず即時とは限らない</td></tr>
      <tr><td className="ex-name">振替入金</td><td>DMM FX・DMM CFD・DMM 株・DMM BANUSYの振替可能額</td><td>振替手数料無料。各サービスの利用可能額を確認</td></tr>
    </tbody></table></div></div>
    <p>銀行振込は振込先口座や名義の入力を間違えると確認に時間がかかります。クイック入金は便利ですが、金融機関やTOSSYのメンテナンス中は利用できないことがあります。入金方法ごとの最新条件は、ログイン後の画面と公式説明書を優先します。</p>

    <h2>銀行振込で入金する手順</h2>
    <ol><li>TOSSYの入金画面で、指定された振込先と振込名義を確認する</li><li>本人名義の銀行口座から、必要な金額を振り込む</li><li>口座残高とTOSSYの入金履歴を確認し、反映後に株式CFD区分の利用可能額を見る</li></ol>
    <p>振込手数料は利用者が負担します。振込名義が登録情報と異なる場合、入金が自動反映されず、組戻しや追加確認になる可能性があります。法人名義・家族名義の口座を使う場合は、事前にサポートへ確認します。</p>

    <h2>クイック入金の5,000円下限と注意点</h2>
    <p>公式の商品CFD取引説明書では、クイック入金は5,000円以上が下限として案内されています。クイック入金を選び、金融機関を指定して認証まで完了させます。ブラウザの戻るボタンや途中終了で手続きを中断すると、銀行側では引落し済みでもTOSSY側で未反映になる場合があります。</p>
    <div className="fx-formula"><span>クイック入金の確認順</span><strong>銀行側の受付完了</strong><b>→ TOSSY入金履歴 → 株式CFD区分の利用可能額</b><small>反映待ちの間は同じ金額を再送せず、履歴と金融機関の明細を照合します。</small></div>

    <h2>DMMの他サービスから「振替入金」する場合</h2>
    <p>DMM FX、DMM CFD、DMM 株、DMM BANUSYに振替可能額がある場合、銀行を経由せずTOSSYへ資金を移せる案内があります。これは銀行振込やクイック入金とは別の操作です。振替元のサービス、金額、振替先を確認して実行し、完了後にTOSSYの入金履歴を確認します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>見る場所</th><th>間違えやすい点</th></tr></thead><tbody>
      <tr><td className="ex-name">振替可能額</td><td>振替元サービスの出金・振替画面</td><td>建玉の必要証拠金や未受渡金は移せない場合がある</td></tr>
      <tr><td className="ex-name">反映先</td><td>TOSSYの入金履歴・株式CFD区分</td><td>希望するFX・商品区分へ直接入るとは限らない</td></tr>
      <tr><td className="ex-name">手数料</td><td>振替確認画面</td><td>無料でも、振替元の出金制限は別に適用される</td></tr>
    </tbody></table></div></div>
    <p>入金後に他の区分へ資金を移したいときは、自動振替の設定や各アセット区分の維持率も確認します。TOSSYの6資産と証拠金率は<Link href="/cfd/tossy">TOSSYの公式条件一覧</Link>で整理しています。</p>

    <h2>出金は2,000円以上・原則1日1回</h2>
    <p>TOSSYの商品CFD説明書では、出金は通常2,000円以上、原則1日1回と案内されています。全額出金は下限の例外です。登録した本人名義の金融機関口座へ出金し、出金手数料は会社負担とされています。着金までの目安は、出金依頼からおおむね3営業日です。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>出金項目</th><th>公式説明書の整理</th></tr></thead><tbody>
      <tr><td className="ex-name">通常の最低額</td><td>2,000円以上（全額出金は例外）</td></tr>
      <tr><td className="ex-name">回数</td><td>原則1日1回</td></tr>
      <tr><td className="ex-name">着金時期</td><td>出金依頼から通常3営業日以内の案内</td></tr>
      <tr><td className="ex-name">振込手数料</td><td>会社負担の案内</td></tr>
      <tr><td className="ex-name">出金先</td><td>登録済みの本人名義金融機関口座</td></tr>
    </tbody></table></div></div>
    <p>出金依頼後に損失が発生したり、必要証拠金が不足したりすると、出金が取り消される場合があります。出金可能額だけでなく、保有ポジションの必要証拠金と余力を確認してから申請します。</p>

    <h2>入金はまず株式CFD区分。自動振替の動きに注意</h2>
    <p>TOSSYでは、入金した証拠金がまず株式CFD区分に反映され、区分間の維持率をそろえるために自動振替が行われる仕組みが説明されています。FXや商品を取引するために入金した場合でも、入金直後は目的の区分の利用可能額だけで判断しません。</p>
    <div className="callout"><strong>追加証拠金が出たときは資金移動のルールが変わる</strong><p>いずれかのアセット区分で追加証拠金が発生すると、自動振替が無効になり、利用者自身で対象区分へ資金を振り替える必要があります。公式説明書では、未解消のまま期限を過ぎると複数区分のポジションがマージンカット対象になる場合も案内されています。</p></div>
    <p>必要証拠金や維持率を確認したい場合は、<Link href="/articles/tossy-margin-call-losscut">TOSSYの追証・ロスカット解説</Link>と<Link href="/tools/cfd-margin-calculator">CFD必要証拠金計算機</Link>を併用してください。</p>

    <h2>入出金前のチェックリスト</h2>
    <ul><li>銀行口座の名義がTOSSYの登録名義と一致している</li><li>クイック入金の金額が5,000円以上か確認した</li><li>振替元サービスの振替可能額と未受渡金を分けて確認した</li><li>入金後の反映先が株式CFD区分であることを確認した</li><li>自動振替の設定と、移したい区分の維持率を確認した</li><li>出金額が通常2,000円以上で、出金後も必要証拠金を確保できる</li><li>3営業日程度の着金待ちを見込んだ</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/overview-commodity.pdf" target="_blank" rel="noopener noreferrer">TOSSY 商品CFD取引説明書</a></li>
      <li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/overview-index.pdf" target="_blank" rel="noopener noreferrer">TOSSY 証券CFD取引説明書</a></li>
      <li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/overview-fx.pdf" target="_blank" rel="noopener noreferrer">TOSSY FX取引説明書</a></li>
      <li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/rules.pdf" target="_blank" rel="noopener noreferrer">TOSSY 取引約款・規程</a></li>
      <li><a href="https://securities.dmm.com/notice/" target="_blank" rel="noopener noreferrer">DMM.com証券 手数料・リスク表示</a></li>
    </ul><p>入出金条件は2026年9月9日に確認しました。金融機関のメンテナンスや規程変更により条件が変わる場合があるため、実際の操作画面と最新の公式資料を優先してください。</p></section>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は入出金条件やリスクの評価に影響しません。TOSSYのFX・CFDは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。</p></section>
    <p><Link href="/articles/tossy-fees-total-cost">TOSSYの手数料・総コストを見る →</Link></p>
    <p><Link href="/articles/tossy-trading-hours-rollover">取引時間とロールオーバーを確認する →</Link></p>
    <p><Link href="/cfd/tossy">TOSSYの公式条件一覧へ →</Link></p>
  </article>;
}
