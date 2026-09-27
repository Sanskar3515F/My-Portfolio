'use client';

import { motion } from 'framer-motion';
import { site } from '@/lib/data';

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-[#0b1220] py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-300">One more thing</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">Make the next screen count.</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">Have an idea, a product, or a problem that needs a fresh point of view? I&apos;d love to hear it.</p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="mailto:sanskarmoharkar511@gmail.com" aria-label="Email Sanskar Moharkar" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-1 hover:bg-cyan-200">Email me</a>
            <a href={`https://${site.github}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10">View GitHub</a>
          </div>
        </motion.div>
      </div>

      <a href="#home" className="fixed bottom-6 right-6 z-[55] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/90 text-sm font-semibold text-[color:var(--text)] shadow-[0_16px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-1 hover:bg-white">↑</a>
    </footer>
  );
}
