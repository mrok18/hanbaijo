import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXのスワップが3日分・4日分付くのはなぜ？',
  description: 'FXのスワップポイントが複数日分まとめて付与される理由を、ロールオーバー、受渡日、土日・祝日の関係から解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX ROLLOVER</p>
      <h1>FXのスワップが、3日分・4日分付く理由</h1>
      <p className="lede">スワップポイントは、カレンダーの日数どおり毎日1日分ずつ表示されるとは限りません。受渡日を繰り延べるロールオーバーと、土日・各国祝日の組み合わせで付与日数が変わります。</p>

      <h2>建玉を翌営業日へ持ち越すと発生する</h2>
      <p>FXでは、所定の判定時刻をまたいで建玉を保有すると受渡日が先へ繰り延べられ、その日数に応じた金利差調整がスワップポイントとして受け払いされます。土日は市場の受渡しが進まないため、その分が平日の特定日にまとめられます。</p>
      <div className="formula-box"><code>1日相当額 ＝ カレンダーの表示額 ÷ 付与日数</code><small>さらに表示数量が異なる場合は同じ通貨数へ換算</small></div>

      <h2>「水曜日に3日分」は絶対ではない</h2>
      <p>ヒロセ通商とJFXは、原則として水曜日に土日分を含めた3日分を付与すると案内しています。ただしUSD/CAD・USD/TRYは木曜日となり、年末年始や各国の祝祭日によって変則になります。</p>
      <p>FXTFは受渡日を何日繰り延べるかで付与日数が決まり、土日分は前木曜日に3日分付与すると説明しています。このように会社や通貨ペアで「表示上の日付」が違うため、曜日だけを暗記せず公式カレンダーを確認します。</p>

      <h2>4日分でも1日あたりが急増したとは限らない</h2>
      <p>祝日の影響で4日分がまとめて表示された場合、前日の1日分と総額をそのまま比べることはできません。表示額を付与日数で割り、さらに1Lotの通貨数をそろえて比較します。</p>
      <ol>
        <li>買い・売りの方向を確認</li>
        <li>1Lotが何通貨か確認</li>
        <li>当日の付与日数を確認</li>
        <li>1万通貨・1日分など共通単位へ換算</li>
      </ol>

      <div className="callout"><strong>将来の受取額は固定されません</strong><p>政策金利だけでなく市場状況や会社の提示条件でも変動し、受取から支払いへ転じる場合があります。過去カレンダーは将来の金額を保証しません。</p></div>

      <section className="article-affiliate" aria-label="FXTFの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。スワップの解説や比較結果とは分けて掲載しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fxtrade.co.jp/q-fx_cfd-swap3/" target="_blank" rel="noopener noreferrer">FXTF「スワップポイントの受け渡し日数」</a></li>
          <li><a href="https://hirose-fx.co.jp/contents/news/Swap" target="_blank" rel="noopener noreferrer">ヒロセ通商「LION FXスワップポイント」</a></li>
          <li><a href="https://www.jfx.co.jp/trading_rule/swap/" target="_blank" rel="noopener noreferrer">JFX「スワップポイント」</a></li>
        </ul>
        <p>内容は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/fx/swap-calendar-comparison">スワップカレンダー10社比較を見る →</Link></p>
      <p><Link href="/fx/fxtf">FXTFのコストシートを見る →</Link></p>
      <p><Link href="/articles/fx-swap-calculation">スワップの計算方法を見る →</Link></p>
      <p><Link href="/tools/fx-swap-break-even-calculator">付与日数と差引損益を計算する →</Link></p>
    </article>
  );
}
