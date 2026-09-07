/**
 * Vercel Cron と保守用APIに共通のBearer認証。
 *
 * CRON_SECRET が未設定の環境では必ず拒否する（fail closed）。
 * 呼び出し元を示すだけのUser-Agentや独自ヘッダーは認証に使わない。
 */
export function requireCronAuthorization(req: Request): Response | null {
  const secret = process.env.CRON_SECRET;
  const authorization = req.headers.get('authorization');

  if (!secret || authorization !== `Bearer ${secret}`) {
    return Response.json(
      { ok: false, error: 'unauthorized' },
      {
        status: 401,
        headers: {
          'Cache-Control': 'no-store',
          'WWW-Authenticate': 'Bearer',
        },
      },
    );
  }

  return null;
}
