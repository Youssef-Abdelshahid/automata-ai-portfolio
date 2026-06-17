import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, siteLinks } from '../data/siteData';
import { asset } from '../lib/asset';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto max-w-6xl border border-white/10 bg-slate-950/70 px-3 py-2 shadow-glow backdrop-blur-xl transition-[border-radius] md:rounded-full ${
          open ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="relative flex items-center justify-between gap-3">
          <a href="#overview" className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-bold text-white">
            <img src={asset('/logo.png')} alt="Automata AI logo" width={36} height={36} className="h-9 w-9" />
            <span>Automata AI</span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 text-sm font-semibold text-slate-300 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-violet-400 after:to-cyan-300 after:transition-all after:duration-300 hover:after:w-6"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={siteLinks.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-xs font-extrabold text-white shadow-glow transition hover:scale-[1.03]"
            >
              Open Website
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
