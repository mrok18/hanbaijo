import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/articles/us-stock-fx-cost' },
  title: '米国株の為替コストを円で計算する方法',
  description: '米国株の円貨決済と外貨決済を整理し、1ドルあたりの為替コストを取引金額全体の円負担へ換算します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">US STOCK FX COST</p>
      <h1>米国株の為替コストを<br />円で計算する方法</h1>
      <p className="lede">
        米国株では、株式の売買手数料に加えて円と米ドルを交換する費用がかかる場合があります。
        「1ドルあたり何銭」を、実際に交換するドル総額へ掛けて確認します。
      </p>

      <h2>片道の基本式</h2>
      <div className="formula-box">
        <code>為替コスト ＝ 1ドルあたりの為替コスト（円）× 交換する米ドル</code>
        <small>0.25円は25銭。会社や交換方法、時間帯により適用レートは異なります。</small>
      </div>

      <h2>2,000ドルを交換する例</h2>
      <p>1ドルあたり25銭（0.25円）の為替コストが適用される仮定なら、片道の概算は500円です。</p>
      <ul>
        <li>円から米ドル：0.25円 × 2,000ドル ＝ 500円</li>
        <li>同じ条件で米ドルから円：0.25円 × 2,000ドル ＝ 500円</li>
        <li>往復の単純合計：1,000円</li>
      </ul>
      <p>実際の売却時は株価と為替が動くため、円へ戻す米ドル額は買付時と同じとは限りません。</p>

      <h2>円貨決済と外貨決済</h2>
      <p>
        円貨決済は、株の注文に伴う為替交換も証券会社のルールで行う方式です。外貨決済は、あらかじめ保有する米ドルで受け払いします。
        外貨決済でも、円から米ドルを準備した時点の交換コストがなくなるとは限りません。
      </p>

      <h2>比較するときの4項目</h2>
      <ul>
        <li>株式の売買手数料と上限・最低額</li>
        <li>円貨決済に使う適用為替レート</li>
        <li>外貨交換時のスプレッドや手数料</li>
        <li>売却時の現地費用や少額の賦課金</li>
      </ul>

      <div className="callout">
        <strong>「為替手数料0銭」は為替変動0ではありません</strong>
        <p>手数料表示とは別に、買付後の円高・円安で円換算の評価額が変わります。コストと価格変動は分けて見ます。</p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式情報</h2>
        <ul>
          <li><a href="https://kabu.dmm.com/us/stock/outline/" target="_blank" rel="noopener noreferrer">DMM 株「米国株式の商品概要・取引ルール」</a></li>
          <li><a href="https://www.nomura.co.jp/onlineservice/help/rule/deal_inquiry/fstock_rule.html" target="_blank" rel="noopener noreferrer">野村證券「お取引のルール（外国株式）」</a></li>
        </ul>
        <p>仕組みは2026年9月7日に確認。25銭は計算例であり、特定サービスの現在条件として比較掲載するものではありません。</p>
      </section>

      <p><Link href="/tools/us-stock-fx-profit-calculator">購入時・売却時の為替を分けて損益計算する →</Link></p>
      <p><Link href="/tools/cost-calculator">米国株プリセットで試す →</Link></p>
      <p><Link href="/articles/dmm-kabu-us-stock-fee">DMM 株の米国株手数料と為替コストを見る →</Link></p>
      <p><Link href="/stocks">株式コスト比較へ戻る →</Link></p>
    </article>
  );
}
