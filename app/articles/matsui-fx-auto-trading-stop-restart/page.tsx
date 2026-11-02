import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-auto-trading-stop-restart' },
  title: 'MATSUI FX自動売買の停止・再開｜建玉と注文はどうなる？',
  description: 'MATSUI FX自動売買の3つの運用停止方法、自動停止条件、建玉・未約定注文の扱い、再開操作を公式ルールから整理します。',
};

export default function Page() {
  return (
    <article>
      <ArticleStructuredData slug="matsui-fx-auto-trading-stop-restart" publishedAt="2026-09-07" modifiedAt="2026-11-02" />
      <p className="page-kicker">MATSUI FX / AUTO TRADING CONTROL</p>
      <h1>MATSUI FX自動売買の停止・再開<br />建玉と注文はどうなる？</h1>
      <p className="lede">「運用停止」は必ずしも全決済ではありません。停止時に建玉を残すか、決済注文を残すかで、その後のリスクと手作業が変わります。</p>

      <h2>手動停止の3つの選択肢</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>停止方法</th><th>新規注文</th><th>決済注文</th><th>建玉</th></tr></thead>
        <tbody>
          <tr><td className="ex-name">建玉・決済注文を残す</td><td>取消</td><td>残る</td><td>通常注文の建玉として残る</td></tr>
          <tr><td className="ex-name">建玉だけ残す</td><td>取消</td><td>取消</td><td>通常注文の建玉として残る</td></tr>
          <tr><td className="ex-name">建玉を決済する</td><td>取消</td><td>取消</td><td>グループ内を全決済</td></tr>
        </tbody>
      </table></div></div>

      <div className="callout"><strong>停止前に含み損と決済注文を確認</strong><p>建玉を残すと相場変動リスクは続きます。決済注文も取り消す方法では、停止後の損切り・利益確定を自分で設定し直す必要があります。</p></div>

      <h2>自動停止になる条件</h2>
      <ul>
        <li>リアルタイム維持率が設定したロスカット率を下回った</li>
        <li>追証が発生した</li>
        <li>レートが運用停止ラインへ到達し、損切りが確定した</li>
        <li>約定取消し等により有効な自動売買注文がなくなった</li>
      </ul>
      <h3>注文グループと個別注文で再開手順が異なる</h3>
      <p>停止後に松井証券側で自動的に運用が再開されるわけではありません。公式FAQでは、再開する対象を次のように分けています。</p>
      <ul>
        <li><strong>停止中の注文グループ：</strong>対象グループの編集画面で再開方法を確認します。以前の運用実績を引き継ぐ方法と、以前と同じ設定値で新しく開始する方法があります。</li>
        <li><strong>余力不足で発注されなかった個別注文：</strong>余力不足を解消したうえで、対象グループの注文詳細から個別注文の再開方法を確認します。</li>
      </ul>
      <p><a href="https://support.matsui.co.jp/faq/show/42600?site_domain=faq" target="_blank" rel="noopener noreferrer">注文グループ・個別注文の再開手順を公式FAQで確認 →</a></p>

      <h2>再開前のチェック</h2>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>停止理由</h3><p>追証、ロスカット、余力不足、停止ラインのどれが原因かを確認します。</p></article>
        <article><b>02</b><h3>残った建玉</h3><p>自動売買ではなく通常注文の建玉として残っていないか確認します。</p></article>
        <article><b>03</b><h3>必要証拠金</h3><p>注文数量を増やす場合は、変更後の必要証拠金で余力審査が行われます。</p></article>
        <article><b>04</b><h3>設定</h3><p>注文数量、益出し幅、運用停止ラインを再開前に見直します。</p></article>
      </div>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX取引ルール」</a></li>
        <li><a href="https://www.matsui.co.jp/fx/auto-trading/order/" target="_blank" rel="noopener noreferrer">松井証券「自動売買の注文方法」</a></li>
        <li><a href="https://support.matsui.co.jp/faq/show/42069?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「運用停止方法」</a></li>
        <li><a href="https://support.matsui.co.jp/faq/show/42600?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券Q&amp;A「再開方法」</a></li>
      </ul><p>停止方法・自動停止条件・再開対象の区分は2026年11月2日に公式取引ルールとFAQで確認しました。操作時は公式の最新画面を確認してください。</p></section>

      <p><Link href="/articles/matsui-fx-auto-trading-cost">自動売買の必要資金を見る →</Link></p>
      <p><Link href="/fx/matsui">MATSUI FXのコストシートへ戻る →</Link></p>
      <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。取引ルールの説明とは分けて掲載しています。</p></section>
    </article>
  );
}
