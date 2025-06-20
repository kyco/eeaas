import { Box, Container, Link, Typography } from '@mui/material'

import { EXTERNAL_ROUTES } from '../../../../common'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'grey.50', borderTop: 1, borderColor: 'grey.200', py: 2, mt: 'auto' }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          Brought to you by{' '}
          <Link href={EXTERNAL_ROUTES.KYCO} target="_blank" rel="noopener noreferrer" color="primary">
            kyco
          </Link>
          .
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
