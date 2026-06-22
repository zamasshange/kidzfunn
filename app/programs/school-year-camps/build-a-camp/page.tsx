import Link from 'next/link';
import InnerPageShell from '../../../components/InnerPageShell';
import { WpGridSection } from '../../../components/ContentTile';
import { buildACampOptions } from '../../../data/schoolYearCamps';
import { routes } from '../../../lib/routes';

export default function BuildACampPage() {
  return (
    <InnerPageShell
      title="Build-a-Camp"
      description="Choose from our Build-A-Camp themes and we'll create an unforgettable day of discovery on a date that works for your schedule!"
      desktopImage="/images/kfh/9df1a2ce9b684a88a2fd3d4a7aac7926.jpg"
      mobileImage="/images/kfh/0a9765a643923c320a79413fd8f4de13.jpg"
      jumpNav={[
        { label: 'Summer Camps', href: routes.summerCamps },
        { label: 'School Year Camps', href: routes.schoolYearCamps },
      ]}
    >
      <WpGridSection className="page-camps-listing">
        <p>
          With hands-on projects, exploration, and plenty of time for big play, it&apos;s a flexible
          option that allows us to cater to your group&apos;s needs! Invite your friends, classmates
          or family to form a cohort and build a camp together!
        </p>
        <h2 className="wp-block-heading">Build a Camp Requirements:</h2>
        <ul className="wp-block-list">
          <li>
            <Link href={routes.membership}>Membership</Link>
          </li>
          <li>Recommended age minimum is 3. Campers must be fully toilet-trained.</li>
          <li>A minimum of 8 campers is required to run a camp.</li>
        </ul>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={routes.contact} className="wp-block-button__link wp-element-button">
              Request a Build a Camp
            </Link>
          </div>
        </div>
      </WpGridSection>

      {buildACampOptions.map((option) => (
        <WpGridSection key={option.title} className="page-camps-listing">
          <h3 className="wp-block-heading">{option.title}</h3>
          <p>{option.description}</p>
        </WpGridSection>
      ))}

      <WpGridSection>
        <h2 className="wp-block-heading">Other School Year Camps</h2>
        <h3 className="wp-block-heading">Mid-Winter Break</h3>
        <p>One-day (Presidents Day) and week-long camps!</p>
        <h3 className="wp-block-heading">Spring Break</h3>
        <p>March 30 – April 3, 2026 · April 6 – 10, 2026</p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={routes.schoolYearCamps} className="wp-block-button__link wp-element-button">
              View School Year Camps
            </Link>
          </div>
        </div>
      </WpGridSection>
    </InnerPageShell>
  );
}
