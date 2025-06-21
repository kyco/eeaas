import { Container, Grid } from '@mui/material'
import type { ReactNode } from 'react'

import { docsNavItems } from '../../common'
import Sidebar from '../Sidebar'

const PageWrapperDocs = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, sm: 3 }}>
          <Sidebar title="Documentation" navItems={docsNavItems} />
        </Grid>
        <Grid size={{ xs: 12, sm: 9 }}>{children}</Grid>
      </Grid>
    </Container>
  )
}

export default PageWrapperDocs
