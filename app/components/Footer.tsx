import Link from 'next/link';
import MuseumHours from './MuseumHours';
import { siteConfig } from '../lib/siteConfig';

export default function Footer() {
  const { contact, address } = siteConfig;

  return (
    <footer id="colophon" className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__wrap">
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <div className="site-footer__brand-name">{siteConfig.name}</div>
              <div className="site-footer__brand-meta">
                <MuseumHours />
              </div>
              <div className="site-footer__contact-info">
                <div className="site-footer__contact-row">
                  <svg
                    className="site-footer__contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {address.full}
                  </a>
                </div>
                <div className="site-footer__contact-row">
                  <svg
                    className="site-footer__contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
                </div>
                <div className="site-footer__contact-row">
                  <svg
                    className="site-footer__contact-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </div>

            <div className="site-footer__ctas">
              <Link href={siteConfig.ticketsUrl} className="site-footer__cta site-footer__cta--primary">
                Get Tickets
              </Link>
              <Link href="/membership/" className="site-footer__cta site-footer__cta--secondary">
                Become a Member
              </Link>
            </div>
          </div>

          <div className="site-footer__grid">
            <div className="site-footer__col site-footer__col-subscribe site-footer__connect">
              <div className="site-footer__col-heading">Subscribe</div>
              <div className="site-footer__form">
                <p className="site-footer__text">Get news and event updates from {siteConfig.name}.</p>
              </div>
            </div>

            <div className="site-footer__col site-footer__col-explore">
              <div className="site-footer__col-heading">Explore</div>
              <ul className="site-footer__links">
                <li>
                  <Link href={siteConfig.ticketsUrl}>Tickets</Link>
                </li>
                <li>
                  <Link href="/membership/">Membership</Link>
                </li>
                <li>
                  <Link href="/plan-your-visit/">Plan Your Visit</Link>
                </li>
              </ul>
            </div>

            <div className="site-footer__col">
              <div className="site-footer__col-heading">Experiences</div>
              <ul className="site-footer__links">
                <li>
                  <Link href="/discovery-zones/">Discovery Zones</Link>
                </li>
                <li>
                  <Link href="/events/">Events</Link>
                </li>
                <li>
                  <Link href="/summer-birthdays/">Parties</Link>
                </li>
              </ul>
            </div>

            <div className="site-footer__col">
              <div className="site-footer__col-heading">Connect</div>
              <ul className="site-footer__links">
                <li>
                  <Link href={siteConfig.donateUrl}>Donate</Link>
                </li>
                <li>
                  <Link href="/about/">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__subfooter">
        <div className="site-footer__wrap">
          <div className="site-footer__copyright">
            <p>
              Copyright © 2026 {siteConfig.legalName}. All Rights Reserved.{' '}
              <Link href="/privacy-policy/">Policy</Link>
            </p>
          </div>
          <div className="site-footer__social">
            <span className="site-footer__social-label">Follow</span>
            <div className="site-footer__icons">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/icons/icon-instagram.svg" alt="Instagram" decoding="async" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/icons/icon-facebook.svg" alt="Facebook" decoding="async" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
