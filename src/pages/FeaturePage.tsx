import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { featureByRoute, features } from '../data/features'
import { featureDetails } from '../data/featureDetails'
import { iconByFeatureId } from '../data/icons'

export function FeaturePage() {
  const { rota } = useParams()

  if (!rota || !featureByRoute[rota]) {
    return <Navigate to="/nao-encontrado" replace />
  }

  const feature = featureByRoute[rota]
  const details = featureDetails[feature.id]
  const currentIndex = features.findIndex((f) => f.id === feature.id)
  const prev = currentIndex > 0 ? features[currentIndex - 1] : null
  const next = currentIndex < features.length - 1 ? features[currentIndex + 1] : null

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="mx-auto mt-8 max-w-5xl sm:mt-10"
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <ArrowLeft size={15} />
          Voltar
        </Link>

        <p className="text-xs font-medium text-slate-400">
          {currentIndex + 1} / {features.length}
        </p>
      </div>

      {/* Hero card */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="mt-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-soft"
      >
        <div className={`h-1.5 w-full bg-gradient-to-r ${details.accentFrom} ${details.accentTo}`} />

        <div className="p-6 sm:p-9">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${details.accentText}`}>
                Funcionalidade CookEye
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {feature.titulo}
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
                {details.descricao}
              </p>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 200 }}
              className={`shrink-0 rounded-2xl border border-slate-100 ${details.accentLight} p-4`}
            >
              <img
                src={iconByFeatureId[feature.id]}
                alt=""
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Info cards */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.16 }}
        className="mt-4 grid gap-4 sm:grid-cols-3"
      >
        <article className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm">
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${details.accentText}`}>
            Persona
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{feature.persona}</p>
        </article>

        <article className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm">
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${details.accentText}`}>
            Função
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{feature.funcao}</p>
        </article>

        <article className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm">
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${details.accentText}`}>
            Benefício
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{feature.beneficio}</p>
        </article>
      </motion.div>

      {/* Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.24 }}
        className="mt-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Destaques
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {details.destaques.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
              className="flex items-start gap-3"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${details.accentFrom} ${details.accentTo}`}
              >
                <Check size={12} className="text-white" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-slate-700">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Prev / Next navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-6 flex items-center justify-between"
      >
        {prev ? (
          <Link
            to={`/${prev.rota}`}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            {prev.titulo}
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            to={`/${next.rota}`}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            {next.titulo}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : (
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            Voltar ao fogão
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        )}
      </motion.div>
    </motion.main>
  )
}
