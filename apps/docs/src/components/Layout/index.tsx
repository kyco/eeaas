import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from './components'

const Layout = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default Layout
