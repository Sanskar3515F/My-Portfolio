'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SectionHeading } from '@/components/section-heading';
import { TimelineCard } from '@/components/timeline-card';
import { journey } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

export function JourneySection() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const tween = gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, transformOrigin: 'top center', ease: 'none', scrollTrigger: { trigger: line, start: 'top 80%', end: 'bottom 20%', scrub: true } });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section id="journey" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="My Journey" title="A scrolling timeline of growth and focus." description="This replaces a conventional experience list with a more personal sequence of milestones, showing how the stack evolved over time." />

        <div className="relative mt-16">
          <div ref={lineRef} className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-[color:var(--primary)] via-[color:var(--secondary)] to-[color:var(--border)] md:left-1/2 md:-translate-x-1/2" />
          <div className="grid gap-8 md:gap-10">
            {journey.map((milestone, index) => (
              <TimelineCard key={milestone} title={milestone} index={index} isLast={index === journey.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
