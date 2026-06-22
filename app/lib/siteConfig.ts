export const siteConfig = {
  name: 'Kidz Fun House Play Centre',
  legalName: 'Kidz Fun House Play Centre',
  tagline: "Gauteng's biggest indoor playground and party venue.",
  metaDescription:
    "Kidz Fun House is Gauteng's biggest indoor playground and party venue. Party planning that brings your child's dream party to life.",
  country: 'South Africa',

  locale: {
    region: 'Gauteng',
    landmark: 'Edenvale',
    locationLine: 'Unit 6, 1 Terrace Road, Eastleigh, Edenvale',
    campus: 'indoor playground',
  },

  contact: {
    phone: '+27825605805',
    phoneDisplay: '082 560 5805',
    whatsapp: 'https://wa.me/27825605805',
    email: 'Party@kidzfunhouse.co.za',
    membershipEmail: 'Party@kidzfunhouse.co.za',
    professionalDevEmail: 'Party@kidzfunhouse.co.za',
    campsEmail: 'Party@kidzfunhouse.co.za',
    schoolVisitsEmail: 'Party@kidzfunhouse.co.za',
    mediaEmail: 'Party@kidzfunhouse.co.za',
  },

  address: {
    line1: 'Unit 6, 1 Terrace Road, Eastleigh',
    city: 'Edenvale',
    province: 'Gauteng',
    postalCode: '1601',
    country: 'South Africa',
    full: 'Unit 6, 1 Terrace Road, Eastleigh, Edenvale, 1601, South Africa',
    mapsUrl: 'https://maps.app.goo.gl/yt3UhTB2PcWpMA8GA',
  },

  bank: {
    bankName: 'Nedbank',
    accountName: 'Kidz Fun House',
    accountType: 'Cheque Account',
    accountNumber: '1278695443',
    branchCode: '198765',
    referenceNote: 'Quote Number / Child\'s Name or School Name',
  },

  hours: {
    daysLabel: 'Tuesday–Saturday & Sunday',
    museumOpen: 'Tue–Sat 9am–5pm, Sun 9am–4pm',
    memberHour: 'Open daily during school holidays',
    /** Short lines for the fixed sidebar nav (matches BADM hours block format) */
    navLines: [
      { label: 'Open', text: 'Tuesday–Saturday & Sunday' },
      { label: 'Museum Open', text: 'Tue–Sat 9am–5pm, Sun 9am–4pm' },
      { label: 'Closed', text: 'Mondays · Open daily during school holidays' },
    ],
    summary: 'Open Tuesday–Saturday 9am–5pm, Sunday 9am–4pm. Closed Mondays.',
  },

  currency: {
    code: 'ZAR',
    symbol: 'R',
  },

  social: {
    instagram: 'https://www.instagram.com/kfh_play_centre/',
    facebook: 'https://www.facebook.com/KFHplaycentre',
  },

  ticketsUrl: '/plan-your-visit/',
  donateUrl: '/give/',
  loyaltyUrl: '/give/',
  donateAmounts: [2500, 1000, 500, 250] as const,
} as const;

export function formatZAR(amount: number): string {
  return `R ${amount.toLocaleString('en-ZA')}`;
}

/** Compact price label for membership card circles (single line, no wrap). */
export function formatZARBadge(amount: number, display?: string): string {
  if (display) {
    return display.replace(/\s+/g, '\u00A0').replace(/^R\u00A0/i, 'R');
  }
  if (amount >= 1000) {
    return `R${amount.toLocaleString('en-ZA').replace(/[\s,]/g, '\u00A0')}`;
  }
  return `R${amount}`;
}

export type MembershipBadgeSize = 'default' | 'long' | 'xlarge';

/** Split a ZAR label for the circular membership price badge. */
export function getMembershipBadgeParts(priceLabel: string) {
  const trimmed = priceLabel.trim();
  const suffix = trimmed.endsWith('+') ? '+' : undefined;
  const amountText = trimmed.replace(/^R\s?/i, '').replace(/\+$/, '').trim();
  const digits = amountText.replace(/\s/g, '').length;

  let size: MembershipBadgeSize = 'default';
  if (digits >= 5 || suffix) size = 'xlarge';
  else if (digits >= 4) size = 'long';

  return { currency: 'R', amount: amountText, suffix, size };
}

