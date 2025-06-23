import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

/**
 * The JS file exposes two methods on the window object which can
 * be used to launch and stop nyancat. The code can be viewed at:
 *
 * https://kyco.github.io/eeaas/example-nyancat.js
 * https://kyco.github.io/eeaas/example-nyancat.css
 */
const jsUrl = `/eeaas/example-nyancat.js`
const cssUrl = `/eeaas/example-nyancat.css`

eeaas.register({
  name: 'Nyancat',
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
    window.launchNyanCat()
  },

  onStop() {
    // @ts-expect-error does not exist on window
    window.cleanupNyanCat()
  },
})
