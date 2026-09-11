import Link from 'next/link';

export const metadata = {
  title: '暗号資産担保ローンとは？BTC・ETHを担保に借りる前の確認項目',
  description: '暗号資産担保ローンの仕組み、担保評価、金利、追加担保、強制決済、事業者リスクを中立的に整理します。',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '暗号資産担保ローンは暗号資産の売却と同じですか？', acceptedAnswer: { '@type': 'Answer', text: '担保を預けて借入を受けるため、仕組みは売却と異なります。ただし返済や強制決済で暗号資産を売却する場合は、税務上の確認が必要です。' } },
    { '@type': 'Question', name: '暗号資産担保ローンで価格が下落するとどうなりますか？', acceptedAnswer: { '@type': 'Answer', text: '担保評価額が下がるとLTVが上がり、追加担保や一部返済を求められたり、条件によって担保が強制決済されたりします。' } },
    { '@type': 'Question', name: '担保掛目だけでサービスを比較してよいですか？', acceptedAnswer: { '@type': 'Answer', text: '担保掛目だけでなく、金利、手数料、警告水準、強制決済、返済期限、事業者の管理体制を同じ項目で比較します。' } },
  ],
};

export default function Page() {
  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">CRYPTO / COLLATERAL LOAN</p>
    <h1>暗号資産担保ローンとは？<br />BTC・ETHを担保に借りる前の確認項目</h1>
    <p className="lede">暗号資産を売却せずに資金を借りられる商品でも、価格下落時には担保不足や強制決済が起こり得ます。金利だけでなく、担保評価・返済・事業者リスクを順番に確認します。</p>

    <h2>仕組みは「暗号資産を預け、借入を受ける」</h2>
    <p>利用者がBTCやETHなどを担保として預け、担保評価額の一定割合を上限に日本円やステーブルコイン等を借りる形が基本です。借入額に対する担保の割合（LTV）や、担保価値が下落した際の対応はサービスごとに異なります。</p>
    <div className="callout"><strong>担保評価額＝借りられる金額ではありません</strong><p>担保掛目、最低借入額、金利、手数料、対象銘柄、返済期限を確認し、余裕を残した借入額にします。</p></div>

    <h2>申込み前の7項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>見るポイント</th></tr></thead><tbody>
      <tr><td className="ex-name">担保銘柄</td><td>BTC・ETH以外の対応可否、入庫・出庫制限</td></tr>
      <tr><td className="ex-name">担保掛目</td><td>評価額の何％まで借りられるか</td></tr>
      <tr><td className="ex-name">金利と手数料</td><td>年率、日割り計算、借入・返済・送金手数料</td></tr>
      <tr><td className="ex-name">警告水準</td><td>LTV上昇時の通知、追加担保や一部返済の条件</td></tr>
      <tr><td className="ex-name">強制決済</td><td>判定時刻、売却方法、急落時の不足金の扱い</td></tr>
      <tr><td className="ex-name">返済条件</td><td>返済期限、最低返済額、利息の支払方法</td></tr>
      <tr><td className="ex-name">事業者リスク</td><td>登録・管理体制、破綻時の返還や補償の範囲</td></tr>
    </tbody></table></div></div>

    <h2>価格下落時は「追加担保→強制決済」の順に進む</h2>
    <p>担保価格が下がるとLTVが上がります。サービスが定める警告水準を超えると追加担保や一部返済を求められ、さらに下落すると担保が売却される場合があります。急変時は通知から対応までの時間が短く、売却後も借入元本と利息が残る条件も確認が必要です。</p>
    <div className="formula-box"><code>LTV ＝ 借入残高 ÷ 担保評価額 × 100</code><small>担保評価額は価格変動で変わるため、借入時のLTVだけで安全性を判断しません。</small></div>

    <h2>税金は「借入」と「担保売却」を分けて確認</h2>
    <p>借入金の受取り自体と、返済のために暗号資産を売却する場合では確認点が異なります。担保の移転、利息、強制決済、暗号資産の売却益に関する扱いは、サービスの契約書と税務当局の最新案内を確認し、必要に応じて税理士へ相談します。</p>

    <h2>当サイトでの比較方針</h2>
    <p>広告報酬の有無で順位を決めず、担保掛目・金利・警告水準・強制決済条件を同じ項目で並べます。個別サービスの条件は承認済み広告主の公式資料を確認したうえで、別ページに追加します。</p>
    <p><Link href="/crypto">暗号資産のスプレッド実測と関連ガイドを見る →</Link></p>
    <p><Link href="/articles/gmo-coin-trading-fees">暗号資産の売買手数料を確認する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公的資料</h2><ul>
      <li><a href="https://www.fsa.go.jp/singi/singi_kinyu/angoshisanseido_wg/gijishidai/20251107/02.pdf" target="_blank" rel="noopener noreferrer">金融庁・FSB資料「暗号資産の借入れに関連するリスクの指摘」</a></li>
      <li><a href="https://www.fsa.go.jp/singi/singi_kinyu/angoshisanseido_wg/gijiroku/20251107.html" target="_blank" rel="noopener noreferrer">金融庁「暗号資産制度に関するワーキング・グループ」</a></li>
    </ul><p>制度・商品条件は変更される場合があります。確認日：2026年9月11日</p></section>
  </article>;
}
