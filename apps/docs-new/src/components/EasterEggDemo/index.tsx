import CodeBlock from '@theme/CodeBlock'
import { useEffect, useState } from 'react'

import type { PublicEgg } from '@eeaas/core'

type EasterEggDemoProps = {
  egg: PublicEgg
  title: string
  code?: string
  trigger?: string
}

const EasterEggDemo = ({ egg, title, code, trigger = 'test' }: EasterEggDemoProps) => {
  const [state, setState] = useState({ isEnabled: false, isActivated: false })
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    if (!egg) {
      return
    }

    egg.enable()

    setState({ isEnabled: egg.isEnabled, isActivated: egg.isActivated })

    const unsubscribe = egg.subscribe(() => {
      setState({ isEnabled: egg.isEnabled || false, isActivated: egg.isActivated || false })
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

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 50 }}>
        <button
          className={`button button--${state.isActivated ? 'secondary' : 'primary'} button--lg`}
          onClick={handleTriggerTest}
        >
          Trigger
        </button>
        <button
          className={`button button--${state.isActivated ? 'primary' : 'secondary'} button--lg`}
          onClick={handleStopTest}
          disabled={!state.isActivated}
        >
          Stop
        </button>
      </div>

      <div className="margin-top--lg margin-bottom--lg">
        <p className="margin-bottom--lg">
          Status:{' '}
          {state.isEnabled
            ? state.isActivated
              ? 'Active, press "Esc" to cancel.'
              : 'Listening for keystrokes...'
            : 'Not enabled'}
        </p>

        <input
          placeholder={`Type "${trigger}" to trigger the easter egg`}
          className="padding--md"
          style={{
            borderRadius: 8,
            border: '1px solid var(--ifm-color-primary-lightest)',
            minWidth: 300,
            fontSize: 16,
          }}
        />
      </div>

      <button
        className="button button--secondary margin-bottom--md"
        onClick={() => setShowCode(!showCode)}
        style={{ fontWeight: 'normal' }}
      >
        {showCode ? 'Hide' : 'Show'} code
      </button>

      {showCode && code ? (
        <CodeBlock title={title} language="typescript">
          {code.trim()}
        </CodeBlock>
      ) : null}
    </div>
  )
}

export default EasterEggDemo
