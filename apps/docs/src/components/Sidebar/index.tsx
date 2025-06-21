import { List, ListSubheader, Paper, Typography } from '@mui/material'

import type { NavItem } from '../../types'
import { SidebarListItem } from './components'

type SidebarProps = {
  title: string
  navItems: NavItem[]
}

const Sidebar = ({ title, navItems = [] }: SidebarProps) => {
  return (
    <Paper
      sx={{
        py: 1,
        px: 2,
        position: 'sticky',
        top: 88,
      }}
    >
      <List
        component="nav"
        dense
        subheader={
          <ListSubheader
            component={Typography}
            id="nested-list-subheader"
            sx={{ fontWeight: 600, fontSize: 12 }}
            variant="overline"
          >
            {title}
          </ListSubheader>
        }
      >
        {navItems.map((item) => {
          return <SidebarListItem key={item.route} navItem={item} />
        })}
      </List>
    </Paper>
  )
}

export default Sidebar
