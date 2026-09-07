import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXのスプレッドが広がりやすい時間帯は？',
  description: 'FXのスプレッドが早朝や経済指標発表時に広がる理由と、広告表示の適用時間・配信実績の確認方法を解説します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">FX COST</p>
      <h1>FXのスプレッドが広がりやすい時間帯は？</h1>
      <p className="lede">
        FX会社が示す狭いスプレッドには、対象時間や例外条件が付くことがあります。
        比較では最小値だけでなく「いつ、その幅で配信されたか」を確認します。
      </p>

      <h2>広がりやすいのは、売買が薄い時間と急変時</h2>
      <p>
        市場参加者が少ない時間帯は、売値と買値の差が広がりやすくなります。
        経済指標の発表や突発的なニュースで価格が急変するときも、提示価格の更新が速くなり、
        広告上のスプレッドから外れる時間が生じます。
      </p>

      <h2>公式の「提示率」で実態を確かめる</h2>
      <p>
        一例としてFXTFが2026年8月18日に公表した米ドル/円の実績では、
        2026年7月20日から8月14日の広告適用時間（9時〜翌3時）における広告表示スプレッド0.0銭の提示率は98.63％でした。
        適用時間外（3時〜9時）は広告表示が3.8銭で、同じ期間の提示率は98.01％です。
      </p>
      <div className="formula-box">
        <code>確認する数字 ＝ 広告表示幅 ＋ 対象時間 ＋ 提示率 ＋ 最大値・配信停止時間</code>
        <small>上記はFXTFの過去の公表実績であり、現在または将来の提示を保証するものではありません。</small>
      </div>

      <h2>比較するときの4つの確認点</h2>
      <ol>
        <li>広告表示の対象通貨ペアと適用時間</li>
        <li>経済指標発表時などの例外条件</li>
        <li>対象期間中に広告表示幅が提示された割合</li>
        <li>最大スプレッドと配信停止の有無</li>
      </ol>
      <p>
        同じ「0.2銭」でも、対象時間と提示率が違えば実際の負担は同じとは限りません。
        約定時にはスリッページも起こり得るため、スプレッドだけで総コストを判断しないことが大切です。
      </p>

      <div className="callout">
        <strong>公称値と実測値を分けて表示します</strong>
        <p>
          金融コストウォッチでは、会社が公表した値を「公称・公表値」、当サイトが継続取得した値を「実測値」として区別します。
          実測値は保存・加工・公開の許諾を確認してから掲載します。
        </p>
      </div>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://fxtrade.co.jp/pdf/fxtf_mt4st_spread.pdf" target="_blank" rel="noopener noreferrer">FXTF「広告表示スプレッドの提示実績」（2026年8月18日公表）</a></li>
        </ul>
        <p>内容・数値は2026年9月7日に確認しました。</p>
      </section>

      <p><Link href="/articles/fx-spread-cost">スプレッドを円に直す方法 →</Link></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>

      <section className="article-affiliate" aria-label="関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。記事の評価・計算方法とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
