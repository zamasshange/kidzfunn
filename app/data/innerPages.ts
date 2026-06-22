import type { CSSProperties } from 'react';
import { kfhZoneImages } from './kfhImages';
import { kfhEvents } from './kfhContent';
import { routes } from '../lib/routes';
import { siteConfig } from '../lib/siteConfig';

export type ZoneBlock =
  | { kind: 'p'; text: string }
  | { kind: 'strong'; text: string }
  | { kind: 'em'; text: string }
  | { kind: 'small-em'; text: string };

export type ZoneItem = {
  image: string;
  imageAlt?: string;
  title: string;
  blocks: ZoneBlock[];
  imageStyle?: CSSProperties;
};

export type EventItem = {
  image: string;
  imageAlt?: string;
  title: string;
  paragraphs: readonly string[];
  note?: string;
  buttonLabel?: string;
  buttonHref?: string;
  extraLink?: { label: string; href: string };
};

export const discoveryZones: ZoneItem[] = [
  {
    image: kfhZoneImages[0],
    imageAlt: 'Imagination Playhouses at Kidz Fun House',
    title: 'Imagination Playhouses',
    blocks: [
      {
        kind: 'p',
        text: 'Our Imagination Playhouses encourage creative role play and imaginative learning. This area consists of three themed playhouses:',
      },
      {
        kind: 'strong',
        text: 'Tool Shed — Equipped with toy tools and construction equipment where children can build, create, and explore hands-on play.',
      },
      {
        kind: 'strong',
        text: 'Kitchen — Features play kitchen equipment that allows children to prepare imaginary breakfasts, lunches, and dinners while developing social and creative skills.',
      },
      {
        kind: 'strong',
        text: 'Dollhouse — Includes dolls and accessories that children can dress up and care for, allowing them to role-play as parents and engage in imaginative storytelling.',
      },
    ],
  },
  {
    image: kfhZoneImages[1],
    imageAlt: 'Art Corner at Kidz Fun House',
    title: 'Art Corner',
    blocks: [
      {
        kind: 'p',
        text: 'Our Art Corner is designed to inspire creativity and self-expression.',
      },
      {
        kind: 'p',
        text: 'Features include a large chalk wall for drawing and artistic play, classroom-style tables where children can play teacher and participate in educational activities, and puzzles, colouring activities, and drawing materials that encourage learning through creativity.',
      },
    ],
  },
  {
    image: kfhZoneImages[2],
    imageAlt: 'Baby and Toddler Corner at Kidz Fun House',
    title: 'Baby & Toddler Corner',
    blocks: [
      {
        kind: 'p',
        text: 'This dedicated area is designed specifically for younger children and toddlers.',
      },
      {
        kind: 'p',
        text: 'Features include a soft play area suitable for children under two years old, climbing equipment and activity jumpers, a Pikler Triangle to support motor skill development, and a mini jungle gym for children up to approximately four years old with age-appropriate slides and climbing activities.',
      },
    ],
  },
  {
    image: kfhZoneImages[3],
    imageAlt: 'Reading and Puzzle Corner at Kidz Fun House',
    title: 'Reading & Puzzle Corner',
    blocks: [
      {
        kind: 'p',
        text: 'The Reading & Puzzle Corner provides a quiet space where children can relax and enjoy a calmer activity away from the excitement of the main play areas.',
      },
      {
        kind: 'p',
        text: 'Children can sit and read books, complete puzzles, and enjoy a peaceful break before returning to play. This area is especially useful for children who need a moment to unwind and helps create a smooth transition when families are preparing to leave.',
      },
    ],
  },
  {
    image: kfhZoneImages[4],
    imageAlt: 'Walk-In Sandpit at Kidz Fun House',
    title: 'Walk-In Sandpit',
    blocks: [
      {
        kind: 'p',
        text: 'Our walk-in sandpit offers endless opportunities for imaginative play with construction toys and tools, kitchen play accessories, buckets, spades, and various sand play items.',
      },
      {
        kind: 'p',
        text: 'Children can build, dig, cook, bake, and create their own adventures. The only limit is their imagination.',
      },
    ],
  },
  {
    image: kfhZoneImages[5],
    imageAlt: 'Arcade Area at Kidz Fun House',
    title: 'Arcade Area',
    imageStyle: { aspectRatio: '16/9', objectFit: 'cover' },
    blocks: [
      {
        kind: 'p',
        text: 'Our arcade provides entertainment for both children and parents. Games range from 1–2 tokens per play, with each token costing R5.00.',
      },
      {
        kind: 'p',
        text: 'Attractions include claw machines with teddy bears and prizes, Baby Shark-themed games, fishing games, driving simulation games, and a PlayStation 4 gaming station.',
      },
      {
        kind: 'strong',
        text: 'For parents and older visitors, we also offer a pool table and a soccer table while children enjoy the play areas.',
      },
      { kind: 'em', text: 'Arcade tokens are not included in playtime rate.' },
    ],
  },
  {
    image: kfhZoneImages[6],
    imageAlt: 'Giant Pirate-Themed Jungle Gym at Kidz Fun House',
    title: 'Giant Pirate-Themed Jungle Gym',
    imageStyle: { aspectRatio: '3/2', objectFit: 'cover' },
    blocks: [
      {
        kind: 'p',
        text: 'Our Giant Jungle Gym is one of the centre\'s most popular attractions, designed with a pirate theme for hours of active play in a safe and exciting environment.',
      },
      {
        kind: 'p',
        text: 'Features include three speed slides, a twirly slide, multiple suspension bridges, climbing obstacles and adventure structures, a trampoline, and a balloon pit — giving children plenty of room to climb, slide, and explore.',
      },
    ],
  },
];

