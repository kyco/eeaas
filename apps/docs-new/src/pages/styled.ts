export const ui = () => {
  return {
    avatar: (secretRevealed = false, clickCount = 0) => {
      return {
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: clickCount > 0 ? `scale(${Math.pow(1.2, clickCount)})` : 'scale(1)',
        backgroundColor: secretRevealed ? '#77dd77' : 'transparent',
        border: '3px solid',
        borderRadius: secretRevealed ? '50px' : 0,
        borderColor: secretRevealed ? '#fff' : 'transparent',
        '&:hover': {
          transform: `scale(${Math.pow(1.2, clickCount)})`,
        },
        zIndex: 1,
      }
    },

    hero(secretRevealed = false, isEven = false) {
      return {
        background: secretRevealed
          ? isEven
            ? `linear-gradient(135deg, var(--hero-stage-1) 0%, var(--hero-stage-2) 50%, var(--hero-stage-3) 100%)`
            : `linear-gradient(135deg, var(--hero-stage-3) 0%, var(--hero-stage-2) 50%, var(--hero-stage-1) 100%)`
          : 'var(--hero-stage-1)',
        transition: 'background 0.5s ease',
      }
    },
  }
}
