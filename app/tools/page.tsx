import Link from 'next/link';

export const metadata = {
  title: '金融コスト計算ツール｜FX・CFD・株式・先物',
  description: 'FX・CFD・米国株・国内株・先物のスプレッド、手数料、証拠金、為替コスト、値幅損益を円換算できる無料計算ツールの一覧です。',
};

const tools = [
  { href: '/tools/fx-tax-calculator', tag: 'FX / TAX', title: '国内FX税金計算シミュレーター', description: '年間確定損益、必要経費、通算損失、繰越損失から、課税所得と所得税・復興特別所得税・地方税を概算します。', scope: '2026年分・20.315％' },
  { href: '/tools/fx-spread-annual-cost-calculator', tag: 'FX / ANNUAL COST', title: 'FXスプレッド年間コスト比較計算機', description: '2つのスプレッド、数量、1日の往復回数、取引日数から、1回・月間・年間のコストと差額を計算します。', scope: '0.1銭差を年間換算' },
  { href: '/tools/dmm-cfd-22-products-calculator', tag: 'CFD / DMM 22 PRODUCTS', title: 'DMM CFD 22銘柄計算機', description: 'Index 8銘柄とCommodity 14銘柄の価格・Lot数・円換算レートから、必要証拠金、1ポイント・1ティック損益、資金使用率を計算します。', scope: '全22銘柄・通貨換算対応' },
  { href: '/tools/dmm-cfd-tick-value-calculator', tag: 'CFD / DMM 14 PRODUCTS', title: 'DMM CFD 1ティック損益計算機', description: '商品14銘柄の呼値と取引単位を自動反映し、1ティック価値、買い・売りの円換算損益、コスト差引後を計算します。', scope: '商品14銘柄・最小値幅対応' },
  { href: '/tools/commodity-cfd-price-move-calculator', tag: 'CFD / PRICE MOVE', title: '商品CFD値動き損益計算機', description: '金・銀・原油・天然ガスの新規価格と決済価格から、買い・売りの円換算損益、コスト差引後、損益分岐値幅を計算します。', scope: '共通4商品・売買方向対応' },
  { href: '/tools/commodity-cfd-provider-cost-comparison', tag: 'CFD / PROVIDER COMPARE', title: '商品CFD 2社比較計算機', description: 'FXTF MT5とDMM CFDで共通する金・銀・原油・天然ガスを、スプレッド、新規手数料、保有費まで同じ条件で比較します。', scope: '共通4商品・2社比較' },
  { href: '/tools/gold-cfd-provider-cost-comparison', tag: 'CFD / PROVIDER COMPARE', title: '金CFD 2社比較計算機', description: 'FXTF MT5とDMM CFDの金1Lotを、スプレッド、新規手数料、保有費、必要証拠金まで同じ条件で円換算します。', scope: '金CFD・2社の総コスト' },
  { href: '/tools/fxtf-mt5-margin-calculator', tag: 'CFD / FXTF MT5', title: 'FXTF MT5証拠金計算機', description: '商品CFD4銘柄とBTC/JPY・BTC/USDについて、価格、Lot数、円換算レートから想定元本と個人の必要証拠金を計算します。', scope: '商品4銘柄・BTC 2通貨建て' },
  { href: '/tools/jfx-fxtf-cost-comparison', tag: 'FX / PROVIDER COMPARE', title: 'JFX・FXTFコスト比較計算機', description: '同じ数量・往復回数で、スプレッド、想定約定差、FXTFの建玉連動手数料を円換算して比較します。', scope: '2社の総コストを比較' },
  { href: '/tools/fx-vps-cost-calculator', tag: 'FX AUTO TRADING', title: 'FX自動売買 VPSコスト計算機', description: 'VPS本体、RDSライセンス、取引回数から月額・年額・1往復あたりのインフラ費を計算します。', scope: 'VPSと自宅PCを比較' },
  { href: '/tools/jfx-scalping-cost-calculator', tag: 'FX / JFX', title: 'JFX短期売買コスト計算機', description: '米ドル/円の時間帯別スプレッド、数量、往復回数、想定スリッページから累積コストを計算します。', scope: '0.2銭・早朝5.9銭' },
  { href: '/tools/nikkei225-position-size-calculator', tag: 'FUTURES RISK', title: '日経225先物 適正枚数計算機', description: '口座資金、許容リスク率、損切り幅、必要証拠金から、先物の最大枚数を整数で逆算します。', scope: '損失上限から枚数を逆算' },
  { href: '/tools/nikkei225-margin-buffer-calculator', tag: 'FUTURES RISK', title: '日経225先物 証拠金余力計算機', description: '口座資金、必要証拠金、枚数から、資金余力が何円・何ティックの逆行に相当するか計算します。', scope: 'ラージ・mini・マイクロ' },
  { href: '/tools/fx-swap-break-even-calculator', tag: 'FX SWAP', title: 'FXスワップ損益分岐日数計算機', description: '通貨数、スプレッド、1日分のスワップから、初期コストを回収する付与日数と保有後の差引損益を計算します。', scope: '受取・支払に対応' },
  { href: '/tools/trading-break-even-calculator', tag: 'ALL MARKETS', title: '取引コスト損益分岐計算機', description: '取引金額、スプレッド、往復手数料、保有コストから、回収に必要な利益率と1単位あたりの値幅を計算します。', scope: '手数料負けの境界' },
  { href: '/tools/cost-calculator', tag: 'ALL MARKETS', title: '取引コスト計算機', description: 'FX、暗号資産、CFD、株式、先物のスプレッド、手数料、保有費用、為替コストを一つの円金額へまとめます。', scope: '複数商品・汎用' },
  { href: '/tools/cfd-margin-calculator', tag: 'CFD', title: '商品CFD証拠金計算機', description: 'DMM CFDの商品14銘柄について、価格、Lot数、米ドル円から取引総額と必要証拠金を概算します。', scope: '商品14銘柄' },
  { href: '/tools/matsui-fx-spread-calculator', tag: 'FX', title: 'FXスプレッド計算機', description: 'MATSUI FXの通貨数、スプレッド、取引回数から、価格差コストと値幅損益を円換算します。', scope: '1通貨から対応' },
  { href: '/tools/matsui-fx-margin-calculator', tag: 'FX', title: 'FX証拠金維持率計算機', description: 'MATSUI FXの取引金額、レバレッジ、口座資産から、必要証拠金と追証・ロスカットまでの余力を試算します。', scope: '維持率・余力を試算' },
  { href: '/tools/fx-position-size-calculator', tag: 'FX RISK', title: 'FX取引数量計算機', description: '口座資金、許容リスク率、損切り幅から、1回の損失を予算内に収める取引数量を逆算します。', scope: '損失額から数量を逆算' },
  { href: '/tools/fx-pip-value-calculator', tag: 'FX PIPS', title: 'FX pips損益計算機', description: '取引数量、決済通貨、円換算レートから、1pipsの損益、値幅損益、スプレッド相当額を円換算します。', scope: '円絡み・外貨決済対応' },
  { href: '/tools/risk-reward-calculator', tag: 'ALL MARKETS', title: '損益比・損益分岐勝率計算機', description: '利確幅、損切り幅、往復コスト、想定勝率から、リスクリワード比と取引期待値を計算します。', scope: 'コスト込み期待値' },
  { href: '/tools/us-stock-fx-profit-calculator', tag: 'US STOCK', title: '米国株 円換算損益計算機', description: '買値・売値、購入時・売却時のドル円、売買手数料、為替コストから、円換算損益を計算します。', scope: '株価と為替を分離' },
  { href: '/tools/matsui-us-stock-cost-calculator', tag: 'US STOCK', title: '米国株往復コスト計算機', description: '松井証券の米国株について、売買手数料、円貨決済の為替コスト、値幅損益を円換算します。', scope: 'NISA・外貨決済対応' },
  { href: '/tools/matsui-box-rate-calculator', tag: 'JAPAN STOCK', title: 'ボックスレート計算機', description: '松井証券の現物買付、現物売却、信用取引を1日単位で合算し、国内株手数料を判定します。', scope: '年齢条件対応' },
  { href: '/tools/matsui-futures-cost-calculator', tag: 'FUTURES', title: '日経225先物コスト計算機', description: 'ラージ、mini、マイクロの値幅損益、往復手数料、差引後損益、手数料分岐ティックを計算します。', scope: '通常・一日先物対応' },
] as const;

