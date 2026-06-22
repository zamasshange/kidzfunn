import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { ourServices } from '../../data/aboutContent';
import { siteConfig } from '../../lib/siteConfig';

export default function OurServicesPage() {
  return (
    <ContentPage
      title="Our Services"
      subtitle={`From child minders and toddler mornings to school outings and Party in a Box — ${siteConfig.name} supports families every step of the way.`}
      imageDesktop="/images/kfh/43169d950bb466d5a1b95e38e03d3f4b.jpg"
    >
      {ourServices.map((service) => (
        <div key={service.title}>
          <h2 className="wp-block-heading">{service.title}</h2>
          <p>{service.body}</p>
        </div>
      ))}
      <p style={{ marginTop: '1.5rem' }}>
        Want to know more? <Link href="/contact/">Contact us</Link> or WhatsApp{' '}
        <a href={siteConfig.contact.whatsapp}>{siteConfig.contact.phoneDisplay}</a>.
      </p>
    </ContentPage>
  );
}
