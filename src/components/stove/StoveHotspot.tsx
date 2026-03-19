import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { FeatureMeta } from '../../data/features'

type StoveHotspotProps = {
  feature: FeatureMeta
}

export function StoveHotspot({ feature }: StoveHotspotProps) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const debugHotspots = false

  return (
    <motion.button
      type="button"
      aria-label={`Abrir recurso ${feature.titulo}`}
      onClick={() => navigate(`/${feature.rota}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group absolute z-20 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        debugHotspots ? 'border border-red-500 bg-red-500/15' : 'border border-transparent bg-transparent'
      }`}
      style={{
        top: `${feature.hotspot.top}%`,
        left: `${feature.hotspot.left}%`,
        width: `${feature.hotspot.width}%`,
        height: `${feature.hotspot.height}%`,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      <span className="absolute inset-0 rounded-md bg-blue-500/0 transition-colors duration-200 group-hover:bg-blue-500/10" />

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-200 bg-white/95 px-2 py-1 text-[11px] font-medium text-ink shadow-sm"
          >
            {feature.titulo}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
