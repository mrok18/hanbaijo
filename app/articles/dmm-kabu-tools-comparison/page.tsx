import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/dmm-kabu-tools-comparison' },
  title: 'DMM 株のアプリ・取引ツール比較｜かんたん・ノーマル・STANDARD・PRO+',
  description: 'DMM 株のスマホアプリ「かんたんモード」「ノーマルモード」と、PC版STANDARD・PRO+を、注文、チャート、NISA、つみたてかぶ、利用環境で比較します。',
};

const faq = [
  { q: 'かんたんモードとノーマルモードは別アプリですか？', a: '同じスマホアプリ「DMM株」の中で切り替えて使います。かんたんモードは操作を絞り、ノーマルモードは板・チャート・検索機能を充実させています。' },
  { q: '国内株と米国株でアプリを分ける必要がありますか？', a: 'ありません。公式案内では、PCツールもスマホアプリも1つの取引ツールで国内株式と米国株式を取引できます。' },
  { q: 'NISAの単元株をかんたんモードで買えますか？', a: 'かんたんモードでは単元株の買付時にNISA口座を選択できません。PRO+、STANDARD、またはノーマルモードを利用します。つみたてかぶではNISA口座を選択できます。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/dmm-kabu-tools-comparison', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">DMM KABU / TRADING TOOLS</p>
    <h1>DMM 株のアプリ・取引ツール比較<br />4つの画面を用途で選ぶ</h1>
    <p className="lede">スマホは1つのアプリ内で2モードを切り替え、PCはブラウザ版とインストール版から選びます。使う端末だけでなく、注文方法、分析量、NISA、つみたてかぶの対応で選ぶのが実用的です。</p>

    <h2>4つの取引画面を比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>ツール</th><th>形式</th><th>向く用途</th><th>主な注意</th></tr></thead><tbody>
      <tr><td className="ex-name">かんたんモード</td><td>スマホアプリ</td><td>銘柄探しとシンプルな現物注文</td><td>通常の買付は成行のみ。単元株NISA選択不可</td></tr>
      <tr><td className="ex-name">ノーマルモード</td><td>スマホアプリ</td><td>板・チャート・検索からの発注</td><td>情報量が多く設定項目も増える</td></tr>
      <tr><td className="ex-name">STANDARD</td><td>PCブラウザ</td><td>基本機能、情報確認、つみたて設定</td><td>対応ブラウザ・OSを確認</td></tr>
      <tr><td className="ex-name">PRO+</td><td>PCインストール</td><td>多彩な注文、チャート、短期売買</td><td>つみたてかぶの設定には非対応</td></tr>
    </tbody></table></div></div>

    <h2>かんたんモード</h2>
    <p>テーマ、ランキング、予算などから銘柄を探し、画面を絞って注文できます。通常の現物買いは成行注文のみで、注文画面に表示される購入・売却金額は操作時点の価格等を基にした概算です。相場変動時は実際の約定金額と差が出ます。</p>
    <div className="callout"><strong>NISA単元株は別の画面を使う</strong><p>かんたんモードでは単元株買付時にNISA口座を選べません。ノーマルモード、STANDARD、PRO+へ切り替えます。つみたてかぶのNISA設定はかんたんモードでも可能です。</p></div>

    <h2>ノーマルモード</h2>
    <p>チャートや板情報から発注でき、テクニカル指標、テーマ・決算・優待などの検索、四季報等の投資情報を確認できます。お気に入りは最大2,000銘柄でPCツールと連動します。外出先で分析と注文を同じ画面にまとめたい場合の選択肢です。</p>

    <h2>STANDARDとPRO+の違い</h2>
    <div className="fx-metric-grid">
      <article><b>STANDARD</b><h3>インストール不要</h3><p>Webブラウザで起動し、国内株・米国株の基本機能、個別銘柄情報、スクリーニング、つみたてかぶを利用できます。</p></article>
      <article><b>PRO+</b><h3>注文・チャート重視</h3><p>Windows・Mac対応のインストール版です。高度な注文、チャート、銘柄管理を一画面で使う取引環境です。</p></article>
    </div>
    <p>PRO+は高機能ですが、つみたてかぶのプラン設定はSTANDARDまたはスマホアプリを使います。機能数ではなく、実際の取引目的に合わせて併用します。</p>

    <h2>目的別の選び方</h2>
    <ul><li>初めて現物株を注文する：かんたんモード</li><li>スマホで板・チャート・NISA注文：ノーマルモード</li><li>PCで基本情報と積立を管理：STANDARD</li><li>PCで注文速度と分析機能を重視：PRO+</li><li>1,000円から定期買付：スマホアプリまたはSTANDARD</li></ul>
    <p><Link href="/articles/dmm-kabu-tsumitate-kabu-nisa">つみたてかぶの条件を確認 →</Link></p>

    <h2>利用環境も事前に確認</h2>
    <p>2026年9月確認時点で、スマホアプリはiOS 18.4以上・Android 12以上、PCツールはWindows 11またはMac OS 26が案内されています。ブラウザ、解像度、空き容量等の条件もあるため、公式の動作環境一覧を優先してください。</p>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://kabu.dmm.com/tool/" target="_blank" rel="noopener noreferrer">DMM 株「取引ツール・アプリ」</a></li>
      <li><a href="https://kabu.dmm.com/tool/sp_easy/" target="_blank" rel="noopener noreferrer">DMM 株「スマホアプリ かんたんモード」</a></li>
      <li><a href="https://kabu.dmm.com/tool/sp_normal/" target="_blank" rel="noopener noreferrer">DMM 株「スマホアプリ ノーマルモード」</a></li>
      <li><a href="https://kabu.dmm.com/tool/pc_pro_plus/" target="_blank" rel="noopener noreferrer">DMM 株「DMM株 PRO+」</a></li>
      <li><a href="https://kabu.dmm.com/tool/spec/result/" target="_blank" rel="noopener noreferrer">DMM 株「動作環境一覧」</a></li>
    </ul><p>機能と動作環境は2026年9月9日に確認しました。OSや対応機能は更新されるため、利用前に公式の最新案内を確認してください。</p></section>

    <section className="article-affiliate" aria-label="DMM 株の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['dmm-kabu']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。取引ツールの使いやすさは端末と取引方法によって異なります。</p></section>
    <p><Link href="/articles/dmm-kabu-account-opening-documents">DMM 株の口座開設に必要なもの →</Link></p>
    <p><Link href="/stocks/dmm-kabu">DMM 株のコストシート →</Link></p>
  </article>;
}
