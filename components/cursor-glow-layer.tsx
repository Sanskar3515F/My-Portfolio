'use client';

import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

export function CursorGlowLayer() {
  const [position, setPosition] = useState({ x: 50, y: 20 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const handleMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-90"
      style={{
        background: prefersReducedMotion
          ? 'radial-gradient(700px circle at 50% 10%, rgba(37, 99, 235, 0.06), transparent 42%)'
          : `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.07), transparent 42%), radial-gradient(700px circle at ${position.x * 0.9}px ${position.y * 0.9}px, rgba(6, 182, 212, 0.05), transparent 48%)`
      }}
    />
  );
}
