import type { ReactNode } from 'react';
import { routes } from '../lib/routes';
import { formatZAR, siteConfig } from '../lib/siteConfig';

const SERVICE_MAP =
  '/images/kfh/85ac9b565918e7ff48fe846b75a54d9f.jpg';
const TRY_IT_TRUCK_REQUIREMENTS =
  '/images/kfh/ce631791efc1e0a9952e53a47dfdb29d.jpg';
const TRY_IT_TRUCK_CASE_STUDY =
  '/images/kfh/514891ba0a87729e9e5f9bea581d96a5.jpg';
const SERVICE_AREA_MAP =
  'https://badm.sharepoint.com/:b:/s/Mrkting/EZTzprROpRhCoRdX8O_GVBABHXRpCfNfaTTyu0uEqdSndQ?e=dn0qoD';
const THINK_MAKE_TRY = routes.thinkMakeTryToolkit;
const BOOK_TRUCK = `${routes.contact}?interest=try-it-truck`;
const BOOK_WORKSHOP = `${routes.contact}?interest=steam-workshop`;

export const workshopsRegistrationNote =
  'Registration for 2025-26 School Year Opens August 12, at 8AM';

export type WorkshopSection = {
  id: string;
  title: ReactNode;
  intro: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  accordions: { summary: string; content: ReactNode }[];
};

export const tryItTruckSection: WorkshopSection = {
  id: 'TT',
  title: 'Try It Truck',
  intro: (
    <p>
      The Try It Truck is our engineering-lab-on-wheels, bringing hands-on STEAM programming to
      your school, camp or library! Designed for TK-5th graders, our Try It Truck features a variety
      of design challenge stations that explore NGSS cross-cutting concepts, such as cause &amp;
      effect, structure and function, and energy. Using our{' '}
      <a href={THINK_MAKE_TRY}>Think, Make, Try®</a> engineering design process, students will
      build their problem-solving skills by asking questions, designing prototypes and testing
      their ideas — all while having a blast!
    </p>
  ),
  ctaLabel: 'Book the Truck!',
  ctaHref: BOOK_TRUCK,
  accordions: [
    {
      summary: 'Program Details',
      content: (
        <>
          <p>
            <strong>Availability</strong>: Tuesdays and Fridays
          </p>
          <p>
            <strong>Timing:</strong> Up to (3) one-hour sessions per Try It Truck visit.
          </p>
          <p>
            <strong>Grade Levels:</strong> We offer age-appropriate stations based on the following
            groupings: TK, K-2nd and 3rd-5th.
          </p>
          <p>
            <strong>Group Size:</strong> Each session can accommodate about 50 students per session
            (1-2 classrooms), and about 150 students per visit (over 3 sessions).
          </p>
          <p>
            <strong>Price:</strong> {formatZAR(31500)} per Try It Truck visit (+{formatZAR(1800)} Travel Fee if located in red
            area of our{' '}
            <a href={SERVICE_MAP} target="_blank" rel="noreferrer noopener">
              Service Map
            </a>
            ).
          </p>
        </>
      ),
    },
    {
      summary: 'Service Area',
      content: (
        <>
          <p>
            Check the{' '}
            <a href={SERVICE_AREA_MAP} target="_blank" rel="noreferrer noopener">
              Service Area Map
            </a>{' '}
            to see if we can bring the Try It Truck to you.
          </p>
          <p>We travel to yellow and red zone—sites in the red zone include a {formatZAR(1800)} travel fee.</p>
        </>
      ),
    },
    {
      summary: 'Try It Truck Requirements',
      content: (
        <p>
          The Try It Truck is a unique experience and requires some special considerations. Prior to
          booking, please review our{' '}
          <a href={TRY_IT_TRUCK_REQUIREMENTS} target="_blank" rel="noreferrer noopener">
            Try It Truck Requirements
          </a>{' '}
          to see if the Truck is the best program fit for your site.
        </p>
      ),
    },
    {
      summary: 'Scholarships',
      content: (
        <>
          <p>
            The scholarship rate is {formatZAR(18900)}/visit. Scholarships are reserved for Title-1 and other
            schools and organizations that serve communities with large populations of low-income
            families (40% or higher).
          </p>
          <p>
            You can request the scholarship rate directly in the booking form. For all questions
            regarding financial aid, please contact us at{' '}
            <a href={`mailto:${siteConfig.contact.schoolVisitsEmail}`}>{siteConfig.contact.schoolVisitsEmail}</a>.
          </p>
        </>
      ),
    },
    {
      summary: 'Community Events',
      content: (
        <>
          <p>
            We are able to offer a modified 2-hr drop-in Try It Truck program for community events on
            a limited basis.
          </p>
          <p>
            Please reach out to{' '}
            <a href={`mailto:${siteConfig.contact.schoolVisitsEmail}`}>{siteConfig.contact.schoolVisitsEmail}</a> for additional
            information and to check availability.
          </p>
        </>
      ),
    },
    {
      summary: 'Designing the Try It Truck',
      content: (
        <p>
          Read our case study on how we built and tested the{' '}
          <a href={TRY_IT_TRUCK_CASE_STUDY}>Try It Truck.</a>
        </p>
      ),
    },
  ],
};

