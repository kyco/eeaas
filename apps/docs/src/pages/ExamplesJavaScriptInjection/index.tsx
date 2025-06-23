import { Typography } from '@mui/material'

import { EXAMPLES } from '../../common'
import { EasterEggDemo, PageWrapperExamples } from '../../components'
import { eeaas as eeaas1 } from './egg1'
import egg1_code from './egg1?raw'
import { eeaas as eeaas2 } from './egg2'
import egg2_code from './egg2?raw'
import { eeaas as eeaas3 } from './egg3'
import egg3_code from './egg3?raw'

const egg1 = eeaas1.get('JavaScriptInjectionInline')
const egg2 = eeaas2.get('JavaScriptInjectionPath')
const egg3 = eeaas3.get('JavaScriptInjectionUrl')

const JavaScriptInjection = () => {
  return (
    <PageWrapperExamples>
      <Typography variant="h2" gutterBottom>
        {EXAMPLES.JAVASCRIPT_INJECTION.TITLE}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {EXAMPLES.JAVASCRIPT_INJECTION.DESCRIPTION}
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

      {egg3 ? (
        <EasterEggDemo
          egg={egg3}
          title="Example 3: URL import"
          description='Type "test3" to trigger, press "Esc" to cancel. Or use the buttons below.'
          code={egg3_code.trim()}
        />
      ) : null}
    </PageWrapperExamples>
  )
}

export default JavaScriptInjection
