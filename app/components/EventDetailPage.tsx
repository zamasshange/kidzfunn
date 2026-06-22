import type { ReactNode } from 'react';
import Link from 'next/link';
import InnerPageShell from './InnerPageShell';
import { WpGridSection } from './ContentTile';
import { routes } from '../lib/routes';

export type EventActivity = {
  title: string;
  description: string;
};

export type EventDetailData = {
  slug: string;
  title: string;
  subtitle: string;
  desktopImage: string;
  mobileImage: string;
  intro: ReactNode;
  dateTime?: ReactNode;
  pricing?: ReactNode;
  quickInfo?: string[];
  activities?: EventActivity[];
  whyFamilies?: { title: string; description: string }[];
  disclaimer?: string;
  ctaLabel?: string;
  ctaHref?: string;
  extraSections?: ReactNode;
};

type EventDetailPageProps = {
  event: EventDetailData;
};

export default function EventDetailPage({ event }: EventDetailPageProps) {
  return (
    <InnerPageShell
      title={event.title}
      description={event.subtitle}
      desktopImage={event.desktopImage}
      mobileImage={event.mobileImage}
    >
      <WpGridSection>
        {event.intro}
        {event.dateTime ? (
          <>
            <h2 className="wp-block-heading">Date &amp; Time</h2>
            {event.dateTime}
          </>
        ) : null}
        {event.pricing ? (
          <>
            <h2 className="wp-block-heading">Tickets &amp; Pricing</h2>
            {event.pricing}
          </>
        ) : null}
        {event.quickInfo?.length ? (
          <>
            <h2 className="wp-block-heading">Quick Info</h2>
            <ul className="wp-block-list">
              {event.quickInfo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
        {event.activities?.length ? (
          <>
            <h2 className="wp-block-heading">Event Activities</h2>
            <p>Hands-on activities, creative fun, and art-inspired play for the whole family!</p>
            {event.activities.map((activity) => (
              <div key={activity.title} style={{ marginBottom: '1.25rem' }}>
                <h3 className="wp-block-heading">{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </>
        ) : null}
        {event.whyFamilies?.length ? (
          <>
            <h2 className="wp-block-heading">Why Families Love our Festivals</h2>
            {event.whyFamilies.map((item) => (
              <div key={item.title} style={{ marginBottom: '1rem' }}>
                <h3 className="wp-block-heading">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </>
        ) : null}
        {event.disclaimer ? <p><em>{event.disclaimer}</em></p> : null}
        {event.extraSections}
        {event.ctaLabel && event.ctaHref ? (
          <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
            <div className="wp-block-button">
              <Link href={event.ctaHref} className="wp-block-button__link wp-element-button">
                {event.ctaLabel}
              </Link>
            </div>
          </div>
        ) : null}
        <p style={{ marginTop: '2rem' }}>
          <Link href={routes.events}>← Back to Events</Link>
        </p>
      </WpGridSection>
    </InnerPageShell>
  );
}
