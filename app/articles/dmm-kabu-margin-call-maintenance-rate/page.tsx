import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の追証はいくらから？保証金率30％・維持率20％を計算',
  description: 'DMM 株の国内信用取引について、最低保証金30万円、委託保証金率30％、最低預託率20％、追証の判定、期限、入金・返済による解消を整理します。',
};

const faq = [
  { q: 'DMM 株の国内信用取引はいくらから始められますか？', a: '建玉総額の30％以上かつ30万円以上の委託保証金が必要です。計算上30％が30万円未満でも、最低30万円が必要です。' },
  { q: '追証は何％で発生しますか？', a: '毎営業日の大引け時点で預託率が20％を下回った場合、または受入保証金が30万円を下回った場合に発生します。' },
  { q: '翌日に株価が戻れば追証は消えますか？', a: '消えません。一度発生した追証は相場変動による自然解消が認められず、期限までに入金または建玉返済が必要です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-margin-call-maintenance-rate', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / MARGIN CALL</p>
    <h1>DMM 株の追証<br />保証金率30％・維持率20％</h1>
    <p className="lede">新規建てに必要な30％と、追証判定の20％は別の基準です。さらに受入保証金30万円という金額基準もあるため、比率だけでは安全性を判断できません。</p>

    <div className="callout"><strong>追証判定は「20％または30万円」</strong><p>毎営業日の大引け時点で預託率が20％未満、または受入保証金が30万円未満になると追証が発生します。</p></div>

    <h2>新規建てと維持の基準</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>基準</th><th>DMM 株</th><th>意味</th></tr></thead><tbody>
      <tr><td className="ex-name">新規建ての預託率</td><td>30％以上</td><td>建玉総額に対して必要な保証金率</td></tr>
      <tr><td className="ex-name">最低委託保証金</td><td>30万円</td><td>30％計算が小さくても必要な最低額</td></tr>
      <tr><td className="ex-name">最低預託率</td><td>20％</td><td>下回ると追証判定</td></tr>
      <tr><td className="ex-name">追証解消期限</td><td>翌々営業日12時</td><td>現金差入れまたは建玉返済が必要</td></tr>
    </tbody></table></div></div>

    <h2>必要保証金を建玉額別に計算</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>建玉総額</th><th>30％計算</th><th>必要保証金</th></tr></thead><tbody>
      <tr><td className="ex-name">50万円</td><td>15万円</td><td>30万円</td></tr>
      <tr><td className="ex-name">90万円</td><td>27万円</td><td>30万円</td></tr>
      <tr><td className="ex-name">100万円</td><td>30万円</td><td>30万円</td></tr>
      <tr><td className="ex-name">200万円</td><td>60万円</td><td>60万円</td></tr>
    </tbody></table></div><p className="panel-note">制度信用と一般信用は別枠ではなく、建玉を合算して計算します。規制銘柄等では30％を上回る保証金が必要な場合があります。</p></div>

    <h2>預託率は評価損と諸経費で下がる</h2>
    <p>預託率は、現金と代用有価証券の評価額から、諸経費、建玉評価損、受渡前の決済損を差し引き、建玉代金合計で割って計算します。建玉の評価益は保証金計算上ゼロとして扱われます。</p>
    <div className="fx-formula"><span>単純化した追証例</span><strong>（現金45万円 − 評価損16万円）÷ 建玉150万円</strong><b>≒ 19.33％</b><small>20％未満かつ受入保証金29万円となるため追証。諸経費等を除く仮定例です。</small></div>

    <h2>株を担保にすると二重に変動する</h2>
    <p>国内上場有価証券の代用掛目は原則として前営業日の最終価格等の80％、対象となる米国上場有価証券は前々営業日の最終価格の60％です。銘柄や規制により掛目が異なる場合があります。</p>
    <p>代用株が値下がりすると、信用建玉が変わらなくても保証金評価額が減ります。建玉の評価損と代用株の値下がりが同時に起きれば、預託率はより速く低下します。</p>

    <h2>追証を解消する2つの方法</h2>
    <ol><li><strong>現金を差し入れる：</strong>追加保証金を証券アカウントへ入金する</li><li><strong>建玉を返済する：</strong>反対売買した建玉代金の20％が追証解消額に充当される</li></ol>
    <p>追証発生日の翌々営業日12時までに必要額を解消します。他社からの株式入庫やFX代用からの株式振替は追証解消額へ充当できません。</p>
    <p><Link href="/articles/dmm-kabu-deposit-methods">DMM 株の入金方法を確認 →</Link></p>

    <h2>相場回復では自然解消しない</h2>
    <div className="callout"><strong>翌日20％へ戻っても対応が必要</strong><p>一度確定した追証は、値上がりで預託率が回復しても消えません。取引画面に表示された追証額と期限を基準に対応します。</p></div>
    <p>期限までに解消しない場合、差入期限当日の後場寄付で全信用建玉が強制返済されます。強制返済後に損金が残れば、不足分の入金も必要です。</p>

    <h2>追証を避ける管理方法</h2>
    <ul><li>30％ぎりぎりではなく現金余力を残す</li><li>建玉と同じ方向へ動きやすい代用株へ集中しない</li><li>決算、権利日、連休前に維持率を確認する</li><li>未実現利益を保証金余力として過信しない</li><li>金利・貸株料など日々の諸経費も織り込む</li><li>追証通知を待たず、取引画面の預託率を確認する</li></ul>
    <p><Link href="/articles/dmm-kabu-margin-trading-cost">信用取引の金利・貸株料を計算 →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/start/guide/margin_beginner/margin/" target="_blank" rel="noopener noreferrer">DMM 株「委託保証金と追証」</a></li>
      <li><a href="https://kabu.dmm.com/jp/margin/outline/" target="_blank" rel="noopener noreferrer">DMM 株「信用取引の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00299/" target="_blank" rel="noopener noreferrer">DMM 株「委託保証金率と最低委託保証金率」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00300/" target="_blank" rel="noopener noreferrer">DMM 株「国内信用取引の追証」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00311/" target="_blank" rel="noopener noreferrer">DMM 株「追証は自然解消するか」</a></li>
    </ul><p>保証金・追証ルールは2026年9月9日に確認しました。銘柄規制や市場状況により条件が変わるため、取引画面と最新書面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。信用取引は保証金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
