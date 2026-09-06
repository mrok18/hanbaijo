export type Venue = 'exchange' | 'dealer';
export interface Row {
  id: string; name: string; venue: Venue; url: string;
  bid: number | null; ask: number | null; mid: number | null;
  spread: number | null; spreadPct: number | null; error: string | null;
}
export interface Snapshot { measuredAt: string; rows: Row[] }
export declare const SOURCES: { id: string; name: string; venue: Venue; url: string }[];
export declare function measureAll(): Promise<Snapshot>;
