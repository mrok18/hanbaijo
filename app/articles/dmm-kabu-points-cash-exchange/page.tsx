import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM 株ポイントは何円？1％還元・現金交換・有効期限を計算',
  description: 'DMM 株ポイントについて、取引手数料1％の計算方法、1pt＝1円の現金交換、付与日、有効期限、NISAや手数料無料時に付かない条件を整理します。',
};

const faq = [
  { q: 'DMM 株ポイントは何円ですか？', a: '1ポイント＝1円として、1ポイントから現金へ交換できます。交換後はDMM 株アカウントへ入金され、取引や出金に利用できます。' },
  { q: 'ポイントはいつ付与されますか？', a: '前営業日に確定した国内株・米国株の取引手数料を合算し、約定日の翌営業日に付与されます。小数点以下のポイントは切り捨てです。' },
  { q: 'NISA取引でもポイントが付きますか？', a: 'NISA口座内の国内株・米国株は取引手数料が無料のため、その無料手数料からポイントは発生しません。手数料無料条件を満たす取引も同様です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-points-cash-exchange', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / STOCK POINT</p>
    <h1>DMM 株ポイントは何円？<br />1％還元と現金交換を計算</h1>
    <p className="lede">国内株・米国株の取引手数料の1％がポイントになります。ただし計算対象は税抜手数料で、1営業日分を合算した後に小数点以下を切り捨てるため、単純に税込手数料へ1％を掛けた額とは異なる場合があります。</p>

    <div className="callout"><strong>1pt＝1円、1ptから現金交換</strong><p>交換した現金はDMM 株アカウントへ入金されます。ポイントの有効期限は付与日から1年間です。</p></div>

    <h2>ポイント計算の4つのルール</h2>
    <ol><li>国内株式と米国株式の確定した取引手数料が対象</li><li>手数料は消費税を除いた金額で判定</li><li>1営業日の対象手数料を合計して1％を計算</li><li>小数点以下のポイントは切り捨て</li></ol>

    <h2>国内株の計算例</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>税込手数料の例</th><th>税抜相当</th><th>1％</th><th>付与目安</th></tr></thead><tbody>
      <tr><td className="ex-name">55円</td><td>50円</td><td>0.5pt</td><td>0pt</td></tr>
      <tr><td className="ex-name">198円</td><td>180円</td><td>1.8pt</td><td>1pt</td></tr>
      <tr><td className="ex-name">374円</td><td>340円</td><td>3.4pt</td><td>3pt</td></tr>
      <tr><td className="ex-name">880円</td><td>800円</td><td>8pt</td><td>8pt</td></tr>
    </tbody></table></div></div>
    <p><small>各手数料だけがその営業日に発生した仮定例です。同日の国内株・米国株手数料は合算後に計算されます。</small></p>
    <div className="fx-formula"><span>EXAMPLE / DAILY TOTAL</span><strong>税抜手数料800円 × 1％</strong><b>= 8ポイント</b><small>1ポイント＝1円として現金交換可能</small></div>

    <h2>米国株も円換算して対象</h2>
    <p>米国株式の取引手数料もポイント対象です。DMM.com証券所定の為替レートで円換算し、国内株式の手数料と合算して計算されます。為替コストやADR管理費用そのものがポイント対象になるとの案内ではありません。</p>

    <h2>ポイントが付かない主なケース</h2>
    <ul><li>NISA口座内で取引手数料が無料になった</li><li>キャンペーンなどの手数料無料条件を満たした</li><li>1日分の税抜手数料の1％が1ポイント未満だった</li><li>付与前で、約定日の翌営業日を迎えていない</li></ul>
    <div className="callout"><strong>還元はコストをゼロにしない</strong><p>ポイントは実際に支払った対象手数料の一部還元です。スプレッド、為替コスト、税金などを相殺するものではありません。</p></div>

    <h2>確認・交換する場所</h2>
    <p>PCは「DMM 株STANDARD」のポイント交換画面、スマホはノーマルモードの「ポイント交換・履歴」から残高確認と交換を行います。交換するポイント数と取引暗証番号を入力すると、DMM 株アカウントへ現金として反映されます。</p>
    <p><Link href="/articles/dmm-kabu-tools-comparison">DMM 株の取引ツールを比較 →</Link></p>

    <h2>有効期限と失効</h2>
    <p>有効期限は取得後1年間です。期限までに交換しないポイントは失効します。また、DMM 株サービスを解約した場合もポイントは失効するため、解約や口座整理の前に残高を確認します。</p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/service/point/" target="_blank" rel="noopener noreferrer">DMM 株「ポイント」</a></li>
      <li><a href="https://kabu.dmm.com/commission/" target="_blank" rel="noopener noreferrer">DMM 株「株式取引の手数料」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00454/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「ポイントの利用方法」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00452/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「ポイントの有効期限」</a></li>
      <li><a href="https://kabu.dmm.com/support/faqs/article/00453/" target="_blank" rel="noopener noreferrer">DMM 株 FAQ「ポイントが付かない場合」</a></li>
    </ul><p>ポイント条件は2026年9月9日に確認しました。キャンペーンや付与条件は変わることがあるため、取引前に公式の最新案内を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。ポイントだけで証券会社を選ばず、取引手数料とその他のコストを合計して比較してください。</p></section>
    <p><Link href="/articles/dmm-kabu-domestic-round-trip-fee">国内株の往復手数料を計算 →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
