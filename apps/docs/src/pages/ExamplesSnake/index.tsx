import { Typography } from '@mui/material'

import { EasterEggDemo, PageWrapperExamples } from '../../components'
import { eeaas } from '../../utils/eeaas'
import egg1_code from './egg1?raw'

import './egg1'

const egg1 = eeaas.get('Snake')

const CssInjection = () => {
  return (
    <PageWrapperExamples>
      <Typography variant="h2" gutterBottom>
        Snake
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        This easter egg will launch a snake game.
      </Typography>

      {egg1 ? (
        <EasterEggDemo
          egg={egg1}
          title="Snake"
          description='Type "test" to trigger, press "Esc" to cancel. Or use the buttons below.'
          code={egg1_code.trim()}
          language="typescript"
        />
      ) : null}
    </PageWrapperExamples>
  )
}

export default CssInjection
