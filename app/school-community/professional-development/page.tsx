import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { siteConfig } from '../../lib/siteConfig';

const topics = [
  'Creative learning environments',
  'School readiness',
  'Growth mindset',
  'Exploratory learning',
  'Risk-friendly learning',
  'Play-based learning',
  'STEAM in early childhood',
  'Digital technology experiences for young children',
] as const;

export default function ProfessionalDevelopmentPage() {
  return (
    <ContentPage
      title="Professional Development"
      subtitle="Are you a teacher, librarian, or other adult working with young children? Do you want to develop your skills and knowledge of play-based learning? We are here to help!"
      imageDesktop="/images/kfh/93a86a8df2dcceefa00b03018c5b8829.jpg"
    >
      <h2 className="wp-block-heading">Unlock the Benefits of Play and STEAM for Young Learners</h2>
      <p>
        {siteConfig.name} provides professional development for a variety of audiences.
        Our staff has expertise in translating research to practice from the fields of developmental
        and cognitive psychology, education, neuroscience, and creativity to provide practical
        guidance for those seeking to apply current research to their work with young children.
      </p>
      <p>
        Leaning on the research and development of our CREATE and Think, Make Try® educational
        philosophies, which emphasize child-led, risk-friendly, hands-on learning, we offer
        presentations and workshops focused on the following topics:
      </p>
      <ul className="wp-block-list">
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      <p>
        These offerings can be tailored based on your organization&apos;s strategic plans, and can
        range in time from 60-minute presentations to full-day or multi-day workshops held onsite at
        the museum or your site.
      </p>
      <p>
        Please contact us at{' '}
        <a href={`mailto:${siteConfig.contact.professionalDevEmail}`}>
          {siteConfig.contact.professionalDevEmail}
        </a>{' '}
        to discuss your needs and pricing options.
      </p>
      <p>
        Explore our{' '}
        <Link href="/school-community/resources/think-make-try-toolkit/">
          Think, Make, Try® Toolkit
        </Link>{' '}
        and <Link href="/school-community/workshops-at-your-site/">Programs at Your Site</Link>.
      </p>
    </ContentPage>
  );
}
