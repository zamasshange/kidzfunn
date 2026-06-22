'use client';

import { useEffect } from 'react';
import { playDropEffect } from './dropEffect';

const SLIDE_DROP_COLORS = ['#FA7F08', '#22BABB', '#348888', '#9EF8EE', '#F24405'];
const TRANSITION_MS = 850;
const WHEEL_COOLDOWN_MS = 950;
const RESIZE_DEBOUNCE_MS = 150;

function isFooterSection(section: HTMLElement) {
  return section.classList.contains('fp-auto-height-responsive');
}

export function useVerticalSlider(containerId = 'fullpage') {
  useEffect(() => {
    const container = document.getElementById(containerId);
    const slider = document.getElementById('vertical-slider');
    const track = container?.querySelector<HTMLElement>('.badm-slider-track');
    if (!container || !track || !slider) return;

    document.documentElement.classList.add('fp-enabled');
    document.body.classList.add('fp-enabled', 'stick');

    const sections = Array.from(track.querySelectorAll<HTMLElement>(':scope > .section'));
    if (!sections.length) return;

    sections.forEach((section) => section.classList.add('fp-section'));

    let nav = document.getElementById('fp-nav');
    if (!nav) {
      nav = document.createElement('div');
      nav.id = 'fp-nav';
      nav.className = 'fp-left fp-slidesNav fp-slidesNav';
      nav.innerHTML = '<ul></ul>';
      document.body.appendChild(nav);
    }

    const navList = nav.querySelector('ul')!;
    navList.innerHTML = '';

    sections.forEach((_, index) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.innerHTML = '<span></span>';
      link.addEventListener('click', (event) => {
        event.preventDefault();
        goTo(index);
      });
      li.appendChild(link);
      navList.appendChild(li);
    });

    let activeIndex = 0;
    let isAnimating = false;
    let lastWheelTime = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let touchStartScrollTop = 0;
    let offsets: number[] = [];
    let resizeTimer = 0;
    let isMeasuring = false;

    const getSlideHeight = () => {
      const height = slider.clientHeight;
      return height > 0 ? height : window.innerHeight;
    };

    const measure = () => {
      if (isMeasuring) return;
      isMeasuring = true;

      const slideHeight = getSlideHeight();
      slider.style.setProperty('--slide-h', `${slideHeight}px`);
      container.style.setProperty('--slide-h', `${slideHeight}px`);

      sections.forEach((section) => {
        section.style.height = `${slideHeight}px`;
        section.style.minHeight = `${slideHeight}px`;
        section.style.maxHeight = `${slideHeight}px`;
      });

      void track.offsetHeight;

      offsets = sections.map((_, index) => index * slideHeight);

      isMeasuring = false;
    };

    const applyTransform = (index: number, animate: boolean) => {
      track.style.transition = animate
        ? `transform ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
        : 'none';
      track.style.transform = `translate3d(0, -${offsets[index] ?? 0}px, 0)`;
    };

    const updateNav = (index: number) => {
      navList.querySelectorAll('li').forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });

      if (index === sections.length - 1) {
        nav.classList.add('last-slide');
      } else {
        nav.classList.remove('last-slide');
      }

      sections.forEach((section, i) => {
        const isCurrent = i === index;
        section.classList.toggle('is-active', isCurrent);
        section.classList.toggle('active', isCurrent);
        section.toggleAttribute('data-active', isCurrent);
      });
    };

    const goTo = (index: number, options?: { animate?: boolean; force?: boolean }) => {
      const animate = options?.animate ?? true;
      const maxIndex = sections.length - 1;
      const nextIndex = Math.max(0, Math.min(maxIndex, index));

      if (!options?.force && (isAnimating || nextIndex === activeIndex)) {
        return false;
      }

      const previousIndex = activeIndex;
      activeIndex = nextIndex;

      if (nextIndex !== previousIndex) {
        playDropEffect(SLIDE_DROP_COLORS[nextIndex % SLIDE_DROP_COLORS.length], 500);
      }

      applyTransform(nextIndex, animate);
      updateNav(nextIndex);

      if (animate) {
        isAnimating = true;
        window.setTimeout(() => {
          isAnimating = false;
        }, TRANSITION_MS + 40);
      }

      return true;
    };

    const canLeaveFooter = (deltaY: number, section: HTMLElement) => {
      if (deltaY >= 0) return true;
      return section.scrollTop <= 0;
    };

    const canScrollFooterDown = (section: HTMLElement) => {
      return section.scrollTop + section.clientHeight < section.scrollHeight - 2;
    };

    const onWheel = (event: WheelEvent) => {
      if (!document.body.classList.contains('home')) return;

      const now = Date.now();
      const delta = event.deltaY;
      if (Math.abs(delta) < 8) return;

      const currentSection = sections[activeIndex];

      if (isFooterSection(currentSection)) {
        if (delta > 0 && canScrollFooterDown(currentSection)) {
          return;
        }
        if (delta < 0 && !canLeaveFooter(delta, currentSection)) {
          return;
        }
      }

      event.preventDefault();

      if (isAnimating || now - lastWheelTime < WHEEL_COOLDOWN_MS) return;

      if (delta > 0) {
        if (goTo(activeIndex + 1)) lastWheelTime = now;
      } else if (goTo(activeIndex - 1)) {
        lastWheelTime = now;
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchStartTime = Date.now();
      const currentSection = sections[activeIndex];
      touchStartScrollTop = isFooterSection(currentSection) ? currentSection.scrollTop : 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentSection = sections[activeIndex];
      if (!isFooterSection(currentSection)) return;

      const touchY = event.touches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - touchY;

      if (deltaY > 0 && canScrollFooterDown(currentSection)) return;
      if (deltaY < 0 && currentSection.scrollTop > touchStartScrollTop) return;

      if (Math.abs(deltaY) > 10) {
        event.preventDefault();
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (isAnimating) return;

      const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - touchEndY;
      const elapsed = Date.now() - touchStartTime;

      if (Math.abs(deltaY) < 50 || elapsed > 800) return;

      const currentSection = sections[activeIndex];
      if (isFooterSection(currentSection) && deltaY < 0 && !canLeaveFooter(-1, currentSection)) {
        return;
      }
      if (
        isFooterSection(currentSection) &&
        deltaY > 0 &&
        (canScrollFooterDown(currentSection) || currentSection.scrollTop > touchStartScrollTop)
      ) {
        return;
      }

      if (deltaY > 0) {
        goTo(activeIndex + 1);
      } else {
        goTo(activeIndex - 1);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (isAnimating) return;

      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        goTo(activeIndex + 1);
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        goTo(activeIndex - 1);
      }
    };

    const remeasure = () => {
      measure();
      applyTransform(activeIndex, false);
    };

    const scheduleRemeasure = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(remeasure, RESIZE_DEBOUNCE_MS);
    };

    const onResize = () => {
      scheduleRemeasure();
    };

    measure();
    applyTransform(0, false);
    updateNav(0);
    navList.querySelectorAll('li')[0]?.classList.add('active');

    requestAnimationFrame(remeasure);
    window.addEventListener('load', remeasure);

    const images = track.querySelectorAll<HTMLImageElement>('img');
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', scheduleRemeasure, { once: true });
      }
    });

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    slider.addEventListener('touchstart', onTouchStart, { passive: true });
    slider.addEventListener('touchmove', onTouchMove, { passive: false });
    slider.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener('load', remeasure);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchmove', onTouchMove);
      slider.removeEventListener('touchend', onTouchEnd);

      document.documentElement.classList.remove('fp-enabled');
      document.body.classList.remove('fp-enabled', 'stick');

      slider.style.removeProperty('--slide-h');
      container.style.removeProperty('--slide-h');

      nav?.remove();
      sections.forEach((section) => {
        section.classList.remove('fp-section', 'is-active', 'active');
        section.removeAttribute('data-active');
        section.style.height = '';
        section.style.minHeight = '';
        section.style.maxHeight = '';
      });

      track.style.transition = '';
      track.style.transform = '';
    };
  }, [containerId]);
}
