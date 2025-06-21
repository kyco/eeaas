import { CONFIG } from '../config'
import type { LogLevel } from '../types'

const _logMessage = (category: LogLevel, group: string, ...message: unknown[]) => {
  const info = '#2196f3'
  const success = '#26c281'
  const warn = '#ff9800'
  const error = '#d32f2f'

  let color

  switch (category) {
    case 'error':
      color = error
      break
    case 'warn':
      color = warn
      break
    case 'success':
      color = success
      break
    default:
      color = info
  }

  if (category === 'error') {
    return console.error(
      `%c${group}`,
      `color: white; background-color: ${color}; padding: 2px 5px; border-radius: 2px`,
      ...message,
    )
  }

  console.info(
    `%c${group}`,
    `color: white; background-color: ${color}; padding: 2px 5px; border-radius: 2px`,
    ...message,
  )
}

export const logger = (category: LogLevel, group: string, ...message: unknown[]) => {
  if (
    (typeof CONFIG.DEBUG === 'boolean' && !CONFIG.DEBUG) ||
    (Array.isArray(CONFIG.DEBUG) && !CONFIG.DEBUG.includes(category)) ||
    (typeof CONFIG.DEBUG === 'string' && CONFIG.DEBUG !== category)
  ) {
    return
  }
  _logMessage(category, group, ...message)
}
