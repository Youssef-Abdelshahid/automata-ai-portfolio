import { outputItems } from '../data/siteData';
import { iconMap } from './icons';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function OutputsSection() {
  return (
    <section id="outputs" className="section-shell">
      <SectionHeader
        eyebrow="OUTPUTS"
        title="The result is a usable package."
        description="Automata AI is designed to produce the artifacts a team needs after model generation, not just a score in a notebook."
      />
      <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outputItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <article key={item.title} className="glass flex items-center gap-4 rounded-lg p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyanGlow">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-base font-black text-white">{item.title}</h3>
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}
