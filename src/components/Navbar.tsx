import { BrainCircuit, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, siteLinks } from '../data/siteData';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto max-w-6xl border border-white/10 bg-slate-950/70 px-3 py-2 shadow-glow backdrop-blur-xl transition-[border-radius] md:rounded-full ${
          open ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#overview" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/30 bg-white/5 text-cyanGlow">
              <BrainCircuit className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>Automata AI</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={siteLinks.website}
              className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-slate-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/10"
            >
              Open Website
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="mt-3 grid gap-1 rounded-2xl border border-white/10 bg-slate-950/95 p-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.website}
              className="rounded-xl bg-violet-500 px-4 py-3 text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Open Website
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
