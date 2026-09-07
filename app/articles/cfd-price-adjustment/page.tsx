import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'CFDの価格調整額とは？発生日と計算方法',
  description: '先物を参照するCFDで発生する価格調整額の仕組み、発生日、計算式、売買方向による受け払いを解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">CFD HOLDING COST</p>
      <h1>CFDの価格調整額とは？発生日と計算方法</h1>
      <p className="lede">
        先物価格を参照するCFDでは、参照する限月が次の限月へ切り替わるときに価格差が生じます。
        その差を調整する受け払いが「価格調整額」です。
      </p>

      <h2>限月の切り替えで発生する</h2>
      <p>
        先物には期限があるため、CFD会社は参照する先物を定期的に切り替えます。
        新旧の先物価格が違うとCFDの参照価格も変わるため、保有者に一方的な損益が出ないよう金額を調整します。
        価格調整額そのものだけで得をする仕組みではなく、参照価格の変化と対で考える必要があります。
      </p>

      <h2>DMM CFDが示す計算式</h2>
      <div className="formula-box">
        <code>1Lotあたりの価格調整額 ＝（切替前の参照先物価格 − 切替後の参照先物価格）× 取引単位 × 円換算レート</code>
        <small>銘柄、通貨、会社により計算項目や扱いが異なります。必ず各社の公式ルールを確認してください。</small>
      </div>
      <p>
        DMM CFDの公式資料にある原油の例では、切替前76.00ドル、切替後76.30ドル、取引単位10、米ドル/円90円の場合、
        買い建玉は1Lotあたり270円の支払い、売り建玉は270円の受取りです。
      </p>

      <h2>発生日はカレンダーで確認する</h2>
      <p>
        DMM CFDでは、先物を参照する銘柄の価格調整は通常1〜3か月ごとと案内されています。
        一方、金スポット・銀スポットなど現物価格を参照する銘柄には金利調整額が発生します。
        どの調整額が適用されるかは銘柄ごとに異なるため、取引前に調整額カレンダーを確認します。
      </p>
      <ul>
        <li>保有予定期間に価格調整日が含まれるか</li>
        <li>買い・売りのどちらが受取りまたは支払いか</li>
        <li>外貨建ての調整額に使われる円換算レート</li>
        <li>切り替え前後の注文に取消しなどの扱いがあるか</li>
      </ul>

      <div className="callout">
        <strong>「取引手数料0円」と保有コスト0円は別です</strong>
        <p>
          CFDの総コストを見るときは、スプレッドに加え、価格調整額・金利調整額など銘柄ごとの受け払いを分けて確認します。
        </p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fx.dmm.com/cfd/service/swapcalendar/" target="_blank" rel="noopener noreferrer">DMM CFD「各種調整額」</a></li>
          <li><a href="https://fx.dmm.com/policy/regulation/overview_cfd.pdf" target="_blank" rel="noopener noreferrer">DMM CFD「店頭商品デリバティブ取引説明書」</a></li>
          <li><a href="https://fx.dmm.com/manual/plus_cfd.pdf" target="_blank" rel="noopener noreferrer">DMM CFD PLUS 操作マニュアル</a></li>
        </ul>
        <p>制度・商品情報は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/tools/cost-calculator">取引コスト計算機を開く →</Link></p>
      <p><Link href="/cfd">CFDコスト比較へ戻る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。記事の評価・計算方法とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
