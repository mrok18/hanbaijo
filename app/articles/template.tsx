'use client';

import { usePathname } from 'next/navigation';
import ArticleStructuredData from '@/components/ArticleStructuredData';

const EXPLICIT_SCHEMA_SLUGS = new Set([
  'systre-select-365-vs-matsui-auto-trading',
  'systre-select-365-account-opening-flow',
  'systre-select-365-start-operation-flow',
  'systre-select-365-strategy-selection',
  'systre-select-365-stop-switch',
  'systre-select-365-losscut-margin-shortage',
  'systre-select-365-vs-otc-fx',
  'systre-select-365-total-cost',
  'systre-select-365-recommended-margin',
  'matsui-fx-auto-trading-cost',
  'matsui-fx-auto-trading-stop-restart',
]);

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefix = '/articles/';
  const slug = pathname.startsWith(prefix)
    ? decodeURIComponent(pathname.slice(prefix.length).replace(/\/$/, ''))
    : '';
  const shouldAddSchema = Boolean(slug) && !EXPLICIT_SCHEMA_SLUGS.has(slug);

  return (
    <>
      {shouldAddSchema ? <ArticleStructuredData slug={slug} /> : null}
      {children}
    </>
  );
}
