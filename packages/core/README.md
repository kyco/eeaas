# Easter eggs as a service

A production ready and framework agnostic library to help bring back the magic of easter eggs into every app and website. Built with modern JavaScript.


## Features

- 🎯 Framework agnostic
- 🔑 Keyboard sequence triggers
- 🎨 Dynamic CSS injection
- 📜 Dynamic JavaScript injection
- ⚡ Async loading
- 🎮 Manual and automatic triggers


## Installation

```bash
npm i @eeaas/core
```

Once installed you can import the utility and start creating your own easter eggs.


## Basic Usage

```typescript
import { initializeEeaas } from '@eeaas/core'

// Initialise
const eeaas = initializeEeaas()

// Register eggs, only registered eggs can be activated
eeaas.register({
  name: 'MyEgg',
  onStart() {
    // Do some magic here!
    console.log('Easter egg time...')
  },
  onStop() {
    // Cleanup your harmless easter egg logic
    console.log('So sad...')
  },
})

// Trigger your egg, from anywhere in the app
const egg = eeaas.get('MyEgg')
egg.start()
```

For more details see the [React Example](./examples/react.md) or the [Vanilla JavaScript Example](./examples/javascript.md).


## Building your own egg

You can create quite complex easter eggs, the basic [structure of an egg](./src/types/types_global.ts#L28) is as follows:
```javascript
const MyEgg = {
  name: string
  enabled?: boolean
  trigger?: Trigger
  stopTrigger?: Trigger
  resources?: Resource[]
  onStart: (loadedResources: LoadedResource[]) => void | Promise<void>
  onStop: (loadedResources: LoadedResource[]) => void | Promise<void>
}
```

The __Trigger__ allows you to run code when a user enters a sequence of characters instead of solely relying on the `egg.start()` method.

Here's the [list of valid keystrokes](./src/types/types_keys.ts).

Example usage:
```javascript
trigger: {
  type: 'keys',
  keystrokes: ['n', 'y', 'a', 'n'],
  captureOnInputs: false,
}
```

This will cause the egg to run its logic when the user enters 'nyan' anywhere, except when the user is actively entering data into an input or textarea - this logic can be toggled with the `captureOnInputs` flag.


## API Reference

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
  | { type: 'manual' }     // Default, activate via start() method
  | {
    type: 'keys'           // Activated by keyboard sequence
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
