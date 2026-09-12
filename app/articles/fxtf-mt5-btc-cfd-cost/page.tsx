import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fxtf-mt5-btc-cfd-cost' },
  title: 'FXTF MT5のビットコインCFDは0.01Lotでいくら？証拠金・手数料',
  description: 'FXTF MT5のBTC/JPYについて、0.01Lotの想定元本、必要証拠金、建玉連動手数料、スプレッド、保有費を公式情報から計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT5 / BITCOIN CFD COST</p>
    <h1>BTC/JPYを0.01Lot取引<br />必要証拠金はどう計算する？</h1>
    <p className="lede">FXTF MT5の暗号資産CFDは、ビットコイン現物を購入するサービスではありません。価格差を取引する証拠金取引です。0.01Lotの想定元本、必要証拠金、新規時の建玉連動手数料を分け、最初に必要な金額を計算します。</p>

    <h2>結論：価格1,000万円なら0.01Lotの証拠金は5万円</h2>
    <p>FXTF MT5のBTC/JPYは1Lot＝1BTCです。個人口座のレバレッジは2倍、証拠金率は50％なので、0.01LotではBTC価格の0.5％が必要証拠金の目安になります。</p>
    <div className="formula-box"><code>1,000万円 × 0.01Lot × 50％ ＝ 50,000円</code><small>FXTF公式ページの仮定値です。1,000万円は現在レートではありません。</small></div>
    <div className="callout"><strong>5万円だけを入金すれば安全、という意味ではありません</strong><p>新規約定直後にはスプレッド相当の評価損が生じるほか、建玉連動手数料が残高から差し引かれます。相場が逆行する余地も必要です。必要証拠金は発注可否の基準であり、推奨入金額ではありません。</p></div>

    <h2>0.01Lotは「0.01BTCの価格差」を取引する</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認項目</th><th>BTC/JPY 0.01Lot</th></tr></thead><tbody>
      <tr><td className="ex-name">1Lotの取引単位</td><td>1BTC</td></tr>
      <tr><td className="ex-name">0.01Lotの取引数量</td><td>0.01BTC</td></tr>
      <tr><td className="ex-name">個人レバレッジ</td><td>2倍</td></tr>
      <tr><td className="ex-name">個人証拠金率</td><td>想定元本の50％</td></tr>
      <tr><td className="ex-name">価格が1万円動く場合の損益</td><td>約100円（1万円 × 0.01BTC）</td></tr>
      <tr><td className="ex-name">暗号資産の受渡し</td><td>なし（差金決済）</td></tr>
    </tbody></table></div></div>
    <p>買いなら上昇、売りなら下落で利益が出る可能性がありますが、反対方向なら損失です。現物のビットコインを保有・出庫したり、決済に利用したりはできません。</p>

    <h2>現在のランク1手数料は0.01Lotあたり25円</h2>
    <p>2026年3月2日取引開始時からの公式手数料表では、BTC/JPYとBTC/USDは、同一銘柄・同一売買方向の建玉数量と新規注文数量の合計が0〜0.1Lotならランク1です。ランク1の建玉連動手数料は、新規注文0.01Lotあたり25円です。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>合計数量</th><th>ランク</th><th>0.01Lotあたり</th></tr></thead><tbody>
      <tr><td>0〜0.1Lot</td><td>1</td><td>25円</td></tr>
      <tr><td>0.11〜1Lot</td><td>2</td><td>60円</td></tr>
      <tr><td>1.01〜5Lot</td><td>3</td><td>100円</td></tr>
    </tbody></table></div></div>
    <p>たとえば同方向の建玉がない状態で0.01Lotを新規取引するなら、手数料は25円です。一方、すでに同じ方向の建玉があると、その建玉と新規注文を合算してランクを判定します。数量が増えるほど、今回の新規注文に掛かる単価も変わり得ます。</p>
    <div className="formula-box"><code>ランクの単価 × 新規注文Lot ÷ 0.01Lot</code><small>例：ランク1で0.03Lotを新規注文する場合は25円 × 3＝75円。</small></div>

    <h2>MT5は新規時に片道分を残高から差し引く</h2>
    <p>FXTF公式によると、MT5の建玉連動手数料は新規取引の片道分だけ、新規取引時に残高から差し引かれます。決済取引には同手数料が発生しません。ただし、決済時にも売値と買値の差や約定価格のずれはあり得るため、「決済手数料なし」と「往復コストなし」は同じ意味ではありません。</p>

    <h2>証拠金以外に4つの負担を確認</h2>
    <ol>
      <li><strong>建玉連動手数料：</strong>同一方向の既存建玉を含むランクで、新規注文時に計算。</li>
      <li><strong>スプレッド：</strong>新規約定直後の評価損。固定値とは限らず、相場状況で変化。</li>
      <li><strong>レバレッジ手数料：</strong>営業日の区切りをまたいでポジションをロールオーバーすると発生。</li>
      <li><strong>スリッページ：</strong>注文価格と実際の約定価格がずれる可能性。</li>
    </ol>
    <p>短期取引は建玉連動手数料・スプレッド・約定差を、持越し取引はさらにレバレッジ手数料を加えて判断します。</p>

    <h2>必要資金を確認する順番</h2>
    <ol>
      <li>MT5の売値または買値を確認する</li>
      <li>BTC/JPY価格 × 取引Lot × 50％で必要証拠金を試算する</li>
      <li>同方向の既存建玉を加え、最新の建玉連動手数料ランクを確認する</li>
      <li>スプレッド相当の評価損と値動きに耐える余力を別に確保する</li>
      <li>持ち越す場合はレバレッジ手数料の発生時刻・金額を確認する</li>
    </ol>
    <p><Link href="/tools/fxtf-mt5-margin-calculator">FXTF MT5証拠金計算機で試算する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/crypto/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5暗号資産CFD レバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/crypto_positionfee.pdf" target="_blank" rel="noopener noreferrer">FXTF「暗号資産CFD 建玉連動手数料表」PDF</a></li>
      <li><a href="https://www.fxtrade.co.jp/system/mt5/" target="_blank" rel="noopener noreferrer">FXTF「MT5取引システム」</a></li>
      <li><a href="https://www.fxtrade.co.jp/risk/" target="_blank" rel="noopener noreferrer">FXTF「手数料等およびリスク」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。手数料・取引条件は変更される場合があります。発注前にMT5画面と最新の契約締結前交付書面・手数料表を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      <p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は記事の計算や評価には影響しません。暗号資産CFDは元本や利益が保証されず、急変時には証拠金を上回る損失が生じる可能性があります。</p>
    </section>

    <p><Link href="/articles/fxtf-mt5-commodity-vs-crypto-cfd">FXTF MT5の商品・暗号資産CFD比較 →</Link></p>
    <p><Link href="/articles/fxtf-mt5-btc-jpy-vs-usd">BTC/JPYとBTC/USDの違いを見る →</Link></p>
    <p><Link href="/articles/fxtf-position-fee-calculation">建玉連動手数料の仕組みを詳しく見る →</Link></p>
    <p><Link href="/fx/fxtf">FXTFの取引条件一覧へ →</Link></p>
    <p><Link href="/cfd">CFDの比較方法へ戻る →</Link></p>
  </article>;
}
