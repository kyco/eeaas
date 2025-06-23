import type { Theme } from '@mui/material/styles'

export const ui = (theme: Theme) => {
  return {
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      p: 2,
      justifyContent: 'space-between',
    },

    description: {
      fontStyle: 'italic',
      mb: 3,
      flexGrow: 1,
    },
  }
}
