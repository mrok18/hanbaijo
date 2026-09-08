import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'シストレセレクト365の基本操作｜ランキングから稼働まで',
  description: 'ランキングの成績期間、最大ドローダウン、数量、リスクメーターを確認し、シストレセレクト365を稼働するまでの順序を解説します。',
};

const FLOW = [
  { no: '01', title: 'ランキングを見る', body: 'ログイン後のランキングで、提供中のストラテジーを運用成績順に確認します。順位だけで即決せず、詳細画面へ進みます。' },
  { no: '02', title: '期間と損失幅を比べる', body: '1カ月・3カ月・6カ月・1年間の運用結果を切り替え、累積損益、最大ドローダウン、平均利益・損失、勝率を確認します。' },
  { no: '03', title: '数量と資金を決める', body: '取引管理画面で数量を設定します。必要証拠金だけでなく、推奨証拠金と口座全体の余力を確認します。' },
  { no: '04', title: '稼働後も記録する', body: '実際の約定、スプレッド、スワップ、含み損を記録し、事前に決めた停止基準と照合します。' },
] as const;

export default function Page() {
  return (
    <article>
      <ArticleStructuredData slug="systre-select-365-start-operation-flow" publishedAt="2026-09-08" />
      <p className="page-kicker">SYSTRE SELECT 365 / OPERATION FLOW</p>
      <h1>シストレセレクト365の基本操作<br />ランキングから稼働まで</h1>
      <p className="lede">「成績上位のキャラクターを選ぶ」だけでは、運用に必要な資金や損失幅が見えません。ランキングから詳細画面、数量設定、稼働後の記録までを一つの流れとして整理します。</p>

      <div className="callout"><strong>成績表示の注意</strong><p>公式説明では、運用結果は売買サインを基にした計算で、実際の売買価格と異なる場合があります。またスワップポイントは含まれていません。画面上の損益を、そのまま将来の手取り損益として扱わないことが重要です。</p></div>

      <h2>稼働までの4ステップ</h2>
      <div className="fx-metric-grid">
        {FLOW.map((step) => (
          <article key={step.no}><b>{step.no}</b><h3>{step.title}</h3><p>{step.body}</p></article>
        ))}
      </div>

      <h2>短期順位より、複数期間を見る</h2>
      <p>直近1カ月の上位は、特定の相場環境に合っていただけかもしれません。1カ月、3カ月、6カ月、1年を切り替え、利益が出た時期だけでなく損失が膨らんだ時期も確認します。</p>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>見る項目</th><th>分かること</th><th>注意点</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">累積損益</td><td>対象期間の損益推移</td><td>金額だけでなく必要資金との比率を見る</td></tr>
            <tr><td className="ex-name">最大ドローダウン</td><td>過去の最大損失幅</td><td>将来の最大損失を限定する数字ではない</td></tr>
            <tr><td className="ex-name">平均利益・平均損失</td><td>1回あたりの損益傾向</td><td>スプレッド拡大や約定差の影響を受ける</td></tr>
            <tr><td className="ex-name">勝率・取引回数</td><td>利益回数と標本数</td><td>勝率が高くても1回の損失が大きい場合がある</td></tr>
          </tbody>
        </table>
      </div></div>

      <h2>ポートフォリオは「違うもの」を組み合わせる</h2>
      <p>公式ページでは、複数のストラテジーを組み合わせてポートフォリオを作成できます。組合せの目的は稼働数を増やすことではなく、収益の振れを抑えることです。同じ通貨ペア、似た売買方向、似たロジックを重ねると、見かけ上は複数でも相場急変時に損失が集中する可能性があります。</p>
      <ul>
        <li>対象通貨ペアと売買方向が偏っていないか</li>
        <li>短期型と中長期型で保有期間が重なりすぎていないか</li>
        <li>各ストラテジーの推奨証拠金を合計したか</li>
        <li>複数が同時に最大ドローダウンを更新する場合にも耐えられるか</li>
      </ul>
      <p>公式のポートフォリオ手順では、ストラテジーを選び、取引管理画面で数量を設定し、組合せを稼働します。その際、リスクメーターが100％を超えないよう注意する案内があります。ただし100％以下は元本保全やロスカット回避の保証ではありません。</p>

      <h2>数量は損失許容額から逆算する</h2>
      <div className="formula-box">
        <code>複数稼働の推奨証拠金目安 ＝ 各ストラテジーの推奨証拠金 × 各数量の合計</code>
        <code>追加余力 ＝ 自分が想定する損失拡大分と証拠金変動分</code>
        <small>ストラテジー間の相関や急変時の滑りは、この単純合計だけでは捉えられません。</small>
      </div>
      <p>最初から稼働数を増やすより、少ない数量で実際の約定と損益の動きを確認し、口座残高に対して許容できる損失額を超えない範囲で調整します。</p>

      <h2>稼働後に見る4つの実績</h2>
      <ul>
        <li>ランキング上の試算値と、自分の口座の実現・評価損益の差</li>
        <li>取引回数と1回あたりのスプレッド相当額</li>
        <li>建玉の保有日数と累計スワップ</li>
        <li>有効比率、推奨証拠金、最大ドローダウンの更新状況</li>
      </ul>
      <p>停止を判断するときは、ストラテジーの稼働停止と、残っている建玉・注文の扱いを分けて確認します。サービスを止めただけで全建玉が希望価格で決済されるとは限りません。</p>

      <section className="article-affiliate" aria-label="シストレセレクト365の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
        <p className="affiliate-disclosure">上記はA8.netの提携広告です。リンク経由で申込みが成立すると当サイトが報酬を受け取る場合があります。ランキングや過去成績は、将来の運用成果を保証しません。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fujitomi.co.jp/systra/feature/basics/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365の基本的な使い方」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/feature/howto-b/" target="_blank" rel="noopener noreferrer">フジトミ証券「ポートフォリオの構築」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">フジトミ証券「推奨証拠金について」</a></li>
        </ul>
        <p>画面仕様・サービス条件は2026年9月8日に確認しました。実際の操作では最新の画面、操作マニュアル、契約締結前交付書面を優先してください。</p>
      </section>

      <p><Link href="/articles/systre-select-365-account-opening-flow">口座開設から稼働までの手順を見る →</Link></p>
      <p><Link href="/articles/systre-select-365-stop-switch">停止・入替え時の建玉を確認する →</Link></p>
      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートへ →</Link></p>
    </article>
  );
}
