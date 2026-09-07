import type { AssetClass, CollectionMethod } from './types';

export type SourceApproval = 'approved' | 'contract-required' | 'permission-required' | 'blocked';

export interface SourceRegistryItem {
  id: string;
  assetClass: AssetClass;
  providerName: string;
  method: CollectionMethod | 'public-web-page';
  documentationUrl: string;
  approval: SourceApproval;
  canCollect: boolean;
  canRepublish: boolean;
  note: string;
  reviewedAt: string;
}

/**
 * Collection code must only enable a source when both canCollect and canRepublish are true.
 * A visible public price page is not, by itself, permission to archive or republish the data.
 */
export const SOURCE_REGISTRY: readonly SourceRegistryItem[] = [
  {
    id: 'oanda-japan-fx',
    assetClass: 'fx',
    providerName: 'OANDA証券',
    method: 'authenticated-api',
    documentationUrl: 'https://help.oanda.jp/oanda/faq/show/720?site_domain=default',
    approval: 'contract-required',
    canCollect: false,
    canRepublish: false,
    note: '正式REST APIあり。ただしGold会員（前月50万米ドル相当以上の取引）・プロコース・NYサーバー残高25万円以上を継続して満たし、API契約とトークンが必要。再掲載条件も別途確認が必要なためMVP候補から除外。',
    reviewedAt: '2026-09-07',
  },
  {
    id: 'matsui-fx-public-rates',
    assetClass: 'fx',
    providerName: '松井証券FX',
    method: 'public-web-page',
    documentationUrl: 'https://www.matsui.co.jp/fx/market/rate/',
    approval: 'permission-required',
    canCollect: false,
    canRepublish: false,
    note: '5秒更新の公開ページはあるが公開APIは未確認。FXアプリ規約には蓄積・加工・二次利用の禁止があり、公開Webの扱いも含め書面確認前は取得しない。',
    reviewedAt: '2026-09-07',
  },
  {
    id: 'gaitame-public-rates',
    assetClass: 'fx',
    providerName: '外為どっとコム',
    method: 'public-web-page',
    documentationUrl: 'https://www.gaitame.com/markets/rate/',
    approval: 'permission-required',
    canCollect: false,
    canRepublish: false,
    note: '公開レートページはあるが公開APIは未確認。サイト利用条件で無断転載・複製が制限されるため、自動取得・保存・加工・商用掲載の書面許可前は取得しない。',
    reviewedAt: '2026-09-07',
  },
  {
    id: 'lightfx-public-rates',
    assetClass: 'fx',
    providerName: 'LIGHT FX',
    method: 'public-web-page',
    documentationUrl: 'https://lightfx.jp/market/rate/',
    approval: 'permission-required',
    canCollect: false,
    canRepublish: false,
    note: '公開ページは参考レートと明記され、公開APIは未確認。掲載情報は許可なく転載・公開できないため、取得・蓄積・再掲載の書面許可前は取得しない。',
    reviewedAt: '2026-09-07',
  },
  {
    id: 'saxo-japan-openapi',
    assetClass: 'fx',
    providerName: 'サクソバンク証券',
    method: 'authenticated-api',
    documentationUrl: 'https://www.home.saxo/ja-jp/platforms/api',
    approval: 'contract-required',
    canCollect: false,
    canRepublish: false,
    note: '正式OpenAPIあり。個人口座は指定初回預託額・API手数料なしだが無料利用は私的使用目的に限定。商用の保存・統計加工・再掲載契約が確認できるまでは取得しない。',
    reviewedAt: '2026-09-07',
  },
] as const;

export const ENABLED_SOURCES = SOURCE_REGISTRY.filter((source) => source.canCollect && source.canRepublish);
