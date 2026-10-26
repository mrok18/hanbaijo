import { requireCronAuthorization } from '@/lib/cronAuth';

// Do not contact X or require its credentials after the integration is retired.
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const unauthorized = requireCronAuthorization(req);
  if (unauthorized) return unauthorized;

  return Response.json(
    { ok: false, code: 'x_integration_disabled' },
    { status: 410, headers: { 'Cache-Control': 'no-store' } },
  );
}
