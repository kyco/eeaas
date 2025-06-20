import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ROUTES } from './common'
import { Layout, ScrollToTop } from './components'
import DocsAPI from './pages/docs/API'
import DocsGettingStarted from './pages/docs/GettingStarted'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.DOCS} element={<Navigate to={ROUTES.DOCS__GETTING_STARTED} replace />} />
          <Route path={ROUTES.DOCS__GETTING_STARTED} element={<DocsGettingStarted />} />
          <Route path={ROUTES.DOCS__API_REFERENCE} element={<DocsAPI />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
