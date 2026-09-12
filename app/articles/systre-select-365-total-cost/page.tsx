import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/systre-select-365-total-cost' },
  title: 'シストレセレクト365の手数料は0円？総コストを確認',
  description: 'シストレセレクト365の初回利用料990円、売買手数料0円、スプレッド、スワップポイント、取引回数による総コストを解説します。',
};

const COSTS = [
  { item: 'サービス利用料', timing: '利用開始時', amount: '990円（税込）', note: '2026年6月以降は初回のみ' },
  { item: '売買手数料', timing: '新規・決済', amount: '0円', note: 'シストレセレクト365を利用した取引' },
  { item: 'スプレッド', timing: '取引ごと', amount: '変動', note: '売値と買値の差' },
  { item: 'スワップポイント', timing: '建玉の持越し', amount: '受取または支払', note: '通貨・売買方向・日付で変動' },
] as const;

export default function Page() {
  return (
    <article>
      <ArticleStructuredData slug="systre-select-365-total-cost" publishedAt="2026-09-07" />
      <p className="page-kicker">SYSTRE SELECT 365 / TOTAL COST</p>
      <h1>シストレセレクト365の手数料は0円？<br />利用料・スプレッドまで確認</h1>
      <p className="lede">売買手数料は0円ですが、運用の総コストが必ず0円になるわけではありません。初回のサービス利用料、売値と買値の差、建玉を持ち越したときのスワップを分けて確認します。</p>

      <div className="callout"><strong>2026年6月に料金変更</strong><p>現行の公式案内では、サービス利用料は初回のみ990円（税込）です。以前の「毎年990円」という料金体系から変更され、初回支払い後の更新費用は発生しないと案内されています。</p></div>

      <h2>4つに分けると総負担が見える</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>項目</th><th>発生時</th><th className="num">公表条件</th><th>確認点</th></tr></thead>
          <tbody>{COSTS.map((cost) => (
            <tr key={cost.item}><td className="ex-name">{cost.item}</td><td>{cost.timing}</td><td className="num"><strong>{cost.amount}</strong></td><td>{cost.note}</td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">損益・税金・通信費などは別。スプレッドとスワップは固定値ではないため、実際の取引画面で確認します。</p></div>

      <h2>売買手数料0円と、取引コスト0円は違う</h2>
      <p>自動売買が新規注文と決済注文を繰り返すたび、提示された買値と売値の差が損益へ影響します。これは証券会社へ別途支払う売買手数料ではありませんが、取引開始直後の評価損として現れる経済的な負担です。</p>
      <div className="formula-box">
        <code>スプレッド相当額 ＝ スプレッド（円）× 取引数量</code>
        <code>累計の目安 ＝ 1回のスプレッド相当額 × 約定回数</code>
        <small>例：仮に0.4銭、1万通貨なら1回40円。100回なら単純合計4,000円。</small>
      </div>
      <p>この0.4銭は計算方法を示す仮定値で、シストレセレクト365の公称スプレッドではありません。実際のくりっく365の提示レートは市場状況で変化し、急変時や流動性低下時には幅が広がる場合があります。</p>

      <h2>自動売買では取引回数を確認する</h2>
      <p>1回あたりの負担が小さくても、売買回数が増えれば累計は大きくなります。ランキングの損益だけでなく、同じ期間の取引回数、平均利益、最大ドローダウンを合わせて確認します。</p>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>約定回数</h3><p>新規と決済をどのように数えているかを確認し、過去の売買頻度を把握します。</p></article>
        <article><b>02</b><h3>平均利益</h3><p>1回の利益が小さい戦略ほど、スプレッド拡大の影響を受けやすくなります。</p></article>
        <article><b>03</b><h3>保有期間</h3><p>建玉を翌営業日へ持ち越す頻度が高いほど、スワップの受払いが増えます。</p></article>
        <article><b>04</b><h3>最大DD</h3><p>コストだけでなく、運用継続に必要な損失余力も別に確保します。</p></article>
      </div>

      <h2>スワップは利益にも費用にもなる</h2>
      <p>くりっく365では、建玉を持ち越すと通貨ペアと売買方向に応じてスワップポイントが受払いされます。受取方向でも金額は一定ではなく、支払へ転じる場合があります。自動売買では建玉の保有日数を自分で毎回決めないため、累計スワップを成績と一緒に確認します。</p>

      <h2>初回990円を回収できるかでは判断しない</h2>
      <p>初回利用料は運用期間が長いほど1年あたりの負担が小さくなりますが、投資成果を決める中心は為替損益と資金管理です。990円を取り戻すために数量を増やしたり、成績が悪化したストラテジーを稼働し続けたりすると、負担を大きくする可能性があります。</p>
      <ul>
        <li>利用料と投資資金を分けて記録する</li>
        <li>売買手数料0円だけでなく、取引回数とスプレッドを確認する</li>
        <li>スワップを含む実現損益・評価損益を見る</li>
        <li>過去成績ではなく、自分の許容損失で停止基準を決める</li>
      </ul>

      <section className="article-affiliate" aria-label="シストレセレクト365の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。コストの計算、リスク説明、掲載順位とは分けて掲載しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fujitomi.co.jp/systra/service/fee/" target="_blank" rel="noopener noreferrer">フジトミ証券「手数料とサービス利用料金」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/fee-change/" target="_blank" rel="noopener noreferrer">フジトミ証券「料金体系変更のお知らせ」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365 よくある質問」</a></li>
          <li><a href="https://www.fujitomi.co.jp/tfx/documents/click365_torihiki_guide.pdf" target="_blank" rel="noopener noreferrer">フジトミ証券「くりっく365 取引ガイド」</a></li>
        </ul>
        <p>料金・サービス条件は2026年9月7日に確認しました。申込み前に最新の料金ページと契約締結前交付書面を確認してください。</p>
      </section>

      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートを見る →</Link></p>
      <p><Link href="/articles/systre-select-365-recommended-margin">推奨証拠金と最大DDを理解する →</Link></p>
      <p><Link href="/articles/fx-spread-cost">FXスプレッドを円に直す →</Link></p>
    </article>
  );
}
