import { Suspense } from 'react';
import CheckoutLayout from '../../components/CheckoutLayout';
import VerifyMembershipForm from '../../components/VerifyMembershipForm';
import '../../styles/membership-checkout.css';
import '../../styles/membership-flow.css';

export default function VerifyMembershipPage() {
  return (
    <CheckoutLayout>
      <Suspense fallback={<div className="membership-flow">Loading…</div>}>
        <VerifyMembershipForm mode="id" />
      </Suspense>
    </CheckoutLayout>
  );
}
