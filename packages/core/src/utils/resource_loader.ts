import { Resource, LoadedResource } from '../types'
import { loadRemoteResource } from './remote_resource_loader'
import { generateResourceId } from './id_generator'

const globalLoadedResources = new Set<LoadedResource>()

const isValidResource = (resource: Resource) => {
  return !!(resource.url && !resource.content) || !!(!resource.url && resource.content)
}

const loadCss = async (resource: Resource): Promise<LoadedResource | null> => {
  let loadedResource: LoadedResource | null = null

  if (resource.url) {
    loadedResource = await loadRemoteResource({ resource, url: resource.url })
    globalLoadedResources.add(loadedResource)
    return loadedResource
  } else if (resource.content) {
    const style = document.createElement('style')
    style.id = generateResourceId('css')
    style.textContent = resource.content
    document.head.appendChild(style)
    loadedResource = { ...resource, id: style.id, element: style }
    globalLoadedResources.add(loadedResource)
  }

  return loadedResource
}

const loadScript = async (resource: Resource): Promise<LoadedResource | null> => {
  let loadedResource: LoadedResource | null = null

  if (resource.url) {
    loadedResource = await loadRemoteResource({ resource, url: resource.url })
    globalLoadedResources.add(loadedResource)
  } else if (resource.content) {
    const script = document.createElement('script')
    script.id = generateResourceId('script')
    script.textContent = resource.content
    document.body.appendChild(script)
    loadedResource = { ...resource, id: script.id, element: script }
    globalLoadedResources.add(loadedResource)
  }

  return loadedResource
}

export const loadResources = async (resources: Resource[]): Promise<LoadedResource[]> => {
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

const removeResource = (resource: LoadedResource) => {
  const element = document.getElementById(resource.id)

  if (element) {
    element.remove()
    globalLoadedResources.delete(resource)
  }
}

export const removeResources = (resources: LoadedResource[]) => {
  if (!resources.length) {
    return
  }
  resources.forEach(removeResource)
}
