import { Resource } from '../types'

export const generateResourceId = (type: 'css' | 'script'): string => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 10)
  return `eeaas_${type}_${timestamp}_${random}`
}

export const isValidResource = (resource: Resource) => {
  return !!(resource.url && !resource.content) || !!(!resource.url && resource.content)
}
