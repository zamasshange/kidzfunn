import { siteConfig } from '../lib/siteConfig';

export const planYourVisitIntro =
  `Take your little ones on a hands-on adventure at ${siteConfig.name}. Gauteng's biggest indoor playground and party venue — a wonderland for kids and an oasis for parents.`;

export const walkInPolicy =
  'We work on a walk-in basis and only need bookings for birthdays or large groups.';

export const ageRangeNote =
  'While our main focus is littles from 5 months up to 12 years old, older siblings won\'t miss out on the fun at our arcade. Arcade tokens are not included in the playtime rate.';

export const birthdayPromo = {
  heading: 'Visiting KFH on your birthday?',
  offer: 'Get your first hour playtime on us!',
  note: 'Please remember to bring proof of DOB along. T&Cs apply. Cannot be used in conjunction with other promotions.',
} as const;

export const planYourVisitFaq = [
  {
    question: 'Walk-in & bookings',
    answer:
      'We work on a walk-in basis. Bookings are only required for birthday parties or large groups.',
  },
  {
    question: 'Onsite café',
    answer:
      'Our onsite café is open during play centre hours. Parents can relax with a cappuccino and a good book while little ones play.',
  },
  {
    question: 'Wifi & charging',
    answer:
      'Wifi access and charging ports are available for working parents.',
  },
  {
    question: 'Child minders',
    answer:
      'Our dedicated child minders are always there to watch over the little ones. Child minding is also available as an optional service for working parents.',
  },
  {
    question: 'Supervision',
    answer:
      'Children must be supervised by a responsible adult at all times. Our child minders are available as an optional service but do not replace parental supervision.',
  },
] as const;

export const partyKiddiesMealOptions = [
  'Option 1: Fish Fingers & Chips with a Drink',
  'Option 2: Mini Burger & Chips with a Drink',
  'Option 3: Mini Hotdogs & Chips with a Drink',
  'Option 4: Chicken Nuggets & Chips with a Drink',
  'Option 5: Pizza — cheese, ham and pineapple (please specify exclusions) with a Drink',
] as const;

export const partyMealNote =
  'The meal option includes a themed/colour coded plate along with a personalised and themed bottle label for the drink.';

export const partyPacksDescription =
  'Our themed party packs include a Liquifruit Box, Lays/Simba chips, Mini Smarties, sherbets and suckers. The party box is decked out with a customized label as well as a personalized colouring in book with crayons.';

export const partyPackages = [
  {
    title: 'Party Package 1',
    price: 'R375 per child',
    includes: ['3 hours playtime', 'Party pack', 'Kiddies meal'],
  },
  {
    title: 'Party Package 2',
    price: 'R300 per child',
    includes: ['3 hours playtime', 'Kiddies meal'],
  },
  {
    title: 'Party Package 3',
    price: 'R290 per child',
    includes: ['3 hours playtime', 'Party pack'],
  },
  {
    title: 'Party Package 4',
    price: 'R200 per child',
    includes: ['3 hours playtime'],
  },
] as const;

export const partyVenues = [
  {
    size: 'Venue 1 or 2 — Large',
    price: 'R550 rental',
    note: 'Max 30 kids / 20 adults. Optional décor R550, balloon arch & backdrop R700, tea & coffee R45 per adult.',
  },
  {
    size: 'Venue 3 — Extra Large',
    price: 'R850 rental',
    note: 'Max 30 kids / 30 adults. Optional décor R650, balloon arch & backdrop R750, tea & coffee R45 per adult.',
  },
  {
    size: 'Venue 4 — Jumbo',
    price: 'R1 550 rental',
    note: 'Max 60 kids / 60 adults. Optional décor R850, double balloon arch & backdrop R1 000, tea & coffee R45 per adult.',
  },
] as const;

export const partyVenueNote =
  'A rental fee is charged in accordance with the chosen venue in addition to the kid\'s party packages. Each party is allocated a 3 hour time slot. At KFH, you can opt to decorate the venue yourself or have our team do the heavy lifting for you as an optional add-on.';

export const partyProcess = [
  'Select your party package',
  'Select your venue',
  'Choose your epic extras',
  'Contact us to book',
] as const;

