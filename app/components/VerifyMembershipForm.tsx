'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { siteConfig } from '../lib/siteConfig';

type VerifyMembershipFormProps = {
  mode?: 'id' | 'email';
};

export default function VerifyMembershipForm({ mode = 'id' }: VerifyMembershipFormProps) {
  const searchParams = useSearchParams();
  const intent = searchParams.get('intent');
  const [membershipId, setMembershipId] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (mode === 'email') {
      if (!email.trim()) {
        setError('Please enter the email address on your membership account.');
        return;
      }
    } else {
      if (!membershipId.trim() || !lastName.trim()) {
        setError('Please enter your membership ID and the last name of the primary cardholder.');
        return;
      }
    }

    setVerified(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('membershipVerified', 'true');
    }
  };

  if (verified) {
    return (
      <div className="membership-flow membership-flow--success">
        <h1 className="membership-flow__title">Membership verified</h1>
        <p>
          Thank you! Your membership has been verified. You can now apply member benefits when you
          purchase tickets or renew your membership.
        </p>
        <div className="membership-flow__actions membership-flow__actions--success">
          {intent === 'renew' ? (
            <Link href="/membership/change/" className="membership-flow__btn membership-flow__btn--primary">
              Choose renewal tier
            </Link>
          ) : (
            <Link href="/membership/join/?tier=monthly" className="membership-flow__btn membership-flow__btn--primary">
              Continue to checkout
            </Link>
          )}
          <Link href="/plan-your-visit/" className="membership-flow__btn membership-flow__btn--secondary">
            Get tickets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="membership-flow">
      <div className="membership-flow__title-row">
        <h1 className="membership-flow__title">Verify your membership</h1>
        <div className="membership-flow__title-cta">
          <span>Not yet a member?</span>
          <Link href="/membership/change/" className="membership-flow__join-now">
            Join now
          </Link>
        </div>
      </div>

      {mode === 'id' ? (
        <p className="membership-flow__lead">
          Fill in the form below to verify your membership and automatically apply your membership
          discounts! If your membership ID starts with an 8, please include the dash between the 8
          and the next number (i.e. 8-00000000).
        </p>
      ) : (
        <p className="membership-flow__lead">
          Enter the email address associated with your membership account and we will verify your
          benefits for this session.
        </p>
      )}

      <form className="membership-flow__form" onSubmit={handleSubmit} noValidate>
        {mode === 'id' ? (
          <>
            <label className="membership-flow__field">
              <span className="visually-hidden">Membership ID</span>
              <input
                type="text"
                name="membershipId"
                placeholder="Membership ID"
                value={membershipId}
                onChange={(event) => setMembershipId(event.target.value)}
                autoComplete="off"
              />
            </label>
            <label className="membership-flow__field">
              <span className="visually-hidden">Last Name of Primary Cardholder</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name of Primary Cardholder"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                autoComplete="family-name"
              />
            </label>
          </>
        ) : (
          <label className="membership-flow__field">
            <span className="visually-hidden">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </label>
        )}

        {error ? <p className="membership-flow__error">{error}</p> : null}

        {mode === 'id' ? (
          <p className="membership-flow__alt-link">
            Don&apos;t have your Membership ID handy?{' '}
            <Link href={`/membership/verify/email${intent ? `?intent=${intent}` : ''}`}>
              Verify with your email address instead
            </Link>
          </p>
        ) : (
          <p className="membership-flow__alt-link">
            Have your membership ID?{' '}
            <Link href={`/membership/verify${intent ? `?intent=${intent}` : ''}`}>
              Verify with your membership ID instead
            </Link>
          </p>
        )}

        <div className="membership-flow__actions">
          <Link href="/membership/" className="membership-flow__btn membership-flow__btn--cancel">
            Cancel
          </Link>
          <button type="submit" className="membership-flow__btn membership-flow__btn--submit">
            Verify
          </button>
        </div>
      </form>

      <p className="membership-flow__help">
        Questions? Email our Membership Team at{' '}
        <a href={`mailto:${siteConfig.contact.membershipEmail}`}>
          {siteConfig.contact.membershipEmail}
        </a>
        .
      </p>
    </div>
  );
}
