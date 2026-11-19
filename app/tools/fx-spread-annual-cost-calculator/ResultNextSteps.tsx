'use client';

import Link from 'next/link';
import styles from './next-steps.module.css';

export default function ResultNextSteps() {
  function recordNavigation(linkId: string, href: string) {
    try {
      window.gtag?.('event', 'navigation_click', {
        page_path: '/tools/fx-spread-annual-cost-calculator',
        link_id: linkId,
        link_url: href,
        placement: 'calculation_result',
        transport_type: 'beacon',
      });
    } catch {
      // Analytics availability must not prevent navigation.
    }
  }

  return <nav className={styles.nextSteps} aria-label="計算後の条件確認">
    <h3>次は、適用条件を確かめる</h3>
    <p>入力値は特定の会社の見積りではありません。取引時間・数量・別費用を確認し、広告は計算結果と分けてご覧ください。</p>
    <Link href="/fx/usdjpy-spread-comparison" data-navigation-id="annual_compare" onClick={() => recordNavigation('annual_compare', '/fx/usdjpy-spread-comparison')}>米ドル円10社の適用条件を比べる →</Link>
    <a href="#fx-service-conditions" data-navigation-id="annual_ad_section" onClick={() => recordNavigation('annual_ad_section', '#fx-service-conditions')}>掲載中サービスの広告欄を見る ↓</a>
  </nav>;
}
