'use client';

import Link from 'next/link';
import MuseumHours from './MuseumHours';
import { useDesktopSubmenuHover } from '../hooks/useDesktopSubmenuHover';
import { useMobileNav } from '../hooks/useMobileNav';
import { siteConfig } from '../lib/siteConfig';
import { themeImages } from '../lib/assets';

export default function Header() {
  useDesktopSubmenuHover('primary-menu');
  useMobileNav();

  return (
    <>
      <header id="masthead" className="site-header">
        <div className="site-header__branding">
          <div className="site-header__logo-clip">
            <Link href="/" className="custom-logo-link" rel="home" aria-current="page">
              <img
                width={334}
                height={166}
                src={themeImages.logo}
                className="custom-logo"
                alt={siteConfig.name}
                decoding="async"
              />
            </Link>
            <p className="site-title">
              <Link href="/" rel="home">
                {siteConfig.name}
              </Link>
            </p>
          </div>
        </div>

        <nav id="site-navigation" className="main-navigation">
          <div className="clip">
            <div className="site-header__utility">
              <div className="site-header__hours">
                <MuseumHours compact />
              </div>
              <hr />
              <div className="site-header__tools">
                <div className="site-header__translate">
                  <div className="gtranslate_wrapper" id="gt-wrapper-10404244" />
                </div>
                <div className="site-header__search">
                  <form
                    role="search"
                    method="get"
                    className="search-form"
                    action="/search/"
                  >
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search"
                        defaultValue=""
                        name="s"
                      />
                    </label>
                    <button type="submit" className="search-submit" aria-label="Search">
                      <img src={themeImages.searchIcon} alt="Search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <button
              className="menu-toggle"
              aria-controls="primary-menu"
              aria-expanded="false"
              type="button"
            >
              <img src={themeImages.menuToggle} alt="Menu Toggle" />
            </button>

            <div className="menu-top-navigation-container">
              <ul id="primary-menu" className="menu nav-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-10">
                  <a href={siteConfig.ticketsUrl}>
                    <span aria-hidden="true" /> get tickets
                  </a>
                </li>
                <li
                  id="menu-item-3498"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3498"
                >
                  <Link href="/membership/">
                    <span aria-hidden="true" /> membership
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-12">
                  <Link href="/plan-your-visit/">plan your visit</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-852">
                  <Link href="/discovery-zones/">discovery zones</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-849">
                  <Link href="/events/">events</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4611">
                  <Link href="/summer-birthdays/">parties</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-847">
                  <Link href="/give/">loyalty</Link>
                </li>
                <li
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-846"
                  id="menu-item-846"
                >
                  <Link href="/about/">about us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="mobile-header">
        <div className="mobile-header__bar">
          <div className="mobile-header__logo">
            <div className="mobile-header__logo-clip">
              <Link href="/" className="custom-logo-link" rel="home" aria-current="page">
                <img
                  width={334}
                  height={166}
                  src={themeImages.logo}
                  className="custom-logo"
                  alt={siteConfig.name}
                  decoding="async"
                />
              </Link>
            </div>
          </div>
          <div className="mobile-header__tickets">
            <a href={siteConfig.ticketsUrl}>
              Tickets
            </a>
          </div>
          <div className="mobile-header__toggle">
            <img src={themeImages.menuToggle} alt="Menu Toggle" />
          </div>
          <div className="mobile-header__dropdowns">
            <div id="mobile-gtranslate-container" className="hidden">
              <div className="gtranslate_wrapper" id="gt-wrapper-73161132" />
              <div className="close-button translate-close">×</div>
            </div>
            <div id="mobile-search-container" className="hidden">
              <form
                role="search"
                method="get"
                className="search-form"
                action="/search/"
              >
                <label>
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Search"
                    defaultValue=""
                    name="s"
                  />
                </label>
                <button type="submit" className="search-submit" aria-label="Search">
                  <img src={themeImages.searchIcon} alt="Search" />
                </button>
              </form>
              <div className="close-button search-close">×</div>
            </div>
          </div>
        </div>

        <div className="mobile-header__toslide">
          <div className="mobile-navigation">
            <div className="clip">
              <div className="mobile-header__hours">
                <MuseumHours compact />
              </div>
              <div className="menu-mobile-menu-container">
                <ul id="mobile-menu" className="menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1157">
                    <Link href="/plan-your-visit/">Plan Your Visit</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4824">
                    <Link href="/membership/">Membership</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4008">
                    <Link href="/discovery-zones/">Discovery Zones</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1159">
                    <Link href="/events/">Events</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4613">
                    <Link href="/summer-birthdays/">Parties</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1173">
                    <Link href="/give/">Loyalty</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1167">
                    <Link href="/about/">About Us</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4822">
                    <Link href="/membership/">Membership</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
