import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF GX・MT4・MT5の違い｜取引商品とツールを比較',
  description: 'FXTF GX、FXTF MT4、FXTF MT5の取引商品、TradingView連携、EA、対応端末を比較。2026年9月時点のMT5提供範囲も整理します。',
};

const SYSTEMS = [
  { item: '主な取引商品', gx: 'FX・商品CFD・暗号資産CFD・KO', mt4: 'FX', mt5: '商品CFD・暗号資産CFD' },
  { item: 'FX取引', gx: '対応', mt4: '対応', mt5: 'Coming Soon' },
  { item: 'PC利用', gx: 'ウェブブラウザ', mt4: 'インストール・ブラウザ', mt5: 'インストール' },
  { item: 'スマホ', gx: '専用アプリ', mt4: 'MT4アプリ', mt5: 'MT5アプリ' },
  { item: '特徴', gx: 'TradingView連携', mt4: 'EA・カスタム指標', mt5: '21種類の時間足・高速な検証環境' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FXTF / PLATFORM GUIDE</p>
      <h1>FXTF GX・MT4・MT5の違い<br />取引商品とツールを比較</h1>
      <p className="lede">3つは画面デザインだけでなく、取引できる商品と口座が異なります。特にFXTF MT5は2026年9月1日に商品CFD・暗号資産CFDから提供を開始し、FXは確認時点でまだ「Coming Soon」です。</p>

      <div className="callout"><strong>FXを取引するなら、現時点ではGXかMT4</strong><p>ブラウザ・TradingView中心ならGX、EAやカスタムインディケータを使うならMT4が主な選択肢です。MT5は商品CFD・暗号資産CFD用の専用口座から始まっています。</p></div>

      <h2>GX・MT4・MT5の比較表</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>比較項目</th><th>FXTF GX</th><th>FXTF MT4</th><th>FXTF MT5</th></tr></thead>
          <tbody>{SYSTEMS.map((row) => (
            <tr key={row.item}><td className="ex-name">{row.item}</td><td>{row.gx}</td><td>{row.mt4}</td><td>{row.mt5}</td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">2026年9月7日確認。提供商品・対応環境は追加や変更の可能性があるため、口座追加前に公式情報を確認してください。</p></div>

      <h2>FXTF GX：ブラウザとTradingViewで取引</h2>
      <p>GXはPCブラウザとスマートフォンで利用でき、TradingViewの取引プラットフォームからGX口座へ接続できます。FX、商品CFD、暗号資産CFDを同じGX系統で扱いたい場合の入口です。</p>
      <p>TradingView連携に必要なのはFXTF GX口座とTradingViewアカウントです。MT4口座・MT5口座はTradingViewへ接続できません。また、TradingViewはFXTF公式取引システムではないため、表示情報が一時的にGXと一致しない場合があります。</p>

      <h2>FXTF MT4：FXのEA・チャート分析</h2>
      <p>MT4はFX取引用で、PCインストール版ではEAによる自動売買を利用できます。FXTFオリジナルインディケータや外部インディケータも利用できますが、外部ツールの動作は保証されません。</p>
      <div className="fx-metric-grid">
        <article><b>EA</b><h3>自動売買</h3><p>取引ルールをプログラム化して稼働できます。常時運転にはPCや別途VPSの管理が必要です。</p></article>
        <article><b>INDICATOR</b><h3>分析を拡張</h3><p>標準・独自・外部インディケータを使い、チャート環境をカスタマイズできます。</p></article>
        <article><b>HISTORY</b><h3>過去データ</h3><p>公式提供のヒストリカルデータやストラテジーテスターでEAを検証できます。</p></article>
        <article><b>TIMEZONE</b><h3>表示時間に注意</h3><p>MT4チャートはGMT+2／夏時間GMT+3で、日本時間と表示が異なります。</p></article>
      </div>

      <h2>FXTF MT5：CFDから提供開始</h2>
      <p>MT5は2026年9月1日に、商品CFDと暗号資産CFDの2サービスから提供が始まりました。金・銀・原油・天然ガス、ビットコイン・イーサリアムなどが案内され、サービスごとに専用のMT5口座が必要です。</p>
      <p>21種類の時間足、複数チャート、EA検証などMT5の機能を利用できます。ただし「MT5が新しいからFXも取引できる」とは限らず、確認時点のFXはComing Soonです。</p>
      <div className="callout"><strong>MT4用EAは、そのままMT5では動かない</strong><p>MT4とMT5は実行環境が異なります。MT4向けに作成されたEAやインディケータは、そのままMT5へ導入できないと公式に案内されています。</p></div>

      <h2>コストはツール名だけで判断しない</h2>
      <p>FXTFのFX・商品CFD・暗号資産CFDには建玉連動手数料があります。銘柄、売買方向、保有建玉と発注数量の合計で手数料ランクが変わるため、GX・MT4・MT5の機能比較とは別に総コストを計算します。</p>
      <ul>
        <li>取引したい商品が、そのシステムで提供されているか</li>
        <li>裁量取引、TradingView、EAのどれが必要か</li>
        <li>同じ数量で建玉連動手数料がいくらになるか</li>
        <li>スプレッド0の対象時間・銘柄・例外条件</li>
        <li>サービスごとに追加口座が必要か</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fxtrade.co.jp/systemgx/" target="_blank" rel="noopener noreferrer">FXTF「FXTF GX」</a></li>
          <li><a href="https://www.fxtrade.co.jp/system/" target="_blank" rel="noopener noreferrer">FXTF「FXTF MT4」</a></li>
          <li><a href="https://www.fxtrade.co.jp/system/mt5/" target="_blank" rel="noopener noreferrer">FXTF「FXTF MT5」</a></li>
          <li><a href="https://www.fxtrade.co.jp/2026-09-01/" target="_blank" rel="noopener noreferrer">FXTF「MT5サービス提供開始のお知らせ」</a></li>
          <li><a href="https://www.fxtrade.co.jp/q-tradingview-item1/" target="_blank" rel="noopener noreferrer">FXTF「TradingViewからGX口座に接続する方法」</a></li>
        </ul>
        <p>サービス内容は2026年9月7日に確認しました。最新の提供商品と対応環境は公式サイトを優先してください。</p>
      </section>

      <p><Link href="/fx/fxtf">FXTFのコストシートを見る →</Link></p>
      <p><Link href="/articles/fxtf-minimum-unit-margin">FXTFの最小取引単位と必要証拠金を見る →</Link></p>

      <section className="article-affiliate" aria-label="FXTFの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。ツール・費用の説明とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
