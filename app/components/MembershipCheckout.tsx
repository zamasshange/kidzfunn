'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { formatZAR, siteConfig } from '../lib/siteConfig';

type MembershipCheckoutProps = {
  tier: string;
  tierSlug?: string;
  amount: number;
  people: string;
  action?: string;
};

const DONATION_AMOUNTS = [200, 500, 900, 1800] as const;

function formatCheckoutAmount(amount: number) {
  return `${formatZAR(amount)}.00`;
}

function PeopleIcon() {
  return (
    <svg
      className="membership-checkout__offering-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M14 20c0-2.2 1.8-4 4-4" />
    </svg>
  );
}

function AutoRenewPeopleIcon() {
  return (
    <svg
      className="membership-checkout__offering-icon membership-checkout__offering-icon--renew"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="10" cy="8" r="3" />
      <path d="M4 20c0-3.3 2.4-6 6-6s6 2.7 6 6" />
      <path d="M18 6a4 4 0 0 1 0 7" />
      <path d="M20 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AutoRenewBoxIcon() {
  return (
    <svg
      className="membership-checkout__auto-renew-icon"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="24" cy="14" r="6" />
      <path d="M12 38c0-6.6 5.4-12 12-12s12 5.4 12 12" />
      <path d="M34 14a8 8 0 0 1 0 14" />
      <path d="M38 10v6h-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DonateHeartIcon() {
  return (
    <svg
      className="membership-checkout__donate-heart"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M24 38s-14-9-14-18a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 9-14 18-14 18z" />
    </svg>
  );
}

export default function MembershipCheckout({
  tier,
  tierSlug,
  amount,
  people,
  action,
}: MembershipCheckoutProps) {
  const [offering, setOffering] = useState<'annual' | 'auto'>('annual');
  const [autoRenew, setAutoRenew] = useState(false);
  const [donation, setDonation] = useState<number | null>(null);
  const [customDonation, setCustomDonation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const autoRenewPrice = Math.round(amount * 0.9);
  const membershipPrice = offering === 'auto' ? autoRenewPrice : amount;
  const customDonationValue = Number.parseFloat(customDonation.replace(/[^\d.]/g, ''));
  const donationTotal =
    donation ??
    (Number.isFinite(customDonationValue) && customDonationValue > 0 ? customDonationValue : 0);
  const total = membershipPrice + donationTotal;

  const headline = useMemo(() => {
    if (action === 'gift') return 'Gift a Membership';
    if (action === 'renew') return 'Renew Your Membership';
    return 'Select Items';
  }, [action]);

  const displayTier = tier.toLowerCase() === 'gold' ? 'GOLD' : tier;
  const slug = tierSlug ?? tier.toLowerCase().replace(/\s+/g, '');
  const benefitsHref = `/membership/change/${slug}/`;

  if (submitted) {
    return (
      <div className="membership-checkout membership-checkout--success">
        <h1 className="membership-checkout__title">{headline}</h1>
        <p>
          Your {tier} membership request has been received. Our team will contact you to complete
          payment.
        </p>
        <p>
          Questions? Email{' '}
          <a href={`mailto:${siteConfig.contact.membershipEmail}`}>
            {siteConfig.contact.membershipEmail}
          </a>
          .
        </p>
        <Link href="/membership/" className="membership-checkout__text-link">
          ← Back to membership tiers
        </Link>
      </div>
    );
  }

  return (
    <div className="membership-checkout">
      <h1 className="membership-checkout__title">{headline}</h1>

      <div className="membership-checkout__intro">
        <p>
          Members,{' '}
          <Link href="/membership/verify/">verify your membership</Link> to receive your
          benefits.
        </p>
        <p className="membership-checkout__intro-right">
          Not yet a member? <Link href="/membership/change/">Join now</Link> for free admission tickets you
          buy today.
        </p>
      </div>

      <div className="membership-checkout__card">
        <div className="membership-checkout__card-top">
          <div>
            <h2 className="membership-checkout__tier">{displayTier}</h2>
            <Link href={benefitsHref} className="membership-checkout__benefits-link">
              View all benefits
            </Link>
          </div>
          <div className="membership-checkout__card-actions">
            <Link href="/membership/change/" className="membership-checkout__btn membership-checkout__btn--light">
              Remove item
            </Link>
            <Link href="/membership/change/" className="membership-checkout__btn membership-checkout__btn--dark">
              Change membership
            </Link>
          </div>
        </div>

        <p className="membership-checkout__included visually-hidden">{people}</p>

        <h3 className="membership-checkout__subheading">Select an offering:</h3>

        <div className="membership-checkout__offerings">
          <label className="membership-checkout__offering">
            <input
              type="radio"
              name="offering"
              checked={offering === 'annual'}
              onChange={() => setOffering('annual')}
            />
            <span className="membership-checkout__offering-cols">
              <span>1 Year</span>
              <span>1 Year</span>
              <span>Membership</span>
              <PeopleIcon />
              <span className="membership-checkout__offering-price">
                {formatCheckoutAmount(amount)}
              </span>
            </span>
          </label>

          <label className="membership-checkout__offering">
            <input
              type="radio"
              name="offering"
              checked={offering === 'auto'}
              onChange={() => {
                setOffering('auto');
                setAutoRenew(true);
              }}
            />
            <span className="membership-checkout__offering-cols">
              <span>1 Year</span>
              <span>Auto-Renewal</span>
              <span>Membership</span>
              <AutoRenewPeopleIcon />
              <span className="membership-checkout__offering-price">
                {formatCheckoutAmount(autoRenewPrice)}
              </span>
            </span>
          </label>
        </div>

        <div className="membership-checkout__auto-renew">
          <AutoRenewBoxIcon />
          <div>
            <strong className="membership-checkout__auto-renew-title">Auto Renew</strong>
            <p>Save time and lock in your benefits now with Membership Auto Renew!</p>
            <label className="membership-checkout__checkbox">
              <input
                type="checkbox"
                checked={autoRenew || offering === 'auto'}
                onChange={(event) => setAutoRenew(event.target.checked)}
              />
              Renew my membership automatically
            </label>
          </div>
        </div>
      </div>

      <p className="membership-checkout__subtotal">{formatCheckoutAmount(membershipPrice)}</p>

      <div className="membership-checkout__donate">
        <div className="membership-checkout__donate-header">
          <h2 className="membership-checkout__donate-title">Donate</h2>
          <p className="membership-checkout__donate-lead">
            Your donation ensures more children of low income in our community are able to learn and
            grow through play.
          </p>
        </div>

        <div className="membership-checkout__donate-box">
          <DonateHeartIcon />
          <div className="membership-checkout__donate-copy">
            <p>
              Every rand you give helps us continue offering life-changing, joyful learning
              experiences to children from traditionally underserved communities. By donating today,
              you&apos;re ensuring that even more children can thrive through playful discovery.
            </p>
            <p>
              <strong>Thank you for supporting {siteConfig.name}!</strong>
            </p>
          </div>
        </div>

        <p className="membership-checkout__amount-label">Amount</p>
        <div className="membership-checkout__amounts">
          {DONATION_AMOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              className={`membership-checkout__amount-btn${donation === value ? ' is-selected' : ''}`}
              onClick={() => {
                setDonation(value);
                setCustomDonation('');
              }}
            >
              {formatZAR(value)}
            </button>
          ))}
        </div>
        <label className="membership-checkout__other">
          <input
            type="text"
            inputMode="decimal"
            placeholder="R Other"
            value={customDonation}
            onChange={(event) => {
              setCustomDonation(event.target.value);
              setDonation(null);
            }}
          />
        </label>
      </div>

      <p className="membership-checkout__total">Total: {formatCheckoutAmount(total)}</p>

      <div className="membership-checkout__footer-actions">
        <Link href="/membership/change/" className="membership-checkout__place membership-checkout__place--cancel">
          Cancel order
        </Link>
        <button
          type="button"
          className="membership-checkout__place membership-checkout__place--submit"
          onClick={() => setSubmitted(true)}
        >
          Place order
        </button>
      </div>
    </div>
  );
}
