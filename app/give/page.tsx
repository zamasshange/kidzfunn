import Link from 'next/link';
import InnerPageShell from '../components/InnerPageShell';
import ParallaxDivider from '../components/ParallaxDivider';
import { loyaltyProgram } from '../data/kfhContent';
import { kfhImages } from '../data/kfhImages';
import { membershipBenefits, siteConfig } from '../lib/siteConfig';

export default function GivePage() {
  const { contact } = siteConfig;

  return (
    <InnerPageShell
      bodyClass="page-give wp-singular page-template-default page wp-custom-logo wp-theme-badm"
      title="Loyalty Program"
      description={loyaltyProgram.description}
      desktopImage={kfhImages.welcome}
      mobileImage={kfhImages.comePlay}
      jumpNavClass=""
      jumpNav={[
        { label: 'loyalty program', href: '#loyalty' },
        { label: 'member benefits', href: '#benefits' },
        { label: 'membership', href: '#membership' },
        { label: 'get in touch', href: '#contact' },
      ]}
    >
      <section id="loyalty" className="wp-block-group">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <h2 className="wp-block-heading">{loyaltyProgram.heading}</h2>
              <p>{loyaltyProgram.description}</p>
              <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                <div className="wp-block-button">
                  <Link href="/membership/" className="wp-block-button__link wp-element-button">
                    Join Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <ul className="wp-block-list">
                {loyaltyProgram.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ParallaxDivider
        image="/images/kfh/8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg"
        light
        dimColor="#a08c77"
        className="wp-duotone-unset-1"
        label="Children playing at Kidz Fun House"
      />

      <section id="benefits" className="wp-block-group give-discovery-section">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading">Member Benefits</h2>
          <p>
            Membership at {siteConfig.name} unlocks a world of play, perks, and savings. Membership
            pays for itself in as little as two visits!
          </p>
          <ul className="wp-block-list">
            {membershipBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <ParallaxDivider
        image="/images/kfh/742af04d98cb02dc587e280f2303acde.jpg"
        light
        dimColor="#b0856b"
        className="wp-duotone-unset-2"
        label="Play zones at Kidz Fun House"
      />

      <section id="membership" className="wp-block-group">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading">Membership Tiers</h2>
          <p>
            Choose from Weekend Pass, Seasonal, Monthly, or Child Minder memberships — each designed
            for different family needs.
          </p>
          <p>
            <Link href="/membership/">View all membership tiers</Link>
          </p>
        </div>
      </section>

      <ParallaxDivider
        image="/images/kfh/2b0ee44c25fc2a813cc2d18fb2a8a6c2.jpg"
        light
        dimColor="#b79f91"
        className="wp-duotone-unset-3"
        label="Family fun at KFH"
      />

      <section id="contact" className="wp-block-group">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading">Get in Touch</h2>
          <p>
            Questions about membership or the loyalty program? Email{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>, call{' '}
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>, or{' '}
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
            .
          </p>
        </div>
      </section>
    </InnerPageShell>
  );
}
