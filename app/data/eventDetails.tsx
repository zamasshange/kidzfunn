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
    title: 'Convenient, Complimentary Parking',
    description: 'Free parking offers easy, stress-free access to all the excitement.',
  },
  {
    title: 'Picture-Perfect Moments',
    description:
      `Capture magical memories with ${siteConfig.locale.landmark} as your backdrop!`,
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
  desktopImage:
    '/images/kfh/73a0a47fd1adbc5cf8fd1e4b4a3ee9db.jpg',
  mobileImage:
    '/images/kfh/85ac9b565918e7ff48fe846b75a54d9f.jpg',
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
    'No Member Hour during Pride.',
    'Doors open at 9 AM for all.',
    'Rain or Shine Festival. This event has a rain contingency plan.',
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
        'Layer, blend, and mix colors with tissue paper. Make and rock your own rainbow scarf.',
    },
    {
      title: 'Drag Storytime',
      description:
        '10:00–11:00am and 11:30am–12:30pm. Enjoy classic stories with the drag queen Bebe Sweetbriar.',
    },
    {
      title: 'Foam Party',
      description: 'Jump into a sea of bubbles and joy! 1:30–2pm & 2:30–3pm.',
    },
  ],
  whyFamilies: [...festivalBenefits],
  disclaimer:
    'This special event is not eligible for ACM or ASTC discounts, museum staff admission, membership guest passes, library membership cards, or Discover & Go.',
  ctaLabel: 'Plan Your Visit',
  ctaHref: routes.tickets,
};

export const goblinJamboreeEvent: EventDetailData = {
  slug: 'goblin-jamboree',
  title: 'Goblin Jamboree',
  subtitle:
    "Costumes on, bugs out! A just-spooky-enough Halloween fundraiser that takes over the entire museum.",
  desktopImage:
    '/images/kfh/ce631791efc1e0a9952e53a47dfdb29d.jpg',
  mobileImage:
    '/images/kfh/514891ba0a87729e9e5f9bea581d96a5.jpg',
  intro: (
    <>
      <p>
        It&apos;s more than costumes—it&apos;s a Halloween fundraiser made just for kids. Costumes
        on, bugs out! A just-spooky-enough Halloween fundraiser that takes over the entire museum
        bringing joy to your family—and kids across the Bay.
      </p>
      <p>
        <strong>Stay tuned for next year!</strong> Goblin Jamboree typically runs over two weekends
        in October with special programming throughout the museum.
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
      <p>All programming included in admission. Free Parking.</p>
      <ul className="wp-block-list">
        <li>Members – {formatZAR(admissionPrices.adult.amount)}</li>
        <li>Family Access Members: {formatZAR(90)}</li>
        <li>Public: {formatZAR(540)}</li>
        <li>Museums For All*: {formatZAR(90)} (*must be purchased at the event, limit 6)</li>
      </ul>
      <p>
        Tickets required for members… It is a FUNdraiser! The Museum is open rain or shine! All
        ticket sales are final. No Member Hour during Goblin Jamboree.
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
        'Stir up some seasonal magic! In the Mud Kitchen, pint-sized potion-makers mix and mash nature’s ingredients into pretend potions.',
    },
    {
      title: 'The Beetlelady',
      description:
        'Our friend the Beetlelady is coming to town with her scaly and many-legged bug buddies!',
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
        Enjoy catered breakfast, hand-crafted espresso drinks and a mimosa bar.
      </p>
      <h2 className="wp-block-heading">Thank You To Our Corporate Sponsors!</h2>
      <p>
        Bloomberg Philanthropies · Clover Sonoma · Marin Community Foundation · Nugget Markets ·
        Harbor Point Charitable Foundation
      </p>
    </>
  ),
  ctaLabel: 'Get Tickets',
  ctaHref: routes.tickets,
};
