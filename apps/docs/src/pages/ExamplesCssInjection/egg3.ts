import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

const cssUrl = `https://kyco.github.io/eeaas/example-url.css`

eeaas.register({
  name: 'CssInjectionUrl',
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
      type: 'css',
      url: cssUrl,
    },
  ],
})
