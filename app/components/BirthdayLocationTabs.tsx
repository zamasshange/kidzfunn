'use client';

import Link from 'next/link';
import { useState } from 'react';
import { birthdayLocations } from '../data/birthdayLocations';

export default function BirthdayLocationTabs() {
  const [activeId, setActiveId] = useState<string>(birthdayLocations[0].id);
  const active = birthdayLocations.find((loc) => loc.id === activeId) ?? birthdayLocations[0];

  return (
    <div className="birthday-tabs">
      <ul className="birthday-tabs__nav" role="tablist">
        {birthdayLocations.map((location) => (
          <li key={location.id}>
            <button
              type="button"
              role="tab"
              aria-selected={activeId === location.id}
              className={activeId === location.id ? 'active' : ''}
              onClick={() => setActiveId(location.id)}
            >
              {location.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="birthday-tabs__panel" role="tabpanel">
        <figure className="wp-block-image size-large">
          <img decoding="async" src={active.image} alt={active.label} />
        </figure>
        <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button">
            <Link href={active.bookHref} className="wp-block-button__link wp-element-button">
              {active.bookLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
