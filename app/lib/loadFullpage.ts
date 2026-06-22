let loadPromise: Promise<void> | null = null;

export function isFullpageConstructor(
  value: unknown
): value is new (selector: string, options?: Record<string, unknown>) => unknown {
  return typeof value === 'function';
}

/** Load open-source fullpage.js from /public/vendor (reliable constructor). */
export function loadFullpageScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (isFullpageConstructor(window.fullpage)) {
    return Promise.resolve();
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise((resolve, reject) => {
    const onReady = () => {
      if (isFullpageConstructor(window.fullpage)) {
        resolve();
      } else {
        reject(new Error('fullpage.js loaded but window.fullpage is not a constructor'));
      }
    };

    const existing = document.querySelector<HTMLScriptElement>('script[data-fullpage-vendor]');
    if (existing) {
      if (isFullpageConstructor(window.fullpage)) {
        resolve();
        return;
      }
      existing.addEventListener('load', onReady, { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load fullpage.js')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.src = '/vendor/fullpage.min.js';
    script.async = false;
    script.dataset.fullpageVendor = 'true';
    script.onload = onReady;
    script.onerror = () => reject(new Error('Failed to load fullpage.js'));
    document.head.appendChild(script);
  });

  return loadPromise;
}
