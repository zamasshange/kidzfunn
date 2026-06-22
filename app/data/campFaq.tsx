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
    question: 'What are Discovery Camps?',
    answer: (
      <>
        <p>
          Discovery Camps are available for children ages 3 through 8 and offer the best of the
          museum! Our educators provide a well-rounded STEAM experience and campers will get to
          participate in a variety of art, science, nature and engineering projects in each camp
          experience.
        </p>
        <ul className="wp-block-list">
          <li>Discovery Camp 3-year-old offerings are available during Spring Break and Summer.</li>
          <li>School Year Break Camps are only offered for children ages 4 through 7.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How do I register for Discovery Camps?',
    answer: (
      <>
        <p>Once registration is open, you can register and purchase camps online through our website.</p>
        <ul className="wp-block-list">
          <li>
            From the camps webpage, click on the &quot;Enroll your Camper&quot; button.
          </li>
          <li>If you haven&apos;t already, you will need to create a Campsite account to enroll in camps.</li>
          <li>Once you create an account, you will be able to select camps and checkout online.</li>
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
        <li>Be fully toilet trained and able to use the restroom and change their clothes independently.</li>
        <li>Have experience separating from caregivers in a drop-off setting, such as school or daycare.</li>
        <li>Have reached the age requirement of the desired camp prior to the camp start date.</li>
      </ul>
    ),
  },
  {
    question: 'What does a typical 4–8-year-old camp day look like?',
    answer: (
      <ul className="wp-block-list">
        <li>9:00 Drop off/Check-In</li>
        <li>9:15-9:30 Opening Circle Time</li>
        <li>9:30-10:15 Themed activities/museum exploration/hike</li>
        <li>10:15-10:45 Snack</li>
        <li>10:45-11:25 Themed activities/museum exploration/hike</li>
        <li>11:30-12:30 Lunch</li>
        <li>12:40-1:40 Themed activities/museum exploration/hike</li>
        <li>1:40-2:00 Snack</li>
        <li>2:00-2:35 Themed activities/museum exploration/hike</li>
        <li>2:35-2:45 Cleanup and Pack Up</li>
        <li>2:45-3:00 Pick Up</li>
      </ul>
    ),
  },
  {
    question: 'What does a typical 3-year-old camp day look like?',
    answer: (
      <ul className="wp-block-list">
        <li>9:00 Drop off/Check-In</li>
        <li>9:15-11:00 Storytime/rotating activity stations/snack</li>
        <li>11:00-12:15 Outdoor activities/hike</li>
        <li>12:15-12:50 Lunch</li>
        <li>1:00-1:15 Pick Up</li>
        <li>If campers are enrolled in aftercare:</li>
        <li>1:00-2:20 Naptime (Campers are not required to nap, but are encouraged to rest)</li>
        <li>2:30-3:45 Rotating activity stations/museum exploration/snack</li>
        <li>3:45-4:00 Pick Up</li>
      </ul>
    ),
  },
  {
    question: 'Do you provide snacks or lunch?',
    answer: (
      <p>
        Meals and snacks from the museum&apos;s on-site cafe, Bean Sprouts, are provided at an
        additional cost for our weeklong camps. You can add meals for up to one week before your
        camp, either when you enroll or by emailing us at {siteConfig.contact.campsEmail}. If you choose not to add
        meals from Bean Sprouts, please send your camper with lunch and two snacks each day.
      </p>
    ),
  },
  {
    question: 'How will I learn about what my child is doing?',
    answer: (
      <p>
        At the end of each day, a summary of the day&apos;s activities will be sent out via email.
        It will include a few questions to ask your camper and a hint about what to expect for
        tomorrow, if applicable.
      </p>
    ),
  },
  {
    question: 'Do you offer scholarships for camps?',
    answer: (
      <p>
        At {siteConfig.name}, we strive to make camp available to all. We offer a
        limited amount of scholarships for each session of camp. Scholarship spots for Summer 2026
        are full, but you can email {siteConfig.contact.campsEmail} to be added to the waitlist.
      </p>
    ),
  },
  {
    question: 'What is your refund policy?',
    answer: (
      <ul className="wp-block-list">
        <li>
          Cancellations for Discovery Camps more than one month prior to a session&apos;s start date
          are refunded, minus a cancellation fee of {formatZAR(1800)} per session cancelled.
        </li>
        <li>Cancellations within one month of a session&apos;s start date will not receive a refund of any amount.</li>
        <li>Transfers between sessions or themes incur a {formatZAR(450)} administrative fee per change.</li>
        <li>
          The museum reserves the right to cancel camps due to insufficient enrollment. If a camp is
          cancelled, transfers will be offered, or refunds will be issued with no additional fees.
        </li>
      </ul>
    ),
  },
  {
    question: "What if I don't see a camp scheduled for my child's school break?",
    answer: (
      <p>
        See options to <Link href={routes.buildACamp}>Build a Camp session here</Link>.
      </p>
    ),
  },
  {
    question: 'What is your bathroom policy for campers?',
    answer: (
      <ul className="wp-block-list">
        <li>
          Our 3-year-old camp program is designed for campers who are toilet-trained. At the Bay
          Area Discovery Museum, toilet-trained means campers are non-diapered and capable of
          changing their own clothes without assistance.
        </li>
        <li>Campers must do their own wiping.</li>
        <li>
          Our Camp Staff will support in the case of bathroom accidents and stand outside to coach
          young campers through the process but will not be permitted to be inside the restroom
          stall with campers during bathroom breaks.
        </li>
      </ul>
    ),
  },
];
