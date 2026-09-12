export interface StockProviderFact {
  label: string;
  value: string;
  note: string;
}

export interface StockProvider {
  slug: string;
  name: string;
  shortName: string;
  reviewedAt: string;
  headline: string;
  summary: string;
  feeModel: string;
  bestFor: string;
  caution: string;
  facts: readonly StockProviderFact[];
  checks: readonly string[];
  sources: readonly { label: string; href: string }[];
  faqs?: readonly { question: string; answer: string }[];
}

export const STOCK_PROVIDERS: Record<string, StockProvider> = {
  'gmo-click': {
    slug: 'gmo-click',
    name: 'GMOクリック証券',
    shortName: 'GMOクリック証券',
    reviewedAt: '2026-09-07',
    headline: '国内株の取引手数料は、約定代金にかかわらず0円。',
    summary: '現物・信用の通常インターネット取引を中心に、0円の対象外と信用取引の保有コストを分けて確認します。',
    feeModel: '約定代金にかかわらず0円',
    bestFor: '売買回数・金額を問わず通常の国内株手数料を固定したい人',
    caution: 'コールセンター、強制決済、単元未満株の買取・売却などは無料対象外です。',
    facts: [
      { label: '現物取引', value: '0円', note: '約定代金にかかわらず' },
      { label: '信用取引', value: '0円', note: '約定代金にかかわらず' },
      { label: '制度信用・買方金利', value: '年2.75%', note: '保有日数に応じて発生' },
      { label: '制度信用・貸株料', value: '年1.10%', note: '信用売りに発生' },
    ],
    checks: ['単元未満株の売却は約定代金×2.2%', '単元未満株の買取は1銘柄1,100円', '信用管理費や名義書換料は別費用', '電話・強制決済の手数料は別条件'],
    sources: [{ label: '手数料', href: 'https://www.click-sec.com/corp/guide/commission_list/' }, { label: '現物株式', href: 'https://www.click-sec.com/corp/guide/kabu/gembutsu/' }],
  },
  rakuten: {
    slug: 'rakuten',
    name: '楽天証券',
    shortName: '楽天証券',
    reviewedAt: '2026-09-11',
    headline: 'ゼロコースなら、国内株の現物・信用手数料は0円。',
    summary: '無料条件となるコース選択とSOR・Rクロスへの同意を含め、0円という数字の適用範囲を確認します。',
    feeModel: 'ゼロコースは約定代金にかかわらず0円',
    bestFor: 'SOR利用条件を理解したうえで、国内株の通常手数料を0円にしたい人',
    caution: 'ゼロコースの設定と、SOR（Rクロスを含む）の利用同意が必要です。IFA口座などは条件が異なります。',
    facts: [
      { label: '現物取引手数料', value: '0円', note: 'ゼロコース・約定代金にかかわらず' },
      { label: '信用取引手数料', value: '0円', note: 'ゼロコース・約定代金にかかわらず' },
      { label: 'ゼロコースの条件', value: 'SOR利用', note: 'Rクロスを含む利用同意が必要' },
      { label: '信用の保有コスト', value: '別途発生', note: '金利・貸株料などは取引手数料に含まれない' },
    ],
    checks: ['ゼロコースの選択状況', 'SOR・Rクロスの仕組みと利用同意', '信用取引の金利・貸株料などの保有コスト', '単元未満株・電話注文・IFA口座などの別条件'],
    sources: [
      { label: '現物取引手数料', href: 'https://www.rakuten-sec.co.jp/web/domestic/stock/commission.html' },
      { label: '信用取引の手数料・金利・貸株料', href: 'https://www.rakuten-sec.co.jp/web/domestic/margin/commission.html' },
      { label: 'SOR注文の基本ルール', href: 'https://www.rakuten-sec.co.jp/web/domestic/sor/rule/ground_rules.html' },
      { label: '手数料一覧', href: 'https://www.rakuten-sec.co.jp/web/commission/' },
    ],
    faqs: [
      {
        question: '楽天証券の国内株手数料は本当に0円ですか？',
        answer: 'ゼロコースを選ぶと、国内株の現物取引と信用取引の取引手数料は約定代金にかかわらず0円です。ゼロコースにはSOR（Rクロスを含む）の利用同意が必要です。',
      },
      {
        question: '楽天証券の信用取引手数料はいくらですか？',
        answer: 'ゼロコースの国内株信用取引手数料は約定代金にかかわらず0円です。ただし、買方金利、貸株料、品貸料、事務管理費などの信用取引固有の費用は別に確認する必要があります。',
      },
      {
        question: 'ゼロコースではSORとRクロスを使う必要がありますか？',
        answer: '楽天証券の公式説明では、ゼロコースの設定にSOR（Rクロスを含む）の利用同意が必要です。Rクロスは現物取引のみが対象で、信用取引は対象外です。',
      },
    ],
  },
  matsui: {
    slug: 'matsui',
    name: '松井証券',
    shortName: '松井証券',
    reviewedAt: '2026-09-07',
    headline: '1日の約定代金合計50万円までは、手数料0円。',
    summary: '1注文ごとではなく、現物と信用を合わせた1日の約定代金合計で決まるボックスレートを整理します。',
    feeModel: '1日の約定代金合計で決まる定額制',
    bestFor: '1日の取引金額を無料枠内に収める人、または25歳以下の人',
    caution: '26歳以上では、買付と売却を同日に行うと両方の約定代金が合計されます。',
    facts: [
      { label: '1日50万円まで', value: '0円', note: '26歳以上のボックスレート' },
      { label: '1日100万円まで', value: '1,100円', note: '税込' },
      { label: '1日200万円まで', value: '2,200円', note: '税込' },
      { label: '25歳以下', value: '0円', note: '約定代金にかかわらず' },
    ],
    checks: ['現物と信用の約定代金を合算', 'ベストマッチの改善成功報酬は別', '単元未満株は売却のみで別手数料', 'PTSナイト取引の日付判定に注意'],
    sources: [{ label: '現物取引手数料', href: 'https://www.matsui.co.jp/stock/domestic/fee/' }, { label: '手数料一覧', href: 'https://www.matsui.co.jp/fee/' }],
  },
  'dmm-kabu': {
    slug: 'dmm-kabu',
    name: 'DMM 株',
    shortName: 'DMM 株',
    reviewedAt: '2026-09-07',
    headline: '国内株現物は、1注文55円から880円。',
    summary: '1日の合計ではなく、1注文の約定代金に応じて決まる現物手数料と、信用・米国株の別条件を整理します。',
    feeModel: '1注文ごとの約定代金で決まる段階制',
    bestFor: '注文ごとの費用を事前に把握し、1日定額制と比較したい人',
    caution: '売買回数が増えると注文ごとに手数料が積み上がります。往復では買付と売却の両方を数えます。',
    facts: [
      { label: '5万円以下', value: '55円', note: '現物・1注文・税込' },
      { label: '50万円以下', value: '198円', note: '現物・1注文・税込' },
      { label: '100万円以下', value: '374円', note: '現物・1注文・税込' },
      { label: '300万円超', value: '880円', note: '現物・1注文・税込' },
    ],
    checks: ['国内株信用の取引手数料は0円', '信用金利・貸株料は別に発生', '米国株は国内株と異なる料金体系', 'NISAは別条件を確認'],
    sources: [{ label: '株式取引の手数料', href: 'https://kabu.dmm.com/commission/' }, { label: '商品概要・取引ルール', href: 'https://kabu.dmm.com/jp/stock/outline/' }],
  },
};

export const STOCK_PROVIDER_LIST = Object.values(STOCK_PROVIDERS);
