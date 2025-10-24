// @ts-expect-error: cannot find module
import egg1_code from '!!raw-loader!@site/src/components/ExamplesJavaScriptInjection/egg1.ts'
// @ts-expect-error: cannot find module
import egg2_code from '!!raw-loader!@site/src/components/ExamplesJavaScriptInjection/egg2.ts'
// @ts-expect-error: cannot find module
import egg3_code from '!!raw-loader!@site/src/components/ExamplesJavaScriptInjection/egg3.ts'

import EasterEggDemo from '../EasterEggDemo'
import { eeaas as eeaas1 } from './egg1'
import { eeaas as eeaas2 } from './egg2'
import { eeaas as eeaas3 } from './egg3'

const egg1 = eeaas1.get('JavaScriptInjectionInline')
const egg2 = eeaas2.get('JavaScriptInjectionPath')
const egg3 = eeaas3.get('JavaScriptInjectionUrl')

const ExamplesJavaScriptInjection = () => {
  if (!egg1 || !egg2 || !egg3) {
    return null
  }

  return (
    <>
      <EasterEggDemo egg={egg1} title="js-inline.ts" code={egg1_code} />
      <EasterEggDemo egg={egg2} title="js-path.ts" code={egg2_code} trigger="test2" />
      <EasterEggDemo egg={egg3} title="js-url.ts" code={egg3_code} trigger="test3" />
    </>
  )
}

export default ExamplesJavaScriptInjection
