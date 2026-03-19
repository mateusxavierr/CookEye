import type { FeatureMeta } from '../../data/features'
import { StoveHotspot } from './StoveHotspot'

type StoveHotspotsProps = {
  features: FeatureMeta[]
}

export function StoveHotspots({ features }: StoveHotspotsProps) {
  return (
    <div className="absolute inset-0 z-20">
      {features.map((feature) => (
        <StoveHotspot key={feature.id} feature={feature} />
      ))}
    </div>
  )
}
