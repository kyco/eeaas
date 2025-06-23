import { useEffect } from 'react'

import { initializeEeaas } from '@eeaas/core'
import type { Trigger, UserEgg } from '@eeaas/core'

const eeaas = initializeEeaas()

const trigger: Trigger = {
  type: 'keys',
  keystrokes: ['t', 'e', 's', 't'],
  onKeydown: (event) => {
    console.log('Keystroke detected:', event.key)
  },
}

const stopTrigger: Trigger = {
  type: 'keys',
  keystrokes: ['Escape'],
}

const myEgg: UserEgg = {
  name: 'MyFirstEgg',
  trigger,
  stopTrigger,
  onStart() {
    console.log('Easter egg activated!')
  },
  onStop() {
    console.log('Easter egg deactivated!')
  },
}

eeaas.register(myEgg)

function App() {
  const start = () => {
    eeaas.get('MyFirstEgg')?.start()
  }
  const stop = () => {
    eeaas.get('MyFirstEgg')?.stop()
  }

  useEffect(() => {
    return () => {
      stop()
    }
  }, [])

  return (
    <div className="App">
      <h1>Eeaas React TypeScript Example</h1>
      <p>Type "test" to trigger the easter egg!</p>
      <p>Press "Escape" to stop the easter egg!</p>
      <button onClick={start}>Trigger</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App
