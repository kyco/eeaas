import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

const pathToJsFile = `/eeaas/example-inline.js`

eeaas.register({
  name: 'JavaScriptInjectionPath',
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
      type: 'script',
      url: pathToJsFile,
    },
  ],
})
