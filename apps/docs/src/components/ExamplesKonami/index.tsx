// @ts-expect-error: cannot find module
import egg1_code from '!!raw-loader!@site/src/components/ExamplesKonami/egg1.ts'
import { useRef, useState } from 'react'

import { initializeEeaas } from '@eeaas/core'
import type { KeystrokeCode } from '@eeaas/core'

import EasterEggDemo from '../EasterEggDemo'
import styles from './styles.module.css'

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

const ExamplesKonami = () => {
  const [userSequence, setUserSequence] = useState<string[]>([])
  const isRegistered = useRef(false)

  if (!isRegistered.current) {
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
    isRegistered.current = true
  }

  const egg1 = eeaas.get('Konami')

  if (!egg1) {
    return null
  }

  return (
    <>
      <EasterEggDemo
        egg={egg1}
        title="konami.ts"
        code={egg1_code}
        description={
          <>
            <p>Type the Konami Code Sequence to trigger the easter egg:</p>
            <div>
              {keystrokes.map((key, index) => (
                <div
                  key={index}
                  className={styles.chip}
                  style={{
                    background: userSequence[index] === key ? '#4caf50' : 'transparent',
                    border: userSequence[index] === key ? '1px solid #4caf50' : '1px solid rgb(189, 189, 189)',
                    color: userSequence[index] === key ? '#fff' : 'inherit',
                  }}
                >
                  {formatKey(key)}
                </div>
              ))}
            </div>
          </>
        }
      />
    </>
  )
}

export default ExamplesKonami
