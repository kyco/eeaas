/**
 * This is the public egg format which users can define.
 */
export type UserEgg = {
  name: string
  enabled?: boolean
  onStart: () => void
  onStop: () => void
}

type InternalEgg = {
  name: string
  enabled: boolean
  onStart: () => void
  onStop: () => void
}

export type PublicEgg = {
  readonly name: string
  readonly enabled: boolean
  enable: () => void
  disable: () => void
  start: () => void
  stop: () => void
}

export type EeaasInstance = {
  eggs: Record<string, PublicEgg>
  register: (egg: UserEgg) => void
  get: (name: keyof EeaasInstance['eggs']) => PublicEgg | undefined
}

export function initializeEeaas(): EeaasInstance {
  const internalEggs: Record<string, InternalEgg> = {}
  const publicEggs: Record<string, PublicEgg> = {}

  const register = (egg: UserEgg) => {
    if (internalEggs[egg.name]) {
      console.warn(`[eeaas] Egg "${egg.name}" already registered!`)
      return
    }

    const internalEgg: InternalEgg = {
      ...egg,
      enabled: egg.enabled ?? true, // Enable by default and rather let users decide to not have it enabled when registering/initializing
    }

    const publicEgg: PublicEgg = {
      name: internalEgg.name,

      get enabled() {
        return internalEgg.enabled
      },

      enable() {
        internalEgg.enabled = true
      },

      disable() {
        internalEgg.enabled = false
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
