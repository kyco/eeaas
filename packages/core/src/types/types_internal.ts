import type { LoadedResource, Resource, Trigger } from './types_global'

export type InternalEgg = {
  name: string
  enabled: boolean
  isActivated: boolean
  trigger: Trigger
  stopTrigger: Trigger
  resources: Resource[]
  loadedResources: LoadedResource[]
  onStart?: (loadedResources: LoadedResource[]) => void | Promise<void>
  onStop?: (loadedResources: LoadedResource[]) => void | Promise<void>
}

export type LogLevel = 'warn' | 'info' | 'success' | 'error'

export type LogConfig = boolean | LogLevel | LogLevel[]
