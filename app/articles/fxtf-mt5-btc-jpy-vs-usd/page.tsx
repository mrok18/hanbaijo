import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT5のBTC/JPYとBTC/USDを比較｜証拠金の円換算が違う',
  description: 'FXTF MT5のBTC/JPYとBTC/USDについて、0.01Lotの取引単位、必要証拠金の計算式、スプレッドの円換算、建玉連動手数料を比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT5 / BTC PAIR COMPARISON</p>
    <h1>BTC/JPYとBTC/USD<br />証拠金に使うレートが違う</h1>
    <p className="lede">FXTF MT5のBTC/JPYとBTC/USDは、どちらも1Lot＝1BTC、個人証拠金率50％です。ただし、必要証拠金を円で求める際の参照レートが異なります。BTC/USDの価格へ米ドル円を掛ける単純式ではありません。</p>

    <h2>違いは「証拠金の円換算レート」</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>BTC/JPY</th><th>BTC/USD</th></tr></thead><tbody>
      <tr><td className="ex-name">1Lot</td><td>1BTC</td><td>1BTC</td></tr>
      <tr><td className="ex-name">最小例</td><td>0.01Lot＝0.01BTC</td><td>0.01Lot＝0.01BTC</td></tr>
      <tr><td className="ex-name">個人証拠金率</td><td>50％</td><td>50％</td></tr>
      <tr><td className="ex-name">証拠金の参照レート</td><td>BTC/JPYの売値または買値</td><td>BTC/JPYの売値・買値の平均</td></tr>
      <tr><td className="ex-name">建玉連動手数料</td><td>同じ数量帯・同じ単価表</td><td>同じ数量帯・同じ単価表</td></tr>
      <tr><td className="ex-name">価格表示</td><td>日本円</td><td>米ドル</td></tr>
    </tbody></table></div></div>

    <h2>BTC/JPYは売買方向の現在レートを使う</h2>
    <p>日本円を含むBTC/JPYでは、売り注文は売値（Bid）、買い注文は買値（Ask）を使い、取引数量と50％を掛けます。公式例はBTC/JPYの売値1,000万円、0.01Lotの売りで、必要証拠金5万円です。</p>
    <div className="formula-box"><code>1,000万円 × 0.01BTC × 50％ ＝ 50,000円</code><small>FXTF公式ページの仮定値です。現在のBTC価格ではありません。</small></div>

    <h2>BTC/USDはBTC/JPYの売値・買値の平均を使う</h2>
    <p>BTC/USDは日本円を含まないため、FXTF公式は左側銘柄であるBTCの対円レートを使うと説明しています。売買方向にかかわらず、BTC/JPYの売値と買値の平均を求め、取引数量と50％を掛けます。</p>
    <p>公式例ではBTC/JPYの売値1,000万円、買値1,000万8,000円なので、平均は1,000万4,000円です。0.01Lotの必要証拠金は5万20円になります。</p>
    <div className="formula-box"><code>（1,000万円＋1,000万8,000円）÷2 × 0.01BTC × 50％ ＝ 50,020円</code><small>BTC/USD価格 × 米ドル円ではなく、BTC/JPYの中間値を使う公式例です。</small></div>
    <div className="callout"><strong>BTC/USDの取引価格と証拠金参照レートを混同しない</strong><p>売買判断や損益はBTC/USDの値動きに関係しますが、必要証拠金の円換算にはBTC/JPYの平均レートを使います。発注時はBTC/USD画面だけでなく、MT5に表示される必要証拠金を最終確認します。</p></div>

    <h2>スプレッド評価損の円換算も異なる</h2>
    <p>FXTF公式例では、BTC/JPYのスプレッドを8,000円と仮定し、0.01Lotの新規時評価損を80円としています。BTC/USDはスプレッド55ドル、米ドル円160円の仮定で、0.01Lotの評価損は88円です。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>公式の仮定例</th><th>計算式</th><th>0.01Lot</th></tr></thead><tbody>
      <tr><td className="ex-name">BTC/JPY</td><td>8,000円 × 0.01BTC</td><td>80円</td></tr>
      <tr><td className="ex-name">BTC/USD</td><td>55ドル × 160円 × 0.01BTC</td><td>88円</td></tr>
    </tbody></table></div></div>
    <p>これらは計算方法を示す例であり、現在のスプレッドではありません。実際のBid・Askと円換算レートは発注時に確認します。</p>

    <h2>建玉連動手数料は同じ料金表</h2>
    <p>2026年3月2日取引開始時からの公式表では、BTC/JPYとBTC/USDはいずれも、同一銘柄・同一売買方向の建玉数量と新規注文数量の合計が0〜0.1Lotならランク1です。ランク1は新規注文0.01Lotあたり25円です。</p>
    <p>BTC/JPYとBTC/USDは別銘柄なので、それぞれの銘柄・売買方向ごとに建玉と注文数量を合計します。MT5では新規時に片道分が残高から差し引かれ、決済取引に同手数料は発生しません。</p>

    <h2>どちらを選ぶかは基準通貨と確認作業で決める</h2>
    <ul>
      <li>円建て価格をそのまま見たいならBTC/JPY</li>
      <li>ドル建てのビットコイン価格を取引判断に使うならBTC/USD</li>
      <li>BTC/USDでは必要証拠金用のBTC/JPY平均レートも確認する</li>
      <li>両方とも暗号資産の現物受渡しではなく差金決済</li>
      <li>証拠金、建玉連動手数料、スプレッド、レバレッジ手数料を合算する</li>
    </ul>
    <p><Link href="/tools/fxtf-mt5-margin-calculator">FXTF MT5証拠金計算機でBTC/JPY・BTC/USDを試算する →</Link></p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/crypto/mt5/lever/" target="_blank" rel="noopener noreferrer">FXTF「MT5暗号資産CFD レバレッジ」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/crypto_positionfee.pdf" target="_blank" rel="noopener noreferrer">FXTF「暗号資産CFD 建玉連動手数料表」PDF</a></li>
      <li><a href="https://www.fxtrade.co.jp/system/mt5/" target="_blank" rel="noopener noreferrer">FXTF「MT5取引システム」</a></li>
      <li><a href="https://www.fxtrade.co.jp/risk/" target="_blank" rel="noopener noreferrer">FXTF「手数料等およびリスク」</a></li>
    </ul><p>条件は2026年9月8日に公式情報で確認しました。例示レートは現在値ではありません。取引条件は変更される場合があるため、発注前にMT5画面と最新資料を確認してください。</p></section>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">A8.netの提携広告です。広告報酬は計算や評価には影響しません。暗号資産CFDは元本や利益が保証されず、急変時には証拠金を上回る損失が生じる可能性があります。</p></section>
    <p><Link href="/articles/fxtf-mt5-btc-cfd-cost">BTC/JPY 0.01Lotの総コストを見る →</Link></p>
    <p><Link href="/articles/fxtf-mt5-commodity-vs-crypto-cfd">商品CFDと暗号資産CFDの全体比較 →</Link></p>
    <p><Link href="/fx/fxtf">FXTFの取引条件一覧へ →</Link></p>
  </article>;
}
