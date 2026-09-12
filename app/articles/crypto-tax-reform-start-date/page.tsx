import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/articles/crypto-tax-reform-start-date' },
  title: '暗号資産の分離課税はいつから？税制改正の対象・20％・損失繰越',
  description: '暗号資産税制改正について、開始時期、特定暗号資産、20％の分離課税、3年間の損失繰越、デリバティブの扱いを公的資料から整理します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/crypto-tax-reform-start-date',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">CRYPTO TAX REFORM</p>
      <h1>暗号資産の分離課税はいつから？<br />対象・20％・損失繰越を整理</h1>
      <p className="lede">
        令和8年度税制改正大綱には、一定の暗号資産取引を20％の分離課税とし、損失を3年間繰り越せるようにする方針が盛り込まれました。
        ただし、すべての暗号資産や2026年中の取引へ直ちに適用される制度ではありません。
      </p>

      <div className="callout">
        <strong>開始日は「改正金商法の施行日」から決まる</strong>
        <p>現物の新制度は、改正金融商品取引法の施行日が属する年の翌年1月1日以後の対象取引へ適用する方針です。施行日を確認せず「2027年から」と断定できません。</p>
      </div>

      <h2>2026年9月9日時点の進捗</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>時点</th><th>内容</th><th>確認する意味</th></tr></thead>
          <tbody>
            <tr><td>2025年12月</td><td>令和8年度税制改正大綱を閣議決定</td><td>20％分離課税・3年繰越等の方針</td></tr>
            <tr><td>2026年4月10日</td><td>暗号資産制度を含む改正金商法等を国会提出</td><td>税制の前提となる制度整備</td></tr>
            <tr><td>2026年7月15日</td><td>改正金商法等が成立</td><td>今後は施行日・関連規則を確認</td></tr>
            <tr><td>施行年の翌年1月1日</td><td>対象となる現物取引の適用開始日</td><td>実際の課税年を確定する基準</td></tr>
          </tbody>
        </table>
      </div>

      <h2>現行制度と改正方針の違い</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>項目</th><th>現行の一般的な扱い</th><th>改正方針</th></tr></thead>
          <tbody>
            <tr><td>対象所得</td><td>原則として雑所得・総合課税</td><td>特定暗号資産の対象取引を分離課税</td></tr>
            <tr><td>税率</td><td>他の所得と合算して計算</td><td>所得税15％・個人住民税5％</td></tr>
            <tr><td>損失繰越</td><td>原則として対象外</td><td>一定要件で翌年以後3年</td></tr>
            <tr><td>デリバティブ</td><td>先物取引の課税特例の対象外</td><td>特定暗号資産デリバティブを対象へ追加</td></tr>
          </tbody>
        </table>
      </div>
      <p><small>「20％」は大綱上の所得税15％・個人住民税5％の合計表示です。復興特別所得税等の扱いは適用年の最新案内を確認してください。</small></p>

      <h2>対象は「特定暗号資産」に限られる</h2>
      <p>
        大綱が示す対象は、暗号資産取引業者が取り扱い、金融商品取引業者登録簿に登録されている暗号資産等です。
        ウォレット間の相対取引、海外事業者、未登録銘柄などを含めて一律に20％になるとは書かれていません。
        利用サービスと銘柄が制度上の対象かを、適用開始後の公式資料で確認する必要があります。
      </p>

      <h2>3年繰越は自動ではない</h2>
      <p>
        大綱では、特定暗号資産の対象取引で生じ、同じ年の対象所得から控除しきれない損失について、一定要件の下で翌年以後3年内の
        対象所得から控除できる方針です。実際に利用するには確定申告と継続申告が必要になる可能性が高いため、
        取引履歴、取得価額、手数料、年間損益の資料を制度開始前から保存しておく方が安全です。
      </p>

      <h2>暗号資産デリバティブはFXと同じ区分へ</h2>
      <p>
        改正方針では、特定暗号資産デリバティブ取引の雑所得等を「先物取引に係る雑所得等」の課税特例と損失繰越の対象へ加えます。
        これは暗号資産現物の分離課税とは制度上の入口が異なります。FX・一定のCFD・先物との損益通算範囲は、
        適用開始時の法令と国税庁の説明で最終確認してください。
      </p>
      <p><Link href="/articles/fx-profit-loss-offset-tax">FX・CFD・先物との損益通算を確認する →</Link></p>

      <h2>いま準備できる4つのこと</h2>
      <ol>
        <li>2026年分は現行制度を前提に取引履歴を保存する</li>
        <li>取引所ごとの年間損益と取得価額をまとめる</li>
        <li>改正金商法の施行日と対象銘柄の公表を確認する</li>
        <li>適用年の国税庁資料が出た段階で申告方法を更新する</li>
      </ol>
      <p><Link href="/articles/crypto-collateral-loan-tax">暗号資産担保ローンの借入・返済と税務記録を確認する →</Link></p>

      <h2>誤解しやすい点</h2>
      <ul>
        <li>改正法成立と、税制の適用開始日は同じではありません。</li>
        <li>すべての暗号資産取引が自動的に分離課税になるわけではありません。</li>
        <li>2026年分の利益へ新制度を遡って適用する方針ではありません。</li>
        <li>損失繰越には申告手続きと記録保存が必要になるため、詳細公表を待って確認します。</li>
      </ul>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/08taikou_01.htm" rel="noreferrer">財務省「令和8年度税制改正の大綱」</a></li>
        <li><a href="https://www.fsa.go.jp/common/diet/" rel="noreferrer">金融庁「国会提出法案等」</a></li>
        <li><a href="https://www.fsa.go.jp/access/r7/270.html" rel="noreferrer">金融庁「アクセスFSA 第270号」</a></li>
        <li><a href="https://www.nta.go.jp/publication/pamph/shotoku/kakuteishinkokukankei/kasoutuka/" rel="noreferrer">国税庁「暗号資産等に関する税務上の取扱い」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。制度の施行日・対象・申告方法は今後更新されます。本記事は税務上の個別助言ではありません。</small></p>
      <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
    </article>
  );
}
