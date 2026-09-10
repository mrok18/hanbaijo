import type { AssetClass } from './types';

export type MarketStage = 'live' | 'building' | 'design' | 'research';

export interface MarketCatalogItem {
  id: AssetClass;
  code: string;
  name: string;
  href?: string;
  stage: MarketStage;
  stageLabel: string;
  shortNote: string;
  summary: string;
  metrics: readonly string[];
}

export const MARKET_CATALOG: readonly MarketCatalogItem[] = [
  {
    id: 'fx',
    code: 'FX',
    name: 'FX',
    href: '/fx',
    stage: 'building',
    stageLabel: '公開準備中',
    shortNote: 'コスト構造・比較基準を公開',
    summary: 'FXのコスト構造と比較基準を公開。自動計測値はデータ利用許諾後に追加します。',
    metrics: ['公称・実測スプレッド', '約定・スリッページ', '時間帯別の広がり', 'スワップ・取引手数料'],
  },
  {
    id: 'cfd',
    code: 'CFD',
    name: 'CFD',
    href: '/cfd',
    stage: 'building',
    stageLabel: '比較公開中',
    shortNote: 'コスト構造・調査対象を公開',
    summary: '株価指数・商品CFDの比較方法と調査対象を公開。実測値は利用条件の確認後に追加します。',
    metrics: ['売買スプレッド', '価格調整額', '金利調整額', '取引単位'],
  },
  {
    id: 'equity',
    code: 'STOCKS',
    name: '株式',
    href: '/stocks',
    stage: 'building',
    stageLabel: '比較公開中',
    shortNote: '売買・板・為替コスト',
    summary: '国内株と米国株のコストを、売買手数料・板の価格差・為替コストに分けて整理します。',
    metrics: ['売買手数料', '売値と買値の差', '為替コスト', '信用金利・貸株料'],
  },
  {
    id: 'futures',
    code: 'FUTURES',
    name: '先物',
    href: '/futures',
    stage: 'building',
    stageLabel: '比較公開中',
    shortNote: '呼値・証拠金・限月',
    summary: '指数先物を中心に、1ティックの損益、取引金額、証拠金、限月を分けて整理します。',
    metrics: ['売買手数料', '呼値と取引単位', '証拠金', 'SQ・限月'],
  },
  {
    id: 'crypto',
    code: 'CRYPTO',
    name: '暗号資産',
    href: '/crypto',
    stage: 'live',
    stageLabel: 'LIVE',
    shortNote: 'BTC/JPY スプレッド実測',
    summary: 'BTC/JPYの販売所・取引所スプレッドを30分ごとに記録。',
    metrics: ['売買スプレッド', '100万円あたり試算', '7日間の推移', 'API取得状況'],
  },
] as const;
