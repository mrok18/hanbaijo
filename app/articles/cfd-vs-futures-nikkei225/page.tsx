import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '日経225 CFDと先物の違い｜取引単位・期限・コストを比較',
  description: '日経225を対象とするCFDと取引所先物について、取引相手、取引単位、限月、証拠金、スプレッド・手数料の違いを整理します。',
};

const COMPARISON = [
  { item: '取引の場', cfd: 'CFD会社との店頭取引', futures: '大阪取引所の上場取引' },
  { item: '価格', cfd: 'CFD会社がBid・Askを提示', futures: '取引所の注文が板でマッチング' },
  { item: '取引期限', cfd: '通常は顧客ポジションに期限を設けず、参照限月を切替', futures: '限月ごとに取引最終日と最終決済がある' },
  { item: '証拠金', cfd: 'DMM CFDの指数は取引額の10％以上', futures: 'JSCCのVaR方式を基礎に証券会社が設定' },
  { item: '主なコスト', cfd: 'スプレッド、価格調整額など', futures: '証券会社の売買手数料、板の売買差など' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">NIKKEI 225 / CFD VS FUTURES</p>
      <h1>日経225 CFDと先物の違い<br />取引単位・期限・コストを比較</h1>
      <p className="lede">どちらも日経平均の値動きを対象に、証拠金を使って買い・売りの両方向を取引できます。ただし、価格が決まる場所、期限、証拠金、負担するコストは同じではありません。</p>

      <div className="callout"><strong>最大の違いは「店頭」か「取引所」か</strong><p>CFDは取扱会社との相対取引です。日経225先物は大阪取引所に上場し、市場参加者の注文が取引所で成立します。</p></div>

      <h2>5項目で違いを整理</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>比較項目</th><th>DMM CFD・日本225</th><th>日経225先物</th></tr></thead>
          <tbody>{COMPARISON.map((row) => (
            <tr key={row.item}><td className="ex-name">{row.item}</td><td>{row.cfd}</td><td>{row.futures}</td></tr>
          ))}</tbody>
        </table>
      </div></div>

      <h2>取引単位は「日経平均 × 倍率」で決まる</h2>
      <p>DMM CFDの日本225は1Lot＝10単位です。JPXの日経225先物はラージが指数×1,000円、miniが指数×100円、マイクロが指数×10円です。指数を40,000円と仮定すると、1単位あたりの取引金額は次のとおりです。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>商品</th><th className="num">倍率</th><th className="num">指数40,000円の取引金額</th><th className="num">10円動いた損益</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">DMM CFD 日本225 1Lot</td><td className="num">×10</td><td className="num">40万円</td><td className="num"><strong>100円</strong></td></tr>
            <tr><td className="ex-name">日経225マイクロ先物 1枚</td><td className="num">×10円</td><td className="num">40万円</td><td className="num"><strong>100円</strong></td></tr>
            <tr><td className="ex-name">日経225mini 1枚</td><td className="num">×100円</td><td className="num">400万円</td><td className="num"><strong>1,000円</strong></td></tr>
            <tr><td className="ex-name">日経225先物 1枚</td><td className="num">×1,000円</td><td className="num">4,000万円</td><td className="num"><strong>10,000円</strong></td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">指数40,000円の単純例。DMM CFDと取引所先物では価格形成・取引条件が異なるため、倍率が同じでも同一商品ではありません。</p></div>

      <h2>先物には限月、CFDには価格調整がある</h2>
      <p>取引所先物は限月ごとに取引最終日があり、反対売買をしなければSQ値などで最終決済されます。日経225先物の取引最終日は、原則として各限月の第2金曜日の前日に終了する取引日です。</p>
      <p>DMM CFDの日本225は先物価格を参照しますが、顧客の建玉を限月ごとに最終決済する代わりに、参照先物の切替時に価格調整額を受け払いします。長期保有では「期限がない」だけを見ず、調整日を確認します。</p>

      <h2>証拠金の決まり方も違う</h2>
      <div className="formula-box">
        <code>DMM CFD 日本225：現在レート × Lot数 × 10単位 ÷ 10</code>
        <code>取引所先物：JSCCのVaR方式を基礎に、各証券会社が必要額を設定</code>
      </div>
      <p>CFDはレバレッジ倍率から必要証拠金を計算しやすい一方、取引所先物の証拠金は市場変動などに応じて変わります。どちらも必要証拠金ぎりぎりではなく、想定損失を含めた余力が必要です。</p>

      <h2>コストは同じ項目で比べない</h2>
      <div className="fx-metric-grid">
        <article><b>CFD</b><h3>提示スプレッド</h3><p>会社が提示するBidとAskの差を、取引単位とLot数で円換算します。</p></article>
        <article><b>CFD</b><h3>価格調整額</h3><p>参照先物の限月切替日に保有している場合、受取りまたは支払いが発生します。</p></article>
        <article><b>FUTURES</b><h3>売買手数料</h3><p>証券会社ごとの1枚あたり手数料を、新規と決済の往復で数えます。</p></article>
        <article><b>FUTURES</b><h3>板の価格差</h3><p>最良売気配と最良買気配の差、注文数量に対する板の厚さを確認します。</p></article>
      </div>

      <h2>選ぶときの確認順</h2>
      <ul>
        <li>取引したい金額に合う最小取引単位か</li>
        <li>数日・数週間保有するか、当日中に決済するか</li>
        <li>店頭提示価格と取引所の板、どちらで発注したいか</li>
        <li>手数料・スプレッド・調整額を円換算した往復総額</li>
        <li>ロスカット、追証、限月など決済ルールを理解できるか</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jsda.or.jp/about/hatten/risk/cfd/index.html" target="_blank" rel="noopener noreferrer">日本証券業協会「証券CFD取引の特徴やリスクとは？」</a></li>
          <li><a href="https://www.jpx.co.jp/derivatives/products/domestic/225futures/01.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「日経225先物 制度概要」</a></li>
          <li><a href="https://www.jpx.co.jp/derivatives/rules/margin/index.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「証拠金とは」</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/outline/" target="_blank" rel="noopener noreferrer">DMM CFD-Index「サービス概要」</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
        </ul>
        <p>制度・取引単位は2026年9月7日に確認しました。手数料と証拠金は各社の最新情報を確認してください。</p>
      </section>

      <p><Link href="/articles/futures-tick-value">日経225先物の1ティックを計算する →</Link></p>
      <p><Link href="/articles/dmm-cfd-total-cost">DMM CFDの総コストを見る →</Link></p>
      <p><Link href="/cfd/dmm-cfd">DMM CFDのコストシートを見る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。商品の比較・計算とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
