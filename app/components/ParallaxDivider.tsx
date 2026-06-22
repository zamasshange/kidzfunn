'use client';

import { useCoverParallax } from '../hooks/useCoverParallax';

type ParallaxDividerProps = {
  image: string;
  light?: boolean;
  minHeight?: number;
  dimColor?: string;
  className?: string;
  label?: string;
};

export default function ParallaxDivider({
  image,
  light = false,
  minHeight = 400,
  dimColor,
  className = '',
  label,
}: ParallaxDividerProps) {
  const { coverRef, imageRef } = useCoverParallax(0.45);

  return (
    <div
      ref={coverRef}
      className={`wp-block-cover give-parallax-divider is-style-true-parallax ${light ? 'is-light' : ''} has-parallax ${className}`.trim()}
      style={{ minHeight, height: minHeight }}
    >
      <div
        ref={imageRef}
        role="img"
        aria-label={label}
        className="give-parallax-divider__image"
        style={{ backgroundImage: `url("${image}")` }}
      />
      {dimColor ? (
        <span
          aria-hidden="true"
          className="give-parallax-divider__tint"
          style={{ backgroundColor: dimColor }}
        />
      ) : null}
      <div className="wp-block-cover__inner-container is-layout-constrained wp-block-cover-is-layout-constrained">
        <p className="has-text-align-center has-large-font-size" />
      </div>
    </div>
  );
}
