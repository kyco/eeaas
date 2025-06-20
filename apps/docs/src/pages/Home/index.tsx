import { ArrowForward, Code, GitHub, Security, Speed } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { MISC } from '../../common'
import { useFileSizeInfo } from '../../hooks/useFileSizeInfo'

const Home = () => {
  const { uncompressed, gzipped } = useFileSizeInfo(MISC.UNPKG_URL)

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: '#6366f1', color: 'white', py: { xs: 8, md: 6 }, textAlign: 'center' }}>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar src="/logo-512x512-transparent.png" variant="rounded" sx={{ width: 100, height: 100 }} />
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, fontWeight: 700, mt: 2, mb: 3 }}
          >
            Easter eggs as a service
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, opacity: 0.9, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
            A zero-dependency library to inject easter eggs into any app or website.
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, opacity: 0.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            Built with modern JavaScript.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button
              component={Link}
              to="/examples"
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              View Examples
            </Button>
            <Button
              href="https://github.com/kyco/eeaas"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              View on GitHub
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2, fontSize: { xs: '1.75rem', sm: '2rem' } }}>
          Why?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: 'center', mb: 6, maxWidth: 800, mx: 'auto' }}
        >
          I once nearly got fired for adding easter eggs to a production app.
          <br />
          <br />
          {/* Unfortunately, the easter eggs never got to see the light of day. */}
          This library not only helps you keep the easter egg code out of the production code you ship to your users,
          but it also makes it really easy to add them to any project.
          <br />
          <br />
          Easter eggs make apps and websites more fun, so go ahead and add them.
        </Typography>

        <Grid container spacing={4}>
          <Grid size={4}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <Speed sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Zero Dependencies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pure JavaScript implementation with no external dependencies.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  <strong>{gzipped}kB</strong> / {uncompressed}kB (uncompressed)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Safe & Secure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Designed to be non-intrusive and safe without affecting your app's performance.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  All features are opt-in.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card sx={{ height: '100%', textAlign: 'center' }}>
              <CardContent sx={{ p: 4 }}>
                <Code sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" gutterBottom>
                  Easy Integration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Simple API that works with any framework, even stock standard JavaScript and HTML.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  No fancy tools required.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h4" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, margin: '0 auto' }}>
            Explore examples to see different types of easter eggs in action. Each example demonstrates a different
            technique and use case.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 4 }}
          >
            <Button
              component={Link}
              to="/examples"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              disableElevation
            >
              Explore Examples
            </Button>
            <Button component={Link} to="/docs/getting-started" variant="outlined" size="large" startIcon={<Code />}>
              Documentation
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
