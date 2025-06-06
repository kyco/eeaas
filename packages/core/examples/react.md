# React Example

```tsx
// App.tsx
import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'ReactEgg',
  trigger: {
    type: 'keys',
    keystrokes: ['r', 'e', 'a', 'c', 't'],
    captureOnInputs: false
  },
  resources: [
    {
      type: 'css',
      content: `
        .rainbow-mode {
          animation: rainbow 2s linear infinite;
        }
      `
    }
  ],
  onStart() {
    document.body.classList.add('rainbow-mode')
  },
  onStop() {
    document.body.classList.remove('rainbow-mode')
  }
})

function App() {
  const handleStart = () => {
    const egg = eeaas.get('ReactEgg')
    egg?.start()
  }

  const handleStop = () => {
    const egg = eeaas.get('ReactEgg')
    egg?.stop()
  }

  return (
    <div>
      Your React App
      <button onClick={handleStart}>Activate Easter Egg</button>
      <button onClick={handleStop}>Deactivate Easter Egg</button>
    </div>
  )
}
```
