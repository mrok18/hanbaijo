import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-margin-trading-cost' },
  title: 'DMM 株の信用取引手数料は無料？金利・貸株料・逆日歩を計算',
  description: 'DMM 株の国内信用取引について、0円の売買手数料と、買方金利、貸株料、逆日歩、事務管理費、名義書換料、デイトレ強制決済を整理します。',
};

const faq = [
  { q: 'DMM 株の国内信用取引は本当に手数料無料ですか？', a: '通常の国内信用取引手数料は約定金額にかかわらず0円です。ただし、金利、貸株料、逆日歩、事務管理費、名義書換料などは別に発生します。' },
  { q: '信用買いを当日中に返済しても金利はかかりますか？', a: 'かかります。DMM 株の公式案内では、日計り取引でも1日分の買方金利が発生します。' },
  { q: 'デイトレ信用を翌日に持ち越すとどうなりますか？', a: '当日中に返済されない建玉は翌営業日に強制返済され、1約定につき3,300円（税込）の手数料がかかります。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-margin-trading-cost', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / MARGIN COST</p>
    <h1>DMM 株の信用取引コスト<br />無料手数料の外側を計算</h1>
    <p className="lede">国内信用取引の売買手数料は0円ですが、保有日数に応じる金利・貸株料や、条件付きの逆日歩・管理費が残ります。「約定手数料0円」と「総コスト0円」を分けて確認します。</p>

    <div className="callout"><strong>短期でも1日分の保有コスト</strong><p>信用買いの金利と制度信用売りの貸株料は、当日中に返済しても1日分が発生します。土日祝日をまたぐ受渡日程にも注意します。</p></div>

    <h2>制度信用・一般信用を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>区分</th><th>方向</th><th>ゲストコース年率</th><th>期限・特徴</th></tr></thead><tbody>
      <tr><td className="ex-name">制度信用</td><td>買建</td><td>買方金利2.8％</td><td>返済期限6か月、逆日歩を受取る場合あり</td></tr>
      <tr><td className="ex-name">制度信用</td><td>売建</td><td>貸株料1.1％</td><td>返済期限6か月、逆日歩支払の可能性</td></tr>
      <tr><td className="ex-name">一般信用・無期限</td><td>買建</td><td>買方金利2.8％</td><td>原則無期限、逆日歩なし</td></tr>
      <tr><td className="ex-name">一般信用・デイトレ</td><td>買建</td><td>買方金利2.1％</td><td>当日返済、持越しは強制決済</td></tr>
    </tbody></table></div><p className="panel-note">VIPコースは制度信用2.28％、一般信用・無期限2.1％。料率は市場動向等で変わる可能性があります。</p></div>

    <h2>信用買い100万円を30日保有する例</h2>
    <div className="fx-formula"><span>ゲストコース・年率2.8％</span><strong>1,000,000円 × 2.8％ ÷ 365 × 30日</strong><b>≒ 2,301円</b><small>金利のみの概算。受渡日基準の日数、端数処理、その他費用は含みません。</small></div>
    <p>株価が変わらなくても金利は日々積み上がります。保有期間が延びるほど、利益を出すために必要な値上がり幅も大きくなります。</p>

    <h2>制度信用売り100万円を30日保有する例</h2>
    <div className="fx-formula"><span>貸株料・年率1.1％</span><strong>1,000,000円 × 1.1％ ÷ 365 × 30日</strong><b>≒ 904円</b><small>貸株料のみ。逆日歩、配当落調整額、その他費用は含みません。</small></div>
    <p>制度信用の売建では、株不足時に逆日歩（品貸料）が追加される場合があります。逆日歩は事前に金額を確定できず、休日を含む日数分がまとまって発生することもあるため、貸株料だけでは上限を読めません。</p>

    <h2>長期保有で加わる事務管理費</h2>
    <p>新規建日から1か月ごとの応当日を越えるたび、1株あたり11銭（税込）の事務管理費が発生します。建玉ごとの月額は最低110円、上限1,100円です。単元株制度の適用を受けない銘柄は1株あたり110円となります。</p>
    <p>株価が低く株数が多い建玉では、建玉金額だけでなく株数も管理費へ影響します。</p>

    <h2>権利確定日をまたぐ買建の名義書換料</h2>
    <p>買建玉のまま決算期末等の権利確定日を越えると、名義書換料（権利手数料）が1取引単位あたり55円（税込）かかります。ETF・ETNは1取引単位あたり5.5円（税込）です。</p>
    <p>配当や株主優待の権利を目的に現物株と信用売りを組み合わせる場合は、貸株料・逆日歩・配当落調整額なども含めて採算を確認します。</p>

    <h2>デイトレ信用の持越しは3,300円</h2>
    <p>一般信用のデイトレ建玉は当日中の返済が前提です。未返済の建玉は翌営業日に強制返済され、その際は通常の手数料0円の対象外となり、1約定につき3,300円（税込）がかかります。</p>
    <div className="callout"><strong>引け前に建玉と注文結果を確認</strong><p>返済注文を出しただけでなく、約定して建玉がゼロになったことを確認します。通信障害や値幅制限で約定しないリスクもあります。</p></div>

    <h2>総コストのチェック順</h2>
    <ol><li>制度信用・一般信用・デイトレの区分を確認</li><li>買建は買方金利、売建は貸株料を日数で計算</li><li>制度信用売りは逆日歩の発生状況を確認</li><li>1か月超なら事務管理費を追加</li><li>権利確定日をまたぐ買建は名義書換料を追加</li><li>配当落調整額、強制決済等の条件付き費用を確認</li></ol>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/jp/margin/outline/" target="_blank" rel="noopener noreferrer">DMM 株「信用取引の商品概要・取引ルール」</a></li>
      <li><a href="https://kabu.dmm.com/commission/" target="_blank" rel="noopener noreferrer">DMM 株「手数料・信用金利・貸株料」</a></li>
      <li><a href="https://kabu.dmm.com/start/guide/margin_beginner/cost/" target="_blank" rel="noopener noreferrer">DMM 株「国内信用取引のコスト」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00294/" target="_blank" rel="noopener noreferrer">DMM 株「事務管理費とは」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00293/" target="_blank" rel="noopener noreferrer">DMM 株「名義書換料とは」</a></li>
    </ul><p>料率と取引条件は2026年9月9日に確認しました。金利、規制、逆日歩等は変動するため、発注前に公式画面と最新書面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。信用取引は委託保証金を超える損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">現物取引の往復手数料を確認 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
