import type { EventDetailData } from '../components/EventDetailPage';
import { routes } from '../lib/routes';
import { admissionPrices, formatZAR, siteConfig } from '../lib/siteConfig';

const festivalBenefits = [
  {
    title: 'Swift and Simple Check-In',
    description:
      'No printer necessary. We’ll scan your mobile tickets or retrieve your reservation by name.',
  },
  {
    title: 'Convenient Parking',
    description: 'Easy access at our Edenvale location with parking available nearby.',
  },
  {
    title: 'Picture-Perfect Moments',
    description: `Capture magical memories with ${siteConfig.name} as your backdrop!`,
  },
  {
    title: 'No Cleanup or Fuss',
    description: 'Forget about post-event cleanup. Simply enjoy the festivities!',
  },
] as const;

export const prideEvent: EventDetailData = {
  slug: 'pride',
  title: 'Pride',
  subtitle: 'A joyful celebration of family, creativity, and love in all forms.',
  desktopImage: '/images/kfh/73a0a47fd1adbc5cf8fd1e4b4a3ee9db.jpg',
  mobileImage: '/images/kfh/85ac9b565918e7ff48fe846b75a54d9f.jpg',
  intro: (
    <p>
      Our Pride celebration is the perfect way for the whole family to celebrate! We believe in
      creating a world where every child and caregiver feels valued, celebrated and free to be
      their authentic selves.
    </p>
  ),
  dateTime: <p>Saturday, June 20 · 9:00 AM – 4:00 PM</p>,
  pricing: (
    <p>
      Members: Free · Babies Under One: {formatZAR(admissionPrices.baby.amount)}/hr · Adults: Free ·
      Children: {formatZAR(admissionPrices.child.amount)} first hour · Weekday unlimited:{' '}
      {formatZAR(admissionPrices.weekdayUnlimited.amount)}
    </p>
  ),
  quickInfo: [
    'Tickets are not required for members.',
    'Pride is a safe space to express oneself.',
    'Standard play centre hours apply.',
    'Doors open at 9 AM for all.',
    'Rain or shine — indoor play continues in all weather.',
    'Attendees can bring outside food and drink.',
  ],
  activities: [
    {
      title: 'Frames of Love',
      description: 'Decorate a photo frame that celebrates your family.',
    },
    {
      title: 'Pride Portraits',
      description:
        'Create a self-portrait collage that expresses and explores what makes you, you.',
    },
    {
      title: 'Paper Tie Dye',
      description:
        'Layer, blend, and mix colours with tissue paper. Make and rock your own rainbow scarf.',
    },
    {
      title: 'Storytime',
      description: 'Enjoy classic stories celebrating kindness, friendship, and being yourself.',
    },
    {
      title: 'Foam Party',
      description: 'Jump into a sea of bubbles and joy! 1:30–2pm & 2:30–3pm.',
    },
  ],
  whyFamilies: [...festivalBenefits],
  disclaimer:
    'Special event pricing and promotions cannot be combined with other offers. Standard membership terms apply.',
  ctaLabel: 'Plan Your Visit',
  ctaHref: routes.tickets,
};

export const goblinJamboreeEvent: EventDetailData = {
  slug: 'goblin-jamboree',
  title: 'Goblin Jamboree',
  subtitle:
    'Costumes on, bugs out! A just-spooky-enough Halloween celebration across the entire play centre.',
  desktopImage: '/images/kfh/ce631791efc1e0a9952e53a47dfdb29d.jpg',
  mobileImage: '/images/kfh/514891ba0a87729e9e5f9bea581d96a5.jpg',
  intro: (
    <>
      <p>
        It&apos;s more than costumes—it&apos;s a Halloween celebration made just for kids. Costumes
        on, bugs out! Goblin Jamboree takes over {siteConfig.name} with spooky-fun activities
        bringing joy to your family and friends across Gauteng.
      </p>
      <p>
        <strong>Stay tuned for next year!</strong> Goblin Jamboree typically runs over two weekends
        in October with special programming throughout the play centre.
      </p>
    </>
  ),
  dateTime: (
    <>
      <p><strong>Weekend 1</strong></p>
      <p>Saturday, October 18: 10:30 AM – 4 PM</p>
      <p>Goblin Breakfast Bash, 8:30 – 10:30 AM</p>
      <p>Sunday, October 19: 9 AM – 3 PM</p>
      <p><strong>Weekend 2</strong></p>
      <p>Friday, October 24: 9 AM – 3 PM</p>
      <p>Saturday, October 25: 9 AM – 3 PM</p>
      <p>Sunday, October 26: 9 AM – 3 PM</p>
    </>
  ),
  pricing: (
    <>
      <p>All programming included in admission.</p>
      <ul className="wp-block-list">
        <li>Members – standard member rates apply</li>
        <li>Public: standard admission rates apply</li>
        <li>Under 1s: {formatZAR(admissionPrices.baby.amount)}/hr</li>
        <li>Children: {formatZAR(admissionPrices.child.amount)} first hour</li>
      </ul>
      <p>
        {siteConfig.name} is open rain or shine! All ticket sales are final. Special event terms
        apply during Goblin Jamboree.
      </p>
    </>
  ),
  activities: [
    {
      title: 'Monster Mansion',
      description:
        'Build-a-Boo! Your little creature creator will mold their own monster buddy with squishy dough and silly bits—then craft a cozy mansion just for them.',
    },
    {
      title: 'Deep Sea Slime',
      description:
        'Dive into the ooey-gooey deep! Kids will squish, swirl, and glow with slime inspired by mysterious ocean depths.',
    },
    {
      title: 'Ghost Writing',
      description:
        'Now you see it, now you don’t! Kids doodle secret messages and spooky scribbles that vanish right before their eyes.',
    },
    {
      title: 'Magic Brew',
      description:
        'Stir up some seasonal magic! Pint-sized potion-makers mix and mash ingredients into pretend potions.',
    },
    {
      title: 'The Beetlelady',
      description:
        'Meet scaly and many-legged bug buddies with our special guest naturalist!',
    },
  ],
  whyFamilies: [
    {
      title: 'Ready, Set, Goblin',
      description:
        'Costumes encouraged! Parents, don’t miss out on the fun—make costumes a family affair.',
    },
    ...festivalBenefits.slice(1),
  ],
  extraSections: (
    <>
      <h2 className="wp-block-heading">Goblin Breakfast Bash</h2>
      <p>Saturday, October 18, 8:30 – 10:30 am</p>
      <p>
        Join us for our Goblin Jamboree kickoff party and be first to experience Goblin Jamboree.
        Enjoy a catered breakfast and family-friendly treats.
      </p>
    </>
  ),
  ctaLabel: 'Get Tickets',
  ctaHref: routes.tickets,
};
