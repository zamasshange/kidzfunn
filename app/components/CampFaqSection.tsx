import Link from 'next/link';
import { campFaqItems } from '../data/campFaq';
import { routes } from '../lib/routes';
import { siteConfig } from '../lib/siteConfig';
import { WpSection } from './ContentTile';

export default function CampFaqSection({ id = 'faq' }: { id?: string }) {
  return (
    <WpSection id={id}>
      <h2 className="wp-block-heading">FAQ</h2>
      {campFaqItems.map((item) => (
        <details
          key={item.question}
          className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
        >
          <summary>{item.question}</summary>
          <div>{item.answer}</div>
        </details>
      ))}
      <h3 className="wp-block-heading">Questions?</h3>
      <p>
        Have questions about Discovery Camps? Email us at{' '}
        <a href={`mailto:${siteConfig.contact.campsEmail}`}>{siteConfig.contact.campsEmail}</a>.
      </p>
      <p>
        See options to{' '}
        <Link href={routes.buildACamp}>Build a Camp session here</Link>.
      </p>
    </WpSection>
  );
}
