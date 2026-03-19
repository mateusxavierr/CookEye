import { motion } from 'framer-motion'

export function StoveHero() {
  const stoveImageSrc = `${import.meta.env.BASE_URL}stove.jpg`

  return (
    <section className="mx-auto mt-8 w-full max-w-6xl sm:mt-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-6 text-center"
      >
        <p className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">CookEye</p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
          Fogão Inteligente com Interface Integrada
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
          Toque nos ícones do fogão para explorar cada funcionalidade do sistema inteligente.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-2 sm:p-3"
      >
        <div className="relative mx-auto max-w-5xl">
          <img
            src={stoveImageSrc}
            alt="Fogão inteligente CookEye"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
