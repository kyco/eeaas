import { KeystrokeListener } from './classes'
import { CONFIG } from './config'
import type {
  EeaasInstance,
  EeaasInstanceProps,
  InternalEgg,
  KeystrokePattern,
  LoadedResource,
  PublicEgg,
  UserEgg,
} from './types'
import { loadResources, logger, removeResources } from './utils'
import { generateResourceWithId, isResourceLoaded } from './utils/resource_loader_helper'

export const initializeEeaas = ({ debug = false }: EeaasInstanceProps = {}): EeaasInstance => {
  CONFIG.DEBUG = debug
  const internalEggs: Record<string, InternalEgg> = {}
  const publicEggs: Record<string, PublicEgg> = {}

  const register = (userEgg: UserEgg) => {
    if (internalEggs[userEgg.name]) {
      logger('warn', 'eeaas', `Egg "${userEgg.name}" is already registered, re-registering...`)
      publicEggs[userEgg.name].disable()
    }

    const internalEgg: InternalEgg = {
      name: userEgg.name,
      trigger: userEgg.trigger || { type: 'manual' },
      stopTrigger: userEgg.stopTrigger || { type: 'manual' },
      onStart: userEgg.onStart,
      onStop: userEgg.onStop,
      allowMultipleInstances: userEgg.allowMultipleInstances ?? false,
      isEnabled: userEgg.enabled ?? true,
      isActivated: false,
      resourcesToLoad: userEgg.resources
        ? userEgg.resources.map((resource, index) => generateResourceWithId(userEgg, resource, index))
        : [],
      loadedResources: [],
    }

    let keystrokeListener: KeystrokeListener | null = null
    const pubSubListeners = new Set<() => void>()

    const notifySubscribers = () => {
      for (const listener of pubSubListeners) {
        try {
          listener()
        } catch (err) {
          logger('error', 'eeaas', `Error in listener for egg "${userEgg.name}":`, err)
        }
      }
    }

    const publicEgg: PublicEgg = {
      name: internalEgg.name,

      get isEnabled() {
        return internalEgg.isEnabled
      },

      get isActivated() {
        return internalEgg.isActivated
      },

      get loadedResources() {
        return internalEgg.loadedResources
      },

      enable() {
        if (internalEgg.trigger.type === 'keys' || internalEgg.stopTrigger.type === 'keys') {
          const patterns: KeystrokePattern[] = []

          if (internalEgg.trigger.type === 'keys') {
            patterns.push({
              keystrokes: internalEgg.trigger.keystrokes,
              callback: () => publicEgg.start(),
              captureOnInputs: internalEgg.trigger.captureOnInputs ?? true,
              onKeydown: internalEgg.trigger.onKeydown,
            })
          }

          if (internalEgg.stopTrigger.type === 'keys') {
            patterns.push({
              keystrokes: internalEgg.stopTrigger.keystrokes,
              callback: () => publicEgg.stop(),
              captureOnInputs: internalEgg.stopTrigger.captureOnInputs ?? true,
              onKeydown: internalEgg.stopTrigger.onKeydown,
            })
          }

          keystrokeListener = new KeystrokeListener(patterns)
          keystrokeListener.start()
        }

        internalEgg.isEnabled = true
        notifySubscribers()

        if (internalEgg.trigger.type === 'auto') {
          publicEgg.start()
        }
      },

      disable() {
        if (keystrokeListener) {
          keystrokeListener.stop()
          keystrokeListener = null
        }
        // TODO: Add flag to allow bypassing the "stop"
        if (internalEgg.isActivated) {
          publicEgg.stop()
        }

        internalEgg.isEnabled = false
        notifySubscribers()
      },

      async start() {
        if (!internalEgg.isEnabled) {
          logger('warn', 'eeaas', `Failed to start! Egg "${internalEgg.name}" is not enabled.`)
          return
        }

        if (internalEgg.isActivated) {
          if (typeof internalEgg.onStop === 'function' && !internalEgg.allowMultipleInstances) {
            await internalEgg.onStop(internalEgg.loadedResources)
          }
          if (typeof internalEgg.onStart === 'function') {
            await internalEgg.onStart(internalEgg.loadedResources)
          }
          return
        }

        try {
          let loadedResources: LoadedResource[] = []
          if (internalEgg.resourcesToLoad && internalEgg.resourcesToLoad.length) {
            const resourcesToLoad = internalEgg.resourcesToLoad.filter((resource) => !isResourceLoaded(resource.id))
            loadedResources = await loadResources(resourcesToLoad)
          }
          if (typeof internalEgg.onStart === 'function') {
            await internalEgg.onStart(loadedResources)
          }
          internalEgg.loadedResources = loadedResources
          internalEgg.isActivated = true
          notifySubscribers()
        } catch (error) {
          logger('error', 'eeaas', `Error starting egg "${internalEgg.name}":`, error)
        }
      },

      async stop() {
        if (!internalEgg.isActivated) {
          return
        }

        try {
          if (typeof internalEgg.onStop === 'function') {
            await internalEgg.onStop(internalEgg.loadedResources)
          }
          if (internalEgg.resourcesToLoad && internalEgg.resourcesToLoad.length) {
            removeResources(internalEgg.loadedResources)
          }
          internalEgg.isActivated = false
          notifySubscribers()
        } catch (error) {
          logger('error', 'eeaas', `Error stopping egg "${internalEgg.name}":`, error)
        }
      },

      subscribe(callback) {
        pubSubListeners.add(callback)
        return () => pubSubListeners.delete(callback)
      },

      unsubscribe(callback) {
        pubSubListeners.delete(callback)
      },
    }

    internalEggs[userEgg.name] = internalEgg
    publicEggs[userEgg.name] = publicEgg

    if (internalEgg.isEnabled) {
      publicEgg.enable()
    }

    logger('info', 'eeaas', `Registered egg "${userEgg.name}"`)
  }

  const get = (name: keyof typeof publicEggs): PublicEgg | undefined => {
    const egg = publicEggs[name]
    if (!egg) {
      logger('warn', 'eeaas', `Egg "${name}" not found!`)
      return undefined
    }
    return egg
  }

  const getAll = () => {
    return Object.values(publicEggs)
  }

  return {
    register,
    get,
    getAll,
  }
}
