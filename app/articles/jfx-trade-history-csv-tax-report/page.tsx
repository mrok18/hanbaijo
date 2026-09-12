import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/jfx-trade-history-csv-tax-report' },
  title: 'JFXの取引履歴をCSV保存する方法｜確定申告用報告書との違い',
  description: 'JFX MATRIX TRADERの約定・注文・入出金履歴を検索してCSV保存する手順と、個人口座の確定申告に使う損益計算書との違いを整理する。',
};

const historyTypes = [
  ['約定履歴', '約定した売買、数量、売買損益、スワップ損益、決済損益', '取引コストと損益の照合'],
  ['注文履歴', '注文・変更・取消・不成立の記録', '約定しなかった理由の確認'],
  ['入出金履歴', '入金・出金の日時と金額', '資金移動と残高の照合'],
  ['損益計算書', '指定期間の売買損益・スワップ等の合計', '個人口座の確定申告準備'],
] as const;

const faq = [
  ['CSVだけで確定申告できますか？', 'CSVは明細の保存・集計に便利ですが、個人口座の申告準備ではJFXが案内する損益計算書も確認します。申告区分や必要経費は最新の税務情報で判断してください。'],
  ['履歴が多い場合はどう保存しますか？', '対象期間や通貨ペアを分け、検索結果を保存した後に期間を重複させていないか確認します。画面・ツールごとに表示やダウンロード上限があるため、一度に全期間を指定しない方法が安全です。'],
  ['スマホだけで確認できますか？', 'スマホでも注文・約定・期間損益などを確認できますが、CSVやPDFの保存機能はツールによって異なります。確定申告用の資料はPC版を含め、実際の取引画面でダウンロード可否を確認してください。'],
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
        mainEntityOfPage: 'https://hanbaijo.com/articles/jfx-trade-history-csv-tax-report',
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
    <p className="page-kicker">JFX / RECORD KEEPING</p>
    <h1>JFXの取引履歴をCSV保存する方法<br />確定申告用報告書との違い</h1>
    <p className="lede">JFXの履歴は、約定・注文・入出金を分けて検索できます。日々の明細をCSVで保存する方法と、個人口座の確定申告準備で確認する損益計算書を分けて、保存漏れを防ぐ手順にまとめます。</p>

    <div className="callout"><strong>CSVは明細、損益計算書は申告準備用の集計資料</strong><p>CSVに残す項目と、申告に使う年間の合計は役割が異なります。まず取引履歴を定期保存し、年末に損益計算書の合計と照合します。税務上の最終判断は、最新の国税庁資料や税理士へ確認してください。</p></div>

    <h2>先に保存する4種類の履歴</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>履歴・書類</th><th>分かること</th><th>使う場面</th></tr></thead><tbody>
      {historyTypes.map(([name, detail, use]) => <tr key={name}><td className="ex-name">{name}</td><td>{detail}</td><td>{use}</td></tr>)}
    </tbody></table></div></div>

    <h2>約定・注文・入出金履歴をCSVで保存する</h2>
    <ol>
      <li>取引画面の「履歴検索／報告書」から「履歴の検索」を開く。</li>
      <li>約定履歴・注文履歴・入出金履歴のいずれかを選ぶ。</li>
      <li>期間、通貨ペア、約定区分、売買区分を指定して検索する。</li>
      <li>結果を確認し、CSV出力またはダウンロードを実行する。</li>
      <li>ファイル名に口座名・対象期間・履歴種類を入れ、読み取り専用の保管場所へ保存する。</li>
    </ol>
    <p>PC版では履歴の検索とCSVダウンロード、スマホ版では約定・注文・期間損益などの確認ができます。画面や履歴件数により表示・ダウンロード上限が異なるため、月単位や通貨ペア単位に分けて保存し、ファイルの連番を残します。</p>
    <p><Link href="/articles/jfx-deposit-not-reflected">入出金が反映されない場合の確認手順 →</Link></p>

    <h2>検索条件を変えるときの注意</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>確認点</th><th>なぜ必要か</th></tr></thead><tbody>
      <tr><td className="ex-name">期間の境界</td><td>JFXの営業日切替時刻をまたぐ取引を、前後の期間で重複・欠落させないため</td></tr>
      <tr><td className="ex-name">新規・決済の区分</td><td>約定数量の集計と、実現損益の集計を混同しないため</td></tr>
      <tr><td className="ex-name">通貨ペア</td><td>全通貨ペアと個別通貨ペアの合計が一致するか照合するため</td></tr>
      <tr><td className="ex-name">ファイル名</td><td>同じ月の再出力で古いCSVを上書きしないため</td></tr>
    </tbody></table></div></div>
    <p>同じ期間を「全通貨ペア」と「個別通貨ペア」で両方保存する場合は、集計用と原本用を分けます。再集計では片方だけを使い、二重計上を避けます。</p>

    <h2>確定申告では損益計算書を照合する</h2>
    <p>JFXは、個人口座の確定申告に使う資料として取引画面から損益計算書をダウンロードするよう案内しています。年間の合計を確認するときは、損益計算書の対象期間を1月から12月に合わせ、CSVで保存した決済損益・スワップ損益・手数料などと突き合わせます。</p>
    <div className="formula-box"><strong>照合差額 ＝ 損益計算書の合計 − CSV集計の合計</strong><small>差額が出たら、期間の境界、未決済ポジション、スワップ振替、手数料の扱いを順に確認します。</small></div>
    <p><Link href="/articles/fx-annual-transaction-report-tax-return">FX年間取引報告書の確認・集計手順を見る →</Link></p>
    <p><Link href="/articles/jfx-swap-transfer-tax">JFXのスワップ振替と税務上の扱いを見る →</Link></p>

    <h2>月次で行う保存ルーティン</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>タイミング</th><th>保存するもの</th><th>チェック</th></tr></thead><tbody>
      <tr><td className="ex-name">月末</td><td>約定・注文・入出金CSV</td><td>期間と件数、ファイル名を確認</td></tr>
      <tr><td className="ex-name">四半期</td><td>CSVの集計表</td><td>口座残高・入出金と大きな差がないか確認</td></tr>
      <tr><td className="ex-name">年末・年始</td><td>損益計算書・必要な報告書</td><td>1月〜12月の期間と合計を照合</td></tr>
    </tbody></table></div></div>
    <p>ファイルはクラウドだけに置かず、暗号化された端末や外部媒体にもバックアップします。個人情報と口座情報を含むため、共有フォルダや公開リンクへ置かないでください。</p>

    <h2>よくある質問</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>質問</th><th>回答</th></tr></thead><tbody>
      {faq.map(([question, answer]) => <tr key={question}><td className="ex-name">{question}</td><td>{answer}</td></tr>)}
    </tbody></table></div></div>

    <section className="article-affiliate" aria-label="JFXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS.jfx} /><p className="affiliate-disclosure">JFXへの広告リンクです。申込み後に所定の取引条件を満たすと当サイトが報酬を受け取る場合があります。履歴保存と税務の説明、広告評価は分けて掲載しています。</p></section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=49&id=323&site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX「確定申告用にFXの取引履歴などがわかる取引報告書が欲しい」</a></li>
      <li><a href="https://faq.jfx.co.jp/faq/detail?category=39&id=460&site=FX557CTV" target="_blank" rel="noopener noreferrer">JFX「過去の取引・注文・入出金履歴をCSVで出力」</a></li>
      <li><a href="https://www.jfx.co.jp/pdf/mt_net/net_d01.pdf" target="_blank" rel="noopener noreferrer">JFX MATRIX TRADER「約定履歴のダウンロード」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/tax/" target="_blank" rel="noopener noreferrer">JFX「確定申告について」</a></li>
    </ul><p>操作方法と税務案内は2026年9月9日に公式ページで確認しました。画面仕様や書類の提供方法は変更される場合があります。</p></section>

    <p><Link href="/fx/jfx">JFXの取引条件と全ガイドを見る →</Link></p>
    <p><Link href="/tools/jfx-fxtf-cost-comparison">JFX・FXTFの総コストを比較計算する →</Link></p>
  </article>;
}
