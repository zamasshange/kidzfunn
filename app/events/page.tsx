import InnerPageShell from '../components/InnerPageShell';
import {
  ContentTile,
  WpColumnRow,
  WpGridSection,
  WpSpacer,
  eventTitleStyle,
} from '../components/ContentTile';
import { events } from '../data/innerPages';
import { siteConfig } from '../lib/siteConfig';

function chunkPairs<T>(items: readonly T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2) as T[]);
  }
  return rows;
}

export default function EventsPage() {
  const rows = chunkPairs(events);

  return (
    <InnerPageShell
      title="Events"
      desktopImage="/images/kfh/b13e9497dde730e8023f0c93334b3190.jpg"
      mobileImage="/images/kfh/add4156a36d731f1f7c39a317067692b.jpg"
    >
      <WpGridSection>
        <p>
          From Free Playtime Fridays to Toddler Mornings and midweek party bundles — there&apos;s
          always something fun happening at {siteConfig.name}. Check out our promotions and special
          events below!
        </p>
      </WpGridSection>

      <WpGridSection asSection className="page-tile-grid">
        {rows.map((row, rowIndex) => (
          <div key={row[0].title}>
            {rowIndex === 1 ? <WpSpacer height={26} /> : null}
            <WpColumnRow>
              {row.map((event) => (
                <ContentTile
                  key={event.title}
                  image={event.image}
                  imageAlt={event.imageAlt}
                  title={event.title}
                  titleStyle={eventTitleStyle}
                  buttonLabel={event.buttonLabel}
                  buttonHref={event.buttonHref}
                >
                  {event.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {event.note ? (
                    <p>
                      <strong>{event.note}</strong>
                    </p>
                  ) : null}
                  {event.extraLink ? (
                    <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
                      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                        <a
                          href={event.extraLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.extraLink.label}
                        </a>
                      </div>
                    </div>
                  ) : null}
                </ContentTile>
              ))}
            </WpColumnRow>
          </div>
        ))}
      </WpGridSection>
    </InnerPageShell>
  );
}
