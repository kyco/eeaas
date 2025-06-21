import type { KeystrokePattern } from '../types'

export class KeystrokeListener {
  private patterns: KeystrokePattern[]
  private buffer: string[] = []
  private isListening = false

  constructor(patterns: KeystrokePattern[]) {
    this.patterns = patterns
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  private isInputElement(target: EventTarget | null): boolean {
    return (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      (target instanceof HTMLElement && target.isContentEditable)
    )
  }

  private handleKeyDown(event: KeyboardEvent): void {
    this.buffer.push(event.key.toLowerCase())

    // We trim the buffer length to reduce memory usage, since we won't need more in
    // the buffer than the length of chars in the pattern.
    const maxLength = Math.max(...this.patterns.map((pattern) => pattern.keystrokes.length))
    if (this.buffer.length > maxLength) {
      this.buffer = this.buffer.slice(-maxLength)
    }

    const isInput = this.isInputElement(event.target)
    for (const pattern of this.patterns) {
      if (!pattern.captureOnInputs && isInput) {
        continue
      }

      if (typeof pattern.onKeydown === 'function') {
        pattern.onKeydown(event)
      }

      if (this.checkMatch(pattern.keystrokes)) {
        pattern.callback()
        this.buffer = []
        break
      }
    }
  }

  private checkMatch(keystrokes: string[]): boolean {
    if (this.buffer.length < keystrokes.length) {
      return false
    }
    return keystrokes.every((key, index) => {
      return this.buffer[this.buffer.length - keystrokes.length + index] === key.toLowerCase()
    })
  }

  public start(): void {
    if (!this.isListening) {
      document.addEventListener('keydown', this.handleKeyDown)
      this.isListening = true
    }
  }

  public stop(): void {
    document.removeEventListener('keydown', this.handleKeyDown)
    this.buffer = []
    this.isListening = false
  }
}
