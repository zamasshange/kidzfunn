import Link from 'next/link';
import ContentPage from '../../components/ContentPage';
import { programsAndClasses } from '../../data/aboutContent';
import { siteConfig } from '../../lib/siteConfig';

export default function ProgramsAndClassesPage() {
  return (
    <ContentPage
      title="Programs & Classes"
      subtitle="Ballet, toddler mornings, nanny training, first aid, and creative workshops at Kidz Fun House."
      imageDesktop="/images/kfh/861292b85e5bfbaba2672b686ce4e4d4.jpg"
    >
      <p>
        Beyond everyday playtime, {siteConfig.name} offers classes, training, and special
        programmes for children, parents, and childcare providers.
      </p>
      {programsAndClasses.map((program) => (
        <div key={program.title}>
          <h2 className="wp-block-heading">{program.title}</h2>
          <p>{program.body}</p>
        </div>
      ))}
      <p style={{ marginTop: '1.5rem' }}>
        See current events and promotions on our <Link href="/events/">Events</Link> page, or{' '}
        <Link href="/membership/">explore membership</Link> for unlimited playtime packages.
      </p>
    </ContentPage>
  );
}
