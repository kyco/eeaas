import type { Trigger, Resource } from './types_global'

export type InternalEgg = {
  name: string
  enabled: boolean
  isActivated: boolean
  trigger: Trigger
  resources?: Resource[]
  onStart: () => void
  onStop: () => void
}
