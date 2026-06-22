import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { siteConfig } from '../../lib/siteConfig';

export default function OurTeamPage() {
  return (
    <ContentPage
      title="Our Team"
      subtitle="Friendly, experienced staff who make every visit safe, fun, and memorable."
      imageDesktop="/images/kfh/5297ecd2ae654e096891eff7701e1bdc.jpg"
    >
      <p>
        Our friendly and experienced staff are there to ensure that your party runs smoothly,
        taking care of everything from decorating to providing delicious refreshments — so you can
        sit back and relax knowing that you are in good hands.
      </p>
      <p>
        Our dedicated childminders watch over the little ones throughout the play centre, allowing
        parents to unwind with a cappuccino and a good book. From party hosting to daily play
        supervision, the KFH team brings energy, care, and professionalism to everything we do.
      </p>
      <p>
        Interested in joining our team? We are always looking for passionate people who love working
        with children. Send your CV and a short introduction to{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or WhatsApp{' '}
        <a href={siteConfig.contact.whatsapp}>{siteConfig.contact.phoneDisplay}</a>.
      </p>
      <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex" style={{ marginTop: '1.5rem' }}>
        <div className="wp-block-button">
          <Link href="/contact/" className="wp-block-button__link wp-element-button">
            Contact Us About Careers
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
