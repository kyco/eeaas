import { Container, Grid, Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Typography variant="h3">404 Not Found</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFound
