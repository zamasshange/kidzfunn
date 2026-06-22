import Link from 'next/link';
import ContentPage from '../components/ContentPage';
import { siteConfig } from '../lib/siteConfig';
import { routes } from '../lib/routes';

const searchablePages = [
  { title: 'Plan Your Visit', href: routes.tickets, keywords: ['hours', 'admission', 'tickets', 'visit'] },
  { title: 'Membership', href: routes.membership, keywords: ['member', 'join', 'renew'] },
  { title: 'Discovery Zones', href: routes.discoveryZones, keywords: ['exhibits', 'play', 'wobbleland'] },
  { title: 'Events', href: routes.events, keywords: ['pride', 'goblin', 'festival'] },
  { title: 'Bubble Bash', href: routes.bubbleBash, keywords: ['bubbles', 'foam', 'summer'] },
  { title: 'Summer Camps', href: routes.summerCamps, keywords: ['camp', 'summer'] },
  { title: 'School Year Camps', href: routes.schoolYearCamps, keywords: ['break', 'holiday camp'] },
  { title: 'Summer Birthdays', href: routes.summerBirthdays, keywords: ['party', 'birthday'] },
  { title: 'Loyalty Program', href: routes.give, keywords: ['loyalty', 'rewards', 'benefits'] },
  { title: 'Contact Us', href: routes.contact, keywords: ['email', 'phone', 'directions'] },
  { title: 'About Us', href: '/about/', keywords: ['mission', 'board', 'staff'] },
  { title: 'Field Trips', href: routes.workshopsAtMuseum, keywords: ['school', 'field trip'] },
  { title: 'Programs at Your Site', href: routes.workshopsAtYourSite, keywords: ['try it truck', 'steaM'] },
  { title: 'Professional Development', href: '/school-community/professional-development/', keywords: ['teacher', 'educator'] },
  { title: 'Privacy Policy', href: routes.privacyPolicy, keywords: ['privacy', 'policy'] },
] as const;

type SearchPageProps = {
  searchParams: Promise<{ s?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.s ?? '').trim().toLowerCase();

  const results = query
    ? searchablePages.filter(
        (page) =>
          page.title.toLowerCase().includes(query) ||
          page.keywords.some((keyword) => keyword.includes(query) || query.includes(keyword)),
      )
    : [];

  return (
    <ContentPage
      title="Search"
      subtitle={`Find pages across the ${siteConfig.name} website.`}
      imageDesktop="/images/kfh/43169d950bb466d5a1b95e38e03d3f4b.jpg"
    >
      <form role="search" method="get" action="/search/" style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="site-search">Search</label>
        <br />
        <input
          id="site-search"
          type="search"
          name="s"
          defaultValue={params.s ?? ''}
          placeholder="Search"
          style={{ maxWidth: '100%', width: '24rem' }}
        />
        <button type="submit" className="wp-block-button__link wp-element-button" style={{ marginLeft: '0.5rem' }}>
          Search
        </button>
      </form>

      {!query ? (
        <p>Enter a search term to find museum pages and programs.</p>
      ) : results.length ? (
        <>
          <p>
            {results.length} result{results.length === 1 ? '' : 's'} for &ldquo;{params.s}&rdquo;
          </p>
          <ul className="wp-block-list">
            {results.map((page) => (
              <li key={page.href}>
                <Link href={page.href}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>
          No results for &ldquo;{params.s}&rdquo;. Try{' '}
          <Link href={routes.tickets}>Plan Your Visit</Link>,{' '}
          <Link href={routes.membership}>Membership</Link>, or{' '}
          <Link href={routes.contact}>Contact Us</Link>.
        </p>
      )}
    </ContentPage>
  );
}
