import type { AffiliateOffer } from '@/lib/affiliates';

export default function AffiliateOfferCard({ offer }: { offer: AffiliateOffer }) {
  return (
    <article className="affiliate-card">
      <div className="affiliate-card-head">
        <span>広告</span>
        <b>提携済み</b>
      </div>
      <p className="affiliate-category">{offer.category}</p>
      <h3>{offer.name}</h3>
      <p>{offer.description}</p>
      <a href={offer.href} target="_blank" rel="nofollow sponsored noopener noreferrer">
        {offer.linkLabel}<span aria-hidden="true"> →</span>
      </a>
      {/* A8.netが指定する成果計測用の1px画像 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="affiliate-pixel" src={offer.impressionSrc} width="1" height="1" alt="" />
    </article>
  );
}
