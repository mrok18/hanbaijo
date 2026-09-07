import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: '松井証券のFX専用口座と総合口座の違い｜株・NISAも使う場合',
  description: '松井証券のFX専用口座と総合口座の違いを、取引できる商品、同時申込、後から株式取引を始める場合の手続きに分けて解説します。',
};

const ACCOUNT_TYPES = [
  {
    name: 'FX専用口座',
    products: 'MATSUI FX',
    application: 'FX専用の申込画面から開設',
    later: '日本株などを取引する場合は証券口座へ切替',
    fit: '当面はFXだけを利用する人',
  },
  {
    name: '松井証券口座（総合口座）',
    products: '日本株・米国株・投資信託など。FX等は各口座を追加',
    application: '対象の関連口座を同時申込できる',
    later: 'FX、先物・オプション、NISA等を申込可能',
    fit: '複数の金融商品を一つの証券会社で管理したい人',
  },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">MATSUI ACCOUNT GUIDE</p>
      <h1>松井証券のFX専用口座と総合口座は、何が違う？</h1>
      <p className="lede">松井証券の口座開設では、総合口座とFX専用口座を選べます。FXだけを使うのか、今後は株式・投資信託・先物なども扱うのかで、最初の入口が変わります。</p>

      <h2>取引できる商品の範囲が違う</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table matsui-account-table">
          <thead><tr><th>口座</th><th>主な対象</th><th>開設時</th><th>後から商品を増やす場合</th><th>考え方</th></tr></thead>
          <tbody>{ACCOUNT_TYPES.map((account) => (
            <tr key={account.name}>
              <td className="ex-name">{account.name}</td>
              <td>{account.products}</td>
              <td>{account.application}</td>
              <td>{account.later}</td>
              <td><small>{account.fit}</small></td>
            </tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">開設できる関連口座や同時申込の対象は、年齢、居住地、投資経験、申込方法などの基準で異なります。</p></div>

      <h2>FX専用口座は、あとから株を始めると切替が必要</h2>
      <p>松井証券は、FX専用口座の開設後に日本株など他の商品を取引する場合、証券口座への切替が必要と案内しています。FXだけを試したい段階では入口が分かりやすい一方、複数資産へ広げる予定がある場合は手続きが増える点を確認します。</p>

      <h2>総合口座では関連口座を同時に申し込める</h2>
      <p>オンラインの総合口座申込では、条件を満たせばNISA、信用取引、先物・オプション、FXなどの関連口座を同時に申し込めます。ただし、総合口座を開けば全商品が無条件で取引可能になるわけではなく、商品ごとの申込・審査があります。</p>

      <div className="formula-box"><code>FXだけを利用 → FX専用口座も選択肢<br />株・NISA・先物へ拡張 → 総合口座から各口座を申込</code><small>どちらが有利かではなく、利用予定の商品で選ぶ</small></div>

      <h2>料金は商品ごとに分けて確認する</h2>
      <p>同じ松井証券でも、FXはスプレッドとスワップ、日本株はボックスレート、米国株は売買手数料と為替コスト、先物は商品別手数料というように費用構造が異なります。口座をまとめることと、取引コストが共通になることは別です。</p>
      <ul>
        <li>FX：公称スプレッド、数量条件、スワップ、ロスカット</li>
        <li>日本株：1日の約定代金合計、年齢条件、現物・信用の区分</li>
        <li>米国株：売買手数料、為替コスト、現地費用</li>
        <li>先物：銘柄ごとの手数料、取引単位、必要証拠金</li>
      </ul>

      <div className="callout"><strong>広告提携と比較評価は分離します</strong><p>金融コストウォッチは松井証券の広告プログラムと提携しています。提携状況や報酬額を公称値・試算・掲載順位へ反映しません。</p></div>

      <section className="article-affiliate" aria-label="松井証券の広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。口座の申込条件と取引リスクは公式サイトで確認してください。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.matsui.co.jp/service/account/" target="_blank" rel="noopener noreferrer">松井証券「口座・管理」</a></li>
          <li><a href="https://www.matsui.co.jp/apply/fx-account/" target="_blank" rel="noopener noreferrer">松井証券「FX専用口座開設完了までの流れ」</a></li>
          <li><a href="https://support.matsui.co.jp/faq/show/48197?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「口座開設方法」</a></li>
        </ul>
        <p>内容は2026年9月7日に確認しました。最新の申込条件は公式画面を確認してください。</p>
      </section>

      <p><Link href="/fx/matsui">MATSUI FXのコストシートを見る →</Link></p>
      <p><Link href="/stocks/matsui">松井証券の国内株手数料を見る →</Link></p>
    </article>
  );
}
