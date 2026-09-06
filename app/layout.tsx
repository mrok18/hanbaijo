import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

const GA_ID = 'G-J7HHCQK42T';

export const metadata: Metadata = {
  metadataBase: new URL('https://hanbaijo.com'),
  title: {
    default: '販売所ウォッチ｜暗号資産の販売所スプレッドを30分ごとに自動計測',
    template: '%s｜販売所ウォッチ',
  },
  description:
    '国内の暗号資産取引所について、販売所と取引所のスプレッド（実質的な売買コスト）を公開APIから30分ごとに自動計測し、そのまま掲載しています。手動集計ではありません。',
  openGraph: { type: 'website', locale: 'ja_JP', siteName: '販売所ウォッチ' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body>
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand" aria-label="販売所ウォッチ トップページ">
              <svg className="mark" viewBox="0 0 30 30" aria-hidden="true">
                {/* 上段=販売所（広いスプレッド） 下段=取引所（狭いスプレッド） */}
                <rect x="1" y="6" width="7" height="5" rx="1.5" className="m-bar" />
                <rect x="8.6" y="6" width="12.8" height="5" rx="1.5" className="m-dealer" />
                <rect x="22" y="6" width="7" height="5" rx="1.5" className="m-bar" />
                <rect x="1" y="19" width="13" height="5" rx="1.5" className="m-bar" />
                <rect x="14.6" y="19" width="1.8" height="5" rx="0.9" className="m-exchange" />
                <rect x="17" y="19" width="12" height="5" rx="1.5" className="m-bar" />
              </svg>
              <span className="brand-text">
                <span className="brand-name">販売所ウォッチ</span>
                <span className="brand-sub">スプレッド実測 · hanbaijo.com</span>
              </span>
            </Link>
            <nav>
              <Link href="/articles">解説</Link>
              <Link href="/method">計測方法</Link>
              <Link href="/about">このサイトについて</Link>
            </nav>
            <span className="live" title="各社の公開APIから自動で取得しています">
              <i /> 自動計測
            </span>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <p>
              当サイトは暗号資産の売買コストに関する計測値を掲載する情報サイトです。特定の暗号資産や取引所の購入・利用を推奨するものではなく、
              投資勧誘を目的としたものではありません。掲載する数値は各社の公開APIから自動取得したものですが、正確性・完全性を保証するものではありません。
              取引の判断はご自身の責任で行ってください。
            </p>
            <p>
              当サイトはアフィリエイトプログラムを利用しており、リンク経由の口座開設等により運営者が報酬を受け取る場合があります。
              ただし報酬の有無は掲載順位・計測値に一切影響しません（掲載順はスプレッドの実測値のみで機械的に決定しています）。
            </p>
            <p style={{ marginTop: 16 }}>
              <Link href="/method">計測方法</Link>　<Link href="/about">このサイトについて</Link>　<Link href="/disclaimer">免責事項</Link>　<Link href="/contact">お問い合わせ</Link>
            </p>
            <p style={{ marginTop: 10 }}>© {new Date().getFullYear()} 販売所ウォッチ</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
