import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXの適正ロット・取引数量の決め方｜許容損失から逆算',
  description: 'FXの取引数量を、口座資金、許容損失率、損切り幅、1pipsの損益から逆算します。1,000通貨・1万通貨へ丸める具体例付きです。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FX POSITION SIZING</p>
    <h1>FXの適正ロット・取引数量を<br />許容損失から逆算する</h1>
    <p className="lede">必要証拠金から買える最大数量を出すのではなく、損切りになったときに失ってもよい金額から取引数量を逆算します。先に決めるのは「何Lot買うか」ではなく、1回の損失上限です。</p>

    <div className="callout"><strong>特定のリスク率が全員の正解ではありません</strong><p>「資金の1％」などの数字は計算例にすぎません。収入、資産、経験、今後必要になる資金、値動きへの心理的な耐性によってリスク許容度は異なります。</p></div>

    <h2>取引数量を決める4つの数字</h2>
    <ol>
      <li><strong>口座資金</strong>：取引に使う資金。生活費や近く使う予定の資金とは分けます。</li>
      <li><strong>許容損失率</strong>：1回の取引で失ってもよい上限を、自分で設定します。</li>
      <li><strong>損切り幅</strong>：新規価格から逆指値までのpipsです。</li>
      <li><strong>1pipsの損益</strong>：通貨ペアと取引数量により変わります。</li>
    </ol>
    <div className="formula-box">
      <code>許容損失額 ＝ 口座資金 × 許容損失率</code>
      <code>取引数量 ＝ 許容損失額 ÷（損切り幅＋想定コスト）÷ 1通貨・1pipsの損益</code>
      <small>円絡み通貨ペアでは、通常1pips＝0.01円として計算。クロス円以外は円換算が必要です。</small>
    </div>

    <h2>30万円・50pips・1％の計算例</h2>
    <p>口座資金30万円の1％を上限にすると許容損失額は3,000円です。米ドル/円などの円絡み通貨ペアで、損切り50pips、想定スプレッド0.2pipsとすると、1通貨あたりの想定損失は0.502円になります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
      <thead><tr><th>取引単位</th><th className="num">数量の目安</th><th className="num">想定損失</th><th>扱い方</th></tr></thead>
      <tbody>
        <tr><td className="ex-name">1通貨単位</td><td className="num">5,976通貨</td><td className="num">約3,000円</td><td>予算に近い数量へ細かく調整</td></tr>
        <tr><td className="ex-name">1,000通貨単位</td><td className="num">5,000通貨</td><td className="num">約2,510円</td><td>端数を切り下げて予算内へ</td></tr>
        <tr><td className="ex-name">1万通貨単位</td><td className="num">0通貨</td><td className="num">0円</td><td>1万通貨では予算超過のため見送り</td></tr>
      </tbody>
    </table></div><p className="panel-note">0.01円 × 50.2pipsで単純計算。スリッページ、スワップ、税金等は含みません。</p></div>

    <h2>Lotではなく通貨数へ直して比べる</h2>
    <p>1Lotが1,000通貨の会社と、1Lotが1万通貨の会社があります。同じ「1Lot」でも損益は10倍違うため、会社をまたいで考えるときは必ず通貨数へ換算します。通貨ペアによって取引単位に例外がある場合もあります。</p>

    <h2>必要証拠金の範囲内でも数量を減らす理由</h2>
    <p>必要証拠金は新規注文を出すための基準であり、許容損失額ではありません。最大レバレッジまで使えば、少しの逆行で維持率が大きく低下します。数量計算後に必要証拠金と維持率も確認し、両方の条件を満たす数量へ下げます。</p>
    <ul>
      <li>数量計算：損切り時の損失予算を超えないか</li>
      <li>証拠金計算：注文と建玉を維持する余力があるか</li>
      <li>コスト確認：スプレッドやスワップを含めても許容範囲か</li>
    </ul>

    <h2>逆指値があっても上限は保証されない</h2>
    <p>経済指標、要人発言、週明けの窓開けなどでは、逆指値より不利な価格で約定することがあります。金融庁も、相場急変時にはロスカットが適用されても証拠金を上回る損失が生じる可能性を案内しています。計算結果は上限保証ではなく、平常時の計画値として使います。</p>

    <p><Link href="/tools/fx-position-size-calculator">FX取引数量計算機で自分の条件を入力する →</Link></p>
    <p><Link href="/articles/fx-required-margin">必要証拠金の計算方法を見る →</Link></p>
    <p><Link href="/fx/minimum-trade-unit-comparison">FX会社の最低取引単位を比較する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公的資料</h2><ul>
      <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" target="_blank" rel="noopener noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
      <li><a href="https://www.j-flec.go.jp/public/learn/columns/%E8%B3%87%E7%94%A3%E3%82%92%E3%81%B5%E3%82%84%E3%81%99%E3%81%9F%E3%82%81%E3%81%AB%E7%9F%A5%E3%81%A3%E3%81%A6%E3%81%8A%E3%81%8D%E3%81%9F%E3%81%84%E3%83%AA%E3%82%B9%E3%82%AF%E3%81%A8%E6%8A%95%E8%B3%87/" target="_blank" rel="noopener noreferrer">J-FLEC「資産をふやすために知っておきたいリスクと投資の基本」</a></li>
    </ul><p>制度・資料は2026年9月8日に確認しました。</p></section>

    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算例や説明内容とは分けて掲載しています。</p></section>
  </article>;
}
