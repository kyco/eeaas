import type { EeaasInstance, PublicEgg, UserEgg, InternalEgg } from './types'
import { KeystrokeListener } from './classes'
import { CONFIG } from './config'
import { loadResources, removeResources } from './utils'

export const initializeEeaas = (): EeaasInstance => {
  const internalEggs: Record<string, InternalEgg> = {}
  const publicEggs: Record<string, PublicEgg> = {}

  const register = (egg: UserEgg) => {
    if (internalEggs[egg.name]) {
      if (CONFIG.DEBUG) {
        console.info(`[eeaas] Skipping registration, egg "${egg.name}" is already registered.`)
      }
      return
    }

    const internalEgg: InternalEgg = {
      ...egg,
      enabled: egg.enabled ?? true,
      isActivated: false,
      trigger: egg.trigger ?? { type: 'manual' },
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

      get trigger() {
        return internalEgg.trigger
      },

      enable() {
        if (internalEgg.trigger.type === 'keys') {
          keystrokeListener = new KeystrokeListener(
            internalEgg.trigger.keystrokes,
            () => publicEgg.start(),
            internalEgg.trigger.ignoreInputElements ?? false,
          )
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
          // Do not change the order here. Code in the `onStart` might rely on resources,
          // so only trigger the `onStart` after resources have been loaded.
          if (internalEgg.resources && internalEgg.resources.length) {
            await loadResources(internalEgg.resources)
          }
          await Promise.resolve(internalEgg.onStart())
          internalEgg.isActivated = true
        } catch (error) {
          console.error(`[eeaas] Error starting egg "${internalEgg.name}":`, error)
        }
      },

      async stop() {
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to stop! Egg "${internalEgg.name}" is not enabled.`)
          return
        }

        try {
          // Do not change the order here. Code in the `onStop` might still rely on resources,
          // so only remove resources after running the `onStop` method.
          await Promise.resolve(internalEgg.onStop())
          if (internalEgg.resources) {
            removeResources(internalEgg.resources)
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

    console.info(`[eeaas] Registered egg "${egg.name}"`)
  }

  const get = (name: keyof typeof publicEggs): PublicEgg | undefined => {
    const egg = publicEggs[name]
    if (!egg) {
      console.warn(`[eeaas] Egg "${name}" not found!`)
      return undefined
    }
    return egg
  }

  return {
    eggs: publicEggs,
    register,
    get,
  }
}
