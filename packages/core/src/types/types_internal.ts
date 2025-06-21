import type { LoadedResource, ResourceWithId, Trigger } from './types_global'

export type InternalEgg = {
  name: string
  trigger: Trigger
  stopTrigger: Trigger
  isEnabled: boolean
  isActivated: boolean
  allowMultipleInstances: boolean
  resourcesToLoad: ResourceWithId[]
  loadedResources: LoadedResource[]
  onStart?: (loadedResources: LoadedResource[]) => void | Promise<void>
  onStop?: (loadedResources: LoadedResource[]) => void | Promise<void>
}

export type LogLevel = 'warn' | 'info' | 'success' | 'error'

export type LogConfig = boolean | LogLevel | LogLevel[]
