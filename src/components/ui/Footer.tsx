export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 sm:flex-row sm:justify-between sm:px-8 md:px-12">
        <p className="text-xs text-slate-400">
          CookEye &mdash; Fogao Inteligente com Interface Integrada
        </p>
        <p className="text-xs text-slate-400">
          Projeto Academico &middot; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
