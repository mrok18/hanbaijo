'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

declare global {
  interface Window {
    'ga-disable-G-J7HHCQK42T'?: boolean;
  }
}

const targets = {
  night_fee: { source: '/articles/nikkei225-futures-night-session', href: '/futures/nikkei225-fee-comparison', placement: 'article_end' },
  fee_matsui_calculator: { source: '/futures/nikkei225-fee-comparison', href: '/tools/matsui-futures-cost-calculator', placement: 'next_check' },
  fee_generic_calculator: { source: '/futures/nikkei225-fee-comparison', href: '/tools/cost-calculator', placement: 'page_end' },
} as const;

export default function FuturesNavigationLink({ target, className, children }: {
  target: keyof typeof targets;
  className?: string;
  children: ReactNode;
}) {
  const destination = targets[target];
  function recordNavigation() {
    try {
      const hostname = window.location.hostname;
      if (hostname !== 'hanbaijo.com' && hostname !== 'www.hanbaijo.com') return;
      if (window['ga-disable-G-J7HHCQK42T'] === true) return;
      window.gtag?.('event', 'navigation_click', {
        page_path: destination.source,
        link_url: destination.href,
        link_id: `futures_${target}`,
        placement: destination.placement,
        transport_type: 'beacon',
      });
    } catch {
      // Keep navigation available when the existing analytics tag is unavailable.
    }
  }
  return <Link href={destination.href} className={className} onClick={recordNavigation} data-navigation-id={`futures_${target}`} data-placement={destination.placement}>{children}</Link>;
}
