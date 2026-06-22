'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { routes } from '../lib/routes';
import { themeImages } from '../lib/assets';

export default function AnnouncementBar() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const masthead = document.getElementById('masthead');
    const mobileHeader = document.querySelector('.mobile-header');
    const fullpage = document.getElementById('fullpage');
    const originalParent = wrap.parentNode;
    const originalNext = wrap.nextSibling;

    const placeBar = () => {
      if (!originalParent || !fullpage) return;

      if (window.innerWidth <= 768) {
        if (!fullpage.contains(wrap)) {
          fullpage.appendChild(wrap);
        }
        return;
      }

      if (!originalParent.contains(wrap)) {
        originalParent.insertBefore(wrap, originalNext);
      }

      if (masthead && wrap.previousElementSibling !== masthead) {
        masthead.insertAdjacentElement('afterend', wrap);
      }
    };

    // Initial anchor before first responsive placement
    if (window.innerWidth > 1023 && masthead) {
      masthead.insertAdjacentElement('afterend', wrap);
    } else if (window.innerWidth <= 1023 && mobileHeader) {
      mobileHeader.insertAdjacentElement('afterend', wrap);
    }

    placeBar();
    window.addEventListener('resize', placeBar);
    return () => window.removeEventListener('resize', placeBar);
  }, []);

  return (
    <div className="featured-classes-wrap" ref={wrapRef}>
      <div className="featured-classes-bar">
        <div className="featured-classes-svg">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="55" height="55">
            <path
              d="M0 0 C18.15 0 36.3 0 55 0 C55 18.15 55 36.3 55 55 C40.9792335 53.59792335 30.22001099 49.44793724 20.92456055 38.58642578 C16.92296196 33.20865901 13.89976548 27.21318751 10.75 21.3125 C9.68862858 19.34804456 8.62441386 17.38514974 7.55987549 15.42240906 C6.60146671 13.65164532 5.64965259 11.8773169 4.69824219 10.1027832 C3.60861996 8.11198261 2.47186621 6.14586417 1.27832031 4.21557617 C0 2 0 2 0 0 Z"
              fill="#FFFFFF"
              transform="translate(0,0)"
            />
          </svg>
        </div>
        <div className="featured-classes-content">
          <span className="fci">
            Party Bundles — 50% off Tuesday to Friday! –{' '}
            <Link href={routes.summerBirthdays}>Book Today!</Link>
          </span>
          <span className="sep">|</span>
          <span className="fci">
            <img
              src={themeImages.schoolYearCamps}
              alt=""
              style={{
                display: 'inline-block',
                width: 20,
                height: 20,
                marginRight: 2,
                position: 'relative',
                top: 3,
              }}
            />{' '}
            Free Playtime Fridays – <Link href={routes.membership}>Learn More</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
