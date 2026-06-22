import Link from 'next/link';
import MembershipPlanCard from '../components/MembershipPlanCard';
import ParallaxHero from '../components/ParallaxHero';
import JumpNav from '../components/JumpNav';
import PageLayout from '../components/PageLayout';
import { themeImages } from '../lib/assets';
import { kfhPageHeroes } from '../data/kfhImages';
import {
  formatZAR,
  formatZARBadge,
  membershipBenefits,
  membershipPlanCards,
  siteConfig,
} from '../lib/siteConfig';

function formatPlanPrice(amount: number, display?: string) {
  return formatZARBadge(amount, display);
}

export default function MembershipPage() {
  const { contact } = siteConfig;

  return (
    <PageLayout bodyClass="wp-singular page-template-default page page-id-4701 wp-custom-logo wp-theme-badm">
      <ParallaxHero
        extraClass="membership-hero"
        title="Membership"
        description="Unlock a world of play, perks, and savings at Kidz Fun House! Membership pays for itself in as little as 2 visits."
        desktopImage={kfhPageHeroes.membership.desktop}
        mobileImage={kfhPageHeroes.membership.mobile}
      />

      <JumpNav
        navClassName="membership-nav"
        items={[
          { label: 'Membership tiers', href: '#membership' },
          { label: 'Core benefits', href: '#core' },
          { label: 'Gift & renew', href: '#gift' },
          { label: 'FAQ', href: '#faq' },
        ]}
      />

      <div id="membership" className="wp-block-group membership-cards">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <MembershipPlanCard
                {...membershipPlanCards[0]}
                price={formatPlanPrice(membershipPlanCards[0].amount)}
                priceYear={`${formatZAR(membershipPlanCards[0].amount)}/Year`}
              />
            </div>
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <MembershipPlanCard
                {...membershipPlanCards[1]}
                price={formatPlanPrice(membershipPlanCards[1].amount)}
                priceYear={`${formatZAR(membershipPlanCards[1].amount)}/Year`}
              />
            </div>
          </div>

          <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <MembershipPlanCard
                {...membershipPlanCards[2]}
                price={formatPlanPrice(membershipPlanCards[2].amount)}
                priceYear={`${formatZAR(membershipPlanCards[2].amount)}/Year`}
              />
            </div>
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              {'topSpacer' in membershipPlanCards[3] && membershipPlanCards[3].topSpacer ? (
                <div style={{ height: 45 }} aria-hidden="true" className="wp-block-spacer" />
              ) : null}
              <MembershipPlanCard
                {...membershipPlanCards[3]}
                price={formatPlanPrice(membershipPlanCards[3].amount)}
                priceYear={`${formatZAR(membershipPlanCards[3].amount)}/Year`}
              />
            </div>
          </div>

          <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <MembershipPlanCard
                {...membershipPlanCards[4]}
                price={formatPlanPrice(
                  membershipPlanCards[4].amount,
                  'amountDisplay' in membershipPlanCards[4]
                    ? membershipPlanCards[4].amountDisplay
                    : undefined
                )}
                priceYear={`${formatPlanPrice(membershipPlanCards[4].amount, 'amountDisplay' in membershipPlanCards[4] ? membershipPlanCards[4].amountDisplay : undefined)}/Year`}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="core" className="wp-block-group membership-banner">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <figure className="wp-block-image size-large">
            <img
              decoding="async"
              width={1024}
              height={479}
              src={themeImages.membershipBanner}
              alt=""
            />
          </figure>
          <p>
            A membership pays for itself in as little as 2 visits, and once you experience the
            perks of membership, you won&apos;t want to go back!
          </p>
          <h4 className="wp-block-heading">CORE BENEFITS:</h4>
          <ul className="wp-block-list">
            {membershipBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div id="gift" className="wp-block-group membership-promo-card">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading">One membership, memories for all</h2>
          <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="promo-card">
                <div className="promo-card__icon">
                  <img
                    decoding="async"
                    src={themeImages.ticketOrange}
                    alt=""
                    width={103}
                    height={103}
                  />
                </div>
                <h3 className="promo-card__heading">renew your membership</h3>
                <div className="promo-card__body">
                  <p>
                    Renew your membership for another year of discovery and joyful play! Save 10%
                    (and save some trees) when you sign up for auto-renew!
                  </p>
                </div>
                <div className="promo-card__cta">
                  <Link href="/membership/verify/?intent=renew" className="promo-card__cta-link">
                    renew your membership
                  </Link>
                </div>
              </div>
            </div>
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="promo-card promo-2">
                <div className="promo-card__icon">
                  <img
                    decoding="async"
                    src={themeImages.ticketsTwo}
                    alt=""
                    width={103}
                    height={103}
                  />
                </div>
                <h3 className="promo-card__heading">gift a membership</h3>
                <div className="promo-card__body">
                  <p>
                    Share the joy of year-round adventure at Kidz Fun House — where every visit
                    brings something new to explore.
                  </p>
                </div>
                <div className="promo-card__cta">
                  <Link href="/membership/join/?action=gift" className="promo-card__cta-link">
                    gift a membership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="faq"
        className="wp-block-group membership-promo-card faq has-white-background-color has-background"
      >
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading">FAQ</h2>

          <details className="wp-block-details is-layout-flow wp-block-details-is-layout-flow">
            <summary>Getting started: </summary>
            <div className="wp-block-group membership-faq is-vertical is-nowrap is-layout-flex wp-block-group-is-layout-flex">
              <h4 className="wp-block-heading">Where do members check-in?</h4>
              <p>
                All named adults listed on a membership must check in at the front desk with a
                staff member before entering the play centre.
              </p>
              <h4 className="wp-block-heading">How long is my membership active for?</h4>
              <p>
                Membership duration depends on your tier — from a single month to seasonal holiday
                access. Contact us for details on your plan.
              </p>
              <h4 className="wp-block-heading">
                Where do I find the play centre policies that members must abide by?
              </h4>
              <p>
                Please see our policies <Link href="/about/policies/">here.</Link>
              </p>
            </div>
          </details>

          <details className="wp-block-details is-layout-flow wp-block-details-is-layout-flow">
            <summary>Using your membership: </summary>
            <div className="wp-block-group membership-faq is-vertical is-nowrap is-layout-flex wp-block-group-is-layout-flex">
              <h4 className="wp-block-heading">
                Can I apply the cost of my admission towards membership?
              </h4>
              <p>
                Contact us at{' '}
                <a href={`mailto:${contact.membershipEmail}`}>{contact.membershipEmail}</a> to
                discuss applying recent admission towards a membership.
              </p>
              <h4 className="wp-block-heading">Do members get party discounts?</h4>
              <p>
                Yes! Members receive discounts on party packages and bundles. See our{' '}
                <Link href="/summer-birthdays/">parties page</Link> for details.
              </p>
            </div>
          </details>

          <details className="wp-block-details is-layout-flow wp-block-details-is-layout-flow">
            <summary>Renewals &amp; Billing: </summary>
            <div className="wp-block-group membership-faq is-vertical is-nowrap is-layout-flex wp-block-group-is-layout-flex">
              <h4 className="wp-block-heading">How do automatic renewals work?</h4>
              <p>
                Signing up for automatic renewal saves 10% off your membership. Enter promo code
                Auto10 at checkout.
              </p>
              <h4 className="wp-block-heading">What is the loyalty program?</h4>
              <p>
                Join our loyalty program for extra member benefits.{' '}
                <Link href="/give/">Learn more</Link>.
              </p>
            </div>
          </details>

          <div className="wp-block-columns ready-to-join-box is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column ready-to-join image-block is-layout-flow wp-block-column-is-layout-flow">
              <figure className="wp-block-image size-full is-style-shape-angle">
                <img
                  loading="lazy"
                  decoding="async"
                  width={541}
                  height={411}
                  src={themeImages.readyToJoin}
                  alt=""
                />
              </figure>
            </div>
            <div className="wp-block-column ready-to-join text-block is-layout-flow wp-block-column-is-layout-flow">
              <h3 className="wp-block-heading">ready to join?</h3>
              <h5 className="wp-block-heading">Membership Tiers:</h5>
              <ul className="wp-block-list">
                {membershipPlanCards.map((plan) => (
                  <li key={plan.tier}>
                    <a href="#membership">{plan.tier}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
