import { useEffect } from 'react'

import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

const egg = eeaas.register({
  name: 'React',
  onStart() {
    console.log('Easter egg activated!')
  },
  onStop() {
    console.log('Easter egg deactivated!')
  },
})

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
      <button onClick={start}>Trigger</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App
