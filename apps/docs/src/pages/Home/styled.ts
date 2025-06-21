import type { Theme } from '@mui/material/styles'

export const ui = (theme: Theme) => {
  return {
    hero: {
      background: '#6366f1',
      color: 'white',
      py: { xs: 8, md: 6 },
      textAlign: 'center',
    },

    heading: {
      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
      fontWeight: 700,
      mt: 2,
      mb: 3,
    },

    subheading: {
      mb: 2,
      opacity: 0.9,
      fontSize: { xs: '1.1rem', sm: '1.25rem' },
    },

    blurb: {
      mb: 5,
      opacity: 0.8,
      fontSize: { xs: '0.9rem', sm: '1rem' },
    },

    cta: {
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
    },

    card: {
      height: '100%',
      p: 4,
      textAlign: 'center',
    },

    cardIcon: {
      fontSize: 48,
      color: 'primary.main',
      mb: 2,
    },
  }
}
