import type { Metadata } from 'next';
import Link from 'next/link';
import CostCalculator from './CostCalculator';

export const metadata: Metadata = {
  title: '取引コスト計算機｜スプレッド・手数料・金利を円換算',
  description: '暗号資産、FX、CFD、株式、先物のスプレッド、手数料、保有コスト、為替コストを同じ条件で円換算できる無料計算機です。',
};

export default function CostCalculatorPage() {
  return (
    <div className="calculator-page">
      <header className="calculator-intro">
        <p className="page-kicker">FREE COST CALCULATOR</p>
        <h1>取引コストを、<br /><em>ひとつの金額に。</em></h1>
        <p className="lede">
          スプレッドだけでなく、取引手数料、保有中の金利、外貨の交換コストまで。
          同じ取引金額・保有期間にそろえて、買ってから売るまでの概算負担を計算します。
        </p>
        <div className="calculator-proof">
          <span>登録不要</span><span>株式・先物にも対応</span><span>入力は端末内で計算</span><span>広告順位に不使用</span>
        </div>
      </header>

      <CostCalculator />

      <section className="calculator-explain">
        <div>
          <p className="section-index">HOW TO READ</p>
          <h2>この数字に含まれるもの</h2>
        </div>
        <div className="explain-grid">
          <article><b>01</b><h3>スプレッド</h3><p>買値と売値の差。買ってすぐ売る往復取引では、原則としてスプレッド全体が負担になります。</p></article>
          <article><b>02</b><h3>取引・固定手数料</h3><p>売買代金に連動する手数料と、入出金・送金などの固定費を合算します。</p></article>
          <article><b>03</b><h3>保有コスト</h3><p>金利・ファンディング・価格調整額などの年率を、入力した保有日数で日割りします。</p></article>
          <article><b>04</b><h3>為替コスト</h3><p>外貨建て商品で、円からの購入と売却後の円転に必要な為替手数料を含めます。</p></article>
        </div>
      </section>

      <section className="calculator-caution">
        <div>
          <span>CALCULATION POLICY</span>
          <h2>入力例は、特定事業者の料金ではありません。</h2>
        </div>
        <div>
          <p>
            プリセットは計算方法を理解するための例です。先物の例は日経225を40,000円、miniを1枚、価格差を1ティック、往復手数料を77円と仮定しています。
            実際の手数料、スプレッド、金利等は、商品、注文方法、時間帯、口座区分により変動します。
            利用前に各社の公式情報を確認してください。
          </p>
          <p>
            この結果は将来の利益・損失を示すものではなく、投資判断を勧誘するものでもありません。
            算出区分と詳しい考え方は<Link href="/method">計測・算出方法</Link>で公開しています。
          </p>
        </div>
      </section>
    </div>
  );
}
