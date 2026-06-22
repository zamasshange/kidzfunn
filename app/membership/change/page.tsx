import CheckoutLayout from '../../components/CheckoutLayout';
import { ChangeMembershipHub } from '../../components/MembershipFlowPages';
import '../../styles/membership-checkout.css';
import '../../styles/membership-flow.css';

export default function ChangeMembershipPage() {
  return (
    <CheckoutLayout>
      <ChangeMembershipHub />
    </CheckoutLayout>
  );
}
