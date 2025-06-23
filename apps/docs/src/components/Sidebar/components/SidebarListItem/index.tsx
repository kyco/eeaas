import { Collapse, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useIsMobile } from '../../../../hooks'
import type { NavItem } from '../../../../types'
import SidebarListItemChild from '../SidebarListItemChild'

type SidebarListItemProps = {
  navItem: NavItem
}

const SidebarListItem = ({ navItem }: SidebarListItemProps) => {
  const location = useLocation()
  const isSelected = location.pathname === navItem.route
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isSelected && location.hash === navItem.hash) {
      const element = document.getElementById(navItem.hash.replace('#', ''))
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.hash, navItem.hash, isSelected])

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to={{
            pathname: navItem.route,
            hash: navItem.hash,
          }}
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
          <ListItemText
            primary={navItem.label}
            slotProps={{ primary: { sx: { fontWeight: isSelected ? 'bold' : 'normal' } } }}
          />
        </ListItemButton>
      </ListItem>

      {navItem.children && navItem.children.length ? (
        <Collapse in={isMobile ? isSelected : true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mb: 0.5 }}>
            {navItem.children.map((child) => (
              <SidebarListItemChild
                key={child.hash}
                parent={navItem}
                parentIsSelected={isSelected}
                navItemChild={child}
              />
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  )
}

export default SidebarListItem
