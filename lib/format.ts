export const jpy = (v: number) => Math.round(v).toLocaleString('ja-JP');

export const pct = (v: number) =>
  v >= 1 ? v.toFixed(2) + '%' : v >= 0.01 ? v.toFixed(3) + '%' : v.toFixed(5) + '%';

export const jst = (iso: string) =>
  new Intl.DateTimeFormat('ja-JP', {
    timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit',
  }).format(new Date(iso)) + ' JST';
