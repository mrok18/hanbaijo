'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

const targets = {
  markets: '/markets',
  tools: '/tools',
} as const;

export default function HomeHeroNavigationLink({ target, className, children }: {
  target: keyof typeof targets;
  className: string;
  children: ReactNode;
}) {
  const href = targets[target];
  function recordNavigation() {
    try {
      const hostname = window.location.hostname;
      if (hostname !== 'hanbaijo.com' && hostname !== 'www.hanbaijo.com') return;
      if (window['ga-disable-G-J7HHCQK42T'] === true) return;
      window.gtag?.('event', 'navigation_click', {
        page_path: '/',
        link_url: href,
        link_id: `home_hero_${target}`,
        placement: 'hero',
        transport_type: 'beacon',
      });
    } catch {
      // Keep the existing destination available when analytics is unavailable.
    }
  }
  return <Link href={href} className={className} onClick={recordNavigation} data-navigation-id={`home_hero_${target}`} data-placement="hero">{children}</Link>;
}
