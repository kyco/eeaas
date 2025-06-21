# Easter eggs as a service

A zero-dependency library to inject easter eggs into any app or website.

Built with modern JavaScript.

[Demo](https://kyco.github.io/eeaas/examples/nyancat)

[Documentation](https://kyco.github.io/eeaas/)

---

> [!NOTE]
> *For more detailed instructions please view the [documentation](https://kyco.github.io/eeaas/).*

---


## Quick start

With npm:
```bash
npm i @eeaas/core
```

```typescript
import { initializeEeaas } from '@eeaas/core'

const eeaas = initializeEeaas()

eeaas.register({
  name: 'MyFirstEgg',
  onStart() {
    console.log('Easter egg activated!')
  },
  onStop() {
    console.log('Easter egg deactivated!')
  }
})

eeaas.get('MyFirstEgg').start()
```

Without a bundler (available as **`window._eeaas`**):

```html
<script src="https://unpkg.com/@eeaas/core@latest/dist/eeaas.min.js"></script>
<script>
  const eeaas = _eeaas.initializeEeaas();

  eeaas.register({
    name: 'MyFirstEgg',
    onStart() {
      console.log('Easter egg activated!')
    },
    onStop() {
      console.log('Easter egg deactivated!')
    }
  })

  eeaas.get('MyFirstEgg').start()
</script>

```
