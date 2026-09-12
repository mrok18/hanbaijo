import Link from 'next/link';
import { MARKET_CATALOG } from '@/lib/market-data/catalog';

export const metadata = {
  alternates: { canonical: '/markets' },
  title: '対象商品と開発状況',
  description: '金融コストウォッチが扱う金融商品、比較するコスト、データ整備の進捗を公開します。',
};

export default function Markets() {
  return (
    <div className="content-page markets-page">
      <p className="page-kicker">COVERAGE &amp; STATUS</p>
      <h1>対象商品と開発状況</h1>
      <p className="lede">
        金融商品ごとに、実際に差が出るコストは異なります。ひとつのランキングに押し込まず、
        同じ条件で比較できる項目だけを測定・整理します。未公開のデータは未公開だと明示します。
      </p>

      <div className="status-grid">
        {MARKET_CATALOG.map((market) => (
          <section className={`status-card ${market.stage === 'design' || market.stage === 'research' ? 'planned' : market.stage === 'building' ? 'next' : 'live'}`} key={market.code}>
            <div className="status-card-head">
              <span>{market.code}</span>
              <b>{market.stage === 'live' ? '計測中' : market.stage === 'building' ? '開発中' : market.stageLabel}</b>
            </div>
            <h2>{market.name}</h2>
            <p>{market.summary}</p>
            <ul>
              {market.metrics.map((metric) => <li key={metric}>{metric}</li>)}
            </ul>
            {market.href && <Link href={market.href}>{market.stage === 'live' ? '現在の実測値を見る' : '公開中の内容を見る'} →</Link>}
          </section>
        ))}
      </div>

      <section className="content-section">
        <p className="section-index">PRIORITY</p>
        <h2>拡張の順番</h2>
        <ol className="roadmap-list">
          <li>
            <b>01</b>
            <div><strong>各商品の比較基準を公開</strong><p>FX、CFD、株式、先物について、何を同じ条件にそろえるかを先に公開します。</p></div>
          </li>
          <li>
            <b>02</b>
            <div><strong>同じ金額条件のコスト計算機</strong><p>取引金額と保有期間を揃え、スプレッド・手数料・金利を円換算します。<br /><Link href="/tools/cost-calculator">公開版を使う →</Link></p></div>
          </li>
          <li>
            <b>03</b>
            <div><strong>許諾済みデータを実測へ</strong><p>保存・加工・商用公開の条件を確認できた提供元から、時間帯別の計測を追加します。</p></div>
          </li>
        </ol>
      </section>

      <div className="transparency-note">
        <strong>表示ルール</strong>
        <p>
          「計測中」は自動取得データを継続保存している状態、「開発中」は計測コードを準備している状態、
          「設計中・調査中」は比較条件と取得元を検証している状態です。予定は品質確認の結果により変更する場合があります。
        </p>
      </div>
    </div>
  );
}
