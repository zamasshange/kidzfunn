import InnerPageShell from '../../components/InnerPageShell';
import ParallaxDivider from '../../components/ParallaxDivider';
import SchoolProgramsSignup from '../../components/SchoolProgramsSignup';
import SectionWithAccordions from '../../components/SectionWithAccordions';
import { WpColumnRow, WpGridSection } from '../../components/ContentTile';
import { kfhImages } from '../../data/kfhImages';
import { siteConfig } from '../../lib/siteConfig';
import {
  k3rdSection,
  prekTkSection,
  tryItTruckSection,
  workshopsRegistrationNote,
} from '../../data/workshopsAtYourSite';

export default function WorkshopsAtYourSitePage() {
  return (
    <InnerPageShell
      title="Bring the Museum to You!"
      description={`You don't need to visit the museum to experience the benefits of our research-backed, playful programming. Our Try It Truck and STEAM Workshops at Your Site make it fun and easy to support STEAM-learning in schools and communities throughout ${siteConfig.locale.region}!`}
      desktopImage={kfhImages.comePlay}
      mobileImage={kfhImages.playZones}
      jumpNav={[
        { label: 'Try It Truck', href: '#TT' },
        { label: 'PreK – TK STEAM Workshops', href: '#PREK' },
        { label: 'K – 3rd STEAM Workshops', href: '#k3rd' },
      ]}
    >
      <SectionWithAccordions
        id={tryItTruckSection.id}
        title={tryItTruckSection.title}
        intro={tryItTruckSection.intro}
        registrationNote={workshopsRegistrationNote}
        ctaLabel={tryItTruckSection.ctaLabel}
        ctaHref={tryItTruckSection.ctaHref}
        ctaExternal={false}
        accordions={tryItTruckSection.accordions}
      />

      <ParallaxDivider
        light
        image="/images/kfh/742af04d98cb02dc587e280f2303acde.jpg"
      />

      <SectionWithAccordions
        id={prekTkSection.id}
        title={prekTkSection.title}
        intro={prekTkSection.intro}
        registrationNote={workshopsRegistrationNote}
        ctaLabel={prekTkSection.ctaLabel}
        ctaHref={prekTkSection.ctaHref}
        ctaExternal={false}
        accordions={prekTkSection.accordions}
      />

      <ParallaxDivider image="/images/kfh/2b0ee44c25fc2a813cc2d18fb2a8a6c2.jpg" />

      <SectionWithAccordions
        id={k3rdSection.id}
        title={k3rdSection.title}
        intro={k3rdSection.intro}
        registrationNote={workshopsRegistrationNote}
        ctaLabel={k3rdSection.ctaLabel}
        ctaHref={k3rdSection.ctaHref}
        ctaExternal={false}
        accordions={k3rdSection.accordions}
      />

      <WpGridSection className="school-programs-footer">
        <WpColumnRow>
          <div
            className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
            style={{ flexBasis: '66.66%' }}
          >
            <SchoolProgramsSignup />
          </div>
          <div
            className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
            style={{ flexBasis: '33.33%' }}
          />
        </WpColumnRow>
      </WpGridSection>

      <WpGridSection>
        <h4 className="wp-block-heading">
          Thank you, Oracle, for supporting our growing community of future engineers.
        </h4>
        <figure className="wp-block-image size-full">
          <img
            decoding="async"
            width={515}
            height={160}
            src="/images/kfh/2fb39179bebd4c7ac7458d1df6bc7e9c.jpg"
            alt="Oracle"
          />
        </figure>
      </WpGridSection>
    </InnerPageShell>
  );
}
