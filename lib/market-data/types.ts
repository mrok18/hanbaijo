export type AssetClass = 'crypto' | 'fx' | 'cfd' | 'equity' | 'futures';
export type DataOrigin = 'observed' | 'published' | 'estimated';
export type CollectionMethod = 'public-api' | 'authenticated-api' | 'official-document' | 'calculation';

export interface Instrument {
  id: string;
  assetClass: AssetClass;
  symbol: string;
  displayName: string;
  baseCurrency?: string;
  quoteCurrency: string;
}

export interface DataSource {
  providerId: string;
  providerName: string;
  origin: DataOrigin;
  method: CollectionMethod;
  sourceUrl: string;
  checkedAt?: string;
}

export interface QuoteObservation {
  instrumentId: string;
  source: DataSource;
  capturedAt: string;
  bid: number;
  ask: number;
  spread: number;
  spreadPct: number;
}

export interface CostEstimate {
  instrumentId: string;
  origin: 'estimated';
  calculatedAt: string;
  assumptions: Record<string, string | number>;
  amountYen: number;
  formulaVersion: string;
}

export interface MissingObservation {
  instrumentId: string;
  providerId: string;
  capturedAt: string;
  reason: string;
}
