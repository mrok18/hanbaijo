import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/articles/esmart-fx-losscut' }, title: '三菱UFJ eスマート証券 FXのロスカット｜維持率75％と注文取消し', description: '旧auカブコムFXこと三菱UFJ eスマート証券 FXのロスカット基準、未約定注文の取消し、強制決済と不足金リスクを整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">三菱UFJ eスマート証券 FX / RISK</p><h1>三菱UFJ eスマート証券 FXのロスカット<br />維持率75％を確認</h1>
  <p className="lede">三菱UFJ eスマート証券 FXでは、口座の時価評価額が必要証拠金額の75％を下回ると自動ロスカットが発動します。判定時の注文取消しと、急変時のリスクを分けて確認します。</p>
  <h2>ロスカットの扱い</h2><div className="table-scroll"><table className="rates"><thead><tr><th>状態</th><th>システムの処理</th><th>注意点</th></tr></thead><tbody><tr><td>時価評価額が必要証拠金の75％未満</td><td>自動ロスカット</td><td>全ポジションを強制決済</td></tr><tr><td>未約定の新規注文</td><td>全て取消</td><td>再注文には余力確認が必要</td></tr><tr><td>急変・スプレッド拡大</td><td>想定外の価格で約定する可能性</td><td>基準価格や損失額は保証されない</td></tr></tbody></table></div>
  <h2>維持率の計算方向</h2><div className="callout"><strong>時価評価額 ÷ 必要証拠金 × 100</strong><p>時価評価額は預り金と評価損益を反映した口座価値です。必要証拠金は数量・レート・証拠金率で変わるため、数量を増やす前に維持率を再計算します。</p></div>
  <h2>75％は安全ラインではない</h2><p>75％を下回った時点でロスカットが行われる基準であり、75％の価格や損失額で約定することを保証するものではありません。重要指標や週末をまたぐ建玉では、基準から十分離れた余力を残します。</p>
  <h2>発注前チェック</h2><ul><li>ミニ・通常・大口の数量を確認したか</li><li>FX口座単体の維持率を確認したか</li><li>未約定注文が取消される条件を理解したか</li><li>入金額を超える損失リスクを確認したか</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://kabu.com/item/fx/sys/beginner/chapter3/default.html" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「FXの主な仕組み」</a></li><li><a href="https://kabu.com/pdf/Gmkpdf/fx/NFX_yatsukan.pdf" target="_blank" rel="noopener noreferrer">三菱UFJ eスマート証券「FX約款」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/esmart-fx-trading-unit">取引単位を確認する →</Link></p><p><Link href="/fx/losscut-comparison">ロスカット基準を比較する →</Link></p>
</article>; }
