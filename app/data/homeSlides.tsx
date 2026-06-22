import type { ReactNode } from 'react';
import { kfhHomeSlides, kfhImages } from './kfhImages';

export type HomeSlide = {
  boxClass: string;
  mobileImage: string;
  desktopImage: string;
  alt: string;
  heading: ReactNode;
  ctaText: string;
  ctaHref: string;
  testimonial: {
    text: string;
    name: string;
  };
};

export const homeSlides: HomeSlide[] = [
  {
    boxClass: 'box1 copy copy-1',
    mobileImage: kfhHomeSlides[0],
    desktopImage: kfhHomeSlides[0],
    alt: 'Wide view of the Kidz Fun House indoor play area',
    heading: (
      <>
        Welcome to <br /> Kidz Fun House!
      </>
    ),
    ctaText: 'Plan Your Visit!',
    ctaHref: '/plan-your-visit/',
    testimonial: {
      text: '“KFH is the biggest indoor playground and party venue in Johannesburg.”',
      name: '— Kidz Fun House',
    },
  },
  {
    boxClass: 'box2 copy copy-2',
    mobileImage: kfhHomeSlides[1],
    desktopImage: kfhHomeSlides[1],
    alt: 'Pirate ship play structure at Kidz Fun House',
    heading: 'Come Play!',
    ctaText: 'View Opening Hours!',
    ctaHref: '/plan-your-visit/',
    testimonial: {
      text: '“We work on a walk-in basis and only need bookings for birthdays or large groups.”',
      name: '— Kidz Fun House',
    },
  },
  {
    boxClass: 'box3 copy copy-3',
    mobileImage: kfhHomeSlides[2],
    desktopImage: kfhHomeSlides[2],
    alt: 'Kidz Fun House party room with balloon arch',
    heading: (
      <>
        Party <br /> Bundles!
      </>
    ),
    ctaText: 'View Party Bundles!',
    ctaHref: '/summer-birthdays/',
    testimonial: {
      text: '“Let us create your kiddo’s dream birthday bash.”',
      name: '— Kidz Fun House',
    },
  },
  {
    boxClass: 'box4 copy copy-4',
    mobileImage: kfhHomeSlides[3],
    desktopImage: kfhHomeSlides[3],
    alt: 'Giant pirate-themed jungle gym at Kidz Fun House',
    heading: 'Play Zones',
    ctaText: 'Explore All Zones!',
    ctaHref: '/discovery-zones/',
    testimonial: {
      text: '“A wonderland for kids and an oasis for parents.”',
      name: '— Kidz Fun House',
    },
  },
  {
    boxClass: 'box5 copy copy-5',
    mobileImage: kfhHomeSlides[4],
    desktopImage: kfhHomeSlides[4],
    alt: 'KFH arcade and loyalty program',
    heading: 'Loyalty Program',
    ctaText: 'Learn More!',
    ctaHref: '/membership/',
    testimonial: {
      text: '“Free play on your birthday — a small token of appreciation from the KFH team.”',
      name: '— Kidz Fun House',
    },
  },
];

// Re-export for pages that need a single hero image
export { kfhImages };
