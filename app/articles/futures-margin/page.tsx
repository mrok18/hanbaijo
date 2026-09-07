import Link from 'next/link';

export const metadata = {
  title: '先物の証拠金と取引金額は何が違う？',
  description: '先物の証拠金を購入代金と混同しないために、取引金額、損益、VaR方式、証券会社の設定額を整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FUTURES MARGIN</p>
      <h1>先物の証拠金と<br />取引金額は何が違う？</h1>
      <p className="lede">
        証拠金は先物を「その金額で買う」代金ではなく、取引の履行を担保するために差し入れる資金です。
        損益は証拠金ではなく、先物価格と取引単位に応じて動きます。
      </p>

      <h2>取引金額は価格 × 取引単位</h2>
      <div className="formula-box">
        <code>想定取引金額 ＝ 先物価格 × 取引単位 × 枚数</code>
        <small>必要証拠金とは別の、価格変動の影響を受ける名目上の金額です。</small>
      </div>
      <p>
        日経225が40,000円の仮定なら、マイクロ1枚の想定取引金額は40万円、mini1枚は400万円、
        日経225先物1枚は4,000万円です。
      </p>

      <h2>証拠金は日々変わり得る</h2>
      <p>
        日本証券クリアリング機構は、先物・オプションの証拠金をVaR方式で計算しています。
        過去の市場データなどから複数のシナリオを作り、ポートフォリオ単位の損失額をもとに必要額を算出する仕組みです。
        相場環境や建玉の組合せが変われば、必要額も変わり得ます。
      </p>

      <h2>証券会社の必要額は同じとは限らない</h2>
      <p>
        取引所のルールでは、証拠金所要額はVaR方式で計算した額以上です。証券会社はそれ以上の金額を顧客に求めることができ、
        上乗せ額や不足時の対応は会社によって異なります。
      </p>

      <h2>取引前に確認する項目</h2>
      <ul>
        <li>1枚の取引単位と1ティックの損益</li>
        <li>当日の必要証拠金と証券会社の上乗せ</li>
        <li>不足が生じた場合の追加差入れ・強制決済ルール</li>
        <li>取引最終日、SQ日、限月の乗り換え</li>
      </ul>

      <div className="callout">
        <strong>損失が証拠金を上回る可能性があります</strong>
        <p>急変時には想定した価格で決済できず、預けた証拠金以上の損失が生じる場合があります。最新の契約締結前交付書面を確認してください。</p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.jpx.co.jp/derivatives/rules/margin/01.html" target="_blank" rel="noopener noreferrer">日本取引所グループ「顧客が差し入れる証拠金」</a></li>
          <li><a href="https://www.jpx.co.jp/jscc/seisan/sakimono/shokokin_seido/VaR.html" target="_blank" rel="noopener noreferrer">日本証券クリアリング機構「VaR方式とは」</a></li>
        </ul>
        <p>制度は2026年9月7日に確認。必要証拠金は固定値ではありません。</p>
      </section>

      <p><Link href="/articles/futures-tick-value">1ティックの計算も読む →</Link></p>
      <p><Link href="/futures">先物コスト比較へ戻る →</Link></p>
    </article>
  );
}
