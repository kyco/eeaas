import type { Resource, LoadedResource } from '../types'
import { generateResourceId } from './resource_loader_helper'

type RemoteResourceOptions = {
  url: string
  resource: Resource
}

const createDomElement = ({ url, resource }: RemoteResourceOptions): LoadedResource => {
  const id = generateResourceId(resource.type)

  if (resource.type === 'css') {
    const element = Object.assign(document.createElement('link'), {
      href: url,
      rel: 'stylesheet',
      id,
    })
    return { ...resource, id, element }
  }

  const element = Object.assign(document.createElement('script'), {
    src: url,
    id,
  })
  return { ...resource, id, element }
}

export const loadRemoteResource = ({ url, resource }: RemoteResourceOptions): Promise<LoadedResource> => {
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
