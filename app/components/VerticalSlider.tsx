'use client';

import Link from 'next/link';
import Footer from './Footer';
import SliderArrow from './SliderArrow';
import TestimonialBox from './TestimonialBox';
import { homeSlides } from '../data/homeSlides';
import { useVerticalSlider } from '../lib/useVerticalSlider';

export default function VerticalSlider() {
  useVerticalSlider('fullpage');

  return (
    <section className="vertical-slider" id="vertical-slider">
      <div id="fullpage" className="vertical-slider__copy badm-scroll-slider">
        <div className="badm-slider-track">
          {homeSlides.map((slide, index) => (
            <div key={slide.boxClass} className={`section box ${slide.boxClass}`}>
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  decoding="async"
                  src={slide.desktopImage}
                  alt={slide.alt}
                  className="cover-img"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                />
              </picture>
              <div className="vertical-slider__text">
                <div className="vertical-slider__heading">{slide.heading}</div>
                <div className="vertical-slider__cta">
                  <Link className="vertical-slider__button" href={slide.ctaHref}>
                    {slide.ctaText}
                    <SliderArrow />
                  </Link>
                </div>
              </div>
              <TestimonialBox text={slide.testimonial.text} name={slide.testimonial.name} />
            </div>
          ))}

          <div className="section box fp-auto-height-responsive">
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}
