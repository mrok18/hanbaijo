import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '三菱UFJ eスマート証券 FXの取引単位｜ミニ1,000通貨・通常・大口', description: '旧auカブコムFXこと三菱UFJ eスマート証券 FXのミニ・通常・大口を、通貨数量と注文上限から整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">三菱UFJ eスマート証券 FX / UNIT</p><h1>三菱UFJ eスマート証券 FX<br />ミニ・通常・大口を比較</h1>
  <p className="lede">サービス名が旧auカブコムFXから変わっても、取引条件を確認するときは「ミニ」「通常」「大口」の数量区分が重要です。1,000通貨から始められる条件と例外を整理します。</p>
  <h2>3つの取引単位</h2><div className="table-scroll"><table className="rates"><thead><tr><th>区分</th><th>基本の通貨数量</th><th>新規注文上限（1回）</th></tr></thead><tbody><tr><td>ミニ</td><td>1,000通貨</td><td>10万通貨</td></tr><tr><td>通常</td><td>1万通貨</td><td>100万通貨</td></tr><tr><td>大口</td><td>10万通貨</td><td>300万通貨</td></tr></tbody></table></div>
  <p>南アフリカランド/円、ハンガリーフォリント/円など一部の通貨ペアはミニでも1万通貨単位です。ペアを選んだら、注文画面の数量単位を確認します。</p>
  <h2>必要証拠金と数量を分ける</h2><p>1,000通貨は取引数量であり、必要証拠金そのものではありません。レート、証拠金率、評価損益によって必要額と維持率が変わるため、余裕資金を残して発注します。</p>
  <div className="callout"><strong>少額練習はミニから</strong><p>最小数量で損益の振れを抑え、取引画面の操作とロスカット余力を確認します。慣れてから数量を増やす場合も、1回の損失許容額を先に決めます。</p><Link href="/tools/fx-position-size-calculator">FXポジションサイズ計算機を使う →</Link></div>
  <h2>注文前チェック</h2><ul><li>通貨ペアが1,000通貨対応か</li><li>ミニ・通常・大口の区分を選んだか</li><li>必要証拠金と余裕資金を確認したか</li><li>1回・保有合計の上限に収まるか</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://kabu.com/item/fx/sys/rule.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「FX取引ルール」</a></li><li><a href="https://kabu.com/item/fx/sys/default.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「FX（旧auカブコムFX）」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/esmart-fx-deposit-transfer">入出金・自動振替を確認する →</Link></p><p><Link href="/articles/esmart-fx-losscut">ロスカット基準を確認する →</Link></p><p><Link href="/fx/au-kabucom-fx">三菱UFJ eスマート証券 FXの条件一覧へ →</Link></p>
</article>; }