export const partyBundles = {
  heading: 'Party Bundles for 10 Kids',
  description:
    'All-in-one party bundles for 10 children — large venue rental, vintage room décor, balloon arch & backdrop, and 3 hours playtime. Customizable options for larger parties also available.',
  decorNote:
    'Our décor consists of wall-to-wall ribbons, balloons, pictures and ceiling balloons all done in accordance with your chosen theme.',
  packages: [
    {
      title: 'Package 1',
      price: 'R4 720',
      includes: 'Venue rental, balloon arch & backdrop, vintage room décor, 3 hours playtime, kiddies meal, customized drink, customized party pack',
    },
    {
      title: 'Package 2',
      price: 'R4 080',
      includes: 'Venue rental, balloon arch & backdrop, vintage room décor, 3 hours playtime, kiddies meal, customized drink',
    },
    {
      title: 'Package 3',
      price: 'R3 995',
      includes: 'Venue rental, balloon arch & backdrop, vintage room décor, 3 hours playtime, customized party pack',
    },
    {
      title: 'Package 4',
      price: 'R3 230',
      includes: 'Venue rental, balloon arch & backdrop, vintage room décor, 3 hours playtime',
    },
  ],
  venueUpgrades: [
    'Large venue max capacity — 35 kids / 20 adults (included)',
    'Upgrade to XL venue — add R350 (max 35 kids / 30 adults)',
    'Upgrade to Jumbo venue — add R1 350 & score an extra hour (max 50 kids / 50 adults)',
  ],
  bookingSlots: [
    'Saturday: 09:00–12:00 or 14:00–17:00',
    'Sunday: 10:00–13:00 or 13:00–16:00',
  ],
  terms:
    'A non-refundable deposit of R750 is payable on acceptance of booking date. 50% of the party total is due 1 week prior to your party and the balance to be paid on the day of the event.',
} as const;

export const partyFoodPlatters = [
  {
    title: 'Platters',
    price: 'R630–R1 020',
    items: [
      'Fruit platter (assorted) — R1 020',
      'Morning blues (breakfast pastries) — R830',
      'Mini bites (finger snacks) — R800',
      'Sandwich platter (a selection) — R700',
      'DIY hot dog platter — R630',
    ],
  },
  {
    title: 'Grazing Table',
    price: 'Feeds 25–30 people',
    items: [
      'A seasonal and curated assortment of finger food, pastries, fruits, sandwiches and other snacks.',
    ],
  },
  {
    title: 'Grazing Cups',
    price: 'Per person',
    items: [
      'A curated selection of seasonal individual finger snacks, thoughtfully packaged per person.',
    ],
  },
] as const;

export const littleCreatorsOptions = [
  { activity: 'Wood Art', price: 'R60' },
  { activity: 'Rock Painting', price: 'R70' },
  { activity: 'Fabric Painting — Pencil Bag', price: 'R140' },
  { activity: 'Canvas Painting', price: 'R145' },
  { activity: 'Ceramic Painting', price: 'R175' },
  { activity: 'Fabric Painting — Sling Bag', price: 'R180' },
  { activity: 'Themed Slime Making', price: 'R180' },
  { activity: 'DIY Cupcakes', price: 'R45' },
] as const;

export const partyExtras = [
  {
    title: 'Vintage Party Decor',
    price: 'R550–R850',
    body: 'Our vintage décor option consists of wall-to-wall ribbons, balloons and pictures all done in accordance with your chosen theme as well as matching table cloths. Large venue R550, Extra Large R650, Jumbo R850.',
  },
  {
    title: 'Vintage Balloon Arch & Backdrop',
    price: 'R700–R1 000',
    body: 'Large venue R700, Extra Large R750, Jumbo (double arch) R1 000. Complements your themed décor.',
  },
  {
    title: 'Tea & Coffee',
    price: 'R45 per adult',
    body: 'Available as an optional add-on for adult guests.',
  },
  {
    title: 'Little Creators',
    price: 'R45–R180 per child',
    body: 'From painting your own sling bag to making your own slime — Wood Art R60, Rock Painting R70, Fabric Painting Pencil Bag R140, Canvas Painting R145, Ceramic Painting R175, Fabric Painting Sling Bag R180, Themed Slime Making R180, DIY Cupcakes R45.',
  },
  {
    title: 'Basic Boujie Decor',
    price: 'From R3 250',
    body: 'Half balloon arch ring, welcome board, themed backdrop, Tiffany chair table arrangement with table decor and wall-to-wall ribbons.',
  },
  {
    title: 'Fancy Boujie Decor',
    price: 'From R4 250',
    body: 'Three-panel backdrop, welcome board, three themed cutouts, Tiffany chairs, stunning 3D balloon arch, and wall-to-wall ribbons.',
  },
  {
    title: 'Table Set Up',
    price: 'R215 per child',
    body: 'Plates, cups, napkins, party hats, two centerpieces, and Tiffany chairs — tailored to your party theme or colour scheme.',
  },
  {
    title: 'Character Visit',
    price: 'From R1 275',
    body: 'A character swoops in to match your party vibe, adding an extra sprinkle of magic to your bash.',
  },
  {
    title: 'Face Painter',
    price: 'From R690 per hour',
    body: 'Face painting is booked per hour and hosted inside your party venue. Over 10 children requires a second hour.',
  },
  {
    title: 'Photographer',
    price: 'From R950 per hour',
    body: 'Our in-house photographer captures those unforgettable moments of your child\'s special day.',
  },
] as const;

