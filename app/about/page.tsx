import ContentPage from '../components/ContentPage';
import {
  aboutBackToBasics,
  aboutItTakesAVillage,
  aboutMission,
  aboutQuote,
  aboutStory,
} from '../data/aboutContent';
import { kfhPageHeroes } from '../data/kfhImages';
import { siteConfig } from '../lib/siteConfig';

export default function AboutPage() {
  return (
    <ContentPage
      title="About"
      subtitle={`${siteConfig.tagline} Est. 2015 — ${siteConfig.locale.landmark}, ${siteConfig.locale.region}.`}
      imageDesktop={kfhPageHeroes.about.desktop}
    >
      <p>
        <strong>{aboutMission}</strong>
      </p>
      {aboutStory.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <h2 className="wp-block-heading">{aboutBackToBasics.heading}</h2>
      <p>{aboutBackToBasics.body}</p>
      <h2 className="wp-block-heading">{aboutItTakesAVillage.heading}</h2>
      <p>{aboutItTakesAVillage.body}</p>
      <p>
        <em>{aboutQuote}</em>
      </p>
      <p>
        {siteConfig.name} is located at {siteConfig.address.full}. Call{' '}
        <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a> or
        WhatsApp us to plan your visit.
      </p>
    </ContentPage>
  );
}
