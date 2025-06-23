import { Box, Chip, Typography } from '@mui/material'
import { useState } from 'react'

import { initializeEeaas } from '@eeaas/core'
import type { KeystrokeCode } from '@eeaas/core'

import { EXAMPLES } from '../../common'
import { EasterEggDemo, PageWrapperExamples } from '../../components'
import egg1_code from './egg1?raw'

const formatKey = (key: string) => {
  if (key === 'b' || key === 'a') {
    return key.toUpperCase()
  }
  return key.replace('Arrow', '').replace('Key', '')
}

export const eeaas = initializeEeaas()

const jsUrl = `/eeaas/example-konami.js`
const cssUrl = `/eeaas/example-konami.css`

export const keystrokes: KeystrokeCode[] = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

let isRegistered = false

const ExamplesKonami = () => {
  const [userSequence, setUserSequence] = useState<string[]>([])

  if (!isRegistered) {
    eeaas.register({
      name: 'Konami',
      enabled: false,
      trigger: {
        type: 'keys',
        keystrokes,
        onKeydown(event) {
          setUserSequence((prev) => {
            const next = [...prev, event.key]
            const correct = keystrokes.slice(0, next.length)

            if (JSON.stringify(next) === JSON.stringify(correct)) {
              return next
            } else {
              return event.key === keystrokes[0] ? [event.key] : []
            }
          })
        },
      },
      stopTrigger: {
        type: 'keys',
        keystrokes: ['Escape'],
      },
      resources: [
        { type: 'css', url: cssUrl },
        { type: 'script', url: jsUrl },
      ],
      onStart() {
        // @ts-expect-error does not exist on window
        window.launchKonami()
      },

      onStop() {
        // @ts-expect-error does not exist on window
        window.cleanupKonami()
      },
    })
    isRegistered = true
  }

  const egg1 = eeaas.get('Konami')

  return (
    <PageWrapperExamples>
      <Typography variant="h2" gutterBottom>
        {EXAMPLES.KONAMI.TITLE}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {EXAMPLES.KONAMI.DESCRIPTION}
      </Typography>

      {egg1 ? (
        <EasterEggDemo
          egg={egg1}
          title={EXAMPLES.KONAMI.TITLE}
          description={
            <>
              <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                Type the Konami Code Sequence to trigger the easter egg:
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 4 }}>
                {keystrokes.map((key, index) => (
                  <Chip
                    key={index}
                    label={formatKey(key)}
                    size="small"
                    color={userSequence[index] === key ? 'success' : 'default'}
                    variant={userSequence[index] === key ? 'filled' : 'outlined'}
                  />
                ))}
              </Box>
            </>
          }
          code={egg1_code.trim()}
          language="typescript"
        />
      ) : null}
    </PageWrapperExamples>
  )
}

export default ExamplesKonami
