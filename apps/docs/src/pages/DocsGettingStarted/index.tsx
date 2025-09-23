import { OpenInNew } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { DOCS, ROUTES } from '../../common'
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
          lets you inject JavaScript and CSS into any app without bundling it into your production build. It's ideal for
          easter eggs, hidden features or experimental logic.
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
          For more details view the{' '}
          <Link
            to={{
              pathname: ROUTES.DOCS__CODE_EXAMPLES,
              hash: DOCS.CODE_EXAMPLES.REACT.ID,
            }}
          >
            React Example
          </Link>{' '}
          or the{' '}
          <Link
            to={{
              pathname: ROUTES.DOCS__CODE_EXAMPLES,
              hash: DOCS.CODE_EXAMPLES.VANILLA_JS.ID,
            }}
          >
            Vanilla JS Example
          </Link>
          .
        </Typography>
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.GETTING_STARTED.RECOMMENED_WORKFLOW.ID}>
          {DOCS.GETTING_STARTED.RECOMMENED_WORKFLOW.TITLE}
        </Typography>
        <Typography component="ol" variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          <li>
            Create CSS and JS files for your easter eggs and add them to your{' '}
            <strong>
              <code>public</code>
            </strong>{' '}
            folder. This way they won't get shipped to your users.
          </li>
          <li>
            Register your easter eggs by referencing the CSS and JS files in the egg's{' '}
            <strong>
              <code>resources</code>
            </strong>{' '}
            property. To ensure the triggers only activate at specific places in the app you can use the{' '}
            <strong>
              <code>enabled</code>
            </strong>{' '}
            property when registering the egg. This will force you to manually enable the egg before it can be
            activated.
          </li>
          <li>
            Once your egg is enabled (either via the{' '}
            <strong>
              <code>.enable()</code>
            </strong>{' '}
            method or the{' '}
            <strong>
              <code>enabled</code>
            </strong>{' '}
            property) call the{' '}
            <strong>
              <code>.start()</code>
            </strong>{' '}
            method. This will then trigger the easter egg and start injecting the resources into the DOM.
          </li>
          <li>
            Once the easter egg has run its course call the{' '}
            <strong>
              <code>.stop()</code>
            </strong>{' '}
            method and clean up any logic that should not be there anymore. By default the CSS and JS resources which
            were injected into the DOM will be removed from the DOM. However, any JavaScript that gets executed will
            remain in memory and you will have to manually clean it up.
          </li>
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
          <li>or automatically, as soon as the egg gets registered.</li>
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 20, mb: 2 }}>
          Manual Trigger
        </Typography>
        <CodeBlock language="typescript" code={trigger_manual.trim()} />

        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 20, mb: 2 }}>
          Keystroke Trigger
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Here's the{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/packages/core/src/types/types_keys.ts"
            target="_blank"
            rel="noreferrer"
          >
            list of valid keystrokes
            <OpenInNew sx={{ ml: 0.5, fontSize: 15 }} />
          </a>{' '}
          which can be added in the{' '}
          <strong>
            <code>keystrokes</code>
          </strong>{' '}
          array.
        </Typography>
        <CodeBlock language="typescript" code={trigger_keystroke.trim()} />

        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 20, mb: 2 }}>
          Automatic Trigger
        </Typography>
        <CodeBlock language="typescript" code={trigger_automatic.trim()} />
      </Box>
    </PageWrapperDocs>
  )
}

export default GettingStarted
