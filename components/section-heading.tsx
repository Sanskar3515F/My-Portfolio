import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-3xl text-center', className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--primary)]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-[color:var(--text)] sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">{description}</p> : null}
    </div>
  );
}
