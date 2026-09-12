import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-us-margin-vip-courses' },
  title: 'DMM 株の米国株信用メンバー・プレミアム条件｜金利差を計算',
  description: 'DMM 株の米国株信用におけるゲスト・メンバー・プレミアムコースを、入庫額、米ドル残高、平均建玉、手数料、買方金利、適用期間で比較します。',
};

const faq = [
  { q: 'メンバーコースになる一番小さい入庫額はいくらですか？', a: '他社からDMM 株へ、1営業日または週次判定期間の時価合計で1,000ドル以上の対象米国株を入庫する条件があります。' },
  { q: 'プレミアムコースとメンバーコースで手数料は違いますか？', a: 'どちらも米国株信用の取引手数料は約定金額の0.165％、上限8.25ドルです。買方金利はプレミアム2.0％、メンバー2.9％と異なります。' },
  { q: '優遇が適用されたかどこで確認できますか？', a: 'DMM株 STANDARDまたはスマホアプリに表示されるVIPマークで確認できます。実際の適用コースと期間も取引画面で確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-us-margin-vip-courses', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / US MARGIN VIP</p>
    <h1>米国株信用の優遇コース<br />メンバー・プレミアム条件</h1>
    <p className="lede">DMM 株の米国株信用は、入庫・米ドル残高・平均建玉の条件を満たすと、手数料と買方金利が下がります。条件達成のために資産を動かす前に、実際の節約額と適用期間を計算します。</p>

    <h2>3コースの料金差</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>コース</th><th>取引手数料</th><th>上限</th><th>買方金利</th></tr></thead><tbody>
      <tr><td className="ex-name">ゲスト</td><td>約定金額×0.33％</td><td>16.5ドル</td><td>年率4.0％</td></tr>
      <tr><td className="ex-name">メンバー</td><td>約定金額×0.165％</td><td>8.25ドル</td><td>年率2.9％</td></tr>
      <tr><td className="ex-name">プレミアム</td><td>約定金額×0.165％</td><td>8.25ドル</td><td>年率2.0％</td></tr>
    </tbody></table></div><p className="panel-note">税込。優遇内容・判定条件は変更される場合があります。発注画面の適用状況を確認してください。</p></div>

    <h2>優遇条件の早見表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>判定対象</th><th>メンバー</th><th>プレミアム</th><th>判定</th></tr></thead><tbody>
      <tr><td className="ex-name">他社からの対象米国株入庫</td><td>1,000ドル以上</td><td>5,000ドル以上</td><td>日次または週次</td></tr>
      <tr><td className="ex-name">米ドル預り＋保証金残高</td><td>2,500ドル以上</td><td>20,000ドル以上</td><td>月次</td></tr>
      <tr><td className="ex-name">米国株信用の平均建玉</td><td>5,000ドル以上</td><td>70,000ドル以上</td><td>月次</td></tr>
    </tbody></table></div><p className="panel-note">いずれかの条件を満たす方式です。入庫はDMM 株が取り扱う米国株現物が対象で、日本株の入庫は対象外です。</p></div>

    <h2>入庫条件は日次・週次で判定</h2>
    <p>日次は前営業日16時15分から当営業日16時15分、週次は前週金曜日から当週木曜日までに確認された入庫額を判定します。日次・週次で条件を満たした場合、原則として判定日の翌営業日から翌月末まで優遇されます。</p>
    <p>他社側で出庫手数料がかかる場合や、移管中に売却できない期間があるため、優遇額だけで移管を決めず総負担を比較します。</p>
    <p><Link href="/articles/dmm-kabu-stock-transfer">米国株の入庫・出庫条件を確認 →</Link></p>

    <h2>残高・建玉条件は月次判定</h2>
    <p>月次は前月21日から当月20日を条件判定期間とし、当月20日16時15分に判定します。米ドル預り残高と保証金残高の合計、または米国株信用の未決済建玉平均残高で条件を満たすと、翌月第1営業日から月末まで適用されます。</p>
    <p>平均建玉は時価ではなく新規建約定代金を基に計算され、週末・祝日に持ち越した建玉も日数に含まれます。</p>

    <h2>1万ドルを30日保有する節約額</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>コース</th><th>往復手数料</th><th>30日金利</th><th>合計概算</th></tr></thead><tbody>
      <tr><td className="ex-name">ゲスト</td><td>33.00ドル</td><td>32.88ドル</td><td>65.88ドル</td></tr>
      <tr><td className="ex-name">メンバー</td><td>16.50ドル</td><td>23.84ドル</td><td>40.34ドル</td></tr>
      <tr><td className="ex-name">プレミアム</td><td>16.50ドル</td><td>16.44ドル</td><td>32.94ドル</td></tr>
    </tbody></table></div><p className="panel-note">1万ドルを新規買建し、30日後に全額返済する仮定。手数料上限を適用し、為替・価格変動・税金等は除外。</p></div>
    <div className="callout"><strong>ゲストとの差は約25.54～32.94ドル</strong><p>この例ではメンバーで約25.54ドル、プレミアムで約32.94ドル軽減されます。入庫・残高維持に伴う機会費用と比較します。</p></div>

    <h2>プレミアムの差は金利に出る</h2>
    <p>メンバーとプレミアムの手数料率・上限は同じです。差は買方金利の年0.9ポイントです。建玉額と保有日数が大きいほど差が広がり、短期・小口では条件達成のために資産を動かす効果が小さい場合があります。</p>
    <div className="fx-formula"><span>メンバーとプレミアムの金利差</span><strong>建玉10,000ドル × 0.9％ ÷ 365 × 30日</strong><b>≒ 7.40ドル</b><small>30日保有の概算。適用期間、日数、端数処理等で異なります。</small></div>

    <h2>適用状況を必ず確認</h2>
    <p>条件達成後は、DMM株 STANDARDまたはスマホアプリのVIPマークを確認します。判定時刻直前の入庫や残高移動はシステム上の確認が間に合わない可能性があるため、余裕を持って手続きを行います。</p>

    <h2>判断チェックリスト</h2>
    <ul><li>予定建玉と保有日数から金利差を計算した</li><li>入庫元の出庫手数料と移管期間を確認した</li><li>月次条件を翌月も維持する必要があるか確認した</li><li>優遇適用開始日と終了日を取引画面で確認した</li><li>優遇のためだけに過大な信用建玉を持たない</li><li>保証金50％・追証30％のリスクを優先した</li></ul>
    <p><Link href="/articles/dmm-kabu-us-margin-call">米国株信用の追証ルール →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/us_vip/" target="_blank" rel="noopener noreferrer">DMM 株「プレミアムコース／メンバーコース」</a></li>
      <li><a href="https://kabu.dmm.com/us/margin/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/commission/" target="_blank" rel="noopener noreferrer">DMM 株「米国株信用取引手数料・金利」</a></li>
    </ul><p>優遇条件と料金は2026年9月9日に確認しました。条件・判定期間・特典内容は予告なく変わる場合があるため、資産移動や発注前に最新公式情報を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。優遇条件を満たすことや取引成果は保証されません。</p></section>
    <p><Link href="/articles/dmm-kabu-us-margin-cost">米国株信用の総コスト →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
