import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('grid gap-5', className)}>{children}</div>;
}
