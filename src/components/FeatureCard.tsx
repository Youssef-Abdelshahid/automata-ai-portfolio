import { motion } from 'framer-motion';
import type { IconName } from '../data/siteData';
import { iconMap } from './icons';

type FeatureCardProps = {
  icon: IconName;
  title: string;
  body?: string;
  compact?: boolean;
};

export function FeatureCard({ icon, title, body, compact = false }: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.article
      className="glass group h-full rounded-lg p-5"
      whileHover={{ y: -6, borderColor: 'rgba(110, 231, 249, 0.42)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-violet-300/20 bg-violet-400/10 text-cyanGlow shadow-cyan">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className={`${compact ? 'text-base' : 'text-lg'} font-bold text-slate-50`}>{title}</h3>
      {body ? <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p> : null}
    </motion.article>
  );
}
