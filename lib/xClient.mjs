// X API v2 への投稿。OAuth 1.0a の署名を自前で行う（外部依存なし）。
import crypto from 'node:crypto';

const enc = (s) => encodeURIComponent(s).replace(/[!*'()]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());

function sign(method, url, params, consumerSecret, tokenSecret) {
  const base = [method.toUpperCase(), enc(url), enc(Object.keys(params).sort().map((k) => `${enc(k)}=${enc(params[k])}`).join('&'))].join('&');
  const key = `${enc(consumerSecret)}&${enc(tokenSecret)}`;
  return crypto.createHmac('sha1', key).update(base).digest('base64');
}

/** 投稿する。成功で { id, text } を返す。 */
export async function postTweet(text) {
  const {
    X_CONSUMER_KEY: ck,
    X_CONSUMER_SECRET: cs,
    X_ACCESS_TOKEN: at,
    X_ACCESS_TOKEN_SECRET: ats,
  } = process.env;
  if (!ck || !cs || !at || !ats) throw new Error('X の認証情報が環境変数に設定されていません');

  const url = 'https://api.x.com/2/tweets';
  const oauth = {
    oauth_consumer_key: ck,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: String(Math.floor(Date.now() / 1000)),
    oauth_token: at,
    oauth_version: '1.0',
  };
  // JSON ボディは署名に含めない（OAuth 1.0a の仕様どおり）
  oauth.oauth_signature = sign('POST', url, oauth, cs, ats);
  const header = 'OAuth ' + Object.keys(oauth).sort().map((k) => `${enc(k)}="${enc(oauth[k])}"`).join(', ');

  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: header, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const body = await res.text();
  if (!res.ok) throw new Error(`X API ${res.status}: ${body.slice(0, 300)}`);
  return JSON.parse(body).data;
}
