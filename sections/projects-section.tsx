'use client';

import { motion } from 'framer-motion';
import { MarqueeStrip } from '@/components/marquee-strip';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-[color:var(--soft)] py-24 sm:py-28 lg:py-32">
      <MarqueeStrip text="Flutter • Firebase • Next.js • REST APIs • AI Integrations • Responsive UI Design" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Projects" title="Three builds. One obsession: making software feel effortless." description="A few products I've designed and shipped across mobile, web, finance, education, and AI." className="pt-16" />

        <div className="mt-14 grid gap-6">
          {projects.map((project, index) => (
            <motion.div key={project.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.05 }}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
