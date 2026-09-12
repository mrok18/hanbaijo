'use client';

import { usePathname } from 'next/navigation';
import ArticleStructuredData from '@/components/ArticleStructuredData';

const SELF_MANAGED_SCHEMA_SLUGS = new Set([
  'cfd-price-adjustment',
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

// These pages already emit their own Article object, but rely on the shared
// component for a consistent BreadcrumbList.
const INLINE_ARTICLE_SCHEMA_SLUGS = new Set([
  'crypto-collateral-loan-tax',
  'crypto-tax-reform-start-date',
  'dmm-cfd-account-opening-documents',
  'dmm-cfd-annual-profit-report',
  'dmm-cfd-deposit-minimum-quick',
  'dmm-cfd-index-vs-commodity',
  'dmm-cfd-tick-value-profit-loss',
  'dmm-fx-funding-transfer',
  'dmm-fx-swap-tax',
  'dmm-fx-trade-history-csv',
  'dmm-fx-trading-hours-maintenance',
  'dmm-kabu-account-opening-documents',
  'dmm-kabu-deposit-methods',
  'dmm-kabu-dividend-receiving-tax',
  'dmm-kabu-fractional-shares-buyback',
  'dmm-kabu-ipo-application',
  'dmm-kabu-margin-account-opening',
  'dmm-kabu-margin-call-maintenance-rate',
  'dmm-kabu-margin-trading-cost',
  'dmm-kabu-nisa-account-opening',
  'dmm-kabu-nisa-fees-products',
  'dmm-kabu-order-types-expiration',
  'dmm-kabu-points-cash-exchange',
  'dmm-kabu-shareholder-benefit',
  'dmm-kabu-specific-account-tax',
  'dmm-kabu-stock-transfer',
  'dmm-kabu-tob-application',
  'dmm-kabu-tools-comparison',
  'dmm-kabu-tsumitate-kabu-nisa',
  'dmm-kabu-us-dividend-tax',
  'dmm-kabu-us-margin-call',
  'dmm-kabu-us-margin-cost',
  'dmm-kabu-us-margin-vip-courses',
  'dmm-kabu-us-stock-order-hours',
  'dmm-kabu-usd-shortage',
  'dmm-kabu-withdrawal-rules',
  'dmmfx-stock-collateral-service',
  'domestic-vs-overseas-fx-tax',
  'foreign-stock-trading-fees',
  'fpo-fx-master-guide-before-download',
  'fpo-fx-practice-checklist',
  'fx-annual-report-provider-comparison',
  'fx-annual-transaction-report-tax-return',
  'fx-cfd-futures-margin-comparison',
  'fx-company-selection-cost-checklist',
  'fx-etax-input-guide',
  'fx-loss-carryforward-filing',
  'fx-master-guide-study-order',
  'fx-multiple-accounts-cost-risk',
  'fx-profit-loss-offset-tax',
  'fx-profit-under-200k-tax-return',
  'fx-spread-cost',
  'fx-spread-difference-annual-cost',
  'fx-spread-monthly-cost',
  'fx-tax-deductible-expenses',
  'fx-tax-rate-calculation',
  'gmo-click-cfd-svs',
  'gmo-click-fx-neo-trading-rules',
  'jfx-allowed-spread-setting',
  'jfx-swap-calendar',
  'jfx-trade-history-csv-tax-report',
  'light-fx-trading-rules',
  'matsui-account-types',
  'matsui-fx-annual-profit-report',
  'matsui-fx-auto-trading-setting',
  'matsui-fx-insufficient-funds',
  'matsui-fx-leverage-margin',
  'matsui-fx-one-currency-order',
  'matsui-fx-swap-transfer-tax',
  'minna-fx-order-types-expiration',
  'minna-fx-slippage-execution',
  'minna-fx-spread-light-pair',
  'minna-fx-swap-points-calendar',
  'minna-fx-trading-hours-maintenance',
  'rakuten-fx-fees-total-cost',
  'rakuten-securities-domestic-stock-fees',
  'stock-round-trip-cost',
  'tossy-deposit-withdrawal-transfer',
  'tossy-tax-reporting',
  'tossy-trading-hours-rollover',
  'us-stock-margin-fee-comparison',
]);

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefix = '/articles/';
  const slug = pathname.startsWith(prefix)
    ? decodeURIComponent(pathname.slice(prefix.length).replace(/\/$/, ''))
    : '';
  const shouldAddSchema = Boolean(slug) && !SELF_MANAGED_SCHEMA_SLUGS.has(slug);

  return (
    <>
      {shouldAddSchema ? (
        <ArticleStructuredData slug={slug} includeArticle={!INLINE_ARTICLE_SCHEMA_SLUGS.has(slug)} />
      ) : null}
      {children}
    </>
  );
}
