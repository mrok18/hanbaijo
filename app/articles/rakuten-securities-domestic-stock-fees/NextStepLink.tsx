'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

const destinations = {
  compare: '/stocks/domestic-fee-comparison',
  calculate: '/tools/cost-calculator',
  conditions: '/stocks/rakuten',
} as const;

export default function NextStepLink({ destination, placement, children }: {
  destination: keyof typeof destinations;
  placement: 'summary' | 'holding_example';
  children: ReactNode;
}) {
  const href = destinations[destination];
  function recordClick() {
    // Use the existing GA/consent setup; navigation also works without analytics.
    try {
      const hostname = window.location.hostname;
      if (hostname !== 'hanbaijo.com' && hostname !== 'www.hanbaijo.com') return;
      if (window['ga-disable-G-J7HHCQK42T'] === true) return;
      window.gtag?.('event', 'navigation_click', {
        page_path: '/articles/rakuten-securities-domestic-stock-fees',
        link_url: href,
        link_id: `rakuten_${destination}`,
        placement,
        transport_type: 'beacon',
      });
    } catch {
      // Measurement must never prevent the requested navigation.
    }
  }
  return <Link href={href} onClick={recordClick} data-navigation-id={`rakuten_${destination}`} data-placement={placement}>{children}</Link>;
}
