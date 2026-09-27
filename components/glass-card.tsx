import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-white/76 shadow-[0_18px_60px_-32px_rgba(15,23,42,0.25)] backdrop-blur-xl', className)}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-transparent opacity-80" />
      <div className="relative">{children}</div>
    </div>
  );
}
