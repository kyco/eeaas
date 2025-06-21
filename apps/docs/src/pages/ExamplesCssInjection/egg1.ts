import { eeaas } from '../../utils/eeaas'

eeaas.register({
  name: 'CssInjectionInline',
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
      content: `
        body {
          background-color: #4ecdc4;
          color: #fff;
        }
      `,
    },
  ],
})