export default function Page() {
  return <div className="fx-page">
    <section className="fx-hero"><div><p className="page-kicker">FINANCIAL COST TOOLKIT</p><h1>取引条件を、<br /><em>円の負担へ。</em></h1><p className="lede">広告の見出しだけでは分からないコストを、取引金額・数量・保有条件に合わせて試算します。入力値はブラウザ内で計算され、サーバーへ保存しません。</p><div className="hero-actions"><Link className="button primary" href="/tools/cost-calculator">汎用計算機を開く</Link><Link className="button secondary" href="/method">算出方法を確認</Link></div></div><aside className="fx-status-panel"><span>TOOL STATUS</span><strong>26種類を公開中</strong><p>汎用計算に加え、公式の取引単位・料金体系を反映したサービス別計算機を順次追加しています。</p><dl><div><dt>対象</dt><dd>FX・CFD・株・先物</dd></div><div><dt>入力保存</dt><dd>なし</dd></div><div><dt>利用料</dt><dd>無料</dd></div></dl></aside></section>

    <section className="fx-section"><div className="section-heading"><div><p className="section-index">01 / CALCULATORS</p><h2>目的から計算機を選ぶ</h2><p>商品横断の概算と、サービス固有条件の計算を分けています。</p></div></div><div className="affiliate-grid">{tools.map((tool, index) => <article className="affiliate-card" key={tool.href}><div className="affiliate-card-head"><span>TOOL {String(index + 1).padStart(2, '0')}</span><b>{tool.scope}</b></div><p className="affiliate-category">{tool.tag}</p><h3>{tool.title}</h3><p>{tool.description}</p><Link href={tool.href}>計算する →</Link></article>)}</div></section>

    <section className="calculator-caution"><div><span>CALCULATION POLICY</span><h2>結果は概算値です。</h2></div><div><p>料金や取引単位は確認日現在の公式情報を基準にしています。スプレッド、証拠金、調整額などは相場や日時により変わる場合があります。</p><p>取引前には必ず各社の取引画面、契約締結前交付書面、公式料金表を確認してください。計算結果は将来の利益や損失を保証するものではありません。</p></div></section>
  </div>;
}
