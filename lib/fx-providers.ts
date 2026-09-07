export interface FxProviderFact {
  label: string;
  value: string;
  note: string;
}

export interface FxProvider {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  minTrade: string;
  costFocus: string;
  caution: string;
  facts: readonly FxProviderFact[];
  checks: readonly string[];
  sources: readonly { label: string; href: string }[];
}

export const FX_PROVIDERS: Record<string, FxProvider> = {
  matsui: {
    slug: 'matsui',
    name: 'MATSUI FX',
    headline: '1通貨単位から、レバレッジを4段階で選べる。',
    summary: '最小取引単位、手数料、レバレッジコースを分け、少額取引でもスプレッドを円換算して判断できるように整理します。',
    minTrade: '1通貨単位',
    costFocus: '取引手数料0円。スプレッドとスワップは別に確認',
    caution: '公称スプレッドは数量・時間帯・相場状況により適用条件があり、同じ水準での約定を保証するものではありません。',
    facts: [
      { label: '最低取引単位', value: '1通貨', note: '公式取引情報' },
      { label: '取引手数料', value: '0円', note: '全32通貨ペア' },
      { label: 'レバレッジ', value: '1・5・10・25倍', note: '個人向け4コース' },
      { label: 'ロスカット手数料', value: '0円', note: '通常の公称条件' },
    ],
    checks: ['スプレッド一覧の数量・時間帯', '選択中のレバレッジコース', 'スワップの受取額と支払額', '急変時のスプレッド拡大・元本超過リスク'],
    sources: [{ label: 'FXサービス', href: 'https://www.matsui.co.jp/fx/' }, { label: '取引情報', href: 'https://www.matsui.co.jp/fx/list/' }, { label: 'リスク・手数料', href: 'https://www.matsui.co.jp/disclaimer/fx.html' }],
  },
  'gmo-click': {
    slug: 'gmo-click',
    name: 'GMOクリック証券 FXネオ',
    headline: '通常の取引手数料0円。ただし自動ロスカットは別。',
    summary: '最小1,000通貨から取引できますが、自動ロスカット・強制決済時には通常取引と異なる手数料があります。',
    minTrade: '1,000通貨単位',
    costFocus: '通常取引0円と自動ロスカット時の費用を分けて確認',
    caution: '自動ロスカットや追加証拠金制度による強制決済では、原則1万通貨単位あたり税込500円が発生します。',
    facts: [
      { label: '最低取引単位', value: '1,000通貨', note: '一部通貨ペアは1万通貨' },
      { label: '通常取引手数料', value: '0円', note: 'インターネット取引' },
      { label: '必要証拠金', value: '取引金額の4%', note: '個人口座' },
      { label: '自動ロスカット', value: '500円', note: '原則1万通貨単位・税込' },
    ],
    checks: ['通貨ペアごとの最小数量', '通常銘柄とラージ銘柄の配信条件', '自動ロスカット・強制決済手数料', 'スプレッド拡大とスリッページの可能性'],
    sources: [{ label: 'FXネオ取引ルール', href: 'https://www.click-sec.com/corp/guide/fxneo/rule/index.html' }, { label: 'スプレッド・手数料', href: 'https://www.click-sec.com/corp/guide/fxneo/commission_list/' }, { label: 'リスク説明', href: 'https://www.click-sec.com/corp/info/risk/' }],
  },
  lightfx: {
    slug: 'lightfx',
    name: 'LIGHT FX',
    headline: '通常ペアとLIGHTペアを、同じものとして比べない。',
    summary: '取引手数料は無料ですが、LIGHTペアには時間帯別のスプレッドと取引上限など独自の条件があります。',
    minTrade: '1,000通貨単位',
    costFocus: '通常ペア・LIGHTペア・適用時間外を分離',
    caution: 'USD/JPY LIGHTの0.18銭はAM8:00〜翌AM5:00の原則固定・例外あり。時間外は公式表示上3.88銭です。',
    facts: [
      { label: '最低取引単位', value: '1,000通貨', note: '0.1Lot・一部通貨は異なる' },
      { label: '取引手数料', value: '0円', note: '口座管理費も無料' },
      { label: 'USD/JPY LIGHT', value: '0.18銭', note: 'AM8:00〜翌AM5:00・例外あり' },
      { label: 'ロスカット', value: '維持率100%以下', note: 'FX口座の全建玉を自動決済' },
    ],
    checks: ['通常ペアとLIGHTペアの違い', 'スプレッドの適用時間と例外', '通貨ペアごとの取引上限', 'ロスカット時の約定価格は保証されない'],
    sources: [{ label: 'サービス概要', href: 'https://lightfx.jp/service/outline/' }, { label: 'スプレッド', href: 'https://lightfx.jp/service/spread/' }],
  },
  'lion-fx': {
    slug: 'lion-fx',
    name: 'ヒロセ通商 LION FX',
    headline: '57通貨ペアを、基本1,000通貨単位から。',
    summary: '通貨ペア数だけでなく、取引単位、ロスカット基準、追証制度の有無を合わせて確認します。',
    minTrade: '基本1,000通貨単位',
    costFocus: '取引手数料0円。スプレッド・スワップを通貨ペア別に確認',
    caution: '追証制度はありませんが、入金額を超える損失が発生した場合の不足金支払い義務がなくなるわけではありません。',
    facts: [
      { label: '通貨ペア', value: '57種類', note: '大口6種類は別区分' },
      { label: '最低取引単位', value: '基本1,000通貨', note: '一部通貨ペアは異なる' },
      { label: '取引手数料', value: '0円', note: '口座維持費も0円' },
      { label: 'ロスカット', value: '有効比率100%未満', note: '全建玉を対象' },
    ],
    checks: ['通貨ペアごとの取引単位と上限', 'スプレッド一覧の適用条件', '営業日終了時のスワップ付与', '不足金が発生した場合の支払期限'],
    sources: [{ label: 'LION FX取引要綱', href: 'https://hirose-fx.co.jp/category/hirose/lionfx/lfx/' }, { label: '公式トップ', href: 'https://hirose-fx.co.jp/' }],
  },
};

export const FX_PROVIDER_LIST = Object.values(FX_PROVIDERS);
