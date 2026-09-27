'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedButton } from './animated-button';
import { GlassCard } from './glass-card';
import { cn } from '@/utils/cn';

type ProjectCardProps = {
  name: string;
  subtitle: string;
  tech: readonly string[];
  description: string;
  features: readonly string[];
  ctas: readonly { label: string; href: string }[];
  image: string;
  className?: string;
};

export function ProjectCard({ name, subtitle, tech, description, features, ctas, image, className }: ProjectCardProps) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.25, ease: 'easeOut' }} className={cn('group', className)}>
      <GlassCard className="h-full">
        <div className="grid min-w-0 gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-7">
          <div className="min-w-0 space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
              {tech.map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--primary)]">{subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold text-[color:var(--text)] sm:text-3xl">{name}</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">{description}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-white/75 px-4 py-3 text-sm text-[color:var(--text)]">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--secondary)]" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {ctas.map((cta, index) => (
                <AnimatedButton key={cta.label} href={cta.href} variant={index === 0 ? 'primary' : 'secondary'}>
                  {cta.label}
                </AnimatedButton>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-[color:var(--border)] bg-gradient-to-br from-[#eef4ff] via-white to-[#f8fbff] p-3 shadow-[0_18px_70px_-36px_rgba(37,99,235,0.3)]">
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(37,99,235,0.18),transparent_40%)]" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-white shadow-inner">
              <Image src={image} alt={`${name} screenshot placeholder`} fill className="object-cover transition duration-700 group-hover:scale-[1.06]" sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}
