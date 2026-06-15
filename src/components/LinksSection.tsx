import { ArrowUpRight } from 'lucide-react';
import { demoLinks } from '../data/siteData';
import { iconMap } from './icons';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function LinksSection() {
  return (
    <section id="links" className="section-shell">
      <SectionHeader
        eyebrow="LINKS"
        title="Open the project details."
        description="Quick access to the website, source code, paper, video, and presentation."
      />
      <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {demoLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.title}
              href={link.href}
              className="glass group rounded-lg p-4 transition hover:-translate-y-1 hover:border-cyan-200/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-violet-200/20 bg-violet-400/10 text-cyanGlow">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-cyanGlow" />
              </div>
              <h3 className="text-base font-black text-white">{link.title}</h3>
              <p className="mt-2 hidden break-words text-xs leading-5 text-slate-400 sm:block">{link.href}</p>
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}
