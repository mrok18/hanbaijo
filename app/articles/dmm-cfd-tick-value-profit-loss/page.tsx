import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-cfd-tick-value-profit-loss' },
  title: 'DMM CFDは1ティックいくら？商品14銘柄の損益早見表',
  description: 'DMM CFDの商品14銘柄について、1Lotの取引単位と呼値から、最小値幅が何米ドル・何円の損益になるかを一覧で計算します。',
};

const rows = [
  ['原油', '10単位（10バレル）', '0.001ドル', '1.6円'],
  ['金スポット', '1単位（1トロイオンス）', '0.1ドル', '16円'],
  ['銀スポット', '10単位（10トロイオンス）', '0.001ドル', '1.6円'],
  ['天然ガス', '100単位（100MMBtu）', '0.001ドル', '16円'],
  ['コーン', '1単位（100ブッシェル）', '0.1ドル', '16円'],
  ['大豆', '1単位（100ブッシェル）', '0.1ドル', '16円'],
  ['小麦', '1単位（100ブッシェル）', '0.01ドル', '1.6円'],
  ['生牛', '1単位（100ポンド）', '0.001ドル', '0.16円'],
  ['赤身豚肉', '1単位（100ポンド）', '0.001ドル', '0.16円'],
  ['綿花', '1単位（100ポンド）', '0.01ドル', '1.6円'],
  ['砂糖', '10単位（1,000ポンド）', '0.01ドル', '16円'],
  ['コーヒー', '1単位（100ポンド）', '0.01ドル', '1.6円'],
  ['ココア', '0.1単位（0.1メトリックトン）', '1ドル', '16円'],
  ['オレンジジュース', '0.1単位（10ポンド）', '0.01ドル', '0.16円'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    datePublished: '2026-09-09',
    dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-cfd-tick-value-profit-loss',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM CFD / TICK VALUE</p>
    <h1>DMM CFDは1ティックいくら？<br />商品14銘柄を円換算</h1>
    <p className="lede">商品CFDは、1Lotの中身と最小の値動きが銘柄ごとに違います。DMM CFD公式の「取引単位」と「呼値」を使い、1ティック動いたときの損益を円へ直します。</p>

    <h2>1ティックの円損益は3段階に分かれる</h2>
    <p>米ドル円を160円と仮定した場合、1Lot・1ティックの損益は0.16円、1.6円、16円のいずれかになります。Lot数を増やせば、この金額にLot数を掛けます。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>銘柄</th><th>1Lotの公式表記</th><th>呼値</th><th>1Lot・1ティック</th></tr></thead><tbody>
      {rows.map(([name, unit, tick, value]) => <tr key={name}><td className="ex-name">{name}</td><td>{unit}</td><td>{tick}</td><td>{value}</td></tr>)}
    </tbody></table></div></div>
    <p>円損益は米ドル円160円の仮定値です。実際の円換算には決済時点の対象通貨対円レートが使われるため、為替変動でも金額が変わります。</p>

    <h2>取引単位と物理量を二重に掛けない</h2>
    <p>コーンの「1単位（100ブッシェル）」は、1Lotの取引単位が1で、その1単位が100ブッシェル相当という表記です。損益式へ100をもう一度掛けるのではありません。大豆、小麦、生牛、赤身豚肉、綿花、コーヒーも同様に、公式の取引単位は1です。</p>
    <div className="formula-box"><code>買いの損益＝（決済価格－新規価格）× Lot数 × 取引単位 × 円換算レート</code><small>DMM公式FAQの計算式。売りは新規価格と決済価格を反対にします。</small></div>
    <p>たとえばコーンを3Lot買い、表示価格が0.5ドル上昇し、決済時の米ドル円が160円なら「0.5 × 3Lot × 1単位 × 160円＝240円」の概算利益です。</p>

    <h2>呼値はスプレッドとは別の数字</h2>
    <p>呼値は注文価格が動く最小刻みです。AskとBidの差であるスプレッドではありません。取引開始直後の差引損益を確認するときは、スプレッド、想定スリッページ、価格調整額などを別途円換算します。</p>
    <div className="formula-box"><code>コスト回収に必要なティック数＝総コスト（円）÷ 1ティックの円損益</code><small>計算結果は端数を切り上げ、最低でもそのティック数を超える有利な値動きが必要です。</small></div>

    <h2>必要証拠金と損失上限は同じではない</h2>
    <p>DMM CFD-Commodityのレバレッジは20倍で、必要証拠金は取引金額の5％以上です。これは発注に必要な基準額であり、損失を証拠金額に限定する仕組みではありません。</p>
    <div className="formula-box"><code>必要証拠金＝現在価格 × Lot数 × 取引単位 × 円換算レート ÷ 20</code><small>最新の必要額はDMM CFDの取引画面で確認してください。</small></div>

    <h2>14銘柄の損益を自分の条件で計算</h2>
    <p>新規価格、決済価格、売買方向、Lot数、米ドル円を入力すると、値動き損益、1ティック価値、証拠金5％目安、総コスト差引後をまとめて確認できます。</p>
    <p><Link href="/tools/dmm-cfd-tick-value-calculator">DMM CFD 14銘柄損益計算機を使う →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD「商品CFD サービス概要」</a></li>
      <li><a href="https://fx.dmm.com/policy/regulation/overview_cfd.pdf" target="_blank" rel="noopener noreferrer">DMM CFD「店頭デリバティブ取引説明書」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00208/" target="_blank" rel="noopener noreferrer">DMM CFD FAQ「損益の計算方法」</a></li>
      <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「金利調整額・価格調整額」</a></li>
    </ul><p>取引単位、呼値、計算式は2026年9月9日に公式情報で確認しました。計算例の価格・為替は仮定値です。</p></section>

    <section className="article-affiliate" aria-label="DMM CFDの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">上記はアクセストレードの提携広告です。広告報酬は計算式や掲載順に影響しません。CFDは元本および利益が保証されず、証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/dmm-cfd-commodity-lot-list">DMM CFD商品14銘柄の1Lot一覧 →</Link></p>
    <p><Link href="/tools/cfd-margin-calculator">商品14銘柄の必要証拠金を計算 →</Link></p>
    <p><Link href="/cfd/dmm-cfd">DMM CFDの取引条件一覧へ →</Link></p>
  </article>;
}
