'use client';

import { useEffect } from 'react';

/** WP theme mobile nav handlers run before React mounts — re-bind for Next.js. */
export function useMobileNav() {
  useEffect(() => {
    const toslide = document.querySelector<HTMLElement>('.mobile-header__toslide');
    const toggles = document.querySelectorAll<HTMLElement>(
      '.menu-toggle, .mobile-header__toggle'
    );

    const onToggleMenu = () => {
      toslide?.classList.toggle('active');
    };

    const onBackdropClick = (event: MouseEvent) => {
      if (!toslide?.classList.contains('active')) return;
      const target = event.target as HTMLElement;
      if (target === toslide) {
        toslide.classList.remove('active');
      }
    };

    toggles.forEach((toggle) => toggle.addEventListener('click', onToggleMenu));
    toslide?.addEventListener('click', onBackdropClick);

    const parentLinks = document.querySelectorAll<HTMLAnchorElement>(
      '#mobile-menu > .menu-item-has-children > a'
    );

    const onParentClick = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      const item = link.parentElement;
      const submenu = item?.querySelector<HTMLElement>('.sub-menu');
      if (!item || !submenu) return;

      event.preventDefault();
      link.classList.toggle('active');
      submenu.classList.toggle('show');
    };

    parentLinks.forEach((link) => link.addEventListener('click', onParentClick));

    return () => {
      toggles.forEach((toggle) => toggle.removeEventListener('click', onToggleMenu));
      toslide?.removeEventListener('click', onBackdropClick);
      parentLinks.forEach((link) => link.removeEventListener('click', onParentClick));
    };
  }, []);
}
