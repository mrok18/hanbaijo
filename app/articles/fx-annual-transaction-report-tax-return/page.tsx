import type { Metadata } from 'next';
import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata: Metadata = {
  title: 'FXの年間取引報告書はどこを見る？複数口座の確定申告準備',
  description: 'FXの年間取引報告書・年間損益報告書で確認する決済損益、スワップ、手数料と、複数口座の集計、確定申告書等作成コーナーへの入力準備を整理します。',
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-annual-transaction-report-tax-return',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="page-kicker">FX ANNUAL REPORT</p>
      <h1>FXの年間取引報告書はどこを見る？<br />複数口座の確定申告準備</h1>
      <p className="lede">
        FX会社の画面では「年間取引報告書」「年間損益報告書」「期間損益報告書」など名称が異なる場合があります。
        まず対象年と確定損益を確認し、複数口座を同じ表へ集めてから申告書へ進みます。
      </p>

      <div className="callout">
        <strong>未決済建玉の評価損益と、年間の確定損益を混ぜない</strong>
        <p>年末時点の画面残高だけではなく、その年に決済・確定した損益と報告書の集計期間を確認します。</p>
      </div>

      <h2>最初に確認する5項目</h2>
      <div className="table-scroll">
        <table className="rates">
          <thead><tr><th>項目</th><th>確認する内容</th><th>間違いやすい点</th></tr></thead>
          <tbody>
            <tr><td>集計期間</td><td>1月1日から12月31日までの対象年</td><td>ダウンロード日ではなく取引年を見る</td></tr>
            <tr><td>売買損益</td><td>決済した為替差損益の合計</td><td>未決済の評価損益を足さない</td></tr>
            <tr><td>スワップ損益</td><td>確定・実現した受取と支払</td><td>未実現分の扱いは会社の報告内容を確認</td></tr>
            <tr><td>手数料</td><td>取引・ロスカット等の手数料</td><td>損益欄に反映済みかを確認</td></tr>
            <tr><td>合計損益</td><td>会社が示す年間の最終集計</td><td>内訳を二重に加減しない</td></tr>
          </tbody>
        </table>
      </div>

      <h2>報告書の取得場所を探す順番</h2>
      <ol>
        <li>FX取引画面または会員ページへログインする</li>
        <li>「報告書」「電子交付」「帳票」「取引履歴」のメニューを探す</li>
        <li>年間または期間指定の損益報告書を選ぶ</li>
        <li>対象年を指定し、PDFまたはCSVを保存する</li>
        <li>氏名、口座番号、対象期間、合計損益を確認する</li>
      </ol>
      <p>名称や配信時期はFX会社ごとに異なります。見つからない場合は公式FAQまたはサポートへ確認してください。</p>

      <h2>複数口座は1行ずつ集計する</h2>
      <div className="formula-box">
        <code>年間損益 ＝ A社の対象損益 + B社の対象損益 + C社の対象損益</code>
        <small>同じ「先物取引に係る雑所得等」の対象取引を集計</small>
      </div>
      <p>
        各社の報告書を1行ずつ転記し、会社名、商品区分、売買損益、スワップ損益、手数料、最終合計を残します。
        CFDや先物も利用している場合は、税務上の同じ対象区分に該当するかを確認してから合計します。
      </p>
      <p><Link href="/articles/fx-profit-loss-offset-tax">FX・CFD・先物の損益通算範囲を確認 →</Link></p>

      <h2>二重計上を防ぐ3つの照合</h2>
      <ul>
        <li>会社の「合計損益」にスワップや手数料が既に反映されているか</li>
        <li>CSVの明細合計とPDFの年間合計が一致するか</li>
        <li>同じ口座・同じ期間の報告書を重複して集計していないか</li>
      </ul>
      <p>
        報告書の合計額へ、内訳のスワップや手数料をもう一度足し引きすると二重計上になる場合があります。
        各社の帳票説明に従い、元の報告書と自作集計表が追跡できる状態で保存します。
      </p>

      <h2>国税庁の作成画面では「先物取引」を選ぶ</h2>
      <p>
        国税庁の確定申告書等作成コーナーは、FXによる収入について「申告する所得の選択等」で「先物取引」を選び、
        「先物取引に係る雑所得等」から入力するよう案内しています。申告する場合は、原則として
        「先物取引に係る雑所得等の金額の計算明細書」を使用します。
      </p>

      <h2>損失繰越がある場合は付表も確認</h2>
      <p>
        本年の損失を翌年以後へ繰り越す場合や、前年以前の繰越損失を本年の利益から差し引く場合は、
        計算明細書に加えて「申告書付表（先物取引に係る繰越損失用）」が必要です。繰越控除を続けるには、
        損失発生年から連続して所定の確定申告を行う必要があります。
      </p>

      <h2>保存しておく資料</h2>
      <ul>
        <li>全口座の年間・期間損益報告書</li>
        <li>明細確認用の取引履歴CSV</li>
        <li>入出金履歴とスワップ振替履歴</li>
        <li>必要経費を計上する場合の領収書と利用目的の記録</li>
        <li>提出した確定申告書、計算明細書、繰越損失用付表の控え</li>
      </ul>
      <p><Link href="/articles/fx-tax-deductible-expenses">PC・通信費・VPSなどの必要経費を確認 →</Link></p>
      <p><Link href="/articles/fx-profit-under-200k-tax-return">FX所得20万円以下の申告条件を確認 →</Link></p>
      <p><Link href="/articles/fx-etax-input-guide">e-Taxで「先物取引」へ入力する順番を見る →</Link></p>
      <p><Link href="/articles/fx-multiple-accounts-cost-risk">複数口座の資金・損益管理方法を見る →</Link></p>

      <section className="article-affiliate" aria-label="提携中のFXサービス">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} />
        <p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。税務情報や比較結果は広告報酬と分けて作成しています。</p>
      </section>

      <h2>出典と確認日</h2>
      <ul>
        <li><a href="https://www.keisan.nta.go.jp/r7yokuaru/cat2/cat21/cat21e/cid456.html" rel="noreferrer">国税庁「外国為替証拠金取引（FX）による収入がある場合」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/shinkoku/syotoku/r07.htm" rel="noreferrer">国税庁「令和7年分 確定申告書等の様式・手引き等」</a></li>
        <li><a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1523.htm" rel="noreferrer">国税庁 No.1523「先物取引の差金等決済に係る損失の繰越控除」</a></li>
      </ul>
      <p><small>確認日：2026年9月9日。2026年分の申告様式は公表後に最新資料を確認してください。本記事は税務上の個別助言ではありません。</small></p>
      <p><Link href="/articles">解説記事一覧へ戻る →</Link></p>
    </article>
  );
}
