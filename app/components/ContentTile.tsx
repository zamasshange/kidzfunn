import Link from 'next/link';
import type { ReactNode } from 'react';

export type ContentTileProps = {
  image: string;
  imageAlt?: string;
  title?: string;
  titleStyle?: React.CSSProperties;
  children?: ReactNode;
  footer?: ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
  buttonExternal?: boolean;
  imageStyle?: React.CSSProperties;
};

export function ContentTile({
  image,
  imageAlt = '',
  title,
  titleStyle,
  children,
  footer,
  buttonLabel,
  buttonHref,
  buttonExternal,
  imageStyle,
}: ContentTileProps) {
  return (
    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
      <figure className="wp-block-image size-large is-style-shape-angle">
        <img decoding="async" src={image} alt={imageAlt} style={imageStyle} />
      </figure>
      {title ? (
        <h3 className="wp-block-heading" style={titleStyle}>
          {title}
        </h3>
      ) : null}
      {children}
      {footer}
      {buttonLabel && buttonHref ? (
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            {buttonExternal ? (
              <a
                href={buttonHref}
                className="wp-block-button__link wp-element-button"
                target="_blank"
                rel="noreferrer noopener"
              >
                {buttonLabel}
              </a>
            ) : (
              <Link href={buttonHref} className="wp-block-button__link wp-element-button">
                {buttonLabel}
              </Link>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function CampTile({
  image,
  buttonLabel,
  buttonHref,
}: {
  image: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
      <figure className="wp-block-image size-large is-style-shape-angle">
        <img decoding="async" src={image} alt="" />
      </figure>
      <p />
      <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
        <div className="wp-block-button">
          <Link href={buttonHref} className="wp-block-button__link wp-element-button">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function WpSpacer({ height }: { height: number }) {
  return <div style={{ height }} aria-hidden="true" className="wp-block-spacer" />;
}

export function WpColumnRow({ children }: { children: ReactNode }) {
  return (
    <div className="wp-block-columns is-layout-flex wp-block-columns-is-layout-flex">{children}</div>
  );
}

export function WpGridSection({
  children,
  asSection = false,
  className = '',
  id,
}: {
  children: ReactNode;
  asSection?: boolean;
  className?: string;
  id?: string;
}) {
  const Tag = asSection ? 'section' : 'div';
  return (
    <Tag id={id} className={`wp-block-group ${className}`.trim()}>
      <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
        {children}
      </div>
    </Tag>
  );
}

/** @deprecated Use WpGridSection + WpColumnRow */
export function ContentTileRow({ children }: { children: ReactNode }) {
  return (
    <div className="wp-block-group">
      <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
        <WpColumnRow>{children}</WpColumnRow>
      </div>
    </div>
  );
}

export function WpSection({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div id={id} className={`wp-block-group ${className}`.trim()}>
      <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
        {children}
      </div>
    </div>
  );
}

function chunkPairs<T>(items: readonly T[]): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2) as T[]);
  }
  return rows;
}

export function TileGridPage({ tiles }: { tiles: readonly ContentTileProps[] }) {
  return (
    <WpGridSection className="page-tile-grid">
      {chunkPairs(tiles).map((row) => (
        <WpColumnRow key={row[0].title ?? row[0].image}>
          {row.map((tile) => (
            <ContentTile key={tile.title ?? tile.image} {...tile} />
          ))}
        </WpColumnRow>
      ))}
    </WpGridSection>
  );
}

export const eventTitleStyle = { color: '#008080', textTransform: 'uppercase' as const };
