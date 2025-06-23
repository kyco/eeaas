import { ArrowForward, Code } from '@mui/icons-material'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'

import { EXAMPLES, ROUTES } from '../../common'
import { PageWrapperExamples } from '../../components'
import { ui } from './styled'

const Examples = () => {
  const theme = useTheme()
  const sx = ui(theme)

  return (
    <PageWrapperExamples>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Typography variant="h1" gutterBottom>
            {EXAMPLES.OVERVIEW.TITLE}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {EXAMPLES.OVERVIEW.DESCRIPTION}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={sx.card}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">{EXAMPLES.NYANCAT.TITLE}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={sx.description}>
              {EXAMPLES.NYANCAT.DESCRIPTION}
            </Typography>
            <Button
              component={Link}
              to={ROUTES.EXAMPLES__NYANCAT}
              variant="contained"
              endIcon={<ArrowForward />}
              fullWidth
              disableElevation
            >
              View Example
            </Button>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={sx.card}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">{EXAMPLES.SNAKE.TITLE}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={sx.description}>
              {EXAMPLES.SNAKE.DESCRIPTION}
            </Typography>
            <Button
              component={Link}
              to={ROUTES.EXAMPLES__SNAKE}
              variant="contained"
              endIcon={<ArrowForward />}
              fullWidth
              disableElevation
            >
              View Example
            </Button>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={sx.card}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">{EXAMPLES.CSS_INJECTION.TITLE}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={sx.description}>
              {EXAMPLES.CSS_INJECTION.DESCRIPTION}
            </Typography>
            <Button
              component={Link}
              to={ROUTES.EXAMPLES__CSS_INJECTION}
              variant="contained"
              endIcon={<ArrowForward />}
              fullWidth
              disableElevation
            >
              View Example
            </Button>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={sx.card}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">{EXAMPLES.JAVASCRIPT_INJECTION.TITLE}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={sx.description}>
              {EXAMPLES.JAVASCRIPT_INJECTION.DESCRIPTION}
            </Typography>
            <Button
              component={Link}
              to={ROUTES.EXAMPLES__JAVASCRIPT_INJECTION}
              variant="contained"
              endIcon={<ArrowForward />}
              fullWidth
              disableElevation
            >
              View Example
            </Button>
          </Card>
        </Grid>
      </Grid>
    </PageWrapperExamples>
  )
}

export default Examples
