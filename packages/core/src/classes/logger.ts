import type { DebugSetting, LogLevel } from '../types'

const COLORS: Record<LogLevel, string> = {
  force: '#2196f3',
  info: '#2196f3',
  warn: '#ff9800',
  error: '#d32f2f',
}

export class Logger {
  private debug: DebugSetting

  constructor(debug: DebugSetting = false) {
    this.debug = debug
  }

  private shouldLog(level: LogLevel): boolean {
    if (typeof this.debug === 'boolean') {
      return this.debug
    }
    if (Array.isArray(this.debug)) {
      return this.debug.includes(level)
    }
    if (typeof this.debug === 'string') {
      return this.debug === level
    }
    return false
  }

  private log(level: LogLevel, group: string, ...message: unknown[]): void {
    if (!this.shouldLog(level) && level !== 'error' && level !== 'force') {
      return
    }

    const color = COLORS[level]
    const style = `color: white; background-color: ${color}; padding: 2px 5px; border-radius: 2px`

    const logFn = level === 'error' ? console.error : level === 'warn' ? console.warn : console.info

    logFn(`%c${group}`, style, ...message)
  }

  force(group: string, ...message: unknown[]) {
    this.log('force', group, ...message)
  }

  info(group: string, ...message: unknown[]) {
    this.log('info', group, ...message)
  }

  warn(group: string, ...message: unknown[]) {
    this.log('warn', group, ...message)
  }

  error(group: string, ...message: unknown[]) {
    this.log('error', group, ...message)
  }
}
