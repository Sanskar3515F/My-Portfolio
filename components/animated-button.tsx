'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type AnimatedButtonProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const styles = {
  primary: 'bg-[color:var(--primary)] text-white shadow-[0_18px_45px_-18px_rgba(37,99,235,0.45)] hover:bg-[#1d4ed8]',
  secondary: 'border border-[color:var(--border)] bg-white/80 text-[color:var(--text)] hover:border-[color:rgba(37,99,235,0.22)] hover:bg-white',
  ghost: 'bg-transparent text-[color:var(--text)] hover:bg-[color:rgba(37,99,235,0.06)]'
} as const;

export function AnimatedButton({ children, href, download, external, variant = 'primary', className, onClick, type = 'button' }: AnimatedButtonProps) {
  const base = cn('group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform', styles[variant], className);

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">
      <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
        {children}
      </motion.span>
    </span>
  );

  if (href && !external && !download) {
    return (
      <Link href={href} download={download} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={base}>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100" />
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} download={download} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={base}>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100" />
        {content}
      </a>
    );
  }

  return (
    <motion.button type={type} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={onClick} className={base}>
      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100" />
      {content}
    </motion.button>
  );
}
