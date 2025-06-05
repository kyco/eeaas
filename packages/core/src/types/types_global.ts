import type { KeystrokeCode } from './types_keys'

export type Trigger =
  | { type: 'manual' }
  | { type: 'keys'; keystrokes: KeystrokeCode[]; captureOnInputs?: boolean }
  | { type: 'auto' } // TODO: Implement, trigger the start immediately after enabling the easter egg

export type KeystrokePattern = {
  keystrokes: KeystrokeCode[]
  callback: () => void
  captureOnInputs?: boolean
}

export type ResourceType = 'css' | 'script'

type BaseResource = {
  type: ResourceType
  id: string
}

export type Resource =
  | (BaseResource & { content: string; url?: never; path?: never })
  | (BaseResource & { content?: never; url: string; path?: never })
  | (BaseResource & { content?: never; url?: never; path: string })

/**
 * This is the public egg format which users can define.
 */
export type UserEgg = {
  name: string
  enabled?: boolean
  trigger?: Trigger
  stopTrigger?: Trigger
  resources?: Resource[]
  onStart: () => void | Promise<void>
  onStop: () => void | Promise<void>
}

export type PublicEgg = {
  readonly name: string
  readonly enabled: boolean
  readonly isActivated: boolean
  readonly trigger: Trigger
  readonly stopTrigger: Trigger
  enable: () => void
  disable: () => void
  start: () => Promise<void>
  stop: () => Promise<void>
}

export type EeaasInstance = {
  eggs: Record<string, PublicEgg>
  register: (egg: UserEgg) => void
  get: (name: keyof EeaasInstance['eggs']) => PublicEgg | undefined
}
