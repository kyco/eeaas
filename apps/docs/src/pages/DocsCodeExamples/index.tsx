import { Box, Typography } from '@mui/material'

import { DOCS } from '../../common'
import { CodeBlock, PageWrapperDocs } from '../../components'
import react from './codeblocks/react.jsx?raw'
import typescript from './codeblocks/typescript.tsx?raw'
import vanilla_js from './codeblocks/vanilla_js.html?raw'

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
          enables adding JavaScript and CSS to any app without shipping it the production bundle. This makes it perfect
          for easter eggs, hidden features, and other logic that you want to keep out of the production codebase
          initially.
        </Typography>
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.CODE_EXAMPLES.REACT.ID}>
          {DOCS.CODE_EXAMPLES.REACT.TITLE}
        </Typography>
        <CodeBlock language="jsx" code={react.trim()} />
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.CODE_EXAMPLES.TYPESCRIPT.ID}>
          {DOCS.CODE_EXAMPLES.TYPESCRIPT.TITLE}
        </Typography>
        <CodeBlock language="tsx" code={typescript.trim()} />
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h2" gutterBottom id={DOCS.CODE_EXAMPLES.VANILLA_JS.ID}>
          {DOCS.CODE_EXAMPLES.VANILLA_JS.TITLE}
        </Typography>
        <CodeBlock language="html" code={vanilla_js.trim()} />
      </Box>
    </PageWrapperDocs>
  )
}

export default CodeExamples
