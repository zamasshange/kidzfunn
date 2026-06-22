'use client';

import { useEffect } from 'react';

type BodyClassProps = {
  className: string;
};

export default function BodyClass({ className }: BodyClassProps) {
  useEffect(() => {
    const previous = document.body.className;
    document.body.className = className;
    return () => {
      document.body.className = previous;
    };
  }, [className]);

  return null;
}
