import type { EeaasInstance, PublicEgg, UserEgg, InternalEgg } from './types'
import { KeystrokeSequenceListener } from './key_listener'
import { CONFIG } from './config'

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

    let keystrokeListener: KeystrokeSequenceListener | null = null

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
          keystrokeListener = new KeystrokeSequenceListener(
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

      start() {
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to start! Egg "${internalEgg.name}" is not enabled.`)
          return
        }
        internalEgg.onStart() // TODO: Allow async
        internalEgg.isActivated = true
      },

      stop() {
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to stop! Egg "${internalEgg.name}" is not enabled.`)
          return
        }
        internalEgg.onStop() // TODO: Allow async
        internalEgg.isActivated = false
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
