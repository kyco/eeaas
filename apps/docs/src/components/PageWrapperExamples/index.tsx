import { Container, Grid } from '@mui/material'
import type { ReactNode } from 'react'

import { ROUTES } from '../../common'
import type { NavItem } from '../../types'
import Sidebar from '../Sidebar'

const navItems: NavItem[] = [
  {
    label: 'Overview',
    route: ROUTES.EXAMPLES,
  },
  {
    label: 'CSS Injection',
    route: ROUTES.EXAMPLES__CSS_INJECTION,
  },
  {
    label: 'Nyancat',
    route: ROUTES.EXAMPLES__NYANCAT,
  },
]

const PageWrapperDocs = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Sidebar title="Examples" navItems={navItems} />
        </Grid>
        <Grid size={{ xs: 12, sm: 9 }}>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default PageWrapperDocs
