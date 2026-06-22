import { siteConfig } from '../lib/siteConfig';

export type DiscoveryCircleTier = {
  id: string;
  summary: string;
  headline: string;
  benefits: readonly string[];
  footnote?: string;
};

/** Loyalty supporter tiers — used on give / loyalty pages */
export const discoveryCircleTiers: DiscoveryCircleTier[] = [
  {
    id: 'friend',
    summary: 'Friend Circle – R 2 500 – R 5 000',
    headline: 'Helps fund a morning of play for children from local community groups.',
    benefits: [
      'Recognition on our annual thank-you board',
      'Invitations to seasonal celebrations at KFH',
      'First notice of promotions and special events',
      'Complimentary loyalty programme enrolment',
    ],
  },
  {
    id: 'playmaker',
    summary: 'Playmaker Circle – R 5 000 – R 15 000',
    headline: 'Supports party bundles for families who need a little extra help celebrating.',
    benefits: [
      'All Friend Circle benefits',
      'Discount on your next party booking',
      'Priority booking for peak party dates',
      'Personal thank-you from the KFH team',
    ],
  },
  {
    id: 'champion',
    summary: 'Champion Circle – R 15 000 – R 50 000',
    headline: 'Helps maintain and refresh play zones so every visit feels new and exciting.',
    benefits: [
      'All Playmaker Circle benefits',
      'Name listed on our supporter wall at the play centre',
      'Invitation to a private family preview of new activities',
      'Annual family membership included',
    ],
  },
  {
    id: 'legend',
    summary: 'Legend Circle – R 50 000+',
    headline: 'Makes a lasting difference for families across Gauteng who love to play together.',
    benefits: [
      'All Champion Circle benefits',
      'Dedicated point of contact for bookings and events',
      'Complimentary venue hire for one community celebration per year',
      'Featured recognition across KFH communications',
    ],
  },
];

export const discoveryCircleContactEmail = siteConfig.contact.email;
