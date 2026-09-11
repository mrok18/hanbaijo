import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株の米国株信用取引コスト｜手数料・金利・保証金を計算',
  description: 'DMM 株の米国株信用取引について、ゲスト・メンバー・プレミアムの取引手数料と買方金利、買建のみ、保証金率50％、追証30％を整理します。',
};

const faq = [
  { q: 'DMM 株の米国株信用取引で空売りできますか？', a: 'できません。DMM 株の米国株信用取引は一般信用・無期限の買建のみで、売建の取扱いはありません。' },
  { q: '米国株信用取引の手数料はいくらですか？', a: 'ゲストコースは約定金額の0.33％で上限16.5ドル、メンバーコースは0.165％で上限8.25ドルです。いずれも税込で、少額約定には最低手数料0ドルの条件があります。' },
  { q: '米国株信用取引の必要保証金率は何％ですか？', a: '新規建ては50％、最低預託率は30％です。最低委託保証金は30万円相当額として2,500ドルと案内されています。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-us-margin-cost', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / US MARGIN</p>
    <h1>DMM 株の米国株信用取引<br />手数料・金利・保証金</h1>
    <p className="lede">米国株信用は、現物取引と手数料率が違い、買方金利が日々発生します。取引コース、保有日数、必要保証金を同じドル金額で計算します。</p>

    <div className="callout"><strong>一般信用の買建のみ</strong><p>返済期限は原則無期限ですが、売建・デイトレ信用はありません。銘柄の上場廃止や権利処理等で期日が前倒しされる場合があります。</p></div>

    <h2>3コースの料金を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>コース</th><th>取引手数料</th><th>上限</th><th>買方金利</th></tr></thead><tbody>
      <tr><td className="ex-name">ゲスト</td><td>約定金額×0.33％</td><td>16.5ドル</td><td>年率4.0％</td></tr>
      <tr><td className="ex-name">メンバー</td><td>約定金額×0.165％</td><td>8.25ドル</td><td>年率2.9％</td></tr>
      <tr><td className="ex-name">プレミアム</td><td>公式コース条件を確認</td><td>公式コース条件を確認</td><td>年率2.0％</td></tr>
    </tbody></table></div><p className="panel-note">税込。ゲストは約定3.33ドル以下、メンバーは6.66ドル以下で最低手数料0ドル。コース判定条件と料金は最新公式ページで確認してください。</p></div>

    <h2>1万ドルを売買する往復手数料</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>コース</th><th>片道の計算</th><th>片道</th><th>往復</th></tr></thead><tbody>
      <tr><td className="ex-name">ゲスト</td><td>10,000ドル×0.33％＝33ドル</td><td>上限16.5ドル</td><td>33ドル</td></tr>
      <tr><td className="ex-name">メンバー</td><td>10,000ドル×0.165％＝16.5ドル</td><td>上限8.25ドル</td><td>16.5ドル</td></tr>
    </tbody></table></div><p className="panel-note">新規買建と返済売りを各1約定とした単純例。分割約定や注文条件等は考慮していません。</p></div>

    <h2>1万ドルを30日保有する買方金利</h2>
    <div className="fx-formula"><span>ゲスト・年率4.0％</span><strong>10,000ドル × 4.0％ ÷ 365 × 30日</strong><b>≒ 32.88ドル</b><small>金利のみの概算。実際の日数、端数処理、料金変更等で異なります。</small></div>
    <p>同じ前提ならメンバーの年率2.9％は約23.84ドル、プレミアムの年率2.0％は約16.44ドルです。保有期間が長いほどコース間の金利差が総コストへ効きます。</p>

    <h2>保証金は50％、追証基準は30％</h2>
    <p>新規建ての預託率は50％で、1万ドルの建玉なら単純計算で5,000ドル相当の保証金が基準です。最低委託保証金は30万円相当額として2,500ドル、最低預託率は30％です。</p>
    <div className="callout"><strong>日本円は米国株信用の委託保証金にできない</strong><p>米国株信用口座では米ドル現金や対象の代用有価証券を利用します。為替取引、振替、受渡日を含めて事前に余力を確認します。</p></div>

    <h2>代用株は70％評価</h2>
    <p>対象となる国内上場有価証券と米国上場有価証券は、原則として前営業日の最終価格等の70％で代用評価されます。信用建玉と同じ銘柄を代用にする二階建取引では、株価下落時に建玉損失と代用評価の低下が同時に進みます。</p>

    <h2>現物取引との違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>米国株現物</th><th>米国株信用</th></tr></thead><tbody>
      <tr><td className="ex-name">保有資金</td><td>買付代金全額</td><td>原則50％以上の保証金</td></tr>
      <tr><td className="ex-name">買方金利</td><td>なし</td><td>日数に応じて発生</td></tr>
      <tr><td className="ex-name">売建</td><td>対象外</td><td>DMM 株では取扱いなし</td></tr>
      <tr><td className="ex-name">追証</td><td>なし</td><td>最低預託率30％</td></tr>
      <tr><td className="ex-name">保有期限</td><td>期限なし</td><td>原則無期限、期日前倒しあり</td></tr>
    </tbody></table></div></div>
    <p><Link href="/articles/us-stock-margin-fee-comparison">米国株信用の手数料を3社で比較 →</Link></p>
    <p><Link href="/articles/dmm-kabu-us-stock-fee">米国株現物の手数料・為替コスト →</Link></p>

    <h2>取引前チェックリスト</h2>
    <ul><li>米国株信用取引口座の審査が完了している</li><li>銘柄に「無期」マークがあり信用対象になっている</li><li>適用コースと手数料上限を確認した</li><li>想定保有日数で買方金利を計算した</li><li>米ドル保証金と50％以上の預託率を確認した</li><li>株価と為替が同時に動くリスクを想定した</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/us/margin/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/commission/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引手数料・金利」</a></li>
      <li><a href="https://kabu.dmm.com/service/us_vip/" target="_blank" rel="noopener noreferrer">DMM 株「プレミアム／メンバーコース」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00785/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用対象銘柄の確認方法」</a></li>
      <li><a href="https://kabu.dmm.com/_pdf/history/us_margin_brokerage_account_260301.pdf" target="_blank" rel="noopener noreferrer">DMM 株「外国株式信用取引の契約締結前交付書面」</a></li>
    </ul><p>料金と取引条件は2026年9月9日に確認しました。コース条件、金利、対象銘柄、保証金規制は変わる可能性があるため、発注前に最新公式情報を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。米国株信用は価格・為替変動により保証金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/dmm-kabu-margin-account-opening">信用取引口座の申込と審査 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
