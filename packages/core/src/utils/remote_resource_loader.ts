import type { ResourceType } from '../types'

type RemoteResourceOptions = {
  id: string
  url: string
  type: ResourceType
}

const createDomElement = ({ id, url, type }: RemoteResourceOptions): HTMLLinkElement | HTMLScriptElement => {
  if (type === 'css') {
    return Object.assign(document.createElement('link'), {
      href: url,
      rel: 'stylesheet',
      id,
    })
  }

  return Object.assign(document.createElement('script'), {
    src: url,
    id,
  })
}

export const loadRemoteResource = ({ id, url, type }: RemoteResourceOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    const element = createDomElement({ id, url, type })

    element.onload = () => {
      resolve()
    }
    element.onerror = () => {
      element.remove()
      reject(new Error(`[eeaas] Failed to load resource "${id}" (${type}: ${url})`))
    }

    document.head.appendChild(element)
  })
}
