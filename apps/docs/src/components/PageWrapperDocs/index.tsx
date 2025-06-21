import { Container, Grid } from '@mui/material'
import type { ReactNode } from 'react'

import { DOCS, ROUTES } from '../../common'
import type { NavItem } from '../../types'
import Sidebar from '../Sidebar'

const navItems: NavItem[] = [
  {
    label: 'Getting started',
    route: ROUTES.DOCS__GETTING_STARTED,
    hash: `#${DOCS.GETTING_STARTED.GETTING_STARTED.ID}`,
    children: [
      {
        label: DOCS.GETTING_STARTED.INSTALLATION.TITLE,
        hash: `#${DOCS.GETTING_STARTED.INSTALLATION.ID}`,
      },
      {
        label: DOCS.GETTING_STARTED.BASIC_USAGE.TITLE,
        hash: `#${DOCS.GETTING_STARTED.BASIC_USAGE.ID}`,
      },
      {
        label: DOCS.GETTING_STARTED.BUILDING_YOUR_OWN.TITLE,
        hash: `#${DOCS.GETTING_STARTED.BUILDING_YOUR_OWN.ID}`,
      },
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
  // { label: 'Code examples', route: ROUTES.DOCS__CODE_EXAMPLES },
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
