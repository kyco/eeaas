import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

eeaas.register({
  name: 'test',
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
      content: `
        body {
          background-color: #000;
          color: #fff;
        }
      `,
    },
  ],
  onStart() {
    console.info('test started')
  },
  onStop() {
    console.info('test stopped')
  },
})
