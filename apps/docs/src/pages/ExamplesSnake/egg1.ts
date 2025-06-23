import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas({ debug: true })

/**
 * The JS file exposes two methods on the window object which can
 * be used to launch and stop snake. The code can be viewed at:
 *
 * https://kyco.github.io/eeaas/example-snake.js
 * https://kyco.github.io/eeaas/example-snake.css
 */
const jsUrl = `/eeaas/example-snake.js`
const cssUrl = `/eeaas/example-snake.css`

eeaas.register({
  name: 'Snake',
  enabled: false,
  trigger: {
    type: 'keys',
    keystrokes: ['t', 'e', 's', 't'],
  },
  stopTrigger: {
    type: 'keys',
    keystrokes: ['Escape'],
  },

  resources: [
    {
      type: 'css',
      url: cssUrl,
    },
    {
      type: 'script',
      url: jsUrl,
    },
  ],

  onStart() {
    // @ts-expect-error does not exist on window
    window.launchSnake()
  },

  onStop() {
    // @ts-expect-error does not exist on window
    window.cleanupSnake()
  },
})
