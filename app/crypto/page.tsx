import Link from 'next/link';
import type { Metadata } from 'next';
import { measureAll } from '@/lib/exchanges.mjs';
import { jpy, pct, jst } from '@/lib/format';
import { estimateOneWaySpreadCost } from '@/lib/market-data/cost';

export const revalidate = 60;
export const metadata: Metadata = {
  title: '暗号資産のスプレッド実測｜BTC/JPYの販売所・取引所比較',
  description: 'BTC/JPYの公開APIから取得した気配値をもとに、暗号資産の販売所・取引所スプレッドと片道コストを比較します。',
  alternates: { canonical: '/crypto' },
};

export default async function CryptoPage() {
  const snap = await measureAll();
  const live = snap.rows.filter((row) => !row.error && row.spreadPct !== null);
  return <div className="content-page">
    <p className="page-kicker">CRYPTO / LIVE DATA</p>
    <h1>暗号資産のコストを<br />同じ条件で見る</h1>
    <p className="lede">BTC/JPYの公開APIから気配値を取得し、販売所と取引所の売買スプレッドを同じ計算方法で比較しています。広告掲載の有無と順位は分けて表示します。</p>
    <div className="callout"><strong>最終計測：{jst(snap.measuredAt)}</strong><p>取得成功 {live.length} / {snap.rows.length}件。失敗した値は補完せず、次回計測まで欠測として扱います。</p></div>
    <h2>BTC/JPY スプレッド実測</h2>
    <div className="table-scroll"><table className="rates"><thead><tr><th>サービス</th><th>形式</th><th className="num">買値</th><th className="num">売値</th><th className="num">スプレッド</th><th className="num">100万円片道</th></tr></thead><tbody>
      {snap.rows.map((row) => row.error ? <tr key={row.id}><td>{row.name}</td><td>{row.venue === 'dealer' ? '販売所' : '取引所'}</td><td colSpan={4}>取得エラー（次回再試行）</td></tr> : <tr key={row.id}><td><a href={row.url} target="_blank" rel="noopener noreferrer">{row.name}</a></td><td>{row.venue === 'dealer' ? '販売所' : '取引所'}</td><td className="num">{jpy(row.ask!)}</td><td className="num">{jpy(row.bid!)}</td><td className="num"><strong>{pct(row.spreadPct!)}</strong></td><td className="num">約{jpy(estimateOneWaySpreadCost(1_000_000, row.spreadPct!))}円</td></tr>)}
    </tbody></table></div>
    <h2>数字の読み方</h2><ul><li>買値（ask）と売値（bid）の差がスプレッドです。</li><li>100万円片道は、スプレッドの半分を片道コストとして試算しています。</li><li>販売所は提示価格、取引所は板の最良気配であり、約定を保証する値ではありません。</li></ul>
    <div className="post-list"><div><Link href="/articles/gmo-coin-trading-fees">GMOコインの手数料｜販売所・取引所・暗号資産FX →</Link><p>サービスごとのコストを公式情報で整理</p></div><div><Link href="/articles/bitbank-trading-fees">bitbankの取引手数料と販売所の差 →</Link><p>板取引と提示価格の違いを確認</p></div><div><Link href="/articles/hanbaijo-torihikijo">販売所と取引所は何が違うのか →</Link><p>暗号資産の基本構造を読む</p></div></div>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">データ・参照先</h2><ul><li><a href="https://coin.z.com/jp/" target="_blank" rel="noopener noreferrer">GMOコイン公式サイト</a></li><li><a href="https://bitbank.cc/" target="_blank" rel="noopener noreferrer">bitbank公式サイト</a></li><li><a href="https://bitflyer.com/" target="_blank" rel="noopener noreferrer">bitFlyer公式サイト</a></li></ul><p>公開APIの取得値を自動更新しています。各社の利用規約・API仕様・取引画面をあわせてご確認ください。</p></section>
  </div>;
}
