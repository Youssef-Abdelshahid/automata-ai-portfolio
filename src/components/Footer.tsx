export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-10 pt-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
      <div className="flex items-center gap-2 font-bold text-slate-200">
        <img src="/logo.png" alt="Automata AI logo" width={24} height={24} className="h-6 w-6" />
        Automata AI
      </div>
      <p>Device-aware AutoML for deployable Edge AI models.</p>
    </footer>
  );
}
