'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedButton } from '@/components/animated-button';
import { GradientBadge } from '@/components/gradient-badge';
import { GlassCard } from '@/components/glass-card';
import { site } from '@/lib/data';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:min-h-screen lg:pt-36">
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative z-10 max-w-2xl">
          <GradientBadge>Software Developer</GradientBadge>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-[color:var(--muted)]">Hello, I&apos;m</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[-0.05em] text-[color:var(--text)] sm:text-6xl lg:text-7xl">{site.name}</h1>
          <p className="mt-4 text-2xl font-medium text-[color:var(--primary)] sm:text-3xl">{site.role}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">Software Developer building responsive mobile and web applications with Flutter, Firebase, Next.js, REST APIs, and AI integrations.</p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-white/82 px-4 py-3 text-sm text-[color:var(--text)] shadow-[0_14px_40px_-28px_rgba(15,23,42,0.22)] backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--success)]" />
            {site.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <AnimatedButton href="#projects">View Projects</AnimatedButton>
            <AnimatedButton href="/resume.pdf" download variant="secondary">Download Resume</AnimatedButton>
            <AnimatedButton href={`https://${site.github}`} external variant="ghost">GitHub</AnimatedButton>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }} className="relative">
          <div className="absolute inset-[-8%] rounded-[40px] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.8),rgba(243,247,252,0.9))] blur-2xl" />

          <div className="relative mx-auto max-w-[580px]">
            <GlassCard className="relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.1),transparent_42%)]" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-gradient-to-br from-[#f9fbff] via-white to-[#edf4ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                <div className="absolute left-6 top-6 rounded-full border border-[color:var(--border)] bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)] backdrop-blur">Premium UI</div>
                <div className="absolute right-6 top-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f59e0b]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#16a34a]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#2563eb]/80" />
                </div>

                <div className="absolute left-1/2 top-[16%] h-[66%] w-[76%] -translate-x-1/2 rounded-[34px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,248,255,0.96))] shadow-premium">
                  <div className="absolute inset-x-4 top-4 h-3 rounded-full bg-[linear-gradient(90deg,rgba(37,99,235,0.14),rgba(6,182,212,0.16),rgba(124,58,237,0.14))]" />
                  <div className="absolute inset-4 rounded-[24px] border border-[color:var(--border)] bg-white/80 p-4">
                    <div className="grid h-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-[1.02fr_0.98fr]">
                      <div className="rounded-[22px] bg-[linear-gradient(180deg,rgba(37,99,235,0.08),rgba(37,99,235,0.02))] p-4">
                        <div className="h-3 w-24 rounded-full bg-[color:rgba(37,99,235,0.18)]" />
                        <div className="mt-4 space-y-3">
                          <div className="h-10 rounded-2xl bg-white shadow-[0_10px_30px_-24px_rgba(15,23,42,0.4)]" />
                          <div className="h-10 rounded-2xl bg-white shadow-[0_10px_30px_-24px_rgba(15,23,42,0.4)]" />
                          <div className="h-24 rounded-3xl bg-[linear-gradient(135deg,rgba(37,99,235,0.12),rgba(6,182,212,0.12),rgba(124,58,237,0.12))]" />
                        </div>
                      </div>
                      <div className="space-y-4 rounded-[22px] bg-white p-4 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.24)]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">Code UI</span>
                          <span className="rounded-full bg-[color:rgba(37,99,235,0.08)] px-3 py-1 text-xs font-semibold text-[color:var(--primary)]">Live</span>
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 w-3/4 rounded-full bg-[color:rgba(15,23,42,0.08)]" />
                          <div className="h-3 w-5/6 rounded-full bg-[color:rgba(15,23,42,0.08)]" />
                          <div className="h-3 w-2/3 rounded-full bg-[color:rgba(15,23,42,0.08)]" />
                        </div>
                        <div className="rounded-[20px] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(37,99,235,0.06),rgba(6,182,212,0.06))] p-4">
                          <div className="text-sm font-semibold text-[color:var(--text)]">Responsive mobile + web architecture</div>
                          <div className="mt-2 text-xs leading-6 text-[color:var(--muted)]">Minimal surfaces, precise spacing, and gentle motion.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-[color:var(--border)] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)] shadow-[0_12px_30px_-22px_rgba(15,23,42,0.3)] backdrop-blur md:flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--secondary)]" />
        Scroll for more
      </div>
    </section>
  );
}
