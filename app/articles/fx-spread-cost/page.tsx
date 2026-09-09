import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXのスプレッドを円に直す方法',
  description: 'FXのスプレッドで使われる銭・pipsを、取引数量ごとの円額に換算する方法を具体例で解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX BASICS</p>
      <h1>FXのスプレッドを円に直す方法</h1>
      <p className="lede">
        「米ドル/円 0.2銭」と書かれていても、何円の負担かは取引数量で変わります。
        比較の前に、銭・pipsを円へ換算できるようにしておきましょう。
      </p>

      <h2>円絡みの通貨ペアは、銭から円へ戻す</h2>
      <p>1銭は0.01円です。したがって0.2銭は0.002円、0.5銭は0.005円になります。</p>
      <div className="formula-box">
        <code>スプレッドコスト ＝ スプレッド（円）× 取引数量</code>
        <small>表示値どおりの価格で約定した場合の単純計算</small>
      </div>

      <h2>0.2銭の計算例</h2>
      <ul>
        <li>1,000通貨：0.002円 × 1,000 ＝ 2円</li>
        <li>1万通貨：0.002円 × 10,000 ＝ 20円</li>
        <li>10万通貨：0.002円 × 100,000 ＝ 200円</li>
        <li>100万通貨：0.002円 × 1,000,000 ＝ 2,000円</li>
      </ul>

      <h2>pips表記は会社ごとの定義を確認する</h2>
      <p>
        FX会社によって、円絡み通貨ペアの1pipを0.01円とする場合と0.001円とする場合があります。
        「1pip」という文字だけで比較せず、公式ページに書かれた最小単位を確認してください。
      </p>

      <h2>広告どおりのスプレッドが常に続くとは限らない</h2>
      <p>
        スプレッドは相場急変時、重要指標の発表前後、流動性が低い時間帯などに広がることがあります。
        また、注文価格と約定価格がずれるスリッページもあるため、狭い公称値だけでは実際のコストを判断できません。
      </p>

      <div className="callout">
        <strong>金融コストウォッチの方針</strong>
        <p>
          公式資料の数字は「公称値」、継続取得した数字は「実測値」、条件を置いた計算は「試算値」として分けます。
          FXの実測値は、データ提供元から保存・加工・公開の許諾を確認した後に掲載します。
        </p>
      </div>

      <section className="article-affiliate" aria-label="FXTFの広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。計算方法や比較順位とは分けて掲載しています。</p>
      </section>

      <p><Link href="/tools/fx-pip-value-calculator">1pipsの損益とスプレッド相当額を計算する →</Link></p>
      <p><Link href="/articles/fx-spread-monthly-cost">取引回数別の月間スプレッドコストを見る →</Link></p>
      <p><Link href="/tools/cost-calculator">取引コスト計算機で試す →</Link></p>
      <p><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッド10社比較を見る →</Link></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </article>
  );
}
