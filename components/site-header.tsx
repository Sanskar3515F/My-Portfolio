'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedButton } from './animated-button';
import { cn } from '@/utils/cn';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' }
] as const;

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={cn('fixed inset-x-0 top-0 z-[60] transition-all duration-300', isScrolled ? 'pt-3' : 'pt-5')}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn('flex items-center justify-between rounded-full border border-[color:var(--border)] px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-5', isScrolled ? 'bg-white/82 shadow-[0_14px_50px_-28px_rgba(15,23,42,0.35)]' : 'bg-white/58')}>
            <Link href="#home" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--primary)] text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(37,99,235,0.55)]">
              SM
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-[color:rgba(37,99,235,0.06)] hover:text-[color:var(--text)]">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <AnimatedButton href="/resume.pdf" download variant="secondary" className="px-5 py-2.5 text-sm">
                Resume
              </AnimatedButton>
            </div>

            <button type="button" onClick={() => setMenuOpen((current) => !current)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/80 text-[color:var(--text)] shadow-sm transition hover:bg-white md:hidden" aria-label="Open menu">
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-3.5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div initial={{ opacity: 0, y: -18, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -18, filter: 'blur(12px)' }} transition={{ duration: 0.28, ease: 'easeOut' }} className="fixed inset-x-0 top-0 z-[59] bg-white/88 px-4 pb-6 pt-24 backdrop-blur-2xl md:hidden">
            <div className="mx-auto max-w-7xl rounded-[28px] border border-[color:var(--border)] bg-white/90 p-4 shadow-[0_16px_60px_-32px_rgba(15,23,42,0.25)]">
              <div className="grid gap-2">
                {links.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--soft)] px-4 py-4 text-base font-medium text-[color:var(--text)]">
                    {link.label}
                  </a>
                ))}
                <AnimatedButton href="/resume.pdf" download variant="primary" className="mt-2 w-full">
                  Resume
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
