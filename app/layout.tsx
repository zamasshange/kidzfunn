import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import './globals.css';
import './styles/badm-custom.css';
import './styles/membership-blocks.css';
import './styles/give-page.css';
import './styles/tile-grid.css';
import './styles/programs-at-site.css';
import { siteConfig } from './lib/siteConfig';
import { themeStyles } from './lib/assets';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Indoor Playground & Party Venue`,
  description: siteConfig.metaDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={fredoka.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={themeStyles.main} />
        <link rel="stylesheet" href={themeStyles.popup} />
        <link rel="stylesheet" href="/styles/theme-overrides.css" />
      </head>
      <body className="wp-custom-logo wp-theme-badm">
        {children}
      </body>
    </html>
  );
}
