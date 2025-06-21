import { eeaas } from '../../utils/eeaas'

const pathToCssFile = `${import.meta.env.VITE_REACT_DEMO_SITE_BASENAME}/egg2.css`

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
