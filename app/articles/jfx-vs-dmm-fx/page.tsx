import Link from 'next/link';

export const metadata = {
  title: 'JFXとDMM FXを比較｜取引単位・スプレッド・ロスカットの違い',
  description: 'JFX MATRIX TRADERとDMM FXを公式条件で比較。1,000通貨対応、通常・ミニ銘柄、米ドル円スプレッドの時間帯、ロスカット基準を整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FX / JFX VS DMM</p>
    <h1>JFXとDMM FXを比較<br />取引単位と時間帯が違う</h1>
    <p className="lede">通常の米ドル/円は両社とも公称0.2銭ですが、適用時間と最低取引単位が異なります。DMM FXのミニ銘柄には基準スプレッドがないため、「1,000通貨で0.2銭」とは限らない点も含めて比較します。</p>

    <h2>主要条件の比較</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較</th><th>JFX</th><th>DMM FX</th></tr></thead><tbody>
      <tr><td className="ex-name">最低取引単位</td><td>基本1,000通貨</td><td>ミニ4銘柄は1,000通貨、通常は1万通貨</td></tr>
      <tr><td className="ex-name">取引銘柄</td><td>通常46＋大口6</td><td>通常23＋ミニ4＋ラージ4</td></tr>
      <tr><td className="ex-name">通常USD/JPY</td><td>0.2銭</td><td>0.2銭</td></tr>
      <tr><td className="ex-name">公称幅の時間</td><td>9時〜翌3時</td><td>9時〜翌5時</td></tr>
      <tr><td className="ex-name">ロスカット</td><td>有効比率100％未満</td><td>証拠金維持率50％以下</td></tr>
      <tr><td className="ex-name">特徴</td><td>スキャルピングを明示</td><td>通常・ミニ・ラージを分離</td></tr>
    </tbody></table></div></div>

    <h2>1,000通貨の扱いが異なる</h2>
    <p>JFXは基本1Lot＝1,000通貨ですが、MXN/JPYなど6通貨ペアは1Lot＝1万通貨です。DMM FXは通常通貨ペアが1Lot＝1万通貨で、米ドル/円、ユーロ/円、ポンド/円、豪ドル/円のミニ銘柄だけが1Lot＝1,000通貨です。</p>
    <div className="callout"><strong>DMM FXのミニ銘柄は基準スプレッドなし</strong><p>DMM FX公式は、ミニ・ラージ通貨ペアには基準スプレッド（原則固定）がないと明記しています。通常USD/JPYの0.2銭を、USM/JPYの1,000通貨取引へそのまま当てはめないでください。</p></div>

    <h2>通常USD/JPYの1万通貨なら約20円</h2>
    <p>公称0.2銭が維持されると仮定すると、1万通貨のスプレッド相当額は両社とも約20円です。JFXでは10Lot、DMM FXの通常銘柄では1Lotに相当します。</p>
    <div className="formula-box"><code>0.2銭 ÷ 100 × 1万通貨 ＝ 約20円</code><small>スリッページを含まない概算。実際の提示幅と約定価格は変動します。</small></div>

    <h2>DMM FXはコアタイムが翌5時まで</h2>
    <p>DMM FXの通常USD/JPYは9時〜翌5時が0.2銭のコアタイムで、5時〜9時は0.2〜3.9銭です。JFXは9時〜翌3時が0.2銭、3時〜9時が5.9銭です。深夜3時以降に取引する人は、この適用時間差を取引記録に反映します。</p>
    <div className="fx-metric-grid">
      <article><b>JFX CORE</b><h3>9:00〜翌3:00</h3><p>通常USD/JPYは0.2銭</p></article>
      <article><b>JFX EARLY</b><h3>3:00〜9:00</h3><p>公式表示は5.9銭</p></article>
      <article><b>DMM CORE</b><h3>9:00〜翌5:00</h3><p>通常USD/JPYは0.2銭</p></article>
      <article><b>DMM EARLY</b><h3>5:00〜9:00</h3><p>公式表示は0.2〜3.9銭</p></article>
    </div>

    <h2>ロスカット基準は数字だけで比較しない</h2>
    <p>JFXは有効比率100％未満、DMM FXは証拠金維持率50％以下がロスカット基準です。ただし算式や追証制度が異なるため、100と50だけで安全性を比較できません。DMM FXには毎営業日の追加証拠金判定もあり、JFXも急変時には基準より不利な価格で決済され不足金が残る可能性があります。</p>

    <h2>用途別の選び方</h2>
    <p>多数の通貨ペアを基本1,000通貨で裁量取引し、短期売買機能を重視するならJFXが比較候補です。主要4通貨ペアだけを1,000通貨のミニ銘柄で試す、または通常・ラージ銘柄を分けて使うならDMM FXが候補になります。最終的にはリアルタイムの提示幅と自分の取引時間で判断します。</p>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.jfx.co.jp/trading_rule/" target="_blank" rel="noopener noreferrer">JFX「取引ルール」</a></li>
      <li><a href="https://www.jfx.co.jp/trading_rule/spread/" target="_blank" rel="noopener noreferrer">JFX「スプレッド情報」</a></li>
      <li><a href="https://fx.dmm.com/fx/service/outline/" target="_blank" rel="noopener noreferrer">DMM FX「サービス概要」</a></li>
      <li><a href="https://fx.dmm.com/fx/aboutfx/spread/" target="_blank" rel="noopener noreferrer">DMM FX「スプレッドとは？」</a></li>
      <li><a href="https://fx.dmm.com/support/faqs/article/00128/" target="_blank" rel="noopener noreferrer">DMM FX FAQ「ロスカットとは」</a></li>
    </ul><p>比較条件は2026年9月8日に各社公式ページで確認しました。スプレッドとサービス条件は変更されるため、申込・発注前に最新情報を確認してください。</p></section>

    <p><Link href="/fx/jfx">JFXの取引条件を見る →</Link></p>
    <p><Link href="/fx/dmm-fx">DMM FXの取引条件を見る →</Link></p>
    <p><Link href="/articles/dmm-fx-mini-normal-large">DMM FXのミニ・通常・ラージを詳しく見る →</Link></p>
    <p><Link href="/fx/usdjpy-spread-comparison">米ドル円のスプレッドを比較する →</Link></p>
  </article>;
}
