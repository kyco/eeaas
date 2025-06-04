import type { Trigger } from './types_global'

export type InternalEgg = {
  name: string
  enabled: boolean
  trigger: Trigger
  onStart: () => void
  onStop: () => void
}
