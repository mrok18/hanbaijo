'use client';
import { useMemo, useRef, useState } from 'react';

export interface Series { key: 'dealer' | 'exchange'; label: string; color: string; points: [number, number][] }

const W = 900, H = 260, PAD = { t: 14, r: 16, b: 26, l: 52 };
const IW = W - PAD.l - PAD.r, IH = H - PAD.t - PAD.b;

export default function SpreadChart({ series }: { series: Series[] }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  const model = useMemo(() => {
    const all = series.flatMap((s) => s.points);
    if (all.length < 2) return null;
    const ts = all.map((p) => p[0]);
    const t0 = Math.min(...ts), t1 = Math.max(...ts);
    // 点が少ない、または時間幅が1時間未満のうちは線として意味をなさないので描かない
    if (t1 - t0 < 3600 || series.some((s) => s.points.length < 3)) return null;
    const vs = all.map((p) => p[1]).filter((v) => v > 0);
    // スプレッドは社によって 5 桁以上開くため対数目盛を使う
    const lo = Math.log10(Math.max(Math.min(...vs) * 0.7, 1e-5));
    const hi = Math.log10(Math.max(...vs) * 1.4);
    const x = (t: number) => PAD.l + (t1 === t0 ? IW / 2 : ((t - t0) / (t1 - t0)) * IW);
    const y = (v: number) => PAD.t + IH - ((Math.log10(Math.max(v, 1e-5)) - lo) / (hi - lo)) * IH;
    const ticks: number[] = [];
    for (let e = Math.ceil(lo); e <= Math.floor(hi); e++) ticks.push(Math.pow(10, e));
    return { t0, t1, x, y, ticks };
  }, [series]);

  if (!model) {
    return (
      <div className="card">
        <p className="chart-empty">
          計測データを蓄積中です。30分ごとに自動収集しており、グラフはデータが揃いしだい表示されます。
        </p>
      </div>
    );
  }

  const { t0, t1, x, y, ticks } = model;
  const fmtPct = (v: number) => (v >= 1 ? v.toFixed(1) + '%' : v >= 0.01 ? v.toFixed(2) + '%' : v.toFixed(4) + '%');
  const fmtTime = (t: number) =>
    new Intl.DateTimeFormat('ja-JP', { timeZone: 'Asia/Tokyo', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      .format(new Date(t * 1000));

  const onMove = (e: React.MouseEvent) => {
    const r = svgRef.current!.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    if (px < PAD.l || px > W - PAD.r) return setHover(null);
    setHover(t0 + ((px - PAD.l) / IW) * (t1 - t0));
  };

  const nearest = (s: Series, t: number) =>
    s.points.reduce<[number, number] | null>((best, p) => (!best || Math.abs(p[0] - t) < Math.abs(best[0] - t) ? p : best), null);

  const hoverPts = hover == null ? [] : series.map((s) => ({ s, p: nearest(s, hover) })).filter((h) => h.p);
  const hx = hover == null ? 0 : x(hoverPts[0]?.p?.[0] ?? hover);
  const tipRight = hx > W * 0.6;

  return (
    <div className="card">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="販売所と取引所のスプレッド推移（対数目盛）"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
      >
        {ticks.map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="var(--border)" strokeWidth={1} />
            <text x={PAD.l - 8} y={y(v) + 4} textAnchor="end" fontSize={11} fill="var(--text-muted)">{fmtPct(v)}</text>
          </g>
        ))}
        <text x={PAD.l} y={H - 8} fontSize={11} fill="var(--text-muted)">{fmtTime(t0)}</text>
        <text x={W - PAD.r} y={H - 8} fontSize={11} fill="var(--text-muted)" textAnchor="end">{fmtTime(t1)}</text>

        {series.map((s) => (
          <path
            key={s.key}
            d={s.points.map((p, i) => `${i ? 'L' : 'M'}${x(p[0]).toFixed(1)},${y(p[1]).toFixed(1)}`).join('')}
            fill="none" stroke={s.color} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"
          />
        ))}

        {series.map((s) => {
          const last = s.points[s.points.length - 1];
          return last ? (
            <text key={s.key} x={x(last[0]) - 6} y={y(last[1]) - 9} textAnchor="end" fontSize={12} fontWeight={600} fill="var(--text-primary)">
              {s.label}
            </text>
          ) : null;
        })}

        {hover != null && hoverPts.length > 0 && (
          <g>
            <line x1={hx} x2={hx} y1={PAD.t} y2={PAD.t + IH} stroke="var(--border-strong)" strokeWidth={1} />
            {hoverPts.map(({ s, p }) => (
              <circle key={s.key} cx={x(p![0])} cy={y(p![1])} r={4.5} fill={s.color} stroke="var(--surface-1)" strokeWidth={2} />
            ))}
            <g transform={`translate(${tipRight ? hx - 172 : hx + 10}, ${PAD.t + 6})`}>
              <rect width={162} height={22 + hoverPts.length * 18} rx={6} fill="var(--surface-1)" stroke="var(--border-strong)" />
              <text x={10} y={16} fontSize={11} fill="var(--text-muted)">{fmtTime(hoverPts[0].p![0])}</text>
              {hoverPts.map(({ s, p }, i) => (
                <g key={s.key} transform={`translate(10, ${32 + i * 18})`}>
                  <rect width={9} height={9} y={-8} rx={2} fill={s.color} />
                  <text x={15} fontSize={12} fill="var(--text-secondary)">{s.label}</text>
                  <text x={152} textAnchor="end" fontSize={12} fontWeight={600} fill="var(--text-primary)">{fmtPct(p![1])}</text>
                </g>
              ))}
            </g>
          </g>
        )}
      </svg>
      <p className="muted" style={{ padding: '0 16px 14px', margin: 0 }}>
        縦軸は対数目盛です（社ごとに 5 桁以上の差があるため）。マウスを重ねると各時点の値が表示されます。
      </p>
    </div>
  );
}
