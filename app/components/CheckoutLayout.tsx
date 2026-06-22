import type { ReactNode } from 'react';
import Link from 'next/link';
import BodyClass from './BodyClass';
import { siteConfig } from '../lib/siteConfig';
import { themeImages } from '../lib/assets';

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  const { contact } = siteConfig;

  return (
    <>
      <BodyClass className="membership-checkout-page wp-custom-logo wp-theme-badm" />
      <div className="checkout-shell">
        <div className="checkout-utility">
          <div className="checkout-utility__inner">
            <span>
              Contact us:{' '}
              <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
            </span>
            <span className="checkout-utility__sep" aria-hidden="true">
              •
            </span>
            <Link href="/membership/verify/">My Membership</Link>
            <span className="checkout-utility__sep" aria-hidden="true">
              •
            </span>
            <span>Cart: 1 item</span>
          </div>
        </div>

        <header className="checkout-header">
          <div className="checkout-header__inner">
            <Link href="/" className="checkout-header__logo" rel="home">
              <img
                src={themeImages.logo}
                alt={siteConfig.name}
                width={334}
                height={166}
                decoding="async"
              />
            </Link>
            <Link href="/membership/change/" className="checkout-header__cta">
              Become a Member
            </Link>
          </div>
        </header>

        <main className="checkout-main">{children}</main>

        <footer className="checkout-footer">
          <p>
            <Link href="/privacy-policy/">{siteConfig.legalName} Privacy Policy</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
