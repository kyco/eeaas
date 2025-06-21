import type { LoadedResource, ResourceWithId, Trigger, UserEgg } from './types_global'

export type InternalEgg = Pick<UserEgg, 'name' | 'onStart' | 'onStop'> & {
  trigger: Trigger
  stopTrigger: Trigger
  isEnabled: boolean
  isActivated: boolean
  resourcesToLoad: ResourceWithId[]
  loadedResources: LoadedResource[]
}

export type LogLevel = 'warn' | 'info' | 'success' | 'error'

export type LogConfig = boolean | LogLevel | LogLevel[]
