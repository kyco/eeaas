type Resource = {
  type: 'css' | 'script'
  content?: string // Inline CSS/JS
  url?: string // Local path or external URL to CSS/JS file
}
