import { routes } from '../lib/routes';
import { kfhPartyVenueImages } from './kfhImages';

export const birthdayLocations = [
  {
    id: 'theater',
    label: 'The Theater',
    image: kfhPartyVenueImages[0],
    bookLabel: 'Book The Theater Today!',
    bookHref: `${routes.contact}?interest=birthday-theater`,
  },
  {
    id: 'playhouse',
    label: 'The Playhouse',
    image: kfhPartyVenueImages[1],
    bookLabel: 'Book The Playhouse Today!',
    bookHref: `${routes.contact}?interest=birthday-playhouse`,
  },
  {
    id: 'studio',
    label: 'The Studio',
    image: kfhPartyVenueImages[2],
    bookLabel: 'Book The Studio Today!',
    bookHref: `${routes.contact}?interest=birthday-studio`,
  },
  {
    id: 'bridge-room',
    label: 'The Bridge Room',
    image: kfhPartyVenueImages[3],
    bookLabel: 'Book The Bridge Room Today!',
    bookHref: `${routes.contact}?interest=birthday-bridge-room`,
  },
  {
    id: 'gallery',
    label: 'The Gallery',
    image: kfhPartyVenueImages[4],
    bookLabel: 'Book The Gallery Today!',
    bookHref: `${routes.contact}?interest=birthday-gallery`,
  },
  {
    id: 'mosaic',
    label: 'The Mosaic',
    image: kfhPartyVenueImages[5],
    bookLabel: 'Book The Mosaic Today!',
    bookHref: `${routes.contact}?interest=birthday-mosaic`,
  },
] as const;
