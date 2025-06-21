import { AutoAwesome, PlayArrow, Stop } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

import { CodeBlock, PageWrapperExamples } from '../../components'
import { eeaas } from '../../utils/eeaas'
import code from './actions?raw'

import './actions'

const egg = eeaas.get('CssInjection')

const CssInjection = () => {
  const [state, setState] = useState({ enabled: false, isActivated: false })

  useEffect(() => {
    if (!egg) {
      return
    }

    egg.enable()

    setState({ enabled: egg.enabled, isActivated: egg.isActivated })

    const unsubscribe = egg.subscribe(() => {
      setState({ enabled: egg.enabled || false, isActivated: egg.isActivated || false })
    })

    return () => {
      unsubscribe()
      egg.disable()
    }
  }, [])

  const handleTriggerTest = () => {
    egg?.start()
  }

  const handleStopTest = () => {
    egg?.stop()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      egg?.enable()
    } else {
      egg?.disable()
    }
  }

  return (
    <PageWrapperExamples>
      <Typography variant="h2" gutterBottom>
        CSS Injection
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        This example demonstrates how to inject custom CSS into the DOM.
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <AutoAwesome sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h5">Example 1: CSS Injection (same-origin)</Typography>
            </Box>
            <Chip
              label={
                <FormControlLabel
                  control={<Switch checked={state.enabled} onChange={handleChange} color="secondary" />}
                  label="Enabled"
                />
              }
              sx={{ py: 2.5, borderRadius: 2, backgroundColor: '#fff' }}
            />
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
            Type "test" to trigger, press "Esc" to cancel. Or use the buttons below.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
            <Button
              onClick={handleTriggerTest}
              variant="contained"
              startIcon={<PlayArrow />}
              disabled={!state.enabled}
              disableElevation
            >
              Trigger
            </Button>
            <Button onClick={handleStopTest} variant="outlined" startIcon={<Stop />} disabled={!state.enabled}>
              Stop
            </Button>
          </Stack>

          <Box sx={{ backgroundColor: 'grey.50', borderRadius: 2 }}>
            <Alert severity={state.enabled ? (state.isActivated ? 'success' : 'info') : 'warning'} sx={{ mb: 2 }}>
              Status:{' '}
              {state.enabled
                ? state.isActivated
                  ? 'Active'
                  : 'Inactive (listening for keystrokes...)'
                : 'Not enabled'}
            </Alert>

            <TextField
              fullWidth
              placeholder='Type "test" here to trigger the easter egg'
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Box>
        </CardContent>
      </Card>

      <Typography variant="h2" gutterBottom>
        How it works
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        The easter egg listens for keyboard events and builds up a string of typed characters. When the trigger word
        "test" is detected, it adds CSS styles directly to the body element.
      </Typography>

      <CodeBlock language="javascript" code={code.trim()} />

      <Typography variant="body1" color="text.secondary">
        This technique can be used for any kind of visual transformation, from subtle animations to dramatic style
        changes. The key is to make it delightful and non-intrusive to the user experience.
      </Typography>
    </PageWrapperExamples>
  )
}

export default CssInjection
