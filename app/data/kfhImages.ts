/** Kidz Fun House images — local HD copies from kidzfunhouseza.com */
const p = (file: string) => `/images/kfh/${file}`;

export const kfhImages = {
  /** Homepage slide 1 — wide indoor play area (2400px SCREEN_3X) */
  welcome: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  /** Homepage slide 2 — pirate ship play structure (2400px SCREEN_3X) */
  comePlay: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  /** Homepage slide 3 — decorated party room (2400px portrait) */
  party: p('d4c8f3add988f019d2644fbbe394722f.jpg'),
  /** Homepage slide 4 — giant jungle gym structure */
  playZones: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  /** Homepage slide 5 — KFH arcade / loyalty perks */
  loyalty: p('ce631791efc1e0a9952e53a47dfdb29d.jpg'),

  toddler: p('3899dc26a29d37eff501900a0b8105f5.jpg'),
  jungleGym: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  arcade: p('85ac9b565918e7ff48fe846b75a54d9f.jpg'),
  sandpit: p('747fd9790ba6200acd3b9d40bc08124a.jpg'),
  artCorner: p('4d3f8b5a0b3b8d45ec82a250a64c4094.jpg'),
  imagination: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  reading: p('d4c8f3add988f019d2644fbbe394722f.jpg'),
  school: p('3899dc26a29d37eff501900a0b8105f5.jpg'),
  about: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  contact: p('514891ba0a87729e9e5f9bea581d96a5.jpg'),
  membership: p('ce631791efc1e0a9952e53a47dfdb29d.jpg'),
  events: p('7f24976fa342def71b5ccd44602b7459.jpg'),
  give: p('d4c8f3add988f019d2644fbbe394722f.jpg'),
  programs: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  parties: p('d4c8f3add988f019d2644fbbe394722f.jpg'),
  venue1: p('d4c8f3add988f019d2644fbbe394722f.jpg'),
  venue2: p('7f24976fa342def71b5ccd44602b7459.jpg'),
  venue3: p('514891ba0a87729e9e5f9bea581d96a5.jpg'),
  venue4: p('d5233f9234807b6f311e7eb35b1f2826.jpg'),
  venue5: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  venue6: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
  general: p('8b0fefd2d41a0c963a1bd6c3bfb14c33.jpg'),
} as const;

export const kfhZoneImages = [
  kfhImages.imagination,
  kfhImages.artCorner,
  kfhImages.toddler,
  kfhImages.reading,
  kfhImages.sandpit,
  kfhImages.arcade,
  kfhImages.jungleGym,
  kfhImages.playZones,
] as const;

export const kfhPartyVenueImages = [
  kfhImages.venue1,
  kfhImages.venue2,
  kfhImages.venue3,
  kfhImages.venue4,
  kfhImages.venue5,
  kfhImages.venue6,
] as const;

export const kfhDefaultHero = kfhImages.welcome;

export const kfhPageHeroes = {
  home: { desktop: kfhImages.welcome, mobile: kfhImages.welcome },
  planVisit: { desktop: kfhImages.comePlay, mobile: kfhImages.comePlay },
  discovery: { desktop: kfhImages.playZones, mobile: kfhImages.jungleGym },
  parties: { desktop: kfhImages.party, mobile: kfhImages.parties },
  events: { desktop: kfhImages.events, mobile: kfhImages.party },
  membership: { desktop: kfhImages.membership, mobile: kfhImages.loyalty },
  give: { desktop: kfhImages.give, mobile: kfhImages.party },
  about: { desktop: kfhImages.comePlay, mobile: kfhImages.comePlay },
  contact: { desktop: kfhImages.contact, mobile: kfhImages.contact },
  school: { desktop: kfhImages.school, mobile: kfhImages.comePlay },
  programs: { desktop: kfhImages.programs, mobile: kfhImages.jungleGym },
} as const;

/** Homepage slider — same HD image desktop + mobile */
export const kfhHomeSlides = [
  kfhImages.welcome,
  kfhImages.comePlay,
  kfhImages.party,
  kfhImages.playZones,
  kfhImages.loyalty,
] as const;
