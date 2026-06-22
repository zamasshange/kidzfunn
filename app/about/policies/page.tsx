import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { playCentrePolicies } from '../../data/aboutContent';
import { partyTermsAndConditions, schoolTermsAndConditions } from '../../data/kfhContent';
import { siteConfig } from '../../lib/siteConfig';
import { routes } from '../../lib/routes';

export default function PoliciesPage() {
  return (
    <ContentPage
      title="Play Centre Policies"
      subtitle="Everything you need to know before your visit — hours, supervision, admissions, and promotions."
      imageDesktop="/images/kfh/bae413303e00ce05cf52848f63dd87a0.jpg"
    >
      {playCentrePolicies.map((policy) => (
        <details key={policy.title} className="wp-block-details" open={policy.title === 'Walk-In & Bookings'}>
          <summary>{policy.title}</summary>
          <p>{policy.body}</p>
        </details>
      ))}

      <details className="wp-block-details">
        <summary>Party Booking Terms &amp; Conditions</summary>
        {partyTermsAndConditions.map((term) => (
          <p key={term}>{term}</p>
        ))}
      </details>

      <details className="wp-block-details">
        <summary>School Booking Terms &amp; Conditions</summary>
        {schoolTermsAndConditions.map((term) => (
          <p key={term}>{term}</p>
        ))}
      </details>

      <details className="wp-block-details">
        <summary>Social Media</summary>
        <p>
          Follow us on{' '}
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          and{' '}
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          . We ask that all comments remain respectful. Report any concerns to{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </details>

      <details className="wp-block-details">
        <summary>Privacy Policy</summary>
        <p>
          <Link href={routes.privacyPolicy}>View our full privacy policy</Link>
        </p>
      </details>

      <p style={{ marginTop: '1.5rem' }}>
        Questions about our policies? Call{' '}
        <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a> or email{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </ContentPage>
  );
}
