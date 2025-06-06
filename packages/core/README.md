# Easter eggs as a service

A production ready and framework agnostic library to help bring back the magic of easter eggs into every app and website. Built with modern JavaScript.

## Installation

```bash
npm i @eeaas/core
```

## Features

- 🎯 Framework agnostic
- 🔑 Keyboard sequence triggers
- 🎨 Dynamic CSS injection
- 📜 Dynamic JavaScript injection
- ⚡ Async loading
- 🎮 Manual and automatic triggers

## Basic Usage

### Vanilla JavaScript

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<body>
  <script type="module">
    import { initializeEeaas } from '@eeaas/core'

    const eeaas = initializeEeaas()

    // Simple easter egg
    eeaas.register({
      name: 'SimpleEgg',
      trigger: {
        type: 'keys',
        keystrokes: ['h', 'e', 'y'],
      },
      stopTrigger: {
        type: 'keys',
        keystrokes: ['Escape'],
      },
      onStart() {
        alert('You found me!')
      },
      onStop() {
        alert('Goodbye!')
      }
    })

    // Easter egg with external resources
    eeaas.register({
      name: 'NyanCat',
      trigger: {
        type: 'keys',
        keystrokes: ['n', 'y', 'a', 'n'],
      },
      stopTrigger: {
        type: 'keys',
        keystrokes: ['Escape'],
      },
      resources: [
        {
          type: 'css',
          url: 'https://example.com/nyan-cat.css'
        },
        {
          type: 'script',
          url: 'https://example.com/nyan-cat.js'
        },
        {
          type: 'css',
          content: `
            .nyan-cat {
              position: fixed;
              bottom: 0;
              right: 0;
            }
          `
        }
      ],
      onStart(loadedResources) {
        console.log('Nyan cat activated!', loadedResources)
      },
      onStop() {
        console.log('Nyan cat removed')
      }
    })
  </script>
</body>
</html>
```

### React Example

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

## API Reference

### Initialisation

```typescript
import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()
```

The `initializeEeaas()` function creates a new instance of the easter egg service. This must be called before registering or using any eggs. It returns an instance with the following methods and properties:

### Instance Methods

Method | Returns | Description
-------|---------|-------------
`register(egg: UserEgg)` | `void` | Register a new easter egg
`get(name: string)` | `PublicEgg \| undefined` | Retrieve an egg instance by name
`getInstance()` | `{ eggs: Record<string, PublicEgg> }` | Get the global eeaas instance

### Egg Methods

Method | Returns | Description
-------|---------|-------------
`start()` | `Promise<void>` | Manually activate the egg
`stop()` | `Promise<void>` | Manually deactivate the egg
`enable()` | `void` | Enable egg triggers
`disable()` | `void` | Disable egg triggers


### Egg Properties

Property | Type | Required | Default | Description
---------|------|----------|---------|-------------
`name` | `string` | Yes | - | Unique identifier for the egg
`enabled` | `boolean` | No | `true` | Whether the egg is initially enabled
`trigger` | [`Trigger`](#trigger-types) | No | `{ type: 'manual' }` | How the egg is activated
`stopTrigger` | [`Trigger`](#trigger-types) | No | `{ type: 'manual' }` | How the egg is deactivated
`resources` | [`Resource[]`](#resource-types) | No | `[]` | External CSS/JS resources to load
`onStart` | `(resources: LoadedResource[]) => void \| Promise<void>` | Yes | - | Called when egg is activated
`onStop` | `(resources: LoadedResource[]) => void \| Promise<void>` | Yes | - | Called when egg is deactivated

### Trigger Types

```typescript
type Trigger =
  | { type: 'manual' }     // Activated via start() method
  | {
      type: 'keys'         // Activated by keyboard sequence
      keystrokes: string[] // Array of keys to press
      captureOnInputs?: boolean // Listen on input fields, defaults to true)
    }
  | { type: 'auto' }       // Activates immediately when enabled
```

### Resource Types

```typescript
type Resource =
  | {
      type: 'css' | 'script'
      content?: string     // Inline CSS/JS
      url?: string         // Local path or external URL to CSS/JS file
    }
```


## Resource Management

Resources are automatically injected and ejected from the DOM when an egg is started/stopped. Resources won't be loaded until `start()` method is called.
