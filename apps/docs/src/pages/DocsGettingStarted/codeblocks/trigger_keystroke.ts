import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'MyFirstEgg',
  trigger: {
    type: 'keys',

    // Once a user types "nyan" anywhere on the page, the egg will activate
    keystrokes: ['n', 'y', 'a', 'n'],

    // Optional, controls whether to capture keystrokes when the user is
    // typing in editable elements (e.g. inputs, textareas, etc.)
    captureOnInputs: false,

    // Optional, listen to the keystrokes
    onKeydown: (event) => {
      console.log('Keystroke detected:', event.key)
    },
  },
})
