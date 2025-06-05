import type { LoadedResource, KeystrokePattern, EeaasInstance, PublicEgg, UserEgg, InternalEgg } from './types'
import { KeystrokeListener } from './classes'
import { loadResources, removeResources, logger } from './utils'

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
      enabled: egg.enabled ?? true,
      isActivated: false,
      trigger: egg.trigger ?? { type: 'manual' },
      stopTrigger: egg.stopTrigger ?? { type: 'manual' },
      resources: egg.resources ?? [],
      loadedResources: [],
    }

    let keystrokeListener: KeystrokeListener | null = null

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
        internalEgg.enabled = true
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
      },

      async start() {
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to start! Egg "${internalEgg.name}" is not enabled.`)
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
          await Promise.resolve(internalEgg.onStart(loadedResources))
          internalEgg.loadedResources = loadedResources
          internalEgg.isActivated = true
        } catch (error) {
          console.error(`[eeaas] Error starting egg "${internalEgg.name}":`, error)
        }
      },

      async stop() {
        // TODO: When triggering the same egg multiple times ensure we correctly remove previous resources here
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to stop! Egg "${internalEgg.name}" is not enabled.`)
          return
        }

        try {
          // Do not change the order here. Code in the `onStop` might still rely on resources,
          // so only remove resources after running the `onStop` method.
          await Promise.resolve(internalEgg.onStop(internalEgg.loadedResources))
          if (internalEgg.resources) {
            removeResources(internalEgg.loadedResources)
          }
          internalEgg.isActivated = false
        } catch (error) {
          console.error(`[eeaas] Error stopping egg "${internalEgg.name}":`, error)
        }
      },
    }

    internalEggs[egg.name] = internalEgg
    publicEggs[egg.name] = publicEgg

    if (internalEgg.enabled && internalEgg.trigger.type === 'keys') {
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
