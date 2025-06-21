import { ArrowForward, Code, GitHub, Security, Speed } from '@mui/icons-material'
import { Avatar, Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import { EXTERNAL_ROUTES, ROUTES } from '../../common'
import { useFileSizeInfo } from '../../hooks/useFileSizeInfo'
import { ui } from './styled'

const logo = `${import.meta.env.VITE_REACT_DEMO_SITE_BASENAME}/logo-512x512-transparent.png`

const Home = () => {
  const theme = useTheme()
  const sx = ui(theme)
  const { uncompressed, gzipped } = useFileSizeInfo(EXTERNAL_ROUTES.UNPKG_URL)

  return (
    <>
      <Box sx={sx.hero}>
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar src={logo} variant="rounded" sx={{ width: 100, height: 100 }} />
          <Typography variant="h1" sx={sx.heading}>
            Easter eggs as a service
          </Typography>
          <Typography variant="h5" sx={sx.subheading}>
            A zero-dependency library to inject easter eggs into any app or website.
          </Typography>
          <Typography variant="body1" sx={sx.blurb}>
            Built with modern JavaScript.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
            <Button
              component={Link}
              to={ROUTES.EXAMPLES__CSS_INJECTION}
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              sx={sx.cta}
            >
              View Examples
            </Button>
            <Button
              href={EXTERNAL_ROUTES.GITHUB_EEAAS}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              sx={sx.cta}
            >
              View on GitHub
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid size={12}>
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
              This library not only helps you keep the easter egg code out of the production code you ship to your
              users, but it also makes it really easy to add them to any project.
              <br />
              <br />
              Easter eggs make apps and websites more fun, so go ahead and add them.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={sx.card}>
              <Speed sx={sx.cardIcon} />
              <Typography variant="h5" gutterBottom>
                Zero Dependencies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pure JavaScript implementation with no external dependencies.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                <strong>{gzipped}kB</strong> / {uncompressed}kB (uncompressed)
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={sx.card}>
              <Security sx={sx.cardIcon} />
              <Typography variant="h5" gutterBottom>
                Safe & Secure
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Designed to be non-intrusive and safe without affecting your app's performance.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                All features are opt-in.
              </Typography>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Card sx={sx.card}>
              <Code sx={sx.cardIcon} />
              <Typography variant="h5" gutterBottom>
                Easy Integration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Simple API that works with any framework, even stock standard JavaScript and HTML.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                No fancy tools required.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Grid size={12} sx={{ textAlign: 'center', mt: 8 }}>
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
              to={ROUTES.EXAMPLES__CSS_INJECTION}
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              disableElevation
            >
              Explore Examples
            </Button>
            <Button
              component={Link}
              to={ROUTES.DOCS__GETTING_STARTED}
              variant="outlined"
              size="large"
              startIcon={<Code />}
            >
              Documentation
            </Button>
          </Stack>
        </Grid>
      </Container>
    </>
  )
}

export default Home
