import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import { DOCS } from '../../common'
import { CodeBlock, PageWrapperDocs } from '../../components'

const API = () => {
  return (
    <PageWrapperDocs>
      <Box>
        <Typography variant="h2" gutterBottom id={DOCS.API_REFERENCE.API_REFERENCE.ID}>
          {DOCS.API_REFERENCE.API_REFERENCE.TITLE}
        </Typography>
        <Typography variant="h2" gutterBottom id={DOCS.API_REFERENCE.EEAAS_INSTANCE.ID}>
          {DOCS.API_REFERENCE.EEAAS_INSTANCE.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          <code>eeaas</code>
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
                  <code>getAll()</code>
                </TableCell>
                <TableCell>
                  <code>PublicEgg[]</code>
                </TableCell>
                <TableCell>Retrieve all registered egg instances</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h2" gutterBottom id={DOCS.API_REFERENCE.EGG_INSTANCE.ID}>
          {DOCS.API_REFERENCE.EGG_INSTANCE.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          <code>
            eeaas.get({`<`}EggName{`>`})
          </code>
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
                  <code>name</code>
                </TableCell>
                <TableCell>
                  <code>readonly string</code>
                </TableCell>
                <TableCell>Get egg name</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>isEnabled</code>
                </TableCell>
                <TableCell>
                  <code>readonly boolean</code>
                </TableCell>
                <TableCell>Get the enabled status of the egg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>isActivated</code>
                </TableCell>
                <TableCell>
                  <code>readonly boolean</code>
                </TableCell>
                <TableCell>Get the activated status of the egg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>loadedResources</code>
                </TableCell>
                <TableCell>
                  <code>readonly LoadedResource[]</code>
                </TableCell>
                <TableCell>Get the resources which have been loaded for the egg</TableCell>
              </TableRow>
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
              <TableRow>
                <TableCell>
                  <code>subscribe()</code>
                </TableCell>
                <TableCell>
                  <code>void</code>
                </TableCell>
                <TableCell>Subscribe to egg changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>unsubsribe()</code>
                </TableCell>
                <TableCell>
                  <code>void</code>
                </TableCell>
                <TableCell>Unsubscribe from egg changes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h2" gutterBottom id={DOCS.API_REFERENCE.EGG_PROPERTIES.ID}>
          {DOCS.API_REFERENCE.EGG_PROPERTIES.TITLE}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          <code>
            eeaas.register({`<`}UserEgg{`>`})
          </code>
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
                  <code>allowMultipleInstances</code>
                </TableCell>
                <TableCell>
                  <code>boolean</code>
                </TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <code>false</code>
                </TableCell>
                <TableCell>Whether the egg's `onStart` can be triggered multiple times</TableCell>
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
      onKeydown?: (event: KeyboardEvent) => void // Callback to listen to the keystroke events
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
    </PageWrapperDocs>
  )
}

export default API
