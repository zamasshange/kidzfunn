'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '../lib/siteConfig';

const POPUP_COOKIE = 'pum-3744-closed';

export default function ClosurePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(POPUP_COOKIE)) return;

    const timer = window.setTimeout(() => setVisible(true), 750);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    localStorage.setItem(POPUP_COOKIE, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="pum-3744"
      role="dialog"
      aria-modal="false"
      aria-labelledby="pum_popup_title_3744"
      className="pum pum-overlay pum-theme-2569 pum-theme-default-theme popmake-overlay pum-open"
      style={{ display: 'block', opacity: 1 }}
    >
      <div
        id="popmake-3744"
        className="pum-container popmake theme-2569 pum-responsive pum-responsive-medium responsive size-medium"
      >
        <div id="pum_popup_title_3744" className="pum-title popmake-title">
          Early Closure Notice
        </div>
        <div className="pum-content popmake-content" tabIndex={0}>
          <div className="popup-content">
            <figure className="wp-block-image size-large is-style-shape-angle">
              <img
                width={640}
                height={427}
                src="/images/kfh/9df1a2ce9b684a88a2fd3d4a7aac7926.jpg"
                alt={`${siteConfig.name} indoor play area`}
                decoding="async"
              />
            </figure>
            <h2 className="popup-title">We Are Closing at 3pm Today</h2>
            <div className="popup-text">
              <p>
                Hello! We will be closing the {siteConfig.name} early today at 3pm for staff
                training. We apologise for any inconvenience.
              </p>
            </div>
          </div>
        </div>
        <button type="button" className="pum-close popmake-close" aria-label="Close" onClick={close}>
          x
        </button>
      </div>
    </div>
  );
}
