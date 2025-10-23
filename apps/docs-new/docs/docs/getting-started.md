---
sidebar_position: 1
---

# Getting started

**`@eeaas/core`** lets you inject JavaScript and CSS into any app without bundling it into your production build. It's ideal for easter eggs, hidden features or experimental logic.

## Installation

With a bundler:

```bash
npm install @eeaas/core
```

Without a bundler, available as **`window._eeaas`**:

```html
<script src="https://unpkg.com/@eeaas/core@latest/dist/eeaas.min.js"></script>
```

## Basic usage

With a bundler:

```typescript
import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

const egg = eeaas.register({
  name: 'MyFirstEgg',
  onStart() {
    console.log('Easter egg activated!')
  },
  onStop() {
    console.log('Easter egg deactivated!')
  }
})

egg.start()
```

Without a bundler:

```html
<script>
  const eeaas = _eeaas.initializeEeaas();

  const egg = eeaas.register({
    name: 'MyFirstEgg',
    onStart() {
      console.log('Easter egg activated!')
    },
    onStop() {
      console.log('Easter egg deactivated!')
    }
  })

  egg.start()
</script>
```

For more details view the [React Example]() or the [Vanilla JS Example]().

