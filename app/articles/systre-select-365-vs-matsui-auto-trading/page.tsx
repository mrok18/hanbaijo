import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import ArticleStructuredData from '@/components/ArticleStructuredData';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/systre-select-365-vs-matsui-auto-trading' },
  title: 'シストレセレクト365とMATSUI FX自動売買を比較',
  description: '選択型とリピート型、1万通貨と1通貨、利用料、対象通貨、必要資金の考え方から、2つのFX自動売買を比較します。',
};

const COMPARISON = [
  { item: '自動売買の決め方', systre: '用意されたストラテジーを選ぶ', matsui: 'レンジ・注文値幅・益出し幅を自分で設定' },
  { item: '取引の仕組み', systre: '取引所FX「くりっく365」＋投資助言サービス', matsui: '松井証券の店頭FX・リピート注文' },
  { item: '自動売買の対象', systre: '米ドル/円など4通貨ペア', matsui: '取扱い全32通貨ペア' },
  { item: '最小取引単位', systre: '1枚＝1万通貨', matsui: '1通貨' },
  { item: '直接の利用費用', systre: '売買手数料0円・初回990円（税込）', matsui: '取引手数料・利用料0円' },
  { item: '資金管理の目安', systre: '推奨証拠金・最大DD・リスクメーター', matsui: '必要証拠金＋評価損に備える証拠金' },
] as const;

