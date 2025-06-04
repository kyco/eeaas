import type { EeaasInstance, PublicEgg, UserEgg, InternalEgg } from './types'
import { KeystrokeSequenceListener } from './key_listener'

export const initializeEeaas = (): EeaasInstance => {
  const internalEggs: Record<string, InternalEgg> = {}
  const publicEggs: Record<string, PublicEgg> = {}

  const register = (egg: UserEgg) => {
    if (internalEggs[egg.name]) {
      console.warn(`[eeaas] Egg "${egg.name}" already registered!`)
      return
    }

    const internalEgg: InternalEgg = {
      ...egg,
      enabled: egg.enabled ?? true,
      trigger: egg.trigger ?? { type: 'manual' },
    }

    let keystrokeListener: KeystrokeSequenceListener | null = null

    const publicEgg: PublicEgg = {
      name: internalEgg.name,

      get enabled() {
        return internalEgg.enabled
      },

      get trigger() {
        return internalEgg.trigger
      },

      enable() {
        internalEgg.enabled = true
        if (internalEgg.trigger.type === 'keys') {
          keystrokeListener = new KeystrokeSequenceListener(
            internalEgg.trigger.keystrokes,
            () => publicEgg.start(),
            internalEgg.trigger.ignoreInputElements ?? false,
          )
          keystrokeListener.start()
        }
      },

      disable() {
        internalEgg.enabled = false
        if (keystrokeListener) {
          keystrokeListener.stop()
          keystrokeListener = null
        }
      },

      start() {
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to start! Egg "${internalEgg.name}" is not enabled.`)
          return
        }
        internalEgg.onStart()
      },

      stop() {
        if (!internalEgg.enabled) {
          console.warn(`[eeaas] Failed to stop! Egg "${internalEgg.name}" is not enabled.`)
          return
        }
        internalEgg.onStop()
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
