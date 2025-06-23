import { useEffect } from 'react'

import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'MyFirstEgg',
  onStart() {
    console.log('Easter egg activated!')
  },
  onStop() {
    console.log('Easter egg deactivated!')
  },
})

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
      <h1>My React App</h1>
      <button onClick={start}>Trigger</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App
