import Link from 'next/link';
import InnerPageShell from '../../components/InnerPageShell';
import { WpGridSection } from '../../components/ContentTile';
import { routes } from '../../lib/routes';
import { siteConfig } from '../../lib/siteConfig';

export default function CampRegistrationPage() {
  return (
    <InnerPageShell
      title="Enroll Your Camper"
      description={`Register for Discovery Camps at ${siteConfig.name}.`}
      desktopImage="/images/kfh/35311db4f0d75430cbe67a39dc49e076.jpg"
      mobileImage="/images/kfh/375588e1b355b77e92987e535e60ec80.jpg"
    >
      <WpGridSection>
        <h2 className="wp-block-heading">How to Register</h2>
        <ol className="wp-block-list">
          <li>Browse our camp offerings on the Summer Camps or School Year Camps pages.</li>
          <li>Create a Campsite account (required for first-time families).</li>
          <li>Select your camp sessions and add optional aftercare or meals.</li>
          <li>Complete checkout online.</li>
        </ol>
        <p>
          Members receive advanced registration access and camp discounts.{' '}
          <Link href={routes.membership}>Learn about membership →</Link>
        </p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={routes.summerCamps} className="wp-block-button__link wp-element-button">
              Browse Summer Camps
            </Link>
          </div>
          <div className="wp-block-button">
            <Link
              href={routes.schoolYearCamps}
              className="wp-block-button__link wp-element-button"
            >
              Browse School Year Camps
            </Link>
          </div>
        </div>
        <h3 className="wp-block-heading">Need Help?</h3>
        <p>
          Email <a href={`mailto:${siteConfig.contact.campsEmail}`}>{siteConfig.contact.campsEmail}</a> or{' '}
          <Link href={routes.contact}>contact us</Link> for registration assistance.
        </p>
      </WpGridSection>
    </InnerPageShell>
  );
}
