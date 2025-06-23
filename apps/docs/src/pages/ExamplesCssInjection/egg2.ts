import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

const pathToCssFile = `/eeaas/example-inline.css`

eeaas.register({
  name: 'CssInjectionPath',
  enabled: false,
  trigger: {
    type: 'keys',
    keystrokes: ['t', 'e', 's', 't', '2'],
  },
  stopTrigger: {
    type: 'keys',
    keystrokes: ['Escape'],
  },
  resources: [
    {
      type: 'css',
      url: pathToCssFile,
    },
  ],
})
