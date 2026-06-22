import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { inclusionStatement } from '../../data/aboutContent';
import { siteConfig } from '../../lib/siteConfig';

export default function InclusionPage() {
  return (
    <ContentPage
      title="Inclusion & Diversity"
      subtitle="A judgement-free zone where every child is celebrated for their uniqueness."
      imageDesktop="/images/kfh/ea03ea3e697af040367555ec93303e94.jpg"
    >
      {inclusionStatement.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>
        Our facility has been cultivated to allow everyone — including differently abled and special
        needs children — to flourish. If you have specific accessibility needs or questions before
        your visit, please{' '}
        <Link href="/contact/">contact us</Link> at{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or call{' '}
        <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>.
      </p>
    </ContentPage>
  );
}
