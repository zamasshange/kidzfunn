import type { ReactNode } from 'react';
import Link from 'next/link';
import { routes } from '../lib/routes';
import { siteConfig } from '../lib/siteConfig';

const img = {
  artist:
    '/images/kfh/a282e2c8144643aecaed7e23f2d0971b.jpg',
  scientist:
    '/images/kfh/7025c1085ac5067667407a84ce2088df.jpg',
  engineer:
    '/images/kfh/c45c040cd3756b0e641ba9ac10a01e6d.jpg',
  naturalist:
    '/images/kfh/502d45c3d708a1ea8bab5a34721fc7eb.jpg',
  entertainer:
    '/images/kfh/9df1a2ce9b684a88a2fd3d4a7aac7926.jpg',
  artMusic:
    '/images/kfh/0a9765a643923c320a79413fd8f4de13.jpg',
  bugs:
    '/images/kfh/7ba518ae4c94bb9d8025c391c61d2f3d.jpg',
  superheroes:
    '/images/kfh/ea03ea3e697af040367555ec93303e94.jpg',
  kaboom:
    '/images/kfh/bae413303e00ce05cf52848f63dd87a0.jpg',
  cooking:
    '/images/kfh/5297ecd2ae654e096891eff7701e1bdc.jpg',
  eco:
    '/images/kfh/861292b85e5bfbaba2672b686ce4e4d4.jpg',
  orbit:
    '/images/kfh/43169d950bb466d5a1b95e38e03d3f4b.jpg',
  stopMotion:
    '/images/kfh/3899dc26a29d37eff501900a0b8105f5.jpg',
  coders:
    '/images/kfh/73a0a47fd1adbc5cf8fd1e4b4a3ee9db.jpg',
};

export type CampListing = {
  title: string;
  ages: string;
  image: string;
  dates: string;
  time: string;
  price: string;
  aftercare?: string;
  note?: string;
  description: string;
  tagline: string;
};

export type CampAgeGroup = {
  id: string;
  heading: string;
  camps: CampListing[];
};

export const summerCampIntro =
  `Give your kids a break from the ordinary with our playful, adventure-packed camps! From STEAM projects to hidden grottos, children ages 3-8 explore, create, and make new friends at our ${siteConfig.locale.landmark} campus. Every day brings new discoveries, pure joy and lifelong memories!`;

export const summerCampJumpNav = [
  { label: 'Membership', href: routes.membership },
  { label: '3 year old camps', href: '#age-3' },
  { label: '4 year old camps', href: '#age-4' },
  { label: '5 – 6 year old camps', href: '#age-5-6' },
  { label: '7 – 8 year old camps', href: '#age-7-8' },
  { label: 'FAQ', href: '#faq' },
];

