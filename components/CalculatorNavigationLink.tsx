'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

const targets = {
  annual: '/tools/fx-spread-annual-cost-calculator',
  swap: '/tools/fx-swap-break-even-calculator',
  stocks: '/stocks/domestic-fee-comparison',
} as const;

export default function CalculatorNavigationLink({ target, className, children }: {
  target: keyof typeof targets;
  className?: string;
  children: ReactNode;
}) {
  const href = targets[target];
  function recordNavigation() {
    try {
      const hostname = window.location.hostname;
      if (hostname !== 'hanbaijo.com' && hostname !== 'www.hanbaijo.com') return;
      if (window['ga-disable-G-J7HHCQK42T'] === true) return;
      window.gtag?.('event', 'navigation_click', {
        page_path: '/tools/cost-calculator',
        link_url: href,
        link_id: `cost_calculator_${target}`,
        placement: 'calculator_related',
        transport_type: 'beacon',
      });
    } catch {
      // Keep navigation available when the existing analytics tag is unavailable.
    }
  }
  return <Link href={href} className={className} onClick={recordNavigation} data-navigation-id={`cost_calculator_${target}`} data-placement="calculator_related">{children}</Link>;
}
