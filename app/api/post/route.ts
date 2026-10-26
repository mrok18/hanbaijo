import { requireCronAuthorization } from '@/lib/cronAuth';

export const dynamic = 'force-dynamic';

// Keep the authorization boundary without loading X credentials, measuring
// rates, or reading/writing posting state after the integration is retired.
export async function GET(req: Request) {
  const unauthorized = requireCronAuthorization(req);
  if (unauthorized) return unauthorized;

  return Response.json(
    { ok: false, code: 'x_posting_disabled' },
    { status: 410, headers: { 'Cache-Control': 'no-store' } },
  );
}
