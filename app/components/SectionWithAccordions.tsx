import type { ReactNode } from 'react';
import { WpSection } from './ContentTile';

export type AccordionItem = {
  summary: string;
  content: ReactNode;
};

type SectionWithAccordionsProps = {
  id?: string;
  title: ReactNode;
  intro: ReactNode;
  accordions: AccordionItem[];
  registrationNote?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
};

export default function SectionWithAccordions({
  id,
  title,
  intro,
  accordions,
  registrationNote,
  ctaLabel,
  ctaHref,
  ctaExternal,
}: SectionWithAccordionsProps) {
  return (
    <WpSection id={id}>
      <h2 className="wp-block-heading">{title}</h2>
      <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">
        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
          {intro}
          {registrationNote ? <p>{registrationNote}</p> : null}
          {ctaLabel && ctaHref ? (
            <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
              <div className="wp-block-button">
                <a
                  href={ctaHref}
                  className="wp-block-button__link wp-element-button"
                  {...(ctaExternal
                    ? { target: '_blank', rel: 'noreferrer noopener' }
                    : {})}
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          ) : null}
        </div>
        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
          {accordions.map((item) => (
            <details
              key={item.summary}
              className="wp-block-details is-layout-flow wp-block-details-is-layout-flow"
            >
              <summary>{item.summary}</summary>
              <div>{item.content}</div>
            </details>
          ))}
        </div>
      </div>
    </WpSection>
  );
}
