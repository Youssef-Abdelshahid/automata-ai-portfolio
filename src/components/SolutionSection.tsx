import { motion } from 'framer-motion';
import { solutionFlow } from '../data/siteData';
import { iconMap } from './icons';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function SolutionSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <SectionHeader
          align="left"
          eyebrow="THE APPROACH"
          title="One guided route from raw data to deployable bundle."
          description="Automata AI treats device constraints as first-class inputs, then carries them through preprocessing, search, optimization, packaging, and reporting."
        />
        <Reveal className="relative">
          <div className="absolute left-6 right-6 top-1/2 hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-violet-300/0 md:block" />
          <div className="grid gap-3 md:grid-cols-5">
            {solutionFlow.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.title}
                  className="glass relative rounded-lg p-4 text-center"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyanGlow shadow-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold uppercase text-violet-200">Step {index + 1}</p>
                  <h3 className="mt-2 text-sm font-black leading-5 text-white">{step.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
