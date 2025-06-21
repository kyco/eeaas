import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ROUTES } from './common'
import { Layout, ScrollToTop } from './components'
import DocsAPI from './pages/DocsAPI'
import DocsExamples from './pages/DocsCodeExamples'
import DocsGettingStarted from './pages/DocsGettingStarted'
import Examples from './pages/Examples'
import ExamplesCssInjection from './pages/ExamplesCssInjection'
import ExamplesNyanCat from './pages/ExamplesNyanCat'
import ExamplesSnake from './pages/ExamplesSnake'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    // `basename` is needed for gh-pages deployment
    <BrowserRouter basename={import.meta.env.VITE_REACT_DEMO_SITE_BASENAME || '/'}>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.DOCS} element={<Navigate to={ROUTES.DOCS__GETTING_STARTED} replace />} />
          <Route path={ROUTES.DOCS__GETTING_STARTED} element={<DocsGettingStarted />} />
          <Route path={ROUTES.DOCS__API_REFERENCE} element={<DocsAPI />} />
          <Route path={ROUTES.DOCS__CODE_EXAMPLES} element={<DocsExamples />} />
          <Route path={ROUTES.EXAMPLES} element={<Examples />} />
          <Route path={ROUTES.EXAMPLES__CSS_INJECTION} element={<ExamplesCssInjection />} />
          <Route path={ROUTES.EXAMPLES__NYANCAT} element={<ExamplesNyanCat />} />
          <Route path={ROUTES.EXAMPLES__SNAKE} element={<ExamplesSnake />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
