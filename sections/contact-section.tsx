'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { AnimatedButton } from '@/components/animated-button';
import { GlassCard } from '@/components/glass-card';
import { SectionHeading } from '@/components/section-heading';

type FormState = { name: string; email: string; message: string };
const initialState: FormState = { name: '', email: '', message: '' };

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:sanskarmoharkar511@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
    setForm(initialState);
    window.setTimeout(() => setStatus('idle'), 2200);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Have a problem worth solving? Let’s build it." description="Send a message, share the challenge, and let's turn the next good idea into something real." />
        <div className="mx-auto mt-14 max-w-4xl">
          <GlassCard className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[{ label: 'Your name', key: 'name', type: 'text' }, { label: 'Your email', key: 'email', type: 'email' }].map((field) => (
                <div key={field.key} className="relative">
                  <input required type={field.type} value={form[field.key as keyof FormState]} onChange={(event) => setForm((current) => ({ ...current, [field.key]: event.target.value }))} className="peer w-full rounded-[22px] border border-[color:var(--border)] bg-white/85 px-5 pb-4 pt-7 text-[color:var(--text)] outline-none transition focus:border-[color:rgba(37,99,235,0.3)] focus:ring-4 focus:ring-[color:rgba(37,99,235,0.08)]" placeholder=" " />
                  <label className="pointer-events-none absolute left-5 top-4 text-sm text-[color:var(--muted)] transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[color:var(--primary)] peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-semibold">{field.label}</label>
                </div>
              ))}
              <div className="relative">
                <textarea required rows={6} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className="peer w-full rounded-[22px] border border-[color:var(--border)] bg-white/85 px-5 pb-4 pt-7 text-[color:var(--text)] outline-none transition focus:border-[color:rgba(37,99,235,0.3)] focus:ring-4 focus:ring-[color:rgba(37,99,235,0.08)]" placeholder=" " />
                <label className="pointer-events-none absolute left-5 top-4 text-sm text-[color:var(--muted)] transition-all peer-focus:top-3 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-[color:var(--primary)] peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:font-semibold">Your message</label>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <AnimatedButton type="submit" variant="primary" className="min-w-[180px]">{status === 'sending' ? 'Opening email...' : status === 'sent' ? 'Message ready' : 'Submit message'}</AnimatedButton>
                <p className="text-sm text-[color:var(--muted)]">Opens your email app addressed to sanskarmoharkar511@gmail.com.</p>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
