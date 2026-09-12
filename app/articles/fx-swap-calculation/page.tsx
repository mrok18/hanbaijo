import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fx-swap-calculation' },
  title: 'FXスワップポイントの計算方法',
  description: 'FXのスワップポイントを、1Lotあたりの表示・保有数量・付与日数から試算する方法を解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX HOLDING COST</p>
      <h1>FXスワップポイントの計算方法</h1>
      <p className="lede">
        スワップポイントは、通貨間の金利差などを基に受け払いされる調整額です。
        表示の基準数量、保有数量、付与日数をそろえると金額を試算できます。
      </p>

      <h2>基本の計算式</h2>
      <div className="formula-box">
        <code>スワップ金額 ＝ 1Lotあたりの表示額 ×（保有数量 ÷ 1Lotの数量）× 付与日数</code>
        <small>1Lotの数量、端数処理、受取・支払の表示方法はFX会社ごとに確認してください。</small>
      </div>
      <p>
        買いと売りでは金額が異なり、受取りではなく支払いになることもあります。
        休日などをまたぐ受渡しの調整により、複数日分がまとめて付与される日もあります。
      </p>

      <h2>1,000通貨の計算例</h2>
      <p>
        FXTFの公式FAQでは、1万通貨あたり45円のスワップが表示されている場合、
        1,000通貨の1日分は4.5円を同社のルールで丸めて5円、3日分は13.5円を丸めて14円と説明されています。
      </p>
      <ul>
        <li>1日分：45円 × 1,000 ÷ 10,000 ＝ 4.5円 → 5円</li>
        <li>3日分：45円 × 1,000 ÷ 10,000 × 3 ＝ 13.5円 → 14円</li>
      </ul>
      <p>
        これは計算方法を示すための公式例です。実際の金額は日々変わるため、取引画面の最新値と付与日数を使ってください。
      </p>

      <h2>比較では「高い受取額」だけを見ない</h2>
      <p>
        短期間だけのキャンペーン値か、通常値かを区別し、売り側の支払額、スプレッド、取引手数料も合わせて確認します。
        レバレッジ取引では相場変動による損失がスワップ収益を上回る可能性があり、預けた証拠金を超える損失が生じる場合もあります。
      </p>

      <div className="callout">
        <strong>計算前に確認する3項目</strong>
        <p>「1Lotは何通貨か」「何日分が付与されるか」「買い・売りのどちらが受取または支払か」を取引画面で確認します。</p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fxtrade.co.jp/q-fx_cfd-swap2/" target="_blank" rel="noopener noreferrer">FXTF「FX・CFDのスワップポイントについて」</a></li>
          <li><a href="https://www-hp.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF GX 商品概要</a></li>
        </ul>
        <p>内容・数値は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/tools/fx-swap-break-even-calculator">スワップで初期コストを回収する日数を計算する →</Link></p>
      <p><Link href="/articles/fx-swap-spread-break-even-days">スプレッド回収日数の具体例を見る →</Link></p>
      <p><Link href="/tools/cost-calculator">取引コスト計算機で試算する →</Link></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。記事の評価・計算方法とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
