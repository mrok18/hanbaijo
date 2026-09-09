import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券FXの必要証拠金とレバレッジ｜25倍・10倍・5倍・1倍を計算',
  description: '松井証券FXの4つのレバレッジコースと証拠金率、必要証拠金の計算式、1万通貨の例、実効レバレッジと維持率の見方を公式情報で整理します。',
};

const faq = [
  { q: '松井証券FXのレバレッジは何倍ですか？', a: '個人口座は25倍・10倍・5倍・1倍（レバレッジなし）の4コースから選べます。証拠金率はそれぞれ4％・10％・20％・100％です。法人口座は通貨ペアごとの為替リスク想定比率から自動で決まり、個人のコースとは別の扱いです。' },
  { q: '必要証拠金は「レート×数量÷レバレッジ」で計算できますか？', a: '概算としては同じ意味ですが、松井証券の公式式は「当社生成レート×数量×レバレッジコースの証拠金率」です。買いはBid、売りはAskを使い、建玉だけでなく未約定注文の注文証拠金も必要証拠金総額に含まれます。' },
  { q: '25倍コースなら必要証拠金だけ入金すればよいですか？', a: '必要証拠金は取引を維持するための最低計算額で、損失への余裕を含みません。含み損、スワップ、スプレッド拡大、追証・ロスカットを考慮した余裕資金を別に置き、証拠金シミュレーションで確認してください。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-10', dateModified: '2026-09-10', mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-fx-leverage-margin', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI FX / MARGIN & LEVERAGE</p>
    <h1>松井証券FXの必要証拠金とレバレッジ<br />25倍・10倍・5倍・1倍を計算</h1>
    <p className="lede">松井証券FXは、個人口座で証拠金率を4％から100％まで選択できます。レバレッジを下げると同じ数量でも必要証拠金は増えますが、実効レバレッジとロスカットまでの余力を管理しやすくなります。公式の計算式と具体例を同じ条件で比べます。</p>

    <div className="callout"><strong>個人口座の4コース</strong><ul>
      <li>スタンダード25倍：証拠金率4％</li>
      <li>低レバレッジ10倍：証拠金率10％</li>
      <li>低レバレッジ5倍：証拠金率20％</li>
      <li>レバレッジなし：1倍・証拠金率100％</li>
    </ul></div>

    <h2>レバレッジコースと証拠金率</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>コース</th><th>レバレッジ</th><th>証拠金率</th><th>150円・1万通貨の概算</th></tr></thead><tbody>
      <tr><td className="ex-name">スタンダード25倍</td><td>25倍</td><td>4％</td><td>60,000円</td></tr>
      <tr><td className="ex-name">低レバレッジ10倍</td><td>10倍</td><td>10％</td><td>150,000円</td></tr>
      <tr><td className="ex-name">低レバレッジ5倍</td><td>5倍</td><td>20％</td><td>300,000円</td></tr>
      <tr><td className="ex-name">レバレッジなし</td><td>1倍</td><td>100％</td><td>1,500,000円</td></tr>
    </tbody></table></div><p className="panel-note">米ドル/円150円、買い・売りの生成レート差、スワップ、未約定注文を考慮しない説明用の概算です。</p></div>

    <h2>必要証拠金の公式計算式</h2>
    <p>松井証券では、必要証拠金を「ポジション必要証拠金＋注文証拠金」と定義しています。建玉を維持する分だけでなく、発注済みで未約定の注文にも注文証拠金が必要です。</p>
    <div className="fx-formula"><span>個人口座のポジション必要証拠金</span><strong>必要証拠金</strong><b>＝ 当社生成レート × 建玉数量 × 証拠金率</b><small>買いはBid、売りはAsk。実際の画面では現在レートと端数処理が反映されます。</small></div>
    <div className="formula-box"><code>150円 × 10,000通貨 × 4％ ＝ 60,000円</code><small>25倍コースで米ドル/円を1万通貨保有する場合の説明用例です。</small></div>

    <h2>必要証拠金と「使える証拠金」は別</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>表示項目</th><th>意味</th><th>新規注文への影響</th></tr></thead><tbody>
      <tr><td className="ex-name">必要証拠金総額</td><td>建玉分＋未約定注文分</td><td>この金額を純資産で確保</td></tr>
      <tr><td className="ex-name">証拠金余力</td><td>純資産－必要証拠金総額</td><td>余力の範囲で新規注文</td></tr>
      <tr><td className="ex-name">リアルタイム維持率</td><td>（純資産－注文証拠金）÷ポジション必要証拠金×100</td><td>追証・ロスカット判定に使用</td></tr>
    </tbody></table></div></div>
    <p>決済益や建玉評価益があっても、振替可能額には計上されない場合があります。必要証拠金だけを見て出金や追加注文を判断せず、純資産・評価損益・未約定注文を同時に確認します。</p>

    <h2>低レバレッジにすると何が変わるか</h2>
    <p>同じ1万通貨なら、証拠金率が4％から20％へ上がると必要証拠金は5倍になります。一方、数量を変えないままコースだけを変更すると、口座内の拘束資金が増え、余力は小さくなります。コース変更は「安全になる」という一言で決めず、取引数量と純資産をセットで再計算します。</p>
    <div className="callout"><strong>コース変更前の3ステップ</strong><ol><li>現在の建玉・未約定注文の数量を合計</li><li>変更後の証拠金率で必要証拠金を再計算</li><li>追証100％・設定ロスカット率までの値幅を確認</li></ol></div>
    <p><Link href="/articles/matsui-fx-margin-call-losscut">追証とロスカットの基準を確認する →</Link></p>

    <h2>松井証券の証拠金シミュレーションを使う</h2>
    <p>公式シミュレーションでは、通貨ペア、レバレッジ、ロスカット率、建玉レート、純資産などを入力し、必要証拠金、追証発生ライン、ロスカットライン、最大発注数量を試算できます。概算式だけでなく、実際の取引条件へ近づけて確認するために活用します。</p>
    <ol><li>レバレッジコースとロスカット率を選ぶ</li><li>建玉レート・数量・純資産を入力する</li><li>必要証拠金と維持率100％・ロスカットまでの差額を見る</li><li>スプレッド拡大やスワップ支払いを加味して数量を下げる</li></ol>
    <p><Link href="/tools/matsui-fx-margin-calculator">当サイトの松井証券FX証拠金計算機を使う →</Link></p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/1897?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「FXの取引に必要な証拠金の計算方法」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/25558?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「レバレッジコースとは何ですか」</a></li>
      <li><a href="https://www.matsui.co.jp/fx/margin-sim/" target="_blank" rel="noopener noreferrer">松井証券「証拠金シミュレーション」</a></li>
      <li><a href="https://www.matsui.co.jp/disclaimer/fx.html" target="_blank" rel="noopener noreferrer">松井証券「FXのリスクおよび手数料等」</a></li>
    </ul><p>レバレッジ・証拠金の情報は2026年9月10日に確認しました。実際の必要証拠金は、取引画面の最新レート、数量、口座区分を優先してください。</p></section>

    <section className="article-affiliate" aria-label="松井証券の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は必要証拠金やリスクの説明に影響しません。FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。</p></section>
    <p><Link href="/fx/matsui">松井証券FXの取引条件一覧へ →</Link></p>
    <p><Link href="/articles/matsui-fx-one-currency">1通貨の必要証拠金を確認する →</Link></p>
    <p><Link href="/articles/matsui-fx-insufficient-funds">不足金の解消方法を確認する →</Link></p>
  </article>;
}
