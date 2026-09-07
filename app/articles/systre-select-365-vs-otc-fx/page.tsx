import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'シストレセレクト365と店頭FXの違い｜取引所FXを選ぶ意味',
  description: 'シストレセレクト365が使う取引所FXくりっく365と店頭FXについて、価格提示、スワップ、手数料、証拠金、口座の違いを整理します。',
};

const ROWS = [
  { item: '取引形態', click: '東京金融取引所の取引所FX', otc: 'FX会社との相対取引' },
  { item: '価格提示', click: '複数のマーケットメイカーの価格から取引所が合成', otc: '各FX会社が提示' },
  { item: 'スワップ', click: '同一通貨ペアの受取・支払は同額の一本値', otc: '受取額と支払額に差がある場合が多い' },
  { item: '取引コスト', click: 'スプレッドと取扱会社の委託手数料等', otc: 'スプレッド、会社により取引手数料等' },
  { item: '証拠金', click: '取引所の基準額に準じ、毎週見直し', otc: '法令の範囲で各社の方式・コースを適用' },
] as const;

export default function Page() {
  return (
    <article>
      <p className="page-kicker">SYSTRE SELECT 365 / MARKET STRUCTURE</p>
      <h1>シストレセレクト365と店頭FXの違い<br />取引所FXを選ぶ意味</h1>
      <p className="lede">シストレセレクト365は、店頭FXではなく東京金融取引所の「くりっく365」で自動売買します。違いは自動・手動だけではなく、価格を提示する仕組み、スワップ、手数料、証拠金にあります。</p>

      <div className="callout"><strong>取引所FXが常に安いとは限らない</strong><p>価格の透明性やスワップの一本値には特徴がありますが、取扱会社の手数料や実際のスプレッドを含めた総額では、取引条件ごとに結果が変わります。</p></div>

      <h2>くりっく365と店頭FXの比較</h2>
      <div className="data-panel"><div className="table-scroll">
        <table className="rates comparison-table"><thead><tr><th>比較項目</th><th>くりっく365</th><th>店頭FX</th></tr></thead><tbody>{ROWS.map((row) => <tr key={row.item}><td className="ex-name">{row.item}</td><td>{row.click}</td><td>{row.otc}</td></tr>)}</tbody></table>
      </div></div>

      <h2>価格は複数の提示から合成される</h2>
      <p>くりっく365では、複数のマーケットメイカーが提示した価格から、投資家にとって最も有利な売値と買値を東京金融取引所が合成して提示します。同じ時点なら、どの取扱会社を経由しても取引所が提示する価格は共通です。</p>
      <p>店頭FXでは各社が自社の取引価格を提示するため、会社ごとにスプレッドや配信価格が異なります。ただし、取引所FXでも相場急変時や流動性が低い通貨ではレートが提示されない場合があります。</p>

      <h2>スワップは一本値</h2>
      <p>くりっく365の同一通貨ペアでは、買いと売りのスワップポイントが同額です。一方が100円受け取るなら、反対側は100円支払う仕組みです。ただし、すべての店頭FXより受取額が多い、または支払額が少ないとは限りません。</p>

      <h2>シストレ利用には専用の契約が必要</h2>
      <p>シストレセレクト365は、フジトミ証券のくりっく365口座に付随する投資助言サービスです。FX口座だけでは利用開始にならず、別途シストレセレクト365の投資顧問契約が必要です。他社FX口座へ自動売買を接続することもできません。</p>
      <div className="fx-metric-grid">
        <article><b>ACCOUNT</b><h3>フジトミ証券のFX口座</h3><p>くりっく365の取引口座を開設し、同口座で取引します。</p></article>
        <article><b>CONTRACT</b><h3>投資顧問契約</h3><p>シストレセレクト365を利用するための契約を別途締結します。</p></article>
        <article><b>STRATEGY</b><h3>選択型の自動売買</h3><p>用意されたストラテジーを選択し、くりっく365口座内で稼働します。</p></article>
        <article><b>COST</b><h3>総コストを確認</h3><p>利用料、スプレッド、スワップ、取引回数を分けて集計します。</p></article>
      </div>

      <h2>選ぶ前の確認項目</h2>
      <ul>
        <li>店頭FXと取引所FXの価格提示方法の違いを理解したか</li>
        <li>委託手数料・利用料・スプレッドを合計したか</li>
        <li>証拠金基準額が毎週変わることを資金計画へ入れたか</li>
        <li>ランキングの過去成績と将来の損益を区別したか</li>
        <li>複数ストラテジーの最大ドローダウンを単純に過小評価していないか</li>
      </ul>

      <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
        <li><a href="https://www.click365.jp/start/start01.html" target="_blank" rel="noopener noreferrer">東京金融取引所「取引所取引と店頭取引の違い」</a></li>
        <li><a href="https://www.click365.jp/about_fx/about_fx04.html" target="_blank" rel="noopener noreferrer">東京金融取引所「くりっく365の特徴とメリット」</a></li>
        <li><a href="https://www.fujitomi.co.jp/stockfx/sys-trade/78015/" target="_blank" rel="noopener noreferrer">フジトミ証券「なぜシストレセレクト365はくりっく365を選んだのか」</a></li>
        <li><a href="https://www.fujitomi.co.jp/systra/faq/" target="_blank" rel="noopener noreferrer">フジトミ証券「シストレセレクト365 よくある質問」</a></li>
      </ul><p>制度は2026年9月7日に確認しました。最新条件は公式サイトと契約書面を優先してください。</p></section>

      <p><Link href="/fx/systre-select-365">シストレセレクト365のコストシートを見る →</Link></p>
      <p><Link href="/articles/systre-select-365-total-cost">シストレセレクト365の総コストを見る →</Link></p>
      <section className="article-affiliate" aria-label="シストレセレクト365の広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['systre-select-365']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると、当サイトが報酬を受け取る場合があります。制度比較とは分けて掲載しています。</p></section>
    </article>
  );
}
