'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type AnimatedCounterProps = { value: number; suffix?: string };

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const state = { number: 0 };
    const tween = gsap.to(state, {
      number: value,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = `${Math.round(state.number)}${suffix}`;
      }
    });

    return () => tween.kill();
  }, [suffix, value]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}
