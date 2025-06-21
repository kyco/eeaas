import type { LogConfig } from './types_internal'
import type { KeystrokeCode } from './types_keys'

export type Trigger =
  | {
      type: 'manual'
    }
  | {
      type: 'keys'
      keystrokes: KeystrokeCode[]
      captureOnInputs?: boolean
      onKeydown?: (event: KeyboardEvent) => void
    }
  | {
      type: 'auto'
    }

export type KeystrokePattern = {
  keystrokes: KeystrokeCode[]
  callback: () => void
  captureOnInputs?: boolean
  onKeydown?: (event: KeyboardEvent) => void
}

export type ResourceType = 'css' | 'script'

export type Resource =
  | {
      type: ResourceType
      content: string
      url?: never
    }
  | {
      type: ResourceType
      content?: never
      url: string
    }

export type ResourceWithId = Resource & {
  id: string
}

export type LoadedResource = ResourceWithId & {
  element: HTMLStyleElement | HTMLLinkElement | HTMLScriptElement
}

/**
 * This is the egg format which users will use to register eggs.
 */
export type UserEgg = {
  name: string
  enabled?: boolean
  allowMultipleInstances?: boolean
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
  readonly isEnabled: boolean
  readonly isActivated: boolean
  readonly loadedResources: LoadedResource[]
  enable: () => void
  disable: () => void
  start: () => Promise<void>
  stop: () => Promise<void>
  subscribe: (callback: () => void) => () => void
  unsubscribe: (callback: () => void) => void
}

export type EeaasInstanceProps = {
  debug?: LogConfig
}

export type EeaasInstance = {
  register: (egg: UserEgg) => void
  get: (name: string) => PublicEgg | undefined
  getAll: () => PublicEgg[]
}
