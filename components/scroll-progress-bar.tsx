'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.18 });

  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--secondary)] to-[color:var(--highlight)]" style={{ scaleX }} />;
}
