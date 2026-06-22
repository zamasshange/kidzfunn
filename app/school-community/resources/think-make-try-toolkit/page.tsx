import Link from 'next/link';
import ContentPage from '../../../components/ContentPage';
import { routes } from '../../../lib/routes';
import { siteConfig } from '../../../lib/siteConfig';

export default function ThinkMakeTryToolkitPage() {
  return (
    <ContentPage
      title="Think, Make, Try® Toolkit"
      subtitle="Our research-backed engineering design process for educators and families."
      imageDesktop="/images/kfh/2e4b8db65323ee2e779815da6dae1353.jpg"
    >
      <p>
        Think, Make, Try® is {siteConfig.name}&apos;s engineering design process that
        encourages children to ask questions, design prototypes, and test their ideas through
        playful iteration.
      </p>
      <p>
        This toolkit supports classroom and at-home STEAM learning with activity guides, discussion
        prompts, and project ideas aligned with early learning standards.
      </p>
      <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
        <div className="wp-block-button">
          <Link href={routes.workshopsAtYourSite} className="wp-block-button__link wp-element-button">
            Programs at Your Site
          </Link>
        </div>
        <div className="wp-block-button">
          <Link href={routes.resources} className="wp-block-button__link wp-element-button">
            All Educator Resources
          </Link>
        </div>
      </div>
    </ContentPage>
  );
}
