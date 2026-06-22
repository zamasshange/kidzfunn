'use client';

import Link from 'next/link';
import { useEffect, useId, useRef } from 'react';
import { getMembershipBadgeParts, membershipAccordionBenefits } from '../lib/siteConfig';

export type MembershipPlanProps = {
  scheme: 'teal' | 'orange';
  tier: string;
  price: string;
  priceYear: string;
  people: string;
  ctaText: string;
  ctaHref: string;
  labels?: { left?: string; right?: string };
  showStar?: boolean;
  benefitLines?: readonly string[];
  pricingLabel?: string;
  extraClass?: string;
  footerAccordions?: ReadonlyArray<{ title: string; items: readonly string[] }>;
  footerButtons?: ReadonlyArray<{ label: string; href: string }>;
};

function StarIcon() {
  return (
    <svg
      className="membership-plan__star"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="18.5,1 22.9,13.2 36,13.2 25.4,21.1 29.8,33.3 18.5,25.9 7.2,33.3 11.6,21.1 1,13.2 14.1,13.2"
        fill="white"
      />
    </svg>
  );
}

function PriceBadge({ price }: { price: string }) {
  const { size } = getMembershipBadgeParts(price);

  return (
    <div
      className={`membership-plan__price-badge membership-plan__price-badge--${size}`}
      aria-label={price.replace(/\u00A0/g, ' ')}
    >
      {price}
    </div>
  );
}

export default function MembershipPlanCard({
  scheme,
  tier,
  price,
  priceYear,
  people,
  ctaText,
  ctaHref,
  labels,
  showStar,
  benefitLines,
  pricingLabel = 'Pricing',
  extraClass = '',
  footerAccordions,
  footerButtons,
}: MembershipPlanProps) {
  const blockId = useId().replace(/:/g, '');
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const block = rootRef.current;
    if (!block) return;

    const triggers = block.querySelectorAll<HTMLButtonElement>(
      '.membership-plan__accordion-trigger, .membership-plan__footer-accordion-trigger'
    );

    const cleanups: Array<() => void> = [];

    triggers.forEach((trigger) => {
      const onClick = () => {
        const item = trigger.closest(
          '.membership-plan__accordion-item, .membership-plan__footer-accordion-item'
        );
        const content = item?.querySelector<HTMLElement>('.membership-plan__accordion-content');
        const icon = trigger.querySelector<HTMLElement>('.membership-plan__accordion-icon');
        if (!item || !content || !icon) return;

        const isOpen = item.classList.contains('is-open');
        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
        icon.textContent = isOpen ? '+' : '−';

        if (isOpen) {
          content.setAttribute('hidden', '');
        } else {
          content.removeAttribute('hidden');
        }
      };

      trigger.addEventListener('click', onClick);
      cleanups.push(() => trigger.removeEventListener('click', onClick));
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div
      ref={rootRef}
      id={`membership-plan-${blockId}`}
      className={`membership-plan membership-plan--${scheme} ${extraClass}`.trim()}
    >
      {labels?.left || labels?.right ? (
        <div className="membership-plan__labels">
          {labels.left ? (
            <div className="membership-plan__label membership-plan__label--left">{labels.left}</div>
          ) : null}
          {labels.right ? (
            <div className="membership-plan__label membership-plan__label--right">{labels.right}</div>
          ) : null}
        </div>
      ) : null}

      <div className="membership-plan__card">
        <div className="membership-plan__header">
          <div className="membership-plan__header-inner">
            {showStar ? <StarIcon /> : null}
            <span className="membership-plan__tier">{tier}</span>
          </div>
          <PriceBadge price={price} />
        </div>

        <div className="membership-plan__who-included">
          <p className="membership-plan__section-title">Who&apos;s Included?</p>
          <p className="membership-plan__who-included-text">{people}</p>
        </div>

        <div className="membership-plan__accordion-item">
          <button className="membership-plan__accordion-trigger" type="button" aria-expanded="false">
            <span className="membership-plan__accordion-label">Core Membership Benefits:</span>
            <span className="membership-plan__accordion-icon" aria-hidden="true">
              +
            </span>
          </button>
          <div className="membership-plan__accordion-content" hidden>
            <ul>
              {membershipAccordionBenefits.map((benefit) => (
                <li key={benefit} dangerouslySetInnerHTML={{ __html: benefit }} />
              ))}
            </ul>
          </div>
        </div>

        {benefitLines?.map((line) => (
          <div key={line} className="membership-plan__benefit-line">
            {line}
          </div>
        ))}

        <div className="membership-plan__pricing">
          <span className="membership-plan__pricing-label">{pricingLabel}</span>
          <span className="membership-plan__pricing-value">{priceYear}</span>
        </div>
      </div>

      <div className="membership-plan__cta">
        <Link href={ctaHref} className="membership-plan__cta-link">
          {ctaText}
        </Link>
      </div>

      {footerAccordions?.length ? (
        <div className="membership-plan__footer-accordions">
          {footerAccordions.map((accordion) => (
            <div key={accordion.title} className="membership-plan__footer-accordion-item">
              <button
                className="membership-plan__footer-accordion-trigger"
                type="button"
                aria-expanded="false"
              >
                <span className="membership-plan__accordion-label">{accordion.title}</span>
                <span className="membership-plan__accordion-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="membership-plan__accordion-content" hidden>
                <ul className="wp-block-list">
                  {accordion.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {footerButtons?.length ? (
        <div className="membership-plan__footer-buttons">
          {footerButtons.map((button) => (
            <Link key={button.label} href={button.href} className="membership-plan__footer-btn">
              {button.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
