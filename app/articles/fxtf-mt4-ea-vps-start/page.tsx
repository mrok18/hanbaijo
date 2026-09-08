import Link from 'next/link';
import AffiliateOfferCard from '@/components/AffiliateOfferCard';
import { AFFILIATE_OFFERS } from '@/lib/affiliates';

export const metadata = {
  title: 'FXTF MT4でEA自動売買を始める手順｜VPS・コスト・停止対策',
  description: 'FXTF MT4のEA自動売買を、PC版導入、0.01Lot、バックテスト、建玉連動手数料、VPS、停止監視の順で公式情報から整理します。',
};

export default function Page() {
  return <article>
    <p className="page-kicker">FXTF MT4 / EA START GUIDE</p>
    <h1>FXTF MT4でEAを始める<br />VPS費まで先に計算</h1>
    <p className="lede">本記事で扱うFXTF MT4のEAは、PCインストール版で動かします。EAを導入して自動売買をONにするだけでなく、Lot設定、バックテスト、建玉連動手数料、24時間運用するPCまたはVPS、停止後の復旧までを一つの運用手順として準備します。</p>

    <h2>始める前の全体像</h2>
    <div className="data-panel"><div className="table-scroll"><table className="rates comparison-table"><thead><tr><th>段階</th><th>確認すること</th><th>見落とした場合</th></tr></thead><tbody>
      <tr><td className="ex-name">1. 口座・端末</td><td>FXTF MT4口座、PCインストール版</td><td>GXやブラウザ版と混同する</td></tr>
      <tr><td className="ex-name">2. EA</td><td>提供元、対象通貨、時間足、Lot設定</td><td>想定外の数量で発注する</td></tr>
      <tr><td className="ex-name">3. 検証</td><td>バックテスト、デモ、少額運用</td><td>過去成績だけで本番稼働する</td></tr>
      <tr><td className="ex-name">4. コスト</td><td>スプレッド、建玉連動手数料、VPS</td><td>利益が固定費・取引費に負ける</td></tr>
      <tr><td className="ex-name">5. 常時稼働</td><td>PCまたはWindows VPS、再起動設定</td><td>通信断・更新後にEAが止まる</td></tr>
      <tr><td className="ex-name">6. 監視</td><td>自動売買表示、接続、ログ、注文履歴</td><td>停止や注文エラーを放置する</td></tr>
    </tbody></table></div></div>

    <h2>1．MT4 PCインストール版へログインする</h2>
    <p>FXTF公式からPCインストール版を取得し、MT4専用アカウント番号、パスワード、ライブ口座では「FXTF-Live」サーバーを選んでログインします。スマートフォン版やPCブラウザ版は裁量確認に使えますが、EAを動かす環境はPCインストール版です。</p>

    <h2>2．EAを追加し、Lot設定を確認する</h2>
    <p>MT4で「ファイル」からデータフォルダを開き、対象EAをMQL4内のExpertsフォルダへ配置して再起動します。「自動売買」をONにし、ナビゲーターからEAをチャートへ適用します。外部EAの動作はFXTFが保証するものではないため、提供元、ファイル、対象通貨ペア、時間足、最大保有数、損切り設定を先に確認します。</p>
    <div className="callout"><strong>0.01Lot＝1,000通貨</strong><p>FXTF MT4標準コースは1Lot＝10万通貨、最小0.01Lot＝1,000通貨です。他社MT4とLot定義が異なる場合があるため、EAの初期Lotをそのまま本番投入しないでください。</p></div>

    <h2>3．バックテストは将来成績ではなく動作確認に使う</h2>
    <p>FXTFはMT4のストラテジーテスターを使ったバックテスト手順を公開しています。ただし結果は過去データに基づき、将来の成績を保証しません。まず注文方向、Lot、損切り、利確、最大建玉、取引時間が設計どおりかを確認し、その後にデモ口座または許容損失を抑えた数量で稼働させます。</p>

    <h2>4．取引コストと固定費を合算する</h2>
    <p>EAの成績表からスプレッドだけを引くのでは足りません。FXTFでは建玉連動手数料が新規取引時に発生し、同一銘柄・同一売買方向の保有数量と新規注文数量の合計で金額が変わります。さらにスワップ、スリッページ、EA購入費、VPS本体、Windows Serverを操作するためのRDSライセンスを合算します。</p>
    <div className="formula-box"><code>月間差引 ＝ EAの取引損益 − スプレッド相当額 − 建玉連動手数料 − 保有費 − EA・VPS固定費</code><small>利益を保証する式ではなく、費用の見落としを防ぐための整理です。</small></div>

    <h2>5．24時間運用はVPSか自宅PCかを決める</h2>
    <p>FXTF公式は、EAで24時間の取引機会を捉える場合に別途VPSが必要と案内しています。自宅PCでもEAは動かせますが、電源、スリープ、回線、Windows更新、外出中の復旧を自分で管理します。VPSを使う場合も停止しない保証はないため、取引端末数に合うメモリと再起動後の自動起動を設定します。</p>
    <div className="fx-metric-grid">
      <article><b>HOME PC</b><h3>固定費を抑える</h3><p>停電・回線・更新・遠隔復旧を自分で管理</p></article>
      <article><b>WINDOWS VPS</b><h3>外出中も常時稼働</h3><p>本体料金、RDS、再起動設定が必要</p></article>
      <article><b>MONITORING</b><h3>どちらも監視</h3><p>接続、EA表示、ログ、注文履歴を確認</p></article>
    </div>

    <h2>6．再起動・通信断後の確認手順を決める</h2>
    <p>FXTF MT4には日次メンテナンスがあり、毎週土曜日8時〜10時の間にもサーバーが一時的に切断されると案内されています。WindowsやVPSの再起動後は、MT4が起動している、正しい口座へ接続している、自動売買が有効、対象チャートにEAが載っている、ログにエラーがない、の順で確認します。</p>

    <h2>MT5へ移す場合はEAをそのまま使えない</h2>
    <p>FXTFは2026年9月にMT5の提供を開始しましたが、MT4とMT5は実行環境が異なります。MT4用のEAやインディケーターをMT5へそのまま導入することはできません。既存EAを使うならMT4で継続し、MT5へ移行する場合はMQL5対応版の有無と設定差を提供元へ確認します。</p>

    <section className="provider-offer" aria-label="FXTFとABLENET VPSの広告">
      <div><p className="section-index">PARTNER OFFERS</p><h2>口座と稼働環境の最新条件を確認</h2><p>以下はA8.netの提携広告です。報酬は記事内容や計算結果に影響しません。</p></div>
      <div className="affiliate-grid">
        <AffiliateOfferCard offer={AFFILIATE_OFFERS.fxtf} />
        <AffiliateOfferCard offer={AFFILIATE_OFFERS['ablenet-vps']} />
      </div>
    </section>

    <section className="article-sources" aria-labelledby="sources"><h2 id="sources">参照した公式資料</h2><ul>
      <li><a href="https://www.fxtrade.co.jp/system/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引システム・EA」</a></li>
      <li><a href="https://www.fxtrade.co.jp/mt4-intro/" target="_blank" rel="noopener noreferrer">FXTF「MT4取引概要」</a></li>
      <li><a href="https://www.fxtrade.co.jp/pdf/FXTF_MT4_PC.pdf" target="_blank" rel="noopener noreferrer">FXTF「MT4 PCインストール版マニュアル」</a></li>
      <li><a href="https://www.fxtrade.co.jp/doc/mt4/mt4_test_manual.pdf" target="_blank" rel="noopener noreferrer">FXTF「MT4バックテストの方法」</a></li>
      <li><a href="https://www-hp.fxtrade.co.jp/2026-09-01/" target="_blank" rel="noopener noreferrer">FXTF「MT5サービス提供開始」</a></li>
      <li><a href="https://www.ablenet.jp/vps/fx_guide.html" target="_blank" rel="noopener noreferrer">ABLENET「FX自動売買VPSガイド」</a></li>
    </ul><p>サービス条件は2026年9月8日に公式情報で確認しました。EA・VPSは利益、連続稼働、注文、約定を保証しません。利用前にEA提供元と各社の最新条件を確認してください。</p></section>

    <p className="affiliate-disclosure">FXは元本および利益が保証されず、証拠金を上回る損失が生じる場合があります。契約締結前交付書面を確認し、許容損失の範囲で設定してください。</p>
    <p><Link href="/fx/fxtf">FXTFの取引条件を見る →</Link></p>
    <p><Link href="/articles/fxtf-position-fee-calculation">建玉連動手数料の計算方法を見る →</Link></p>
    <p><Link href="/tools/fx-vps-cost-calculator">VPS・RDS込み月額を計算する →</Link></p>
    <p><Link href="/articles/fx-vps-auto-start-update">再起動後にEAを止めない手順を見る →</Link></p>
  </article>;
}
