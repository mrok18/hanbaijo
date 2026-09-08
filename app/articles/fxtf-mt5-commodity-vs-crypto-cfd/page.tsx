import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT5の商品CFDと暗号資産CFDを比較｜証拠金・1Lot・手数料',
  description: 'FXTF MT5の商品CFDと暗号資産CFDを、取扱商品、専用口座、1Lot、個人レバレッジ、必要証拠金、建玉連動手数料から比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT5 / CFD COMPARISON</p>
    <h1>FXTF MT5のCFDを比較<br />商品20倍、暗号資産2倍</h1>
    <p className="lede">FXTF MT5は2026年9月に商品CFD・暗号資産CFDから提供が始まりました。同じMT5画面でも口座、取引単位、証拠金率、保有コストは別です。金・原油などの商品と、ビットコインなどの暗号資産を同じ「1Lot」で比較しないよう整理します。</p>

    <h2>商品CFDと暗号資産CFDの比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>MT5 商品CFD</th><th>MT5 暗号資産CFD</th></tr></thead><tbody>
      <tr><td className="ex-name">口座</td><td>MT5商品CFD専用口座</td><td>MT5暗号資産CFD専用口座</td></tr>
      <tr><td className="ex-name">主な対象</td><td>金・銀・原油・天然ガス</td><td>ビットコイン等の暗号資産</td></tr>
      <tr><td className="ex-name">個人レバレッジ</td><td>20倍</td><td>2倍</td></tr>
      <tr><td className="ex-name">個人証拠金率</td><td>想定元本の5％</td><td>想定元本の50％</td></tr>
      <tr><td className="ex-name">保有中の負担</td><td>銘柄別スワップ</td><td>レバレッジ手数料</td></tr>
      <tr><td className="ex-name">取引手数料</td><td>建玉連動手数料</td><td>建玉連動手数料</td></tr>
    </tbody></table></div></div>

    <h2>商品CFDは4銘柄で1Lotの中身が違う</h2>
    <p>商品CFDは金、銀、原油、天然ガスを扱います。いずれも最小1Lotですが、価格に掛ける数量が銘柄ごとに異なります。取引画面のLot数だけでなく、トロイオンス、バレル、mmBtuへ直して想定元本を確認します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>銘柄</th><th>1Lot</th><th>個人証拠金率</th></tr></thead><tbody>
      <tr><td className="ex-name">金 XAU/USD</td><td>1トロイオンス</td><td>5％</td></tr>
      <tr><td className="ex-name">銀 XAG/USD</td><td>10トロイオンス</td><td>5％</td></tr>
      <tr><td className="ex-name">原油 XTI/USD</td><td>10バレル</td><td>5％</td></tr>
      <tr><td className="ex-name">天然ガス XNG/USD</td><td>100mmBtu</td><td>5％</td></tr>
    </tbody></table></div></div>

    <h2>金1Lotの公式例は必要証拠金3万2,000円</h2>
    <p>FXTF公式は、金4,000ドル、米ドル円160円、1Lot＝1トロイオンスという仮定で、想定元本64万円、個人の必要証拠金3万2,000円という計算例を掲載しています。これは現在価格ではなく、計算方法を示す仮定値です。</p>
    <div className="formula-box"><code>4,000ドル × 160円 × 1Lot × 5％ ＝ 32,000円</code><small>公式ページの仮定値。実際は発注時の対象価格・円換算レートで変動します。</small></div>

    <h2>暗号資産CFDは個人レバレッジ2倍</h2>
    <p>暗号資産CFDの個人口座は証拠金率50％、レバレッジ2倍です。FXTF公式のBTC/JPY例では、1Lot＝1BTCとして0.01Lotを取引し、BTC価格を1,000万円と仮定した場合、想定元本10万円、必要証拠金5万円になります。</p>
    <div className="formula-box"><code>1,000万円 × 0.01Lot × 50％ ＝ 50,000円</code><small>公式ページの仮定値。暗号資産価格と必要証拠金は取引時点で確認してください。</small></div>
    <div className="callout"><strong>商品CFDより必要証拠金率が10倍</strong><p>商品CFDの5％に対し、暗号資産CFDは50％です。ただし、価格変動幅や1Lotの中身が違うため、証拠金率だけで危険度を比較できません。損失額は想定元本と値動きから計算します。</p></div>

    <h2>建玉連動手数料は新規取引時に残高から引かれる</h2>
    <p>MT5では商品CFD・暗号資産CFDとも建玉連動手数料があります。銘柄と売買方向ごとに、既存建玉と新規注文の合計数量で手数料ランクが決まり、新規取引の片道分だけ新規時に残高から差し引かれます。決済取引には同手数料が発生しません。</p>
    <p>商品CFDは銘柄ごとに1Lotあたり、暗号資産CFDはBTCでは0.01Lotあたりなど、料金表の課金単位も違います。表の「手数料額」だけを比較せず、発注数量まで掛けて円額へ直します。</p>

    <h2>保有コストも別体系</h2>
    <p>商品CFDには銘柄別のスワップがあり、金・銀はリースレートと通貨金利差など、原油・天然ガスは限月間の価格差などを基準に決定されます。暗号資産CFDでは建玉をロールオーバーするとレバレッジ手数料が発生します。短期売買でも営業日の区切りをまたぐか確認します。</p>

    <h2>選び方：資産名より計算単位を先に見る</h2>
    <ul>
      <li>金・銀・エネルギー価格を取引するならMT5商品CFD口座</li>
      <li>暗号資産を現物保有せず差金決済するならMT5暗号資産CFD口座</li>
      <li>必要証拠金は対象価格、円換算、1Lotの中身、証拠金率で計算</li>
      <li>建玉連動手数料と保有中のスワップ・レバレッジ手数料を合算</li>
      <li>商品ごとに専用口座を追加開設し、残高・履歴を分けて確認</li>
    </ul>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/system/mt5/" target="_blank" rel="noopener noreferrer">FXTF「MT5取引システム」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFDレバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFDスプレッド・スワップ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/crypto/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5暗号資産CFDレバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。例示価格は現在レートではありません。発注前にMT5上の必要証拠金、手数料、スプレッド、保有費を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は記事の計算や比較には影響しません。商品CFD・暗号資産CFDは元本や利益が保証されず、証拠金を上回る損失が生じる場合があります。</p>
    </section>

    <p><Link href="/fx/fxtf">FXTFの取引条件を見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-btc-cfd-cost">BTC/JPY 0.01Lotの証拠金・手数料を見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-btc-jpy-vs-usd">BTC/JPYとBTC/USDの証拠金計算を比較する →</Link></p>
    <p><Link href="/articles/fxtf-mt5-gold-cfd-margin">金CFD 1Lotの必要証拠金を見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-silver-cfd-margin">銀CFD 1Lotの必要証拠金を見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-oil-natural-gas-margin">原油・天然ガスCFDを比較する →</Link></p>
    <p><Link href="/tools/fxtf-mt5-margin-calculator">FXTF MT5証拠金計算機で試算する →</Link></p>
    <p><Link href="/articles/fxtf-gx-mt4-mt5-difference">GX・MT4・MT5の違いを見る →</Link></p>
    <p><Link href="/articles/fxtf-position-fee-calculation">建玉連動手数料の計算方法を見る →</Link></p>
    <p><Link href="/cfd">CFDの比較方法へ戻る →</Link></p>
  </article>;
}
