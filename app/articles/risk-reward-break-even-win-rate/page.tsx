import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = { title: 'リスクリワード1対2の損益分岐勝率は？コスト込みで計算', description: '利益と損失の比率から損益分岐勝率を計算し、スプレッドや売買手数料を含めると必要勝率がどう変わるかを具体例で解説します。' };
const ROWS = [
  { ratio: '1：0.5', rate: '66.7％', note: '利益が損失の半分' }, { ratio: '1：1', rate: '50.0％', note: '利益と損失が同額' },
  { ratio: '1：1.5', rate: '40.0％', note: '利益が損失の1.5倍' }, { ratio: '1：2', rate: '33.3％', note: '利益が損失の2倍' },
  { ratio: '1：3', rate: '25.0％', note: '利益が損失の3倍' },
] as const;

export default function Page() { return <article>
  <p className="page-kicker">RISK / REWARD</p><h1>リスクリワード1対2の<br />損益分岐勝率は何％？</h1>
  <p className="lede">損失1に対して利益2を狙い、取引コストを無視するなら損益分岐勝率は約33.3％です。ただし実際にはスプレッドや手数料が毎回発生し、必要な勝率は少し上がります。</p>
  <div className="formula-box"><code>損益分岐勝率 ＝ 1回の損失 ÷（1回の利益＋1回の損失）× 100</code><small>利益・損失はスプレッドや売買手数料を反映した金額で計算します。</small></div>
  <h2>コストなしの損益分岐勝率</h2>
  <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>損失：利益</th><th className="num">損益分岐勝率</th><th>意味</th></tr></thead><tbody>{ROWS.map(row => <tr key={row.ratio}><td className="ex-name">{row.ratio}</td><td className="num">{row.rate}</td><td>{row.note}</td></tr>)}</tbody></table></div><p className="panel-note">引き分け、取引コスト、スリッページを含まない単純計算です。</p></div>
  <h2>1対2でもコストを入れると33.3％ではない</h2>
  <p>損切り時の値幅損失が5,000円、利確時の値幅利益が1万円、1往復のコストが200円の場合、勝ち1回は9,800円、負け1回は5,200円です。</p>
  <div className="formula-box"><code>5,200円 ÷（9,800円＋5,200円）＝ 約34.7％</code><small>往復コスト200円により、損益分岐勝率は33.3％から約34.7％へ上昇します。</small></div>
  <p>取引回数が増えるほど、1回あたりでは小さく見えるコストが累積します。狭い利確幅で回数を増やす手法ほど、コスト反映前後の差を確認する必要があります。</p>
  <h2>勝率が高くても利益になるとは限らない</h2>
  <p>利益2,000円、損失1万円なら、勝率80％でもコスト次第で利益が残らない場合があります。反対に、利益が損失の3倍なら勝率が50％未満でも計算上の期待値がプラスになる条件があります。勝率と損益比は必ず一緒に見ます。</p>
  <div className="formula-box"><code>1回あたり期待値 ＝ 勝率 × 勝ち金額 − 敗率 × 負け金額</code><small>期待値は多数回を同じ条件で行うと仮定した数学的平均で、将来の利益予測ではありません。</small></div>
  <h2>実績を入力するときの注意</h2>
  <ul><li>含み益・含み損ではなく、同じ決済基準の取引を集計する</li><li>スプレッド、手数料、金利・スワップ、為替コストを含める</li><li>数回だけの勝率を長期の前提にしない</li><li>相場環境や取引ルールを変更した期間を混ぜない</li><li>最大連敗と資金減少にも耐えられる数量にする</li></ul>
  <div className="callout"><strong>プラス期待値でも連敗は起こります</strong><p>期待値がプラスという計算だけでは資金管理になりません。1回の損失額を先に制限し、連敗しても取引継続が困難にならない数量へ調整します。</p></div>
  <p><Link href="/tools/risk-reward-calculator">損益分岐勝率と期待値を計算する →</Link></p><p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p><p><Link href="/tools/cost-calculator">取引コストを円で合算する →</Link></p>
  <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">松井証券への広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。計算例とは分けて掲載しています。</p></section>
</article>; }
