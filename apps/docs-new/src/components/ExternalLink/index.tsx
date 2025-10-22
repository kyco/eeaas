import { ExternalLink } from 'lucide-react'

type ExternalLinkProps = {
  title: string
  url: string
}

const Component = ({ title, url }: ExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
      <ExternalLink size={12} style={{ marginLeft: '5px' }} />
    </a>
  )
}

export default Component
