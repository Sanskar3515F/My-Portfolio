'use client';

import { motion } from 'framer-motion';
import { BentoGrid } from '@/components/bento-grid';
import { SectionHeading } from '@/components/section-heading';
import { SkillCard } from '@/components/skill-card';
import { skills } from '@/lib/data';

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Skills" title="The tools behind the ideas." description="A practical stack for turning ambitious concepts into polished, responsive products." />

        <BentoGrid className="mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45, delay: index * 0.04 }}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
