import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/articles/ablenet-win1-vs-win2' },
  title: 'ABLENET Win1とWin2の違い｜MT4・MT5何個まで？',
  description: 'ABLENET VPSのWin1とWin2を、CPU、メモリ、MT4・MT5稼働目安、契約時・更新後料金、RDS込み年額で比較します。',
};

const rows = [
  { item: '仮想CPU', win1: '2コア', win2: '3コア' },
  { item: 'メモリ', win1: '2GB（増量中）', win2: '3.5GB（増量中）' },
  { item: 'SSD', win1: '60GB', win2: '120GB' },
  { item: 'MT4/MT5稼働目安', win1: '1〜2個', win2: '2〜3個' },
  { item: '契約時年払い総額', win1: '19,036円', win2: '24,829円' },
  { item: '更新後年払い総額', win1: '26,484円', win2: '34,368円' },
] as const;

export default function Page() {
  return <article><p className="page-kicker">ABLENET VPS / WIN1 VS WIN2</p><h1>Win1とWin2は何が違う？<br />MT4・MT5の数だけで決めない</h1><p className="lede">Win1は軽量な構成を小さく始める候補、Win2は複数EA・複数口座へ広げる余地を持たせる候補です。公式の稼働目安は保証値ではないため、メモリ使用量と更新後の年額まで確認します。</p>

    <h2>Win1とWin2の公式条件</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>比較項目</th><th>Win1</th><th>Win2</th></tr></thead><tbody>{rows.map((row) => <tr key={row.item}><td className="ex-name">{row.item}</td><td>{row.win1}</td><td>{row.win2}</td></tr>)}</tbody></table></div><p className="panel-note">2026年9月8日確認。料金は税込。キャンペーン、CPU・メモリ増量、契約期間は変更される場合があります。</p></div>

    <h2>稼働個数は「軽量・最適化済み」の目安</h2><p>ABLENETのFX利用ガイドでは、Win1はMT4・MT5を1〜2個、Win2は2〜3個動かす目安が示されています。ただし前提はWindows Server 2019、チャート・音声・気配値を最適化し、軽量EAを使い、他アプリを利用しない場合です。</p><div className="callout"><strong>同じ1個でも負荷は同じではありません</strong><p>表示するチャート数、通貨ペア、インジケーター、EAの計算量、履歴データ、複数口座への接続で使用量は変わります。個数だけでなく、試用中のCPU・メモリと注文ログを確認します。</p></div>

    <h2>RDS込み年額の差は契約時5,793円</h2><p>FXアプリ利用のためRDSライセンスを1人分追加すると、契約時の単純合計はWin1が34,876円、Win2が40,669円です。差額は年5,793円、月平均で約483円です。</p><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>年払い＋RDS 1人</th><th>Win1</th><th>Win2</th><th>差額</th></tr></thead><tbody><tr><td className="ex-name">契約時</td><td>34,876円</td><td>40,669円</td><td>5,793円</td></tr><tr><td className="ex-name">更新後</td><td>42,324円</td><td>50,208円</td><td>7,884円</td></tr></tbody></table></div><p className="panel-note">VPS年払い総額にRDS月額1,320円×12か月を加えた当サイトの単純計算。実際の請求条件は申込画面を優先してください。</p></div>

    <h2>選び方は「現在＋近い将来」で決める</h2><div className="fx-metric-grid"><article><b>WIN1</b><h3>1口座・軽量EAから</h3><p>MT4・MT5を1個、少数チャートで始め、試用中に負荷を確認する場合。</p></article><article><b>WIN2</b><h3>複数口座へ拡張</h3><p>2個以上の端末、複数EA、今後の追加運用を想定して余白を持たせる場合。</p></article><article><b>CHECK</b><h3>最大負荷を見る</h3><p>通常時だけでなく、相場急変・履歴取得・更新時のCPUとメモリを確認します。</p></article><article><b>REVIEW</b><h3>更新前に再評価</h3><p>更新後料金へ変わる前に、実績と必要スペックを見直します。</p></article></div>

    <section className="article-affiliate" aria-label="ABLENET VPSの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。プラン比較と料金計算は広告報酬から独立して作成しています。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.ablenet.jp/vps/fx_guide.html" target="_blank" rel="noopener noreferrer">ABLENET VPS「FX自動売買ユーザー利用ガイド」</a></li><li><a href="https://www.ablenet.jp/vps/service/plan_fee.html" target="_blank" rel="noopener noreferrer">ABLENET VPS「ご利用料金」</a></li><li><a href="https://www.ablenet.jp/vps/service/campaign_memory.html" target="_blank" rel="noopener noreferrer">ABLENET VPS「メモリ増量キャンペーン」</a></li></ul><p>仕様と料金は2026年9月8日に確認しました。FX利用ガイドと最新料金表で表記時点が異なる場合は、申込時の最新プラン仕様を優先してください。</p></section>
    <p><Link href="/tools/fx-vps-cost-calculator">自分の取引回数でVPS費用を計算する →</Link></p><p><Link href="/articles/fx-vps-rds-license">RDSライセンス費用を確認する →</Link></p><p><Link href="/fx/ablenet-vps">ABLENET VPSの条件一覧へ →</Link></p>
  </article>;
}
