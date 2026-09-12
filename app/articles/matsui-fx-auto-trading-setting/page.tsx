import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/matsui-fx-auto-trading-setting' },
  title: 'MATSUI FX自動売買の設定方法｜レンジ・値幅・益出し幅を整理',
  description: '松井証券MATSUI FXのリピート注文について、注文レンジ、注文値幅、益出し幅、注文数量、運用停止ライン、最大100件の制限と必要資金の考え方を解説します。',
};

const faq = [
  { q: 'MATSUI FX自動売買で設定する項目は？', a: '売買、注文レンジ、注文数量、注文値幅、益出し幅、運用停止ラインを設定します。レンジ内で新規注文と決済注文が繰り返し発注されます。' },
  { q: '自動売買の注文数に上限はありますか？', a: '発注予定の注文件数が100件を超える設定はできません。レンジ、値幅、数量を調整して100件以内にします。' },
  { q: '運用開始後に変更できる項目は？', a: '注文数量、益出し幅、運用停止ラインは変更できます。注文レンジと注文値幅は、いったん設定した自動売買グループでは変更できません。' },
] as const;

export default function Page() {
  const jsonLd = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: metadata.title, description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09', mainEntityOfPage: 'https://hanbaijo.com/articles/matsui-fx-auto-trading-setting', author: { '@type': 'Organization', name: '金融コストウォッチ' }, publisher: { '@type': 'Organization', name: '金融コストウォッチ' } },
    { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
  ] };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">MATSUI FX / AUTO TRADING</p>
    <h1>MATSUI FX自動売買の設定方法<br />レンジ・値幅・益出し幅</h1>
    <p className="lede">松井証券の自動売買（リピート注文）は、注文を仕掛ける範囲と間隔、決済する利益幅を先に決める仕組みです。100円から取引できても、設定全体の必要証拠金と評価損への備えは別に考えます。</p>

    <h2>設定する6項目</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>役割</th><th>設定の考え方</th></tr></thead><tbody>
      <tr><td className="ex-name">売買</td><td>買い／売り</td><td>相場の見立てとレンジ方向を合わせる</td></tr>
      <tr><td className="ex-name">注文レンジ</td><td>新規注文を仕掛ける上限・下限</td><td>想定する価格帯を設定</td></tr>
      <tr><td className="ex-name">注文数量</td><td>1注文あたりの通貨数</td><td>1通貨から。数量が増えるほど損益も評価損も拡大</td></tr>
      <tr><td className="ex-name">注文値幅</td><td>新規注文の間隔</td><td>狭いほど注文数・必要資金が増える</td></tr>
      <tr><td className="ex-name">益出し幅</td><td>新規約定から利益確定する値幅</td><td>小さいほど決済機会は増えるが1回の利益は小さい</td></tr>
      <tr><td className="ex-name">運用停止ライン</td><td>損切り価格</td><td>任意設定。相場急変時の停止基準にする</td></tr>
    </tbody></table></div></div>
    <p>注文レンジ内では、新規注文と決済注文（利益確定）が自動的に繰り返し発注されます。買いの場合、決済売り価格は新規買い価格に益出し幅を加え、売りの場合は新規売り価格から益出し幅を引きます。</p>

    <h2>PC・スマホからの開始手順</h2>
    <ol><li>FXお客様サイトまたはFXアプリへログイン</li><li>「注文」から「自動売買注文」を選択</li><li>通貨ペア、売買、レンジ、数量、注文値幅、益出し幅を入力</li><li>必要なら運用停止ラインを設定</li><li>注文確認で発注予定件数と必要証拠金目安を確認</li><li>注文を確定し、「設定照会」で稼働状況を確認</li></ol>
    <p>スマホでは「注文」→「自動売買注文」または「マイページ」→「自動売買設定照会」から確認できます。建玉、注文照会、約定履歴も分けて確認します。</p>

    <h2>100件上限と値幅の関係</h2>
    <p>発注予定の注文件数は100件以内です。注文レンジを広く、注文値幅を狭くすると件数が増えやすく、数量を増やすと必要証拠金と評価損への備えも増えます。</p>
    <div className="fx-formula"><span>単純な件数の目安</span><strong>レンジ幅 ÷ 注文値幅 ＋ 1</strong><b>例：10円 ÷ 0.5円 ＋ 1 = 21本</b><small>実際の発注件数は通貨ペアのレート桁、買い・売り、決済注文、端数処理などで変わります。画面の発注予定件数を優先してください。</small></div>

    <h2>運用開始後に変更できる範囲</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>項目</th><th>変更</th><th>反映のされ方</th></tr></thead><tbody>
      <tr><td className="ex-name">注文レンジ</td><td>不可</td><td>新しい設定を作り直す</td></tr>
      <tr><td className="ex-name">注文値幅</td><td>不可</td><td>新しい設定を作り直す</td></tr>
      <tr><td className="ex-name">注文数量</td><td>可</td><td>発注済み・再開待ちの新規注文にも反映</td></tr>
      <tr><td className="ex-name">益出し幅</td><td>可</td><td>決済約定後に発注される新規注文から反映</td></tr>
      <tr><td className="ex-name">運用停止ライン</td><td>可</td><td>グループ内の注文を対象に変更</td></tr>
    </tbody></table></div></div>
    <p>発注済みの個別新規注文は価格変更・取消ができません。自動売買グループを停止することで、グループ単位の注文取消を行います。</p>
    <p><Link href="/articles/matsui-fx-auto-trading-stop-restart">停止・再開時の建玉と注文を確認 →</Link></p>

    <h2>最低資金と安定運用資金を分ける</h2>
    <p>1通貨なら必要証拠金は小さくできますが、レンジ内で複数の建玉を持つと評価損が積み上がります。必要資金は「新規注文に必要な証拠金」と「ロスカットに備える証拠金」の合計で考えます。</p>
    <p>たとえば米ドル円を25倍コースで100ドルずつ3本保有し、101円・100円・99円で買った場合、99円時点の必要証拠金は合計1,200円、評価損は300円という公式例があります。最低限1,500円でも、スワップや追加注文があれば余裕は減ります。</p>
    <p><Link href="/articles/matsui-fx-auto-trading-cost">必要資金と評価損の計算を詳しく見る →</Link></p>

    <h2>自動売買の設定前チェック</h2>
    <ul><li>注文レンジの根拠と、レンジ外へ動いた場合の対応を決めた</li><li>注文値幅・益出し幅・数量で発注件数が100件以内</li><li>必要証拠金だけでなく評価損への資金を確保</li><li>運用停止ラインを設定するか判断</li><li>スワップ支払いや相場急変によるロスカットを確認</li><li>開始後に毎日、建玉・注文・余力を確認できる</li></ul>

    <h2>よくある質問</h2>
    {faq.map((item) => <section key={item.q}><h3>{item.q}</h3><p>{item.a}</p></section>)}

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.matsui.co.jp/fx/auto-trading/order/" target="_blank" rel="noopener noreferrer">松井証券「自動売買の注文方法」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/42068?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「自動売買の発注方法」</a></li>
      <li><a href="https://support.matsui.co.jp/faq/show/41229?site_domain=faq" target="_blank" rel="noopener noreferrer">松井証券「自動売買注文の画面説明」</a></li>
      <li><a href="https://www.matsui.co.jp/fx/auto-trading/deposit/" target="_blank" rel="noopener noreferrer">松井証券「自動売買に必要な資金」</a></li>
      <li><a href="https://www.matsui.co.jp/fx/rule/" target="_blank" rel="noopener noreferrer">松井証券「FX取引ルール」</a></li>
    </ul><p>設定項目と上限は2026年9月9日に確認しました。スプレッド、必要証拠金、ロスカット率、注文値幅の下限などは通貨ペア・コース・最新ルールにより変わるため、発注画面と公式資料を優先してください。</p></section>

    <section className="article-affiliate" aria-label="松井証券FXの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['matsui-fx']} /><p className="affiliate-disclosure">上記はA8.netの提携広告です。広告報酬は記事内容や評価に影響しません。自動売買の利益やロスカット回避は保証されません。</p></section>
    <p><Link href="/fx/matsui">MATSUI FXのコストシート →</Link></p>
  </article>;
}