export const events: EventItem[] = [...kfhEvents];

export const campTiles = [
  {
    image:
      '/images/kfh/9df1a2ce9b684a88a2fd3d4a7aac7926.jpg',
    buttonLabel: 'Summer Camps',
    buttonHref: routes.summerCamps,
  },
  {
    image:
      '/images/kfh/0a9765a643923c320a79413fd8f4de13.jpg',
    buttonLabel: 'School Year Camps',
    buttonHref: routes.schoolYearCamps,
  },
  {
    image:
      '/images/kfh/7ba518ae4c94bb9d8025c391c61d2f3d.jpg',
    buttonLabel: 'Build-A-Camp',
    buttonHref: routes.buildACamp,
  },
] as const;

export const staffDepartments = [
  {
    image:
      '/images/kfh/ea03ea3e697af040367555ec93303e94.jpg',
    title: 'Exhibits and Facilities',
  },
  {
    image:
      '/images/kfh/bae413303e00ce05cf52848f63dd87a0.jpg',
    title: 'Development',
  },
  {
    image:
      '/images/kfh/5297ecd2ae654e096891eff7701e1bdc.jpg',
    title: 'Learning and Play Experience',
  },
  {
    image:
      '/images/kfh/861292b85e5bfbaba2672b686ce4e4d4.jpg',
    title: 'Marketing',
  },
  {
    image:
      '/images/kfh/43169d950bb466d5a1b95e38e03d3f4b.jpg',
    title: 'Membership and Visitor Services',
  },
  {
    image:
      '/images/kfh/3899dc26a29d37eff501900a0b8105f5.jpg',
    title: 'School and Community Programs',
  },
] as const;

export const boardExecutiveCommittee = [
  'Rameez Dossa, Chair',
  'Lexie Fisher George, Vice Chair',
  'Chris Kim, Treasurer',
  'Caroline Hoeveler, Secretary',
  'Chian Gong',
  'Charlton Gholson',
] as const;

export const boardTrusteesCol1 = [
  'Austin Bowers',
  'Toby Brown',
  'Rameez Dossa',
  'Dean Duchak',
  'Lian Eoyang',
  'Katie Eulenstein',
  'Vanessa Famulener',
  'Liz Faralli',
  'Alix Rogers Flynn',
  'Lexie Fisher George',
  'Charlton Gholson',
  'Chian Gong',
  'David Hamsher',
  'Franchesca Hashim',
  'Lindsay Cooper Hayman',
  'Caroline Hoeveler',
  'Tscharner Hunter',
  'Sudi Jain',
] as const;

export const boardTrusteesCol2 = [
  'Whitney Wildrick Jones',
  'Heather Judd',
  'Ryan Keats',
  'Chris Kim',
  'April Kupper',
  'Kate Larsen',
  'Christina Millikin',
  'Laura Nichol',
  'Priya Pai',
  'Chris Perez',
  'Jamie Potts',
  'Ishanaa Rambachan',
  'Sam Sellers',
  'Dana Marohn Spiliotis',
  'Ligaya Tichy',
  'Katie Thiry',
  'Cameron Walters',
] as const;

export { routes as discoveryZoneTicketsUrl };

export const discoveryZoneTicketsExternalUrl = routes.tickets;
