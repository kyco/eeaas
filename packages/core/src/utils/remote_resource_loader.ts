import type { LoadedResource, ResourceWithId } from '../types'

type LoadRemoteResourceProps = {
  url: string
  resource: ResourceWithId
}

const createDomElement = ({ url, resource }: LoadRemoteResourceProps): LoadedResource => {
  if (resource.type === 'css') {
    const element = Object.assign(document.createElement('link'), {
      href: url,
      rel: 'stylesheet',
      id: resource.id,
    })

    return {
      ...resource,
      element,
    }
  }

  const element = Object.assign(document.createElement('script'), {
    src: url,
    id: resource.id,
  })

  return {
    ...resource,
    element,
  }
}

export const loadRemoteResource = ({ url, resource }: LoadRemoteResourceProps): Promise<LoadedResource> => {
  return new Promise((resolve, reject) => {
    const loadedResource = createDomElement({ url, resource })

    loadedResource.element.onload = () => {
      resolve(loadedResource)
    }
    loadedResource.element.onerror = () => {
      loadedResource.element.remove()
      reject(new Error(`[eeaas] Failed to load resource (${resource.type}: ${resource.url})`))
    }

    document.head.appendChild(loadedResource.element)
  })
}
