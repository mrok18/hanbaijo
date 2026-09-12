import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-cfd-annual-profit-report' },
  title: 'DMM CFDの年間損益報告書はいつ？出力方法と確定申告準備',
  description: 'DMM CFDの年間損益報告書・期間損益報告書の違い、PCとスマホでの出力方法、FXや先物と合算する確定申告準備を整理する。',
};

const documents = [
  ['年間損益報告書', '1年分の確定した損益の確認', '個人の年間損益を確認するとき'],
  ['期間損益報告書', '指定期間の損益や明細', '過年度・任意期間を調べるとき'],
  ['約定履歴', '約定した日時、銘柄、数量、価格', '年間合計の照合や取引記録'],
  ['取引残高報告書', '残高や未決済ポジションの状況', '期末残高・法人の確認が必要なとき'],
] as const;

const faq = [
  ['年間損益報告書はいつから取得できますか？', 'DMM公式案内では、確定申告に利用する年間損益報告書は翌年1月の第1日曜日以降に取得できます。年末の取引終了時刻は銘柄により異なるため、年末年始の営業スケジュールも確認します。'],
  ['報告書を確定申告書に添付する必要はありますか？', '税制改正により、年間損益報告書などの添付は原則不要と案内されています。ただし、申告内容を説明できるよう報告書・履歴・経費資料は保存します。'],
  ['未決済の含み損益も合算しますか？', '個人口座では、原則としてその年に決済した損益とスワップ・調整額を集計し、未決済ポジションは決済まで含めません。法人や特殊な取扱いは税理士・税務署へ確認してください。'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: metadata.title,
        description: metadata.description,
        datePublished: '2026-09-09',
        dateModified: '2026-09-09',
        mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-cfd-annual-profit-report',
        author: { '@type': 'Organization', name: '金融コストウォッチ' },
        publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM CFD / TAX RECORD</p>
    <h1>DMM CFDの年間損益報告書はいつ？<br />出力方法と確定申告準備</h1>
    <p className="lede">DMM CFDの年間損益報告書は、いつ・どこから取得できるのでしょうか。PC版とスマホアプリの出力手順、年間損益・期間損益・約定履歴の使い分け、FXや先物と合算するときの確認順を整理します。</p>

    <div className="callout"><strong>報告書は「添付する書類」ではなく、正確に申告するための原本</strong><p>報告書の添付が原則不要でも、申告内容を裏付ける資料として保存します。DMM CFDの取引条件や税区分は変更される場合があるため、申告時点の公式案内と国税庁資料を優先してください。</p></div>

    <h2>4種類の資料を役割で分ける</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>資料</th><th>分かること</th><th>主な用途</th></tr></thead><tbody>
      {documents.map(([name, detail, use]) => <tr key={name}><td className="ex-name">{name}</td><td>{detail}</td><td>{use}</td></tr>)}
    </tbody></table></div></div>

    <h2>年間損益報告書の取得時期</h2>
    <p>DMM公式FAQでは、確定申告に利用する年間損益報告書は翌年1月の第1日曜日以降に取得できると案内されています。年末の取引対象日は、DMM FXとDMM CFDで異なる場合があり、CFDは銘柄ごとに取引終了日時が異なるため、年末の締め時刻を確認してから保存します。</p>
    <div className="formula-box"><strong>対象期間 ＝ 1月1日営業日〜12月31日営業日</strong><small>CFDは銘柄ごとの取引終了時刻を公式スケジュールで確認。迷ったら期間損益報告書でも照合します。</small></div>

    <h2>PC版でPDFを出力する手順</h2>
    <ol>
      <li>DMMCFD PLUSまたはDMMCFD STANDARDにログインする。</li>
      <li>メニューの「報告書」を開く。</li>
      <li>報告書種類で「年間損益報告書」を選び、最新または対象日を指定する。</li>
      <li>検索結果を確認し、「PDF」から保存する。</li>
      <li>ファイル名に「DMM CFD・年度・口座」を入れて、原本として保管する。</li>
    </ol>

    <h2>スマホアプリでPDFを出力する手順</h2>
    <ol>
      <li>「DMM CFD」または「DMMCFD スマホ」にログインする。</li>
      <li>メニューの「照会」から「報告書」を開き、検索をタップする。</li>
      <li>対象を「最新」、報告書種類を「年間損益報告書」にする。</li>
      <li>検索結果のPDFを開き、端末または安全な保管先へ保存する。</li>
    </ol>
    <p>過去年度や任意期間を調べる場合は、期間損益報告書を使います。2015年度から2023年度の損益は、年間損益報告書ではなく期間損益報告書で確認するよう公式FAQに記載されています。</p>
    <p><Link href="/articles/dmm-cfd-total-cost">DMM CFDのスプレッド・調整額を総コストで確認する →</Link></p>

    <h2>年間の損益を申告準備用に集計する</h2>
    <p>DMM公式の計算案内では、その年に決済した売買損益とスワップポイント・調整額を合計し、必要経費を差し引いて所得を計算します。まずDMM CFDの年間損益報告書を確認し、複数口座の報告書、FX、一定の先物・取引所CFDなど、損益通算できる取引がある場合は別々に集計してから合算します。</p>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>集計順</th><th>資料・数字</th><th>チェック</th></tr></thead><tbody>
      <tr><td className="ex-name">1</td><td>DMM CFD年間損益報告書</td><td>対象期間と実現損益を確認</td></tr>
      <tr><td className="ex-name">2</td><td>期間損益・約定履歴</td><td>銘柄別・期間別の差異を照合</td></tr>
      <tr><td className="ex-name">3</td><td>他社FX・CFD・先物の資料</td><td>商品区分と損益通算の可否を確認</td></tr>
      <tr><td className="ex-name">4</td><td>必要経費の証憑</td><td>通信費・書籍など事業との関連と保存状況を確認</td></tr>
    </tbody></table></div></div>
    <p><Link href="/articles/fx-profit-loss-offset-tax">FX・CFD・先物の損益通算を整理する →</Link></p>
    <p><Link href="/articles/fx-tax-deductible-expenses">必要経費にできるものと保存資料を見る →</Link></p>

    <h2>保存時に気を付けること</h2>
    <ul>
      <li>PDFのファイル名に年度、サービス名、口座区分を入れる。</li>
      <li>年間報告書だけでなく、期間損益・約定履歴・入出金履歴も必要な期間を保存する。</li>
      <li>提出期限直前に初めて取得せず、1月に取得できたら内容を確認する。</li>
      <li>個人情報を含むため、公開リンクや共有フォルダに置かない。</li>
    </ul>
    <div className="callout"><strong>評価損益と実現損益を混同しない</strong><p>年間損益報告書の実現損益と、取引残高報告書の未決済ポジションは別の数字です。個人・法人、決済状況によって扱いが変わるため、分からない場合は税理士または所轄税務署へ確認してください。</p></div>

    <h2>よくある質問</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>質問</th><th>回答</th></tr></thead><tbody>
      {faq.map(([question, answer]) => <tr key={question}><td className="ex-name">{question}</td><td>{answer}</td></tr>)}
    </tbody></table></div></div>

    <section className="article-affiliate" aria-label="DMM CFDの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-cfd']} /><p className="affiliate-disclosure">DMM CFDへのアクセストレード広告リンクです。申込み等の成果条件を満たすと当サイトが報酬を受け取る場合があります。税務・報告書の説明と広告評価は分けて掲載しています。</p></section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://fx.dmm.com/support/faq/article/00039/" target="_blank" rel="noopener noreferrer">DMM FX「確定申告に利用する書類はどのように表示できますか？」</a></li>
      <li><a href="https://fx.dmm.com/support/tax/calculation/" target="_blank" rel="noopener noreferrer">DMM FX「税金と確定申告～どうやって計算？～」</a></li>
      <li><a href="https://fx.dmm.com/support/tax/2025/" target="_blank" rel="noopener noreferrer">DMM FX「2025年度の確定申告について」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00162/" target="_blank" rel="noopener noreferrer">DMM FX「約定履歴はどこから確認できますか？」</a></li>
    </ul><p>出力方法・税務案内は2026年9月9日に公式ページで確認しました。報告書の提供時期、取引終了時刻、税制は変更される場合があります。</p></section>

    <p><Link href="/cfd/dmm-cfd">DMM CFDの取引条件と全ガイドを見る →</Link></p>
    <p><Link href="/tools/cfd-margin-calculator">CFDの必要証拠金を計算する →</Link></p>
  </article>;
}
