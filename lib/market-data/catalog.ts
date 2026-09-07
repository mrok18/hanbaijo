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
    stage: 'design',
    stageLabel: '設計中',
    shortNote: '指数・商品・金利調整額',
    summary: '株価指数・商品CFDの往復コストと保有コストを同じ金額条件で整理予定。',
    metrics: ['売買スプレッド', '価格調整額', '金利調整額', '取引単位'],
  },
  {
    id: 'equity',
    code: 'EQUITY / FUTURES',
    name: '株式・先物',
    stage: 'research',
    stageLabel: '調査中',
    shortNote: '手数料・金利・為替コスト',
    summary: '共通の市場価格ではなく、会社ごとに差が出る手数料・金利・機能を比較予定。',
    metrics: ['売買手数料', '信用金利・貸株料', '為替コスト', '注文・執行条件'],
  },
  {
    id: 'crypto',
    code: 'CRYPTO',
    name: '暗号資産',
    href: '/#live-data',
    stage: 'live',
    stageLabel: 'LIVE',
    shortNote: 'BTC/JPY スプレッド実測',
    summary: 'BTC/JPYの販売所・取引所スプレッドを30分ごとに記録。',
    metrics: ['売買スプレッド', '100万円あたり試算', '7日間の推移', 'API取得状況'],
  },
] as const;