export default function Page() {
  return (
    <article>
      <ArticleStructuredData slug="systre-select-365-vs-matsui-auto-trading" publishedAt="2026-09-08" />
      <p className="page-kicker">AUTO FX / SERVICE COMPARISON</p>
      <h1>シストレセレクト365と<br />MATSUI FX自動売買を比較</h1>
      <p className="lede">最大の違いは、用意された売買戦略を選ぶか、自分で値幅とレンジを決めるかです。サービス名や過去成績だけでなく、取引単位、必要資金、直接費用、運用後に必要な管理を同じ軸で比較します。</p>

      <div className="callout"><strong>先に結論</strong><p>少額で設定を試し、自分でレンジを調整したい場合は1通貨からのMATSUI FXが比較しやすく、売買ロジックを自作せず既存ストラテジーの指標から選びたい場合はシストレセレクト365が候補になります。どちらも相場変動による損失とロスカットがあります。</p></div>

      <h2>主要条件を同じ表で比較</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>比較項目</th><th>シストレセレクト365</th><th>MATSUI FX自動売買</th></tr></thead>
          <tbody>{COMPARISON.map((row) => (
            <tr key={row.item}><td className="ex-name">{row.item}</td><td>{row.systre}</td><td>{row.matsui}</td></tr>
          ))}</tbody>
        </table>
      </div><p className="panel-note">2026年9月8日に両社公式情報を確認。スプレッド、スワップ、証拠金額など変動する条件は申込・発注時に再確認してください。</p></div>

      <h2>選択型とリピート型の違い</h2>
      <div className="fx-metric-grid">
        <article><b>SELECT</b><h3>シストレセレクト365</h3><p>ランキングからストラテジーを選び、数量を設定して稼働します。過去1カ月・3カ月・6カ月・1年の成績や最大ドローダウンを比較できます。</p></article>
        <article><b>REPEAT</b><h3>MATSUI FX</h3><p>売買方向、注文レンジ、注文値幅、益出し幅などを設定し、その範囲で新規・決済注文を繰り返します。設定内容の責任は利用者にあります。</p></article>
      </div>
      <p>前者は「誰のロジックを選ぶか」、後者は「どの価格帯へどんな間隔で注文を並べるか」が中心です。相場環境が変われば、どちらも停止や入替え、設定見直しが必要になります。</p>

      <h2>必要資金は取引単位で大きく変わる</h2>
      <p>シストレセレクト365で対象となる米ドル/円、ユーロ/円、英ポンド/円、豪ドル/円は、くりっく365の通常銘柄で1枚1万通貨です。一方、MATSUI FXは全通貨ペアを1通貨単位から取引できます。</p>
      <div className="formula-box">
        <code>シストレセレクト365：推奨証拠金 ＝ 現在の証拠金基準額 ＋ 過去1年間の最大ドローダウン</code>
        <code>MATSUI FX：必要資金 ＝ 全注文の必要証拠金 ＋ 評価損に備える証拠金</code>
        <small>どちらの計算も損失上限を保証しません。急変、スプレッド拡大、スワップ支払いも余力を減らします。</small>
      </div>
      <p>小さい金額で画面と損益の動きを確かめたい場合、数量を1通貨ずつ調整できるMATSUI FXのほうが開始数量を抑えやすい設計です。シストレセレクト365は1枚の数量が大きいため、推奨証拠金と追加余力を先に確認します。</p>

      <h2>手数料0円でも総コストは0円ではない</h2>
      <p>両サービスとも、対象となる自動売買取引の売買手数料は0円と案内されています。シストレセレクト365には初回のみ税込990円の助言報酬があり、MATSUI FXは自動売買の取引手数料・利用料が無料です。</p>
      <p>ただし、両方とも売値と買値の差であるスプレッドがあり、建玉を持ち越すとスワップポイントを受け取るか支払います。自動売買は約定回数や保有期間が増えやすいため、直接手数料だけでなく実際の口座損益で確認します。</p>

      <h2>向いている考え方を整理</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table">
          <thead><tr><th>重視すること</th><th>比較しやすい候補</th><th>理由</th></tr></thead>
          <tbody>
            <tr><td className="ex-name">最小数量を抑えたい</td><td>MATSUI FX</td><td>1通貨から数量を調整できる</td></tr>
            <tr><td className="ex-name">自分でレンジを決めたい</td><td>MATSUI FX</td><td>注文レンジ・値幅・益出し幅を設定する方式</td></tr>
            <tr><td className="ex-name">売買ロジックを自作したくない</td><td>シストレセレクト365</td><td>用意されたストラテジーから選択する方式</td></tr>
            <tr><td className="ex-name">過去DDを選択指標にしたい</td><td>シストレセレクト365</td><td>最大DDと推奨証拠金を表示する</td></tr>
            <tr><td className="ex-name">多くの通貨ペアから選びたい</td><td>MATSUI FX</td><td>自動売買は取扱い全通貨ペアが対象</td></tr>
          </tbody>
        </table>
      </div></div>

      <h2>申込前の共通チェック</h2>
      <ul>
        <li>全注文が約定した場合の合計数量と必要証拠金</li>
        <li>過去最大損失を超える場合にも耐えられる追加余力</li>
        <li>スプレッド、支払スワップ、約定差を含む実際の総コスト</li>
        <li>運用停止時に未決済建玉と注文がどう扱われるか</li>
        <li>過去成績や試算値と、自分の約定結果が異なる可能性</li>
      </ul>

      <section className="article-affiliate" aria-label="FX自動売買サービスの広告">
        <h2>公式条件を確認する</h2>
        <div className="provider-directory">
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} />
          <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        </div>
        <p className="affiliate-disclosure">上記はA8.netの提携広告です。リンク経由で申込みが成立すると当サイトが報酬を受け取る場合があります。比較表の項目、記載順、リスク説明は広告報酬と分けています。</p>
      </section>

      <section className="article-sources" aria-labelledby="sources">
        <h2 id="sources">参照した公式資料</h2>
        <ul>
          <li><a href="https://www.fujitomi.co.jp/systra/feature/entry/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365とは」</a></li>
          <li><a href="https://www.fujitomi.co.jp/systra/feature/howto-a/" target="_blank" rel="noopener noreferrer">フジトミ証券「推奨証拠金について」</a></li>
          <li><a href="https://www.fujitomi.co.jp/click365/feature/currency/" target="_blank" rel="noopener noreferrer">フジトミ証券「くりっく365 取扱通貨」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/auto-trading/about/" target="_blank" rel="noopener noreferrer">松井証券「自動売買とは？」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/auto-trading/deposit/" target="_blank" rel="noopener noreferrer">松井証券「自動売買に必要な資金」</a></li>
          <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX取引ルール」</a></li>
        </ul>
        <p>取引条件は2026年9月8日に確認しました。最新のスプレッド、証拠金、対象通貨、契約書面は各社公式サイトを優先してください。</p>
      </section>

      <p><Link href="/articles/systre-select-365-account-opening-flow">シストレセレクト365の開始手順を見る →</Link></p>
      <p><Link href="/articles/matsui-fx-auto-trading-cost">MATSUI FX自動売買の必要資金を見る →</Link></p>
      <p><Link href="/fx">FXサービス一覧へ戻る →</Link></p>
    </article>
  );
}
