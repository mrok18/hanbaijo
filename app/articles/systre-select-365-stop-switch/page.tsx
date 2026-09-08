import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: 'シストレセレクト365の停止・入替え｜建玉を残さない確認手順', description: 'シストレセレクト365の稼働停止、ストラテジー入替え、未決済ポジション、両建て、サービス解約前の確認点を整理します。' };

export default function Page() {
  return <article>
    <ArticleStructuredData slug="systre-select-365-stop-switch" publishedAt="2026-09-07" />
    <p className="page-kicker">SYSTRE SELECT 365 / CONTROL</p>
    <h1>停止・入替えの確認<br />建玉を残さないための手順</h1>
    <p className="lede">ストラテジーの稼働を止めることと、保有ポジションを決済することは同じではありません。停止後に未決済建玉が残っていないかを口座画面で確認します。</p>
    <h2>停止時の確認順</h2>
    <div className="fx-metric-grid"><article><b>01</b><h3>稼働停止</h3><p>新規・決済注文の自動発注を止めます。</p></article><article><b>02</b><h3>注文照会</h3><p>未約定注文が残っていないか確認します。</p></article><article><b>03</b><h3>建玉照会</h3><p>未決済ポジションと評価損益を確認します。</p></article><article><b>04</b><h3>口座全体</h3><p>別ストラテジーや手動取引を含む同一口座の余力を確認します。</p></article></div>
    <div className="callout"><strong>「ほったらかし」は公式も推奨していません</strong><p>レンジ相場・トレンド相場など、ストラテジーごとに得意な局面が異なります。定期的に運用結果と相場環境を確認し、必要に応じて入れ替えます。</p></div>
    <h2>入替えで起きやすい見落とし</h2><ul><li>停止したストラテジーの建玉が残ったまま、新しいストラテジーを開始する</li><li>同じ通貨ペアの反対売買が重なり、意図しない両建てになる</li><li>推奨証拠金を個別に見て、全ストラテジーの合計を見落とす</li><li>売買サイン時の成績と、実際の約定価格・時刻に差があることを忘れる</li></ul>
    <h2>サービス自体を解約する場合</h2><p>公式FAQでは、投資顧問契約の解除が必要で、停止希望日の7日前までの連絡が案内されています。手続き前に稼働中ストラテジーを止め、未決済ポジションが残っていないか確認します。</p>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.fujitomi.co.jp/systra/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「よくある質問」</a></li><li><a href="https://www.fujitomi.co.jp/systra/feature/entry/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365とは」</a></li><li><a href="https://www.fujitomi.co.jp/systra/" target="_blank" rel="noopener noreferrer">シストレセレクト365公式サイト</a></li></ul><p>制度情報は2026年9月7日に確認しました。実際の停止・決済操作は最新の操作マニュアルに従ってください。</p></section>
    <p><Link href="/articles/systre-select-365-strategy-selection">ストラテジーの選び方を見る →</Link></p><p><Link href="/fx/systre-select-365">サービスのコストシートへ戻る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。運用上の注意とは分けて掲載しています。</p></section>
  </article>;
}
