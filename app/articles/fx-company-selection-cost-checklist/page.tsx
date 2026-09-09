import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FX会社はスプレッドだけで選ばない｜口座比較7項目',
  description: 'FX会社を比較するときに、スプレッドの適用時間、数量、約定、スワップ、最低取引単位、ロスカット、入出金を確認する順番を整理します。',
};

const checks = [
  ['1. 最小スプレッド', '銭・pipsを、自分の取引数量と回数で円へ換算します。'],
  ['2. 適用時間と数量', '原則固定の対象時間、1注文あたりの数量上限、例外条件を確認します。'],
  ['3. 約定条件', '成行・ストリーミング注文の違い、許容スリッページ、注文不成立の条件を読みます。'],
  ['4. スワップ', '受取額だけでなく支払額、付与日数、未決済での振替可否を比較します。'],
  ['5. 最低取引単位', '1通貨・100通貨・1,000通貨など、練習に必要な最小資金を確認します。'],
  ['6. ロスカット', '維持率・使用率、追証判定、強制決済の時刻と対象を分けます。'],
  ['7. 入出金と操作性', '最低入金額、手数料、反映時間、利用端末、注文画面を確認します。'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-company-selection-cost-checklist',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX COMPANY CHECKLIST</p>
      <h1>FX会社はスプレッドだけで選ばない<br />口座比較7項目</h1>
      <p className="lede">
        「米ドル/円0.2銭」だけでは、実際の負担も使いやすさも決まりません。
        数字を円へ直し、適用条件、約定、保有コスト、リスク管理まで同じ順番で確認します。
      </p>

      <div className="callout">
        <strong>最初に年間差を計算する</strong>
        <p>2社のスプレッドを自分の数量・取引回数で比較すると、その差を優先すべきか判断しやすくなります。</p>
        <Link href="/tools/fx-spread-annual-cost-calculator">FXスプレッド年間コスト比較計算機 →</Link>
      </div>

      <h2>確認する7項目</h2>
      <div className="explain-grid">
        {checks.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
      </div>

      <h2>まず「差額が年間いくらか」を出す</h2>
      <p>
        0.1銭は0.001円です。1万通貨なら1往復10円、1日5回・月20日・12カ月なら年間1万2,000円の差になります。
        1,000通貨を月数回だけ取引する場合は差が小さく、最低取引単位や操作性を優先する余地があります。
      </p>
      <p><Link href="/articles/fx-spread-difference-annual-cost">0.1銭差の数量・回数別早見表を見る →</Link></p>

      <h2>「原則固定」は一日中同じという意味ではない</h2>
      <p>
        公称スプレッドには適用時間、対象数量、キャンペーン期間などの条件が付く場合があります。
        相場急変や流動性低下時には、表示幅が広がる可能性もあります。金融庁も、こうした場面では
        スプレッドが広くなり、意図した取引が難しくなるおそれを案内しています。
      </p>
      <p><Link href="/articles/fx-spread-time">スプレッドが広がりやすい時間帯を確認 →</Link></p>

      <h2>短期売買と長期保有では優先順位が変わる</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>取引スタイル</th><th>優先して確認</th><th>次に確認</th></tr></thead>
          <tbody>
            <tr><td>少額練習</td><td>最低取引単位・必要資金</td><td>操作性・入出金</td></tr>
            <tr><td>短期売買</td><td>時間帯別スプレッド・約定</td><td>注文機能・取引上限</td></tr>
            <tr><td>スイング</td><td>スワップ・支払コスト</td><td>ロスカット・窓開けリスク</td></tr>
            <tr><td>自動売買</td><td>売買ロジック・必要資金</td><td>停止条件・VPS費用</td></tr>
          </tbody>
        </table>
      </div>

      <h2>公式資料で条件を確定する</h2>
      <p>
        比較記事は候補を絞るために使い、申込み前には公式の取引要綱、契約締結前交付書面、リスク説明を確認します。
        当サイトは、公表値・試算値・実測値を混ぜず、広告報酬を比較順位へ反映しません。
      </p>
      <ul>
        <li><Link href="/fx/usdjpy-spread-comparison">米ドル円スプレッド10社比較</Link></li>
        <li><Link href="/fx/minimum-trade-unit-comparison">最低取引単位比較</Link></li>
        <li><Link href="/fx/losscut-comparison">ロスカット基準比較</Link></li>
        <li><Link href="/fx/swap-calendar-comparison">スワップ表示ルール比較</Link></li>
      </ul>

      <section className="article-affiliate" aria-label="提携中のFXサービス">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。広告の有無や報酬額は比較方法・順位に影響しません。</p>
      </section>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" rel="noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
        <li><a href="https://faq.jfx.co.jp/faq/detail?category=36&amp;id=481&amp;site=FX557CTV" rel="noreferrer">JFX「スプレッドの計算方法を教えてください」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。最新条件は各社の公式情報で確認してください。</small></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </article>
  );
}
