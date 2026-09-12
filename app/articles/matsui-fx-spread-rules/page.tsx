import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-spread-rules' },
  title: 'MATSUI FXのスプレッドは0.1銭？時間・数量・注文条件',
  description: 'MATSUI FXの縮小スプレッドと通常スプレッドについて、コアタイム、数量上限、注文種類、原則固定の例外を公式情報から整理します。',
};

export default function Page() {
  return (
    <article>
      <p className="page-kicker">MATSUI FX / SPREAD RULES</p>
      <h1>MATSUI FXのスプレッドは0.1銭？<br />時間・数量・注文条件</h1>
      <p className="lede">米ドル/円0.1銭は、すべての注文・時間・数量に一律適用される数字ではありません。コアタイム、数量上限、成行注文という条件を満たす「縮小スプレッド」と、通常スプレッドを分けて確認します。</p>

      <div className="callout"><strong>広告の最小値だけで総コストを計算しない</strong><p>まず注文数量と注文方法を確認し、次に取引する時間帯を当てはめます。市場急変や流動性低下時には原則固定の対象時間内でも広がる場合があります。</p></div>

      <h2>米ドル/円の4つの表示条件</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>区分</th><th className="num">スプレッド</th><th className="num">数量上限</th><th>対象注文</th><th>時間</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">縮小スプレッド</td><td className="num"><strong>0.1銭</strong></td><td className="num">1,000通貨</td><td>上限以内の成行（ストリーミング）・成行決済</td><td>条件適用中</td></tr>
            <tr><td className="ex-name">通常スプレッド</td><td className="num"><strong>0.2銭</strong></td><td className="num">—</td><td>縮小条件以外</td><td>9:00～翌3:00</td></tr>
            <tr><td className="ex-name">コアタイム外</td><td className="num"><strong>0.2～6.0銭</strong></td><td className="num">—</td><td>通常条件</td><td>翌3:00～翌9:00</td></tr>
          </tbody>
        </table>
      </div><p className="panel-note">2026年9月7日に公式一覧で確認した米ドル/円の公称値。原則固定には例外があり、将来変更される場合があります。</p></div>

      <h2>0.1銭を円換算するといくらか</h2>
      <div className="formula-box">
        <code>スプレッド相当額 ＝ スプレッド（円）× 取引数量</code>
        <code>0.1銭 × 1,000通貨 ＝ 0.001円 × 1,000 ＝ 1円</code>
        <code>0.2銭 × 1,000通貨 ＝ 0.002円 × 1,000 ＝ 2円</code>
      </div>
      <p>1通貨なら0.1銭は0.001円ですが、実際の約定では価格差や端数処理もあります。数量を増やすとスプレッド相当額も比例して増えます。</p>

      <h2>縮小スプレッドは注文方法にも条件がある</h2>
      <p>縮小スプレッドの対象は、通貨ペアごとの数量上限以内で発注する成行（ストリーミング）注文と成行決済です。指値・逆指値など左記以外の注文には通常スプレッドが適用されます。</p>
      <p>MATSUI FXの自動売買は注文が指値・逆指値で発注されるため、注文数量別の縮小スプレッドの対象外です。ただし、自動売買の建玉を手動で成行決済する場合は別途条件を確認します。</p>

      <h2>コアタイムは9時から翌3時</h2>
      <div className="fx-metric-grid">
        <article><b>09:00–03:00</b><h3>コアタイム</h3><p>通常スプレッドが原則固定となる時間帯です。縮小条件を満たす注文はさらに小さい公称値が設定されています。</p></article>
        <article><b>03:00–09:00</b><h3>コアタイム外</h3><p>通常スプレッドに幅があります。早朝の取引は上限側も含めてコストを見積もります。</p></article>
        <article><b>EVENT</b><h3>原則固定の例外</h3><p>相場急変、流動性低下、重要指標、休場前後などでは提示値が広がる場合があります。</p></article>
        <article><b>ACTUAL</b><h3>提示実績</h3><p>公式サイトが公開する提示率と乖離要因を確認し、公称値と実績を区別します。</p></article>
      </div>

      <h2>取引前の確認順</h2>
      <ol>
        <li>通貨ペアを選び、縮小スプレッドの数量上限を確認する</li>
        <li>成行・指値・逆指値・自動売買のどれで注文するか確認する</li>
        <li>発注時刻がコアタイム内か確認する</li>
        <li>取引画面のBid・Askから実際の差を確認する</li>
        <li>取引数量を掛け、円での負担に直す</li>
      </ol>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.matsui.co.jp/fx/spread/" target="_blank" rel="noopener noreferrer">松井証券「FX スプレッド一覧」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX 取引ルール」</a></li>
          <li><a href="https://www.matsui.co.jp/news/2026/detail_0401_01.html" target="_blank" rel="noopener noreferrer">松井証券「通常スプレッド引き下げとコアタイム制導入」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/list/pdf/spread.pdf" target="_blank" rel="noopener noreferrer">松井証券「提示スプレッド等に関する実績情報」</a></li>
        </ul>
        <p>条件は2026年9月7日に確認しました。取引時は公式一覧と取引画面の提示値を優先してください。</p>
      </section>

      <p><Link href="/tools/matsui-fx-spread-calculator">通貨数・取引回数からスプレッドコストを計算する →</Link></p>
      <p><Link href="/fx/matsui">MATSUI FXのコストシートを見る →</Link></p>
      <p><Link href="/articles/matsui-fx-one-currency">MATSUI FXの1通貨取引を計算する →</Link></p>
      <p><Link href="/articles/fx-spread-cost">FXスプレッドを円換算する →</Link></p>

      <section className="article-affiliate" aria-label="松井証券の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。条件・計算の説明とは分けて掲載しています。</p>
      </section>
    </article>
  );
}
