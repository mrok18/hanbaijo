import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FX VPSのRDSライセンスとは？月1,320円を計算',
  description: 'ABLENETのWindows VPSでMT4・MT5を使う場合のRDSライセンスを、必要になる接続、利用人数、月額・年額、注意点から整理します。',
};

export default function Page() {
  return <article><p className="page-kicker">WINDOWS VPS / RDS LICENSE</p><h1>FX VPSのRDSライセンスとは？<br />本体料金とは別に計算する</h1><p className="lede">Windows Serverへリモートデスクトップ接続し、MT4・MT5などを利用するためのライセンスです。ABLENETではリモート接続する利用者の人数分が必要と案内され、1人あたり月額1,320円です。</p>

    <h2>RDSが必要になる接続</h2><p>ABLENETの公式案内では、Windows Serverへリモートデスクトップ接続してMT4などのアプリケーションを利用する場合、利用人数分のRDSライセンスが必要です。専らサーバー管理を目的とする接続は除外されますが、FXアプリの運用は管理目的だけとは扱われません。</p><div className="callout"><strong>VPSの契約人数ではなく、接続する利用者数で考える</strong><p>1人で複数のMT4・MT5を動かす場合と、複数人が接続する場合では必要ライセンス数の考え方が異なります。判断が難しい場合は申込前に提供会社へ用途を伝えて確認します。</p></div>

    <h2>人数別の固定費</h2><div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>RDS利用人数</th><th>月額</th><th>6か月</th><th>12か月</th></tr></thead><tbody><tr><td className="ex-name">1人</td><td>1,320円</td><td>7,920円</td><td>15,840円</td></tr><tr><td className="ex-name">2人</td><td>2,640円</td><td>15,840円</td><td>31,680円</td></tr></tbody></table></div><p className="panel-note">月額1,320円/ユーザーを単純計算。料金は税込、2026年9月8日確認。</p></div>

    <h2>Win1なら契約時月額換算2,907円から</h2><p>Win1の年払い契約時価格は月額換算1,587円です。RDSを1人分加えると月額換算2,907円、年額換算34,876円になります。更新後はVPS本体が月額換算2,208円となるため、RDS込みでは3,528円、年額42,324円です。</p><div className="formula-box"><code>1,587円 ＋ 1,320円 ＝ 2,907円/月</code><code>2,208円 ＋ 1,320円 ＝ 3,528円/月（更新後）</code><small>年払い総額の月額換算を使用。契約期間や請求方法で実際の支払額は異なります。</small></div>

    <h2>「切断」と「ログオフ・シャットダウン」を分ける</h2><p>ABLENETのWindows Serverサポートでは、手元PCの電源を切る、またはリモートデスクトップ画面を閉じても、VPS上のWindows Serverとアプリケーションは稼働を続けると説明されています。一方、リモート画面からログオフやシャットダウンを実行すると、稼働中のアプリも停止します。</p><ul><li>日常の退出は接続を閉じる操作とログオフを混同しない</li><li>再起動時はMT4・MT5・EAの復帰を確認する</li><li>複数人利用では人数分のRDS条件を確認する</li><li>更新後のVPS料金とRDSを合わせて予算化する</li></ul>

    <section className="article-affiliate" aria-label="ABLENET VPSの広告"><AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} /><p className="affiliate-disclosure">広告リンクから申込みが成立すると当サイトが報酬を受け取る場合があります。ライセンス条件と費用計算は公式資料を基準に整理しています。</p></section>
    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul><li><a href="https://www.ablenet.jp/vps/service/plan_fee.html" target="_blank" rel="noopener noreferrer">ABLENET VPS「ご利用料金」</a></li><li><a href="https://www.ablenet.jp/vps/fx_guide.html" target="_blank" rel="noopener noreferrer">ABLENET VPS「FX自動売買ユーザー利用ガイド」</a></li><li><a href="https://www.ablenet.jp/vps/support/vps_win.html" target="_blank" rel="noopener noreferrer">ABLENET VPS「Windows Server関連」</a></li></ul><p>RDS料金と利用条件は2026年9月8日に確認しました。利用方法による要否は提供会社の最新案内を優先してください。</p></section>
    <p><Link href="/tools/fx-vps-cost-calculator">RDS人数を変えて総コストを計算する →</Link></p><p><Link href="/articles/ablenet-win1-vs-win2">Win1とWin2の料金・スペックを比較する →</Link></p><p><Link href="/articles/fx-vps-auto-start-update">再起動後の自動起動を確認する →</Link></p><p><Link href="/fx/ablenet-vps">ABLENET VPSの公式条件一覧へ →</Link></p>
  </article>;
}
