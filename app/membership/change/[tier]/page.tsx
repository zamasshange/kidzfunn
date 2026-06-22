import CheckoutLayout from '../../../components/CheckoutLayout';
import { MembershipTierDetailView } from '../../../components/MembershipFlowPages';
import { getChangeMembershipPlans, tierToSlug } from '../../../lib/membership';
import '../../../styles/membership-checkout.css';
import '../../../styles/membership-flow.css';

type ChangeMembershipTierPageProps = {
  params: Promise<{ tier: string }>;
};

export function generateStaticParams() {
  return getChangeMembershipPlans().map((plan) => ({
    tier: tierToSlug(plan.tier),
  }));
}

export default async function ChangeMembershipTierPage({ params }: ChangeMembershipTierPageProps) {
  const { tier } = await params;

  return (
    <CheckoutLayout>
      <MembershipTierDetailView slug={tier} />
    </CheckoutLayout>
  );
}
