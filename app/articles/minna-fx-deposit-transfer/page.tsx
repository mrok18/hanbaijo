import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/minna-fx-deposit-transfer' }, title: 'みんなのFXの入金・振替｜銀行振込とダイレクト入金の違い', description: 'みんなのFXの入金口座、ダイレクト入金、FX口座への振替、反映されないときの確認順を公式情報で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">みんなのFX / FUNDING</p>
  <h1>みんなのFXの入金・振替<br />反映されないときの確認順</h1>
  <p className="lede">銀行振込で入金した資金は、まず入出金口座に反映されます。取引を始めるにはFX口座へ振替が必要です。ダイレクト入金との違いを分けて確認します。</p>
  <h2>入金方法と資金の流れ</h2>
  <div className="table-scroll"><table className="rates"><thead><tr><th>方法</th><th>反映先</th><th>次に行う操作</th></tr></thead><tbody><tr><td>銀行振込</td><td>入出金口座</td><td>FX口座へ資金振替</td></tr><tr><td>ダイレクト入金</td><td>入出金口座へ原則リアルタイム</td><td>必要に応じてFX口座へ振替</td></tr></tbody></table></div>
  <p>ダイレクト入金は操作完了後に画面を途中で閉じると、銀行から引落しされてもリアルタイム反映されない場合があります。完了画面まで進み、残高を確認します。</p>
  <h2>入金が反映されない場合</h2>
  <div className="callout"><strong>3段階で切り分ける</strong><p>①銀行側の引落し、②入出金口座の残高、③FX口座の証拠金振替を順番に確認します。名義や振込先の誤りがある場合は、公式サポートへ振込日時と金額を伝えます。</p></div>
  <div className="fx-metric-grid"><article><b>STEP 1</b><h3>銀行側</h3><p>引落し・振込完了を確認</p></article><article><b>STEP 2</b><h3>入出金口座</h3><p>着金を確認</p></article><article><b>STEP 3</b><h3>FX口座</h3><p>証拠金へ振替</p></article><article><b>ORDER</b><h3>発注前</h3><p>取引画面の残高を確認</p></article></div>
  <h2>出金時も口座区分を確認</h2><p>FX口座の資金を出金する場合も、口座残高と出金可能額を確認します。ポジション保有中は出金後の維持率が下がるため、必要証拠金と余裕資金を分けて管理します。</p>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://min-fx.jp/support/money/" target="_blank" rel="noopener noreferrer">みんなのFX「入出金・振替」</a></li><li><a href="https://min-fx.jp/lineup/fx/service/outline/" target="_blank" rel="noopener noreferrer">みんなのFX「サービス概要」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/minna-fx-trading-unit">取引単位と0.1Lotを確認する →</Link></p><p><Link href="/fx/minna-fx">みんなのFXの取引条件一覧へ →</Link></p>
</article>; }
