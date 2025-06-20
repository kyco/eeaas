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

export type Resource =
  | { type: ResourceType; content: string; url?: never }
  | { type: ResourceType; content?: never; url: string }

export type LoadedResource = Resource & {
  id: string
  element: HTMLStyleElement | HTMLLinkElement | HTMLScriptElement
}

/**
 * This is the egg format which users will use to register eggs.
 */
export type UserEgg = {
  name: string
  enabled?: boolean
  trigger?: Trigger
  stopTrigger?: Trigger
  resources?: Resource[]
  onStart?: (loadedResources: LoadedResource[]) => void | Promise<void>
  onStop?: (loadedResources: LoadedResource[]) => void | Promise<void>
}

/**
 * Once registered this is the egg format which users can access to mange their egg.
 */
export type PublicEgg = {
  readonly name: string
  readonly enabled: boolean
  readonly isActivated: boolean
  readonly loadedResources: LoadedResource[]
  enable: () => void
  disable: () => void
  start: () => Promise<void>
  stop: () => Promise<void>
  subscribe: (callback: () => void) => () => void
  unsubscribe: (callback: () => void) => void
}

export type EeaasInstance = {
  eggs: Record<string, PublicEgg>
  register: (egg: UserEgg) => void
  get: (name: keyof EeaasInstance['eggs']) => PublicEgg | undefined
  getInstance: () => {
    eggs: Record<string, PublicEgg>
  }
}
