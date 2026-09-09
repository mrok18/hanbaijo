import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FX初心者は何から勉強する？9章を5段階で読む順番',
  description: 'FXの仕組み、口座条件、注文、資金管理、経済、チャート、通貨ペアを、取引を急がず数字で確認する学習順に並べます。',
};

const stages = [
  ['1', '仕組みを知る', '外国為替市場・FXの仕組み', '証拠金取引と元本超過損の可能性を説明できる'],
  ['2', '口座条件を読む', '口座選び・取引の基本', 'スプレッド、取引単位、注文、ロスカットを比較できる'],
  ['3', '損失を先に決める', 'マネーマネジメント', '許容損失から数量を逆算できる'],
  ['4', '相場の材料を知る', '経済・金利・為替、経済情報', '指標発表時にコストが変わり得ると理解する'],
  ['5', '分析を検証する', 'チャート分析・通貨ペア', '再現可能なルールと記録で検証する'],
] as const;

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: metadata.title,
    description: metadata.description, datePublished: '2026-09-09', dateModified: '2026-09-09',
    mainEntityOfPage: 'https://hanbaijo.com/articles/fx-master-guide-study-order',
    author: { '@type': 'Organization', name: '金融コストウォッチ' },
    publisher: { '@type': 'Organization', name: '金融コストウォッチ' },
  };

  return <article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <p className="page-kicker">FX LEARNING / ROADMAP</p>
    <h1>FX初心者は何から勉強する？<br />9章を5段階で読む順番</h1>
    <p className="lede">チャート手法から始めると、取引数量や損失上限が後回しになりがちです。FPO「FX投資マスターガイド」の収録範囲を、取引を始める前に確認すべき順番へ組み替えます。</p>

    <h2>最初のゴールは「儲け方」ではなく損失額の計算</h2>
    <p>FXは少額の証拠金で大きな金額を取引できるため、値動きの予想より先に、取引単位、1pipの損益、損切りまでの値幅を理解する必要があります。教材を読み終えることではなく、発注前に最大損失を円で書ける状態を最初の到達点にします。</p>
    <div className="formula-box"><code>想定損失 ＝ 1pipの円損益 × 損切り幅（pips）＋ 想定コスト</code><small>スプレッドとスリッページを無視せず、口座資金に対する割合も確認します。</small></div>

    <h2>5段階の学習ロードマップ</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>学ぶ目的</th><th>教材の対応範囲</th><th>次へ進む条件</th></tr></thead><tbody>
      {stages.map(([no, purpose, scope, gate]) => <tr key={no}><td className="ex-name">STEP {no}</td><td>{purpose}</td><td>{scope}</td><td>{gate}</td></tr>)}
    </tbody></table></div></div>

    <h2>STEP 1：FXの仕組みとリスク</h2>
    <p>最初に、通貨を現物で買う取引と、証拠金を預けて差額を決済するFXを区別します。レバレッジは利益だけでなく損失も拡大し、相場急変時にはロスカットが予定価格で成立しない場合があります。</p>
    <p>「最大25倍」は常に25倍で取引する意味ではありません。取引金額を口座の有効証拠金で割った実効レバレッジを、自分の入金額と数量から確認します。</p>
    <p><Link href="/articles/fx-required-margin">1万通貨の必要証拠金を計算する →</Link></p>

    <h2>STEP 2：口座条件と注文</h2>
    <p>比較するのは広告のスプレッドだけではありません。最小取引単位、スプレッドの適用時間、注文方式、スリッページ、ロスカット基準、入出金条件を同じ表にします。</p>
    <div className="callout"><strong>0.2銭は金額へ直す</strong><p>米ドル円0.2銭は、1,000通貨で2円、1万通貨で20円です。1日10往復なら単純計算で200円となり、表示どおりに約定しない場合はさらに差が出ます。</p></div>
    <p><Link href="/fx/usdjpy-spread-comparison">米ドル円の時間帯別スプレッドを比較する →</Link></p>
    <p><Link href="/fx/losscut-comparison">FX会社のロスカット基準を比較する →</Link></p>

    <h2>STEP 3：資金管理を先に固定</h2>
    <p>エントリー前に、1回の許容損失率、損切り幅、取引数量を決めます。口座資金10万円、許容損失1％なら上限は1,000円です。損切り幅が20pipsなら、コストを除いた1pipの損失上限は50円となります。</p>
    <p>必要証拠金を満たす数量と、許容損失に収まる数量は別です。小さい方を採用し、複数ポジションを持つ場合は合計リスクで確認します。</p>
    <p><Link href="/tools/fx-position-size-calculator">許容損失から取引数量を逆算する →</Link></p>

    <h2>STEP 4：経済・金利・為替の関係</h2>
    <p>政策金利、雇用・物価指標、中央銀行発言は為替変動の材料になります。ただし、材料の方向を当てるだけでは十分ではありません。重要指標の前後はスプレッド拡大、スリッページ、注文不成立が起こり得るため、取引を避ける条件も決めます。</p>
    <p><Link href="/articles/fx-spread-time">スプレッドが広がりやすい時間帯を見る →</Link></p>

    <h2>STEP 5：チャート手法を記録で検証</h2>
    <p>チャート分析は、過去の形に名前を付けるだけでは取引ルールになりません。対象通貨、時間足、エントリー、損切り、利益確定、取引しない条件を固定し、同じルールを複数回検証します。</p>
    <p>勝率だけでなく、平均利益、平均損失、最大連敗、スプレッド込みの損益を記録します。期待値がプラスでも、検証回数が少ない場合や相場環境が変わった場合に同じ結果になる保証はありません。</p>
    <p><Link href="/tools/risk-reward-calculator">勝率と損益比から期待値を計算する →</Link></p>

    <h2>実取引前の最終チェック</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>質問</th><th>Yesになるまで行わないこと</th></tr></thead><tbody>
      <tr><td className="ex-name">1pipはいくらか説明できるか</td><td>数量を増やさない</td></tr>
      <tr><td className="ex-name">1回の最大損失を円で決めたか</td><td>新規注文を出さない</td></tr>
      <tr><td className="ex-name">スプレッドの適用時間を確認したか</td><td>表示値を固定費として扱わない</td></tr>
      <tr><td className="ex-name">ロスカット前に損切りする計画か</td><td>必要証拠金ぎりぎりで取引しない</td></tr>
      <tr><td className="ex-name">手法をコスト込みで検証したか</td><td>過去チャートの印象だけで判断しない</td></tr>
    </tbody></table></div></div>

    <section className="article-affiliate" aria-label="FPO FX投資マスターガイドの広告">
      <AffiliateOfferCard offer={AFFILIATE_OFFERS['fpo-fx-guide']} />
      <p className="affiliate-disclosure">FPOへのA8.net広告リンクです。登録等の成果条件を満たすと当サイトが報酬を受け取る場合があります。教材は利益を保証せず、取引判断はご自身で行う必要があります。</p>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fpo.bz/masterguide/" target="_blank" rel="noopener noreferrer">FPO「FX投資マスターガイド無料提供中！」</a></li>
      <li><a href="https://fpo.bz/contents/law/" target="_blank" rel="noopener noreferrer">株式会社FPO「金融商品取引法に基づく表示」</a></li>
    </ul><p>教材の構成とリスク表示は2026年9月9日に公式ページで確認しました。教材の説明は学習順を整理するために参照し、特定の売買手法を推奨するものではありません。</p></section>

    <p><Link href="/articles/fpo-fx-master-guide-before-download">無料教材の登録条件を確認する →</Link></p>
    <p><Link href="/fx">FXの比較・計算ガイドへ戻る →</Link></p>
  </article>;
}
