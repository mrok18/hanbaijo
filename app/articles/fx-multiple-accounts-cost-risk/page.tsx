import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FX口座を複数持つメリット・デメリット｜資金と損益の管理方法',
  description: 'FX口座を2社以上使い分けるメリットと、証拠金の分散、ロスカット、損益集計、休眠口座、管理負担などの注意点を整理します。',
};

const merits = [
  ['取引条件を使い分けられる', '少額練習、短期売買、スワップ、自動売買など、目的に合う口座を分けられます。'],
  ['システム障害へ備えられる', '一方へログインできない場合に、別口座の状況を確認できる選択肢が残ります。'],
  ['公称値と使い勝手を比較できる', '広告の数字だけでなく、注文画面、約定、入出金を自分の利用条件で確認できます。'],
] as const;

const risks = [
  ['証拠金が分散する', 'A社の余剰資金でB社の証拠金不足を直接補うことはできません。資金移動には時間がかかる場合があります。'],
  ['全体の建玉を見失いやすい', '同じ通貨ペアを別口座で反対売買すると、実質的なリスクとコストが把握しにくくなります。'],
  ['損益集計が増える', '年間損益や必要経費を口座ごとに確認し、同じ課税区分について全体を集計する必要があります。'],
  ['管理対象が増える', 'ログイン情報、登録住所、出金先、交付書面、口座の利用状況を各社ごとに管理します。'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-multiple-accounts-cost-risk',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX MULTIPLE ACCOUNTS</p>
      <h1>FX口座を複数持つメリット・デメリット</h1>
      <p className="lede">
        複数口座は、用途を分ければ比較と障害対策に役立ちます。一方で証拠金、建玉、損益を会社ごとに管理する必要があり、
        口座数を増やすだけではコスト削減になりません。2社目を開く前の判断基準を整理します。
      </p>

      <div className="callout">
        <strong>先に確認：スプレッド差は年間いくらか</strong>
        <p>2社の差が自分の取引頻度では小さい場合、口座管理の負担が上回ることもあります。</p>
        <Link href="/tools/fx-spread-annual-cost-calculator">2社の年間コスト差を計算する →</Link>
      </div>

      <h2>複数口座を持つ3つのメリット</h2>
      <div className="explain-grid">
        {merits.map(([title, text], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}
      </div>

      <h2>先に知りたい4つのデメリット</h2>
      <div className="explain-grid">
        {risks.map(([title, text], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}
      </div>

      <h2>証拠金は会社をまたいで共有できない</h2>
      <p>
        FX口座は会社ごとに独立しています。たとえばA社に余力があっても、B社で証拠金維持率が低下した場合、
        A社の残高が自動的にB社のロスカットを防ぐことはありません。出金・振込・入金の完了までに価格が動く可能性もあります。
      </p>
      <p>
        口座ごとに「必要証拠金」「評価損に耐える余力」「すぐ使える待機資金」を分け、全口座合計の建玉も一覧化します。
        金融庁は、FXでは証拠金以上の損失が生じるおそれがあること、業者選定では登録や信用力、開示されたリスク情報を
        確認する必要があると案内しています。
      </p>
      <p><Link href="/fx/losscut-comparison">FX会社のロスカット基準を比較する →</Link></p>

      <h2>2口座の役割を重ねない</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>役割</th><th>確認する条件</th><th>管理する数字</th></tr></thead>
          <tbody>
            <tr><td>少額練習</td><td>最低取引単位・注文画面</td><td>1回の許容損失</td></tr>
            <tr><td>短期売買</td><td>時間帯別スプレッド・約定</td><td>月間往復回数・総コスト</td></tr>
            <tr><td>スワップ運用</td><td>受取・支払・付与日数</td><td>為替差損を含む総損益</td></tr>
            <tr><td>自動売買</td><td>停止条件・対象通貨・VPS</td><td>最大建玉・必要資金</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        同じ目的の口座を増やすより、「練習用」と「短期売買用」のように役割を明確にすると、比較する数字と資金上限を決めやすくなります。
      </p>

      <h2>年間損益は口座横断で記録する</h2>
      <p>
        国税庁は、FXの差金等決済による損益を「先物取引に係る雑所得等」として扱い、同じ区分内で損益通算できると説明しています。
        複数口座を利用する場合は、各社の年間取引報告書等を集め、口座単位ではなく対象取引全体で確認します。
        個別事情で申告要否や必要書類が変わるため、最終判断は税務署または税理士へ確認してください。
      </p>

      <h2>2社目を開く前のチェックリスト</h2>
      <ol>
        <li>現在の口座では解決できない用途が具体的にあるか</li>
        <li>年間コスト差が管理負担に見合うか</li>
        <li>各口座へ置く資金上限とロスカット余力を決めたか</li>
        <li>全口座の建玉と年間損益をまとめる方法があるか</li>
        <li>金融商品取引業者としての登録とリスク情報を確認したか</li>
      </ol>
      <p><Link href="/articles/fx-company-selection-cost-checklist">FX会社を比較する7項目を見る →</Link></p>

      <section className="article-affiliate" aria-label="提携中のFXサービス">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。広告の有無・報酬額は比較方法や掲載順位に影響しません。</p>
      </section>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.fsa.go.jp/ordinary/iwagai/" rel="noreferrer">金融庁「いわゆる外国為替証拠金取引について」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1521.htm" rel="noreferrer">国税庁「外国為替証拠金取引（FX）の課税関係」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。本記事は一般的な情報であり、投資・税務上の個別助言ではありません。</small></p>
      <p><Link href="/fx">FXコスト比較へ戻る →</Link></p>
    </article>
  );
}
