import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'シストレセレクト365のロスカット｜有効比率100％と証拠金不足',
  description: 'フジトミ証券のくりっく365を使うシストレセレクト365について、有効比率100％のロスカット、150％のアラート、証拠金不足を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">SYSTRE SELECT 365 / RISK CONTROL</p>
      <h1>シストレセレクト365のロスカット<br />有効比率100％と証拠金不足</h1>
      <p className="lede">自動売買でもロスカットは自動的に回避されません。フジトミ証券のくりっく365では、1分ごとの確認で有効比率が100％以下になると全建玉の決済注文が発注されます。</p>

      <div className="callout"><strong>推奨証拠金でもロスカットは起こり得る</strong><p>推奨証拠金は現在の証拠金基準額と過去1年の最大ドローダウンを使った目安です。将来の損失が過去最大を超えれば、推奨額で運用してもロスカットされる可能性があります。</p></div>

      <h2>アラート・ロスカット・証拠金不足</h2>
      <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table">
        <thead><tr><th>状態</th><th>基準</th><th>判定</th><th>対応・結果</th></tr></thead><tbody>
          <tr><td className="ex-name">アラート</td><td>有効比率150％以下</td><td>1分ごと</td><td>登録メールへ通知</td></tr>
          <tr><td className="ex-name">ロスカット</td><td>有効比率100％以下</td><td>1分ごと</td><td>未約定注文取消、全建玉へ決済注文</td></tr>
          <tr><td className="ex-name">証拠金不足</td><td>取引終了後の値洗いで不足</td><td>取引日終了後</td><td>翌営業日17時までに不足額を入金</td></tr>
          <tr><td className="ex-name">預託額超過損</td><td>決済後も口座がマイナス</td><td>決済後</td><td>翌営業日15時までに入金</td></tr>
        </tbody></table></div></div>

      <h2>有効比率の計算</h2>
      <div className="formula-box"><code>有効比率 ＝ 有効証拠金額 ÷ 必要証拠金額 × 100</code><code>ロスカットライン ＝ 必要証拠金額 × 100％</code></div>
      <p>必要証拠金が6万円、有効証拠金が9万円なら150％でアラート水準です。有効証拠金が6万円まで減ると100％となり、ロスカット基準へ到達します。</p>

      <h2>ロスカットは1分ごとの判定</h2>
      <p>有効比率が100％以下になると、未約定注文が取り消され、すべての建玉へ自動的に決済注文が発注されます。判定と次の判定の間に大きく価格が動けば、100％の水準を下回った価格で約定し、証拠金預託額を超える損失が生じる可能性があります。</p>
      <p>ロスカットによる決済注文にも通常の手数料が発生します。ただし、両建てを建玉整理で決済できる場合、その建玉整理による決済には手数料が発生しないと案内されています。</p>

      <h2>証拠金基準額の変更でも比率は下がる</h2>
      <p>くりっく365の証拠金基準額はレバレッジ25倍上限付きHV方式で計算され、毎週見直されます。相場が動かなくても必要証拠金の引上げによって有効比率が下がり、ロスカット基準へ近づく場合があります。</p>
      <div className="fx-metric-grid">
        <article><b>WEEKLY</b><h3>毎週の基準額</h3><p>翌週に適用する証拠金基準額を事前に確認します。</p></article>
        <article><b>STRATEGY</b><h3>稼働数</h3><p>複数ストラテジーの必要証拠金と評価損を合算します。</p></article>
        <article><b>DRAW DOWN</b><h3>過去最大損失</h3><p>最大DDを超える損失も起こり得る前提で余力を置きます。</p></article>
        <article><b>STOP</b><h3>手動停止</h3><p>ロスカットだけに任せず、損失許容額に応じた停止・決済基準を持ちます。</p></article>
      </div>

      <h2>証拠金不足は翌営業日17時まで</h2>
      <p>取引終了後の値洗いで証拠金不足が発生した場合、翌営業日（日本の銀行休業日に当たるときは次の営業日）の17時までに前日証拠金不足額以上を入金します。対応しなければ17時以降に全建玉が強制決済されます。</p>
      <p>ロスカットと証拠金不足は判定時点が違います。取引時間中の有効比率100％だけでなく、取引終了後の値洗いと翌週の証拠金基準額も確認します。</p>

      <h2>稼働前の安全確認</h2>
      <ul>
        <li>推奨証拠金と最低必要証拠金を区別する</li>
        <li>有効比率150％を割る前に数量を見直す</li>
        <li>証拠金基準額の翌週分を毎週確認する</li>
        <li>複数ストラテジーの同時損失を想定する</li>
        <li>入金期限と強制決済時刻を公式画面で確認する</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://www.fujitomi.co.jp/tfx/documents/click365_torihiki_guide.pdf" target="_blank" rel="noopener noreferrer">フジトミ証券「くりっく365取引ガイド」</a></li>
        <li><a href="https://www.fujitomi.co.jp/click365/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「くりっく365 よくある質問」</a></li>
        <li><a href="https://www.fujitomi.co.jp/click365/feature/fxmargin/" target="_blank" rel="noopener noreferrer">フジトミ証券「証拠金基準額」</a></li>
        <li><a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">フジトミ証券「推奨証拠金について」</a></li>
      </ul><p>制度は2026年9月7日に確認しました。発生時は取引画面の不足額と期限を優先してください。</p></section>

      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートを見る →</Link></p>
      <p><Link href="/articles/systre-select-365-recommended-margin">推奨証拠金と最大DDを見る →</Link></p>
      <section className="article-affiliate" aria-label="シストレセレクト365の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。リスク説明とは分けて掲載しています。</p></section>
    </article>
  );
}
