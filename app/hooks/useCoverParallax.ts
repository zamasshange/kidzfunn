'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll parallax for fixed-height cover bands — matches BADM give-page behaviour:
 * background moves with scrollY relative to the band's document position.
 */
export function useCoverParallax(speed = 0.45) {
  const coverRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cover = coverRef.current;
    const image = imageRef.current;
    if (!cover || !image) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let frame = 0;

    const update = () => {
      frame = 0;
      if (motionQuery.matches) {
        image.style.transform = 'translate3d(0, 0, 0)';
        return;
      }

      const relativeY = window.scrollY - cover.offsetTop;
      const translate = relativeY * speed;
      image.style.transform = `translate3d(0, ${translate}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    motionQuery.addEventListener('change', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      motionQuery.removeEventListener('change', update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return { coverRef, imageRef };
}
