import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mx-auto mt-20 max-w-xl"
    >
      <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 text-center shadow-soft">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50">
          <span className="text-3xl">🍳</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">CookEye</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
          Pagina nao encontrada
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Essa rota nao existe na demonstracao interativa do CookEye.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <ArrowLeft size={15} />
          Voltar ao inicio
        </Link>
      </div>
    </motion.main>
  )
}
