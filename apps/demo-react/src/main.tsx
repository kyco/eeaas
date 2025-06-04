import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { initializeEeaas } from '@eeaas/core'

export const eeaas = initializeEeaas()

eeaas.register({
  name: 'test',
  enabled: false,
  trigger: { type: 'keys', keystrokes: ['n', 'y', 'a', 'n'] },
  onStart() {
    console.info('test started')
  },
  onStop() {
    console.info('test stopped')
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
