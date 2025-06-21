export type NavItemChild = {
  label: string
  hash: string
}

export type NavItem = {
  label: string
  route: string
  hash?: string
  isActive?: boolean
  children?: NavItemChild[]
}
