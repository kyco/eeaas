let counter = 0

export const generateResourceId = (type: 'css' | 'script'): string => {
  counter += 1
  return `eeaas-${type}-${counter}`
}
