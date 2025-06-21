import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import type { ReactNode } from 'react'

import { DOCS } from '../../common'
import { CodeBlock, PageWrapperDocs } from '../../components'

const CustomTableRow = ({
  col1,
  col2,
  col3,
  col4,
  col5,
}: {
  col1: ReactNode
  col2: ReactNode
  col3: ReactNode
  col4?: ReactNode
  col5?: ReactNode
}) => {
  return (
    <TableRow>
      <TableCell>{col1}</TableCell>
      <TableCell>{col2}</TableCell>
      <TableCell>{col3}</TableCell>
      {col4 ? <TableCell>{col4}</TableCell> : null}
      {col5 ? <TableCell>{col5}</TableCell> : null}
    </TableRow>
  )
}

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
              <CustomTableRow
                col1={<strong>Method</strong>}
                col2={<strong>Returns</strong>}
                col3={<strong>Description</strong>}
              />
            </TableHead>
            <TableBody>
              <CustomTableRow
                col1={<code>register(egg: UserEgg)</code>}
                col2={<code>void</code>}
                col3="Register a new easter egg"
              />
              <CustomTableRow
                col1={<code>get(name: string)</code>}
                col2={<code>PublicEgg | undefined</code>}
                col3="Retrieve an egg instance by name"
              />
              <CustomTableRow
                col1={<code>getAll()</code>}
                col2={<code>PublicEgg[]</code>}
                col3="Retrieve all registered egg instances"
              />
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
              <CustomTableRow
                col1={<strong>Method</strong>}
                col2={<strong>Returns</strong>}
                col3={<strong>Description</strong>}
              />
            </TableHead>
            <TableBody>
              <CustomTableRow col1={<code>name</code>} col2={<code>readonly string</code>} col3="Get egg name" />
              <CustomTableRow
                col1={<code>isEnabled</code>}
                col2={<code>readonly boolean</code>}
                col3="Get the enabled status of the egg"
              />
              <CustomTableRow
                col1={<code>isActivated</code>}
                col2={<code>readonly boolean</code>}
                col3="Get the activated status of the egg"
              />
              <CustomTableRow
                col1={<code>loadedResources</code>}
                col2={<code>readonly LoadedResource[]</code>}
                col3="Get the resources which have been loaded for the egg"
              />
              <CustomTableRow
                col1={<code>start()</code>}
                col2={<code>Promise&lt;void&gt;</code>}
                col3="Manually activate the egg"
              />
              <CustomTableRow
                col1={<code>stop()</code>}
                col2={<code>Promise&lt;void&gt;</code>}
                col3="Manually deactivate the egg"
              />
              <CustomTableRow col1={<code>enable()</code>} col2={<code>void</code>} col3="Enable egg triggers" />
              <CustomTableRow col1={<code>disable()</code>} col2={<code>void</code>} col3="Disable egg triggers" />
              <CustomTableRow
                col1={<code>subscribe()</code>}
                col2={<code>void</code>}
                col3="Subscribe to egg changes"
              />
              <CustomTableRow
                col1={<code>unsubsribe()</code>}
                col2={<code>void</code>}
                col3="Unsubscribe from egg changes"
              />
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
              <CustomTableRow
                col1={<strong>Property</strong>}
                col2={<strong>Type</strong>}
                col3={<strong>Required</strong>}
                col4={<strong>Default</strong>}
                col5={<strong>Description</strong>}
              />
            </TableHead>
            <TableBody>
              <CustomTableRow
                col1={<code>name</code>}
                col2={<code>string</code>}
                col3="Yes"
                col4="-"
                col5="Unique identifier for the egg"
              />
              <CustomTableRow
                col1={<code>enabled</code>}
                col2={<code>boolean</code>}
                col3="No"
                col4={<code>true</code>}
                col5="Whether the egg is initially enabled"
              />
              <CustomTableRow
                col1={<code>allowMultipleInstances</code>}
                col2={<code>boolean</code>}
                col3="No"
                col4={<code>false</code>}
                col5="Whether the egg's `onStart` can be triggered multiple times"
              />
              <CustomTableRow
                col1={<code>trigger</code>}
                col2={
                  <a href="#trigger-types">
                    <code>Trigger</code>
                  </a>
                }
                col3="No"
                col4={<code>{`{ type: 'manual' }`}</code>}
                col5="How the egg is activated"
              />
              <CustomTableRow
                col1={<code>stopTrigger</code>}
                col2={
                  <a href="#trigger-types">
                    <code>Trigger</code>
                  </a>
                }
                col3="No"
                col4={<code>{`{ type: 'manual' }`}</code>}
                col5="How the egg is deactivated"
              />
              <CustomTableRow
                col1={<code>resources</code>}
                col2={
                  <a href="#resource-types">
                    <code>Resource[]</code>
                  </a>
                }
                col3="No"
                col4={<code>[]</code>}
                col5="External CSS/JS resources to load"
              />
              <CustomTableRow
                col1={<code>onStart</code>}
                col2={<code>(resources: LoadedResource[]) =&gt; void | Promise&lt;void&gt;</code>}
                col3="No"
                col4={<code>undefined</code>}
                col5="Called when egg is activated"
              />
              <CustomTableRow
                col1={<code>onStop</code>}
                col2={<code>(resources: LoadedResource[]) =&gt; void | Promise&lt;void&gt;</code>}
                col3="No"
                col4={<code>undefined</code>}
                col5="Called when egg is deactivated"
              />
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
