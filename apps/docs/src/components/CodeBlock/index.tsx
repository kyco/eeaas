import CheckIcon from '@mui/icons-material/Check'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = {
  code: string
  language: string
  showLineNumbers?: boolean
  sx?: SxProps<Theme>
}

const CodeBlock = ({ code, language, showLineNumbers = true, sx }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 1,
        overflow: 'auto',
        fontSize: 14,
        backgroundColor: '#2d2d2d',
        mb: 3,
        ...sx,
      }}
    >
      <Typography sx={{ color: '#777', fontSize: 12, position: 'absolute', top: 15, right: 50, textAlign: 'right' }}>
        {language}
      </Typography>
      <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
        <IconButton
          onClick={handleCopy}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: copied ? 'success.main' : 'grey.300',
            zIndex: 1,
          }}
          aria-label="copy code"
        >
          {copied ? <CheckIcon /> : <ContentCopyIcon />}
        </IconButton>
      </Tooltip>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '16px',
          backgroundColor: 'transparent',
          fontFamily: "'Fira Code', monospace",
          fontSize: 14,
        }}
        lineNumberStyle={{ color: 'rgba(255,255,255,0.5)', paddingRight: 12 }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  )
}

export default CodeBlock
