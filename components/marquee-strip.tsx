import { cn } from '@/utils/cn';

export function MarqueeStrip({ text, className }: { text: string; className?: string }) {
  const items = Array.from({ length: 10 }, (_, index) => `${text} ${index % 2 === 0 ? '•' : '◦'}`);

  return (
    <div className={cn('overflow-hidden border-y border-[color:var(--border)] bg-white/70 py-4 backdrop-blur', className)}>
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted)]">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
