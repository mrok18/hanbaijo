import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/fx-swap-spread-break-even-days' },
  title: 'FXスワップでスプレッドを回収するまで何日？損益分岐を計算',
  description: 'FXのスプレッド相当額を1日分の受取スワップで割り、初期コスト回収日数、1,000通貨と1万通貨の違い、為替変動の影響を計算します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FX SWAP / COST RECOVERY</p>
    <h1>FXスワップでスプレッドを<br />回収するまで何日？</h1>
    <p className="lede">受取スワップが積み上がっても、取引開始時にはスプレッド相当額の負担があります。何日分の付与で初期コストを上回るか、同じ通貨数へ換算して確認します。</p>

    <h2>結論：初期コストを1日分の受取額で割る</h2>
    <div className="formula-box">
      <code>損益分岐付与日数 ＝ 初期コスト ÷ 1日分の受取スワップ</code>
      <small>端数は切り上げます。スワップが支払いまたは0円なら、スワップだけで初期コストは回収できません。</small>
    </div>
    <p>初期コストには、スプレッド相当額と別途かかる取引手数料を含めます。スプレッドが0.2銭、1万通貨なら相当額は20円です。</p>

    <h2>1万通貨・1日5円なら4日分</h2>
    <p>以下は計算方法を説明する仮定例です。現在の特定FX会社や通貨ペアの提示条件ではありません。</p>
    <div className="fx-metric-grid">
      <article><b>SPREAD</b><h3>0.2銭</h3><p>入力する仮定値</p></article>
      <article><b>QUANTITY</b><h3>1万通貨</h3><p>スプレッド相当額20円</p></article>
      <article><b>DAILY SWAP</b><h3>5円</h3><p>1万通貨・1日分</p></article>
      <article><b>BREAK-EVEN</b><h3>4日分</h3><p>20円 ÷ 5円</p></article>
    </div>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>付与日数</th><th>累計スワップ</th><th>初期コスト差引後</th></tr></thead><tbody>
      <tr><td className="ex-name">1日分</td><td>5円</td><td>−15円</td></tr>
      <tr><td className="ex-name">3日分</td><td>15円</td><td>−5円</td></tr>
      <tr><td className="ex-name">4日分</td><td>20円</td><td>0円</td></tr>
      <tr><td className="ex-name">7日分</td><td>35円</td><td>＋15円</td></tr>
      <tr><td className="ex-name">30日分</td><td>150円</td><td>＋130円</td></tr>
    </tbody></table></div></div>
    <p><Link href="/tools/fx-swap-break-even-calculator">自分の数量・スプレッド・スワップで計算する →</Link></p>

    <h2>1,000通貨でも回収日数は同じ？</h2>
    <p>スプレッド相当額とスワップがどちらも通貨数に比例し、固定手数料や端数処理がなければ、取引数量を変えても回収日数は同じです。上の例を1,000通貨へ縮小すると、初期コスト2円、1日分0.5円で4日分になります。</p>
    <p>ただし、FX会社ごとの丸め処理、最低手数料、キャンペーン条件がある場合は比例しません。取引画面で実際に表示される数量別の受取額を使います。</p>

    <h2>保有日数ではなく「付与日数」で数える</h2>
    <p>土日や祝日の受渡し調整により、1日保有しても3日分がまとめて付く日や、付与がない日があります。回収日数の式で使うのはカレンダー上の経過日数ではなく、公式スワップカレンダーに表示される合計付与日数です。</p>
    <p>4日分を一度に受け取って損益分岐へ到達しても、4日間ずっと保有したという意味ではありません。日数表記を分けて記録します。</p>

    <h2>為替が1pips動く影響のほうが大きいこともある</h2>
    <p>円絡み通貨ペアを1万通貨保有すると、1pips（0.01円）の値動きは100円です。上の仮定では1日分の受取スワップが5円なので、不利な方向へ1pips動くだけで20日分の受取額に相当します。</p>
    <div className="formula-box">
      <code>値動き損益 ＝ 値幅（円）× 取引通貨数</code>
      <small>0.01円 × 10,000通貨 ＝ 100円。スワップ損益とは別に計算します。</small>
    </div>
    <div className="callout"><strong>回収日数が短くても低リスクとは限りません</strong><p>スワップ額とスプレッドは変動し、為替差損やロスカットが累計受取額を上回る可能性があります。損益分岐日数は初期コストだけに着目した指標です。</p></div>

    <h2>比較時に揃える5項目</h2>
    <ol>
      <li>買い・売りの方向</li>
      <li>同じ通貨ペアと取引数量</li>
      <li>スプレッドが適用される時間・数量条件</li>
      <li>1日分へ換算した受取または支払スワップ</li>
      <li>スワップカレンダーの付与日数</li>
    </ol>

    <p><Link href="/articles/fx-swap-calculation">数量別スワップの計算方法を見る →</Link></p>
    <p><Link href="/articles/fx-swap-three-days">3日分・4日分が付く理由を見る →</Link></p>
    <p><Link href="/fx/swap-calendar-comparison">FX会社のカレンダー表示を比較する →</Link></p>
    <p><Link href="/tools/fx-pip-value-calculator">1pipsの円損益を計算する →</Link></p>
    <section className="article-affiliate" aria-label="関連する広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} /><p className="affiliate-disclosure">FXTFへの広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。記事の計算例とは分けて表示しています。</p></section>
  </article>;
}
