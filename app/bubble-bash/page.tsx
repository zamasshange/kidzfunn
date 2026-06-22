import Link from 'next/link';
import InnerPageShell from '../components/InnerPageShell';
import { WpGridSection } from '../components/ContentTile';
import { routes } from '../lib/routes';
import { admissionPrices, formatZAR, siteConfig } from '../lib/siteConfig';

export default function BubbleBashPage() {
  return (
    <InnerPageShell
      title="Bubble Bash"
      description="From giant bubbles to joyful foam parties, the Bubble Bash is a limited-time summer celebration! June 6 – September 7."
      desktopImage="/images/kfh/c45c040cd3756b0e641ba9ac10a01e6d.jpg"
      mobileImage="/images/kfh/502d45c3d708a1ea8bab5a34721fc7eb.jpg"
      jumpNav={[
        { label: 'Offerings', href: '#offerings' },
        { label: 'Programming', href: '#programming' },
        { label: 'Tickets', href: '#tickets' },
      ]}
    >
      <WpGridSection id="tickets">
        <p>
          From giant bubbles to joyful foam parties, the Bubble Bash is a limited-time summer
          celebration at the {siteConfig.name}! June 6 – September 7.
        </p>
        <ul className="wp-block-list">
          <li>Under 1s: {formatZAR(admissionPrices.baby.amount)} per hour</li>
          <li>Over 1s: {formatZAR(admissionPrices.child.amount)} first hour</li>
          <li>Weekday unlimited: {formatZAR(admissionPrices.weekdayUnlimited.amount)}</li>
          <li>Adults: Free</li>
        </ul>
        <p>
          <strong>Museum Open</strong> 10AM – 4PM, Wednesday thru Monday ·{' '}
          <strong>Member Hour</strong> 9 – 10AM
        </p>
        <p>
          <strong>Bubble Bash Pauses for Pride on June 20.</strong> Programming will be different
          on June 20. Join us for Pride!
        </p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={routes.tickets} className="wp-block-button__link wp-element-button">
              Get Tickets
            </Link>
          </div>
          <div className="wp-block-button">
            <Link href={routes.pride} className="wp-block-button__link wp-element-button">
              Learn About Pride Day
            </Link>
          </div>
        </div>
      </WpGridSection>

      <WpGridSection id="offerings">
        <h2 className="wp-block-heading">Bubble Bash Offerings!</h2>
        <h3 className="wp-block-heading">Pop n&apos; Play</h3>
        <p>Special bubble-inspired programs at the Beach!</p>
        <h3 className="wp-block-heading">Bubble Blast</h3>
        <p>
          A magical midday moment filled with swirling bubbles, laughter, and perfect photo ops.
        </p>
        <h3 className="wp-block-heading">Foam Party</h3>
        <p>Dive into fluffy foam! Bring a change of clothes!</p>
      </WpGridSection>

      <WpGridSection id="programming">
        <h2 className="wp-block-heading">Daily Programming</h2>
        <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
            <h3 className="wp-block-heading">Weekday</h3>
            <ul className="wp-block-list">
              <li>Toddler Pop and Play — 9:30–10 AM</li>
              <li>Pop and Play — 10:30 AM–12 PM</li>
              <li>Bubble Blast — 12:15–1 PM</li>
              <li>Foam Party — 1–2 PM</li>
            </ul>
          </div>
          <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
            <h3 className="wp-block-heading">Weekend</h3>
            <ul className="wp-block-list">
              <li>Toddler Pop and Play — 9:30–10 AM</li>
              <li>Pop and Play — 10:30 AM–12 PM</li>
              <li>Bubble Blast — 12:15–1 PM</li>
              <li>Foam Party — 2–3 PM</li>
            </ul>
          </div>
        </div>
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Join Or Renew Your Membership</h2>
        <p>
          Sign up for summer perks, exclusive access, and sunny-season updates.
        </p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={routes.membership} className="wp-block-button__link wp-element-button">
              Become a Member
            </Link>
          </div>
        </div>
      </WpGridSection>

      <WpGridSection>
        <h2 className="wp-block-heading">Know Before You Go</h2>
        <ul className="wp-block-list">
          <li>We&apos;re open Wednesday–Monday, 10AM–4PM.</li>
          <li>Free parking. Family-friendly amenities.</li>
          <li>Right on the {siteConfig.locale.landmark}.</li>
        </ul>
        <p>
          <Link href={routes.discoveryZones}>Explore Discovery Zones →</Link>
        </p>
      </WpGridSection>
    </InnerPageShell>
  );
}
