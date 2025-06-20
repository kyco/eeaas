import { Container, Grid } from '@mui/material'
import type { ReactNode } from 'react'

import { ROUTES } from '../../common'
import { Sidebar } from '../../components'
import type { NavItem } from '../../types'

const navItems: NavItem[] = [
  {
    label: 'Getting Started',
    route: ROUTES.DOCS__GETTING_STARTED,
    children: [
      { label: 'Quick Start', hash: '#quick-start' },
      { label: 'Installation', hash: '#installation' },
    ],
  },
  { label: 'API Reference', route: ROUTES.DOCS__API_REFERENCE },
  { label: 'Code Examples', route: ROUTES.DOCS__CODE_EXAMPLES },
]

const DocsPageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Sidebar title="Documentation" navItems={navItems} />
        </Grid>
        <Grid size={{ xs: 12, sm: 9 }}>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default DocsPageWrapper
