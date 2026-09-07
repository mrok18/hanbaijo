import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'DMM CFDの追証とロスカットの違い｜100％・50％を整理',
  description: 'DMM CFDの追加証拠金、マージンカット、ロスカットについて、証拠金維持率100％と50％の違い、解消方法、注意点を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">DMM CFD / MARGIN SAFETY</p>
      <h1>DMM CFDの追証とロスカットの違い<br />100％・50％を整理</h1>
      <p className="lede">追加証拠金は毎営業日の判定で証拠金維持率が100％を下回ったとき、ロスカットは取引中に50％以下となったときに発生します。数字だけでなく、判定時点と解消方法を分けて理解します。</p>

      <div className="callout"><strong>100％と50％は別の制度</strong><p>100％未満は追加証拠金の判定、50％以下はリアルタイムのロスカットです。追加証拠金の期限前でも、相場がさらに逆行して50％以下になればロスカットされます。</p></div>

      <h2>3つの強制決済を区別する</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>制度</th><th>発生条件</th><th>対応</th><th>未対応の場合</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">追加証拠金</td><td>毎営業日の判定で維持率100％未満</td><td>入金またはポジション決済等で不足額を0円にする</td><td>期限後にマージンカット</td></tr>
            <tr><td className="ex-name">マージンカット</td><td>追加証拠金を期限までに解消しない</td><td>期限前に追加証拠金を解消</td><td>全ポジションを強制決済</td></tr>
            <tr><td className="ex-name">ロスカット</td><td>取引中に維持率50％以下</td><td>50％へ近づく前に数量・資金を管理</td><td>未約定注文取消後、全ポジションを強制決済</td></tr>
          </tbody>
        </table>
      </div></div>

      <h2>証拠金維持率の計算式</h2>
      <div className="formula-box">
        <code>証拠金維持率 ＝（純資産額 − 注文証拠金）÷ ポジション必要証拠金 × 100</code>
        <small>評価損が増えると純資産額が減り、現在レートや円換算レートの変動で必要証拠金も動きます。</small>
      </div>
      <p>純資産額が30万円、注文証拠金が0円、ポジション必要証拠金が20万円なら維持率は150％です。評価損などで純資産額が18万円になると90％、10万円になると50％となります。</p>

      <h2>維持率100％未満：追加証拠金</h2>
      <p>DMM CFDは毎営業日のマーケットクローズ後のメンテナンス中に維持率を判定し、100％を下回ると追加証拠金が発生します。追加証拠金が発生したメンテナンス明けの営業日22時59分までに不足額を0円にできない場合、23時00分にマージンカットとなります。</p>
      <div className="callout"><strong>相場回復だけでは解消にならない</strong><p>一度追加証拠金が発生すると、その後の値動きで維持率が100％以上へ戻っても自動解消されません。公式画面の追加証拠金額が0円になったことを確認します。</p></div>

      <h2>維持率50％以下：ロスカット</h2>
      <p>取引中に維持率が50％以下になると、まず未約定注文が取り消されます。取消しによって維持率が50％を回復しなければ、すべての未決済ポジションが強制決済されます。</p>
      <p>決済の逆指値注文も取消対象となる場合があります。また、有効な取引レートが配信されていない銘柄は決済が遅れる可能性があり、50％の水準や預けた証拠金の範囲で損失が止まる保証はありません。</p>

      <h2>「入金」と「決済」の効果は同じではない</h2>
      <div className="fx-metric-grid">
        <article><b>DEPOSIT</b><h3>入金する</h3><p>純資産を増やして不足額を解消します。ただし、保有数量と相場変動リスクはそのまま残ります。</p></article>
        <article><b>REDUCE</b><h3>ポジションを決済</h3><p>必要証拠金と将来の値動きによる損益幅を小さくします。確定損益も純資産へ反映されます。</p></article>
        <article><b>CANCEL</b><h3>新規注文を取り消す</h3><p>注文証拠金を減らせますが、保有中ポジションの評価損は解消しません。</p></article>
        <article><b>VERIFY</b><h3>0円表示を確認</h3><p>追加証拠金が発生した後は、取引画面で不足額が0円になったことまで確認します。</p></article>
      </div>

      <h2>強制決済へ近づかないための確認項目</h2>
      <ul>
        <li>新規注文前に、必要証拠金ではなく想定損失を含む余力を計算する</li>
        <li>外貨建て銘柄では原資産価格と円換算レートの両方を確認する</li>
        <li>複数銘柄の同時保有で、全ポジション決済となる範囲を確認する</li>
        <li>休場明けや重要指標時は、逆指値価格を飛び越える可能性を見込む</li>
        <li>公式の証拠金シミュレーションと取引画面の資産状況を併用する</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fx.dmm.com/cfd/service/margin/" target="_blank" rel="noopener noreferrer">DMM CFD「証拠金シミュレーション」</a></li>
          <li><a href="https://fx.dmm.com/cfd/aboutcfd/losscut/" target="_blank" rel="noopener noreferrer">DMM CFD「ロスカットとは？」</a></li>
          <li><a href="https://fx.dmm.com/support/faqs/article/00126/" target="_blank" rel="noopener noreferrer">DMM FX/CFD「ロスカットと追加証拠金の違い」</a></li>
          <li><a href="https://fx.dmm.com/policy/regulation/overview_cfd.pdf" target="_blank" rel="noopener noreferrer">DMM CFD「店頭デリバティブ取引説明書」</a></li>
        </ul>
        <p>制度は2026年9月7日に確認しました。解消期限は年末年始等に変更される場合があるため、発生時は取引画面と公式案内を優先してください。</p>
      </section>

      <p><Link href="/articles/dmm-cfd-margin-leverage">DMM CFDの必要証拠金を計算する →</Link></p>
      <p><Link href="/articles/dmm-cfd-total-cost">DMM CFDの総コストを見る →</Link></p>
      <p><Link href="/cfd/dmm-cfd">DMM CFDのコストシートを見る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。リスク説明・制度確認とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
