import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'GMOコインの入出金｜即時入金・振込・出金手数料と反映時間', description: 'GMOコインの日本円・暗号資産の入出金を、手数料、反映、名義の注意点で整理します。' };

export default function Page() { return <article>
  <p className="page-kicker">GMOコイン / FUNDING</p><h1>GMOコインの入出金<br />即時入金・振込・出金手数料</h1>
  <p className="lede">入金方法によって手数料の負担者と反映タイミングが異なります。取引前に、日本円と暗号資産を分けて確認しましょう。</p>
  <h2>日本円の入金・出金</h2><div className="table-scroll"><table className="rates"><thead><tr><th>方法</th><th>手数料の目安</th><th>確認すること</th></tr></thead><tbody><tr><td>即時入金</td><td>GMOコイン負担（無料）</td><td>対応金融機関・利用時間</td></tr><tr><td>振込入金</td><td>振込手数料は利用者負担</td><td>振込先口座・振込名義</td></tr><tr><td>日本円出金</td><td>通常出金は無料、大口出金は別料金</td><td>出金先名義・最低額・処理時間</td></tr></tbody></table></div>
  <h2>暗号資産の預入・送付</h2><p>GMOコインの案内では暗号資産の預入・送付手数料は無料とされています。ただし送付元サービス側の手数料、ネットワークの選択、宛先タグやメモの入力ミスは別のリスクです。初回は少額テストを行い、対応ネットワークを一致させます。</p>
  <div className="callout"><strong>反映されないときの順番</strong><p>入金元名義、振込先、処理状況、メンテナンス、暗号資産ならTxIDとネットワークを順に確認します。名義相違やネットワーク違いはサポート確認が必要です。</p><Link href="/articles/gmo-coin-trading-fees">取引コストの比較へ →</Link></div>
  <h2>入出金前チェック</h2><ul><li>即時入金の対応金融機関と利用時間</li><li>振込手数料を含めた入金額</li><li>出金先が本人名義か</li><li>暗号資産のネットワーク・タグ・最小数量</li></ul>
  <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://coin.z.com/jp/corp/guide/fees/" target="_blank" rel="noopener noreferrer">GMOコイン「手数料（入出金・取引）」</a></li><li><a href="https://coin.z.com/jp/corp/guide/deposit-withdrawal/" target="_blank" rel="noopener noreferrer">GMOコイン「入出金・振替」</a></li></ul><p>確認日：2026年9月10日。対応方法、手数料、処理時間は変更される場合があります。</p></section>
  <p><Link href="/articles/bitbank-deposit-withdrawal">bitbankの入出金も比較する →</Link></p>
</article>; }
