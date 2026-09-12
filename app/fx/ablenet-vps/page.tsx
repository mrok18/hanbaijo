import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  alternates: { canonical: '/fx/ablenet-vps' },
  title: 'ABLENET VPSのFX自動売買費用｜RDS込み月額と必要スペック',
  description: 'ABLENET VPSのWindowsプランを、契約時・更新後料金、RDSライセンス、MT4・MT5の稼働目安、セキュリティ運用から整理します。',
};

const plans = [
  { name: 'Win1', cpu: '2コア', memory: '2GB', terminals: '1〜2個', contract: '1,587円〜', renewal: '2,208円〜' },
  { name: 'Win2', cpu: '3コア', memory: '3.5GB', terminals: '2〜3個', contract: '2,070円〜', renewal: '2,865円〜' },
  { name: 'Win3', cpu: '4コア', memory: '6GB', terminals: '4〜5個', contract: '3,490円〜', renewal: '5,098円〜' },
  { name: 'Win4', cpu: '8コア', memory: '10GB', terminals: '6〜12個', contract: '5,325円〜', renewal: '7,594円〜' },
] as const;

export default function Page() {
  return <div className="provider-page fx-provider-page">
    <section className="provider-hero provider-compact-hero provider-hero-purple">
      <div><p className="page-kicker">FX AUTO TRADING / VPS COST SHEET</p><h1>ABLENET VPSの費用を、<br />RDS込みで見る。</h1><p className="lede">MT4・MT5・EAを常時動かすWindows VPSです。広告上の月額だけでなく、更新後料金、リモート利用に必要なRDSライセンス、稼働させる端末数を分けて比較します。</p><div className="hero-actions"><Link className="button primary" href="/tools/fx-vps-cost-calculator">月額総コストを計算</Link><Link className="button secondary" href="/articles/fx-vps-total-cost">費用の内訳を読む</Link></div></div>
      <aside className="provider-stamp"><span>OFFICIAL FACTS</span><strong>2026.09.08 確認</strong><dl><div><dt>Windows</dt><dd>7プラン</dd></div><div><dt>試用</dt><dd>最大10日間</dd></div><div><dt>最低利用期間</dt><dd>なし</dd></div><div><dt>RDS</dt><dd>月1,320円/人</dd></div></dl></aside>
    </section>

    <section className="provider-section"><p className="section-index">01 / PLAN MAP</p><h2>MT4・MT5の数から、余裕を持って選ぶ</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>プラン</th><th>CPU</th><th>メモリ</th><th>MT4/MT5目安</th><th>契約時月額換算</th><th>更新後月額換算</th></tr></thead><tbody>{plans.map((plan) => <tr key={plan.name}><td className="ex-name">{plan.name}</td><td>{plan.cpu}</td><td>{plan.memory}</td><td>{plan.terminals}</td><td>{plan.contract}</td><td>{plan.renewal}</td></tr>)}</tbody></table></div><p className="panel-note">料金は年払い総額の月額換算・税込。MT4/MT5数は軽量EA、最適化済み設定、他アプリなしの場合の公式参考値で、動作保証ではありません。</p></div></section>

    <section className="provider-section provider-split"><div><p className="section-index">02 / HIDDEN FIXED COST</p><h2>FX利用ではRDS料金を加算する</h2><p>Windows Serverのデスクトップへ接続してMT4などのアプリを使う場合、ABLENETは利用人数分のRDSライセンスが必要と案内しています。1ユーザー月額1,320円で、VPS本体料金とは別です。</p><div className="formula-box"><code>実質月額 ＝ Windowsプラン料金 ＋ RDS 1,320円 × 利用人数</code><small>専らサーバー管理目的の接続は別扱い。FXアプリ利用時は公式条件を優先してください。</small></div></div><div className="provider-checklist"><h3>契約前の確認項目</h3><ul><li>契約時価格と更新後価格</li><li>年払い・半年払い・月払いの総額</li><li>RDSライセンスの人数</li><li>EA・チャート・口座ごとの負荷</li><li>SSD容量とバックアップ方法</li></ul><p>最安プランだけでなく、更新後も運用を続ける前提の年額で比べます。</p></div></section>

    <section className="provider-section"><p className="section-index">03 / OPERATING RISK</p><h2>VPSを契約しても「止まらない」とは限らない</h2><div className="provider-fact-grid"><article><b>AUTO START</b><h3>再起動後の自動起動</h3><p>メンテナンスや障害後の再起動に備え、MT4・MT5とEAの自動起動を設定します。</p></article><article><b>UPDATE</b><h3>更新時間を管理</h3><p>Windows更新は重要です。公式ガイドは取引のない土日に適用・再起動する運用を案内しています。</p></article><article><b>CAPACITY</b><h3>負荷の余白</h3><p>EAのロジック、チャート数、履歴データ、他アプリで必要メモリは変わります。</p></article><article><b>MONITORING</b><h3>稼働確認</h3><p>接続、EAの稼働表示、ジャーナル、注文エラーを定期確認し、停止を早く検知します。</p></article></div><div className="callout"><strong>稼働率99.99％以上は、売買の成功率ではありません</strong><p>サーバー稼働実績と、取引ツール・EA・通信先・証券会社側の稼働は別です。VPSを使っても注文、約定、利益は保証されません。</p></div></section>

    <section className="provider-source" aria-label="ABLENET VPS公式資料"><div><span>PRIMARY SOURCES</span><strong>ABLENET VPS 公式情報</strong></div><div className="provider-source-links"><a href="https://www.ablenet.jp/vps/fx_guide.html" target="_blank" rel="noopener noreferrer">FX自動売買ガイド ↗</a><a href="https://www.ablenet.jp/vps/service/plan_fee.html" target="_blank" rel="noopener noreferrer">料金表 ↗</a><a href="https://www.ablenet.jp/vps/faq/faq01.html" target="_blank" rel="noopener noreferrer">申込FAQ ↗</a></div></section>

    <section className="provider-offer" aria-label="ABLENET VPSの広告"><div><p className="section-index">04 / PARTNER LINK</p><h2>最新料金と試用条件を公式サイトで確認</h2><p>以下はA8.netの提携広告です。広告報酬は、費用計算や掲載内容に影響しません。</p></div><AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} /></section><p className="affiliate-disclosure">VPSは自動売買の利益や約定を保証しません。EAの提供元、証券会社、OS、RDSの利用条件を個別に確認してください。</p>
    <section className="provider-section"><p className="section-index">RELATED</p><h2>プラン選びから停止対策まで確認する</h2><div className="provider-directory comparison-guide-directory"><Link href="/articles/fxtf-mt4-ea-vps-start"><span>FXTF MT4 / EA</span><h3>FXTFでEA自動売買を始める</h3><p>導入、0.01Lot、VPS、停止監視を整理</p><b>記事を読む →</b></Link><Link href="/tools/fx-vps-cost-calculator"><span>CALCULATOR</span><h3>VPS月額・年額計算機</h3><p>本体、RDS、取引回数、自宅PC電気代を入力</p><b>計算する →</b></Link><Link href="/articles/fx-vps-total-cost"><span>TOTAL COST</span><h3>FX自動売買VPSの総コスト</h3><p>更新価格と隠れた固定費を整理</p><b>記事を読む →</b></Link><Link href="/articles/ablenet-win1-vs-win2"><span>PLAN CHOICE</span><h3>Win1とWin2を比較</h3><p>端末数、メモリ、RDS込み年額を確認</p><b>記事を読む →</b></Link><Link href="/articles/fx-vps-rds-license"><span>WINDOWS LICENSE</span><h3>RDSライセンスとは</h3><p>必要になる接続と人数別料金を整理</p><b>記事を読む →</b></Link><Link href="/articles/fx-vps-vs-home-pc"><span>VPS VS PC</span><h3>VPSと自宅PCの違い</h3><p>固定費だけでなく停止・復旧まで比較</p><b>記事を読む →</b></Link><Link href="/articles/fx-vps-auto-start-update"><span>OPERATIONS</span><h3>再起動後にEAを止めない</h3><p>自動起動、更新、ログ確認の手順</p><b>記事を読む →</b></Link></div></section>
    <p className="provider-back"><Link href="/fx">FXコスト比較へ戻る →</Link></p>
  </div>;
}
