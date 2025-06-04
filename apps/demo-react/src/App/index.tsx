import { eeaas } from '../main'

const App = () => {
  const triggerEgg = async () => {
    const egg = eeaas.get('test')
    console.log('egg', egg)
    egg?.start()
  }

  return (
    <div>
      react-demo
      <button onClick={triggerEgg}>Trigger easter egg</button>
    </div>
  )
}

export default App
