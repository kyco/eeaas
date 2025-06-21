import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'MyFirstEgg',
  onStart() {
    console.log('Easter egg activated!')
  },
  onStop() {
    console.log('Easter egg deactivated!')
  }
})

eeaas.get('MyFirstEgg')?.start()
