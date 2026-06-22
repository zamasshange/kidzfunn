import Link from 'next/link';
import CampFaqSection from '../../components/CampFaqSection';
import InnerPageShell from '../../components/InnerPageShell';
import { WpColumnRow, WpGridSection } from '../../components/ContentTile';
import { schoolBreakCamps, schoolYearCampIntro } from '../../data/schoolYearCamps';
import { kfhImages } from '../../data/kfhImages';
import { routes } from '../../lib/routes';

function chunkPairs<T>(items: readonly T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2) as T[]);
  }
  return rows;
}

export default function SchoolYearCampsPage() {
  return (
    <InnerPageShell
      title="School Break Camps"
      description={schoolYearCampIntro}
      desktopImage="/images/kfh/a282e2c8144643aecaed7e23f2d0971b.jpg"
      mobileImage={kfhImages.party}
      jumpNav={[
        { label: 'Summer Camps', href: routes.summerCamps },
        { label: 'Build a Camp', href: routes.buildACamp },
        { label: 'FAQ', href: '#faq' },
      ]}
    >
      <WpGridSection className="page-camps-listing">
        <p>{schoolYearCampIntro}</p>
      </WpGridSection>

      {chunkPairs(schoolBreakCamps).map((row) => (
        <WpGridSection key={row[0].id} className="page-camps-listing">
          <WpColumnRow>
            {row.map((camp) => (
              <div
                key={camp.id}
                className="wp-block-column is-layout-flow wp-block-column-is-layout-flow school-break-camp"
              >
                <figure className="wp-block-image size-large is-style-shape-angle">
                  <img decoding="async" src={camp.image} alt={camp.title} />
                </figure>
                <h2 className="wp-block-heading">{camp.title}</h2>
                {camp.format ? (
                  <p>
                    <strong>Format:</strong> {camp.format}
                  </p>
                ) : null}
                {camp.description ? <p>{camp.description}</p> : null}
                {camp.dates ? (
                  <p>
                    <strong>Dates:</strong> {camp.dates.split('\n').map((line, i) => (
                      <span key={i}>
                        {i > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                ) : null}
                {camp.time ? (
                  <p>
                    <strong>Time:</strong> {camp.time}
                  </p>
                ) : null}
                {camp.ages ? (
                  <p>
                    <strong>Ages</strong> {camp.ages}
                  </p>
                ) : null}
                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                  <div className="wp-block-button">
                    {camp.href ? (
                      <Link href={camp.href} className="wp-block-button__link wp-element-button">
                        Learn More
                      </Link>
                    ) : (
                      <Link
                        href={routes.contact}
                        className="wp-block-button__link wp-element-button"
                      >
                        Check Back Next Year
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </WpColumnRow>
        </WpGridSection>
      ))}

      <CampFaqSection />
    </InnerPageShell>
  );
}
