import { OpenInNew } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

import react from '../../../examples/react.jsx?raw'
import typescript from '../../../examples/typescript.tsx?raw'
import vanilla_js from '../../../examples/vanilla_js.html?raw'
import { DOCS } from '../../common'
import { CodeBlock, PageWrapperDocs } from '../../components'

const CodeExamples = () => {
  return (
    <PageWrapperDocs>
      <Box sx={{ pb: 3 }}>
        <Typography variant="h1" gutterBottom id={DOCS.CODE_EXAMPLES.CODE_EXAMPLES.ID}>
          {DOCS.CODE_EXAMPLES.CODE_EXAMPLES.TITLE}
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
        <Typography variant="h2" gutterBottom id={DOCS.CODE_EXAMPLES.REACT.ID}>
          {DOCS.CODE_EXAMPLES.REACT.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          View on GitHub:{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/apps/docs/examples/react.jsx"
            target="_blank"
            rel="noreferrer"
          >
            {DOCS.CODE_EXAMPLES.REACT.TITLE}
            <OpenInNew sx={{ ml: 0.5, fontSize: 15 }} />
          </a>
        </Typography>
        <CodeBlock language="jsx" code={react.trim()} />
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.CODE_EXAMPLES.TYPESCRIPT.ID}>
          {DOCS.CODE_EXAMPLES.TYPESCRIPT.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          View on GitHub:{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/apps/docs/examples/typescript.tsx"
            target="_blank"
            rel="noreferrer"
          >
            {DOCS.CODE_EXAMPLES.TYPESCRIPT.TITLE}
            <OpenInNew sx={{ ml: 0.5, fontSize: 15 }} />
          </a>{' '}
        </Typography>
        <CodeBlock language="tsx" code={typescript.trim()} />
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.CODE_EXAMPLES.VANILLA_JS.ID}>
          {DOCS.CODE_EXAMPLES.VANILLA_JS.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          View on GitHub:{' '}
          <a
            href="https://github.com/kyco/eeaas/blob/main/apps/docs/examples/vanilla-js.html"
            target="_blank"
            rel="noreferrer"
          >
            {DOCS.CODE_EXAMPLES.VANILLA_JS.TITLE}
            <OpenInNew sx={{ ml: 0.5, fontSize: 15 }} />
          </a>
        </Typography>
        <CodeBlock language="html" code={vanilla_js.trim()} />
      </Box>
    </PageWrapperDocs>
  )
}

export default CodeExamples
