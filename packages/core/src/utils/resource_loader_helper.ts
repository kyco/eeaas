import { Resource } from '../types'

let globalResourceCounter = 0

export const generateResourceId = (type: 'css' | 'script'): string => {
  globalResourceCounter += 1
  return `eeaas_${type}__${globalResourceCounter}}`
}

export const isValidResource = (resource: Resource) => {
  return !!(resource.url && !resource.content) || !!(!resource.url && resource.content)
}
