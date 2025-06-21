import { KeystrokeListener } from './classes'
import type { EeaasInstance, InternalEgg, KeystrokePattern, LoadedResource, PublicEgg, UserEgg } from './types'
import { loadResources, logger, removeResources } from './utils'

export const initializeEeaas = (): EeaasInstance => {
  const internalEggs: Record<string, InternalEgg> = {}
  const publicEggs: Record<string, PublicEgg> = {}

  const register = (egg: UserEgg) => {
    if (internalEggs[egg.name]) {
      logger('info', 'eeaas', `Skipping registration, egg "${egg.name}" is already registered.`)
      return
    }

    const internalEgg: InternalEgg = {
      ...egg,
      enabled: egg.enabled ?? true, // TODO: Refactor to `isEnabled`
      isActivated: false,
      trigger: egg.trigger ?? { type: 'manual' },
      stopTrigger: egg.stopTrigger ?? { type: 'manual' },
      resources: egg.resources ?? [],
      loadedResources: [],
    }

    let keystrokeListener: KeystrokeListener | null = null
    const pubSubListeners = new Set<() => void>()

    const notifySubscribers = () => {
      for (const listener of pubSubListeners) {
        try {
          listener()
        } catch (e) {
          console.error(`[eeaas] Error in listener for egg "${egg.name}":`, e)
        }
      }
    }

    const publicEgg: PublicEgg = {
      name: internalEgg.name,

      get enabled() {
        return internalEgg.enabled
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
            })
          }

          if (internalEgg.stopTrigger.type === 'keys') {
            patterns.push({
              keystrokes: internalEgg.stopTrigger.keystrokes,
              callback: () => publicEgg.stop(),
              captureOnInputs: internalEgg.stopTrigger.captureOnInputs ?? true,
            })
          }

          keystrokeListener = new KeystrokeListener(patterns)
          keystrokeListener.start()
        }

        if (internalEgg.trigger.type === 'auto') {
          internalEgg.enabled = true
          notifySubscribers()
          publicEgg.start()
          return
        }

        internalEgg.enabled = true
        notifySubscribers()
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

        internalEgg.enabled = false
        notifySubscribers()
      },

      async start() {
        if (!internalEgg.enabled) {
          logger('warn', 'eeaas', `Failed to start! Egg "${internalEgg.name}" is not enabled.`)
          return
        }

        if (internalEgg.isActivated) {
          if (typeof internalEgg.onStart === 'function') {
            await internalEgg.onStart(internalEgg.loadedResources)
          }
          return
        }

        try {
          let loadedResources: LoadedResource[] = []
          // Do not change the order here. Code in the `onStart` might rely on resources,
          // so only trigger the `onStart` after resources have been loaded.
          if (internalEgg.resources && internalEgg.resources.length) {
            // TODO: Add logic to ensure the same resources are not loaded multiple times (check ID and also actual paths, show error if IDs clash)
            loadedResources = await loadResources(internalEgg.resources)
          }
          if (typeof internalEgg.onStart === 'function') {
            await internalEgg.onStart(loadedResources)
          }
          internalEgg.loadedResources = loadedResources
          internalEgg.isActivated = true
          notifySubscribers()
        } catch (error) {
          console.error(`[eeaas] Error starting egg "${internalEgg.name}":`, error)
        }
      },

      async stop() {
        // TODO: When triggering the same egg multiple times ensure we correctly remove previous resources here
        if (!internalEgg.isActivated) {
          return
        }

        try {
          // Do not change the order here. Code in the `onStop` might still rely on resources,
          // so only remove resources after running the `onStop` method.
          if (typeof internalEgg.onStop === 'function') {
            await internalEgg.onStop(internalEgg.loadedResources)
          }
          if (internalEgg.resources) {
            removeResources(internalEgg.loadedResources)
          }
          internalEgg.isActivated = false
          notifySubscribers()
        } catch (error) {
          console.error(`[eeaas] Error stopping egg "${internalEgg.name}":`, error)
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

    internalEggs[egg.name] = internalEgg
    publicEggs[egg.name] = publicEgg

    if (internalEgg.enabled) {
      publicEgg.enable()
    }

    logger('info', 'eeaas', `Registered egg "${egg.name}"`)
  }

  const get = (name: keyof typeof publicEggs): PublicEgg | undefined => {
    const egg = publicEggs[name]
    if (!egg) {
      console.warn(`[eeaas] Egg "${name}" not found!`)
      return undefined
    }
    return egg
  }

  const getInstance = () => {
    return {
      eggs: publicEggs,
    }
  }

  return {
    eggs: publicEggs,
    register,
    get,
    getInstance,
  }
}
