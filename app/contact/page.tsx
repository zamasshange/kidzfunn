import ContactInterestForm from '../components/ContactInterestForm';
import ContentPage from '../components/ContentPage';
import MuseumHours from '../components/MuseumHours';
import { siteConfig } from '../lib/siteConfig';

type ContactPageProps = {
  searchParams: Promise<{
    interest?: string;
    tier?: string;
    action?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const { contact, address } = siteConfig;

  return (
    <ContentPage
      title="Contact Us"
      subtitle="We're here to help! Reach out with questions about visits, parties, membership, or bookings."
      imageDesktop="/images/kfh/0a9765a643923c320a79413fd8f4de13.jpg"
      imageMobile="/images/kfh/7ba518ae4c94bb9d8025c391c61d2f3d.jpg"
    >
      <MuseumHours />
      <p style={{ marginTop: '1.5rem' }}>
        <strong>Phone:</strong>{' '}
        <a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a>
        <br />
        <strong>Email:</strong>{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p style={{ marginTop: '1rem' }}>
        <strong>Address:</strong>
        <br />
        {siteConfig.name}
        <br />
        {address.line1}
        <br />
        {address.city}, {address.province} {address.postalCode}
      </p>
      <p style={{ marginTop: '1rem' }}>
        <a href={address.mapsUrl} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      </p>

      <h2 className="wp-block-heading" style={{ marginTop: '2rem' }}>
        Send Us a Message
      </h2>
      <ContactInterestForm
        interest={params.interest}
        tier={params.tier}
        action={params.action}
      />
    </ContentPage>
  );
}
