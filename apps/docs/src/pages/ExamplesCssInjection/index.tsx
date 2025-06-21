import { Typography } from '@mui/material'

import { EasterEggDemo, PageWrapperExamples } from '../../components'
import { eeaas } from '../../utils/eeaas'
import code from './actions?raw'

import './actions'

const egg1 = eeaas.get('CssInjection')

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
          code={code.trim()}
        />
      ) : null}
    </PageWrapperExamples>
  )
}

export default CssInjection
