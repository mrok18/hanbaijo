export const COST_FORMULA_VERSION = 'spread-half-v1';

export const ROUND_TRIP_FORMULA_VERSION = 'round-trip-total-v1';

export interface RoundTripCostInput {
  notionalYen: number;
  spreadPct: number;
  tradingFeePct: number;
  fixedFeesYen: number;
  annualHoldingRatePct: number;
  holdingDays: number;
  fxConversionPct: number;
}

export interface RoundTripCostBreakdown {
  spreadYen: number;
  tradingFeeYen: number;
  holdingCostYen: number;
  fxConversionYen: number;
  totalYen: number;
  totalPct: number;
  formulaVersion: typeof ROUND_TRIP_FORMULA_VERSION;
}

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

/**
 * 買いから売りまでの往復を想定した概算コスト。
 * 各率は利用者が入力した試算条件であり、事業者の公称値・実測値とは区別する。
 */
export function calculateRoundTripCost(input: RoundTripCostInput): RoundTripCostBreakdown {
  const values = Object.entries(input);
  if (values.some(([, value]) => !Number.isFinite(value) || value < 0)) {
    throw new Error('all cost inputs must be finite, non-negative numbers');
  }

  const spreadYen = input.notionalYen * input.spreadPct / 100;
  const tradingFeeYen = input.notionalYen * input.tradingFeePct / 100 + input.fixedFeesYen;
  const holdingCostYen = input.notionalYen * input.annualHoldingRatePct / 100 * input.holdingDays / 365;
  const fxConversionYen = input.notionalYen * input.fxConversionPct / 100;
  const totalYen = spreadYen + tradingFeeYen + holdingCostYen + fxConversionYen;

  return {
    spreadYen,
    tradingFeeYen,
    holdingCostYen,
    fxConversionYen,
    totalYen,
    totalPct: input.notionalYen > 0 ? totalYen / input.notionalYen * 100 : 0,
    formulaVersion: ROUND_TRIP_FORMULA_VERSION,
  };
}
