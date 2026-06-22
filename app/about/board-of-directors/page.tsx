import ContentPage from '../../components/ContentPage';
import { facilityHighlights } from '../../data/aboutContent';
import { siteConfig } from '../../lib/siteConfig';

export default function OurFacilityPage() {
  return (
    <ContentPage
      title="Our Facility"
      subtitle="1500m² of indoor play space in Edenvale — Gauteng's biggest indoor playground and party venue."
      imageDesktop="/images/kfh/7ba518ae4c94bb9d8025c391c61d2f3d.jpg"
    >
      <p>
        {siteConfig.name} is {siteConfig.tagline.toLowerCase()} Located at{' '}
        {siteConfig.address.full}, we welcome families on a walk-in basis for playtime and by
        appointment for parties and large groups.
      </p>
      {facilityHighlights.map((item) => (
        <div key={item.title}>
          <h2 className="wp-block-heading">{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
      <p style={{ marginTop: '1.5rem' }}>
        Explore our play areas on the{' '}
        <a href="/discovery-zones/">Discovery Zones</a> page or book a party on our{' '}
        <a href="/summer-birthdays/">Parties</a> page.
      </p>
    </ContentPage>
  );
}
