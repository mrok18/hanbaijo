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
    documentationUrl: 'https://www.oanda.jp/platform/api',
    approval: 'contract-required',
    canCollect: false,
    canRepublish: false,
    note: '正式REST APIあり。口座・API契約・アクセストークンが必要。サイトでの時系列再掲載条件は別途確認する。',
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
    note: '5秒更新の公開ページはあるが、関連サービス規約に蓄積・加工・二次利用の禁止があるため、書面確認前は取得しない。',
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
    note: '公開レートページはあるが、取引サービスの情報利用条項で第三者提供・営業利用・加工・再配信が制限されるため、許可確認前は取得しない。',
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
    note: '公開ページは参考レートと明記。公式APIおよび蓄積・再掲載許諾を確認できるまでは取得しない。',
    reviewedAt: '2026-09-07',
  },
] as const;

export const ENABLED_SOURCES = SOURCE_REGISTRY.filter((source) => source.canCollect && source.canRepublish);
