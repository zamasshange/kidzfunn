'use client';

import { useEffect } from 'react';

type BodyClassProps = {
  className: string;
};

export default function BodyClass({ className }: BodyClassProps) {
  useEffect(() => {
    const classes = className.split(/\s+/).filter(Boolean);
    classes.forEach((name) => document.body.classList.add(name));

    return () => {
      classes.forEach((name) => document.body.classList.remove(name));
    };
  }, [className]);

  return null;
}
