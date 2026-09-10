import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: '岩井コスモ証券のNISA｜国内株・米国株の手数料と対象商品', description: '岩井コスモ証券ネット取引のNISAについて、国内株・米国株の手数料表示、対象商品、課税口座との違いを確認します。' };

export default function Page() { return <article>
  <p className="page-kicker">岩井コスモ証券 / NISA</p><h1>岩井コスモ証券のNISA<br />手数料と対象商品を確認</h1>
  <p className="lede">NISAでは非課税メリットだけでなく、対象商品の範囲、注文画面の口座区分、売却後の資金管理を確認します。手数料の優遇条件は公式案内で最新情報を確認してください。</p>
  <h2>申込み前に分ける3項目</h2><div className="table-scroll"><table className="rates"><thead><tr><th>項目</th><th>確認する内容</th></tr></thead><tbody><tr><td>対象商品</td><td>国内株・米国株・投資信託などの取扱範囲</td></tr><tr><td>手数料</td><td>NISA口座での売買手数料と対象外費用</td></tr><tr><td>口座区分</td><td>NISA・特定・一般を注文時に選択</td></tr></tbody></table></div>
  <h2>NISAと課税口座を混同しない</h2><p>NISA口座の損益と課税口座の損益では、税務上の扱いが異なります。注文前に口座区分を確認し、年間取引報告書や配当の受取方法も分けて管理します。</p>
  <div className="callout"><strong>手数料0円の条件は期間・商品別に確認</strong><p>国内株・米国株の手数料優遇が案内されていても、商品や決済方法により条件が異なります。申込み前に公式の手数料表とNISA案内を確認します。</p></div>
  <h2>注文前チェック</h2><ul><li>NISA対象商品か</li><li>成長投資枠・つみたて投資枠のどちらか</li><li>注文画面の口座区分</li><li>配当・売却代金の受取方法</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.iwaicosmo.net/index.html" target="_blank" rel="noopener noreferrer">岩井コスモ証券「コスモ・ネットレ」</a></li><li><a href="https://www.iwaicosmo.net/products/index.html" target="_blank" rel="noopener noreferrer">コスモ・ネットレ「商品案内」</a></li></ul><p>確認日：2026年9月10日。</p></section>
  <p><Link href="/articles/iwai-cosmo-stock-fees">株式手数料を確認する →</Link></p><p><Link href="/articles/dmm-kabu-nisa-fees-products">他社NISAの手数料条件も比較する →</Link></p>
</article>; }
