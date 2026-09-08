import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT5の原油・天然ガスCFDを比較｜1Lot・証拠金・手数料',
  description: 'FXTF MT5の原油CFDと天然ガスCFDを、1Lotの取引単位、必要証拠金、建玉連動手数料、スプレッド、スワップから比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT5 / ENERGY CFD COST</p>
    <h1>原油と天然ガスの1Lot<br />同じLotでも数量が10倍違う</h1>
    <p className="lede">FXTF MT5の商品CFDでは、原油（XTI/USD）1Lotは10バレル、天然ガス（XNG/USD）1Lotは100mmBtuです。どちらも個人証拠金率5％ですが、価格の単位と1Lotの中身が違うため、Lot数だけでは負担を比較できません。</p>

    <h2>公式の仮定例では原油6,000円、天然ガス2,560円</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>原油 XTI/USD</th><th>天然ガス XNG/USD</th></tr></thead><tbody>
      <tr><td className="ex-name">1Lot</td><td>10バレル</td><td>100mmBtu</td></tr>
      <tr><td className="ex-name">公式例の価格</td><td>75ドル</td><td>3.2ドル</td></tr>
      <tr><td className="ex-name">公式例の米ドル円</td><td>160円</td><td>160円</td></tr>
      <tr><td className="ex-name">想定元本</td><td>120,000円</td><td>51,200円</td></tr>
      <tr><td className="ex-name">個人証拠金率</td><td>5％</td><td>5％</td></tr>
      <tr><td className="ex-name">必要証拠金</td><td>6,000円</td><td>2,560円</td></tr>
    </tbody></table></div></div>
    <div className="formula-box"><code>原油：75ドル × 160円 × 10バレル × 5％ ＝ 6,000円</code><small>FXTF公式ページの仮定値です。</small></div>
    <div className="formula-box"><code>天然ガス：3.2ドル × 160円 × 100mmBtu × 5％ ＝ 2,560円</code><small>FXTF公式ページの仮定値です。価格は現在レートではありません。</small></div>

    <h2>値幅損益も1Lotの中身を掛ける</h2>
    <p>原油1Lotでは、原油価格が1ドル動くと10ドルの損益です。米ドル円160円なら約1,600円に相当します。天然ガス1Lotでは、天然ガス価格が0.01ドル動くと1ドルの損益となり、同じ米ドル円なら約160円です。</p>
    <div className="formula-box"><code>値幅（ドル）× 米ドル円 × 銘柄ごとの数量 × Lot数</code><small>取引単位が違うため、「1ドルの値動き」をそのまま2銘柄で比較しないようにします。</small></div>

    <h2>建玉連動手数料は原油43円、天然ガス48円</h2>
    <p>2026年3月2日取引開始時からの公式手数料表では、XTI/USDは新規注文1Lotあたり43円、XNG/USDは1Lotあたり48円です。両銘柄とも掲載表は全数量がランク1ですが、手数料自体は変更される場合があります。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>銘柄</th><th>新規注文</th><th>現在表の建玉連動手数料</th></tr></thead><tbody>
      <tr><td className="ex-name">原油 XTI/USD</td><td>1Lot</td><td>43円</td></tr>
      <tr><td className="ex-name">天然ガス XNG/USD</td><td>1Lot</td><td>48円</td></tr>
      <tr><td className="ex-name">決済注文</td><td>1Lot</td><td>同手数料なし</td></tr>
    </tbody></table></div></div>
    <p>MT5では新規取引の片道分だけ、新規時に残高から差し引かれます。決済取引に建玉連動手数料はありませんが、スプレッドや約定差までなくなるわけではありません。</p>

    <h2>天然ガスのゼロスプレッドにも例外がある</h2>
    <p>FXTFの現行案内では、天然ガスは24時間ゼロスプレッド（原則固定・例外あり）の対象です。一方、金・銀・原油は対象外とされています。市場急変、流動性低下、経済指標発表前後などではスプレッドが拡大する場合があるため、天然ガスでも常に0と断定せず、発注時のBidとAskを確認します。</p>
    <div className="callout"><strong>ゼロスプレッドでも手数料・保有費は残る</strong><p>天然ガスは建玉連動手数料があり、営業日の区切りをまたぐとスワップも発生します。「スプレッド0」と「総コスト0」は別です。</p></div>

    <h2>持越しコストは限月間の価格差などで決まる</h2>
    <p>FXTFは、原油・天然ガスのスワップを限月間の価格差などを基に独自決定すると説明しています。NY時間17時、日本時間では通常午前7時・夏時間は午前6時をまたいで保有するポジションに付与されます。</p>
    <p>売り・買いで受取または支払の向きが異なり、日数も曜日や休日で変わる場合があります。短期取引なら新規・決済コスト、持越しなら当日のスワップまで含めて比較します。</p>

    <h2>原油と天然ガスを選ぶ前の確認順</h2>
    <ol>
      <li>取引する銘柄のBidまたはAskを確認する</li>
      <li>原油10バレル、天然ガス100mmBtuという1Lot単位を掛ける</li>
      <li>米ドル円の円換算レートを掛け、想定元本の5％を求める</li>
      <li>最新の建玉連動手数料とスプレッドを加える</li>
      <li>NY17時をまたぐ場合はスワップと付与日数を確認する</li>
    </ol>
    <p><Link href="/tools/fxtf-mt5-margin-calculator">FXTF MT5証拠金計算機で原油・天然ガスを試算する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD レバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/cfd/mt5/spread/" target="_blank" rel="noopener noreferrer">FXTF「MT5商品CFD スプレッド・スワップ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/commodity_positionfee.pdf" target="_blank" rel="noopener noreferrer">FXTF「商品CFD 建玉連動手数料表」PDF</a></li>
      <li><a href="https://www.fxtrade.co.jp/risk/" target="_blank" rel="noopener noreferrer">FXTF「手数料等およびリスク」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。価格例は現在レートではありません。発注前にMT5画面と最新の契約締結前交付書面・手数料表を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は計算や評価には影響しません。商品CFDは元本や利益が保証されず、相場急変時には証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-mt5-gold-cfd-margin">金CFD 1Lotの必要証拠金を見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-commodity-vs-crypto-cfd">FXTF MT5の商品・暗号資産CFD比較 →</Link></p>
    <p><Link href="/cfd">CFDの比較方法へ戻る →</Link></p>
  </article>;
}
