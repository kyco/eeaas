import { ROUTES } from '../../../../common'
import type { NavItem } from '../../../../types'

export const getNavItems = (pathname: string): NavItem[] => {
  return [
    {
      label: 'Home',
      route: ROUTES.HOME,
      isActive: pathname === ROUTES.HOME,
    },
    {
      label: 'Docs',
      route: ROUTES.DOCS__GETTING_STARTED,
      isActive: pathname.startsWith(ROUTES.DOCS),
    },
    {
      label: 'Examples',
      route: ROUTES.EXAMPLES,
      isActive: pathname.startsWith(ROUTES.EXAMPLES),
    },
  ]
}
