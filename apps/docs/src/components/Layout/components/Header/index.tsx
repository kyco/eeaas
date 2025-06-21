import { Menu as MenuIcon } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { ROUTES } from '../../../../common'
import { useIsMobile } from '../../../../hooks'
import { getNavItems } from './actions'

const logo = `${import.meta.env.VITE_REACT_DEMO_SITE_BASENAME}logo-512x512-transparent.png`

const Header = () => {
  const location = useLocation()
  const isMobile = useIsMobile()
  const navItems = getNavItems(location.pathname)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography
        component={Link}
        to={ROUTES.HOME}
        sx={{ display: 'block', textDecoration: 'none', color: 'inherit', fontWeight: 'bold', ml: 2, my: 2 }}
      >
        Easter eggs as a service
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.route} selected={item.isActive}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : null}

          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, ml: isMobile ? 0.5 : 0 }}>
            <Avatar component={Link} to={ROUTES.HOME} src={logo} sx={{ mr: 2 }} variant="rounded" />
            <Typography
              component={Link}
              to={ROUTES.HOME}
              sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
            >
              Easter eggs as a service
            </Typography>
          </Box>

          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item.label} component={Link} to={item.route} color="primary">
                  <Typography
                    sx={{
                      color: item.isActive ? 'primary.main' : 'text.primary',
                      borderBottom: item.isActive ? '2px solid' : '2px solid transparent',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Button>
              ))}
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Header
