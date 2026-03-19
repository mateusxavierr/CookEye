import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { FeatureMeta } from '../../data/features'
import { iconByFeatureId } from '../../data/icons'

type FeatureGridProps = {
  features: FeatureMeta[]
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <section className="mx-auto mt-10 max-w-6xl">
      <div className="mb-5 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Explore os recursos</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          8 funcionalidades inteligentes
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.div key={feature.id} variants={item}>
            <Link
              to={`/${feature.rota}`}
              className="group flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white/70 p-3.5 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 p-2">
                <img
                  src={iconByFeatureId[feature.id]}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{feature.titulo}</p>
                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
                  {feature.funcao}
                </p>
              </div>
              <ChevronRight
                size={14}
                className="mt-0.5 shrink-0 text-slate-300 transition-colors group-hover:text-blue-500"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
