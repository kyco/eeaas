import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'MyFirstEgg',
  trigger: {
    // The egg will activate immediately
    type: 'auto',
  },
})
