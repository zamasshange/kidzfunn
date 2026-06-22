import type { ReactNode } from 'react';
import Link from 'next/link';
import { routes } from '../lib/routes';
import { formatZAR, siteConfig } from '../lib/siteConfig';

export type CampFaqItem = {
  question: string;
  answer: ReactNode;
};

export const campFaqItems: CampFaqItem[] = [
  {
    question: 'What are KFH Holiday Camps?',
    answer: (
      <>
        <p>
          KFH Holiday Camps are available for children ages 3 through 12 and offer the best of our
          indoor play centre! Our team provides a well-rounded mix of play, creativity, and group
          activities in each camp experience.
        </p>
        <ul className="wp-block-list">
          <li>Holiday camps run during school breaks and selected public holidays.</li>
          <li>Age groups and themes vary by session — see each camp listing for details.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do I register for holiday camps?',
    answer: (
      <>
        <p>
          Once registration is open, you can register and purchase camps online through our website
          or contact us directly.
        </p>
        <ul className="wp-block-list">
          <li>From the camps page, choose your preferred session and follow the booking link.</li>
          <li>Contact {siteConfig.contact.campsEmail} if you need help completing your booking.</li>
        </ul>
        <p>
          <Link href={routes.campRegistration}>Start camp registration →</Link>
        </p>
      </>
    ),
  },
  {
    question: 'What are the requirements for campers to attend?',
    answer: (
      <ul className="wp-block-list">
        <li>Be fully toilet trained and able to use the restroom independently.</li>
        <li>Have experience separating from caregivers in a drop-off setting, such as school or daycare.</li>
        <li>Meet the age requirement of the desired camp prior to the camp start date.</li>
      </ul>
    ),
  },
  {
    question: 'What does a typical camp day look like?',
    answer: (
      <ul className="wp-block-list">
        <li>9:00 Drop off / Check-In</li>
        <li>9:15–9:30 Welcome circle</li>
        <li>9:30–10:15 Themed activities and play zone time</li>
        <li>10:15–10:45 Snack break</li>
        <li>10:45–11:30 Themed activities and play zone time</li>
        <li>11:30–12:30 Lunch</li>
        <li>12:40–1:40 Creative activities and supervised free play</li>
        <li>1:40–2:00 Snack break</li>
        <li>2:00–2:45 Group games and play zone time</li>
        <li>2:45–3:00 Pick up</li>
      </ul>
    ),
  },
  {
    question: 'Do you provide snacks or lunch?',
    answer: (
      <p>
        Meals and snacks from our onsite café can be added at an additional cost for weeklong camps.
        You can add meals when you enrol or by emailing us at {siteConfig.contact.campsEmail}. If you
        prefer to bring your own food, please send your camper with lunch and two snacks each day.
      </p>
    ),
  },
  {
    question: 'How will I learn about what my child is doing?',
    answer: (
      <p>
        At the end of each day, a summary of the day&apos;s activities will be sent out via email
        or WhatsApp. It will include highlights from the day and a hint about what to expect
        tomorrow, if applicable.
      </p>
    ),
  },
  {
    question: 'Do you offer scholarships for camps?',
    answer: (
      <p>
        At {siteConfig.name}, we strive to make camp available to as many families as possible. A
        limited number of assisted spots may be available each session. Email{' '}
        {siteConfig.contact.campsEmail} to enquire about availability.
      </p>
    ),
  },
  {
    question: 'What is your refund policy?',
    answer: (
      <ul className="wp-block-list">
        <li>
          Cancellations more than one month prior to a session&apos;s start date are refunded, minus
          a cancellation fee of {formatZAR(1800)} per session cancelled.
        </li>
        <li>Cancellations within one month of a session&apos;s start date will not receive a refund.</li>
        <li>Transfers between sessions incur a {formatZAR(450)} administrative fee per change.</li>
        <li>
          {siteConfig.name} reserves the right to cancel camps due to insufficient enrolment. If a
          camp is cancelled, transfers will be offered or refunds issued with no additional fees.
        </li>
      </ul>
    ),
  },
  {
    question: "What if I don't see a camp scheduled for my child's school break?",
    answer: (
      <p>
        See options to <Link href={routes.buildACamp}>build a camp session here</Link>, or contact
        us at {siteConfig.contact.campsEmail}.
      </p>
    ),
  },
  {
    question: 'What is your bathroom policy for campers?',
    answer: (
      <ul className="wp-block-list">
        <li>
          Campers must be toilet-trained. At {siteConfig.name}, toilet-trained means campers are
          non-diapered and capable of changing their own clothes without assistance.
        </li>
        <li>Campers must do their own wiping.</li>
        <li>
          Our camp staff will support in the case of bathroom accidents and stand outside to coach
          young campers through the process but will not be permitted inside the restroom stall with
          campers during bathroom breaks.
        </li>
      </ul>
    ),
  },
];
