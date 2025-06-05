# Easter eggs as a service

Finally a production ready and framework agnostic library to help bring back the magic of easter eggs into every app and website (built with modern JavaScript).

## Installation

```bash
npm i @eeaas/core
```

Once installed you can import the utility and start creating your own easter eggs.


## Basic usage

```javascript
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

This will cause the egg to run its logic when the user enters 'nyan' anywhere, except when the user is actively entering data into an input or textarea - this logic can be toggled with the `captureOnInputs` flag (default: true).


## Eeaas methods

Eeaas comes with 3 built-in methods. These methods are mainly used to add and access eggs.

Method                    | Description
------------------------- | -----------
`register(egg: UserEgg)`  | Used to add an egg
`get(name: string)`       | Used to retrieve an egg, useful for triggering the egg
`getInstance()`           | Used to access the eeaas instance anywhere in the app

