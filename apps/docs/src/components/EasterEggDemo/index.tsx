import { AutoAwesome, PlayArrow, Stop } from '@mui/icons-material'
import { Alert, Box, Button, Card, Chip, FormControlLabel, Stack, Switch, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import type { PublicEgg } from '@eeaas/core'

import CodeBlock from '../CodeBlock'

type EasterEggDemoProps = {
  egg: PublicEgg
  title: string
  description: string
  code: string
  language?: string
}

const EasterEggDemo = ({ egg, title, description, code, language = 'javascript' }: EasterEggDemoProps) => {
  const [state, setState] = useState({ enabled: false, isActivated: false })
  const [showCode, setShowCode] = useState(false)

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
  }, [egg])

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
    <Card sx={{ mb: 4, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <AutoAwesome sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" id="example-1">
            {title}
          </Typography>
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
        {description}
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
        <Button
          color="error"
          onClick={handleStopTest}
          variant="outlined"
          startIcon={<Stop />}
          disabled={!state.enabled || !state.isActivated}
        >
          Stop
        </Button>
      </Stack>

      <Box sx={{ backgroundColor: 'grey.50', borderRadius: 2 }}>
        <Alert severity={state.enabled ? (state.isActivated ? 'success' : 'info') : 'warning'} sx={{ mb: 2 }}>
          Status: {state.enabled ? (state.isActivated ? 'Active' : 'Listening for keystrokes...') : 'Not enabled'}
        </Alert>

        <TextField
          fullWidth
          placeholder='Type "test" here to trigger the easter egg'
          variant="outlined"
          sx={{ mb: 2 }}
        />
      </Box>

      <Button color="secondary" onClick={() => setShowCode(!showCode)}>
        {showCode ? 'Hide' : 'Show'} code
      </Button>

      {showCode ? <CodeBlock language={language} code={code.trim()} sx={{ mt: 2, mb: 0 }} /> : null}
    </Card>
  )
}

export default EasterEggDemo
