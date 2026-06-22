import Link from 'next/link';
import ContentPage from '../components/ContentPage';
import { siteConfig } from '../lib/siteConfig';

export default function PrivacyPolicyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      subtitle={`How ${siteConfig.name} collects, uses, and protects your information.`}
      imageDesktop="/images/kfh/7ba518ae4c94bb9d8025c391c61d2f3d.jpg"
    >
      <p>
        {siteConfig.name} (&ldquo;the museum,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy. This policy describes how we handle information
        when you visit our website, purchase tickets or membership, subscribe to our newsletter, or
        interact with us in person at the museum.
      </p>

      <h2 className="wp-block-heading">Information We Collect</h2>
      <p>
        We may collect personal information you provide directly, such as your name, email address,
        phone number, mailing address, payment information, and information about children in your
        household when you register for membership, camps, birthday parties, or school programs.
      </p>
      <p>
        We also collect usage information when you browse our website, including pages visited and
        general device information, through cookies and similar technologies.
      </p>

      <h2 className="wp-block-heading">How We Use Information</h2>
      <ul className="wp-block-list">
        <li>Process tickets, memberships, donations, and program registrations</li>
        <li>Send event updates, newsletters, and museum news (with your consent)</li>
        <li>Improve our website, exhibits, and programs</li>
        <li>Maintain a safe and welcoming museum environment</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="wp-block-heading">Sharing Information</h2>
      <p>
        We do not sell your personal information. We may share information with trusted service
        providers who help us operate the museum, process payments, or send communications, and when
        required by law.
      </p>

      <h2 className="wp-block-heading">Children&apos;s Privacy</h2>
      <p>
        Our museum serves young children and their families. We collect only the minimum information
        needed to provide services and require adult consent for memberships and registrations
        involving minors.
      </p>

      <h2 className="wp-block-heading">Your Choices</h2>
      <p>
        You may unsubscribe from marketing emails at any time using the link in our messages. To
        update or delete your information, contact us at{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2 className="wp-block-heading">Contact</h2>
      <p>
        Questions about this policy? Email{' '}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or call{' '}
        <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>.
      </p>
      <p>
        See also our <Link href="/about/policies/">Museum Policies</Link> and{' '}
        <Link href="/membership/">Membership</Link> terms.
      </p>
    </ContentPage>
  );
}
