import { Container, Grid } from '@mui/material'
import type { ReactNode } from 'react'

import { Sidebar } from '..'
import { ROUTES } from '../../common'
import type { NavItem } from '../../types'

const navItems: NavItem[] = [
  {
    label: 'Getting started',
    route: ROUTES.DOCS__GETTING_STARTED,
    children: [
      { label: 'Installation', hash: '#installation' },
      { label: 'Installation (without bundler)', hash: '#installation-no-bundler' },
      { label: 'Basic usage', hash: '#basic-usage' },
      { label: 'Building your own egg', hash: '#build-your-own' },
    ],
  },
  {
    label: 'API reference',
    route: ROUTES.DOCS__API_REFERENCE,
    children: [
      { label: 'The eeaas instance', hash: '#eeaas-instance' },
      { label: 'Egg instance', hash: '#egg-instance' },
      { label: 'Egg properties', hash: '#egg-properties' },
    ],
  },
  { label: 'Code examples', route: ROUTES.DOCS__CODE_EXAMPLES },
]

const PageWrapperDocs = ({ children }: { children: ReactNode }) => {
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

export default PageWrapperDocs
