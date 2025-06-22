import { Box, Typography } from '@mui/material'

import { DOCS } from '../../common'
import { CodeBlock, PageWrapperDocs } from '../../components'
import code_install_no_bundler from './codeblocks/install_no_bundler.md?raw'
import code_install from './codeblocks/install.md?raw'
import code_quick_start_no_bundler from './codeblocks/quick_start_no_bundler.md?raw'
import code_quick_start from './codeblocks/quick_start.md?raw'
import trigger_automatic from './codeblocks/trigger_automatic.ts?raw'
import trigger_keystroke from './codeblocks/trigger_keystroke.ts?raw'
import trigger_manual from './codeblocks/trigger_manual.ts?raw'

const GettingStarted = () => {
  return (
    <PageWrapperDocs>
      <Box sx={{ pb: 3 }}>
        <Typography variant="h1" gutterBottom id={DOCS.GETTING_STARTED.GETTING_STARTED.ID}>
          {DOCS.GETTING_STARTED.GETTING_STARTED.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          <strong>
            <code>@eeaas/core</code>
          </strong>{' '}
          enables adding JavaScript and CSS to any app without shipping it the production bundle. This makes it perfect
          for easter eggs, hidden features, and other logic that you want to keep out of the production codebase
          initially.
        </Typography>
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.INSTALLATION.ID}>
          {DOCS.GETTING_STARTED.INSTALLATION.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          With bundler:
        </Typography>
        <CodeBlock language="bash" code={code_install.trim()} />

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Without a bundler, available as{' '}
          <strong>
            <code>window._eeaas</code>
          </strong>
          :
        </Typography>
        <CodeBlock language="html" code={code_install_no_bundler.trim()} />
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.BASIC_USAGE.ID}>
          {DOCS.GETTING_STARTED.BASIC_USAGE.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          With bundler:
        </Typography>
        <CodeBlock language="typescript" code={code_quick_start.trim()} />
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Without a bundler:
        </Typography>
        <CodeBlock language="html" code={code_quick_start_no_bundler.trim()} sx={{ mb: 5 }} />

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          For more details see the{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/apps/docs/examples/react.md"
            target="_blank"
            rel="noreferrer"
          >
            React Example
          </a>{' '}
          or the{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/apps/docs/examples/javascript.md"
            target="_blank"
            rel="noreferrer"
          >
            Vanilla JS Example
          </a>
          .
        </Typography>
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.TRIGGERS.ID}>
          {DOCS.GETTING_STARTED.TRIGGERS.TITLE}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Easter eggs can be triggered in one of three ways:
        </Typography>
        <Typography component="ul" variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          <li>manually, e.g. by clicking a button (default behaviour)</li>
          <li>via a keystroke combination</li>
          <li>or automatically, as soon as the egg get registered.</li>
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 20, mb: 2 }}>
          Manual trigger
        </Typography>
        <CodeBlock language="typescript" code={trigger_manual.trim()} />

        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 20, mb: 2 }}>
          Keystroke trigger
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Here's the{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/packages/core/src/types/types_keys.ts"
            target="_blank"
            rel="noreferrer"
          >
            list of valid keystrokes
          </a>{' '}
          which can be added in the{' '}
          <strong>
            <code>keystrokes</code>
          </strong>{' '}
          array.
        </Typography>
        <CodeBlock language="typescript" code={trigger_keystroke.trim()} />

        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 20, mb: 2 }}>
          Automatic trigger
        </Typography>
        <CodeBlock language="typescript" code={trigger_automatic.trim()} />
      </Box>
    </PageWrapperDocs>
  )
}

export default GettingStarted
