import CodeBlock from '@theme/CodeBlock'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

import type { PublicEgg } from '@eeaas/core'

type EasterEggDemoProps = {
  egg: PublicEgg
  title: string
  description: ReactNode
  code?: string
  language?: string
}

const EasterEggDemo = ({ egg, title, description, code, language = 'typescript' }: EasterEggDemoProps) => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      egg?.enable()
    } else {
      egg?.disable()
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="checkbox-enable">
          <input id="checkbox-enable" type="checkbox" onChange={handleChange} /> Enabled:{' '}
          {state.isEnabled ? 'yes' : 'no'}
        </label>
      </div>

      {typeof description === 'string' ? <p>{description}</p> : <div>{description}</div>}

      <div>
        <button
          onClick={handleTriggerTest}
          disabled={!state.isEnabled}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Trigger
        </button>
        <button
          onClick={handleStopTest}
          disabled={!state.isEnabled || !state.isActivated}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Stop
        </button>
      </div>

      <div>
        <div>
          Status: {state.isEnabled ? (state.isActivated ? 'Active' : 'Listening for keystrokes...') : 'Not enabled'}
        </div>

        <input placeholder='Type "test" here to trigger the easter egg' />
      </div>

      <button color="secondary" onClick={() => setShowCode(!showCode)}>
        {showCode ? 'Hide' : 'Show'} code
      </button>

      {showCode && code ? (
        <CodeBlock language={language} title={title}>
          {code.trim()}
        </CodeBlock>
      ) : null}
    </div>
  )
}

export default EasterEggDemo
