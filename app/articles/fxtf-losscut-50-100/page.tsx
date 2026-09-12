import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fxtf-losscut-50-100' },
  title: 'FXTFのロスカットは50％・100％｜GXとMT4の違い',
  description: 'FXTF GXとMT4の通常時50％、日次判定100％のロスカット条件、判定時刻、値洗い、強制決済の順序を比較します。',
};

export default function Page() {
  return <article><p className="page-kicker">FXTF / LOSS CUT</p><h1>FXTFのロスカット<br />50％と100％は判定時間が違う</h1><p className="lede">通常の取引時間帯は証拠金維持率50％以下、毎営業日の証拠金率判定時刻は100％付近が強制決済の基準です。GXとMT4では判定時刻と100％ちょうどの扱いが異なります。</p>

    <h2>GXとMT4の比較</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>取引システム</th><th>日次判定時刻</th><th>日次の基準</th><th>通常時</th></tr></thead><tbody><tr><td className="ex-name">FXTF GX-FX</td><td>15:35〜15:50の一時点</td><td>100％未満</td><td>50％以下</td></tr><tr><td className="ex-name">FXTF MT4</td><td>15:30〜15:45の約1分間</td><td>100％以下</td><td>50％以下</td></tr></tbody></table></div><p className="panel-note">日本時間。2026年9月8日確認。基準へ達すると、基準を上回るまで損失の大きいポジションから順に決済されます。</p></div>

    <h2>証拠金維持率を金額へ直す</h2><div className="formula-box"><code>証拠金維持率 ＝ 有効証拠金（純資産）÷ 必要証拠金 × 100</code><code>必要証拠金56,000円・純資産84,000円 ＝ 150％</code><code>必要証拠金56,000円・純資産28,000円 ＝ 50％</code><small>入金額ではなく、評価損益などを反映した有効証拠金で計算します。</small></div>

    <h2>15時台の値洗いで必要証拠金も変わる</h2><p>GXでは15時30分以降、判定前に必要証拠金を再計算します。MT4も判定時刻に値洗いを行います。為替レートの変動で純資産だけでなく必要証拠金も変わるため、直前の表示率だけで安全とは判断できません。</p><div className="callout"><strong>100％を維持目標にしない</strong><p>100％付近は日次判定の強制決済に近い水準です。スプレッド拡大、建玉連動手数料、スワップ、値洗いを受けても基準へ近づかない余裕を先に決めます。</p></div>

    <h2>ロスカットは損失上限ではない</h2><p>判定から注文執行までの時間差や急激な相場変動により、基準と同じ価格で決済される保証はありません。預けた証拠金を上回る損失が発生する可能性も公式書面に記載されています。逆指値も週明けの価格乖離などで指定価格から離れて約定する場合があります。</p>

    <h2>取引前の確認順</h2><ol><li>現在の必要証拠金と有効証拠金を確認する</li><li>想定逆行幅を金額へ換算する</li><li>15時台の日次判定をまたぐか確認する</li><li>入金反映を当てにせず、先に数量を減らす基準を決める</li></ol>

    <section className="article-affiliate" aria-label="FXTFの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。ロスカットは損失を限定する保証ではありません。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.fxtrade.co.jp/gx-intro/" target="_blank" rel="noopener noreferrer">FXTF「GX-FX取引概要」</a></li><li><a href="https://www.fxtrade.co.jp/mt4-intro/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引概要」</a></li><li><a href="https://www.fxtrade.co.jp/doc/202303_gx_fx_covenant.pdf" target="_blank" rel="noopener noreferrer">FXTF「GX-FX取引説明書」</a></li></ul><p>判定条件は2026年9月8日に確認しました。契約締結前交付書面と取引画面の最新条件を優先してください。</p></section>
    <p><Link href="/articles/fxtf-minimum-unit-margin">取引数量と必要証拠金を計算する →</Link></p><p><Link href="/articles/fxtf-trading-hours-swap-cutoff">取引停止・スワップ判定時刻を見る →</Link></p><p><Link href="/fx/fxtf">FXTFの公式条件一覧へ →</Link></p>
  </article>;
}
