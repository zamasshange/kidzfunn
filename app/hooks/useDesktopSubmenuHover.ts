'use client';

import { useEffect } from 'react';

/** WP theme attaches submenu hover on DOMContentLoaded — too early for Next.js client nav. */
export function useDesktopSubmenuHover(menuId = 'primary-menu') {
  useEffect(() => {
    const menuItems = document.querySelectorAll<HTMLElement>(
      `#${menuId} > .menu-item-has-children`
    );

    const cleanups: Array<() => void> = [];

    menuItems.forEach((item) => {
      const submenu = item.querySelector<HTMLElement>('.sub-menu');
      if (!submenu) return;

      let mouseoutTimeout: ReturnType<typeof setTimeout> | undefined;

      const expand = () => {
        clearTimeout(mouseoutTimeout);
        const childCount = submenu.querySelectorAll(':scope > li').length;
        item.style.minHeight = `${Math.max(140, 56 + childCount * 36)}px`;
        item.classList.add('is-expanded');
        submenu.style.maxHeight = '999px';
        submenu.style.opacity = '1';
        submenu.classList.add('visible');
      };

      const collapse = () => {
        mouseoutTimeout = setTimeout(() => {
          item.style.minHeight = '';
          item.classList.remove('is-expanded');
          submenu.style.maxHeight = '0';
          submenu.style.opacity = '0';
          submenu.classList.remove('visible');
        }, 120);
      };

      item.addEventListener('mouseenter', expand);
      item.addEventListener('mouseleave', collapse);
      cleanups.push(() => {
        item.removeEventListener('mouseenter', expand);
        item.removeEventListener('mouseleave', collapse);
        clearTimeout(mouseoutTimeout);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [menuId]);
}
