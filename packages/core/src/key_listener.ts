export class KeystrokeSequenceListener {
  private buffer: string[] = []
  private readonly sequence: string[]
  private readonly onMatch: () => void
  private readonly ignoreInputElements: boolean
  private listener: (e: KeyboardEvent) => void

  constructor(sequence: string[], onMatch: () => void, ignoreInputElements = false) {
    this.sequence = sequence.map((key) => key.toLowerCase())
    this.onMatch = onMatch
    this.ignoreInputElements = ignoreInputElements
    this.listener = this.handleKeyDown.bind(this)
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (
      this.ignoreInputElements &&
      (event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target instanceof HTMLElement && event.target.isContentEditable))
    ) {
      return
    }

    const key = event.key.toLowerCase()
    this.buffer.push(key)
    this.buffer = this.buffer.slice(-this.sequence.length)

    if (this.sequence.every((ikey, index) => ikey === this.buffer[index])) {
      this.onMatch()
      this.buffer = []
    }
  }

  public start() {
    document.addEventListener('keydown', this.listener)
  }

  public stop() {
    document.removeEventListener('keydown', this.listener)
  }
}
