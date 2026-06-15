import { pipelineStages } from '../data/siteData';
import { iconMap } from './icons';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function Pipeline() {
  return (
    <section id="pipeline" className="section-shell">
      <SectionHeader
        eyebrow="HOW IT WORKS"
        title="A compact pipeline with hardware in the loop."
        description="Each stage keeps the next deployment step visible, so the final result is more than a trained model file."
      />
      <Reveal className="relative">
        <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-violet-300/0 lg:block" />
        <div className="grid gap-4 lg:grid-cols-7">
          {pipelineStages.map((stage, index) => {
            const Icon = iconMap[stage.icon];
            return (
              <article key={stage.title} className="glass relative rounded-lg p-5">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-violet-200/20 bg-violet-400/10 text-cyanGlow">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-xs font-black text-violet-200">0{index + 1}</p>
                <h3 className="mt-2 text-base font-black text-white">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{stage.body}</p>
              </article>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
