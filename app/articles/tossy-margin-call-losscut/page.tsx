import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/tossy-margin-call-losscut' },
  title: 'TOSSYの追証・ロスカット｜6資産へ及ぶマージンカット',
  description: 'TOSSYの追加証拠金、マージンカット、ロスカットを区別し、1区分の証拠金不足が他のアセット区分へ及ぶ仕組みを整理します。',
};

export default function Page() {
  return <article><p className="page-kicker">TOSSY / MARGIN CALL & LOSS CUT</p><h1>TOSSYの追証とロスカット<br />強制決済される範囲が違う</h1><p className="lede">ロスカットは各アセット区分の維持率低下による強制決済、マージンカットは追加証拠金を期限までに解消できない場合の強制決済です。TOSSYでは、未解消の追証が他区分のポジションへ及ぶ点を先に確認します。</p>

    <h2>3つの仕組みを混同しない</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>仕組み</th><th>発生・執行の考え方</th><th>決済範囲</th></tr></thead><tbody><tr><td className="ex-name">追加証拠金</td><td>日次判定で必要額が発生</td><td>期限までに解消が必要</td></tr><tr><td className="ex-name">マージンカット</td><td>追加証拠金を期限までに未解消</td><td>原則、全アセット区分</td></tr><tr><td className="ex-name">ロスカット</td><td>区分の維持率が所定水準を下回る</td><td>該当アセット区分</td></tr></tbody></table></div><p className="panel-note">ロスカット処理中の区分など例外があります。判定時刻、解消期限、執行条件は利用商品の最新説明書を確認してください。</p></div>

    <h2>証拠金維持率100％未満は日次判定の注意線</h2><p>公式の商品CFD説明書では、毎営業日のマーケットクローズ後に証拠金維持率を判定し、100％を下回ると追加証拠金が発生する仕組みが説明されています。必要額が0円になるまで、入金またはポジション決済などで解消します。</p><div className="formula-box"><code>証拠金維持率 ＝ 純資産額 ÷ ポジション必要証拠金 × 100</code><small>正確な定義と計算対象はTOSSYの取引画面・商品別説明書を優先してください。</small></div>

    <h2>追証未解消は他資産にも波及する</h2><p>TOSSYは各アセット区分の維持率が均一になるよう証拠金を自動振替する機能を持ちます。しかし、いずれかの区分で追加証拠金が発生すると自動振替は無効になり、利用者自身で対象区分へ資金を振り替える必要があります。</p><p>期限までに追加証拠金が解消されない場合、ロスカット処理中の区分を除き、原則として全アセット区分の全ポジションがマージンカットの対象になります。FXの不足を株式CFDの利益だけで放置する、といった判断は避けます。</p>

    <h2>ロスカットは損失上限ではない</h2><p>急変時、流動性低下、注文集中、システム状況などにより、判定水準で必ず決済されるとは限りません。約定価格が大きく離れ、預けた証拠金を上回る損失が生じる可能性も公式に示されています。</p><div className="callout"><strong>通知を受けてから考え始めない</strong><p>保有前に、維持率の警戒線、減らすポジション、追加可能額、取引を止める条件を決めます。通知設定は補助であり、受信を強制決済回避の前提にしません。</p></div>

    <h2>毎日確認する4項目</h2><ul><li>アセット区分ごとの証拠金維持率</li><li>口座全体と各区分の余力</li><li>追加証拠金額と解消期限</li><li>未約定注文、スプレッド拡大、調整額の予定</li></ul>

    <section className="article-affiliate" aria-label="TOSSYの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.tossy} /><p className="affiliate-disclosure">広告リンクから登録と所定条件の達成が確認された場合、当サイトが報酬を受け取ることがあります。ロスカットは損失を限定する保証ではなく、余裕を持った資金管理が必要です。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/rules.pdf" target="_blank" rel="noopener noreferrer">DMM.com証券「約款（TOSSY）」</a></li><li><a href="https://securities.dmm.com/pre-tossy/_pdf/regulation/overview-commodity.pdf" target="_blank" rel="noopener noreferrer">DMM.com証券「TOSSY 商品CFD取引説明書」</a></li><li><a href="https://securities.dmm.com/notice/" target="_blank" rel="noopener noreferrer">DMM.com証券「金融商品取引法及び商品先物取引法に基づく表示」</a></li></ul><p>追証・ロスカット条件は2026年9月8日に確認しました。商品区分により判定・解消時刻が異なるため、保有商品の最新書面と取引画面を優先してください。</p></section>
    <p><Link href="/articles/tossy-margin-by-asset">6資産の必要証拠金を比較する →</Link></p><p><Link href="/articles/tossy-fees-total-cost">スプレッド・調整額を含む総コストを見る →</Link></p><p><Link href="/cfd/tossy">TOSSYの公式条件一覧へ →</Link></p>
  </article>;
}
