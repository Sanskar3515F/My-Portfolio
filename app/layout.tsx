import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteProvider } from '@/components/site-provider';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://sanskar-moharkar-portfolio.vercel.app'),
  title: { default: 'Sanskar Moharkar | Software Developer', template: '%s | Sanskar Moharkar' },
  description: 'Premium portfolio website for Sanskar Moharkar, a Software Developer focused on Flutter, Firebase, Next.js, REST APIs, and AI integrations.',
  keywords: ['Sanskar Moharkar', 'Software Developer', 'Flutter', 'Firebase', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Sanskar Moharkar' }],
  creator: 'Sanskar Moharkar',
  openGraph: { title: 'Sanskar Moharkar | Software Developer', description: 'Premium light-themed portfolio website with smooth motion and polished case studies.', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Sanskar Moharkar | Software Developer', description: 'Premium light-themed portfolio website with smooth motion and polished case studies.' }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
