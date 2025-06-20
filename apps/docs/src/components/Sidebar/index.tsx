import { List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import type { NavItem } from '../../types'

type SidebarProps = {
  title: string
  navItems: NavItem[]
}

const Sidebar = ({ title, navItems = [] }: SidebarProps) => {
  const location = useLocation()

  return (
    <Paper
      sx={{
        p: 2,
        position: 'sticky',
        top: 88,
        height: 'fit-content',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontWeight: 600,
          color: 'text.secondary',
          mb: 1,
          display: 'block',
        }}
      >
        {title}
      </Typography>

      <List dense>
        {navItems.map((item) => {
          const isSelected = location.pathname === item.route

          return (
            <ListItem key={item.route} disablePadding>
              <ListItemButton
                component={Link}
                to={item.route}
                selected={isSelected}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}

export default Sidebar
