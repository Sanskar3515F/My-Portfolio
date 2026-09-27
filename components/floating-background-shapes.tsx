'use client';

export function FloatingBackgroundShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)] blur-3xl animate-drift" />
      <div className="absolute right-[-12%] top-12 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.1),transparent_68%)] blur-3xl animate-drift [animation-delay:-3s]" />
      <div className="absolute bottom-[-12%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.11),transparent_68%)] blur-3xl animate-drift [animation-delay:-6s]" />
      <div className="absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-[color:rgba(37,99,235,0.22)] shadow-[0_0_0_10px_rgba(37,99,235,0.05)] animate-float" />
      <div className="absolute right-[22%] top-[36%] h-2 w-2 rounded-full bg-[color:rgba(6,182,212,0.24)] shadow-[0_0_0_8px_rgba(6,182,212,0.05)] animate-float [animation-delay:-2s]" />
      <div className="absolute bottom-[16%] right-[14%] h-4 w-4 rounded-full bg-[color:rgba(124,58,237,0.18)] shadow-[0_0_0_12px_rgba(124,58,237,0.04)] animate-float [animation-delay:-4s]" />
    </div>
  );
}
