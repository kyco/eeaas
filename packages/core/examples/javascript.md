# JavaScript Example

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
