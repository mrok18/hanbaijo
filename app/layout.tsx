import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

const GA_ID = 'G-J7HHCQK42T';

export const metadata: Metadata = {
  metadataBase: new URL('https://hanbaijo.com'),
  title: {
    default: '金融コストウォッチ｜見えない取引コストを、測って比べる',
    template: '%s｜金融コストウォッチ',
  },
  description:
    '暗号資産を起点に、FX・CFD・株式・先物まで。スプレッドや手数料など、金融商品の見えにくい取引コストを実測・整理する独立系データメディアです。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '金融コストウォッチ',
    title: '金融コストウォッチ｜見えない取引コストを、測って比べる',
    description: '金融商品の見えにくい取引コストを、実測データと明示した計算方法で可視化します。',
  },
};

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
      <rect width="44" height="44" rx="13" className="brand-mark-bg" />
      <path d="M9 30.5h5.5V22H9v8.5Zm10.25 0h5.5V13h-5.5v17.5Zm10.25 0H35V18h-5.5v12.5Z" className="brand-mark-bars" />
      <path d="M9 34.5h26" className="brand-mark-rule" />
    </svg>
  );
}

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
          <div className="site-shell header-inner">
            <Link href="/" className="brand" aria-label="金融コストウォッチ トップページ">
              <BrandMark />
              <span className="brand-copy">
                <span className="brand-name">金融コストウォッチ</span>
                <span className="brand-domain">hanbaijo.com</span>
              </span>
            </Link>
            <nav aria-label="メインナビゲーション">
              <Link href="/fx">FX</Link>
              <Link href="/markets">対象商品</Link>
              <Link href="/tools/cost-calculator">計算機</Link>
              <Link href="/articles">知る</Link>
              <Link href="/method">計測方法</Link>
              <Link href="/about">運営方針</Link>
            </nav>
            <span className="live-pill" title="暗号資産の公開APIを30分ごとに自動計測しています">
              <i /> BTC計測中
            </span>
          </div>
        </header>
        <main className="site-shell">{children}</main>
        <footer className="site-footer">
          <div className="site-shell footer-grid">
            <div className="footer-brand">
              <BrandMark />
              <div>
                <strong>金融コストウォッチ</strong>
                <p>見えない取引コストを、測って比べる。</p>
              </div>
            </div>
            <div className="footer-links" aria-label="フッターナビゲーション">
              <Link href="/fx">FXコスト比較</Link>
              <Link href="/cfd">CFDコスト比較</Link>
              <Link href="/markets">対象商品</Link>
              <Link href="/tools/cost-calculator">取引コスト計算機</Link>
              <Link href="/articles">解説記事</Link>
              <Link href="/method">計測方法</Link>
              <Link href="/about">このサイトについて</Link>
              <Link href="/disclaimer">免責事項</Link>
              <Link href="/contact">お問い合わせ</Link>
            </div>
            <div className="footer-notes">
              <p>
                当サイトは金融商品のコストに関する計測値・公表値・試算値を掲載する情報サイトです。
                特定の金融商品や事業者の利用を推奨するものではなく、投資勧誘を目的としません。
                取引条件は各社の公式情報を確認し、最終的な判断はご自身の責任で行ってください。
              </p>
              <p>
                当サイトはアフィリエイトプログラムを利用し、リンク経由の申込み等で報酬を受け取る場合があります。
                広告の有無や報酬額は、実測値・計算結果・掲載順位に影響しません。
              </p>
            </div>
            <p className="copyright">© {new Date().getFullYear()} hanbaijo.com</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
