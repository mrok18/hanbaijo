export const COST_FORMULA_VERSION = 'spread-half-v1';

export function calculateSpread(bid: number, ask: number) {
  if (!Number.isFinite(bid) || !Number.isFinite(ask) || bid <= 0 || ask <= 0 || ask < bid) {
    throw new Error('bid/ask must be positive finite numbers and ask must be greater than or equal to bid');
  }

  const spread = ask - bid;
  const mid = (ask + bid) / 2;
  return { spread, mid, spreadPct: (spread / mid) * 100 };
}

export function estimateOneWaySpreadCost(notionalYen: number, spreadPct: number) {
  if (!Number.isFinite(notionalYen) || notionalYen < 0 || !Number.isFinite(spreadPct) || spreadPct < 0) {
    throw new Error('notionalYen and spreadPct must be finite, non-negative numbers');
  }
  return (notionalYen * spreadPct) / 100 / 2;
}
