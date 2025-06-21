import { LogConfig } from './types'

let debugLevel: LogConfig = false

export const CONFIG = {
  get DEBUG() {
    return debugLevel
  },
  set DEBUG(value: LogConfig) {
    debugLevel = value
  },
}
