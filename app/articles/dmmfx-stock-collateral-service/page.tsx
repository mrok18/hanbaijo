import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmmfx-stock-collateral-service' },
  title: 'DMMFX株券担保サービスとは？評価率70％・対象株・強制売却リスク',
  description: 'DMM 株の保有株をDMM FXの証拠金に使う株券担保サービスについて、70％評価、対象銘柄、振替時間、NISA対象外、強制売却リスクを整理します。',
};

const faq = [
  { q: '100万円の株はFX証拠金いくらに評価されますか？', a: '原則として前国内株式営業日の最終価格等に70％を掛けるため、100万円なら70万円相当です。銘柄や市場状況により掛目が変更される場合があります。' },
  { q: 'NISAで保有する株も担保にできますか？', a: 'NISA口座で保有する有価証券は代用有価証券として利用できません。米国株、代用不適格銘柄も対象外です。' },
  { q: '担保にした株が強制売却されることはありますか？', a: 'あります。DMM FXで純資産額不足が発生し、所定期限までに解消されない場合、FX代用の全銘柄が強制売却されます。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmmfx-stock-collateral-service', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU × DMM FX / COLLATERAL</p>
    <h1>DMMFX株券担保サービスとは？<br />評価率70％と強制売却リスク</h1>
    <p className="lede">DMM 株で保有する対象の国内株等を、売却せずDMM FXの証拠金として使う仕組みです。現金を追加しなくても取引余力を作れますが、株価と為替の両方が動き、FXの不足金によって株が強制売却される可能性があります。</p>

    <div className="callout"><strong>100万円の対象株なら原則70万円相当</strong><p>評価額は原則、前国内株式営業日の最終価格または気配に70％を掛けて計算します。70％は固定保証ではなく、掛目や適格銘柄は変更される場合があります。</p></div>
    <div className="fx-formula"><span>COLLATERAL VALUE</span><strong>株式時価100万円 × 70％</strong><b>= 70万円相当</b><small>株価変動、掛目変更、FX損益を含まない例</small></div>

    <h2>サービスの基本条件</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>公式案内</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">代用掛目</td><td>原則70％</td><td>前営業日の最終価格等で毎日変動</td></tr>
      <tr><td className="ex-name">対象</td><td>国内上場株、ETF、REIT、ETN等</td><td>米国株・NISA・不適格銘柄は対象外</td></tr>
      <tr><td className="ex-name">受付</td><td>平日7時～15時30分</td><td>国内株式非営業日は利用不可</td></tr>
      <tr><td className="ex-name">反映</td><td>翌国内株式営業日7時</td><td>夏時間は6時</td></tr>
      <tr><td className="ex-name">手数料</td><td>無料</td><td>FXのスプレッド・スワップ等は別</td></tr>
    </tbody></table></div></div>

    <h2>振替の流れ</h2>
    <ol><li>DMM 株とDMM FXの両アカウントを用意する</li><li>DMM 株の取引ツールで「FX代用振替予約」を開く</li><li>振り替える対象銘柄と株数を選ぶ</li><li>取引暗証番号を入力して予約する</li><li>翌国内株式営業日にDMM FXへ評価額が反映される</li></ol>
    <p>受付時間内なら振替予約を取り消せます。予約中は対象株を売却できず、取消後に売却注文を出す必要があります。</p>

    <h2>対象にならない株</h2>
    <ul><li>NISA・ジュニアNISA口座で保有する有価証券</li><li>米国株式</li><li>DMM.com証券が指定する代用不適格銘柄</li><li>株からFXへ振り替える単元未満株</li></ul>
    <p>同じ国内株でも、銘柄指定や預り区分によって利用できない場合があります。振替画面に表示される対象と評価額を確認します。</p>

    <h2>株価下落とFX損失が同時に効く</h2>
    <p>担保株が値下がりすると代用評価額が減少します。同時にFXポジションで含み損が増えると、証拠金余力は両側から悪化します。株と為替が異なる商品でも、危機時には同時に下落・円高進行などが起こり得ます。</p>
    <div className="callout"><strong>「現金0円でFX」は安全を意味しない</strong><p>現金を入れなくても発注できるという説明であり、損失が株の評価額内に限定される意味ではありません。ロスカット後も不足が残る可能性があります。</p></div>

    <h2>強制売却が起こる条件</h2>
    <p>DMM FXで純資産額不足が発生し、翌国内株式営業日の所定期限までに解消されない場合、FX代用の全銘柄へ強制売却注文が発注されます。株を長期保有する予定でも、FX側の損失が売却のきっかけになります。</p>
    <p>また、信用代用からFX代用へ振り替えると、国内信用取引側の代用評価額がゼロになります。信用取引の預託率低下も同時に確認する必要があります。</p>

    <h2>利用前に決める数値</h2>
    <ul><li>担保株が30％下落した場合の代用評価額</li><li>FXで許容する最大損失額</li><li>ロスカット前に追加できる現金</li><li>強制売却されたくない株の除外</li><li>株・FXを合算した総リスク上限</li></ul>
    <p><Link href="/articles/fx-position-size-calculation">FXの許容損失から取引数量を逆算 →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/substitute/" target="_blank" rel="noopener noreferrer">DMM 株「DMMFX株券担保サービス」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00665/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「FX代用が強制売却される原因」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00657/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「株式・FX代用振替予約の取消」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00648/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「振替予約中の売却」</a></li>
    </ul><p>評価率、振替条件、強制売却ルールは2026年9月9日に確認しました。適格銘柄や掛目は変更されるため、利用時は公式画面と契約締結前交付書面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はDMM 株に関するA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。株券担保とFXは損失を増幅し得るため、余力と強制売却条件を理解して判断してください。</p></section>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
    <p><Link href="/fx/dmm-fx">DMM FXの取引条件 →</Link></p>
  </article>;
}
