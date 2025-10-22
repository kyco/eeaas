type Trigger =
  | { type: 'manual' } // Default, activate via start() method
  | { type: 'auto' } // Activates immediately when enabled
  | {
      type: 'keys' // Activated by keyboard sequence
      keystrokes: KeystrokeCode[] // Array of keys to press
      captureOnInputs?: boolean // Listen on input fields (defaults to true)
      onKeydown?: (event: KeyboardEvent) => void // Callback to listen to the keystroke events
    }
