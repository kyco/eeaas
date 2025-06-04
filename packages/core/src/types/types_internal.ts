import type { Trigger } from './types_global'

export type InternalEgg = {
  name: string
  enabled: boolean
  isActivated: boolean
  trigger: Trigger
  onStart: () => void
  onStop: () => void
}
