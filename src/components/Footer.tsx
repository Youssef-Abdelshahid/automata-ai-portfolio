import { asset } from '../lib/asset';

export function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pb-10 pt-7 md:px-6">
      <div className="flex flex-col items-center gap-4 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">
        <div className="flex items-center gap-2 font-bold text-slate-200">
          <img src={asset('/logo.png')} alt="Automata AI logo" width={24} height={24} className="h-6 w-6" />
          Automata AI
        </div>
        <p className="max-w-xs md:max-w-none">Device-aware AutoML for deployable Edge AI models.</p>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Graduation Project 2025 / 2026</p>
      </div>
    </footer>
  );
}
