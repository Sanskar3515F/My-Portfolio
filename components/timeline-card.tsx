'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './glass-card';
import { cn } from '@/utils/cn';

type TimelineCardProps = {
  title: string;
  index: number;
  isLast?: boolean;
};

export function TimelineCard({ title, index, isLast }: TimelineCardProps) {
  const alignLeft = index % 2 === 0;

  return (
    <div className={cn('grid items-center gap-4 md:grid-cols-2', alignLeft ? 'md:text-right' : '')}>
      <div className={cn('hidden md:block', !alignLeft && 'md:order-2')} />
      <motion.div
        initial={{ opacity: 0, y: 24, x: alignLeft ? -24 : 24 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={cn('relative', !alignLeft && 'md:order-1')}
      >
        <div className="absolute -left-8 top-8 hidden h-px w-8 bg-gradient-to-r from-[color:var(--primary)] to-transparent md:block" />
        <GlassCard className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:rgba(37,99,235,0.08)] text-sm font-semibold text-[color:var(--primary)] ring-1 ring-[color:rgba(37,99,235,0.12)]">
              0{index + 1}
            </span>
            <div className={cn('space-y-2', alignLeft && 'md:text-right')}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--primary)]">Milestone</p>
              <h3 className="text-lg font-semibold text-[color:var(--text)] sm:text-xl">{title}</h3>
            </div>
          </div>
        </GlassCard>
        {!isLast ? <div className="mx-auto mt-4 h-10 w-px bg-gradient-to-b from-[color:var(--border)] to-transparent md:hidden" /> : null}
      </motion.div>
    </div>
  );
}