/** @deprecated use formatZAR */
export const formatUSD = formatZAR;

export const admissionPrices = {
  baby: { label: 'Under 1s (per child per hour)', amount: 55 },
  child: { label: 'Over 1s — first hour', amount: 75 },
  weekdayUnlimited: {
    label: 'OR unlimited playtime (weekdays only)',
    amount: 99,
    note: 'Not applicable on public or school holidays',
  },
  adult: { label: 'Adults', amount: 0 },
} as const;

export const membershipAccordionBenefits = [
  '<strong>Free play on your birthday</strong> — bring proof of date of birth',
  'First hour playtime on the house (Thursdays, T&Cs apply)',
  'Free playtime Fridays — score free fun for up to 3 kids',
  'Sibling discounts available',
  'Unlimited weekend playtime packages',
  'Discounts on party packages and bundles',
  'Over 8 different play zones to explore',
  'Loyalty program with extra member benefits',
] as const;

export const membershipPlanCards = [
  {
    scheme: 'teal' as const,
    tier: 'Weekend Pass',
    amount: 750,
    people: 'Unlimited weekend access for one month',
    benefitLines: ['VISIT EVERY WEEKEND'],
    ctaText: 'JOIN AS A WEEKEND PASS MEMBER',
    ctaHref: '/membership/join/?tier=weekend-pass',
  },
  {
    scheme: 'teal' as const,
    tier: 'Seasonal',
    amount: 740,
    people: 'Unlimited weekday access for 3 weeks during school holidays',
    benefitLines: ['WEEKDAYS ONLY', 'DROP-OFFS NOT INCLUDED'],
    ctaText: 'JOIN AS A SEASONAL MEMBER',
    ctaHref: '/membership/join/?tier=seasonal',
  },
  {
    scheme: 'orange' as const,
    tier: 'Monthly',
    amount: 980,
    people: 'Unrestricted access for a four-week period within a single month',
    labels: { left: 'Most Popular', right: 'Great Value' },
    showStar: true,
    benefitLines: ['DROP-OFFS INCLUDED'],
    ctaText: 'JOIN AS A MONTHLY MEMBER',
    ctaHref: '/membership/join/?tier=monthly',
  },
  {
    scheme: 'teal' as const,
    tier: 'Child Minder',
    amount: 99,
    people: 'Per child — unlimited playtime while you work',
    benefitLines: ['CHILD MINDERS ON SITE', 'WIFI ACCESS'],
    ctaText: 'JOIN AS A CHILD MINDER MEMBER',
    ctaHref: '/membership/join/?tier=child-minder',
    topSpacer: true,
  },
  {
    scheme: 'teal' as const,
    tier: 'loyalty circle',
    amount: 4720,
    amountDisplay: 'R 4 720+',
    people: 'Large party bundle — save 15% on your party',
    benefitLines: [
      'PARTY BUNDLE 1 FROM R4 720',
      'ADD EXTRA KIDS FROM R335 EACH',
      'UPGRADE TO XL OR JUMBO VENUES',
      'PARTY FOOD & DECOR ADD-ONS',
      'EXPERIENCED PARTY HOSTING TEAM',
      'PARTY IN A BOX FOR AT-HOME CELEBRATIONS',
    ],
    pricingLabel: 'Party Bundle Program',
    extraClass: 'discovery-plan',
    ctaText: 'Learn more about party bundles',
    ctaHref: '/summer-birthdays/',
    footerButtons: [
      { label: 'gift a membership', href: '/membership/join/?action=gift' },
      { label: 'Renew your membership', href: '/membership/verify/?intent=renew' },
    ],
  },
] as const;

export const membershipBenefits = [
  'Free play on your birthday — bring proof of date of birth',
  'First hour playtime on the house (Thursdays, T&Cs apply)',
  'Free playtime Fridays for up to 3 kids',
  'Sibling discounts available',
  'Unlimited weekend playtime packages',
  'Discounts on party packages and bundles',
  'Over 8 different play zones to explore',
  'Loyalty program with extra member benefits',
] as const;

export const closedDates = [
  'Closed every Monday',
  'Open every day during school holidays',
  'Open on public holidays',
] as const;
