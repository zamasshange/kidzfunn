import Link from 'next/link';
import InnerPageShell from '../components/InnerPageShell';
import { WpGridSection, WpSpacer } from '../components/ContentTile';
import {
  partyBundles,
  partyClosingCopy,
  partyExtras,
  partyFoodPlatters,
  partyInABox,
  partyKiddiesMealOptions,
  partyMealNote,
  partyPackages,
  partyPacksDescription,
  partyProcess,
  partyTermsAndConditions,
  partyVenueNote,
  partyVenues,
} from '../data/kfhContent';
import { siteConfig } from '../lib/siteConfig';

export default function SummerBirthdaysPage() {
  const { contact } = siteConfig;

  return (
    <InnerPageShell
      title="Parties"
      description="Party planning perfection — let us create your kiddo's dream birthday bash."
      desktopImage="/images/kfh/514891ba0a87729e9e5f9bea581d96a5.jpg"
      mobileImage="/images/kfh/d5233f9234807b6f311e7eb35b1f2826.jpg"
    >
      <WpGridSection>
        <h2 className="wp-block-heading">Party Planning Perfection</h2>
        <p>
          We check all the boxes when it comes to planning the perfect party. From birthday cakes to
          party packs, we&apos;ve got you covered. And if we don&apos;t have it, we&apos;ll find it
          for you.
        </p>
        <p>
          Hosting 10 kids?{' '}
          <Link href="#party-bundles">Check out our Party Bundles</Link> for all-in-one packages.
        </p>
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">What&apos;s the process?</h2>
        <ol className="wp-block-list">
          {partyProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Party Packages</h2>
        <p>All packages include 3 hours of playtime at KFH.</p>
        {partyPackages.map((pkg) => (
          <details
            key={pkg.title}
            className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
          >
            <summary>
              <strong>
                {pkg.title} — {pkg.price}
              </strong>
            </summary>
            <ul className="wp-block-list">
              {pkg.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
        <p>
          <strong>Kiddies meal options:</strong>
        </p>
        <ul className="wp-block-list">
          {partyKiddiesMealOptions.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
        <p>{partyMealNote}</p>
        <p>{partyPacksDescription}</p>
        <WpSpacer height={30} />
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Choose your venue</h2>
        <p>Venue rental is in addition to your party package.</p>
        <ul className="wp-block-list">
          {partyVenues.map((venue) => (
            <li key={venue.size}>
              <strong>{venue.size}:</strong> {venue.price}
              {venue.note ? ` ${venue.note}` : null}
            </li>
          ))}
        </ul>
        <p>{partyVenueNote}</p>
      </WpGridSection>

      <WpGridSection id="party-bundles">
        <h2 className="wp-block-heading">{partyBundles.heading}</h2>
        <p>{partyBundles.description}</p>
        <p>{partyBundles.decorNote}</p>
        <ul className="wp-block-list">
          {partyBundles.packages.map((pkg) => (
            <li key={pkg.title}>
              <strong>
                {pkg.title} — {pkg.price}
              </strong>
              : {pkg.includes}
            </li>
          ))}
        </ul>
        <p>
          <strong>Venue upgrades:</strong>
        </p>
        <ul className="wp-block-list">
          {partyBundles.venueUpgrades.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <strong>Party time slots:</strong> {partyBundles.bookingSlots.join(' · ')}
        </p>
        <p>
          <em>{partyBundles.terms}</em>
        </p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <a
              href={contact.whatsapp}
              className="wp-block-button__link wp-element-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us to book
            </a>
          </div>
        </div>
        <WpSpacer height={30} />
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Party food</h2>
        {partyFoodPlatters.map((platter) => (
          <details
            key={platter.title}
            className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
          >
            <summary>
              <strong>
                {platter.title} — {platter.price}
              </strong>
            </summary>
            <ul className="wp-block-list">
              {platter.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
        <WpSpacer height={30} />
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Epic extras @ Kidz Fun House</h2>
        <p>Let us create your kiddo&apos;s dream birthday bash.</p>
        {partyExtras.map((extra) => (
          <details
            key={extra.title}
            className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
          >
            <summary>
              <strong>
                {extra.title} — {extra.price}
              </strong>
            </summary>
            <p>{extra.body}</p>
          </details>
        ))}
        <p style={{ marginTop: '1.5rem' }}>{partyClosingCopy}</p>
        <WpSpacer height={30} />
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">{partyInABox.heading}</h2>
        <p>{partyInABox.intro}</p>
        {partyInABox.boxes.map((box) => (
          <details
            key={box.title}
            className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
          >
            <summary>
              <strong>{box.title}</strong>
            </summary>
            <ul className="wp-block-list">
              {box.tiers.map((tier) => (
                <li key={tier.kids}>
                  {tier.kids}: {tier.price}
                </li>
              ))}
            </ul>
          </details>
        ))}
        <p>
          <strong>Optional add-ons:</strong>
        </p>
        <ul className="wp-block-list">
          {partyInABox.addOns.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{partyInABox.details}</p>
        <p>
          Contact us today to order your Party in a Box, exclusively available at{' '}
          {siteConfig.name}.
        </p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href="/contact/" className="wp-block-button__link wp-element-button">
              Contact us to order
            </Link>
          </div>
        </div>
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Party Terms &amp; Conditions</h2>
        {partyTermsAndConditions.map((term) => (
          <p key={term}>{term}</p>
        ))}
      </WpGridSection>
    </InnerPageShell>
  );
}
