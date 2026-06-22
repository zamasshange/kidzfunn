import type { ReactNode } from 'react';
import JumpNav from './JumpNav';
import PageLayout from './PageLayout';
import ParallaxHero from './ParallaxHero';

type JumpItem = { label: string; href: string };

type InnerPageShellProps = {
  bodyClass?: string;
  title: string;
  description?: string;
  desktopImage: string;
  mobileImage: string;
  heroClass?: string;
  jumpNav?: JumpItem[];
  jumpNavClass?: string;
  children: ReactNode;
};

export default function InnerPageShell({
  bodyClass,
  title,
  description,
  desktopImage,
  mobileImage,
  heroClass,
  jumpNav,
  jumpNavClass = '',
  children,
}: InnerPageShellProps) {
  return (
    <PageLayout bodyClass={bodyClass}>
      <ParallaxHero
        title={title}
        description={description}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        extraClass={heroClass}
      />
      {jumpNav?.length ? <JumpNav items={jumpNav} navClassName={jumpNavClass} /> : null}
      {children}
    </PageLayout>
  );
}
