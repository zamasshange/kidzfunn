import { kfhPageHeroes } from '../data/kfhImages';
import InnerPageShell from '../components/InnerPageShell';
import {
  ContentTile,
  WpColumnRow,
  WpGridSection,
  eventTitleStyle,
} from '../components/ContentTile';
import type { ZoneBlock } from '../data/innerPages';
import {
  discoveryZoneTicketsExternalUrl,
  discoveryZones,
} from '../data/innerPages';

function chunkPairs<T>(items: readonly T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2) as T[]);
  }
  return rows;
}

function ZoneContent({ blocks }: { blocks: ZoneBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.kind) {
      case 'strong':
        return (
          <p key={index}>
            <strong>{block.text}</strong>
          </p>
        );
      case 'em':
        return (
          <p key={index}>
            <em>{block.text}</em>
          </p>
        );
      case 'small-em':
        return (
          <p key={index} className="has-small-font-size">
            <em>{block.text}</em>
          </p>
        );
      default:
        return <p key={index}>{block.text}</p>;
    }
  });
}

export default function DiscoveryZonesPage() {
  return (
    <InnerPageShell
      bodyClass="wp-singular page-template-default page page-id-712 wp-custom-logo wp-theme-badm"
      title="Discovery Zones"
      description="Explore over 8 play areas and attractions at Kidz Fun House — from imagination playhouses and art corners to our giant pirate-themed jungle gym. All included with playtime admission."
      desktopImage={kfhPageHeroes.discovery.desktop}
      mobileImage={kfhPageHeroes.discovery.mobile}
    >
      <WpGridSection className="page-tile-grid">
        {chunkPairs(discoveryZones).map((row) => (
          <WpColumnRow key={row[0].title}>
            {row.map((zone) => (
              <ContentTile
                key={zone.title}
                image={zone.image}
                imageAlt={zone.imageAlt}
                imageStyle={zone.imageStyle}
                title={zone.title}
                titleStyle={eventTitleStyle}
                buttonLabel="Come Play!"
                buttonHref={discoveryZoneTicketsExternalUrl}
              >
                <ZoneContent blocks={zone.blocks} />
              </ContentTile>
            ))}
          </WpColumnRow>
        ))}
      </WpGridSection>
    </InnerPageShell>
  );
}
