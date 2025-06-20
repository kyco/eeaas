import { Box, Paper, Typography } from '@mui/material'

type CodeBlockProps = {
  children: string
  language?: string
}

const CodeBlock = ({ children, language = 'javascript' }: CodeBlockProps) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.50',
        border: 1,
        borderColor: 'grey.200',
        borderRadius: 2,
        overflow: 'hidden',
        my: 3,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          position: 'absolute',
          top: 8,
          right: 12,
          color: 'text.secondary',
          textTransform: 'uppercase',
          fontWeight: 500,
          letterSpacing: 0.5,
          zIndex: 1,
        }}
      >
        {language}
      </Typography>
      <Box
        component="pre"
        sx={{
          p: 2,
          m: 0,
          overflow: 'auto',
          fontSize: '0.875rem',
          lineHeight: 1.5,
          fontFamily: '"Roboto Mono", monospace',
        }}
      >
        <code>{children}</code>
      </Box>
    </Paper>
  )
}

export default CodeBlock
