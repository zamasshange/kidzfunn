import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bayareadiscoverymuseum.org',
        pathname: '/wp-content/**',
      },
    ],
  },
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      { source: '/about/contact-us', destination: '/contact', permanent: true },
      { source: '/about/contact-us/', destination: '/contact', permanent: true },
      { source: '/plan-your-visit/discovery-zones', destination: '/discovery-zones', permanent: true },
      { source: '/plan-your-visit/discovery-zones/', destination: '/discovery-zones', permanent: true },
      { source: '/programs/camps-2', destination: '/programs', permanent: true },
      { source: '/programs/camps-2/', destination: '/programs', permanent: true },
      { source: '/camps', destination: '/programs', permanent: true },
      { source: '/camps/', destination: '/programs', permanent: true },
      { source: '/parties', destination: '/summer-birthdays', permanent: true },
      { source: '/parties/', destination: '/summer-birthdays', permanent: true },
    ];
  },
};

export default nextConfig;
