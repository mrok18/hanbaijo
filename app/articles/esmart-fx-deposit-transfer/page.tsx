import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '三菱UFJ eスマート証券 FXの入金・振替｜証券口座から自動振替', description: '三菱UFJ eスマート証券 FXの入金経路、証券口座とFX口座の振替、反映確認、外貨入出金の注意点を整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">三菱UFJ eスマート証券 FX / FUNDING</p><h1>三菱UFJ eスマート証券 FXの入金<br />証券口座からの振替を確認</h1>
  <p className="lede">証券口座とFX口座を同時に開設する場合、証券口座への入金後にFX口座へ自動振替が設定される経路があります。どの口座に資金があるかを確認してから発注します。</p>
  <h2>資金の流れ</h2><div className="table-scroll"><table className="rates"><thead><tr><th>経路</th><th>反映先</th><th>確認すること</th></tr></thead><tbody><tr><td>銀行から証券口座へ</td><td>証券口座の預り金</td><td>FX口座への振替設定</td></tr><tr><td>FX口座へ振替</td><td>FX取引の証拠金</td><td>取引画面の有効証拠金</td></tr><tr><td>外貨入金</td><td>外貨取引口座</td><td>外貨口座の開設状況</td></tr></tbody></table></div>
  <h2>反映されないときの切り分け</h2><ol><li>銀行側の振込完了を確認する</li><li>証券口座の預り金残高を確認する</li><li>FX口座への振替履歴を確認する</li><li>FX取引画面の証拠金を確認する</li></ol>
  <div className="callout"><strong>「入金した」だけで発注しない</strong><p>証券口座に残高があっても、FX口座の必要証拠金へ反映されていなければ発注できません。振替可能額とFX口座残高を同じ画面で確認します。</p></div>
  <h2>出金時は余力を残す</h2><p>ポジションを保有しているときに出金すると、有効証拠金とロスカットまでの余裕が減ります。出金可能額だけでなく、必要証拠金と評価損益を確認してから依頼します。</p>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://kabu.com/item/fx/sys/beginner/chapter7/default.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「口座開設の流れとFXデモ取引」</a></li><li><a href="https://kabu.com/item/payment_cashout/default.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「入金・出金」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/esmart-fx-trading-unit">取引単位を確認する →</Link></p><p><Link href="/fx/au-kabucom-fx">三菱UFJ eスマート証券 FXの条件一覧へ →</Link></p>
</article>; }
