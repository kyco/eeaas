import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

eeaas.register({
  name: 'JavaScriptInjectionInline',
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
      type: 'script',
      content: `
        alert('Hello world!')
      `,
    },
  ],
})
