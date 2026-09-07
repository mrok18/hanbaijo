import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'シストレセレクト365の推奨証拠金とは？最大DDを計算',
  description: 'シストレセレクト365の推奨証拠金について、現在の証拠金基準額と過去1年間の最大ドローダウンの関係、複数ストラテジーの必要資金を解説します。',
};

const EXAMPLES = [
  { strategy: 'ストラテジーA', margin: '7万円', drawdown: '13万円', recommended: '20万円' },
  { strategy: 'ストラテジーB', margin: '8万円', drawdown: '10万円', recommended: '18万円' },
  { strategy: 'ストラテジーC', margin: '9万円', drawdown: '16万円', recommended: '25万円' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">SYSTRE SELECT 365 / MARGIN</p>
      <h1>シストレセレクト365の推奨証拠金とは？<br />最大DDから運用資金を計算</h1>
      <p className="lede">推奨証拠金は、注文を出すための最低額ではありません。現在の証拠金基準額に、ストラテジーが過去1年間に経験した最大ドローダウンを加えた「運用を続けるための目安」です。</p>

      <div className="callout"><strong>先に結論</strong><p>推奨証拠金は最低証拠金よりリスクを多く織り込んだ数字ですが、将来の最大損失を保証しません。複数のストラテジーを稼働する場合は、それぞれの推奨証拠金を合計し、さらに相場急変への余力を別に考えます。</p></div>

      <h2>推奨証拠金の計算式</h2>
      <div className="formula-box">
        <code>推奨証拠金 ＝ 現在の証拠金基準額 ＋ 過去1年間の最大ドローダウン</code>
        <small>最大ドローダウンは、累積損益が直前の高値から最も大きく落ち込んだ幅です。</small>
      </div>
      <p>例えば、現在の証拠金基準額が7万円、過去1年間の最大ドローダウンが13万円なら、表示上の推奨証拠金は20万円です。必要証拠金だけを入金するより、過去の損失幅へ耐える資金を加えた考え方です。</p>

      <h2>3つのストラテジーを稼働する簡易例</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>ストラテジー</th><th className="num">現在の証拠金</th><th className="num">過去1年の最大DD</th><th className="num">推奨証拠金</th></tr></thead>
          <tbody>{EXAMPLES.map((example) => (
            <tr key={example.strategy}><td className="ex-name">{example.strategy}</td><td className="num">{example.margin}</td><td className="num">{example.drawdown}</td><td className="num"><strong>{example.recommended}</strong></td></tr>
          ))}<tr><td className="ex-name"><strong>合計</strong></td><td className="num"><strong>24万円</strong></td><td className="num"><strong>39万円</strong></td><td className="num"><strong>63万円</strong></td></tr></tbody>
        </table>
      </div><p className="panel-note">仕組みを示す架空例です。実際の推奨証拠金と最大DDは、シストレセレクト365の画面でストラテジーごとに確認してください。</p></div>

      <h2>最大ドローダウンは「最大損失」ではない</h2>
      <p>最大ドローダウンは過去の集計期間で観測された落ち込みです。将来も同じ範囲に収まるとは限りません。相場環境が変わる、想定外の値動きが続く、複数のストラテジーが同時に損失を出すなどにより、過去1年の最大DDを超える場合があります。</p>
      <div className="fx-metric-grid">
        <article><b>01</b><h3>集計期間</h3><p>最大DDがどの期間の成績から計算されているかを確認します。</p></article>
        <article><b>02</b><h3>取引回数</h3><p>少ない取引だけで得られた数値は、異なる相場で再現しない可能性があります。</p></article>
        <article><b>03</b><h3>通貨の重なり</h3><p>同じ通貨へ偏ると、複数稼働でも同時に損失が出る可能性があります。</p></article>
        <article><b>04</b><h3>基準額の変化</h3><p>証拠金基準額や相場が変われば、必要な運用資金も変わります。</p></article>
      </div>

      <h2>推奨証拠金ぴったりでも安全とは限らない</h2>
      <p>公式案内も、過去1年間の最大ドローダウンを超えた場合には推奨証拠金でもロスカットになる可能性があると説明しています。推奨額は安全保証ではなく、過去データを使った資金管理の出発点です。</p>
      <div className="formula-box"><code>実際に用意する資金 ＝ 推奨証拠金の合計 ＋ 自分で決める余裕資金</code><small>余裕資金の割合は、許容損失、稼働数、通貨の相関、停止基準に合わせて決めます。</small></div>

      <h2>稼働前に確認する6項目</h2>
      <ol>
        <li>1ストラテジーあたりの取引数量</li>
        <li>現在の証拠金基準額</li>
        <li>最大ドローダウンの対象期間</li>
        <li>複数稼働時の推奨証拠金合計</li>
        <li>通貨ペアや売買方向の重なり</li>
        <li>停止する損失額と、停止後に残る建玉</li>
      </ol>

      <section className="article-affiliate" aria-label="シストレセレクト365の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。推奨証拠金の説明やリスク評価とは分けて掲載しています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">フジトミ証券「推奨証拠金について」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365 よくある質問」</a></li>
          <li><a href="https://www.fujitomi.co.jp/tfx/manual/select365_manual_pc.pdf" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365 操作マニュアル」</a></li>
        </ul>
        <p>サービス条件は2026年9月7日に確認しました。稼働前に画面へ表示される最新の推奨証拠金と契約締結前交付書面を確認してください。</p>
      </section>

      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートを見る →</Link></p>
      <p><Link href="/articles/systre-select-365-total-cost">手数料0円の外側にあるコストを見る →</Link></p>
      <p><Link href="/articles/fx-required-margin">FXの必要証拠金を計算する →</Link></p>
    </article>
  );
}
