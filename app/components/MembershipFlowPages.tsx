import Link from 'next/link';
import {
  findPlanBySlug,
  formatCheckoutAmount,
  formatTierLabel,
  getAutoRenewAmount,
  getChangeMembershipPlans,
  getTierDetail,
  tierToSlug,
} from '../lib/membership';

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="membership-tier-detail__check">
      <path
        d="M4 10.5 8 14.5 16 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChangeMembershipHub() {
  const plans = getChangeMembershipPlans();

  return (
    <div className="membership-flow">
      <div className="membership-flow__title-row membership-flow__title-row--wide">
        <h1 className="membership-flow__title">Membership</h1>
        <div className="membership-flow__title-cta membership-flow__title-cta--verify">
          <span>Are you a member?</span>
          <Link href="/membership/verify/" className="membership-flow__verify-btn">
            Verify membership
          </Link>
        </div>
      </div>

      <div className="membership-flow__intro-copy">
        <p>
          Enjoy unlimited playtime, member discounts, early access to events, and special
          perks—all designed to make every visit feel a little more magical (and a lot more
          fun).
        </p>
        <p>
          Choose the membership that fits your family best—and get ready to grow, play, and dream
          bigger together.
        </p>
      </div>

      <div className="membership-change-list">
        {plans.map((plan) => {
          const slug = tierToSlug(plan.tier);
          const detail = getTierDetail(slug);
          return (
            <article key={slug} className="membership-change-card">
              <div className="membership-change-card__main">
                <h2 className="membership-change-card__tier">{formatTierLabel(plan.tier)}</h2>
                <p className="membership-change-card__description">
                  {detail?.description ??
                    `Membership for ${plan.people.toLowerCase()} with a full year of play centre access and member benefits.`}
                </p>
              </div>
              <div className="membership-change-card__actions">
                <Link
                  href={`/membership/change/${slug}/`}
                  className="membership-change-card__details"
                >
                  View details
                </Link>
                <Link
                  href={`/membership/join/?tier=${slug}`}
                  className="membership-change-card__join"
                >
                  Join now
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

type MembershipTierDetailViewProps = {
  slug: string;
};

export function MembershipTierDetailView({ slug }: MembershipTierDetailViewProps) {
  const plan = findPlanBySlug(slug);
  const detail = getTierDetail(slug);

  if (!plan || !detail) {
    return (
      <div className="membership-flow">
        <Link href="/membership/change/" className="membership-flow__back">
          &lt; All memberships
        </Link>
        <h1 className="membership-flow__title">Membership not found</h1>
        <p>That membership tier could not be found.</p>
        <Link href="/membership/change/" className="membership-flow__text-link">
          Browse all memberships
        </Link>
      </div>
    );
  }

  const autoRenew = getAutoRenewAmount(plan.amount);

  return (
    <div className="membership-flow">
      <Link href="/membership/change/" className="membership-flow__back">
        &lt; All memberships
      </Link>

      <article className="membership-tier-detail">
        <div className="membership-tier-detail__header">
          <div>
            <h1 className="membership-tier-detail__title">{formatTierLabel(plan.tier)}</h1>
            <p className="membership-tier-detail__description">{detail.description}</p>
          </div>
          <Link
            href={`/membership/join/?tier=${slug}`}
            className="membership-tier-detail__join"
          >
            Join now
          </Link>
        </div>

        <ul className="membership-tier-detail__features">
          {detail.features.map((feature) => (
            <li key={feature}>
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="membership-tier-detail__options">
          <h2 className="membership-tier-detail__options-title">Options</h2>
          <div className="membership-tier-detail__options-table">
            <div className="membership-tier-detail__options-row membership-tier-detail__options-row--head">
              <span>Term</span>
              <span>Offering</span>
              <span>Type</span>
              <span>Price</span>
            </div>
            <div className="membership-tier-detail__options-row">
              <span>1 Year</span>
              <span>1 Year</span>
              <span>Membership</span>
              <span>{formatCheckoutAmount(plan.amount)}</span>
            </div>
            <div className="membership-tier-detail__options-row">
              <span>1 Year</span>
              <span>Auto-Renewal</span>
              <span>Membership</span>
              <span>{formatCheckoutAmount(autoRenew)}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
