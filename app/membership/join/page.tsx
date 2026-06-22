import { redirect } from 'next/navigation';
import CheckoutLayout from '../../components/CheckoutLayout';
import MembershipCheckout from '../../components/MembershipCheckout';
import { findPlanBySlug } from '../../lib/membership';
import { membershipPlanCards } from '../../lib/siteConfig';
import '../../styles/membership-checkout.css';

type MembershipJoinPageProps = {
  searchParams: Promise<{
    tier?: string;
    action?: string;
  }>;
};

export default async function MembershipJoinPage({ searchParams }: MembershipJoinPageProps) {
  const params = await searchParams;
  const tierKey = params.tier?.toLowerCase();
  const action = params.action?.toLowerCase();

  if (action === 'renew' && !tierKey) {
    redirect('/membership/verify/?intent=renew');
  }

  if (action === 'gift' && !tierKey) {
    redirect('/membership/change/');
  }

  const plan = findPlanBySlug(tierKey);

  const tier = plan?.tier ?? (action === 'gift' ? 'Gift Membership' : 'Membership');
  const amount = plan?.amount ?? membershipPlanCards[0].amount;
  const people =
    plan?.people ??
    (action === 'gift'
      ? 'Choose a membership tier on the membership page, then return here to complete your gift.'
      : action === 'renew'
        ? 'Verify your current membership tier, or choose a new one on the membership page.'
        : 'Select a membership tier to continue.');

  return (
    <CheckoutLayout>
      <MembershipCheckout
        tier={tier}
        tierSlug={tierKey ?? 'monthly'}
        amount={amount}
        people={people}
        action={action}
      />
    </CheckoutLayout>
  );
}
