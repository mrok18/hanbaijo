import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FXの必要経費にできるものは？PC・通信費・VPS・書籍を整理',
  description: 'FXの利益計算で必要経費になり得るPC、通信費、VPS、書籍、セミナー、情報サービスと、家事按分、減価償却、領収書の保存を整理します。',
};

const expenseRows = [
  ['取引手数料', '関連性を説明しやすい', '年間損益へ反映済みか確認'],
  ['VPS・取引ツール', 'FX取引専用なら説明しやすい', '契約期間・利用目的を保存'],
  ['相場情報サービス', '取引判断に直接使う範囲', '購読内容と利用記録を保存'],
  ['書籍・セミナー', 'FX取引との直接的な関連を確認', '一般教養や他目的分を分ける'],
  ['通信費', '業務使用分を区分できる場合', '私用分を合理的に按分'],
  ['PC・モニター', '取引使用分・取得価額を確認', '私用按分と減価償却に注意'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-tax-deductible-expenses',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX TAX / EXPENSES</p>
      <h1>FXの必要経費にできるものは？<br />PC・通信費・VPS・書籍を整理</h1>
      <p className="lede">
        「FXに使ったから全額経費」ではありません。収入を得るために直接必要だったか、私用分と明確に区分できるか、
        金額と利用目的を資料で説明できるかを支出ごとに確認します。
      </p>

      <div className="callout">
        <strong>判断の中心は、FX収入との直接的な関係</strong>
        <p>国税庁は、雑所得の必要経費について、収入を得るために直接要した費用や、その年の業務上の費用を対象としています。</p>
      </div>

      <h2>候補になり得る支出と確認点</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>支出</th><th>考え方</th><th>注意点</th></tr></thead>
          <tbody>{expenseRows.map(([name, rule, caution]) => <tr key={name}><td>{name}</td><td>{rule}</td><td>{caution}</td></tr>)}</tbody>
        </table>
      </div>
      <p><small>表は経費算入を保証するものではありません。利用実態、所得区分、金額、他用途の有無により判断が変わります。</small></p>

      <h2>PC・モニターは購入年に全額とは限らない</h2>
      <p>
        PCやモニターなど長期間使う資産は、取得価額や適用要件によって減価償却または一括償却の対象になる場合があります。
        国税庁は、取得価額10万円以上20万円未満の一定の減価償却資産について、3年間で均等に必要経費へ算入できる制度を案内しています。
        個人のFX取引だけに使用していない場合は、さらに私用分との区分が必要です。
      </p>

      <h2>通信費は使用割合の根拠を残す</h2>
      <p>
        自宅回線やスマートフォンを私用と共用している場合、全額をFXの必要経費とするのではなく、取引に直接必要だった部分を区分します。
        国税庁は家事関連費について、取引記録などに基づき業務上直接必要だった部分が明らかに区分できる場合、その区分額に限ると説明しています。
      </p>
      <p>接続時間、使用日数、専用回線の有無など、実態に合う基準を決め、毎年同じ考え方で説明できるようにします。</p>

      <h2>VPSは契約と稼働目的を記録する</h2>
      <p>
        MT4・MT5やEAを常時稼働させるVPSは、FX取引専用で利用している場合、取引との関係を示しやすい支出です。
        契約書、請求書、利用期間に加え、どの口座・ツールを稼働させていたかを記録します。私用サーバーや別事業にも使う場合は、
        FXに対応する範囲を区分する必要があります。
      </p>
      <p><Link href="/articles/fx-vps-total-cost">FX自動売買VPSのRDS込み総コストを見る →</Link></p>

      <h2>書籍・セミナー・情報料は内容を確認する</h2>
      <p>
        FXの取引判断や手法検証に直接使った書籍、セミナー、相場情報サービスは候補になり得ます。
        ただし、一般的な教養、資格取得、交際、娯楽など複数目的が混じる支出を、タイトルだけで全額経費と断定できません。
        領収書とともに、購入目的や取引への利用内容を簡潔に残します。
      </p>

      <h2>投資顧問料の国税庁事例</h2>
      <p>
        国税庁は、先物取引について助言を受けるため不可欠だった投資顧問会社の年会費と、助言を受けた先物取引の利益に連動する成功報酬を、
        その先物取引に係る業務上の費用として必要経費に算入できるとする質疑応答事例を公開しています。
        重要なのは支出の名称ではなく、対象取引との直接的な関係です。
      </p>

      <h2>年間報告書への反映済み費用を重ねない</h2>
      <p>
        取引手数料などがFX会社の年間損益へ既に反映されている場合、同じ費用を別の必要経費としてもう一度差し引くと二重計上になります。
        年間取引報告書の合計額と内訳を確認し、外部で支払った費用だけを別表に分けます。
      </p>
      <p><Link href="/articles/fx-annual-transaction-report-tax-return">年間取引報告書の確認・集計方法を見る →</Link></p>

      <h2>保存する記録</h2>
      <ol>
        <li>領収書、請求書、カード明細</li>
        <li>サービス名、契約期間、支払日</li>
        <li>FX取引に必要だった理由</li>
        <li>私用と共用する場合の按分基準と計算</li>
        <li>資産の場合は取得価額、使用開始日、償却計算</li>
      </ol>

      <section className="article-affiliate" aria-label="FX自動売買に関連する広告">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} />
        <p className="affiliate-disclosure">ABLENET VPSへの広告リンクです。申込み成立時に当サイトが報酬を受け取る場合があります。経費該当性は広告利用の有無ではなく、個別の利用実態で判断されます。</p>
      </section>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm" rel="noreferrer">国税庁 No.2210「必要経費の知識」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2100.htm" rel="noreferrer">国税庁 No.2100「減価償却のあらまし」</a></li>
        <li><a href="https://www.nta.go.jp/law/shitsugi/shotoku/04/28.htm" rel="noreferrer">国税庁「投資顧問会社に支払う年会費及び成功報酬」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。必要経費の可否は個別事情で変わります。不明点は所轄税務署または税理士へ確認してください。</small></p>
      <p><Link href="/articles/fx-profit-loss-offset-tax">FXの損益通算・損失繰越へ →</Link></p>
    </article>
  );
}
