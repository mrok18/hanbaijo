import Link from 'next/link';

export const metadata = {
  title: '金融コスト計算ツール｜FX・CFD・株式・先物',
  description: 'FX・CFD・米国株・国内株・先物のスプレッド、手数料、証拠金、為替コスト、値幅損益を円換算できる無料計算ツールの一覧です。',
};

const tools = [
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
    <section className="fx-hero"><div><p className="page-kicker">FINANCIAL COST TOOLKIT</p><h1>取引条件を、<br /><em>円の負担へ。</em></h1><p className="lede">広告の見出しだけでは分からないコストを、取引金額・数量・保有条件に合わせて試算します。入力値はブラウザ内で計算され、サーバーへ保存しません。</p><div className="hero-actions"><Link className="button primary" href="/tools/cost-calculator">汎用計算機を開く</Link><Link className="button secondary" href="/method">算出方法を確認</Link></div></div><aside className="fx-status-panel"><span>TOOL STATUS</span><strong>12種類を公開中</strong><p>汎用計算に加え、公式の取引単位・料金体系を反映したサービス別計算機を順次追加しています。</p><dl><div><dt>対象</dt><dd>FX・CFD・株・先物</dd></div><div><dt>入力保存</dt><dd>なし</dd></div><div><dt>利用料</dt><dd>無料</dd></div></dl></aside></section>

    <section className="fx-section"><div className="section-heading"><div><p className="section-index">01 / CALCULATORS</p><h2>目的から計算機を選ぶ</h2><p>商品横断の概算と、サービス固有条件の計算を分けています。</p></div></div><div className="affiliate-grid">{tools.map((tool, index) => <article className="affiliate-card" key={tool.href}><div className="affiliate-card-head"><span>TOOL {String(index + 1).padStart(2, '0')}</span><b>{tool.scope}</b></div><p className="affiliate-category">{tool.tag}</p><h3>{tool.title}</h3><p>{tool.description}</p><Link href={tool.href}>計算する →</Link></article>)}</div></section>

    <section className="calculator-caution"><div><span>CALCULATION POLICY</span><h2>結果は概算値です。</h2></div><div><p>料金や取引単位は確認日現在の公式情報を基準にしています。スプレッド、証拠金、調整額などは相場や日時により変わる場合があります。</p><p>取引前には必ず各社の取引画面、契約締結前交付書面、公式料金表を確認してください。計算結果は将来の利益や損失を保証するものではありません。</p></div></section>
  </div>;
}
