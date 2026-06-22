export type SchoolBreakCamp = {
  id: string;
  title: string;
  format?: string;
  dates: string;
  time: string;
  ages: string;
  image: string;
  description?: string;
  href?: string;
};

import { siteConfig } from '../lib/siteConfig';

export const schoolYearCampIntro =
  `At ${siteConfig.name}, school year camps aren't just a way to fill a day off. They are days when unforgettable memories are made! Designed for ages 4–7, every camp blends big, messy projects with playful learning guided by educators.`;

export const schoolBreakCamps: SchoolBreakCamp[] = [
  {
    id: 'spring-break',
    title: 'Spring Break',
    format: 'Week-Long Camp',
    dates: 'March 30 – April 3, 2026\nApril 6 – 10, 2026',
    time: '9AM – 3PM, Aftercare: 3 – 4PM',
    ages: '3-7 Years-Old',
    image:
      '/images/kfh/8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg',
  },
  {
    id: 'build-a-camp',
    title: 'Build a Camp',
    dates: '',
    time: '',
    ages: '',
    image:
      '/images/kfh/742af04d98cb02dc587e280f2303acde.jpg',
    description:
      "Choose from our Build-A-Camp themes and we'll create an unforgettable day of discovery for your group on a date that works for your schedule!",
    href: '/programs/school-year-camps/build-a-camp/',
  },
  {
    id: 'veterans-day',
    title: "Veteran's Day",
    dates: 'Tuesday, November 11, 2025',
    time: '9AM – 3PM, Aftercare: 3 – 4PM',
    ages: '4 – 7 Years-Old',
    image:
      '/images/kfh/2b0ee44c25fc2a813cc2d18fb2a8a6c2.jpg',
  },
  {
    id: 'thanksgiving',
    title: 'Thanksgiving Break',
    dates: 'Monday and Tuesday, November 24 and 25, 2025',
    time: '9AM – 3PM, Aftercare: 3 – 4PM',
    ages: '4 – 7 Years-Old',
    image:
      '/images/kfh/2fb39179bebd4c7ac7458d1df6bc7e9c.jpg',
  },
  {
    id: 'winter-break',
    title: 'Winter Break',
    format: 'Single Day Camps',
    dates: 'December 22, 23, 26, 29, 30, January 2 and 5.',
    time: '9AM – 3PM, Aftercare: 3 – 4PM',
    ages: '4-7 Years-Old',
    image:
      '/images/kfh/2e4b8db65323ee2e779815da6dae1353.jpg',
  },
  {
    id: 'mlk-day',
    title: 'MLK Day',
    format: 'Single Day',
    dates: 'Monday, January 19, 2026',
    time: '9AM – 3PM, Aftercare: 3 – 4PM',
    ages: '4 – 7 Years-Old',
    image:
      '/images/kfh/35311db4f0d75430cbe67a39dc49e076.jpg',
  },
  {
    id: 'mid-winter',
    title: 'Mid-Winter Break',
    format: 'Single-Day and Week Long Options',
    dates: 'Monday – Friday, February 16 – 20, 2026.',
    time: '9AM – 3PM, Aftercare: 3 – 4PM',
    ages: '4 – 7 Years Old',
    image:
      '/images/kfh/375588e1b355b77e92987e535e60ec80.jpg',
  },
];

export const buildACampOptions = [
  {
    title: 'Camp Option 1: Sketch, Sculpt, Splatter',
    description:
      "From bold brushstrokes to squishy clay creations, campers experiment with different artistic mediums and techniques. Perfect for kids who love to create and don't mind a bit of mess!",
  },
  {
    title: 'Camp Option 2: Curious Chemists',
    description:
      'Mix, fizz, bubble, and pop! Campers step into the role of young scientists as they experiment and learn the "why" behind the "wow"! Curiosity required! Perfect for kids who always ask "why?"!',
  },
  {
    title: 'Camp Option 3: Dream, Design, Discover',
    description:
      'Calling all builders, dreamers, and problem-solvers! Campers design, tinker and bring their creations to life in this hands-on engineering adventure. Perfect for kids who are always building and creating new inventions.',
  },
  {
    title: 'Camp Option 4: Museum Mash-Up',
    description:
      "Can't choose just one? This camp is a mix of art, science and nature—all wrapped up in a day of discovery across the museum. Perfect for kids who want to try everything at least once.",
  },
] as const;
