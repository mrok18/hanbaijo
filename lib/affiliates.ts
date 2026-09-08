export interface AffiliateOffer {
  id: 'fxtf' | 'systre-select-365' | 'dmm-cfd' | 'matsui-fx' | 'jfx' | 'tossy';
  name: string;
  category: string;
  description: string;
  linkLabel: string;
  href: string;
  impressionSrc: string;
}

export const AFFILIATE_OFFERS: Record<AffiliateOffer['id'], AffiliateOffer> = {
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
    linkLabel: '【PR】DMM CFD',
    href: 'https://px.a8.net/svt/ejp?a8mat=4BC5IS+1SBLE+1WP2+NTJWY',
    impressionSrc: 'https://www14.a8.net/0.gif?a8mat=4BC5IS+1SBLE+1WP2+NTJWY',
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
};
