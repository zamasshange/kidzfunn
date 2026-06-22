import Link from 'next/link';
import { siteConfig } from '../lib/siteConfig';

export type DiscoveryCircleTier = {
  id: string;
  summary: string;
  headline: string;
  benefits: readonly string[];
  footnote?: string;
};

export const discoveryCircleTiers: DiscoveryCircleTier[] = [
  {
    id: 'thinker',
    summary: 'Thinker Circle – R 18 000 – R 44 000',
    headline: 'Funds a visit to the museum for 20 preschoolers from low-income communities.',
    benefits: [
      'Core membership benefits',
      'Free family admission with up to six guests per visit, plus six family guest passes',
      'Easy and unlimited caregiver changes',
      'Invitations to special Discovery Circle events throughout the year',
      'First registration for camps, classes and museum events',
      'R 1 800 off birthday parties',
      'Personal point of contact dedicated to your museum experience',
      'Recognition on annual impact report and donor wall',
      'Free family admission to signature museum events',
    ],
    footnote: '*Free family admission limited to 6 people in a household',
  },
  {
    id: 'explorer',
    summary: 'Explorer Circle – R 44 000 – R 90 000',
    headline: 'Supports professional development for 30 early childhood educators.',
    benefits: [
      'Core membership benefits',
      'Free family admission with up to six guests per visit, plus six family guest passes',
      'Easy and unlimited caregiver changes',
      'Invitations to special Discovery Circle events throughout the year',
      'First registration for camps, classes and museum events',
      'R 1 800 off birthday parties',
      'Personal point of contact dedicated to your museum experience',
      'Recognition on annual impact report and donor wall',
      'Free family admission to signature museum events and seasonal celebrations',
    ],
    footnote: '*Free family admission limited to 6 people in a household',
  },
  {
    id: 'creativity',
    summary: 'Creativity Circle – R 90 000 – R 180 000',
    headline: 'Helps 3 high-need elementary classes experience our STEAM workshops.',
    benefits: [
      'Core membership benefits',
      'Free family admission with up to six guests per visit, plus six family guest passes',
      'Easy and unlimited caregiver changes',
      'Invitations to special Discovery Circle events throughout the year',
      'First registration for camps, classes and museum events',
      'R 1 800 off birthday parties',
      'Personal point of contact dedicated to your museum experience',
      'Recognition on annual impact report and donor wall',
      'Free family admission to signature museum events and seasonal celebrations',
      'Invitation to a private event showcasing the museum\'s educational philosophy and research',
    ],
    footnote: '*Free family admission limited to 6 people in a household',
  },
  {
    id: 'builder',
    summary: 'Builder Circle – R 180 000+',
    headline: 'Provides a year of early STEAM learning to 3 preschool classes of low-income families.',
    benefits: [
      'Core membership benefits',
      'Free family admission with up to six guests per visit, plus six family guest passes',
      'Easy and unlimited caregiver changes',
      'Invitations to special Discovery Circle events throughout the year',
      'First registration for camps, classes and museum events',
      'R 1 800 off birthday parties',
      'Personal point of contact dedicated to your museum experience',
      'Recognition on annual impact report and donor wall',
      'Free family admission to signature museum events and seasonal celebrations',
      'Invitation to a private event showcasing the museum\'s educational philosophy and research',
      'Complimentary commemorative tile celebrating our waterfront campus',
    ],
    footnote:
      '*Free family admission limited to 6 people in a household. Additional commemorative tiles available with a gift of R 27 000 each.',
  },
];

export const discoveryCircleContactEmail = 'discoverycircle@ctdiscovery.co.za';
