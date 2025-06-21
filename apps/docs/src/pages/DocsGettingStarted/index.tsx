import { Typography } from '@mui/material'

import { DOCS } from '../../common'
import { CodeBlock, PageWrapperDocs } from '../../components'
import code_build_your_own from './codeblocks/build_your_own.md?raw'
import code_install from './codeblocks/install.md?raw'
import code_quick_start_no_bundler from './codeblocks/quick_start_no_bundler.md?raw'
import code_quick_start from './codeblocks/quick_start.md?raw'

const GettingStarted = () => {
  return (
    <PageWrapperDocs>
      <Typography variant="h1" gutterBottom id={DOCS.GETTING_STARTED.GETTING_STARTED.ID}>
        {DOCS.GETTING_STARTED.GETTING_STARTED.TITLE}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        <strong>
          <code>@eeaas/core</code>
        </strong>{' '}
        enables adding JavaScript and CSS to any app without shipping it the production bundle. This makes it perfect
        for easter eggs, hidden features, or other logic that you want to keep out of the production codebase initially.
      </Typography>

      <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.INSTALLATION.ID}>
        {DOCS.GETTING_STARTED.INSTALLATION.TITLE}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        With bundler:
      </Typography>

      <CodeBlock language="bash" code={code_install.trim()} />
      <CodeBlock language="typescript" code={code_quick_start.trim()} />

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Without a bundler, available as{' '}
        <strong>
          <code>window._eeaas</code>
        </strong>
        :
      </Typography>

      <CodeBlock language="html" code={code_quick_start_no_bundler.trim()} sx={{ mb: 5 }} />

      <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.BASIC_USAGE.ID}>
        {DOCS.GETTING_STARTED.BASIC_USAGE.TITLE}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        TODO: Add basic usage instructions here.
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        For more details see the{' '}
        <a
          href="https://github.com/kyco/eeaas/blob/main/packages/core/examples/react.md"
          target="_blank"
          rel="noreferrer"
        >
          React Example
        </a>{' '}
        or the{' '}
        <a
          href="https://github.com/kyco/eeaas/blob/main/packages/core/examples/javascript.md"
          target="_blank"
          rel="noreferrer"
        >
          Vanilla JS Example
        </a>
        .
      </Typography>

      <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.BUILDING_YOUR_OWN.ID}>
        {DOCS.GETTING_STARTED.BUILDING_YOUR_OWN.TITLE}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        You can create quite complex easter eggs, the basic{' '}
        <a
          href="https://github.com/kyco/eeaas/blob/main/packages/core/src/types/types_global.ts#L28"
          target="_blank"
          rel="noreferrer"
        >
          structure of an egg
        </a>{' '}
        is as follows:
      </Typography>
      <CodeBlock language="javascript" code={code_build_your_own.trim()} />

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        The{' '}
        <a
          href="https://github.com/kyco/eeaas/blob/main/packages/core/src/types/types_global.ts#L3"
          target="_blank"
          rel="noreferrer"
        >
          Trigger
        </a>{' '}
        allows you to run code when a user enters a sequence of characters instead of solely relying on the{' '}
        <strong>
          <code>egg.start()</code>
        </strong>{' '}
        method.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Here's the{' '}
        <a
          href="https://github.com/kyco/eeaas/blob/main/packages/core/src/types/types_keys.ts"
          target="_blank"
          rel="noreferrer"
        >
          list of valid keystrokes
        </a>
        .
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Example usage:
      </Typography>
      <CodeBlock
        language="javascript"
        code={`trigger: {
  type: 'keys',
  keystrokes: ['n', 'y', 'a', 'n'],
  captureOnInputs: false,
}`}
      />

      <Typography variant="body1" color="text.secondary">
        This will cause the egg to run its logic when the user enters 'nyan' anywhere, except when the user is actively
        entering data into an input or textarea - this logic can be toggled with the{' '}
        <strong>
          <code>captureOnInputs</code>
        </strong>{' '}
        flag.
      </Typography>
    </PageWrapperDocs>
  )
}

export default GettingStarted
