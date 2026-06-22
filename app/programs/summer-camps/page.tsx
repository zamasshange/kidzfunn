import Link from 'next/link';
import CampFaqSection from '../../components/CampFaqSection';
import CampListingCard from '../../components/CampListingCard';
import InnerPageShell from '../../components/InnerPageShell';
import { WpColumnRow, WpGridSection } from '../../components/ContentTile';
import {
  chunkPairs,
  summerCampAgeGroups,
  summerCampIntro,
  summerCampJumpNav,
} from '../../data/summerCamps';
import { routes } from '../../lib/routes';

export default function SummerCampsPage() {
  return (
    <InnerPageShell
      title="Summer Camps"
      description={summerCampIntro}
      desktopImage="/images/kfh/c45c040cd3756b0e641ba9ac10a01e6d.jpg"
      mobileImage="/images/kfh/502d45c3d708a1ea8bab5a34721fc7eb.jpg"
      jumpNav={summerCampJumpNav}
    >
      <WpGridSection className="page-camps-listing">
        <p>{summerCampIntro}</p>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={routes.campRegistration} className="wp-block-button__link wp-element-button">
              Enroll your Camper
            </Link>
          </div>
        </div>
      </WpGridSection>

      {summerCampAgeGroups.map((group) => (
        <WpGridSection key={group.id} id={group.id} className="page-camps-listing">
          <h3 className="wp-block-heading camp-age-heading">{group.heading}</h3>
          {chunkPairs(group.camps).map((row) => (
            <WpColumnRow key={row[0].title}>
              {row.map((camp) => (
                <CampListingCard key={camp.title} camp={camp} />
              ))}
            </WpColumnRow>
          ))}
        </WpGridSection>
      ))}

      <CampFaqSection />
    </InnerPageShell>
  );
}
