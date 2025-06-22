import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'MyFirstEgg',
  trigger: {
    type: 'manual',
  },
})

// You must call the `.start()` method in order to activate the egg
eeaas.get('MyFirstEgg')?.start()
