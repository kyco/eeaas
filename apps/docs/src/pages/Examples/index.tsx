import { ArrowForward, Code } from '@mui/icons-material'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { DOCS, ROUTES } from '../../common'
import { PageWrapperExamples } from '../../components'

const CssInjection = () => {
  return (
    <PageWrapperExamples>
      <Grid container spacing={4}>
        <Grid size={12}>
          <Typography variant="h1" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore different types of easter eggs and learn how to implement them in your own project. Each example
            demonstrates a unique technique with interactive demonstrations and code explanations.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Code sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">CSS Injection</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
              This example demonstrates how to inject custom CSS into the DOM.
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

        <Grid size={12}>
          <Typography variant="h2" gutterBottom>
            {DOCS.GETTING_STARTED.GETTING_STARTED.TITLE}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            The examples are designed to be educational and practical, showing real-world applications of easter egg
            techniques. To get started head on over to the{' '}
            <Link to={ROUTES.DOCS__GETTING_STARTED}>
              Docs {`>`} {DOCS.GETTING_STARTED.GETTING_STARTED.TITLE}
            </Link>{' '}
            section.
          </Typography>
        </Grid>
      </Grid>
    </PageWrapperExamples>
  )
}

export default CssInjection
