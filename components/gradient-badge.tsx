import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function GradientBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[color:var(--muted)] uppercase backdrop-blur', className)}>
      <span className="h-2 w-2 rounded-full bg-[color:var(--primary)] shadow-[0_0_0_6px_rgba(37,99,235,0.1)]" />
      {children}
    </span>
  );
}
