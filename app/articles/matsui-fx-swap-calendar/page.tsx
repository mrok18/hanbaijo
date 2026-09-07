import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'MATSUI FXのスワップ付与時間｜1万通貨表示の計算方法',
  description: 'MATSUI FXのスワップポイントについて、付与時間、付与日数、1万通貨あたり表示を1通貨・100通貨へ換算する方法を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">MATSUI FX / SWAP</p>
      <h1>MATSUI FXのスワップ付与時間<br />1万通貨表示の計算方法</h1>
      <p className="lede">MATSUI FXは1通貨から取引できますが、公式のスワップ一覧は1万通貨あたりの金額です。表示額をそのまま受払額と考えず、保有数量に換算します。</p>

      <div className="callout"><strong>付与はメンテナンス終了後</strong><p>建玉を翌取引日に持ち越すと、夏時間は6時10分、冬時間は7時10分以降に付与されます。付与日数は各国の祝日等で変動します。</p></div>

      <h2>実際の取引数量へ換算</h2>
      <div className="formula-box"><code>受払額 ＝ 1万通貨あたりのスワップ × 保有通貨数 ÷ 10,000</code><small>公式一覧の売・買と付与日数を確認し、符号を含めて計算します。</small></div>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>保有数量</th><th>一覧が「150円」の場合</th><th>計算</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">1通貨</td><td>0.015円</td><td>150円 × 1 ÷ 10,000</td></tr>
          <tr><td className="ex-name">100通貨</td><td>1.5円</td><td>150円 × 100 ÷ 10,000</td></tr>
          <tr><td className="ex-name">1,000通貨</td><td>15円</td><td>150円 × 1,000 ÷ 10,000</td></tr>
          <tr><td className="ex-name">10,000通貨</td><td>150円</td><td>150円 × 10,000 ÷ 10,000</td></tr>
        </tbody>
      </table></div></div>
      <p>上記は換算例で、実際のスワップ金額ではありません。付与額は日々変動し、買いと売りで受取り・支払いが異なります。</p>

      <h2>カレンダーで見る順番</h2>
      <ul>
        <li>対象の通貨ペアと売買方向を選ぶ</li>
        <li>付与日数が何日分か確認する</li>
        <li>1万通貨あたりの表示を保有数量へ換算する</li>
        <li>為替差損がスワップ受取額を上回る可能性を含めて判断する</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://www.matsui.co.jp/fx/market/swappoint/" target="_blank" rel="noopener noreferrer">松井証券「スワップポイント一覧」</a></li>
        <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX取引ルール」</a></li>
      </ul><p>制度情報は2026年9月7日に確認しました。最新金額と付与日数は公式一覧を確認してください。</p></section>

      <p><Link href="/articles/fx-swap-calculation">FXスワップの基本計算を見る →</Link></p>
      <p><Link href="/fx/matsui">MATSUI FXのコストシートへ戻る →</Link></p>
      <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。計算・評価とは分けて掲載しています。</p></section>
    </article>
  );
}
