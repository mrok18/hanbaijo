import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDの必要証拠金はいくら？日本225・金・原油で計算',
  description: 'DMM CFDのレバレッジと1Lotの取引単位を確認し、日本225、金スポット、原油の必要証拠金を仮定レートで計算します。',
};

const EXAMPLES = [
  { product: '日本225', type: '指数', rate: '40,000円', unit: '10単位', conversion: '不要', margin: '40,000円' },
  { product: '米国ナスダック100', type: '指数', rate: '25,000', unit: '1単位', conversion: '150円', margin: '375,000円' },
  { product: '金スポット', type: '商品', rate: '3,500ドル', unit: '1トロイオンス', conversion: '150円', margin: '26,250円' },
  { product: '原油', type: '商品', rate: '70ドル', unit: '10バレル', conversion: '150円', margin: '5,250円' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM CFD / REQUIRED MARGIN</p>
      <h1>DMM CFDの必要証拠金はいくら？<br />日本225・金・原油で計算</h1>
      <p className="lede">必要証拠金は「1Lotだから同じ」ではありません。指数CFDは取引額の10％以上、商品CFDは5％以上ですが、銘柄ごとの取引単位と円換算レートによって実額が大きく変わります。</p>

      <div className="callout"><strong>先に確認する3項目</strong><p>現在レート、注文するLot数、銘柄ごとの1Lotの取引単位です。日本225以外の外貨建て銘柄では、対象通貨対円の仲値による円換算も加わります。</p></div>

      <h2>指数は10倍、商品は20倍</h2>
      <div className="formula-box">
        <code>指数CFDの必要証拠金 ＝ 現在レート × Lot数 × 取引単位 ÷ 10</code>
        <code>商品CFDの必要証拠金 ＝ 現在レート × Lot数 × 取引単位 ÷ 20</code>
        <small>外貨建て銘柄は、さらに対象通貨対円の仲値を掛けて円換算します。</small>
      </div>
      <p>「レバレッジ10倍」は取引額の約10％、「20倍」は約5％の証拠金で取引する仕組みです。証拠金は商品の購入代金ではなく、損益を受け止める担保として差し入れる金額です。</p>

      <h2>1Lotの必要証拠金を試算</h2>
      <p>以下は計算方法を確認するための仮定です。実勢レートではなく、日本225を40,000円、米国ナスダック100を25,000、金を3,500ドル、原油を70ドル、米ドル/円を150円として計算しています。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>銘柄</th><th>区分</th><th className="num">仮定レート</th><th className="num">1Lotの取引単位</th><th className="num">円換算</th><th className="num">必要証拠金</th></tr></thead>
          <tbody>{EXAMPLES.map((example) => (
            <tr key={example.product}><td className="ex-name">{example.product}</td><td>{example.type}</td><td className="num">{example.rate}</td><td className="num">{example.unit}</td><td className="num">{example.conversion}</td><td className="num"><strong>{example.margin}</strong></td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">すべて1Lotの単純試算。実際の必要証拠金は現在レートと円換算レートに応じてリアルタイムで変動します。</p></div>

      <h2>日本225は「40,000 × 10 ÷ 10」</h2>
      <p>日本225が40,000円の場合、1Lotは10単位です。取引額は40万円、必要証拠金はその10％にあたる4万円となります。日本225は円建てなので、米ドル/円を掛ける必要はありません。</p>
      <div className="formula-box"><code>40,000円 × 1Lot × 10単位 ÷ 10 ＝ 40,000円</code></div>

      <h2>金と原油は、同じ商品CFDでも取引単位が違う</h2>
      <p>金スポットは1Lot＝1トロイオンス、原油は1Lot＝10バレルです。どちらもレバレッジ20倍ですが、現在レートと取引単位が違うため、必要証拠金はそろいません。</p>
      <div className="formula-box">
        <code>金：3,500ドル × 1 × 1 ÷ 20 × 150円 ＝ 26,250円</code>
        <code>原油：70ドル × 1 × 10 ÷ 20 × 150円 ＝ 5,250円</code>
      </div>

      <h2>最低額だけの入金は余力が小さい</h2>
      <p>必要証拠金ぎりぎりの入金では、わずかな逆行でも証拠金維持率が急低下します。DMM CFDでは証拠金維持率が100％を下回ったまま判定時刻を迎えると追加証拠金が発生し、50％以下になるとロスカットの対象です。</p>
      <ul>
        <li>必要証拠金と、実際に入金する運用資金を分ける</li>
        <li>想定する逆行幅を「値幅 × 取引単位 × Lot数」で円換算する</li>
        <li>指標発表や休場明けの価格飛びも余力に含める</li>
        <li>保有中の調整額とスプレッドを必要資金に加える</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fx.dmm.com/support/faqs/article/00115/" target="_blank" rel="noopener noreferrer">DMM FX/CFD「ポジション必要証拠金はどのように計算されていますか？」</a></li>
          <li><a href="https://fx.dmm.com/support/gloss/detail/8502/" target="_blank" rel="noopener noreferrer">DMM FX/CFD用語集「Lot」</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/outline/" target="_blank" rel="noopener noreferrer">DMM CFD-Index「サービス概要」</a></li>
          <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD-Commodity「サービス概要」</a></li>
        </ul>
        <p>制度・取引単位は2026年9月7日に確認しました。試算レートは説明用の仮定であり、実際の取引条件ではありません。</p>
      </section>

      <p><Link href="/cfd/dmm-cfd">DMM CFDのコストシートを見る →</Link></p>
      <p><Link href="/articles/dmm-cfd-total-cost">DMM CFDの総コストを確認する →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。計算方法・事実確認とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
