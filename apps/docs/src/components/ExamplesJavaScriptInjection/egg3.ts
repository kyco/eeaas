import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

const jsUrl = `https://kyco.github.io/eeaas/example-url.js`

eeaas.register({
  name: 'JavaScriptInjectionUrl',
  enabled: false,
  trigger: {
    type: 'keys',
    keystrokes: ['t', 'e', 's', 't', '3'],
  },
  stopTrigger: {
    type: 'keys',
    keystrokes: ['Escape'],
  },
  resources: [
    {
      type: 'script',
      url: jsUrl,
    },
  ],
})
