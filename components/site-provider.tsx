'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function SiteProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({ duration: 1.15, lerp: 0.08, smoothWheel: true, wheelMultiplier: 1 });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