export const prekTkSection: WorkshopSection = {
  id: 'PREK',
  title: (
    <>
      PreK-TK <strong>STEAM Workshops at Your Site</strong>
    </>
  ),
  intro: (
    <p>
      Bring early STEAM learning to life for your preschool and TK students! DRDP- and PLF-aligned,
      PreK-TK STEAM Workshops help little learners build foundational STEAM skills the natural way —
      through play!
    </p>
  ),
  ctaLabel: 'Book Your Workshop',
  ctaHref: BOOK_WORKSHOP,
  accordions: [
    {
      summary: 'Program Details',
      content: (
        <>
          <p>
            <strong>Availability:</strong> Tuesdays and Thursdays
          </p>
          <p>
            <strong>Timing</strong>: Each workshop is 40 minutes long and can be scheduled between
            9 AM and 3 PM.
          </p>
          <p>
            <strong>Grade levels:</strong> Preschool-TK
          </p>
          <p>
            <strong>Group size: </strong>Up to 30 students per workshop. Each visit can accommodate
            up to two workshops.
          </p>
          <p>
            <strong>Price:</strong> {formatZAR(10530)} per workshop (+{formatZAR(900)} Travel Fee if located in red area of our{' '}
            <a href={SERVICE_MAP} target="_blank" rel="noreferrer noopener">
              Service Map
            </a>
            ).
          </p>
        </>
      ),
    },
    {
      summary: 'Service Areas',
      content: (
        <>
          <p>
            Check our{' '}
            <a href={SERVICE_MAP} target="_blank" rel="noreferrer noopener">
              Service Area Map
            </a>{' '}
            to see if we can bring a STEAM Workshop to you.
          </p>
          <p>We travel to yellow and red zones—sites in the red zone include a {formatZAR(900)} travel fee.</p>
        </>
      ),
    },
    {
      summary: 'Scholarships',
      content: (
        <p>
          <strong>Scholarships: </strong>The scholarship rate is {formatZAR(6300)}/workshop. Scholarships are
          reserved for Title-1 and other schools and organizations that serve communities with large
          populations of low-income families (40% or higher). For all questions regarding financial
          aid, please contact us at{' '}
          <a href={`mailto:${siteConfig.contact.schoolVisitsEmail}`}>{siteConfig.contact.schoolVisitsEmail}</a>.
        </p>
      ),
    },
    {
      summary: 'Workshop Themes',
      content: (
        <>
          <p>
            <strong>Nature Lab: </strong>Students explore nature-inspired activity stations,
            prompted by our inquisitive puppet friend, Naturalist Mo. Students will build science
            processing skills by asking questions, making observations, and experimenting with
            tools.
          </p>
          <p>
            <strong>TK Fairy Tale Engineering: </strong>Student engineers practice {siteConfig.locale.region}
            Discovery Museum&apos;s <a href={THINK_MAKE_TRY}>Think, Make, Try®</a> engineering design
            process as they work collaboratively to solve problems for their fairytale friends.
          </p>
        </>
      ),
    },
  ],
};

export const k3rdSection: WorkshopSection = {
  id: 'k3rd',
  title: (
    <>
      K-3rd <strong>STEAM Workshops at Your Site</strong>
    </>
  ),
  intro: (
    <p>
      Bring STEAM learning to life for your elementary students! Our hands-on, NGSS-aligned K-3rd
      STEAM Workshops encourage exploration, creative problem-solving, and collaboration.
    </p>
  ),
  ctaLabel: 'Book Your Workshop',
  ctaHref: BOOK_WORKSHOP,
  accordions: [
    {
      summary: 'Program Details',
      content: (
        <>
          <p>
            <strong>Availability:</strong> Tuesdays and Thursdays
          </p>
          <p>
            <strong>Timing</strong>: Each workshop is 60 minutes long and can be scheduled between
            9 AM and 3 PM.
          </p>
          <p>
            <strong>Grade levels:</strong> K-3rd
          </p>
          <p>
            <strong>Group size: </strong>Up to 35 students per session. Each visit can accommodate
            up to two workshops.
          </p>
          <p>
            <strong>Price:</strong> {formatZAR(10530)} per session (+{formatZAR(900)} Travel Fee if located in red area of our{' '}
            <a href={SERVICE_MAP} target="_blank" rel="noreferrer noopener">
              Service Map
            </a>
            )
          </p>
        </>
      ),
    },
    {
      summary: 'Service Areas',
      content: (
        <>
          <p>
            Check our{' '}
            <a href={SERVICE_MAP} target="_blank" rel="noreferrer noopener">
              Service Area Map
            </a>{' '}
            to see if we can bring a STEAM Workshop to you.
          </p>
          <p>We travel to yellow and red zones—sites in the red zone include a {formatZAR(900)} travel fee.</p>
        </>
      ),
    },
    {
      summary: 'Scholarships',
      content: (
        <p>
          The scholarship rate is {formatZAR(6300)}/workshop. Scholarships are reserved for Title-1 and other
          schools and organizations that serve communities with large populations of low-income
          families (40% or higher). For all questions regarding financial aid, please contact us
          at&nbsp;
          <a href={`mailto:${siteConfig.contact.schoolVisitsEmail}`}>{siteConfig.contact.schoolVisitsEmail}</a>.
        </p>
      ),
    },
    {
      summary: 'Workshop Themes',
      content: (
        <>
          <p>
            <strong>Fairy Tale Engineering:</strong> Student engineers practice {siteConfig.name}
            Museum&apos;s <a href={THINK_MAKE_TRY}>Think, Make, Try®</a> engineering design process
            as they work collaboratively to solve problems for their fairytale friends.
          </p>
          <p>
            <strong>Bridge Builders:</strong> Students take on the role of architects, designers and
            artists as they explore the impact of bridges in our lives. After learning the story of
            Table Mountain, they will use {siteConfig.name}&apos;s{' '}
            <a href={THINK_MAKE_TRY}>Think, Make, Try®</a> engineering design process to build
            their own bridges
          </p>
        </>
      ),
    },
  ],
};
