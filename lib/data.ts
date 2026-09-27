export const site = {
  name: 'Sanskar Moharkar',
  role: 'Software Developer',
  location: 'Panvel, Navi Mumbai, Maharashtra',
  email: 'sanskarmoharkar511@gmail.com',
  phone: '+91 7219654229',
  github: 'github.com/Sanskar3515F'
} as const;

export const skills = [
  { name: 'Flutter & Dart', description: 'Responsive cross-platform interfaces with polished mobile motion.', accent: 'from-blue-500/20 via-cyan-400/10 to-transparent', icon: 'FD' },
  { name: 'Firebase', description: 'Authentication, data sync, and scalable app backends.', accent: 'from-emerald-500/20 via-teal-400/10 to-transparent', icon: 'FB' },
  { name: 'Next.js', description: 'Fast, SEO-friendly web apps with production-grade routing.', accent: 'from-indigo-500/20 via-sky-400/10 to-transparent', icon: 'NX' },
  { name: 'JavaScript', description: 'Robust front-end logic and clean interactive experiences.', accent: 'from-amber-500/20 via-orange-400/10 to-transparent', icon: 'JS' },
  { name: 'Responsive UI Design', description: 'Layouts tuned for desktop, tablet, and mobile rather than scaled down.', accent: 'from-fuchsia-500/20 via-pink-400/10 to-transparent', icon: 'UI' },
  { name: 'APIs', description: 'Well-structured requests, data flows, and integrations.', accent: 'from-slate-500/20 via-slate-300/10 to-transparent', icon: 'API' },
  { name: 'Git & GitHub', description: 'Version control and collaborative workflows.', accent: 'from-violet-500/20 via-purple-400/10 to-transparent', icon: 'GH' },
  { name: 'Razorpay Integration', description: 'Payments with careful checkout experiences.', accent: 'from-rose-500/20 via-red-400/10 to-transparent', icon: 'RP' },
] as const;
export const projects = [
  {
    name: 'Sanskar Moharkar Portfolio',
    subtitle: 'Personal Developer Portfolio',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'A modern portfolio designed to showcase my projects, technical skills, education, and experience through a responsive interface with purposeful motion.',
    features: ['Responsive design', 'Animated interactions', 'Project showcase', 'Downloadable resume'],
    ctas: [{ label: 'Live Demo', href: '#' }, { label: 'GitHub', href: '#' }],
    image: '/images/hero-laptop.svg'
  },
  {
    name: 'EduEarn',
    subtitle: 'AI Student Helper & Notes Marketplace',
    tech: ['Flutter', 'Gemini API'],
    description: 'A Flutter application concept combining AI-powered quizzes, summaries, doubt solving, notes marketplace, authentication, payments, gamification, and student progress tracking.',
    features: ['AI quizzes', 'Notes marketplace', 'Payments', 'Progress tracking'],
    ctas: [{ label: 'Case Study', href: '#' }, { label: 'GitHub', href: '#' }],
    image: '/images/project-eduearn.svg'
  },
  {
    name: 'Quiz Management System',
    subtitle: 'Structured Assessment Platform',
    tech: ['Software Engineering'],
    description: 'A quiz management application featuring question management, scoring system, structured modules, and responsive interfaces built using software engineering concepts.',
    features: ['Question management', 'Scoring system', 'Structured modules', 'Responsive interfaces'],
    ctas: [{ label: 'View Project', href: '#' }, { label: 'GitHub', href: '#' }],
    image: '/images/project-quiz.svg'
  }
] as const;

export const journey = [
  'Started learning Flutter.',
  'Built responsive mobile applications.',
  'Learned Firebase and REST APIs.',
  'Built Next.js web applications.',
  'Integrated AI APIs into applications.'
] as const;

