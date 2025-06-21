import { Typography } from '@mui/material'

import { EasterEggDemo, PageWrapperExamples } from '../../components'
import { eeaas } from '../../utils/eeaas'
import egg1_code from './egg1?raw'
import egg2_code from './egg2?raw'

import './egg1'
import './egg2'

const egg1 = eeaas.get('CssInjectionInline')
const egg2 = eeaas.get('CssInjectionPath')

const CssInjection = () => {
  return (
    <PageWrapperExamples>
      <Typography variant="h2" gutterBottom>
        CSS Injection
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        This example demonstrates how to inject custom CSS into the DOM.
      </Typography>

      {egg1 ? (
        <EasterEggDemo
          egg={egg1}
          title="Example 1: Inline"
          description='Type "test" to trigger, press "Esc" to cancel. Or use the buttons below.'
          code={egg1_code.trim()}
        />
      ) : null}

      {egg2 ? (
        <EasterEggDemo
          egg={egg2}
          title="Example 2: Local path"
          description='Type "test2" to trigger, press "Esc" to cancel. Or use the buttons below.'
          code={egg2_code.trim()}
        />
      ) : null}
    </PageWrapperExamples>
  )
}

export default CssInjection
