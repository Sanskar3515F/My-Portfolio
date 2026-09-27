import { CursorGlowLayer } from '@/components/cursor-glow-layer';
import { FloatingBackgroundShapes } from '@/components/floating-background-shapes';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { SiteHeader } from '@/components/site-header';
import { AboutSection } from '@/sections/about-section';
import { ContactSection } from '@/sections/contact-section';
import { FooterSection } from '@/sections/footer-section';
import { HeroSection } from '@/sections/hero-section';
import { JourneySection } from '@/sections/journey-section';
import { ProjectsSection } from '@/sections/projects-section';
import { SkillsSection } from '@/sections/skills-section';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[color:var(--background)] text-[color:var(--text)]">
      <CursorGlowLayer />
      <FloatingBackgroundShapes />
      <ScrollProgressBar />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
