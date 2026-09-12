import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-cfd-index-vs-commodity' },
  title: 'DMM CFDのIndexとCommodityの違い｜22銘柄・証拠金を比較',
  description: 'DMM CFD-IndexとCommodityを、取扱銘柄、レバレッジ、必要証拠金、取引単位、円換算、調整額、入金方法から比較します。',
};

const indexRows = [
  ['日本225', '10単位', 'JPY'], ['米国NYダウ30', '0.1単位', 'USD'], ['米国ナスダック100', '1単位', 'USD'], ['米国S&P500', '1単位', 'USD'],
  ['中国A50', '0.1単位', 'USD'], ['イギリス100', '0.1単位', 'GBP'], ['ドイツ40', '0.1単位', 'EUR'], ['ユーロ50', '0.1単位', 'EUR'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title, description: metadata.description,
    datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-cfd-index-vs-commodity',
    author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM CFD / INDEX VS COMMODITY</p>
    <h1>IndexとCommodityの違い<br />22銘柄を同じ基準で比較</h1>
    <p className="lede">DMM CFDは株価指数8銘柄と商品14銘柄を扱います。銘柄だけでなく、レバレッジ、取引単位、円換算レート、保有中の調整額が異なるため、同じ1Lotでも必要資金と値動きの影響は同じではありません。</p>

    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>DMM CFD-Index</th><th>DMM CFD-Commodity</th></tr></thead><tbody>
      <tr><td className="ex-name">対象</td><td>株価指数8銘柄</td><td>商品14銘柄</td></tr>
      <tr><td className="ex-name">レバレッジ</td><td>10倍</td><td>20倍</td></tr>
      <tr><td className="ex-name">証拠金率</td><td>取引額の10％以上</td><td>取引額の5％以上</td></tr>
      <tr><td className="ex-name">預入通貨</td><td>日本円</td><td>日本円</td></tr>
      <tr><td className="ex-name">取引手数料</td><td>無料</td><td>無料</td></tr>
      <tr><td className="ex-name">1回の注文上限</td><td>200Lot</td><td>200Lot</td></tr>
    </tbody></table></div></div>

    <h2>Indexの8銘柄と円換算</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>銘柄</th><th>1Lot</th><th>表示通貨</th></tr></thead><tbody>{indexRows.map(([name, unit, currency]) => <tr key={name}><td className="ex-name">{name}</td><td>{unit}</td><td>{currency}</td></tr>)}</tbody></table></div></div>
    <p>日本225は円建てです。米国指数と中国A50は米ドル、イギリス100は英ポンド、ドイツ40・ユーロ50はユーロで表示され、外貨建て銘柄の必要証拠金と損益は対象通貨対円の仲値で円換算されます。</p>

    <h2>Commodityは14銘柄を4群で考える</h2>
    <div className="fx-metric-grid">
      <article><b>METALS</b><h3>金・銀</h3><p>スポット価格を参照し、保有中は金利調整額の対象です。</p></article>
      <article><b>ENERGY</b><h3>原油・天然ガス</h3><p>先物価格を参照し、限月切替時の価格調整額を確認します。</p></article>
      <article><b>GRAINS</b><h3>コーン・大豆・小麦</h3><p>1Lotの計算単位は1ですが、1単位が100ブッシェルを表します。</p></article>
      <article><b>SOFTS</b><h3>畜産・ソフト商品</h3><p>生牛、豚肉、綿花、砂糖、コーヒー、ココア、オレンジジュースを扱います。</p></article>
    </div>

    <h2>必要証拠金の差はレバレッジだけで決まらない</h2>
    <div className="formula-box"><code>Index必要証拠金＝現在価格 × Lot数 × 取引単位 × 円換算レート ÷ 10</code><small>日本225の円換算レートは1です。</small></div>
    <div className="formula-box"><code>Commodity必要証拠金＝現在価格 × Lot数 × 取引単位 × 円換算レート ÷ 20</code><small>商品は米ドル建て。公式の取引単位を使い、物理量を二重に掛けません。</small></div>
    <p>Commodityは証拠金率が低くても、価格や取引単位が大きければ必要額は増えます。発注前に22銘柄の計算機で同じLot数を比較します。</p>
    <p><Link href="/tools/dmm-cfd-22-products-calculator">DMM CFD 22銘柄計算機を使う →</Link></p>

    <h2>選択の基準</h2>
    <ul>
      <li>日米欧中の株式市場全体を対象にするならIndex</li>
      <li>金・原油・農産物など商品価格を対象にするならCommodity</li>
      <li>短期売買でもスプレッドと約定差を確認する</li>
      <li>持越す場合は金利調整額または価格調整額の日程を確認する</li>
      <li>必要証拠金ではなく、想定逆行時の損失を基準にLot数を決める</li>
    </ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/cfd/service/outline/" target="_blank" rel="noopener noreferrer">DMM CFD-Index「サービス概要」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD-Commodity「サービス概要」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/lineup/" target="_blank" rel="noopener noreferrer">DMM CFD「取扱銘柄」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00115/" target="_blank" rel="noopener noreferrer">DMM FX/CFD FAQ「必要証拠金の計算」</a></li>
    </ul><p>銘柄数・取引単位・証拠金条件は2026年9月9日に確認しました。</p></section>

    <section className="article-affiliate" aria-label="DMM CFDの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">上記はアクセストレードの提携広告です。広告報酬は比較内容・計算式・評価に影響しません。CFDは元本や利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/dmm-cfd-account-opening-documents">口座開設の必要書類を確認 →</Link></p>
    <p><Link href="/articles/dmm-cfd-deposit-minimum-quick">最低入金額と入金方法を確認 →</Link></p>
  </article>;
}
