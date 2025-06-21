import { LoadedResource, ResourceWithId } from '../types'
import { loadRemoteResource } from './remote_resource_loader'
import { isValidResource } from './resource_loader_helper'

const loadCss = async (resource: ResourceWithId): Promise<LoadedResource | null> => {
  if (resource.url) {
    return await loadRemoteResource({ resource, url: resource.url })
  } else if (resource.content) {
    const style = document.createElement('style')
    style.id = resource.id
    style.textContent = resource.content
    document.head.appendChild(style)
    return { ...resource, id: style.id, element: style }
  }
  return null
}

const loadScript = async (resource: ResourceWithId): Promise<LoadedResource | null> => {
  if (resource.url) {
    return await loadRemoteResource({ resource, url: resource.url })
  } else if (resource.content) {
    const script = document.createElement('script')
    script.id = resource.id
    script.textContent = resource.content
    document.body.appendChild(script)
    return { ...resource, id: script.id, element: script }
  }
  return null
}

export const loadResources = async (resources: ResourceWithId[]): Promise<LoadedResource[]> => {
  if (!resources.length) {
    return []
  }

  const validResources = resources.filter((resource) => {
    if (!isValidResource(resource)) {
      console.error('[eeaas] Invalid resource! Must have either url or content.')
      return false
    }
    return true
  })

  const cssResources = validResources.filter((resource) => resource.type === 'css')
  const scriptResources = validResources.filter((resource) => resource.type === 'script')
  const promises = [
    ...cssResources.map((resource) => loadCss(resource)),
    ...scriptResources.map((resource) => loadScript(resource)),
  ]

  const loadedResources = await Promise.all(promises)
  return loadedResources.filter((resource) => resource !== null)
}

export const removeResources = (resources: LoadedResource[]) => {
  if (!resources.length) {
    return
  }

  resources.forEach((resource) => {
    const element = document.getElementById(resource.id)
    if (element) {
      element.remove()
    }
  })
}
