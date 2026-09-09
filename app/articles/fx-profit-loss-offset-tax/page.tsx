import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FXの損益通算は何とできる？CFD・先物・株・暗号資産を整理',
  description: '国内FXの利益と損失を、一定のCFD・先物、株式、暗号資産と通算できるか、3年間の損失繰越に必要な申告とともに整理します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-profit-loss-offset-tax',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX TAX / PROFIT &amp; LOSS</p>
      <h1>FXの損益通算は何とできる？<br />CFD・先物・株・暗号資産を整理</h1>
      <p className="lede">
        国内FXの損益は「先物取引に係る雑所得等」という区分で計算します。同じ年に複数のFX口座、
        一定の先物・オプション・デリバティブ取引がある場合は、商品名ではなく税務上の対象範囲を確認します。
      </p>

      <div className="callout">
        <strong>結論：同じ課税区分の対象取引とは通算可能</strong>
        <p>株式や現行の暗号資産現物など、別の課税区分とは通算できません。CFDは商品名だけで判断せず、取引報告書と国税庁の対象範囲を確認します。</p>
      </div>

      <h2>損益通算の確認表</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>取引</th><th>国内FXとの通算</th><th>確認点</th></tr></thead>
          <tbody>
            <tr><td>別会社の国内FX</td><td><strong>対象</strong></td><td>各社の年間損益を合計</td></tr>
            <tr><td>取引所FX</td><td><strong>対象</strong></td><td>店頭FXと課税関係は同じ</td></tr>
            <tr><td>一定の先物・オプション</td><td><strong>対象になり得る</strong></td><td>国税庁の適用対象範囲を確認</td></tr>
            <tr><td>一定の店頭CFD</td><td><strong>対象になり得る</strong></td><td>金融商品取引業者・取引区分を確認</td></tr>
            <tr><td>上場株式の譲渡損益</td><td><strong>対象外</strong></td><td>上場株式等の別区分</td></tr>
            <tr><td>暗号資産の現物取引</td><td><strong>現行は対象外</strong></td><td>制度改正の適用時期に注意</td></tr>
          </tbody>
        </table>
      </div>
      <p><small>一般的な整理です。商品・事業者・契約形態によって扱いが異なる場合があります。</small></p>

      <h2>複数のFX口座は年間損益を合計する</h2>
      <p>
        A社で利益、B社で損失がある場合、どちらか一方だけを見るのではなく、同じ課税区分の年間損益をまとめて計算します。
        各社の年間取引報告書、入出金履歴、必要経費の根拠資料を保存し、口座ごとの数字と合計額が追える状態にします。
      </p>
      <p><Link href="/articles/fx-multiple-accounts-cost-risk">複数FX口座の資金・損益管理を見る →</Link></p>

      <h2>CFDは一律に決めつけない</h2>
      <p>
        「CFD」という名称だけで国内FXと通算できるとは限りません。国税庁の「先物取引に係る雑所得等」の適用対象には、
        一定の市場デリバティブ取引、商品先物取引、店頭デリバティブ取引などが含まれます。
        実際の申告では、取引した商品と事業者が対象要件を満たすかを、年間取引報告書や契約書面で確認します。
      </p>

      <h2>株式の損益とは通算できない</h2>
      <p>
        上場株式等の譲渡所得等と、先物取引に係る雑所得等は別の課税区分です。FXの損失を株式の利益から差し引くことも、
        株式の損失をFXの利益から差し引くこともできません。税率が似ていても、損益通算の範囲は同じではありません。
      </p>

      <h2>暗号資産は改正金商法の施行後に制度変更</h2>
      <p>
        2026年9月9日時点で、国税庁は暗号資産取引による所得を原則として雑所得と案内しています。
        一方、令和8年度税制改正大綱では、金融商品取引法等の改正を前提に、一定の暗号資産の分離課税や、
        特定暗号資産デリバティブ取引を「先物取引に係る雑所得等」の対象へ加える方針が示されています。
      </p>
      <p>
        現物の新制度は、改正金商法の施行日が属する年の翌年1月1日以後の対象取引へ適用する方針です。
        2026年分の取引へ先取りして適用せず、施行日と対象年が確定した後に国税庁の最新案内を確認してください。
      </p>
      <p><Link href="/articles/crypto-tax-reform-start-date">暗号資産の分離課税の開始条件を詳しく見る →</Link></p>

      <h2>損失を3年間繰り越すための条件</h2>
      <p>
        同じ区分内で通算しても損失が残る場合、一定の要件を満たせば翌年以後3年間にわたり繰り越せます。
        国税庁は、損失が生じた年に計算明細書と繰越損失用の申告書付表を添付して確定申告し、
        その後も連続して付表を添付した確定申告書を提出することを手続要件として示しています。
      </p>
      <p><Link href="/articles/fx-loss-carryforward-filing">損失発生年から3年間の申告手順を見る →</Link></p>
      <ol>
        <li>損失が出た年も確定申告する</li>
        <li>「先物取引に係る雑所得等の金額の計算明細書」を添付する</li>
        <li>「申告書付表（先物取引に係る繰越損失用）」を添付する</li>
        <li>翌年以後も連続して必要な申告書・付表を提出する</li>
      </ol>

      <h2>申告前にそろえる資料</h2>
      <ul>
        <li>利用した全社の年間取引報告書</li>
        <li>決済損益とスワップ損益の内訳</li>
        <li>必要経費を計上する場合の領収書・利用記録</li>
        <li>前年以前の繰越損失がある場合の申告書控え</li>
      </ul>
      <p><Link href="/articles/fx-annual-transaction-report-tax-return">FX年間取引報告書の確認・集計手順を見る →</Link></p>
      <p>
        申告要否、必要経費、海外事業者、法人取引などは個別事情で結論が変わります。不明点は所轄税務署または税理士へ確認してください。
      </p>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1521.htm" rel="noreferrer">国税庁 No.1521「外国為替証拠金取引（FX）の課税関係」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" rel="noreferrer">国税庁 No.1522「先物取引に係る雑所得等の課税の特例」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1523.htm" rel="noreferrer">国税庁 No.1523「先物取引の差金等決済に係る損失の繰越控除」</a></li>
        <li><a href="https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/08taikou_01.htm" rel="noreferrer">財務省「令和8年度税制改正の大綱」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。本記事は一般的な情報であり、税務上の個別助言ではありません。</small></p>
      <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
    </article>
  );
}
