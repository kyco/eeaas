import type { KeystrokeCode } from './types_keys'

/**
 * This is the public egg format which users can define.
 */
export type UserEgg = {
  name: string
  enabled?: boolean
  trigger?: Trigger
  onStart: () => void
  onStop: () => void
}

export type PublicEgg = {
  readonly name: string
  readonly enabled: boolean
  readonly isActivated: boolean
  readonly trigger: Trigger
  enable: () => void
  disable: () => void
  start: () => void
  stop: () => void
}

export type EeaasInstance = {
  eggs: Record<string, PublicEgg>
  register: (egg: UserEgg) => void
  get: (name: keyof EeaasInstance['eggs']) => PublicEgg | undefined
}

export type Trigger =
  | {
      type: 'manual'
    }
  | {
      type: 'keys'
      keystrokes: KeystrokeCode[]
      ignoreInputElements?: boolean
    }
