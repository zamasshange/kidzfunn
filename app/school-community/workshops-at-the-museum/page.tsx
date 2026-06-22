import Link from 'next/link';
import InnerPageShell from '../../components/InnerPageShell';
import SectionWithAccordions from '../../components/SectionWithAccordions';
import { schoolPackages, schoolTermsAndConditions } from '../../data/kfhContent';
import { kfhImages } from '../../data/kfhImages';
import { siteConfig } from '../../lib/siteConfig';

export default function FieldTripsPage() {
  return (
    <InnerPageShell
      title="School Outings"
      description="School packages for registered schools and nursery schools — playtime, meals, and group visits at Kidz Fun House."
      desktopImage="/images/kfh/add4156a36d731f1f7c39a317067692b.jpg"
      mobileImage={kfhImages.welcome}
      jumpNavClass=""
      jumpNav={[
        { label: 'School Packages', href: '#packages' },
        { label: 'Terms & Conditions', href: '#terms' },
      ]}
    >
      <SectionWithAccordions
        id="packages"
        title="School Packages"
        intro={
          <p>
            School packages are available for groups of 10 or more at registered schools and nursery
            schools. Contact us at{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or
            WhatsApp{' '}
            <a href={siteConfig.contact.whatsapp}>{siteConfig.contact.phoneDisplay}</a> to book.
          </p>
        }
        ctaLabel="Book a School Outing"
        ctaHref="/contact/?interest=field-trip"
        accordions={schoolPackages.map((pkg) => ({
          summary: `${pkg.title} — ${pkg.price}`,
          content: (
            <>
              <ul className="wp-block-list">
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {'mealOptions' in pkg && pkg.mealOptions ? (
                <>
                  <p>
                    <strong>Meal options:</strong>
                  </p>
                  <ul className="wp-block-list">
                    {pkg.mealOptions.map((option) => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </>
          ),
        }))}
      />

      <SectionWithAccordions
        id="terms"
        title="School Booking Terms & Conditions"
        intro={
          <p>
            Send your completed booking form and proof of payment via WhatsApp or email. Bank
            details: Nedbank Cheque Account {siteConfig.bank.accountNumber}, Branch Code{' '}
            {siteConfig.bank.branchCode}. Reference: School Name.
          </p>
        }
        ctaLabel="Contact Us"
        ctaHref="/contact/"
        accordions={[
          {
            summary: 'Terms & Conditions',
            content: (
              <>
                {schoolTermsAndConditions.map((term) => (
                  <p key={term}>{term}</p>
                ))}
              </>
            ),
          },
        ]}
      />

      <p style={{ marginTop: '1.5rem' }}>
        <Link href="/school-community/">← Back to School &amp; Community</Link>
      </p>
    </InnerPageShell>
  );
}