export const partyInABox = {
  heading: 'Party in a Box',
  intro:
    'Thank you for choosing Party in a Box by KFH for your next party. Order for collection or add a KFH jumping castle for delivery.',
  boxes: [
    {
      title: 'Box 1',
      tiers: [
        { kids: '8–10 kids', price: 'R550' },
        { kids: '11–20 kids', price: 'R980' },
      ],
    },
    {
      title: 'Box 2',
      tiers: [
        { kids: '8–10 kids', price: 'R1 250' },
        { kids: '11–20 kids', price: 'R2 450' },
      ],
    },
    {
      title: 'Box 3',
      tiers: [
        { kids: '8–10 kids', price: 'R2 450' },
        { kids: '11–20 kids', price: 'R3 250' },
      ],
    },
  ],
  addOns: [
    'KFH Jumping Castle (POA) — 3m × 3m or 4m × 3m',
    'KFH Platter (R800 each) — Mini Bites, DIY Hotdogs, or Morning Blues',
  ],
  details:
    'Send your completed order form via WhatsApp or email. Reference your quote number or child\'s name on payment.',
} as const;

export const partyTermsAndConditions = [
  'Party bundles include vintage décor, large venue rental as well as a vintage balloon arch. You are welcome to upgrade your venue to the Extra Large at R350 or to the Jumbo venue at R1 350. Upgrading to the Jumbo venue entitles your party to an additional hour of playtime as well as flexibility in terms of the booking time slot.',
  'Kid\'s meal orders from our establishment must be placed on the Wednesday prior to the party, with the items listed on your booking form being available. Food will be served around an hour after the start of the party.',
  'You are granted one hour prior to your party\'s commencement to ensure all arrangements meet your expectations or to set up your personal/vendor decorations.',
  'Any external decoration company/yourself must set up balloon arches offsite. Any decorations brought on-site must be removed by 5:15 PM, failing which a penalty fee of R300 will be imposed. Any and all damages will be added to the party bill.',
  'Décor supplied by Kidz Fun House Play Centre may not be removed from the premises. Additional décor, face painters / balloon artists need to be communicated beforehand.',
  'All beverages must be purchased from Kidz Fun House Play Centre. NO alcohol allowed to be brought onto the premises (R5 000 payable). NO beverages allowed to be brought onto the premises (fine payable).',
  'If you opt to bring your own cake or platters, kindly remember to provide your own cutlery, plates, and containers for leftovers. If you choose to acquire a cake or platters from our establishment, we will furnish cutlery, plates, and ten takeaway containers.',
  'We do not provide heating facilities for externally brought food items. We are a NUT FREE facility.',
  'Cakeage fee of R45 is applicable to the cake as well as per dozen cupcakes. Platters from external suppliers will attract a corkage fee of R45 per platter. Party packs from external suppliers (R45 surcharge for the lot) must be handed out at the end of your party should they contain beverages.',
  'Our facility accommodates babies and children up to 12 years old. The host may cater for adult guests on their own account, or each guest will be given a tab number and expected to settle before departure.',
  'Please ensure that your venue has been vacated and is cleared of all personal belongings/gifts by the end of your time slot — a R300/15 min levy will be charged for delayed departure.',
  'No credit will be passed for "no shows". The number of children booked and confirmed for is the number of children to be billed for on the day, irrespective of attendance.',
  'A non-refundable deposit of R750 is payable on acceptance of booking date. 50% of the party total is due 1 week prior to your party and the balance to be paid on the day of the event. Payments are non-refundable.',
  'A laundry deposit of R150 and a room deposit of R250 will be levied on the day of the party and removed following inspection.',
  'All guests are expected to sign in at reception upon arrival. A 30-minute grace period is allowed in case of a no-show.',
  'If you have scheduled a character visit from KFH, their itinerary is: a 15-minute visit to the party room, with the remainder spent in the play areas (30 to 40 minutes per session on the floor).',
  'Our decorum policy mandates a respectful demeanour with zero tolerance towards rude or undesirable behaviour. By confirming your party booking, you accept the Terms and Conditions of KFH. Right of admission reserved.',
] as const;

