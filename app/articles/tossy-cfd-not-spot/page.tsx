import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'TOSSYの株式・暗号資産は現物？6資産とCFDの違い',
  description: 'TOSSYで扱う株式、為替、暗号資産、株価指数、バラエティ、商品資源について、現物保有ではなく差金決済取引である点と証拠金・コストを整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">TOSSY / SPOT VS CFD</p>
    <h1>TOSSYの株式・暗号資産は現物？<br />6資産すべて差金決済</h1>
    <p className="lede">TOSSYは株式、為替、暗号資産、株価指数、バラエティ、商品資源を1つのアプリで扱います。ただし、株式や暗号資産そのものを買って保有する現物取引ではありません。価格差を証拠金で取引するFX・CFDとして理解する必要があります。</p>

    <h2>名前ではなく取引形式を見る</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>表示される資産</th><th>TOSSYでの取引形式</th><th>現物との主な違い</th></tr></thead><tbody>
      <tr><td className="ex-name">株式</td><td>株式CFD</td><td>株主として株式を保有する取引ではない</td></tr>
      <tr><td className="ex-name">為替</td><td>店頭FX</td><td>証拠金を使い通貨ペアの価格差を取引</td></tr>
      <tr><td className="ex-name">暗号資産</td><td>暗号資産CFD</td><td>暗号資産そのものを保有・送付する取引ではない</td></tr>
      <tr><td className="ex-name">株価指数</td><td>株価指数CFD</td><td>指数そのものを保有することはできない</td></tr>
      <tr><td className="ex-name">バラエティ</td><td>バラエティCFD</td><td>参照資産の価格差を取引</td></tr>
      <tr><td className="ex-name">商品資源</td><td>商品CFD</td><td>金・原油などの現物を受け渡さない</td></tr>
    </tbody></table></div></div>

    <h2>現物保有と異なる4つの点</h2>
    <ol>
      <li><strong>証拠金で取引する：</strong>預けた資金より大きな取引ができる一方、損失も拡大します。</li>
      <li><strong>売りから始められる：</strong>値下がりを予想した売りポジションも取れます。</li>
      <li><strong>スプレッドがある：</strong>売値と買値の差が取引開始時の実質コストになります。</li>
      <li><strong>保有中の調整がある：</strong>スワップ、金利調整、価格調整などが商品に応じて発生します。</li>
    </ol>
    <div className="callout"><strong>株式CFDは株主になる取引ではありません</strong><p>原資産が株式でも、現物株の所有権を取得する仕組みではありません。株主優待や議決権を目的にする場合は、現物株を扱う証券口座と区別します。</p></div>

    <h2>最低証拠金率は4％から50％</h2>
    <p>個人の必要証拠金はFX4％以上、株式・バラエティCFD20％以上、株価指数CFD10％以上、商品CFD5％以上、暗号資産CFD50％以上です。同じアプリ内でも最大倍率は約2倍から約25倍まで異なります。</p>
    <div className="formula-box"><code>必要証拠金の目安 ＝ 取引金額 × 商品区分ごとの証拠金率</code><small>実際の必要額、取引単位、価格は注文画面と契約締結前交付書面を優先してください。</small></div>

    <h2>分散しても口座内リスクは連動する</h2>
    <p>TOSSYには、6区分の証拠金維持率が均一になるよう証拠金を自動配分する機能があります。いずれかの区分で追加証拠金が発生すると自動振替が止まり、期限までに解消できない場合は、原則として他区分を含む保有ポジションもマージンカットの対象になります。</p>
    <p>株式と金、FXと暗号資産のように対象を分けても、1つの口座内で資金管理が連動する点を前提に、アセット区分ごとの維持率と口座全体の余裕を確認します。</p>

    <h2>手数料無料とコスト0円は同じではない</h2>
    <p>公式情報では、アカウント管理費と取引手数料は無料です。一方、スプレッド、スワップポイント、金利調整額、価格調整額などは残ります。短期取引はスプレッド、長期保有は調整額まで含めて総額で比較します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://securities.dmm.com/notice/" target="_blank" rel="noopener noreferrer">DMM.com証券「金融商品取引法及び商品先物取引法に基づく表示」</a></li>
      <li><a href="https://securities.dmm.com/service_policy/" target="_blank" rel="noopener noreferrer">DMM.com証券「お客様本位の業務運営に関する方針」</a></li>
      <li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/rules.pdf" target="_blank" rel="noopener noreferrer">DMM.com証券「約款（TOSSY）」</a></li>
      <li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/overview-index.pdf" target="_blank" rel="noopener noreferrer">DMM.com証券「TOSSY 証券CFD取引説明書」</a></li>
    </ul><p>商品区分、証拠金率、手数料、資金振替の条件は2026年9月8日に公式資料で確認しました。取引条件は変更される場合があります。</p></section>

    <p><Link href="/cfd/tossy">TOSSYの6資産・証拠金・横断リスクを確認する →</Link></p>
    <p><Link href="/articles/tossy-margin-by-asset">6資産の必要証拠金を同じ金額で比較する →</Link></p>
    <p><Link href="/articles/tossy-margin-call-losscut">追証とロスカットの連動を確認する →</Link></p>
    <p><Link href="/articles/dmm-cfd-total-cost">CFDのスプレッドと調整額を詳しく見る →</Link></p>
    <p><Link href="/tools/cfd-margin-calculator">商品CFDの必要証拠金を概算する →</Link></p>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">TOSSYへの広告リンクです。新規アカウント登録後に所定の取引条件を満たすと、当サイトが報酬を受け取る場合があります。記事の事実確認や評価とは分けて掲載しています。</p></section>
  </article>;
}
