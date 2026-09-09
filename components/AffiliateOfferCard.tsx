'use client';

import type { AffiliateOffer } from '@/lib/affiliates';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AffiliateOfferCard({ offer }: { offer: AffiliateOffer }) {
  const trackAffiliateClick = () => {
    window.gtag?.('event', 'affiliate_click', {
      offer_id: offer.id,
      offer_name: offer.name,
      affiliate_network: offer.network ?? 'a8',
      page_path: window.location.pathname,
      transport_type: 'beacon',
    });
  };

  return (
    <article className="affiliate-card">
      <div className="affiliate-card-head">
        <span>広告</span>
        <b>提携済み</b>
      </div>
      <p className="affiliate-category">{offer.category}</p>
      <h3>{offer.name}</h3>
      <p>{offer.description}</p>
      {offer.network === 'accesstrade' ? (
        <a href={offer.href} rel="nofollow sponsored" referrerPolicy="no-referrer-when-downgrade" onClick={trackAffiliateClick}>
          {offer.linkLabel}
          {/* アクセストレード指定の計測画像はリンクコード内に保持 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="affiliate-pixel" src={offer.impressionSrc} width="1" height="1" alt="" />
        </a>
      ) : <>
        <a href={offer.href} target="_blank" rel="nofollow sponsored noopener noreferrer" onClick={trackAffiliateClick}>
          {offer.linkLabel}<span aria-hidden="true"> →</span>
        </a>
        {/* A8.netが指定する成果計測用の1px画像 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="affiliate-pixel" src={offer.impressionSrc} width="1" height="1" alt="" />
      </>}
    </article>
  );
}