export const schoolPackages = [
  {
    title: 'Package 1',
    price: 'R200 per child',
    includes: ['3 hours playtime', 'Kiddies meal'],
    mealOptions: [
      'Option 1: Mini Burger & Chips with a drink',
      'Option 2: Mini Hotdogs & Chips with a drink',
    ],
  },
  {
    title: 'Package 2',
    price: 'R150 per child',
    includes: ['2 hours playtime', 'Kiddies meal'],
    mealOptions: [
      'Option 1: Mini Burger & Chips with a drink',
      'Option 2: Mini Hotdogs & Chips with a drink',
    ],
  },
  {
    title: 'Package 3',
    price: 'R120 per child',
    includes: ['2 hours playtime', 'Drink'],
  },
  {
    title: 'Package 4',
    price: 'R100 per child',
    includes: ['2 hours playtime'],
  },
  {
    title: 'Package 5',
    price: 'R50 per child',
    includes: ['1 hour playtime'],
  },
] as const;

export const schoolTermsAndConditions = [
  'A 50% deposit is payable on confirmation of your school\'s booking. Balance must be settled 2 business days prior to date of visit.',
  'The number of students booked and confirmed for is the number of students to be billed for on the day, irrespective of attendance. Any additional students will be charged for accordingly.',
  'School packages are only applicable for groups of 10 or more.',
  'School packages are only applicable to registered schools and nursery schools.',
  'An additional 15 minutes will be allocated to playtime (at no charge) to accommodate for lunch.',
  'All beverages must be purchased from Kidz Fun House Play Centre. NO alcohol allowed to be brought onto the premises (fine payable). NO beverages allowed to be brought onto the premises. Only water bottles are allowed.',
  'Your school will be allocated 10 minutes arrival time as well as 10 minutes departure time.',
  'Educators and school assistants are fully responsible for monitoring the students at our facility. Our childminders will provide assistance where necessary.',
  'Educators and school assistants are responsible for managing any spending money that students bring with them.',
  'Our facility accommodates babies and children up to 12 years old.',
  'Any damages/breakages will be charged to your bill accordingly.',
  'By confirming your booking, you accept the Terms and Conditions of KFH. Right of admission reserved.',
] as const;

export const partyClosingCopy =
  'Our friendly and experienced staff are there to ensure that your party runs smoothly, taking care of everything from decorating to providing delicious refreshments so you can sit back and relax. So why settle for a run-of-the-mill party venue when you can give your child the ultimate playground experience? Come and discover the magic of KFH, where lasting memories are made.';

export const loyaltyProgram = {
  heading: 'Join Our Loyalty Program',
  description:
    'Join our new loyalty program and get more benefits! Earn rewards as you play, celebrate, and return to KFH.',
  benefits: [
    'Extra member benefits on every visit',
    'Discounts on party packages and bundles',
    'Sibling discounts available',
    'Free play on your birthday — bring proof of date of birth',
    'First access to promotions and special events',
    'Over 8 different play zones to explore',
  ],
} as const;

