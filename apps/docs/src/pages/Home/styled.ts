import type { Theme } from '@mui/material/styles'

export const ui = (theme: Theme) => {
  return {
    hero(secretRevealed = false, isEven = false) {
      return {
        position: 'relative',
        background: secretRevealed
          ? isEven
            ? `linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)`
            : `linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%)`
          : '#6366f1',
        color: 'white',
        py: { xs: 8, md: 6 },
        textAlign: 'center',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
      }
    },

    avatar(secretRevealed = false, clickCount = 0) {
      return {
        width: 100,
        height: 100,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: clickCount > 0 ? `scale(${Math.pow(1.2, clickCount)})` : 'scale(1)',
        backgroundColor: secretRevealed ? '#77dd77' : 'transparent',
        border: 3,
        borderColor: secretRevealed ? '#fff' : 'transparent',
        '&:hover': {
          transform: `scale(${Math.pow(1.2, clickCount)})`,
        },
        zIndex: 1,
      }
    },

    resetButton: {
      position: 'absolute',
      bottom: 42,
      zIndex: 2,
      border: '5px solid #fff',
      borderRadius: 100,
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
