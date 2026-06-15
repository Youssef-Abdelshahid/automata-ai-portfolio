import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Microchip,
  PackageCheck,
  Sparkles,
  UploadCloud,
} from 'lucide-react';
import { hero, siteLinks, workflowSteps } from '../data/siteData';

const journeyIcons = [UploadCloud, Microchip, BrainCircuit, PackageCheck];

export function Hero() {
  return (
    <section id="overview" className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-4 pb-10 pt-28 md:px-6 md:pb-14 md:pt-28">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase text-cyan-100">
          <Sparkles className="h-4 w-4 text-cyanGlow" aria-hidden="true" />
          {hero.eyebrow}
        </div>
        <h1 className="text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{hero.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteLinks.website}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02]"
          >
            {hero.primaryCta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={siteLinks.github}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition hover:border-cyan-200/50 hover:bg-white/10"
          >
            {hero.secondaryCta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative mt-9"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      >
        <div className="absolute inset-x-10 -top-8 h-28 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="glass relative overflow-hidden rounded-2xl p-4 shadow-glow md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,231,249,.13),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(167,139,250,.16),transparent_30%)]" />
          <div className="relative rounded-xl border border-white/10 bg-slate-950/45 p-4 md:p-5">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-cyanGlow">Simple journey</p>
                  <h2 className="mt-1 text-xl font-black text-white md:text-2xl">From data to a working Edge AI demo.</h2>
                </div>
                <span className="w-fit rounded-full border border-violet-200/20 bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-100">
                  Expo ready
                </span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-4">
                {workflowSteps.map((step, index) => {
                  const Icon = journeyIcons[index] ?? Sparkles;
                  return (
                    <div key={step.label} className="relative">
                      {index < workflowSteps.length - 1 ? (
                        <ArrowRight className="absolute -right-3 top-6 hidden h-5 w-5 text-cyan-200/40 md:block" aria-hidden="true" />
                      ) : null}
                      <motion.div
                        className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-3 md:p-4"
                        whileHover={{ y: -4, borderColor: 'rgba(110, 231, 249, 0.38)' }}
                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyanGlow">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <p className="text-xs font-black uppercase text-violet-200">{step.label}</p>
                        <h3 className="mt-2 text-sm font-black leading-5 text-white">{step.title}</h3>
                        <p className="mt-2 text-xs leading-5 text-slate-300">{step.body}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
