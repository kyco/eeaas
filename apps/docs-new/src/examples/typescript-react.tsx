import { useEffect } from 'react'

import { initializeEeaas } from '@eeaas/core'
import type { Trigger, UserEgg } from '@eeaas/core'

const trigger: Trigger = {
  type: 'keys',
  keystrokes: ['t', 'e', 's', 't'],
  onKeydown: (event) => {
    console.info('Keystroke detected:', event.key)
  },
}

const stopTrigger: Trigger = {
  type: 'keys',
  keystrokes: ['Escape'],
}

const myEgg: UserEgg = {
  name: 'TypeScript React',
  trigger,
  stopTrigger,
  onStart() {
    console.info('Easter egg activated!')
  },
  onStop() {
    console.info('Easter egg deactivated!')
  },
}

const eeaas = initializeEeaas()
const egg = eeaas.register(myEgg)

const App = () => {
  const { start, stop } = egg

  useEffect(() => {
    return () => {
      stop()
    }
  }, [stop])

  return (
    <div className="App">
      <h1>My React App</h1>
      <p>Type "test" to trigger the easter egg!</p>
      <p>Press "Escape" to stop the easter egg!</p>
      <button onClick={start}>Trigger</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App
