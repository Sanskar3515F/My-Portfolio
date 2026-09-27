'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/animated-counter';
import { GlassCard } from '@/components/glass-card';
import { SectionHeading } from '@/components/section-heading';

const stats = [
  { label: 'Projects Built', value: 3 },
  { label: 'Technologies Used', value: 9 },
  { label: 'AI Integrations', value: 2 },
  { label: 'Responsive Applications', value: 3 }
] as const;

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[color:var(--soft)] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About Me" title="I turn rough ideas into software people want to use." description="I'm Sanskar Moharkar, a Software Developer crafting fast mobile and web experiences with Flutter, Firebase, Next.js, REST APIs, and AI integrations." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <GlassCard className="relative h-full overflow-hidden border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 sm:p-7 lg:p-8">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-500" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">Education</p>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 ring-1 ring-emerald-500/20">In progress</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[color:var(--text)]">B.Tech in Computer Engineering</h3>
                <p className="mt-2 text-base text-[color:var(--muted)]">Pillai HOC College of Engineering &amp; Technology (PHCET)</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((stat, index) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }} className={`rounded-[22px] border p-5 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.22)] ${['border-blue-100 bg-blue-50/70', 'border-violet-100 bg-violet-50/70', 'border-cyan-100 bg-cyan-50/70', 'border-amber-100 bg-amber-50/70'][index]}`}>
                    <div className="text-3xl font-semibold tracking-[-0.05em] text-[color:var(--text)]">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="mt-2 text-sm font-medium text-[color:var(--muted)]">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid gap-5">
            <GlassCard className="overflow-hidden p-6 sm:p-7 lg:p-8">
              <div className="absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.15),transparent_72%)] blur-2xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--primary)]">Craft</p>
              <p className="mt-4 text-lg leading-8 text-[color:var(--text)] sm:text-xl">I focus on building software that feels calm, fast, and intuitive. The goal is not just shipping features, but making every screen feel intentional and well-composed.</p>
            </GlassCard>

            <GlassCard className="overflow-hidden p-0">
              <div className="border-b border-[color:var(--border)] bg-white/80 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">Work Principles</div>
              <div className="grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
                {['Clean architecture', 'Responsive UI', 'Purposeful motion', 'AI-first thinking'].map((item) => (
                  <div key={item} className="bg-white px-6 py-5 text-sm font-medium text-[color:var(--text)]">{item}</div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
