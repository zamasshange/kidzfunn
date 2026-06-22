import Link from 'next/link';
import ContentPage from '../components/ContentPage';

const links = [
  { href: '/school-community/workshops-at-your-site/', label: 'Programs at Your Site' },
  { href: '/school-community/workshops-at-the-museum/', label: 'Field Trips' },
  { href: '/school-community/resources/', label: 'Educator Resources' },
  { href: '/school-community/professional-development/', label: 'Professional Development' },
];

export default function SchoolCommunityPage() {
  return (
    <ContentPage
      title="School & Community"
      subtitle="Programs for educators, schools, and community organizations."
      imageDesktop="/images/kfh/5297ecd2ae654e096891eff7701e1bdc.jpg"
      imageMobile="/images/kfh/861292b85e5bfbaba2672b686ce4e4d4.jpg"
    >
      <ul className="wp-block-list">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
