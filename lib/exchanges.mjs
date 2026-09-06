// 各取引所からの価格取得アダプタ。
// venue: 'exchange' = 取引所（板・ユーザー同士の売買） / 'dealer' = 販売所（業者が提示するレート）
// 追加するときはこの配列に 1 件足すだけでサイト・収集の両方に反映される。

const UA = { 'User-Agent': 'hanbaijo.com/1.0 (+https://hanbaijo.com/about)' };

// 開発時に外部へ出られない環境でも画面を確認できるようにするためのモック。
// 本番（Vercel / GitHub Actions）では未設定なので通常どおり実APIを叩く。
const MOCK = process.env.MOCK_RATES === '1';
const MOCK_DATA = {
  'https://public.bitbank.cc/btc_jpy/ticker': { data: { buy: '12511023', sell: '12511024' } },
  'https://api.coin.z.com/public/v1/ticker?symbol=BTC': { data: [{ bid: '12509998', ask: '12509999' }] },
  'https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY': { best_bid: 12486540, best_ask: 12489124 },
  'https://coincheck.com/api/ticker': { bid: 12503000, ask: 12504600 },
  'https://api-cloud.bittrade.co.jp/market/detail/merged?symbol=btcjpy': { tick: { bid: [12505325, 0.001], ask: [12508900, 0.0001] } },
  'https://api.zaif.jp/api/1/ticker/btc_jpy': { bid: 12500830, ask: 12515200 },
  'https://www.okcoin.jp/api/spot/v3/instruments/BTC-JPY/ticker': { best_bid: '12498000', best_ask: '12506000' },
  'https://bitflyer.com/api/echo/price': { bid: 12131612, ask: 12882022, mid: 12506817 },
};

async function fetchJson(url, timeoutMs = 8000) {
  if (MOCK) {
    if (!MOCK_DATA[url]) throw new Error('mock 未定義');
    return MOCK_DATA[url];
  }
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers: UA, signal: ctrl.signal, cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

const n = (v) => {
  const x = typeof v === 'string' ? parseFloat(v) : v;
  if (typeof x !== 'number' || !isFinite(x) || x <= 0) throw new Error('invalid number: ' + v);
  return x;
};

export const SOURCES = [
  {
    id: 'bitbank',
    name: 'bitbank',
    venue: 'exchange',
    url: 'https://bitbank.cc/',
    async fetch() {
      const d = await fetchJson('https://public.bitbank.cc/btc_jpy/ticker');
      return { bid: n(d.data.buy), ask: n(d.data.sell) };
    },
  },
  {
    id: 'gmo',
    name: 'GMOコイン',
    venue: 'exchange',
    url: 'https://coin.z.com/jp/',
    async fetch() {
      const d = await fetchJson('https://api.coin.z.com/public/v1/ticker?symbol=BTC');
      const t = d.data[0];
      return { bid: n(t.bid), ask: n(t.ask) };
    },
  },
  {
    id: 'bitflyer',
    name: 'bitFlyer',
    venue: 'exchange',
    url: 'https://bitflyer.com/',
    async fetch() {
      const d = await fetchJson('https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY');
      return { bid: n(d.best_bid), ask: n(d.best_ask) };
    },
  },
  {
    id: 'coincheck',
    name: 'Coincheck',
    venue: 'exchange',
    url: 'https://coincheck.com/',
    async fetch() {
      const d = await fetchJson('https://coincheck.com/api/ticker');
      return { bid: n(d.bid), ask: n(d.ask) };
    },
  },
  {
    id: 'bittrade',
    name: 'BitTrade',
    venue: 'exchange',
    url: 'https://www.bittrade.co.jp/',
    async fetch() {
      const d = await fetchJson('https://api-cloud.bittrade.co.jp/market/detail/merged?symbol=btcjpy');
      const t = d.tick ?? d;
      return { bid: n(t.bid[0]), ask: n(t.ask[0]) };
    },
  },
  {
    id: 'zaif',
    name: 'Zaif',
    venue: 'exchange',
    url: 'https://zaif.jp/',
    async fetch() {
      const d = await fetchJson('https://api.zaif.jp/api/1/ticker/btc_jpy');
      return { bid: n(d.bid), ask: n(d.ask) };
    },
  },
  {
    id: 'okj',
    name: 'OKJ',
    venue: 'exchange',
    url: 'https://www.okcoin.jp/',
    async fetch() {
      const d = await fetchJson('https://www.okcoin.jp/api/spot/v3/instruments/BTC-JPY/ticker');
      return { bid: n(d.best_bid), ask: n(d.best_ask) };
    },
  },
  {
    id: 'bitflyer-dealer',
    name: 'bitFlyer かんたん販売所',
    venue: 'dealer',
    url: 'https://bitflyer.com/',
    async fetch() {
      const d = await fetchJson('https://bitflyer.com/api/echo/price');
      return { bid: n(d.bid), ask: n(d.ask) };
    },
  },
];

/** 1 社分の計測結果を返す。失敗しても例外を投げず error を持った行を返す。 */
export async function measure(src) {
  const base = { id: src.id, name: src.name, venue: src.venue, url: src.url };
  try {
    const { bid, ask } = await src.fetch();
    if (ask < bid) throw new Error('ask < bid');
    const mid = (ask + bid) / 2;
    return { ...base, bid, ask, mid, spread: ask - bid, spreadPct: ((ask - bid) / mid) * 100, error: null };
  } catch (e) {
    return { ...base, bid: null, ask: null, mid: null, spread: null, spreadPct: null, error: String(e.message ?? e) };
  }
}

/** 全社を並列計測してスプレッドの狭い順に返す。 */
export async function measureAll() {
  const rows = await Promise.all(SOURCES.map(measure));
  const ok = rows.filter((r) => !r.error).sort((a, b) => a.spreadPct - b.spreadPct);
  const ng = rows.filter((r) => r.error);
  return { measuredAt: new Date().toISOString(), rows: [...ok, ...ng] };
}
