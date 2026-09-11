export interface AffiliateOffer {
  id: 'fxtf' | 'systre-select-365' | 'dmm-cfd' | 'dmm-kabu' | 'matsui-fx' | 'jfx' | 'tossy' | 'ablenet-vps' | 'fpo-fx-guide' | 'digital-asset-loan';
  name: string;
  category: string;
  description: string;
  linkLabel: string;
  href: string;
  impressionSrc: string;
  network?: 'a8' | 'accesstrade';
}

export const AFFILIATE_OFFERS: Record<AffiliateOffer['id'], AffiliateOffer> = {
  'digital-asset-loan': {
    id: 'digital-asset-loan',
    name: 'デジタルアセット担保ローン',
    category: '暗号資産担保ローン',
    description: 'ビットコイン・ETHを担保にした借入サービスの公式条件を確認できます。担保掛目、金利、返済、強制決済の条件を必ず確認してください。',
    linkLabel: 'デジタルアセット担保ローンの公式情報を確認',
    href: 'https://h.accesstrade.net/sp/cc?rk=0100pbqw00oyio',
    impressionSrc: 'https://h.accesstrade.net/sp/rr?rk=0100pbqw00oyio',
    network: 'accesstrade',
  },
  fxtf: {
    id: 'fxtf',
    name: 'FXTF',
    category: 'FX・CFD・ノックアウトオプション',
    description: 'FX、CFD、ノックアウトオプションを検討するときの公式情報と取引条件を確認できます。',
    linkLabel: 'FXTFの公式情報を確認',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IR+GC8AGI+48D0+6A4FM',
    impressionSrc: 'https://www17.a8.net/0.gif?a8mat=4BC5IR+GC8AGI+48D0+6A4FM',
  },
  'systre-select-365': {
    id: 'systre-select-365',
    name: 'シストレセレクト365',
    category: 'FX自動売買',
    description: '自動売買を検討する場合は、仕組み、コスト、リスク、取引条件を公式情報で確認してください。',
    linkLabel: 'FX自動売買なら「シストレセレクト365」',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IR+GCTQ2A+34QW+BWVTE',
    impressionSrc: 'https://www14.a8.net/0.gif?a8mat=4BC5IR+GCTQ2A+34QW+BWVTE',
  },
  'dmm-cfd': {
    id: 'dmm-cfd',
    name: 'DMM CFD',
    category: '株価指数・商品CFD',
    description: '取扱銘柄、スプレッド、調整額、取引時間など、最新の取引条件を公式ページで確認できます。',
    linkLabel: '全銘柄の取引手数料が0円の【DMM CFD】',
    href: 'https://h.accesstrade.net/sp/cc?rk=01006ko600oyio',
    impressionSrc: 'https://h.accesstrade.net/sp/rr?rk=01006ko600oyio',
    network: 'accesstrade',
  },
  'dmm-kabu': {
    id: 'dmm-kabu',
    name: 'DMM 株',
    category: '日本株・米国株・NISA',
    description: '国内株、米国株、NISAの手数料、為替コスト、取引条件を公式ページで確認できます。',
    linkLabel: '株取引を始めるなら【DMM 株】！(PR)',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC72Z+9ALMR6+1WP2+15Q9SI',
    impressionSrc: 'https://www14.a8.net/0.gif?a8mat=4BC72Z+9ALMR6+1WP2+15Q9SI',
  },
  'matsui-fx': {
    id: 'matsui-fx',
    name: '松井証券',
    category: '証券・FX',
    description: '株式、NISA、FXなど、利用する商品の最新の取引条件を公式サイトで確認できます。',
    linkLabel: '松井証券',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IS+3KMEQ+3XCC+64C3M',
    impressionSrc: 'https://www10.a8.net/0.gif?a8mat=4BC5IS+3KMEQ+3XCC+64C3M',
  },
  jfx: {
    id: 'jfx',
    name: 'JFX MATRIX TRADER',
    category: 'FX・短期売買',
    description: '取引単位、時間帯別スプレッド、注文機能、必要証拠金など、最新の取引条件を公式サイトで確認できます。',
    linkLabel: 'MATRIX TRADER',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IR+GDF5O2+25B2+5YRHE',
    impressionSrc: 'https://www19.a8.net/0.gif?a8mat=4BC5IR+GDF5O2+25B2+5YRHE',
  },
  tossy: {
    id: 'tossy',
    name: 'ウルトラ投資アプリ TOSSY',
    category: 'FX・株式CFD・指数CFD・商品CFD・暗号資産CFD',
    description: '6つのアセット区分を1つのアプリで扱う差金決済取引サービスです。最新の取引条件とリスクを公式情報で確認できます。',
    linkLabel: '【PR】ウルトラ投資アプリ【TOSSY】',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IS+16VZM+1WP2+1HL85U',
    impressionSrc: 'https://www19.a8.net/0.gif?a8mat=4BC5IS+16VZM+1WP2+1HL85U',
  },
  'ablenet-vps': {
    id: 'ablenet-vps',
    name: 'ABLENET VPS',
    category: 'FX自動売買・Windows VPS',
    description: 'MT4・MT5・EAの常時稼働を検討するときに、Windowsプラン、RDSライセンス、メモリ、試用条件を公式情報で確認できます。',
    linkLabel: 'FX自動売買におすすめ【ABLENET VPS】',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IS+S2+4NIK+60OXE',
    impressionSrc: 'https://www14.a8.net/0.gif?a8mat=4BC5IS+S2+4NIK+60OXE',
  },
  'fpo-fx-guide': {
    id: 'fpo-fx-guide',
    name: 'FPO FX投資マスターガイド',
    category: 'FX・無料電子書籍',
    description: 'FXの仕組み、口座選び、経済指標、注文、チャート、資金管理を全128ページで学べる電子書籍です。登録前に配信条件とリスク表示を確認してください。',
    linkLabel: '無料のFX投資マスターガイドを確認',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IR+GBMUUQ+ONS+674EQ',
    impressionSrc: 'https://www12.a8.net/0.gif?a8mat=4BC5IR+GBMUUQ+ONS+674EQ',
  },
};
