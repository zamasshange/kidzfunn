import { membershipPlanCards } from './siteConfig';

export type MembershipPlan = (typeof membershipPlanCards)[number];

export function tierToSlug(tier: string): string {
  return tier.toLowerCase().replace(/\s+/g, '-');
}

export function formatTierLabel(tier: string): string {
  return tier.toUpperCase();
}

export function findPlanBySlug(slug?: string): MembershipPlan | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase();
  return membershipPlanCards.find((card) => tierToSlug(card.tier) === normalized);
}

export function getJoinablePlans(): MembershipPlan[] {
  return membershipPlanCards.filter((card) => tierToSlug(card.tier) !== 'loyalty-circle');
}

export function getChangeMembershipPlans(): MembershipPlan[] {
  return getJoinablePlans();
}

export function formatCheckoutAmount(amount: number): string {
  const formatted = amount.toLocaleString('en-ZA');
  return `R ${formatted}.00`;
}

export function getAutoRenewAmount(amount: number): number {
  return Math.round(amount * 0.9);
}

export type MembershipTierDetail = {
  slug: string;
  description: string;
  features: readonly string[];
};

export const membershipTierDetails: Record<string, MembershipTierDetail> = {
  'weekend-pass': {
    slug: 'weekend-pass',
    description:
      'Monthly access to KFH is unlimited during weekends, allowing you the flexibility to visit every weekend.',
    features: [
      'Unlimited weekend access for one month',
      'Over 8 play zones to explore',
      'No charge for accompanying adults',
      'Loyalty program benefits',
    ],
  },
  seasonal: {
    slug: 'seasonal',
    description:
      'Unlimited access to KFH for a duration of 3 weeks during school holiday seasons. Weekdays only — drop-offs not included.',
    features: [
      'Unlimited weekday access for 3 weeks during school holidays',
      'Over 8 play zones to explore',
      'Sibling discounts available',
      'Loyalty program benefits',
    ],
  },
  monthly: {
    slug: 'monthly',
    description:
      'Unrestricted access to KFH for a four-week period within a single month, with drop-offs included.',
    features: [
      'Four weeks of unlimited access within one month',
      'Drop-offs included',
      'Free play on your birthday with proof of DOB',
      'Sibling discounts available',
      'Discounts on party packages',
    ],
  },
  'child-minder': {
    slug: 'child-minder',
    description:
      'Unlimited playtime for your child while you work in peace — our child minders are ready to entertain your little whirlwinds. R99 per child.',
    features: [
      'Unlimited playtime per child',
      'On-site child minders',
      'Wifi access for working parents',
      'Access to all play zones',
    ],
  },
};

export function getTierDetail(slug: string): MembershipTierDetail | undefined {
  return membershipTierDetails[slug.toLowerCase()];
}
