import { Collapse, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

import type { NavItem } from '../../../../types'
import SidebarListItemChild from '../SidebarListItemChild'

type SidebarListItemProps = {
  navItem: NavItem
}

const SidebarListItem = ({ navItem }: SidebarListItemProps) => {
  const location = useLocation()
  const isSelected = location.pathname === navItem.route

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          component={Link}
          to={navItem.route}
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
        <Collapse in={isSelected} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ mb: 0.5 }}>
            {navItem.children.map((child) => (
              <SidebarListItemChild key={child.hash} parent={navItem} navItemChild={child} />
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  )
}

export default SidebarListItem
