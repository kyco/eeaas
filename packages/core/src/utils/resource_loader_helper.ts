import { Resource, ResourceWithId, UserEgg } from '../types'

export const generateResourceWithId = (userEgg: UserEgg, resource: Resource, index: number): ResourceWithId => {
  return {
    ...resource,
    id: `eeaas_${userEgg.name}_${resource.type}_${index}`,
  }
}

export const isValidResource = (resource: Resource) => {
  return !!(resource.url && !resource.content) || !!(!resource.url && resource.content)
}

export const isResourceLoaded = (id: string): boolean => {
  return document.getElementById(id) !== null
}
