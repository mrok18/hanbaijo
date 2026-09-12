import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { alternates: { canonical: '/articles/systre-select-365-strategy-selection' }, title: 'シストレセレクト365のストラテジー選び｜利益率だけで決めない', description: 'シストレセレクト365のストラテジーを、利益率、最大ドローダウン、リスクリターン率、取引回数、推奨証拠金から比較します。' };

export default function Page() {
  return <article>
    <ArticleStructuredData slug="systre-select-365-strategy-selection" publishedAt="2026-09-07" />
    <p className="page-kicker">SYSTRE SELECT 365 / STRATEGY</p>
    <h1>ストラテジーの選び方<br />利益率だけで決めない</h1>
    <p className="lede">ランキング上位でも、将来の利益は保証されません。利益の大きさと、その利益を得るまでに経験した損失幅を同じ期間で比べます。</p>
    <h2>比較する5つの指標</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>指標</th><th>意味</th><th>注意点</th></tr></thead><tbody>
      <tr><td className="ex-name">期間損益・収益率</td><td>一定期間の成績</td><td>期間と推奨証拠金の変化をそろえる</td></tr>
      <tr><td className="ex-name">最大DD</td><td>累積損益の最大の落込み幅</td><td>過去最大を将来も超えない保証はない</td></tr>
      <tr><td className="ex-name">リスクリターン率</td><td>期間損益 ÷ 最大DD</td><td>利益額だけでは見えない効率を比較</td></tr>
      <tr><td className="ex-name">取引回数・勝率</td><td>売買頻度と利益取引の割合</td><td>勝率が高くても1回の損失が大きい場合がある</td></tr>
      <tr><td className="ex-name">推奨証拠金</td><td>現在の証拠金基準額＋過去1年の最大DD</td><td>最低額ではなく運用資金の目安</td></tr>
    </tbody></table></div></div>
    <div className="callout"><strong>スワップは運用成績に含まれません</strong><p>公式の注意事項では、ストラテジーの運用成績にスワップポイントは加味されていません。長期運用では実口座の受払いを別に集計します。</p></div>
    <h2>選定の順番</h2><ol><li>同じ評価期間で候補を並べる</li><li>最大DDが資金計画に収まる候補へ絞る</li><li>リスクリターン率と取引回数で成績の偏りを見る</li><li>相場環境に合っているか定期的に再確認する</li></ol>
    <p>複数のストラテジーを同時稼働すると、同じ通貨ペアで売りと買いが重なり、両建てになる場合があります。個別成績だけでなく、口座全体の推奨証拠金合計とポジション方向も確認します。</p>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.fujitomi.co.jp/systra/feature/words/" target="_blank" rel="noopener noreferrer">フジトミ証券「用語集」</a></li><li><a href="https://www.fujitomi.co.jp/systra/feature/basics/" target="_blank" rel="noopener noreferrer">フジトミ証券「基本的な使い方」</a></li><li><a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">フジトミ証券「推奨証拠金について」</a></li></ul><p>制度・画面情報は2026年9月7日に確認しました。</p></section>
    <p><Link href="/articles/systre-select-365-recommended-margin">推奨証拠金の計算を見る →</Link></p>
    <p><Link href="/articles/systre-select-365-stop-switch">停止・入替えの確認を見る →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。成績評価とは分けて掲載しています。</p></section>
  </article>;
}
