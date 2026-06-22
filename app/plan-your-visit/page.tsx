import Link from 'next/link';
import InnerPageShell from '../components/InnerPageShell';
import {
  ageRangeNote,
  birthdayPromo,
  planYourVisitFaq,
  planYourVisitIntro,
  walkInPolicy,
} from '../data/kfhContent';
import { kfhImages } from '../data/kfhImages';
import { themeImages } from '../lib/assets';
import {
  admissionPrices,
  closedDates,
  formatZAR,
  siteConfig,
} from '../lib/siteConfig';

function TicketRow({
  label,
  price,
  note,
}: {
  label: string;
  price: string;
  note?: string;
}) {
  return (
    <div className="wp-block-columns ticket-price is-layout-flex wp-block-columns-is-layout-flex">
      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
        <p className="eb-text">
          <strong>{label}</strong>
          {note ? (
            <>
              <br />
              <em>{note}</em>
            </>
          ) : null}
        </p>
      </div>
      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
        <p className="eb-text">{price}</p>
      </div>
    </div>
  );
}

export default function PlanYourVisitPage() {
  const { contact, address } = siteConfig;

  return (
    <InnerPageShell
      bodyClass="wp-singular page-template-default page wp-custom-logo wp-theme-badm"
      title="Plan your visit"
      description={planYourVisitIntro}
      desktopImage={kfhImages.comePlay}
      mobileImage={kfhImages.toddler}
      heroClass="membership-hero"
      jumpNavClass="membership-nav"
      jumpNav={[
        { label: 'Admission & Hours', href: '#admission' },
        { label: 'General info', href: '#general_info' },
        { label: 'Birthday visit', href: '#birthday_visit' },
        { label: 'FAQ', href: '#faq' },
      ]}
    >
      <div id="admission" className="wp-block-group admission-block">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
            <div className="wp-block-column admission-block-left-box is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-media-text is-stacked-on-mobile" style={{ gridTemplateColumns: '15% auto' }}>
                <figure className="wp-block-media-text__media">
                  <img decoding="async" src={themeImages.ticketIcon} alt="" width={296} height={296} />
                </figure>
                <div className="wp-block-media-text__content">
                  <h2 className="wp-block-heading">What&apos;s the cost?</h2>
                  <p className="eb-text">No charge for adults</p>
                </div>
              </div>

              <TicketRow
                label={admissionPrices.baby.label}
                price={formatZAR(admissionPrices.baby.amount)}
              />
              <TicketRow
                label={admissionPrices.child.label}
                price={formatZAR(admissionPrices.child.amount)}
              />
              <TicketRow
                label={admissionPrices.weekdayUnlimited.label}
                price={formatZAR(admissionPrices.weekdayUnlimited.amount)}
                note={admissionPrices.weekdayUnlimited.note}
              />
              <TicketRow label={admissionPrices.adult.label} price="Free" />

              <p className="eb-text">{ageRangeNote}</p>

              <div className="wp-block-buttons admission-btn is-layout-flex wp-block-buttons-is-layout-flex">
                <div className="wp-block-button">
                  <Link href="/membership/" className="wp-block-button__link wp-element-button">
                    Explore membership
                  </Link>
                </div>
              </div>

              <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
                <div className="wp-block-column custom-bg-box is-layout-flow wp-block-column-is-layout-flow">
                  <p className="eb-text">
                    Membership pays for itself in as little as <strong>two visits.</strong>
                  </p>
                  <div className="wp-block-buttons custom-btn is-layout-flex wp-block-buttons-is-layout-flex">
                    <div className="wp-block-button">
                      <Link href="/membership/" className="wp-block-button__link wp-element-button">
                        View membership tiers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wp-block-column admission-block-right-box is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-media-text is-stacked-on-mobile" style={{ gridTemplateColumns: '15% auto' }}>
                <figure className="wp-block-media-text__media">
                  <img decoding="async" src={themeImages.hoursIcon} alt="" width={296} height={296} />
                </figure>
                <div className="wp-block-media-text__content">
                  <h2 className="wp-block-heading">Hours</h2>
                </div>
              </div>

              <div className="wp-block-columns ticket-price is-layout-flex wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <p className="eb-text">
                    {siteConfig.hours.navLines.map((line, index) => (
                      <span key={line.label}>
                        {index > 0 ? <br /> : null}
                        <strong>{line.label}</strong> {line.text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="wp-block-columns ticket-price is-layout-flex wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <p className="eb-text">
                    <strong>Walk-in welcome</strong>
                    <br />
                    {walkInPolicy}
                  </p>
                </div>
              </div>

              <div className="wp-block-columns close-dates is-layout-flex wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <p className="eb-text">
                    <strong>Closed dates</strong>
                  </p>
                  <ul className="wp-block-list">
                    {closedDates.map((date) => (
                      <li key={date}>{date}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="general_info" className="wp-block-group membership-promo-card box">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <div className="wp-block-columns promo-card-box is-layout-flex wp-block-columns-is-layout-flex">
            <div className="promo-card">
              <h3 className="promo-card__heading">Where to find the fun</h3>
              <p className="promo-card__body">
                {address.line1}, {address.city}.{' '}
                <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </p>
            </div>
            <div className="promo-card">
              <h3 className="promo-card__heading">Onsite café</h3>
              <p className="promo-card__body">
                Parents can relax with a cappuccino and a good book while little ones play in over 8
                different play zones.
              </p>
            </div>
            <div className="promo-card">
              <h3 className="promo-card__heading">Wifi &amp; charging</h3>
              <p className="promo-card__body">
                Wifi access and charging ports available for working parents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="birthday_visit" className="wp-block-group membership-promo-card faq first-time-visit">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          <h2 className="wp-block-heading">{birthdayPromo.heading}</h2>
          <p className="eb-text">
            <strong>{birthdayPromo.offer}</strong>
          </p>
          <p className="eb-text">{birthdayPromo.note}</p>
        </div>
      </div>

      <div id="faq" className="wp-block-group membership-banner first-time-visit">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained contact-us text-block">
          <h2 className="wp-block-heading">Frequently asked questions</h2>
          {planYourVisitFaq.map((item) => (
            <details
              key={item.question}
              className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}

          <h2 className="wp-block-heading" style={{ marginTop: '2rem' }}>
            Contact us
          </h2>
          <p>
            We&apos;re here to help! Call{' '}
            <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>, WhatsApp{' '}
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              {contact.phoneDisplay}
            </a>
            , or email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
          <h3 className="wp-block-heading">Address</h3>
          <p>
            {siteConfig.name}
            <br />
            {address.line1}
            <br />
            {address.city}, {address.postalCode}
            <br />
            {address.country}
          </p>
          <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer">
            Get Directions
          </a>
        </div>
      </div>
    </InnerPageShell>
  );
}
