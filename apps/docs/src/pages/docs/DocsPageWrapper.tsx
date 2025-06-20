import { Container, Grid } from '@mui/material'
import type { ReactNode } from 'react'

import { ROUTES } from '../../common'
import { Sidebar } from '../../components'

const docs = [
  { label: 'Getting Started', route: ROUTES.DOCS__GETTING_STARTED },
  { label: 'API Reference', route: ROUTES.DOCS__API_REFERENCE },
  // { label: 'Code Examples', route: ROUTES.DOCS__CODE_EXAMPLES },
]

const DocsPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid size={3}>
          <Sidebar title="Documentation" navItems={docs} />
        </Grid>
        <Grid size={9}>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default DocsPageWrapper
