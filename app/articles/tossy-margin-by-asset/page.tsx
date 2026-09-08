import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'TOSSYの必要証拠金｜6資産を100万円取引で比較',
  description: 'TOSSYのFX、株式、株価指数、バラエティ、商品、暗号資産CFDについて、個人の証拠金率と100万円取引時の必要額を比較します。',
};

const rows = [
  { asset: 'FX', rate: '4％以上', margin: '40,000円以上', leverage: '最大約25倍' },
  { asset: '株式CFD', rate: '20％以上', margin: '200,000円以上', leverage: '最大約5倍' },
  { asset: '株価指数CFD', rate: '10％以上', margin: '100,000円以上', leverage: '最大約10倍' },
  { asset: 'バラエティCFD', rate: '20％以上', margin: '200,000円以上', leverage: '最大約5倍' },
  { asset: '商品CFD', rate: '5％以上', margin: '50,000円以上', leverage: '最大約20倍' },
  { asset: '暗号資産CFD', rate: '50％以上', margin: '500,000円以上', leverage: '最大約2倍' },
] as const;

export default function Page() {
  return <article><p className="page-kicker">TOSSY / MARGIN BY ASSET</p><h1>TOSSYの必要証拠金<br />100万円の取引で6資産を比較</h1><p className="lede">同じアプリでも必要証拠金率は4％以上から50％以上まで異なります。個人が取引金額100万円のポジションを持つ単純例で、必要額の桁を揃えて比較します。</p>

    <h2>100万円取引時の最低証拠金の目安</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>アセット区分</th><th>証拠金率</th><th>100万円取引の必要額</th><th>倍率目安</th></tr></thead><tbody>{rows.map((row) => <tr key={row.asset}><td className="ex-name">{row.asset}</td><td>{row.rate}</td><td>{row.margin}</td><td>{row.leverage}</td></tr>)}</tbody></table></div><p className="panel-note">個人アカウントの公式最低証拠金率に取引金額100万円を掛けた単純計算。実際の注文必要額は銘柄・価格・数量・口座状況で変わります。</p></div>

    <h2>計算式は取引金額×証拠金率</h2><div className="formula-box"><code>必要証拠金の目安 ＝ 取引金額 × 証拠金率</code><code>暗号資産CFD：1,000,000円 × 50％ ＝ 500,000円</code><code>FX：1,000,000円 × 4％ ＝ 40,000円</code><small>必要額が少ない商品ほど安全という意味ではありません。</small></div>

    <h2>最大倍率まで使わない</h2><p>必要証拠金ぎりぎりで建てると、小さな逆行でも証拠金維持率が低下します。スプレッド、金利・価格調整、急変時のスリッページも純資産へ影響するため、必要証拠金とは別に余裕資金を残します。</p><div className="callout"><strong>6資産を同時に持つ場合は合計額だけで見ない</strong><p>TOSSYはアセット区分間で証拠金を自動配分する機能がありますが、追加証拠金発生時は自動振替が止まります。各区分の維持率と口座全体の余裕を両方確認します。</p></div>

    <h2>発注前に4項目をそろえる</h2><ol><li>現在価格と取引数量から取引金額を求める</li><li>商品区分の証拠金率を掛ける</li><li>保有中の他ポジションと注文必要証拠金を加える</li><li>急変・調整額に耐える余裕を別に確保する</li></ol>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">広告リンクから登録と所定条件の達成が確認された場合、当サイトが報酬を受け取ることがあります。必要証拠金の計算とリスク説明は広告報酬から独立して作成しています。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://securities.dmm.com/notice/" target="_blank" rel="noopener noreferrer">DMM.com証券「金融商品取引法及び商品先物取引法に基づく表示」</a></li><li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/rules.pdf" target="_blank" rel="noopener noreferrer">DMM.com証券「約款（TOSSY）」</a></li></ul><p>証拠金率は2026年9月8日に確認しました。法人条件や実際の必要額は最新の契約締結前交付書面と注文画面を優先してください。</p></section>
    <p><Link href="/tools/cfd-margin-calculator">価格と数量を入力して必要証拠金を概算する →</Link></p><p><Link href="/articles/tossy-margin-call-losscut">証拠金不足時の追証・ロスカットを確認する →</Link></p><p><Link href="/cfd/tossy">TOSSYの公式条件一覧へ →</Link></p>
  </article>;
}
