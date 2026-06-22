import InnerPageShell from '../components/InnerPageShell';
import { CampTile, WpColumnRow, WpGridSection } from '../components/ContentTile';
import { campTiles } from '../data/innerPages';
import { siteConfig } from '../lib/siteConfig';

export default function ProgramsPage() {
  return (
    <InnerPageShell
      title="Camps"
      description="Learn more about our camp offerings!"
      desktopImage="/images/kfh/ea03ea3e697af040367555ec93303e94.jpg"
      mobileImage="/images/kfh/bae413303e00ce05cf52848f63dd87a0.jpg"
    >
      <WpGridSection className="page-camps-grid">
        <p>
          Give your kids a break from the ordinary with our playful, adventure-packed camps! From
          STEAM projects to hidden grottos, children ages 3-8 explore, create, and make new friends
          across our waterfront campus at {siteConfig.locale.landmark}. Every day brings new
          discoveries, pure joy and lifelong memories!
        </p>

        <WpColumnRow>
          {campTiles.map((camp) => (
            <CampTile
              key={camp.buttonLabel}
              image={camp.image}
              buttonLabel={camp.buttonLabel}
              buttonHref={camp.buttonHref}
            />
          ))}
        </WpColumnRow>
      </WpGridSection>
    </InnerPageShell>
  );
}
