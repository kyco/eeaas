import { eeaas } from '../main'

const App = () => {
  const triggerEgg = async () => {
    const egg = eeaas.get('test')
    console.log('egg', egg)
    egg?.start()
  }

  return (
    <div>
      <h3>react-demo</h3>
      <div>
        <button onClick={triggerEgg}>Trigger easter egg</button>
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  )
}

export default App
