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
      className={`relative mx-auto mb-7 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left md:mx-0'}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-10 h-40 w-[420px] rounded-full bg-[radial-gradient(circle,rgba(161,96,235,.14),transparent_70%)] blur-2xl ${
          align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'
        }`}
      />
      <p className="relative mb-3 text-xs font-bold uppercase text-cyanGlow">{eyebrow}</p>
      <h2 className="relative text-2xl font-black leading-tight text-slate-50 md:text-4xl">{title}</h2>
      <p className="relative mt-3 text-sm leading-6 text-slate-300 md:text-base">{description}</p>
    </Reveal>
  );
}
