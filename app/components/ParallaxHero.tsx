import { themeImages } from '../lib/assets';

type ParallaxHeroProps = {
  title: string;
  description?: string;
  desktopImage: string;
  mobileImage: string;
  extraClass?: string;
};

export default function ParallaxHero({
  title,
  description,
  desktopImage,
  mobileImage,
  extraClass = '',
}: ParallaxHeroProps) {
  return (
    <section className={`hero ${extraClass}`.trim()}>
      <img decoding="async" className="scroll-indicator" src={themeImages.scrollArrow} alt="" />

      <div className="hero__copy is-style-true-parallax">
        <div className="hero__images">
          <div
            className="hero__image hero__image--desktop"
            style={{
              backgroundImage: `url('${desktopImage}')`,
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover',
            }}
          />
          <div
            className="hero__image hero__image--mobile"
            style={{
              backgroundImage: `url('${mobileImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
            }}
          />
        </div>

        <div className="hero__text">
          <div className="hero__heading">{title}</div>
          {description ? <div className="hero__desc">{description}</div> : null}
        </div>
      </div>
    </section>
  );
}
