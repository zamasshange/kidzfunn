'use client';

import Script from 'next/script';
import { themeScripts } from '../lib/assets';

export default function ThemeScripts() {
  return (
    <>
      {/* Header script omitted — React Header + hooks own nav; theme header JS breaks inner-page sidebar layout */}
      <Script src={themeScripts.footer} strategy="lazyOnload" />
      <Script
        id="gt_widget_script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.gtranslateSettings = window.gtranslateSettings || {};
            window.gtranslateSettings['10404244'] = {
              default_language: 'en',
              languages: ['en', 'es'],
              url_structure: 'none',
              wrapper_selector: '#gt-wrapper-10404244',
              horizontal_position: 'inline',
              flags_location: '/wp-content/plugins/gtranslate/flags/'
            };
          `,
        }}
      />
      <Script
        src="https://bayareadiscoverymuseum.org/wp-content/plugins/gtranslate/js/lc.js"
        strategy="lazyOnload"
        data-gt-widget-id="10404244"
      />
    </>
  );
}
