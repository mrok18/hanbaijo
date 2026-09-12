import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-cfd-commodity-lot-list' },
  title: 'DMM CFD商品14銘柄の1Lot一覧｜単位を間違えない早見表',
  description: 'DMM CFD商品14銘柄の1Lot取引単位、対応する物理量、必要証拠金の計算方法を一覧で確認できます。',
};

const rows = [
  ['原油', '10単位', '10バレル'], ['金スポット', '1単位', '1トロイオンス'], ['銀スポット', '10単位', '10トロイオンス'], ['天然ガス', '100単位', '100MMBtu'],
  ['コーン', '1単位', '100ブッシェル'], ['大豆', '1単位', '100ブッシェル'], ['小麦', '1単位', '100ブッシェル'], ['生牛', '1単位', '100ポンド'],
  ['赤身豚肉', '1単位', '100ポンド'], ['綿花', '1単位', '100ポンド'], ['砂糖', '10単位', '1,000ポンド'], ['コーヒー', '1単位', '100ポンド'],
  ['ココア', '0.1単位', '0.1メトリックトン'], ['オレンジジュース', '0.1単位', '10ポンド'],
] as const;

export default function Page() {
  return <article>
    <p className="page-kicker">DMM CFD / LOT LIST</p>
    <h1>商品14銘柄の1Lot一覧<br />単位を間違えない早見表</h1>
    <p className="lede">商品CFDは銘柄ごとに1Lotの取引単位と、その単位が表す物理量が違います。必要証拠金と値動きの影響は、公式の取引単位を使って比較します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>銘柄</th><th>計算に使う取引単位</th><th>1Lotが表す物理量</th></tr></thead><tbody>{rows.map(([name, unit, physical]) => <tr key={name}><td className="ex-name">{name}</td><td>{unit}</td><td>{physical}</td></tr>)}</tbody></table></div></div>
    <div className="formula-box"><code>必要証拠金＝現在価格 × 取引単位 × Lot数 × 円換算レート ÷ 20</code><small>DMM CFD-Commodityのレバレッジ20倍に基づく基本式。</small></div>
    <div className="callout"><strong>コーンへ100を掛ける式ではありません</strong><p>「1単位（100ブッシェル）」は、公式計算式へ掛ける取引単位が1で、その1単位が100ブッシェル相当という意味です。大豆、小麦なども同じように分けて読みます。</p></div>
    <h2>Lot比較の注意</h2><ul><li>同じ価格差でも取引単位を掛けた損益は異なる</li><li>外貨建て銘柄は円換算レートも変動する</li><li>金・銀は金利調整額、その他は価格調整額の対象</li><li>取引時間と呼値は銘柄ごとに異なる</li></ul>
    <section className="article-sources"><h2>公式資料</h2><ul><li><a href="https://fx.dmm.com/cfd/service/outline_commodity/" target="_blank" rel="noopener noreferrer">DMM CFD-Commodityサービス概要</a></li><li><a href="https://fx.dmm.com/support/faqs/article/00208/" target="_blank" rel="noopener noreferrer">DMM CFD FAQ「損益の計算方法」</a></li></ul><p>2026年9月9日確認。</p></section>
    <p><Link href="/articles/dmm-cfd-tick-value-profit-loss">14銘柄の1ティック損益を見る →</Link></p>
    <p><Link href="/tools/dmm-cfd-tick-value-calculator">値動き損益を計算する →</Link></p>
    <p><Link href="/articles/dmm-cfd-margin-leverage">必要証拠金の計算 →</Link></p>
    <p><Link href="/articles/dmm-cfd-agriculture-trading-hours">農産物の取引時間 →</Link></p>
    <section className="article-affiliate"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /></section>
  </article>;
}
