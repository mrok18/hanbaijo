import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/jfx-vs-fxtf' },
  title: 'JFXとFXTFを比較｜スキャルピング・MT4・手数料の違い',
  description: 'JFXとFXTFを、最低取引単位、発注ツール、スキャルピング、EA、TradingView、建玉連動手数料から公式条件で比較します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FX / JFX VS FXTF</p>
    <h1>JFXとFXTFを比較<br />短期裁量か、MT4・EAか</h1>
    <p className="lede">JFXはスキャルピングを公式に認め、MATRIX TRADERの短期発注機能を前面に出しています。FXTFはGXとMT4を分け、GXではTradingView連携、MT4ではEAによる自動売買に対応します。どちらも最小1,000通貨から取引できますが、Lot表記とコスト構造は同じではありません。</p>

    <h2>主要条件の比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較</th><th>JFX</th><th>FXTF</th></tr></thead><tbody>
      <tr><td className="ex-name">向いている用途</td><td>裁量の短期売買・スキャルピング</td><td>GX・MT4から取引環境を選びたい人</td></tr>
      <tr><td className="ex-name">最低取引単位</td><td>基本1,000通貨</td><td>GX・MT4とも最低1,000通貨</td></tr>
      <tr><td className="ex-name">主な取引ツール</td><td>MATRIX TRADER</td><td>FXTF GX、FXTF MT4</td></tr>
      <tr><td className="ex-name">スキャルピング</td><td>公式に認めると明記</td><td>取引ルールと約定条件を個別確認</td></tr>
      <tr><td className="ex-name">EA自動売買</td><td>MATRIX TRADERは裁量発注が中心</td><td>FXTF MT4で対応</td></tr>
      <tr><td className="ex-name">TradingView</td><td>チャート分析に利用</td><td>FXTF GXのみ口座連携・直接取引に対応</td></tr>
      <tr><td className="ex-name">明示された手数料</td><td>取引・クイック入金・出金・ロスカット0円</td><td>建玉連動手数料あり</td></tr>
    </tbody></table></div></div>

    <h2>最小は同じ1,000通貨でもLot表記が違う</h2>
    <p>JFXは原則1Lot＝1,000通貨です。ただし、メキシコペソ/円など6通貨ペアは1Lot＝1万通貨なので例外確認が必要です。FXTF GXは1Lot＝1万通貨、最低0.1Lot＝1,000通貨です。FXTF MT4は1Lot＝10万通貨、最低0.01Lot＝1,000通貨となります。</p>
    <div className="formula-box"><code>JFX 1Lot ＝ FXTF GX 0.1Lot ＝ FXTF MT4 0.01Lot ＝ 基本1,000通貨</code><small>通貨数量を基準に比較した例。対象通貨ペアと各口座の最新仕様を発注前に確認してください。</small></div>

    <h2>短期裁量ならJFXの発注機能を確認</h2>
    <p>JFXはスキャルピングを認めると公式に掲げ、MATRIX TRADERにクイック注文、ワンクリック注文、全決済、秒決済、ドテンなどの機能を用意しています。MT5とTradingViewも提供していますが、役割はチャート分析です。発注と口座管理はMATRIX TRADERで行う前提で比較します。</p>

    <h2>EAならFXTF MT4、TradingView発注ならGX</h2>
    <p>FXTF MT4はEAによる自動売買に対応します。一方、TradingViewと接続して直接取引できるのはFXTF GXで、FXTF MT4・MT5口座はTradingView接続の対象外です。EAとTradingViewを一つの口座機能として混同せず、使いたい運用方法から口座・ツールを選びます。</p>
    <div className="fx-metric-grid">
      <article><b>JFX</b><h3>短期裁量</h3><p>MATRIX TRADERの発注機能を重視</p></article>
      <article><b>FXTF MT4</b><h3>EA運用</h3><p>自動売買プログラムを利用可能</p></article>
      <article><b>FXTF GX</b><h3>TradingView</h3><p>チャート上から直接取引に対応</p></article>
    </div>

    <h2>FXTFは建玉連動手数料を必ず合算する</h2>
    <p>JFXは取引手数料、クイック入金手数料、出金手数料、ロスカット手数料を0円と公表しています。ただし、スプレッド、スワップ、スリッページは残ります。FXTFはスプレッドに加えて建玉連動手数料があり、通貨ペア、売買方向、同一銘柄・同一方向の保有数量と新規注文数量の合計で金額が変わります。</p>
    <div className="callout"><strong>「0.0銭」だけでは総コストにならない</strong><p>FXTFのゼロスプレッドは対象期間・時間・銘柄などの条件があります。また、公式ページはゼロスプレッド対象でも建玉連動手数料が発生すると案内しています。比較時はスプレッド相当額と手数料を同じ取引数量で合計します。</p></div>

    <h2>結論：取引方法を先に決める</h2>
    <p>スキャルピングを明示的に認める環境で、裁量の高速発注を重視するならJFXが比較候補です。MT4のEAを使うならFXTF MT4、TradingViewから取引したいならFXTF GXが候補になります。どちらも「1,000通貨対応」だけで決めず、Lot表記、スプレッド、手数料、約定条件を自分の取引回数で比較してください。</p>

    <section className="provider-offer" aria-label="JFXとFXTFの広告">
      <div><p className="section-index">PARTNER OFFERS</p><h2>最新条件を公式サイトで確認</h2><p>以下はA8.netの提携広告です。掲載報酬は比較内容や評価には影響しません。</p></div>
      <div className="provider-directory comparison-guide-directory">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
      </div>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/landing/scalping/" target="_blank" rel="noopener noreferrer">JFX「スキャルピングOK」</a></li>
      <li><a href="https://www.jfx.co.jp/landing/tool_lp/" target="_blank" rel="noopener noreferrer">JFX「取引ツール」</a></li>
      <li><a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF「GX取引概要」</a></li>
      <li><a href="https://www.fxtrade.co.jp/mt4-intro/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引概要」</a></li>
      <li><a href="https://www.fxtrade.co.jp/q-tradingview-item1/" target="_blank" rel="noopener noreferrer">FXTF「TradingView接続口座」</a></li>
      <li><a href="https://www.fxtrade.co.jp/positionfee/" target="_blank" rel="noopener noreferrer">FXTF「建玉連動手数料」</a></li>
    </ul><p>比較条件は2026年9月8日に各社公式ページで確認しました。本記事は公開情報のみを整理し、FXTFの取引ツールからレートを取得・保存・再配信していません。取引条件は変更されるため、申込・発注前に最新情報を確認してください。</p></section>

    <p className="affiliate-disclosure">FXは元本および利益が保証されず、預けた証拠金を上回る損失が生じる場合があります。契約締結前交付書面を確認してください。</p>
    <p><Link href="/tools/jfx-fxtf-cost-comparison">JFX・FXTFの総コストを同条件で計算する →</Link></p>
    <p><Link href="/fx/jfx">JFXの取引条件を見る →</Link></p>
    <p><Link href="/fx/fxtf">FXTFの取引条件を見る →</Link></p>
    <p><Link href="/articles/jfx-mt5-tradingview-matrix-trader">JFXの3つのツールを比較する →</Link></p>
    <p><Link href="/articles/fxtf-gx-mt4-mt5-difference">FXTFのGX・MT4・MT5を比較する →</Link></p>
  </article>;
}
