import { Box, Typography } from '@mui/material'

import CodeBlock from '../../components/CodeBlock'
import DocsPageWrapper from './DocsPageWrapper'

const GettingStarted = () => {
  return (
    <DocsPageWrapper>
      <Typography variant="h2" gutterBottom id="quick-start">
        Quick Start
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Install the library and create your first easter egg in just a few lines of code:
      </Typography>

      <CodeBlock language="bash">npm install @eeaas/core</CodeBlock>

      <CodeBlock language="javascript">{`import { initializeEeaas } from '@eeaas/core'

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

eeaas.get('MyFirstEgg').start()`}</CodeBlock>

      <Typography variant="body1" color="text.secondary">
        Choose a section from the sidebar to dive deeper into specific topics and learn how to create amazing easter egg
        experiences.
      </Typography>

      <Box>
        <Typography variant="h1" gutterBottom>
          Easter eggs as a service
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          A zero-dependency library to inject easter eggs into any app or website.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Built with modern JavaScript.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          <a href="https://kyco.github.io/eeaas/" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </Typography>

        <Typography variant="h2" gutterBottom id="installation">
          Installation
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          With npm:
        </Typography>
        <CodeBlock language="bash">npm i @eeaas/core</CodeBlock>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Without a bundler (available as <strong>window._eeaas</strong>):
        </Typography>

        <CodeBlock language="html">{`<script src="https://unpkg.com/@eeaas/core@latest/dist/eeaas.min.js"></script>`}</CodeBlock>

        <Typography variant="h2" gutterBottom>
          Basic Usage
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          With bundler:
        </Typography>
        <CodeBlock language="typescript">{`/* index.ts */
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
egg.start()`}</CodeBlock>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Without bundler:
        </Typography>

        <CodeBlock language="html">{`<!-- index.html -->
<script src="https://unpkg.com/@eeaas/core@latest/dist/eeaas.min.js"></script>
<script>
  // Initialise
  const eeaas = _eeaas.initializeEeaas();

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
</script>`}</CodeBlock>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          For more details see the <a href="./examples/react.md">React Example</a> or the{' '}
          <a href="./examples/javascript.md">Vanilla JS Example</a>.
        </Typography>

        <Typography variant="h2" gutterBottom>
          Building your own egg
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          You can create quite complex easter eggs, the basic{' '}
          <a href="./src/types/types_global.ts#L28">structure of an egg</a> is as follows:
        </Typography>
        <CodeBlock language="javascript">{`const MyEgg = {
  name: string,
  enabled?: boolean,
  trigger?: Trigger,
  stopTrigger?: Trigger,
  resources?: Resource[],
  onStart: (loadedResources: LoadedResource[]) => void | Promise<void>,
  onStop: (loadedResources: LoadedResource[]) => void | Promise<void>
}`}</CodeBlock>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          The <strong>Trigger</strong> allows you to run code when a user enters a sequence of characters instead of
          solely relying on the <code>egg.start()</code> method.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Here's the <a href="./src/types/types_keys.ts">list of valid keystrokes</a>.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Example usage:
        </Typography>
        <CodeBlock language="javascript">{`trigger: {
  type: 'keys',
  keystrokes: ['n', 'y', 'a', 'n'],
  captureOnInputs: false,
}`}</CodeBlock>

        <Typography variant="body1" color="text.secondary">
          This will cause the egg to run its logic when the user enters 'nyan' anywhere, except when the user is
          actively entering data into an input or textarea - this logic can be toggled with the{' '}
          <code>captureOnInputs</code> flag.
        </Typography>
      </Box>
    </DocsPageWrapper>
  )
}

export default GettingStarted
