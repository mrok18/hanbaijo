'use client';

import Link from 'next/link';

export default function CostNextStep() {
  function recordNavigation() {
    try {
      const hostname = window.location.hostname;
      if (hostname !== 'hanbaijo.com' && hostname !== 'www.hanbaijo.com') return;
      if (window['ga-disable-G-J7HHCQK42T'] === true) return;
      window.gtag?.('event', 'navigation_click', {
        page_path: '/articles/fxtf-minimum-unit-margin',
        link_url: '/fx/fxtf',
        link_id: 'fxtf_minimum_cost_sheet',
        placement: 'after_cost_risks',
        transport_type: 'beacon',
      });
    } catch {
      // Keep the existing destination available when analytics is unavailable.
    }
  }

  return (
    <div className="callout">
      <strong>次は、スプレッド・手数料・スワップを確認</strong>
      <p><Link className="button primary" href="/fx/fxtf" onClick={recordNavigation} data-navigation-id="fxtf_minimum_cost_sheet" data-placement="after_cost_risks">FXTFのコストシートを見る →</Link></p>
    </div>
  );
}
