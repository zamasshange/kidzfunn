import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { routes } from '../../lib/routes';
import { siteConfig } from '../../lib/siteConfig';

export default function EducatorResourcesPage() {
  return (
    <ContentPage
      title="Educator Resources"
      subtitle="Tools, activities, and curriculum support for early childhood educators."
      imageDesktop="/images/kfh/b13e9497dde730e8023f0c93334b3190.jpg"
    >
      <p>
        Access activity guides, professional development materials, and classroom resources
        designed by the {siteConfig.name} education team.
      </p>
      <ul className="wp-block-list">
        <li>
          <Link href={routes.thinkMakeTryToolkit}>Think, Make, Try® Toolkit</Link>
        </li>
        <li>
          <Link href={routes.workshopsAtYourSite}>Programs at Your Site</Link>
        </li>
        <li>
          <Link href={routes.workshopsAtMuseum}>School Outings &amp; Workshops at KFH</Link>
        </li>
        <li>
          <Link href="/school-community/professional-development/">Professional Development</Link>
        </li>
      </ul>
    </ContentPage>
  );
}
