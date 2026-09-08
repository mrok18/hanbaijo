import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '取引コストの損益分岐点は何％？手数料負けしない値幅を計算',
  description: '往復手数料、スプレッド、保有コストを取引金額に対する比率へ直し、手数料負けしないために必要な値上がり率を計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">COST / BREAK-EVEN RETURN</p>
    <h1>取引コストの損益分岐点は何％？<br />手数料負けしない値幅を計算</h1>
    <p className="lede">利益が出る最低ラインは、買値に戻ることではありません。スプレッド、往復手数料、保有コストを回収して、初めて損益がゼロになります。異なる金融商品も取引金額に対する割合へ直すと比較できます。</p>

    <h2>結論：総コストを取引金額で割る</h2>
    <div className="formula-box">
      <code>概算損益分岐率（％）＝ 往復の総コスト ÷ 取引金額 × 100</code>
      <small>定額・固定値として把握できるコストを使う簡易式です。売却代金に応じて変わる手数料は、実際の売値で再計算します。</small>
    </div>
    <p>取引金額10万円に対して往復コストが800円なら、概算損益分岐率は0.8％です。値上がり率が0.5％では500円の粗利益に対して800円のコストがかかり、差し引き300円のマイナスになります。</p>

    <h2>取引金額10万円の損益分岐早見表</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>往復総コスト</th><th>取引金額に対する比率</th><th>回収に必要な値幅</th></tr></thead><tbody>
      <tr><td className="ex-name">100円</td><td>0.10％</td><td>100円超</td></tr>
      <tr><td className="ex-name">300円</td><td>0.30％</td><td>300円超</td></tr>
      <tr><td className="ex-name">500円</td><td>0.50％</td><td>500円超</td></tr>
      <tr><td className="ex-name">800円</td><td>0.80％</td><td>800円超</td></tr>
      <tr><td className="ex-name">1,500円</td><td>1.50％</td><td>1,500円超</td></tr>
    </tbody></table></div></div>
    <p>「値幅」は保有全体の評価額が増える必要額です。1株あたりの必要値幅を求める場合は、総コストを保有数量で割ります。</p>

    <h2>1株・1通貨・1枚あたりへ直す</h2>
    <div className="formula-box">
      <code>1単位あたりの必要値幅 ＝ 往復総コスト ÷ 保有数量</code>
      <small>往復コスト800円で100株なら1株8円、1万通貨なら1通貨0.08円（8銭）が概算の回収ラインです。</small>
    </div>
    <p>先物やCFDでは、価格が1単位動いたときの損益が商品ごとに違います。その場合は総コストを1ティック・1ポイント当たりの損益で割り、必要なティック数やポイント数へ換算します。</p>

    <h2>商品ごとに総コストへ含めるもの</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>商品</th><th>主な売買コスト</th><th>保有時に確認するコスト</th></tr></thead><tbody>
      <tr><td className="ex-name">国内株</td><td>売買手数料、信用取引の諸費用</td><td>信用金利、貸株料、品貸料</td></tr>
      <tr><td className="ex-name">米国株</td><td>売買手数料、為替コスト、現地費用</td><td>円換算時の為替変動</td></tr>
      <tr><td className="ex-name">FX</td><td>スプレッド、取引手数料</td><td>スワップポイント</td></tr>
      <tr><td className="ex-name">CFD</td><td>スプレッド、取引手数料</td><td>金利・価格・配当調整額</td></tr>
      <tr><td className="ex-name">先物</td><td>往復手数料、取引所関連費用</td><td>限月、SQ、ロール時の価格差</td></tr>
      <tr><td className="ex-name">暗号資産</td><td>スプレッドまたは売買手数料</td><td>資金調達料、送金・出金費用</td></tr>
    </tbody></table></div></div>

    <h2>保有日数が延びると損益分岐点も動く</h2>
    <p>金利やファンディング料のように日数で増える費用は、決済日を決めずに固定値として扱えません。取引時点のコストに、想定保有日数分の費用を足します。</p>
    <div className="formula-box">
      <code>総コスト ＝ 売買時コスト ＋ 1日あたりの保有コスト × 保有日数</code>
      <small>受取となる調整額はマイナスのコストとして扱えますが、将来も同額とは限りません。</small>
    </div>

    <h2>値上がり率と手取り利益率を分ける</h2>
    <p>価格が1％上がっても、往復コストが0.8％なら手取り利益率は概算0.2％です。さらに税金や為替変動があれば、口座上の最終損益は変わります。商品を比較するときは「手数料無料」という表示ではなく、同じ取引金額と保有期間で総額を揃えます。</p>
    <div className="callout"><strong>損益分岐点は利益目標ではありません</strong><p>損益がゼロになる境界を示すだけで、値上がりや約定を保証するものではありません。スリッページ、急変時のスプレッド拡大、税金など計算外の要素もあります。</p></div>

    <p><Link href="/tools/cost-calculator">共通取引コスト計算機で総額を試す →</Link></p>
    <p><Link href="/articles/risk-reward-break-even-win-rate">リスクリワードと損益分岐勝率を見る →</Link></p>
    <p><Link href="/articles/stock-round-trip-cost">国内株の往復コストを見る →</Link></p>
    <p><Link href="/articles/fx-spread-cost">FXスプレッドを円換算する →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">DMM CFDへの広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。</p></section>
  </article>;
}