export const summerCampAgeGroups: CampAgeGroup[] = [
  {
    id: 'age-3',
    heading: '3 year old camps',
    camps: [
      {
        title: 'Becoming an Artist',
        ages: 'Ages: 3 year-old',
        image: img.artist,
        dates: 'June 8-12, *Jun 15-18',
        time: '9AM – 1PM',
        price: '$465',
        aftercare: '1 – 4PM, $460',
        note: '*Note: This a 4 day camp week. There is no camp on June 19. Tuition is pro-rated to $375. Aftercare is prorated to $370.',
        description:
          'Campers will discover their inner artist as they paint, draw, sculpt, and collage creations of their imagination! Explore lines, texture, shape, and color while discovering the wonders of clay, paint, paper, glue, and beyond!',
        tagline: 'Great for doodlers, builders, and crafters who love to bring their ideas to life!',
      },
      {
        title: 'Becoming a Scientist',
        ages: 'Ages: 3 year-old',
        image: img.scientist,
        dates: 'Jun. 22-26, *Jun.29-Jul. 2',
        time: '9AM – 1PM',
        price: '$465',
        aftercare: '1 – 4PM, $460',
        note: '*Note: This a 4 day camp week. There is no camp on July 3. Tuition is pro-rated to $375. Aftercare is prorated to $370.',
        description:
          'Campers will unleash their curiosity in the laboratory of life! Concoct mixtures, dissect and inspect plants, craft herbal formulas and discover the dance of light and shadow. Little ones will experiment with tools like beakers, magnifying glasses, and light tables as they learn with new and old friends!',
        tagline: 'Ideal for the kid who is always asking "why?"',
      },
      {
        title: 'Becoming an Engineer',
        ages: 'Ages: 3 year-old',
        image: img.engineer,
        dates: 'July 6- 10, July 13-17',
        time: '9AM – 1PM',
        price: '$465',
        aftercare: '1 – 4PM, $460',
        description:
          'Learning to Think, Make, Try with our littlest learners! Campers will bring their imagination to life in the Think, Make, Try studio as they draw blueprints, create prototypes, make hypotheses, test it out, try again: learning the process of bringing dreams to life.',
        tagline:
          'Great for the kid who loves building, problem-solving, and turning big ideas into real-life creations!',
      },
      {
        title: 'Becoming a Naturalist',
        ages: 'Ages: 3 year-old',
        image: img.naturalist,
        dates: 'July 20-24, July 27-31',
        time: '9AM – 1PM',
        price: '$465',
        aftercare: '1 – 4PM, $460',
        description:
          "Welcome wild ones! Campers become young explorers, venturing through rainforests, tundra, oceans and deserts to learn what makes the earth's ecosystems (including the Western Cape's) so wildly wonderful. Becoming a Naturalist is an epic blend of science, creativity, and hands-on exploration!",
        tagline: 'Wonderful for the kid who loves to forage and observe the changing seasons!',
      },
      {
        title: 'Becoming an Entertainer',
        ages: 'Ages: 3 year-old',
        image: img.entertainer,
        dates: 'Aug 3-7, Aug 10-14',
        time: '9AM – 1PM',
        price: '$465',
        aftercare: '1 – 4PM, $460',
        description:
          'A gentle first step onto the stage for younger campers as they create props, try puppet storytelling, and explore music through movement. With wearable bells and scenes to set, every child gets a chance to shine.',
        tagline:
          'Perfect for the child who loves pretend play, songs, and putting on a performance for family.',
      },
    ],
  },
  {
    id: 'age-4',
    heading: '4 year old camps',
    camps: [
      {
        title: 'Brushes and Beats',
        ages: 'Ages: 4 year-old',
        image: img.artMusic,
        dates:
          'Jun. 8-12, *Jun. 15-18, Jun. 22-26, *Jun.29-Jul. 2, July 13-17, July 20-24, July 27-31, Aug. 17-21',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          'Get creative and groove! Campers will dive into vibrant art projects, lively music-making, and hands-on activities that let them move, express themselves, and let their creativity shine.',
        tagline: 'Perfect for the kid with big ideas and boundless creativity!',
      },
      {
        title: "It's A Bug's Life",
        ages: 'Ages: 4 year-old',
        image: img.bugs,
        dates: '*Jun. 15-18, Jun. 22-26, July 6- 10, July 13-17, July 27-31, Aug. 3-7, Aug. 10-14',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          'Creep, crawl, and explore! Young entomologists will discover how insects grow, change, and thrive as they head outdoors for nature hikes and close-up investigations. Packed with hands-on discovery, creativity, and fresh air fun.',
        tagline: "Perfect for the kid who's always spotting tiny creatures!",
      },
      {
        title: 'Superheroes!',
        ages: 'Ages: 4 year-old',
        image: img.superheroes,
        dates:
          'Jun. 8-12, *Jun. 15-18, *Jun.29-Jul. 2, July 6- 10, July 20-24, July 27-31, Aug. 3-7, Aug. 10-14',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          'Suit up for adventure! Campers will explore what it means to be a hero through teamwork, imaginative play, and power-packed challenges that spark courage and creativity.',
        tagline: 'Perfect for the kid ready to unleash their super skills!',
      },
    ],
  },
  {
    id: 'age-5-6',
    heading: '5 – 6 year old camps',
    camps: [
      {
        title: 'Kaboom!',
        ages: 'Ages: 5 – 6 year-olds',
        image: img.kaboom,
        dates: 'Jun. 8-12, Jun. 22-26, *Jun.29-Jul. 2, July 6- 10, July 13-17, July 27-31, Aug. 3-7',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          'Mix, fizz, and experiment! Campers will pour, stir, and create eye-popping chemical reactions as they uncover the magic hiding in everyday science.',
        tagline: 'Perfect for the kid who loves a good "wow—did you see that?!" moment',
      },
      {
        title: 'Recipe for Discovery',
        ages: 'Ages: 5 – 6 year-olds',
        image: img.cooking,
        dates: '*Jun. 15-18, Jun. 22-26, July 6- 10, July 13-17, July 20-24, Aug. 3-7, Aug. 10-14',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          "Welcome to the Cook's Kitchen! Each day, campers will explore culinary flavors and skills like measuring, mixing, and molecular gastronomy. Recipe for Discovery offers a tasty adventure in cooking and kitchen science.",
        tagline: 'Perfect for the kid who loves helping in the kitchen or experimenting with food!',
      },
      {
        title: 'Eco-Explorers',
        ages: 'Ages: 5 – 6 year-olds',
        image: img.eco,
        dates:
          'Jun. 8-12, *Jun. 15-18, *Jun.29-Jul. 2, July 6- 10, July 20-24, July 27-31, Aug. 3-7, Aug. 10-14',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          'Nature, Unleashed! Campers will dive into a new ecosystem each day, exploring how animals, plants, and people all connect in our amazing world through hands-on adventures indoors and out.',
        tagline: "Perfect for the kid who's happiest with a magnifying glass in hand.",
      },
      {
        title: 'Orbit Adventures',
        ages: 'Ages: 5 – 6 year-olds',
        image: img.orbit,
        dates:
          '*Jun. 15-18, Jun. 22-26, *Jun.29-Jul. 2, July 13-17, July 20-24, July 27-31, Aug. 10-14, Aug. 17-21',
        time: '9AM – 3PM',
        price: '$640',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $515. Aftercare is prorated to $105.',
        description:
          'Blast off! Campers will journey through our solar system and beyond as they learn about planets, mini moons, asteroid belts, and the wonders of outer space through playful, hands-on discovery.',
        tagline: 'Perfect for the kid who can\'t wait to be the first one on Mars.',
      },
    ],
  },
  {
    id: 'age-7-8',
    heading: '7 – 8 year old camps',
    camps: [
      {
        title: 'Stop Motion Studios',
        ages: 'Ages: 7 – 8 year-olds',
        image: img.stopMotion,
        dates: 'Jun. 8-12, Jun. 22-26, July 6- 10, July 20-24, Aug. 3-7, Aug.17-21',
        time: '9AM – 3PM',
        price: '$725',
        aftercare: '3 – 4PM, $130',
        description:
          'Ready, set, clay! Campers will dive into the magical world of claymation as they sculpt characters, build stories, and animate their very own short films using kid-friendly tools and stop-motion techniques.',
        tagline: 'Perfect for the kid who loves bringing their stories to life!',
      },
      {
        title: 'Junior Coders',
        ages: 'Ages: 7 – 8 year-olds',
        image: img.coders,
        dates: 'Jun. 15-18, Jun.29-Jul. 2, July 13-17, July 27-31, Aug. 10-14',
        time: '9AM – 3PM',
        price: '$725',
        aftercare: '3 – 4PM, $130',
        note: '*Note: This a 4 day camp week. There is no camp on June 19th and July 3rd. Tuition is pro-rated to $580. Aftercare is prorated to $105.',
        description:
          'Design, code and bring to life! Campers will learn the basics of programming as they build robots, create simple games, and engineer moving masterpieces through hands-on exploration.',
        tagline: 'Perfect for the builder, creator, and future coder!',
      },
    ],
  },
];

function chunkPairs<T>(items: readonly T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2) as T[]);
  }
  return rows;
}

export { chunkPairs };
