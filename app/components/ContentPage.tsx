import type { ReactNode } from 'react';
import ParallaxHero from './ParallaxHero';
import PageLayout from './PageLayout';

type ContentPageProps = {
  title: string;
  subtitle?: string;
  imageDesktop: string;
  imageMobile?: string;
  children: ReactNode;
};

export default function ContentPage({
  title,
  subtitle,
  imageDesktop,
  imageMobile,
  children,
}: ContentPageProps) {
  return (
    <PageLayout>
      <ParallaxHero
        title={title}
        description={subtitle}
        desktopImage={imageDesktop}
        mobileImage={imageMobile ?? imageDesktop}
      />
      <div className="wp-block-group">
        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
          {children}
        </div>
      </div>
    </PageLayout>
  );
}
