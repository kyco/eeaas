import { ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import type { NavItem, NavItemChild } from '../../../../types'

type SidebarListItemProps = {
  parent: NavItem
  navItemChild: NavItemChild
}

const SidebarListItem = ({ parent, navItemChild }: SidebarListItemProps) => {
  const location = useLocation()
  const isSelected = location.hash === navItemChild.hash

  useEffect(() => {
    if (isSelected) {
      const element = document.getElementById(navItemChild.hash.replace('#', ''))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [navItemChild.hash, isSelected])

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={{
          pathname: parent.route,
          hash: navItemChild.hash,
        }}
        selected={isSelected}
        sx={{
          borderRadius: 1,
          py: 0,
          mb: 0.5,
          '&::before': {
            content: '"•"',
          },
        }}
      >
        <ListItemText primary={navItemChild.label} slotProps={{ primary: { sx: { pl: 1, fontSize: 13 } } }} />
      </ListItemButton>
    </ListItem>
  )
}

export default SidebarListItem
