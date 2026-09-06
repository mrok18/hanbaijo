import { measureAll } from '@/lib/exchanges.mjs';

export const revalidate = 60;

export async function GET() {
  const snap = await measureAll();
  return Response.json(snap, {
    headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' },
  });
}
