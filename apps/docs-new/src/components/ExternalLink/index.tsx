import { ExternalLink } from 'lucide-react'

type ExternalLinkProps = {
  text: string
  url: string
}

const Component = ({ text, url }: ExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
      <ExternalLink size={12} style={{ marginLeft: '5px' }} />
    </a>
  )
}

export default Component
