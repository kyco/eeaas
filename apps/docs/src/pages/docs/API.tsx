import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import CodeBlock from '../../components/CodeBlock'
import DocsPageWrapper from './DocsPageWrapper'

const API = () => {
  return (
    <DocsPageWrapper>
      <Box>
        <Typography variant="h1" gutterBottom>
          API Reference
        </Typography>

        <Typography variant="h2" gutterBottom>
          Instance Methods
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Method</strong>
                </TableCell>
                <TableCell>
                  <strong>Returns</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code>register(egg: UserEgg)</code>
                </TableCell>
                <TableCell>
                  <code>void</code>
                </TableCell>
                <TableCell>Register a new easter egg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>get(name: string)</code>
                </TableCell>
                <TableCell>
                  <code>PublicEgg | undefined</code>
                </TableCell>
                <TableCell>Retrieve an egg instance by name</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>getInstance()</code>
                </TableCell>
                <TableCell>
                  <code>{`{ eggs: Record<string, PublicEgg> }`}</code>
                </TableCell>
                <TableCell>Get the global eeaas instance</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h2" gutterBottom>
          Egg Methods
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Method</strong>
                </TableCell>
                <TableCell>
                  <strong>Returns</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code>start()</code>
                </TableCell>
                <TableCell>
                  <code>Promise&lt;void&gt;</code>
                </TableCell>
                <TableCell>Manually activate the egg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>stop()</code>
                </TableCell>
                <TableCell>
                  <code>Promise&lt;void&gt;</code>
                </TableCell>
                <TableCell>Manually deactivate the egg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>enable()</code>
                </TableCell>
                <TableCell>
                  <code>void</code>
                </TableCell>
                <TableCell>Enable egg triggers</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>disable()</code>
                </TableCell>
                <TableCell>
                  <code>void</code>
                </TableCell>
                <TableCell>Disable egg triggers</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h2" gutterBottom>
          Egg Properties
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Property</strong>
                </TableCell>
                <TableCell>
                  <strong>Type</strong>
                </TableCell>
                <TableCell>
                  <strong>Required</strong>
                </TableCell>
                <TableCell>
                  <strong>Default</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code>name</code>
                </TableCell>
                <TableCell>
                  <code>string</code>
                </TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Unique identifier for the egg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>enabled</code>
                </TableCell>
                <TableCell>
                  <code>boolean</code>
                </TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <code>true</code>
                </TableCell>
                <TableCell>Whether the egg is initially enabled</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>trigger</code>
                </TableCell>
                <TableCell>
                  <a href="#trigger-types">
                    <code>Trigger</code>
                  </a>
                </TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <code>{`{ type: 'manual' }`}</code>
                </TableCell>
                <TableCell>How the egg is activated</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>stopTrigger</code>
                </TableCell>
                <TableCell>
                  <a href="#trigger-types">
                    <code>Trigger</code>
                  </a>
                </TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <code>{`{ type: 'manual' }`}</code>
                </TableCell>
                <TableCell>How the egg is deactivated</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>resources</code>
                </TableCell>
                <TableCell>
                  <a href="#resource-types">
                    <code>Resource[]</code>
                  </a>
                </TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <code>[]</code>
                </TableCell>
                <TableCell>External CSS/JS resources to load</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>onStart</code>
                </TableCell>
                <TableCell>
                  <code>(resources: LoadedResource[]) =&gt; void | Promise&lt;void&gt;</code>
                </TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Called when egg is activated</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>onStop</code>
                </TableCell>
                <TableCell>
                  <code>(resources: LoadedResource[]) =&gt; void | Promise&lt;void&gt;</code>
                </TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Called when egg is deactivated</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h2" id="trigger-types" gutterBottom>
          Trigger Types
        </Typography>

        <CodeBlock
          language="typescript"
          code={`type Trigger =
  | { type: 'manual' }     // Default, activate via start() method
  | { type: 'auto' }       // Activates immediately when enabled
  | {
    type: 'keys'           // Activated by keyboard sequence
      keystrokes: string[] // Array of keys to press
      captureOnInputs?: boolean // Listen on input fields, defaults to true)
    }`}
        />

        <Typography variant="h2" id="resource-types" gutterBottom>
          Resource Types
        </Typography>

        <CodeBlock
          language="typescript"
          code={`type Resource =
  | {
      type: 'css' | 'script'
      content?: string     // Inline CSS/JS
      url?: string         // Local path or external URL to CSS/JS file
    }`}
        />

        <Typography variant="h2" gutterBottom>
          Resource Management
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Resources are automatically injected and ejected from the DOM when an egg is started/stopped. Resources won't
          be loaded until <code>start()</code> method is called.
        </Typography>
      </Box>
    </DocsPageWrapper>
  )
}

export default API