export const kfhEvents = [
  {
    image:
      '/images/kfh/73a0a47fd1adbc5cf8fd1e4b4a3ee9db.jpg',
    title: 'Free Playtime Fridays',
    paragraphs: [
      'Score free fun for up to 3 kids every Friday from 9am to 12pm. T&Cs apply — not applicable during public or school holidays.',
    ],
    buttonLabel: 'Plan Your Visit',
    buttonHref: '/plan-your-visit/',
  },
  {
    image:
      '/images/kfh/85ac9b565918e7ff48fe846b75a54d9f.jpg',
    title: 'KFH Toddler Mornings',
    paragraphs: [
      'Join us for Toddler Mornings at KFH every Thursday, 9am–12pm, ages 1–5. Get your second hour for free! With over 8 play zones, there\'s an adventure for every child. Moms can meet new friends, and kids can form their own friendships.',
    ],
    buttonLabel: 'Learn More',
    buttonHref: '/about/strategic-plan-financials/',
  },
  {
    image:
      '/images/kfh/ce631791efc1e0a9952e53a47dfdb29d.jpg',
    title: 'Two for One Thursdays',
    paragraphs: [
      'Bring two kids and only pay for one — or bring up to 4 kids and get your first hour for R75 or unlimited playtime for R99. T&Cs apply.',
    ],
    buttonLabel: 'Plan Your Visit',
    buttonHref: '/plan-your-visit/',
  },
  {
    image:
      '/images/kfh/514891ba0a87729e9e5f9bea581d96a5.jpg',
    title: 'Kidz Party Bundles',
    paragraphs: [
      'Party bundles for 10 kids from R3 230 — includes large venue rental, vintage room décor, balloon arch & backdrop, and 3 hours playtime. Packages up to R4 720 with kiddies meals and party packs included.',
    ],
    buttonLabel: 'View Party Bundles',
    buttonHref: '/summer-birthdays/',
  },
  {
    image:
      '/images/kfh/d5233f9234807b6f311e7eb35b1f2826.jpg',
    title: 'Kidz Eat Free Tuesdays',
    paragraphs: [
      'Kids eat free on Tuesdays! Kids meal options only. Drinks not included. Not applicable during public school holidays or public holidays. Cannot be used in conjunction with other promotions.',
    ],
    buttonLabel: 'Plan Your Visit',
    buttonHref: '/plan-your-visit/',
  },
  {
    image:
      '/images/kfh/93a86a8df2dcceefa00b03018c5b8829.jpg',
    title: 'Pensioners Wednesdays',
    paragraphs: [
      'Grannies and grandpas don\'t miss out on the fun either! Bring in your grandkids on Wednesdays and get 50% off their playtime. Drinks not included. Cannot be used in conjunction with other promotions.',
    ],
    buttonLabel: 'Plan Your Visit',
    buttonHref: '/plan-your-visit/',
  },
  {
    image:
      '/images/kfh/b13e9497dde730e8023f0c93334b3190.jpg',
    title: 'Free Play on Your Birthday',
    paragraphs: [
      'A small token of appreciation from the KFH team to you on your special day! Get 1 hour playtime on the house. Please remember to bring proof of DOB along. T&Cs apply.',
    ],
    buttonLabel: 'Plan Your Visit',
    buttonHref: '/plan-your-visit/',
  },
  {
    image:
      '/images/kfh/add4156a36d731f1f7c39a317067692b.jpg',
    title: 'KFH Ballet Classes',
    paragraphs: [
      'With Mrs Smith — Wednesdays at 15:00. R300 per month. Ballet instils discipline and focus, which can benefit children across various aspects of their lives.',
    ],
    buttonLabel: 'Programs & Classes',
    buttonHref: '/about/strategic-plan-financials/',
  },
  {
    image: kfhImages.welcome,
    title: 'Working from Home? We\'ve Got You',
    paragraphs: [
      'Calling all working from home moms & dads! Our child minders are ready to entertain your little whirlwinds while you work in peace. R99 per child for unlimited playtime. Over 8 play zones, child minders, and wifi access.',
    ],
    buttonLabel: 'Our Services',
    buttonHref: '/about/volunteer/',
  },
  {
    image:
      '/images/kfh/28efb6be041093bac30083b81ad935dd.jpg',
    title: 'Little Creators',
    paragraphs: [
      'Our latest activity for kids — perfect for parties, groups, or a delightful morning activity for moms and kiddos alike. Prices from R60 for Wood Art to R180 to make your own Slime.',
    ],
    buttonLabel: 'Our Services',
    buttonHref: '/about/volunteer/',
  },
] as const;
