import { ArrowUpRight } from 'lucide-react';
import { finalCta, siteLinks } from '../data/siteData';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section className="section-shell pb-10">
      <Reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 via-slate-950/70 to-cyan-400/10 p-8 text-center shadow-glow md:p-12">
        <div className="absolute inset-x-16 -top-32 h-48 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-black uppercase text-cyanGlow">Ready for the expo floor</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">{finalCta.title}</h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteLinks.website}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02]"
            >
              Open Website
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={siteLinks.github}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition hover:border-cyan-200/50 hover:bg-white/10"
            >
              View GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
