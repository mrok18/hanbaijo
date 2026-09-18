export const dynamic = 'force-static';

export function GET() {
  return new Response('google.com, pub-2826552314565242, DIRECT, f08c47fec0942fa0', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
