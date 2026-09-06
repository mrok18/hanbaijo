import { whoAmI } from '@/lib/xClient.mjs';

// どのXアカウントとして認証されているかを確認するだけの窓口。投稿は一切しない。
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const me = await whoAmI();
    return Response.json({ ok: true, 投稿されるアカウント: '@' + me.username, 表示名: me.name, id: me.id });
  } catch (e) {
    return Response.json({ ok: false, error: String((e as Error).message) }, { status: 400 });
  }
}
