import { Resource } from '../types'
import { loadRemoteResource } from './remote_resource_loader'

const loadedResources = new Set<string>()

const isValidResource = (resource: Resource) => {
  return (
    !!(resource.id && resource.url && !resource.path && !resource.content) ||
    !!(resource.id && !resource.url && resource.path && !resource.content) ||
    !!(resource.id && !resource.url && !resource.path && resource.content)
  )
}

const loadCss = async (resource: Resource): Promise<void> => {
  if (!isValidResource(resource)) {
    console.error('[eeaas] Invalid resource! Must have an id and either url, path, or content.')
    return
  }
  if (loadedResources.has(resource.id)) {
    return
  }

  if (resource.url) {
    await loadRemoteResource({ type: 'css', url: resource.url, id: resource.id })
  } else if (resource.path) {
    await loadRemoteResource({ type: 'css', url: resource.path, id: resource.id })
  } else if (resource.content) {
    const style = document.createElement('style')
    style.id = resource.id
    style.textContent = resource.content
    document.head.appendChild(style)
  }

  loadedResources.add(resource.id)
}

const loadScript = async (resource: Resource): Promise<void> => {
  if (!isValidResource(resource)) {
    console.error('[eeaas] Invalid resource! Must have an id and either url, path, or content.')
    return
  }
  if (loadedResources.has(resource.id)) {
    return
  }

  if (resource.url) {
    await loadRemoteResource({ type: 'script', url: resource.url, id: resource.id })
  } else if (resource.path) {
    await loadRemoteResource({ type: 'script', url: resource.path, id: resource.id })
  } else if (resource.content) {
    const script = document.createElement('script')
    script.id = resource.id
    script.textContent = resource.content
    document.body.appendChild(script)
  }

  loadedResources.add(resource.id)
}

export const loadResources = async (resources: Resource[]): Promise<void> => {
  if (!resources || !resources.length) {
    return
  }
  const cssResources = resources.filter((resource) => resource.type === 'css')
  const scriptResources = resources.filter((resource) => resource.type === 'script')

  const promises = [
    ...cssResources.map((resource) => loadCss(resource)),
    ...scriptResources.map((resource) => loadScript(resource)),
  ]

  await Promise.all(promises)
}

const removeResource = (resource: Resource) => {
  const element = document.getElementById(resource.id)

  if (element) {
    element.remove()
    loadedResources.delete(resource.id)
  }
}

export const removeResources = (resources: Resource[]) => {
  if (!resources || !resources.length) {
    return
  }
  resources.forEach(removeResource)
}
