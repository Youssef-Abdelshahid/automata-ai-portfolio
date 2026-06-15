import { Reveal } from './Reveal';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <Reveal
      className={`mx-auto mb-7 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left md:mx-0'}`}
    >
      <p className="mb-3 text-xs font-bold uppercase text-cyanGlow">{eyebrow}</p>
      <h2 className="text-2xl font-black leading-tight text-slate-50 md:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base">{description}</p>
    </Reveal>
  );
}
