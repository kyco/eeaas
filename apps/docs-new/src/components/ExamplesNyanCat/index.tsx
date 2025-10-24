// @ts-expect-error: cannot find module
import egg1_code from '!!raw-loader!@site/src/components/ExamplesNyanCat/egg1.ts'

import EasterEggDemo from '../EasterEggDemo'
import { eeaas as eeaas1 } from './egg1'

const egg1 = eeaas1.get('Nyancat')

const ExamplesNyanCat = () => {
  if (!egg1) {
    return null
  }

  return (
    <EasterEggDemo
      egg={egg1}
      title="Nyancat"
      description='Type "test" to trigger, press "Esc" to cancel. Or use the buttons below.'
      code={egg1_code}
      language="typescript"
    />
  )
}

export default ExamplesNyanCat
