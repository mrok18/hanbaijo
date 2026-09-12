import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fx-cfd-futures-margin-comparison' },
  title: 'FX・CFD・先物の違い｜必要証拠金と1単位の損益を比較',
  description: 'FX、CFD、日経225先物を、取引単位、必要証拠金、最小値動きの損益、ロスカット・追証、期限の違いから同じ表で比較します。',
};

const faq = [
  { q: '証拠金が少ない商品ほど安全ですか？', a: '安全とは限りません。証拠金は担保であり、損益は取引単位と価格変動で決まります。同じ証拠金でも大きな建玉を持てば損失も大きくなります。' },
  { q: 'FX・CFD・先物の必要証拠金は同じ計算ですか？', a: '同じではありません。FXは取引金額に対する証拠金率、CFDは銘柄ごとの証拠金率、先物は取引所・清算機関のVaR方式などで算出されます。' },
  { q: '日経225miniの1ティックはいくらですか？', a: '日経225miniは取引単位が日経平均×100円、呼値が5円なので、1枚の最小値動きは500円です。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/fx-cfd-futures-margin-comparison', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">CROSS-ASSET / MARGIN & RISK</p>
    <h1>FX・CFD・先物の違い<br />必要証拠金と1単位の損益を比較</h1>
    <p className="lede">「少額から始められる」という説明だけでは、商品のリスクは比べられません。必要証拠金、1単位の値動き損益、保有中の費用、ロスカットや追証を同じ順番で確認します。</p>

    <h2>3商品の構造を一つの表で見る</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>取引単位の考え方</th><th>証拠金の決まり方</th><th>損益の基準</th></tr></thead><tbody>
      <tr><td className="ex-name">個人向け店頭FX</td><td>通貨数</td><td>取引金額の4％以上（25倍以下）</td><td>為替差×通貨数</td></tr>
      <tr><td className="ex-name">DMM CFD</td><td>銘柄ごとのLot・数量</td><td>Index 10％、Commodity 5％など銘柄区分ごと</td><td>価格差×取引単位</td></tr>
      <tr><td className="ex-name">日経225mini先物</td><td>日経平均×100円／枚</td><td>取引所・清算機関のVaR方式</td><td>指数差×100円</td></tr>
    </tbody></table></div><p className="panel-note">証拠金率や銘柄区分は会社・商品で異なります。実際の発注画面に表示される必要証拠金を優先してください。</p></div>

    <h2>必要証拠金と取引金額を分ける</h2>
    <p>FXの個人取引では、金融庁が取引金額の4％以上（レバレッジ25倍以下）の証拠金を求めています。例えば米ドル/円150円で1万通貨なら取引金額は150万円、4％の単純計算は6万円です。スプレッド、スワップ、ロスカット水準、会社独自の上乗せは別に確認します。</p>
    <p>CFDは銘柄の取引金額に証拠金率を掛けます。DMM CFDの案内では、Indexは10％、Commodityは5％が必要証拠金の目安です。銘柄ごとの取引単位や価格調整額があるため、率だけでなく1Lotの中身を確認します。</p>
    <p>先物の証拠金は売買代金の一部を固定で預ける仕組みではなく、相場変動を反映するVaR方式で変わります。証券会社の必要証拠金と、取引所・JSCCの基準を区別します。</p>
    <div className="fx-formula"><span>FXの単純な必要証拠金</span><strong>為替レート × 通貨数 × 証拠金率</strong><b>150円 × 10,000通貨 × 4％ ＝ 60,000円</b><small>法定最低水準を使った概算。実際の必要額と余裕資金は口座画面で確認してください。</small></div>

    <h2>1単位の値動き損益をそろえる</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>例</th><th>最小刻み</th><th>1単位の損益</th><th>読み方</th></tr></thead><tbody>
      <tr><td className="ex-name">FX・米ドル/円1万通貨</td><td>0.1銭（0.001円）</td><td>約10円</td><td>1pipの変動を円換算</td></tr>
      <tr><td className="ex-name">日経225mini 1枚</td><td>5円</td><td>500円</td><td>5円×100円</td></tr>
      <tr><td className="ex-name">日経225マイクロ 1枚</td><td>5円</td><td>50円</td><td>5円×10円</td></tr>
    </tbody></table></div></div>
    <p>CFDは銘柄ごとに呼値・取引単位が異なるため、商品ページの1ティック損益を確認します。同じ「1Lot」でも、指数・金・原油で動く金額は一致しません。</p>

    <h2>ロスカット・追証・期限の違い</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>不足時の扱い</th><th>期限・保有費</th></tr></thead><tbody>
      <tr><td className="ex-name">FX</td><td>有効証拠金が基準を下回るとロスカット</td><td>期限なし。スワップの受払がある</td></tr>
      <tr><td className="ex-name">CFD</td><td>維持率基準で追証・ロスカット。会社ごとに判定</td><td>期限なし。金利・価格調整額がある</td></tr>
      <tr><td className="ex-name">先物</td><td>証拠金不足で追加差入れ・強制決済</td><td>限月・SQがあり、乗換や最終決済が必要</td></tr>
    </tbody></table></div></div>
    <p>ロスカットは損失を一定額に固定する機能ではなく、急変時には預託額を上回る損失や不足金が発生する場合があります。判定時点、追証の解消期限、手数料を各社のルールで確認します。</p>

    <h2>比較するときの順番</h2>
    <ol><li>取引単位と最小値動きの損益を確認する</li><li>現在価格から取引金額を計算する</li><li>必要証拠金と、評価損に耐える余裕資金を分ける</li><li>スプレッド・手数料・スワップ／調整額を保有期間に掛ける</li><li>ロスカット、追証、限月などの終了条件を確認する</li></ol>
    <p>同じ10万円の入金でも、商品の取引単位とレバレッジで持てる建玉は変わります。広告の「最低○円」ではなく、想定損失と追加資金まで含めて比較します。</p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" target="_blank" rel="noopener noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
      <li><a href="https://kabu.dmm.com/service/substitute/" target="_blank" rel="noopener noreferrer">DMM 株「DMM FX/CFD 投資にかかる手数料、リスク等」</a></li>
      <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225mini/01.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225mini 制度概要」</a></li>
      <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225mini/" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225mini 商品概要」</a></li>
    </ul><p>制度・証拠金の説明は2026年9月9日に確認しました。証拠金、スプレッド、調整額、追証基準は変更される場合があるため、取引前に各社の契約締結前交付書面と取引画面を確認してください。</p></section>

    <section className="article-affiliate" aria-label="関連サービスの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記は提携広告です。広告報酬は比較結果に影響しません。元本や利益、ロスカット回避を保証するものではありません。</p></section>
    <p><Link href="/tools/dmm-cfd-22-products-calculator">DMM CFD 22銘柄の証拠金を計算する →</Link></p>
    <p><Link href="/tools/matsui-fx-margin-calculator">FXの必要証拠金を計算する →</Link></p>
    <p><Link href="/tools/matsui-futures-cost-calculator">先物の値動き・手数料を計算する →</Link></p>
    <p><Link href="/articles/cfd-vs-futures-nikkei225">日経225 CFDと先物の個別比較 →</Link></p>
    <p><Link href="/fx">FXの取引コスト比較へ →</Link></p>
    <p><Link href="/cfd">CFDの取引コスト比較へ →</Link></p>
    <p><Link href="/futures">先物の取引コスト比較へ →</Link></p>
  </article>;
}
