import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/saxo-tradingview-account-transfer' }, title: 'サクソバンク証券とTradingView｜対応口座と資金振替の確認', description: 'サクソバンク証券でTradingViewを使う場合の対応口座、SaxoTraderでの事前振替、発注前の確認項目を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">SAXO / TRADINGVIEW</p><h1>サクソバンク証券とTradingView<br />対応口座・資金振替を確認</h1>
  <p className="lede">TradingViewは分析と発注を同じ画面で行える一方、すべての商品・口座が同じように対応するとは限りません。対応口座と資金振替の順番を先に確認します。</p>
  <h2>対応口座を分けて考える</h2><div className="table-scroll"><table className="rates"><thead><tr><th>口座例</th><th>取引対象</th><th>確認点</th></tr></thead><tbody><tr><td>FX口座</td><td>FX・FXオプション</td><td>通貨ペアと取引条件</td></tr><tr><td>外国株式口座</td><td>米国株・ETFなど</td><td>市場時間と為替</td></tr><tr><td>株式CFD口座</td><td>米国株などのCFD</td><td>現物との違い・証拠金</td></tr></tbody></table></div>
  <h2>発注前にSaxoTraderで資金を振り替える</h2><p>公式マニュアルでは、TradingViewで取引する前にSaxoTraderGOまたはSaxoTraderPRO上で該当口座へ資金を振り替える手順が案内されています。画面にログインできても、取引口座に資金がなければ発注できない場合があります。</p>
  <div className="callout"><strong>分析画面と取引口座は別に確認</strong><p>TradingViewのチャート表示、SaxoTraderの口座残高、対象商品の取引条件をそれぞれ確認します。現物株と株式CFDを銘柄名だけで判断しないことが重要です。</p></div>
  <h2>利用開始チェックリスト</h2><ol><li>TradingView連携対象の商品か</li><li>SaxoTraderで対応口座へ資金を振り替えたか</li><li>取引単位・必要証拠金・手数料を確認したか</li><li>デモ環境で注文と取消を試したか</li></ol>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.home.saxo/ja-jp/products" target="_blank" rel="noopener noreferrer">サクソバンク証券「取扱商品一覧」</a></li><li><a href="https://www.home.saxo/ja-jp/-/media/documents/regional/ja-jp/manual/tradingviewmanual-20190520" target="_blank" rel="noopener noreferrer">サクソバンク証券「TradingView操作説明書」</a></li></ul><p>確認日：2026年9月10日。連携対象や操作画面は更新されるため、利用前に最新マニュアルを確認してください。</p></section>
  <p><Link href="/articles/saxo-products-overview">取扱商品を比較する →</Link></p><p><Link href="/articles/saxo-cfd-cost-structure">CFDコストを確認する →</Link></p><p><Link href="/fx/saxo">サクソバンク証券の取引条件一覧へ →</Link></p>
</article>; }
