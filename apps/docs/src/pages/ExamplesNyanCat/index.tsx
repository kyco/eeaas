import { Typography } from '@mui/material'

import { EasterEggDemo, PageWrapperExamples } from '../../components'
import { eeaas } from '../../utils/eeaas'
import egg1_code from './egg1?raw'

import './egg1'

const egg1 = eeaas.get('Nyancat')

const CssInjection = () => {
  return (
    <PageWrapperExamples>
      <Typography variant="h2" gutterBottom>
        Nyancat
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        This easter egg will turn your cursor into nyancat in the night.
      </Typography>

      {egg1 ? (
        <EasterEggDemo
          egg={egg1}
          title="Nyancat"
          description='Type "test" to trigger, press "Esc" to cancel. Or use the buttons below.'
          code={egg1_code.trim()}
          language="typescript"
        />
      ) : null}
    </PageWrapperExamples>
  )
}

export default CssInjection
