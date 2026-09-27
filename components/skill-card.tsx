'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { GlowCard } from '@/components/ui/spotlight-card';

type SkillCardProps = {
  name: string;
  description: string;
  accent: string;
  icon: string;
};

export function SkillCard({ name, description, accent, icon }: SkillCardProps) {
  return (
    <motion.div whileHover={{ y: -8, rotateX: 5, rotateY: -5 }} transition={{ duration: 0.25 }} style={{ perspective: 1200 }}>
      <GlowCard customSize glowColor="blue" className="h-full min-h-[250px] overflow-hidden border-0 p-5 sm:p-6">
        <div className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 blur-2xl', accent)} />
        <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_70%)] blur-2xl animate-float" />
        <div className="relative space-y-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] border border-[color:var(--border)] bg-white/90 text-sm font-bold text-[color:var(--primary)] shadow-[0_12px_35px_-20px_rgba(15,23,42,0.25)]">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[color:var(--text)]">{name}</h3>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
