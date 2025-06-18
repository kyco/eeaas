import { eeaas } from '../main'

const App = () => {
  const triggerTest = async () => {
    const egg = eeaas.get('test')
    egg?.start()
  }

  const stopTest = async () => {
    const egg = eeaas.get('test')
    egg?.stop()
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 10px' }}>
      <h1>Easter eggs as a service</h1>
      <p>A zero-dependency library to inject easter eggs into any app or website.</p>
      <p>Built with modern JavaScript.</p>

      <p style={{ marginBottom: '20px' }}>
        <a href="https://www.npmjs.com/package/@eeaas/core" target="_blank" rel="noopener noreferrer">
          Docs
        </a>
      </p>

      <fieldset style={{ paddingBottom: '20px' }}>
        <legend style={{ padding: '0 10px', fontWeight: 'bold' }}>Example 1</legend>
        <p>Type "test" anywhere, press "Esc" to cancel.</p>
        <div style={{ marginBottom: '15px' }}>
          <button onClick={triggerTest}>Trigger test</button>
          <button onClick={stopTest} style={{ marginLeft: '5px' }}>
            Stop test
          </button>
        </div>
        <input type="text" placeholder='Type "test" here' />
        <blockquote>This egg injects custom CSS into the DOM.</blockquote>
      </fieldset>

      <small style={{ display: 'block', marginTop: '20px' }}>
        Brought to you by{' '}
        <a href="https://kyco.io/" target="_blank" rel="noopener noreferrer">
          kyco
        </a>
        .
      </small>
    </div>
  )
}

export default App
