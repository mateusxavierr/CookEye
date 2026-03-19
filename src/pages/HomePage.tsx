import { motion } from 'framer-motion'
import { StoveHero } from '../components/stove/StoveHero'
import { FeatureGrid } from '../components/stove/FeatureGrid'
import { features } from '../data/features'

export function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <StoveHero />
      <FeatureGrid features={features} />
    </motion.main>
  )
}
